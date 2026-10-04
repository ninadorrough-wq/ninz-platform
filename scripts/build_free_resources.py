#!/usr/bin/env python3
"""Build matching web, fillable digital PDF, and low-ink PDF editions.
Requires reportlab, pypdf, Node.js, and system DejaVu fonts. Content is in JSON.
"""
from pathlib import Path
import json, html, re, subprocess
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color, white, black
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject
ROOT=Path(__file__).resolve().parents[1]
DATA=json.loads((ROOT/'content/free-resources-expansion.json').read_text())['resources']
E=html.escape
GOLD=HexColor('#765514');INK=HexColor('#1E1E1E');CREAM=HexColor('#F9F8F5');LINE=HexColor('#777777')
FONT_DIR=Path('/usr/share/fonts/truetype/dejavu')
for name,file in [('NinzSans','DejaVuSans.ttf'),('NinzBold','DejaVuSans-Bold.ttf'),('NinzSerif','DejaVuSerif-Bold.ttf')]:
 pdfmetrics.registerFont(TTFont(name,str(FONT_DIR/file)))
# The existing resource page supplies the shared header/footer and styles.
BASE=(ROOT/'resources/business-reviews-credibility-checklist/index.html').read_text()
HEADER=re.search(r'<header class="site-header">.*?</header>',BASE,re.S).group()
FOOTER=re.search(r'<footer class="site-footer">.*?</footer>',BASE,re.S).group()
HEAD=BASE.split('<body>')[0]
HEAD=re.sub(r'  <!-- Google tag.*?  <link rel="icon"',r'  <link rel="icon"',HEAD,flags=re.S)
HEAD=HEAD[:HEAD.index('  <script type="application/ld+json">')]
FAQLIB=json.loads(subprocess.check_output(['node','-e',"const fs=require('fs'),vm=require('vm');const c={window:{}};vm.runInNewContext(fs.readFileSync('assets/faq-library-data.js','utf8'),c);process.stdout.write(JSON.stringify(c.window.NINZ_FAQ_LIBRARY));"],cwd=ROOT))
FAQ={f['faq_id']:f for f in FAQLIB['faqs']}
LIB=json.loads((ROOT/'assets/free-resources-data.js').read_text().split('=',1)[1].strip().rstrip(';'))
RELATED={r['resource_id']:r for r in LIB['resources']}
RELATED.update({r['resource_id']:r for r in DATA})

def control_stream(blocks,page_no):
 """Stable IDs are shared by HTML and AcroForm widgets."""
 for bi,b in enumerate(blocks,1):
  prefix=f'p{page_no}_b{bi}'
  if b['type']=='field':yield prefix,b['label'],b['height'],'text',None
  if b['type']=='checks':
   for i,t in enumerate(b['items'],1):yield f'{prefix}_{i}',t,16,'check',None
  if b['type']=='rows':
   for row in range(b['count']):
    for col,t in enumerate(b['columns']):
     yield f'{prefix}_r{row+1}_c{col+1}',f"{b['title']}, row {row+1}: {t}",b['height'],'text',(row,col)
  if b['type']=='calendar':
   for row in range(6):
    for col,day in enumerate(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']):
     yield f'{prefix}_r{row+1}_c{col+1}',f'Week {row+1} {day}: date and event',58,'text',(row,col)

def web_block(b,bi,pi):
 prefix=f'p{pi}_b{bi}';t=b['type']
 if t=='paragraph':return f'<p>{E(b["text"])}</p>'
 if t=='field':
  return f'<div class="working-field"><label for="{prefix}">{E(b["label"])}</label><textarea id="{prefix}" name="{prefix}" rows="{max(2,b["height"]//22)}" maxlength="{max(80,b["height"]*5)}" spellcheck="true"></textarea></div>'
 if t=='checks':
  return '<fieldset class="working-checks"><legend>'+E(b['title'])+'</legend>'+''.join(f'<label for="{prefix}_{i}"><input type="checkbox" id="{prefix}_{i}" name="{prefix}_{i}"><span>{E(text)}</span></label>' for i,text in enumerate(b['items'],1))+'</fieldset>'
 if t=='rows':
  out=f'<fieldset class="working-rows" data-row-count="{b["count"]}"><legend>{E(b["title"])}</legend>'
  for row in range(b['count']):
   out+=f'<div class="working-row"><p class="row-number">Entry {row+1}</p>'
   for col,label in enumerate(b['columns']):
    id=f'{prefix}_r{row+1}_c{col+1}';val=''
    if b['title']=='Plan the week' and col==0:val=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][row]
    out+=f'<div class="working-field"><label for="{id}"><span class="visually-hidden">Entry {row+1}: </span>{E(label)}</label><textarea id="{id}" name="{id}" rows="3" maxlength="{max(65,b["height"]*2)}">{val}</textarea></div>'
   out+='</div>'
  return out+'</fieldset>'
 if t=='calendar':
  out='<div class="month-grid">'
  for row in range(6):
   for col,day in enumerate(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']):
    id=f'{prefix}_r{row+1}_c{col+1}'
    out+=f'<div class="month-cell"><label for="{id}"><span>{day}</span><small>Week {row+1}: date + event</small></label><textarea id="{id}" name="{id}" rows="3" maxlength="70"></textarea></div>'
  return out+'</div>'
 raise ValueError(t)

def card(url,title,desc):return f'<a class="card link-card" href="{E(url)}"><h3>{E(title)}</h3><p>{E(desc)}</p><span class="learn-more">Open resource</span></a>'
def web(r):
 url='https://ninz.me/resources/'+r['slug']+'/'
 head=HEAD
 head=re.sub(r'<title>.*?</title>',f'<title>{E(r["title"])} | NINZ Free Resources</title>',head)
 head=re.sub(r'(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=").*?(">)',lambda m:m[1]+E(r['description'],quote=True)+m[2],head)
 head=re.sub(r'(<meta (?:name|property)="(?:og:title|twitter:title)" content=").*?(">)',lambda m:m[1]+E(r['title'],quote=True)+' | NINZ Free Resources'+m[2],head)
 head=head.replace('https://ninz.me/resources/business-reviews-credibility-checklist/',url)
 schema=[{'@context':'https://schema.org','@type':'WebPage','name':r['title'],'url':url,'description':r['description'],'dateModified':r['reviewed'],'isPartOf':{'@type':'WebSite','name':'NINZ','url':'https://ninz.me/'},'publisher':{'@type':'Organization','name':'NINZ','url':'https://ninz.me/'}},{'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':i+1,'name':name,'item':item} for i,(name,item) in enumerate([('Home','https://ninz.me/'),('Free Resources','https://ninz.me/resources/'),(r['title'],url)])]}]
 for edition in ['Digital','Print']:
  schema[0].setdefault('hasPart',[]).append({'@type':'DigitalDocument','name':r['title']+' - '+edition+' edition','url':'https://ninz.me/assets/downloads/'+r['filename_stem']+'_'+edition+'_v1.0.pdf','encodingFormat':'application/pdf'})
 head+='  <link rel="stylesheet" href="../../assets/resource-working-tools.css">\n  <script type="application/ld+json">'+json.dumps(schema).replace('</','<\\/')+'</script>\n</head>\n'
 main=f'''<main id="main" class="working-resource">
<section class="interior-hero"><nav class="eyebrow" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/resources/">Free Resources</a></nav><h1>{E(r['title'])}</h1><p class="subheadline">{E(r['description'])}</p></section>
<section class="quick-answer interior-quick" aria-labelledby="resource-use"><h2 id="resource-use">Use the format that fits your work.</h2><p>{E(r['how_to_use'])}</p><div class="edition-grid">'''
 for edition,label,desc in [('Digital','Fillable Digital Edition','For screen use. Download first, open in a PDF reader that supports forms, and save a copy after entering your information. Long entries may scroll within a field; keep entries concise and check print preview.'),('Print','Print-Friendly Edition','For handwriting and low-ink or grayscale printing. The same working pages, with open writing space and no interactive form fields.')]:
  file=r['filename_stem']+'_'+edition+'_v1.0.pdf'
  main+=f'<article class="edition-card"><h3>{label}</h3><p>{desc}</p><a class="btn primary" href="../../assets/downloads/{file}" download aria-label="Download {E(r["title"])} {label} PDF">Download {label}</a></article>'
 main+='</div></section>'
 main+=f'''<section class="resource-layout" aria-labelledby="work-online"><h2 id="work-online">Work through the tool online.</h2><p id="form-help">Web entries stay in this page for the current visit and are not automatically saved. This tool has no submission feature. Use Print to keep a copy, or use the fillable PDF for saved work. Keep notes concise and avoid sensitive information.</p><div class="resource-toolbar"><button class="btn secondary" type="button" data-resource-print>Print your working pages</button><button class="btn secondary" type="button" data-resource-reset>Clear entries</button></div><p class="working-status" role="status" aria-live="polite"></p><form id="resource-form" autocomplete="off" aria-describedby="form-help"><p class="print-title">{E(r['title'])} | NINZ.me</p>'''
 for pi,p in enumerate(r['pages'],1):
  main+=f'<section class="working-page" aria-labelledby="page-{pi}"><p class="working-page-number">Working page {pi} of {len(r["pages"])}</p><h2 id="page-{pi}">{E(p["title"])}</h2><p>{E(p["intro"])}</p>'
  main+=''.join(web_block(b,bi,pi) for bi,b in enumerate(p['blocks'],1))+'</section>'
 main+='</form></section>'
 related=''.join(card('/resources/'+RELATED[id]['slug']+'/',RELATED[id]['title'],RELATED[id]['description']) for id in r['related_resource_ids'])
 main+='<section class="section resource-connections"><h2>Related working tools</h2><div class="card-grid">'+related+'</div></section>'
 main+='<section class="section resource-connections"><h2>Understand the related questions</h2><div class="card-grid">'
 for id in r['related_faq_ids']:
  f=FAQ[id];main+=card('/faq/'+f['category_slug']+'/'+f['slug']+'/',f['question'],'Read the related NINZ FAQ.')
 main+='</div><p><a href="/learning-center.html#resource-planning-tools">Continue in the Learning Center</a> for connected education and tools.</p></section>'
 if r['resource_id']=='RES-013':
  main+='<section class="section resource-connections"><h2>When you want individualized help</h2><p>Review the <a href="/solutions.html#ai-visibility-assessment">NINZ AI Visibility Assessment</a> solution description. This free checklist provides general upkeep actions; the paid service is a separate option.</p></section>'
 if r['sources']:
  main+='<section class="section resource-sources"><h2>Official guidance</h2><ul>'+''.join(f'<li><a href="{E(s["url"])}">{E(s["title"])}</a></li>' for s in r['sources'])+'</ul><p>Sources checked October 4, 2026. Review current guidance before relying on platform or recordkeeping requirements.</p></section>'
 main+=f'<section class="section resource-disclaimer"><h2>Educational use</h2><p>{E(r["disclaimer"])}</p><p>Version 1.0 | October 2026. For personal or internal business use. Not for resale or rebranding.</p></section></main>'
 return head+'<body>\n<a class="skip-link" href="#main">Skip to content</a>'+HEADER+main+FOOTER+'<script src="../../assets/main.js?v=20260828a"></script><script src="../../assets/resource-working-tools.js"></script></body></html>\n'

def paragraph(c,text,y,width=524,font='NinzSans',size=10.2,color=INK,x=44):
 style=ParagraphStyle('body',fontName=font,fontSize=size,leading=size*1.35,textColor=color)
 p=Paragraph(E(text),style);w,h=p.wrap(width,1000);p.drawOn(c,x,y-h);return y-h

def draw_field(c,id,label,x,y,w,h,digital,value='',label_visible=True):
 if label_visible:
  y=paragraph(c,label,y,width=w,font='NinzBold',size=9.1,x=x)-5
 if digital:
  c.acroForm.textfield(name=id,tooltip=label,x=x,y=y-h,width=w,height=h,fontName='Helvetica',fontSize=10 if w>150 else 9,
   textColor=INK,borderColor=LINE,fillColor=white,borderWidth=.65,borderStyle='solid',forceBorder=True,
   fieldFlags='multiline',maxlen=max(65,int(h*w/36)),value=value)
 else:
  c.setFillColor(white);c.setStrokeColor(LINE);c.setLineWidth(.65);c.rect(x,y-h,w,h,fill=1,stroke=1)
  if value:c.setFillColor(INK);c.setFont('NinzSans',9);c.drawString(x+5,y-15,value)
  c.setStrokeColor(HexColor('#d0d0d0'));c.setLineWidth(.3)
  for line_y in range(int(y-h+15),int(y-8),19):c.line(x+5,line_y,x+w-5,line_y)
 return y-h-10

def draw_block(c,b,bi,pi,y,digital):
 prefix=f'p{pi}_b{bi}';t=b['type']
 if t=='paragraph':return paragraph(c,b['text'],y)-10
 if t=='field':return draw_field(c,prefix,b['label'],44,y,524,b['height'],digital)
 if t=='checks':
  y=paragraph(c,b['title'],y,font='NinzBold',size=11,color=GOLD)-10
  for i,text in enumerate(b['items'],1):
   yy=y-12
   if digital:c.acroForm.checkbox(name=f'{prefix}_{i}',tooltip=text,x=45,y=yy,size=12,buttonStyle='check',borderColor=LINE,fillColor=white,textColor=INK,forceBorder=True)
   else:c.setStrokeColor(LINE);c.setFillColor(white);c.rect(45,yy,12,12,fill=1,stroke=1)
   y=paragraph(c,text,y,width=502,x=66)-11
  return y-5
 if t=='rows':
  y=paragraph(c,b['title'],y,font='NinzBold',size=11,color=GOLD)-8
  cols=len(b['columns']);gap=8;w=(524-gap*(cols-1))/cols
  label_bottom=[]
  for col,label in enumerate(b['columns']):label_bottom.append(paragraph(c,label,y,width=w,x=44+col*(w+gap),font='NinzBold',size=8.8))
  y=min(label_bottom)-6
  for row in range(b['count']):
   bottom=y
   for col,label in enumerate(b['columns']):
    val=''
    if b['title']=='Plan the week' and col==0:val=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][row]
    bottom=draw_field(c,f'{prefix}_r{row+1}_c{col+1}',f"{b['title']}, row {row+1}: {label}",44+col*(w+gap),y,w,b['height'],digital,val,False)
   y=bottom
  return y-3
 if t=='calendar':
  w=524/7;h=60
  for col,day in enumerate(['Mon','Tue','Wed','Thu','Fri','Sat','Sun']):
   c.setFont('NinzBold',10);c.setFillColor(INK);c.drawCentredString(44+(col+.5)*w,y-12,day)
  y-=25
  for row in range(6):
   for col,day in enumerate(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']):
    draw_field(c,f'{prefix}_r{row+1}_c{col+1}',f'Week {row+1} {day}: date and event',44+col*w,y,w-3,h,digital,label_visible=False)
   y-=h+6
  return y-12
 raise ValueError(t)

def pdf(r,digital):
 edition='Digital' if digital else 'Print';target=ROOT/'assets/downloads'/f'{r["filename_stem"]}_{edition}_v1.0.pdf'
 c=canvas.Canvas(str(target),pagesize=(612,792),pageCompression=1,invariant=1)
 c.setTitle(r['title']+' | '+('Fillable Digital' if digital else 'Print-Friendly')+' Edition');c.setAuthor('NINZ');c.setSubject(r['description']);c.setKeywords('small business, NINZ, education, '+r['slug'])
 for pi,p in enumerate(r['pages'],1):
  c.setFillColor(CREAM if digital else white);c.rect(0,0,612,792,stroke=0,fill=1)
  if digital:
   c.setFillColor(INK);c.rect(0,749,612,43,stroke=0,fill=1);c.setFillColor(HexColor('#E7C96E'))
  else:c.setFillColor(INK)
  c.setFont('NinzBold',9);c.drawString(44,765,'NINZ FREE RESOURCES');c.drawRightString(568,765,'NINZ.me')
  c.setFillColor(GOLD);c.setFont('NinzBold',8);c.drawString(44,731,r['resource_id']+' | '+edition.upper()+' EDITION | VERSION 1.0')
  y=paragraph(c,p['title'],714,font='NinzSerif',size=21)-9
  y=paragraph(c,p['intro'],y,size=10.3)-17
  for bi,b in enumerate(p['blocks'],1):y=draw_block(c,b,bi,pi,y,digital)
  if y<78:raise ValueError(f'Content exceeds writing area: {r["slug"]} page {pi}, bottom={y}')
  c.setStrokeColor(LINE);c.setLineWidth(.5);c.line(44,63,568,63)
  c.setFillColor(INK);c.setFont('NinzSans',7.2);c.drawString(44,48,'General business education | October 2026 | '+('Fillable digital' if digital else 'Print-friendly'));c.drawRightString(568,48,f'Page {pi} / {len(r["pages"])+1}')
  c.setFont('NinzSans',6.8);c.drawString(44,35,'(c) 2026 NINZ. Personal or internal business use. Not for resale or rebranding.')
  c.showPage()
 c.save()
 # Add language and tab order; keep interactive widget appearances intact.
 reader=PdfReader(target);writer=PdfWriter();writer.clone_document_from_reader(reader)
 writer.root_object[NameObject('/Lang')]=__import__('pypdf').generic.TextStringObject('en-US')
 for p in writer.pages:p[NameObject('/Tabs')]=NameObject('/S')
 # Complete disclaimer and references are PDF attachment-free opening guidance,
 # appended as a final reference page to retain generous working space.
 # Add a compact final reference page; no product fields, same for both formats.
 import io
 buf=io.BytesIO();end=canvas.Canvas(buf,pagesize=(612,792),invariant=1)
 end.setFillColor(CREAM if digital else white);end.rect(0,0,612,792,fill=1,stroke=0)
 end.setFillColor(INK);end.setFont('NinzBold',10);end.drawString(44,749,'NINZ FREE RESOURCES | '+r['resource_id'])
 y=paragraph(end,'Use, save, and keep learning',717,font='NinzSerif',size=22)-18
 y=paragraph(end,r['title'],y,font='NinzBold',size=12)-15
 y=paragraph(end,r['how_to_use'],y)-16
 y=paragraph(end,'Using the digital edition',y,font='NinzBold',size=11)-8
 y=paragraph(end,'Download first and open in a PDF reader that supports AcroForm fields. Save a copy after entering your information. Test one field and reopen the saved file before completing the tool. Long text may scroll within a field, so keep notes concise and check print preview. Repeat only the pages you need for each new period.',y)-16
 y=paragraph(end,'Educational use',y,font='NinzBold',size=11)-8
 y=paragraph(end,r['disclaimer'],y)-16
 y=paragraph(end,'Connected NINZ tools',y,font='NinzBold',size=11)-8
 for id in r['related_resource_ids']:
  other=RELATED[id];y=paragraph(end,other['title'],y,size=10)-3
  u='https://ninz.me/resources/'+other['slug']+'/'
  before=y;y=paragraph(end,u,y,size=8.2,color=GOLD)-8;end.linkURL(u,(44,y,568,before),relative=0)
 y=paragraph(end,'Learning Center: https://ninz.me/learning-center.html',y,size=9)-9
 end.linkURL('https://ninz.me/learning-center.html',(44,y,568,y+15),relative=0)
 if r['resource_id']=='RES-013':
  y=paragraph(end,'Individualized help: https://ninz.me/solutions.html#ai-visibility-assessment',y,size=9)-9
  end.linkURL('https://ninz.me/solutions.html#ai-visibility-assessment',(44,y,568,y+15),relative=0)
 for s in r['sources']:
  y=paragraph(end,s['title']+' (checked October 4, 2026)',y,size=9)-3
  before=y;y=paragraph(end,s['url'],y,size=8,color=GOLD)-9;end.linkURL(s['url'],(44,y,568,before),relative=0)
 end.setFont('NinzSans',7.2);end.setFillColor(INK);end.drawString(44,48,'NINZ.me | Educational use and references | Version 1.0');end.drawRightString(568,48,f'Page {len(r["pages"])+1} / {len(r["pages"])+1}')
 if y<78:raise ValueError('Reference page overflow: '+r['slug'])
 end.save();writer.add_page(PdfReader(buf).pages[0])
 # Correct working-page totals now that the reference sheet is included.
 with open(target,'wb') as f:writer.write(f)
 return target

if __name__=='__main__':
 errors=[]
 for r in DATA:
  p=ROOT/'resources'/r['slug'];p.mkdir(exist_ok=True)
  (p/'index.html').write_text(web(r))
  for digital in [True,False]:
   try:
    target=pdf(r,digital);print(target.name)
   except ValueError as error:
    errors.append(str(error))
 if errors:raise ValueError('\n'.join(errors))
