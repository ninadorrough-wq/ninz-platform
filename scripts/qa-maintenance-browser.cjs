/* Work 4 local browser QA. No external calls, submissions, or deployment. */
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.NINZ_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const output = process.env.NINZ_QA_OUTPUT || '/tmp/ninz-maintenance-qa';
const axeScript = process.env.NINZ_AXE_SCRIPT || require.resolve('axe-core/axe.min.js');
const destinations = [
  'https://www.facebook.com/byninzme/?rdid=ndTlnJALmJUe8z7L',
  'https://www.instagram.com/byninz.me?igsh=bXdzdG4xYWwzbHlu&utm_source=qr',
  'https://www.linkedin.com/in/ninadorroughofficial/',
  'https://www.youtube.com/@ByNINZ',
  'https://www.tiktok.com/@byninz.me',
  'https://ninzlearningcenter.blogspot.com/'
];
const routes = ['/', '/learning-center.html', '/faq/', '/faq/business-growth-operations/',
  '/learning-center/bookkeeping-basics-small-businesses/', '/learning-center/simple-customer-follow-up-system/',
  '/resources/', '/resources/small-business-bookkeeping-basics-organizer/',
  '/resources/ai-aeo-geo-visibility-checklist/', '/resources/business-goals-action-planner/',
  '/resources/business-journal/', '/resources/business-calendar/', '/solutions.html',
  '/business-registration/', '/business-registration/oklahoma/'];
const journeys = [
  ['/faq/business-growth-operations/what-is-bookkeeping-and-why-does-a-small-business-need-it/',
    '/learning-center/bookkeeping-basics-small-businesses/', '/resources/small-business-bookkeeping-basics-organizer/',
    '/learning-center/bookkeeping-basics-small-businesses/', '/solutions.html'],
  ['/faq/business-growth-operations/what-is-a-customer-follow-up-system/',
    '/learning-center/simple-customer-follow-up-system/', '/resources/ai-task-finder-worksheet/'],
  ['/learning-center.html', '/resources/ai-aeo-geo-visibility-checklist/', '/solutions.html#ai-visibility-assessment'],
  ['/learning-center.html', '/resources/business-goals-action-planner/', '/resources/business-calendar/']
];
fs.mkdirSync(output, { recursive:true });
(async () => {
  const server = http.createServer((req,res) => {
    let target = path.resolve(root, '.' + decodeURIComponent(req.url.split('?')[0]));
    if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target,'index.html');
    if (!fs.existsSync(target)) { res.writeHead(404); return res.end(); }
    res.setHeader('Content-Type', ({'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.pdf':'application/pdf','.png':'image/png'})[path.extname(target)] || 'application/octet-stream');
    res.end(fs.readFileSync(target));
  });
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({headless:true, executablePath:process.env.NINZ_CHROMIUM_EXECUTABLE || undefined, args:['--no-sandbox','--disable-dev-shm-usage']});
  const report = {layouts:0, keyboard_links:0, journeys:0, nojs_links:0, accessibility_violations:[], page_errors:[], local_failures:[]};
  try {
    const context = await browser.newContext({reducedMotion:'reduce'});
    await context.route('**/*', r => r.request().url().startsWith(base + '/') ? r.continue() : r.abort());
    const page = await context.newPage();
    page.on('pageerror', e => report.page_errors.push(e.message));
    page.on('response', r => { if(r.url().startsWith(base) && r.status()>=400) report.local_failures.push(r.url()); });
    for (let index=0; index<routes.length; index++) {
      assert.equal((await page.goto(base + routes[index])).status(),200);
      const links = page.locator('.social-links a');
      assert.deepEqual(await links.evaluateAll(ls => ls.map(l=>l.href)), destinations);
      for (const width of [320,390,768,1440]) for (const theme of ['light','dark']) {
        await page.setViewportSize({width,height:900});
        await page.evaluate(t => document.documentElement.dataset.theme=t,theme);
        // Existing navigation colors transition for 160ms after a theme change.
        await page.waitForTimeout(200);
        await links.first().scrollIntoViewIfNeeded();
        const targets = await links.evaluateAll(ls => ls.map(l => {
          const b=l.getBoundingClientRect(); const s=getComputedStyle(l);
          return {width:b.width,height:b.height,name:l.getAttribute('aria-label'),target:l.target,rel:l.rel,color:s.color,background:s.backgroundColor};
        }));
        assert(targets.every(t=>t.width>=44 && t.height>=44), routes[index]+' social touch target below 44px');
        assert(targets.every(t=>t.name && t.target==='_blank' && /noopener/.test(t.rel) && /noreferrer/.test(t.rel)));
        assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),routes[index]+' overflow');
        await page.addScriptTag({path:axeScript});
        const scan = await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
        if(scan.violations.length) report.accessibility_violations.push({route:routes[index],width,theme,violations:scan.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
        await page.screenshot({path:path.join(output,`${index}-${width}-${theme}-footer.png`)});
        if(width===390 || width===1440) await page.screenshot({path:path.join(output,`${index}-${width}-${theme}-full.png`),fullPage:true});
        report.layouts++;
      }
    }
    await page.goto(base+'/learning-center.html');
    for(let i=0;i<6;i++) {
      if(i===0) await page.locator('.footer-contact a').last().focus();
      await page.keyboard.press('Tab');
      const focus = await page.evaluate(()=>({href:document.activeElement.href,outline:getComputedStyle(document.activeElement).outlineStyle,width:getComputedStyle(document.activeElement).outlineWidth}));
      assert.equal(focus.href,destinations[i]); assert.equal(focus.outline,'solid'); assert.equal(focus.width,'3px');
      report.keyboard_links++;
    }
    await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(()=>document.activeElement.href),destinations[4]);
    const activation = context.waitForEvent('request', r=>r.url()===destinations[4]);
    await page.keyboard.press('Enter');
    await activation;
    report.keyboard_activation=true;
    for(const popup of context.pages()) if(popup!==page) await popup.close();
    for(const journey of journeys) {
      assert.equal((await page.goto(base+journey[0])).status(),200);
      for(const next of journey.slice(1)) {
        await page.locator(`main a[href="${next}"]`).first().click();
        assert.equal(page.url(),base+next);
      }
      report.journeys++;
    }
    await page.setViewportSize({width:320,height:900});
    await page.goto(base+'/learning-center.html');
    await page.getByRole('button',{name:'Menu',exact:true}).click();
    assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
    await page.locator('#site-nav a[href="/resources/"]').click();
    assert(page.url().endsWith('/resources/'));
    report.mobile_navigation=true;
    await page.goto(base+'/');
    const oldTheme=await page.evaluate(()=>document.documentElement.dataset.theme);
    await page.locator('.menu-toggle').click();
    await page.locator('.theme-toggle').click();
    assert.notEqual(await page.evaluate(()=>document.documentElement.dataset.theme),oldTheme);
    await page.reload();
    assert.notEqual(await page.evaluate(()=>document.documentElement.dataset.theme),oldTheme);
    report.theme_toggle_persistence=true;
    await page.goto(base+'/');
    const totals = await page.locator('.proof-item strong').allTextContents();
    assert.deepEqual(totals,['166','9','17']);
    report.current_inventory=true;
    await context.close();
    const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}});
    await nojs.route('**/*',r=>r.request().url().startsWith(base+'/')?r.continue():r.abort());
    const fallback=await nojs.newPage(); await fallback.goto(base+'/learning-center.html');
    assert.deepEqual(await fallback.locator('.social-links a').evaluateAll(ls=>ls.map(l=>l.href)),destinations);
    report.nojs_links=await fallback.locator('.social-links a').count();
    await fallback.locator('.social-links').scrollIntoViewIfNeeded();
    await fallback.screenshot({path:path.join(output,'nojs-footer.png')});
    await nojs.close();
    fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify(report,null,2));
    assert.deepEqual(report.page_errors,[]); assert.deepEqual(report.local_failures,[]); assert.deepEqual(report.accessibility_violations,[]);
  } finally { await browser.close(); await new Promise(resolve=>server.close(resolve)); }
})().catch(e=>{ console.error(e); process.exitCode=1; });
