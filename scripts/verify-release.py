"""Independent Work 5 artifact, preservation, metadata and schema inventory. No network."""
import contextlib,io,runpy,json,subprocess,re,xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlsplit
ROOT=Path(__file__).resolve().parents[1]
ctx={'__file__':str(ROOT/'scripts/verify-authority-expansion.py')}
code=(ROOT/'scripts/verify-authority-expansion.py').read_text().replace('sys.exit(bool(ERRORS))','assert not ERRORS, ERRORS')
with contextlib.redirect_stdout(io.StringIO()):exec(compile(code,str(ROOT/'scripts/verify-authority-expansion.py'),'exec'),ctx)
Page=ctx['Page'];library=ctx['library']; fixes=json.loads((ROOT/'docs/work5-metadata-corrections.json').read_text())
base='f36943bc8eecb280f44852ef88a53d1865b871f9'; changed=[]
for name in subprocess.check_output(['git','ls-tree','-r','--name-only',base],cwd=ROOT,text=True).splitlines():
 if name.startswith(('docs/','scripts/','tests/')):continue
 old=subprocess.check_output(['git','show',base+':'+name],cwd=ROOT)
 new=(ROOT/name).read_bytes()
 if new!=old:
  assert name in fixes,name
  f=fixes[name];restored=re.sub(r'(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]+(">)',lambda m:m[1]+f['before']+m[2],new.decode())
  assert restored.encode()==old,name+' changed outside metadata'
  changed.append(name)
assert set(changed)==set(fixes)
metadata=[]
for faq in library['faqs']:
 name=faq['canonical_url'].replace('https://ninz.me/','')+'index.html';p=Page(subprocess.check_output(['git','show',base+':'+name],cwd=ROOT,text=True))
 if p.meta.get('description')!=faq['meta_description']:
  status='corrected' if name in fixes else ('intentional variation' if faq['meta_description'].startswith(('Learn','Plain-language')) else 'harmless variation')
  reason='Malformed/truncated rendered description corrected in all three search/social tags.' if name in fixes else 'Specific rendered page summary is accurate; library description is a broader or shortened catalog summary. Renderer does not overwrite metadata.'
  metadata.append({'faq_id':faq['faq_id'],'path':name,'disposition':status,'reason':reason,'prior_page_description':p.meta.get('description'),'library_description':faq['meta_description']})
assert len(metadata)==29
artifact=ROOT/'dist';pages={str(p.relative_to(artifact)):Page(p.read_text()) for p in artifact.rglob('*.html')};urls=[e.text for e in ET.parse(artifact/'sitemap.xml').findall('{*}url/{*}loc')];assert len(urls)==len(set(urls))==219
for url in urls:
 name=urlsplit(url).path.lstrip('/') or 'index.html';p=artifact/name
 if p.is_dir():p=p/'index.html'
 assert p.is_file(),url
for slug in ['texas','kansas','arkansas','missouri','colorado']:
 assert not (artifact/'business-registration'/slug).exists()
 assert not (artifact/'staging').exists()
 assert all('/'+slug+'/' not in u for u in urls)
assert not (artifact/'docs').exists() and not (artifact/'content').exists()
schemas=sum(len(p.schemas) for p in pages.values());titles=[p.title for p in pages.values()];assert len(titles)==len(set(titles)),'duplicate titles'
for name,p in pages.items():
 if name.startswith('google') and 'google-site-verification:' in (artifact/name).read_text():continue # Verification token, not a content page.
 assert p.h1==1 and p.lang=='en',(name,p.h1,p.lang)
 assert len(p.canonical)==1,name
 assert not p.duplicate_ids,name
 assert not p.missing_alt,name
 assert p.meta.get('og:image')=='https://ninz.me/assets/ninz-social-share.png',name
 for tag in ['og:title','twitter:title']:assert p.meta.get(tag)==p.title,(name,tag)
for f in ['assets/service-customer-information.js','assets/free-resources-data.js','assets/business-registration-data.js','assets/faq-library-data.js']:
 assert (ROOT/f).read_bytes()==subprocess.check_output(['git','show',base+':'+f],cwd=ROOT)
# All 17 resource pages and every linked download exist in generated output.
for r in ctx['resources']['resources']:
 matched=[artifact/r['public_url'].lstrip('/')/'index.html']
 assert matched[0].is_file(),r['resource_id']
 for download in r.get('download_paths',{}).values():assert (artifact/download.lstrip('/')).is_file(),download
 for p in matched:
  for link in Page(p.read_text()).links:
   if '.pdf' in link and not urlsplit(link).netloc:
    assert (artifact/urlsplit(link).path.lstrip('/')).exists() if link.startswith('/') else (p.parent/urlsplit(link).path).exists(),link
report={'baseline':base,'product_files_changed':changed,'protected_product_preserved':True,'public_html_pages':len(pages),'schema_blocks_parsed':schemas,'sitemap_urls':len(urls),'unique_titles':len(set(titles)),'metadata_review':metadata,'staged_content_isolated':True,'resource_entries':17}
(ROOT/'docs/work5-static-qa.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items() if k!='metadata_review'},indent=2))
