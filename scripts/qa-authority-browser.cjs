/* Local-only browser QA. External requests are blocked; no deployment. */
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const vm = require('node:vm'), assert = require('node:assert/strict');
const { chromium } = require(process.env.NINZ_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const output = process.env.NINZ_QA_OUTPUT || '/tmp/ninz-authority-browser';
const axeScript = process.env.NINZ_AXE_SCRIPT || require.resolve('axe-core/axe.min.js');
const data = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/faq-library-data.js'), 'utf8'), data);
const added = data.window.NINZ_FAQ_LIBRARY.faqs.filter(q => q.faq_id.startsWith('OPS-'));
fs.mkdirSync(output, { recursive: true });
(async () => {
  const server = http.createServer((req, res) => {
    let target = path.resolve(root, '.' + decodeURIComponent(req.url.split('?')[0]));
    if (!target.startsWith(root + path.sep) && target !== root) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) { res.writeHead(404); return res.end(); }
    res.setHeader('Content-Type', ({ '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png', '.pdf':'application/pdf' })[path.extname(target)] || 'application/octet-stream');
    res.end(fs.readFileSync(target));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ headless:true, executablePath:process.env.NINZ_CHROMIUM_EXECUTABLE || undefined, args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage'] });
  const report = { responsive_theme_layouts:0, javascript_off_faqs:0, search_category_passed:false, journey_passed:false, page_errors:[], accessibility_violations:[] };
  try {
    const context = await browser.newContext();
    await context.route('**/*', route => route.request().url().startsWith(base + '/') ? route.continue() : route.abort());
    const page = await context.newPage();
    page.on('pageerror', error => report.page_errors.push(error.message));
    const routes = ['/learning-center.html','/faq/','/faq/business-growth-operations/','/learning-center/bookkeeping-basics-small-businesses/','/learning-center/simple-customer-follow-up-system/','/resources/small-business-bookkeeping-basics-organizer/',new URL(added[0].canonical_url).pathname];
    for (let i=0; i<routes.length; i++) {
      await page.goto(base + routes[i], { waitUntil:'networkidle' });
      assert.equal(await page.locator('h1').count(), 1);
      for (const width of [390,1280]) for (const theme of ['light','dark']) {
        await page.setViewportSize({ width, height:900 });
        await page.evaluate(t => document.documentElement.dataset.theme=t, theme);
        await page.waitForTimeout(400);
        assert(!await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), routes[i] + ' horizontal overflow');
        await page.addScriptTag({ path:axeScript });
        const results = await page.evaluate(async () => await axe.run(document, { runOnly:{ type:'tag', values:['wcag2a','wcag2aa','wcag21aa'] } }));
        if (results.violations.length) report.accessibility_violations.push({ route:routes[i],width,theme,violations:results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})) });
        await page.screenshot({ path:path.join(output, `${i}-${width}-${theme}.png`), fullPage:true });
        report.responsive_theme_layouts++;
      }
    }
    await page.goto(base + '/faq/', { waitUntil:'networkidle' });
    await page.locator('[data-faq-search]').fill('customer follow-up');
    await page.waitForTimeout(350);
    const results = await page.locator('[data-faq-results] h3').allTextContents();
    assert(results.includes(added[7].question), 'New follow-up question absent from search');
    await page.goto(base + '/faq/business-growth-operations/', { waitUntil:'networkidle' });
    for (const q of added) assert((await page.locator('main').textContent()).includes(q.question), q.faq_id + ' absent from category');
    report.search_category_passed=true;
    await page.goto(base + new URL(added[0].canonical_url).pathname, { waitUntil:'networkidle' });
    await page.getByRole('link',{name:'Read the Bookkeeping Basics Guide',exact:true}).click();
    assert(page.url().endsWith('/learning-center/bookkeeping-basics-small-businesses/'));
    await page.locator('main a[href="/resources/small-business-bookkeeping-basics-organizer/"]').click();
    assert(page.url().endsWith('/resources/small-business-bookkeeping-basics-organizer/'));
    await page.locator('main a[href="/learning-center/bookkeeping-basics-small-businesses/"]').click();
    assert(page.url().endsWith('/learning-center/bookkeeping-basics-small-businesses/'));
    report.journey_passed=true;
    await context.close();
    const nojs = await browser.newContext({ javaScriptEnabled:false });
    await nojs.route('**/*', route => route.request().url().startsWith(base + '/') ? route.continue() : route.abort());
    const fallback = await nojs.newPage();
    for (const q of added) {
      await fallback.goto(base + new URL(q.canonical_url).pathname);
      const text = await fallback.locator('main').textContent();
      assert(text.includes(q.short_answer), q.faq_id + ' static answer');
      assert(text.includes(q.continue_your_journey.button_text), q.faq_id + ' static next step');
      for (const source of q.sources) for (const claim of source.supported_claims) assert(text.includes(claim), q.faq_id + ' static source claim');
      report.javascript_off_faqs++;
    }
    await nojs.close();
    fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify(report,null,2));
    assert.deepEqual(report.page_errors,[]);
    assert.deepEqual(report.accessibility_violations,[]);
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode=1; });
