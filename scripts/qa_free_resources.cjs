/* Browser QA requires Playwright, Chromium, and axe-core; external requests are blocked. */
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
const {chromium}=require(process.env.NINZ_PLAYWRIGHT_MODULE || 'playwright');
const root=path.resolve(__dirname,'..'),out=process.env.NINZ_QA_OUTPUT || path.join(require('os').tmpdir(),'ninz-resource-qa');
fs.mkdirSync(out,{recursive:true});
const axeScript=process.env.NINZ_AXE_SCRIPT || require.resolve('axe-core/axe.min.js');
const resources=JSON.parse(fs.readFileSync(path.join(root,'content/free-resources-expansion.json'))).resources;
(async()=>{
 const server=http.createServer((req,res)=>{let p=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!p.startsWith(root+path.sep)&&p!==root){res.writeHead(403);return res.end();}if(fs.existsSync(p)&&fs.statSync(p).isDirectory())p=path.join(p,'index.html');if(!fs.existsSync(p)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.pdf':'application/pdf','.png':'image/png'})[path.extname(p)]||'application/octet-stream');res.end(fs.readFileSync(p));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,executablePath:process.env.NINZ_CHROMIUM_EXECUTABLE || undefined,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
 let checks=0;
 try{
 for(const r of resources){
  const context=await browser.newContext();await context.route('**/*',route=>route.request().url().startsWith(base+'/')?route.continue():route.abort());
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/resources/'+r.slug+'/',{waitUntil:'networkidle'});
  assert((await page.title()).includes(r.title));
  const controls=await page.locator('#resource-form textarea, #resource-form input').count();
  assert(controls>10);assert.equal(await page.locator('label[for]').count(),controls);
  await page.locator('textarea').first().fill('WEB PRINT MARKER: Customer follow-up scheduled.');
  const cb=page.locator('#resource-form input[type=checkbox]');if(await cb.count())await cb.first().check();
  assert((await page.locator('.print-value').first().textContent()).includes('WEB PRINT MARKER'));
  await page.evaluate(()=>window.print=()=>window.__printCalled=true);
  await page.locator('[data-resource-print]').click();assert(await page.evaluate(()=>window.__printCalled));
  for(const width of [390,1280])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:900});await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await page.waitForTimeout(250);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);assert(!overflow,r.slug+' overflow at '+width+' '+theme);
   if(width===390)assert.equal(await page.locator('.working-row').first().evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length).catch(()=>1),1);
   const fields=await page.locator('#resource-form textarea').evaluateAll(es=>es.map(e=>({w:e.getBoundingClientRect().width,color:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor})));assert(fields.every(f=>f.w>=90||width===1280));
   await page.addScriptTag({path:axeScript});
   const a11y=await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
   if(a11y.violations.length)console.log(JSON.stringify(a11y.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),null,2));
   assert.deepEqual(a11y.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],r.slug+' accessibility '+width+' '+theme);
   await page.screenshot({path:path.join(out,r.slug+'-'+width+'-'+theme+'.png'),fullPage:true});
   if(width===390&&theme==='light')await page.locator('.working-page').first().screenshot({path:path.join(out,r.slug+'-mobile-working.png')});
   checks++;
  }
  await page.setViewportSize({width:1280,height:900});await page.evaluate(()=>document.documentElement.dataset.theme='dark');
  await page.pdf({path:path.join(out,r.slug+'-web-print.pdf'),format:'Letter',printBackground:true,preferCSSPageSize:true});
  page.once('dialog',d=>d.dismiss());await page.locator('[data-resource-reset]').click();assert((await page.locator('textarea').first().inputValue()).includes('WEB PRINT MARKER'));
  page.once('dialog',d=>d.accept());await page.locator('[data-resource-reset]').click();assert.equal(await page.locator('textarea').first().inputValue(),'');
  assert((await page.locator('.working-status').textContent()).includes('cleared'));
  assert.deepEqual(errors,[]);console.log(r.slug,controls+' labeled controls, print marker, clear/cancel, 4 layouts passed');
  await context.close();
 }
 console.log(checks+' responsive/theme layouts passed.');
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1});
