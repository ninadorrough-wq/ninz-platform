"""Check branch content integrity, schema, metadata, local links and sitemap.

No network calls or deployments. Uses Python's standard library and Node.
"""
import copy
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parents[1]
BASE = 'd28aa45d21d839d5f21c48a4bbc1c71650631533'
RESOURCE_BASE = 'a5c907909465437d933269bc8dc2f387f688d471'
ERRORS = []
WARNINGS = []
METADATA_DIFFERENCES = []
def check(condition, message):
    if not condition:
        ERRORS.append(message)

def inline_text(value):
    if isinstance(value, list):return ''.join(inline_text(v) for v in value)
    if isinstance(value, dict):return inline_text(value.get('parts',value.get('text','')))
    return str(value)

def normalized(value):return re.sub(r'\s+',' ',inline_text(value)).strip()

def load_js(code, key):
    script="const vm=require('vm'),fs=require('fs');let c={window:{}};vm.runInNewContext(fs.readFileSync(0,'utf8'),c);process.stdout.write(JSON.stringify(c.window[process.argv[1]]));"
    return json.loads(subprocess.check_output(['node','-e',script,key],input=code,text=True))

def original(path):
    return subprocess.check_output(['git','show',f'{BASE}:{path}'],cwd=ROOT,text=True)

library=load_js((ROOT/'assets/faq-library-data.js').read_text(),'NINZ_FAQ_LIBRARY')
old=load_js(original('assets/faq-library-data.js'),'NINZ_FAQ_LIBRARY')
resources=load_js((ROOT/'assets/free-resources-data.js').read_text(),'NINZ_FREE_RESOURCES')
old_resources=load_js(original('assets/free-resources-data.js'),'NINZ_FREE_RESOURCES')
concurrent_resources=load_js(subprocess.check_output(['git','show',RESOURCE_BASE+':assets/free-resources-data.js'],cwd=ROOT,text=True),'NINZ_FREE_RESOURCES')
byid={q['faq_id']:q for q in library['faqs']}
check(len(library['faqs'])==166,'Expected 166 FAQ records')
check(len(library['faqs'])==len(byid),'Duplicate FAQ IDs')
check(len({q['canonical_url'] for q in library['faqs']})==166,'Duplicate FAQ canonical URL')
check(len({q['question'].casefold() for q in library['faqs']})==166,'Duplicate FAQ question')
check(len([c for c in library['categories'] if c['publicly_visible']])==9,'Expected nine public categories')
check(len(resources['resources'])==17,'Expected 17 Free Resource records after concurrent integration')
expected_resources=copy.deepcopy(concurrent_resources['resources'])
organizer=next(r for r in expected_resources if r['resource_id']=='RES-017')
organizer['related_faq_ids'] += ['OPS-%03d'%n for n in range(1,8)]
organizer['related_guide_ids'].append('guide-small-business-bookkeeping-basics')
organizer['related_article_status']='article_prepared_working_branch'
check(resources['resources']==expected_resources,'Unexpected change to concurrent Free Resource records')
check(resources['resources'][:12]==old_resources['resources'],'Original twelve Free Resource records were changed')
for q in old['faqs']:
    expected=copy.deepcopy(q)
    if q['faq_id']=='BUS-012':expected['related_guide_ids'].append('guide-small-business-bookkeeping-basics')
    if q['faq_id']=='AI-052':expected['related_guide_ids'].append('guide-simple-customer-follow-up-system')
    check(byid.get(q['faq_id'])==expected,'Unexpected change to original FAQ '+q['faq_id'])
cats={c['slug']:c for c in library['categories']}
registry={r['resource_id']:r for r in library['resources']}
for q in library['faqs']:
    check(q['category_slug'] in cats,'Missing category '+q['faq_id'])
    check(cats[q['category_slug']]['name']==q['category'],'Category name mismatch '+q['faq_id'])
    for related in q.get('related_faq_ids',[]):check(related in byid,'Missing related FAQ '+q['faq_id']+' -> '+related)
    for related in q.get('related_guide_ids',[])+q.get('related_resource_ids',[]):check(related in registry,'Missing related resource '+q['faq_id']+' -> '+related)

class Page(HTMLParser):
    def __init__(self, content):
        super().__init__(convert_charrefs=True)
        self.ids=set();self.duplicate_ids=[];self.links=[];self.schemas=[];self.meta={};self.canonical=[]
        self.h1=0;self.in_schema=False;self.buf='';self.body={};self.missing_alt=0;self.lang='';self.h2=[];self.in_h2=False;self.h2buf=''
        self.title='';self.in_title=False;self.text=[];self.hidden_depth=0
        self.feed(content)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):
            if a['id'] in self.ids:self.duplicate_ids.append(a['id'])
            self.ids.add(a['id'])
        if tag=='html':self.lang=a.get('lang','')
        if tag=='body':self.body=a
        if tag=='h1':self.h1+=1
        if tag=='title':self.in_title=True
        if tag in ['script','style']:self.hidden_depth+=1
        if tag=='h2':self.in_h2=True;self.h2buf=''
        if tag=='img' and 'alt' not in a:self.missing_alt+=1
        if tag=='meta':self.meta[a.get('name') or a.get('property')]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        for attr in ['href','src','action']:
            if a.get(attr):self.links.append(a[attr])
        if tag=='script' and a.get('type')=='application/ld+json':self.in_schema=True;self.buf=''
    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='h2' and self.in_h2:self.h2.append(self.h2buf);self.in_h2=False
        if tag=='script' and self.in_schema:
            self.schemas.append(json.loads(self.buf));self.in_schema=False
        if tag in ['script','style']:self.hidden_depth-=1
    def handle_data(self,d):
        if self.in_schema:self.buf+=d
        if self.in_h2:self.h2buf+=d
        if self.in_title:self.title+=d
        if not self.hidden_depth:self.text.append(d)

pages={}
for path in ROOT.rglob('*.html'):
    if path.parts[len(ROOT.parts)]=='docs':continue
    rel=path.relative_to(ROOT).as_posix()
    try:pages[rel]=Page(path.read_text())
    except Exception as e:ERRORS.append(f'{rel}: parse/schema error: {e}')

def resolve(url):
    parts=urlsplit(url)
    p=unquote(parts.path).lstrip('/')
    candidate=ROOT/p
    if candidate.is_dir():candidate=candidate/'index.html'
    return candidate,parts.fragment

def link_errors(page_key, page):
    errors=[]
    base='https://ninz.me/'+page_key
    for raw in page.links:
        parts=urlsplit(urljoin(base,raw))
        if parts.scheme not in ['http','https'] or parts.netloc!='ninz.me':continue
        path,fragment=resolve(parts.geturl())
        if not path.is_file():errors.append(f'{page_key}: missing local target {raw}')
        elif fragment and path.suffix=='.html':
            target_key=path.relative_to(ROOT).as_posix()
            if target_key in pages and fragment not in pages[target_key].ids:errors.append(f'{page_key}: missing fragment {raw}')
    return errors

old_paths=set(subprocess.check_output(['git','ls-tree','-r','--name-only',BASE],cwd=ROOT,text=True).splitlines())
for key,page in pages.items():
    problems=link_errors(key,page)
    inherited=[]
    if key in old_paths and problems:
        old_page=Page(original(key))
        inherited=link_errors(key,old_page)
    for problem in problems:
        if problem in inherited:WARNINGS.append(problem)
        else:ERRORS.append(problem)

new_faqs=[q for q in library['faqs'] if q['faq_id'].startswith('OPS-')]
for q in library['faqs']:
    path,_=resolve(q['canonical_url']);key=path.relative_to(ROOT).as_posix()
    check(path.is_file(),'Missing FAQ page '+q['faq_id'])
    if key not in pages:continue
    page=pages[key]
    check(page.body.get('data-faq-id')==q['faq_id'],'FAQ body ID mismatch '+q['faq_id'])
    check(page.canonical==[q['canonical_url']],'FAQ canonical mismatch '+q['faq_id'])
    if q in new_faqs:
        check(page.meta.get('description')==q['meta_description'],'FAQ description mismatch '+q['faq_id'])
        check(page.title==q['meta_title'],'FAQ title mismatch '+q['faq_id'])
        for field in ['og:title','twitter:title']:
            check(page.meta.get(field)==q['meta_title'],field+' mismatch '+q['faq_id'])
    elif page.meta.get('description')!=q['meta_description']:
        check(page.meta.get('description')==Page(original(key)).meta.get('description'),'Introduced original-page metadata mismatch '+q['faq_id'])
        METADATA_DIFFERENCES.append('Inherited metadata differs from library record: '+q['faq_id'])
    entries=[]
    for s in page.schemas:entries.extend(s if isinstance(s,list) else [s])
    faq_schema=next((s for s in entries if s.get('@type')=='FAQPage'),None)
    check(bool(faq_schema),'Missing FAQPage schema '+q['faq_id'])
    if faq_schema:
        entity=faq_schema['mainEntity'][0]
        check(entity['name']==q['question'],'FAQ schema question mismatch '+q['faq_id'])
        check(normalized(entity['acceptedAnswer']['text'])==normalized(q['short_answer']),'FAQ schema answer mismatch '+q['faq_id'])
    if q in new_faqs:
        content=path.read_text()
        visible=normalized(' '.join(page.text))
        def present(value, label):
            check(normalized(value) in visible,'New FAQ static '+label+' missing '+q['faq_id'])
        def blocks_present(blocks, label):
            for block in blocks:
                if block.get('type')=='list':
                    for item in block.get('items',[]):present(item,label+' item')
                else:present(block.get('text',''),label+' block')
        present(q['short_answer'],'answer')
        blocks_present(q['detailed_explanation'],'explanation')
        for item in q['common_misconceptions']:
            present(item['title'],'misconception title')
            present(item['explanation'],'misconception explanation')
        present(q['ninz_insight'],'insight')
        journey=q['continue_your_journey']
        present(journey['heading'],'journey heading')
        present(journey['button_text'],'journey link')
        blocks_present(journey['blocks'],'journey')
        for source in q['sources']:
            for field in ['source_title','source_publisher','source_type','date_accessed','publication_or_update_date']:
                if source.get(field):present(source[field],'source '+field)
            for claim in source.get('supported_claims',[]):present(claim,'source claim')
            check(source['source_url'] in page.links,'New FAQ static source URL missing '+q['faq_id'])
        check('Sources &amp; References' in content or 'Sources & References' in content,'Missing references '+q['faq_id'])
        check(page.h1==1,'Expected one H1 '+q['faq_id'])

new_native=['faq/business-growth-operations/index.html','learning-center/bookkeeping-basics-small-businesses/index.html','learning-center/simple-customer-follow-up-system/index.html','resources/small-business-bookkeeping-basics-organizer/index.html']
for key in new_native+[resolve(q['canonical_url'])[0].relative_to(ROOT).as_posix() for q in new_faqs]:
    page=pages[key]
    check(page.h1==1,key+': expected one H1')
    check(bool(page.lang),key+': missing language')
    check(page.missing_alt==0,key+': image without alt')
    check(not page.duplicate_ids,key+': duplicate HTML IDs')
    check(len(page.canonical)==1,key+': expected one canonical')
    for meta in ['description','og:title','og:description','og:url','twitter:title','twitter:description']:check(bool(page.meta.get(meta)),key+': missing '+meta)
    check(page.meta.get('og:url')==page.canonical[0],key+': OG URL mismatch')

required=['Question','Why It Matters','What You Need to Know','Misconceptions','FAQs','Related Guides','How NINZ Can Help']
for key in new_native[1:3]:
    content=(ROOT/key).read_text()
    labels=re.findall(r'<p class="eyebrow"><span aria-hidden="true"></span>(.*?)</p>',content)
    check([s for s in labels if s in required]==required,key+': wrong article structure')
    check('datePublished' not in content,key+': invented publication date')
for path in (ROOT/'docs/blogger').glob('*.html'):
    headings=re.findall(r'<h2>(.*?)</h2>',path.read_text())
    check(headings==required,str(path)+': wrong Blogger structure')
    page=Page(path.read_text())
    ERRORS.extend(link_errors(str(path.relative_to(ROOT)),page))
for path in (ROOT/'docs/blogger').glob('*.md'):
    content=path.read_text()
    for field in ['Labels','Search/meta description','Permalink slug','Optional location','Publish/schedule','Internal links','Live Blogger URL']:check(field in content,path.name+': missing Blogger setting '+field)

ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls=[e.text for e in ET.parse(ROOT/'sitemap.xml').findall('s:url/s:loc',ns)]
check(len(urls)==len(set(urls)),'Duplicate sitemap URL')
for url in urls:check(resolve(url)[0].is_file(),'Missing sitemap target '+url)
for q in library['faqs']:check(q['canonical_url'] in urls,'FAQ absent from sitemap '+q['faq_id'])
for key in new_native:
    url='https://ninz.me/'+str(Path(key).parent)+'/'
    check(url in urls,'New page absent from sitemap '+url)
for c in library['categories']:
    if c['publicly_visible']:check((ROOT/'faq'/c['slug']/'index.html').is_file(),'Missing public category '+c['slug'])
for key,page in pages.items():
    for raw in page.links:
        if 'faq-library-data.js?v=' in raw:check(raw.endswith('?v=20261004a'),key+': stale FAQ data cache key')

for edition in ['Digital','Print']:
    check((ROOT/f'assets/downloads/NINZ_Small_Business_Bookkeeping_Basics_Organizer_{edition}_v1.0.pdf').is_file(),'Missing organizer '+edition+' PDF')
check(not (ROOT/'resources/small-business-bookkeeping-basics-checklist').exists(),'Duplicate bookkeeping checklist route retained')
print(json.dumps({'faq_records':len(library['faqs']),'public_categories':len([c for c in library['categories'] if c['publicly_visible']]),'free_resources':len(resources['resources']),'download_files':len(list((ROOT/'assets/downloads').iterdir())),'sitemap_urls':len(urls),'html_pages_checked':len(pages),'introduced_errors':ERRORS,'inherited_link_warnings':WARNINGS,'inherited_metadata_differences':METADATA_DIFFERENCES},indent=2))
sys.exit(bool(ERRORS))
