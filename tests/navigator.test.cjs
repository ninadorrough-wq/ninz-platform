const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const cohort = ['TX', 'KS', 'AR', 'MO', 'CO'];
function load(file = path.join(root, 'assets/business-registration-data.js')) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), context);
  return context.window.NINZ_BUSINESS_REGISTRATION;
}
const data = load();
const fields = ['filing_authority', 'official_business_portal', 'name_search', 'state_registration', 'tax_authority', 'tax_registration', 'licenses_permits', 'employer_registration', 'unemployment_insurance', 'workers_compensation', 'ongoing_reporting', 'registered_agent', 'trade_name'];

test('the public inventory keeps exactly one published guide and 50 states', () => {
  assert.equal(data.states.length, 50);
  assert.deepEqual(Array.from(data.states.filter(s => s.publication_status === 'published'), s => s.state_code), ['OK']);
  for (const code of cohort) {
    const s = data.states.find(s => s.state_code === code);
    assert.equal(s.publication_status, 'coming_soon');
    assert.equal(s.public_url, '');
  }
});

for (const code of cohort) {
  test(`${code} has complete structured destinations, evidence and explicit unknowns`, () => {
    const s = data.states.find(s => s.state_code === code);
    assert.equal(s.ein_module, 'ein');
    assert.ok(s.local_requirements_note);
    assert.equal(s.last_verified, '2026-10-04');
    assert.equal(s.next_scheduled_review, '2027-01-02');
    const sources = new Map((s.official_sources || []).map(x => [x.source_id, x]));
    assert.ok(sources.size >= 8, 'material requirements need a source register');
    for (const field of fields) {
      const section = s[field];
      assert.ok(section, `${field} missing`);
      assert.match(section.url, /^https:\/\//);
      assert.ok(sources.has(section.source_id), `${field} has a dangling source`);
      assert.ok(section.requirements.length, `${field} needs substance`);
      for (const claim of section.requirements) {
        assert.ok(['VERIFIED', 'unresolved/research-required'].includes(claim.status));
        assert.ok(claim.text && claim.source_ids.length);
        for (const id of claim.source_ids) assert.ok(sources.has(id), `${field}: ${id} missing`);
      }
    }
    for (const source of sources.values()) {
      assert.equal(source.last_checked, '2026-10-04');
      assert.ok(['direct', 'official_search_index', 'unresolved'].includes(source.evidence_method));
    }
    if (s.licenses_permits.statewide_general_license === null) {
      assert.equal(s.licenses_permits.statewide_general_license_status, 'unresolved/research-required');
      assert.ok(s.unresolved_items.length);
    }
  });
}

test('federal EIN content is shared rather than independently maintained by states', () => {
  assert.ok(data.federal_modules.ein.paragraphs?.length, 'shared federal copy missing');
  assert.ok(data.federal_modules.ein.official_sources?.length, 'shared federal evidence missing');
  for (const s of data.states.filter(s => cohort.includes(s.state_code))) {
    assert.equal(s.ein_module, 'ein');
    assert.equal(s.federal_ein, undefined);
    assert.ok(!s.official_sources.some(x => x.authority === 'Internal Revenue Service'));
  }
});

test('verified requirements have substantive official evidence, with link access tracked separately', () => {
  for (const s of data.states.filter(s => cohort.includes(s.state_code))) {
    const sources = new Map(s.official_sources.map(x => [x.source_id, x]));
    for (const source of sources.values()) {
      const host = new URL(source.url).hostname;
      assert.ok(host.endsWith('.gov') || host.endsWith('.state.tx.us') || host.endsWith('.state.co.us') || host === 'content.govdelivery.com', host);
      assert.ok(!/nxt-|\.test\.|\.dev\./.test(host), 'development mirrors are not authority');
      assert.ok(['reachable', 'access_blocked', 'manual_review_required'].includes(source.link_status));
    }
    for (const field of fields) for (const claim of s[field].requirements) {
      if (claim.status === 'VERIFIED') assert.ok(claim.source_ids.some(id => sources.get(id).evidence_method !== 'unresolved'), `${s.state_code}: ${field} has no reviewed evidence`);
    }
    assert.equal(s.verification_status, 'research_required');
    assert.ok(s.unresolved_items.length, 'unresolved review must prevent activation');
  }
});

function navigator(query) {
  const handlers = {};
  const input = { value: query, addEventListener: (e, fn) => handlers[e] = fn, focus() {} };
  const form = { addEventListener: (e, fn) => handlers[e] = fn };
  const status = { textContent: '' };
  const items = data.states.map(s => ({ hidden: false, getAttribute: () => s.state_code }));
  const assigned = [];
  const document = { querySelector: selector => ({ '[data-state-search-form]': form, '[data-state-search]': input, '[data-state-search-status]': status })[selector], querySelectorAll: () => items };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/business-registration-navigator.js'), 'utf8'), { window: { NINZ_BUSINESS_REGISTRATION: data, location: { assign: u => assigned.push(u) } }, document });
  handlers.submit({ preventDefault() {} });
  return { assigned, message: status.textContent, visible: items.filter(x => !x.hidden).length };
}

test('state names and codes say Coming Soon without navigation', () => {
  for (const s of data.states.filter(s => cohort.includes(s.state_code))) {
    for (const query of [s.state, s.state_code, `  ${s.state.toUpperCase()}  `]) {
      const r = navigator(query);
      assert.equal(r.assigned.length, 0);
      assert.equal(r.message, `${s.state} guide is coming soon.`);
      assert.ok(r.visible >= 1);
    }
  }
  assert.deepEqual(navigator('OK').assigned, ['/business-registration/oklahoma/']);
  assert.equal(navigator('unknown').assigned.length, 0);
});

test('review guides use evidence-linked state content, shared EIN and noindex metadata', () => {
  const { renderGuide } = require('../scripts/render-navigator-staged.cjs');
  for (const code of cohort) {
    const s = data.states.find(s => s.state_code === code);
    const html = renderGuide(s, data.federal_modules.ein);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /Skip to content/);
    assert.equal((html.match(/class="guide-step"/g) || []).length, 12);
    assert.match(html, /Research required/);
    assert.ok(!html.includes(`https://ninz.me/business-registration/${s.slug}/`));
    assert.ok(!html.includes('rel="canonical"'));
    for (const field of fields) {
      for (const c of s[field].requirements) {
        for (const id of c.source_ids) assert.ok(html.includes(`href="#source-${id}"`));
      }
    }
    const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), m => m[1]));
    for (const m of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(m[1]), `broken anchor ${m[1]}`);
    for (const m of html.matchAll(/aria-labelledby="([^"]+)"/g)) assert.ok(ids.has(m[1]));
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1]);
    assert.equal(schema[0].name, `How to Register a Business in ${s.state}`);
    assert.equal(schema[0].dateModified, '2026-10-04');
    assert.equal(schema[0].url, undefined);
  }
  const ks = renderGuide(data.states.find(s => s.state_code === 'KS'), data.federal_modules.ein);
  assert.match(ks, /every two years/);
  const mo = renderGuide(data.states.find(s => s.state_code === 'MO'), data.federal_modules.ein);
  assert.match(mo, /LLCs do not file an SOS annual report/);
});

test('the publish build excludes staged routes and strips unpublished details', t => {
  const { buildPublic } = require('../scripts/build-public.cjs');
  const os = require('node:os');
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'ninz-publish-test-'));
  t.after(() => fs.rmSync(temp, { recursive: true, force: true }));
  const source = path.join(temp, 'source');
  const output = path.join(temp, 'dist');
  fs.mkdirSync(source);
  for (const name of ['assets', 'business-registration']) fs.cpSync(path.join(root, name), path.join(source, name), { recursive: true });
  for (const name of ['index.html', 'sitemap.xml', 'robots.txt', '_headers']) fs.copyFileSync(path.join(root, name), path.join(source, name));
  for (const name of ['staging', 'docs', 'tests', 'scripts']) {
    fs.mkdirSync(path.join(source, name));
    fs.writeFileSync(path.join(source, name, 'index.html'), 'PRIVATE');
  }
  for (const slug of ['texas', 'kansas', 'arkansas', 'missouri', 'colorado']) {
    fs.mkdirSync(path.join(source, 'business-registration', slug));
    fs.writeFileSync(path.join(source, 'business-registration', slug, 'index.html'), 'UNFINISHED');
  }
  buildPublic(source, output);
  assert.ok(fs.existsSync(path.join(output, 'business-registration/oklahoma/index.html')));
  for (const name of ['staging', 'docs', 'tests', 'scripts']) assert.ok(!fs.existsSync(path.join(output, name)));
  for (const slug of ['texas', 'kansas', 'arkansas', 'missouri', 'colorado']) assert.ok(!fs.existsSync(path.join(output, 'business-registration', slug)));
  const published = load(path.join(output, 'assets/business-registration-data.js'));
  for (const code of cohort) {
    const s = published.states.find(s => s.state_code === code);
    assert.deepEqual(Object.keys(s).sort(), ['public_url', 'publication_status', 'slug', 'state', 'state_code']);
  }
  assert.equal(fs.readFileSync(path.join(output, 'sitemap.xml'), 'utf8'), fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
});

test('HTTP requests cannot retrieve staged guides or research from the public artifact', async t => {
  const http = require('node:http');
  const temp = fs.mkdtempSync(path.join(require('node:os').tmpdir(), 'ninz-http-test-'));
  const output = require('../scripts/build-public.cjs').buildPublic(root, path.join(temp, 'dist'));
  t.after(() => fs.rmSync(temp, { recursive: true, force: true }));
  const server = http.createServer((req, res) => {
    const route = new URL(req.url, 'http://localhost').pathname;
    let file = path.join(output, route);
    if (route.endsWith('/')) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end('Not found'); return; }
    res.end(fs.readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const slug of ['texas', 'kansas', 'arkansas', 'missouri', 'colorado']) {
    for (const route of [`/business-registration/${slug}/`, `/business-registration/${slug}/index.html`, `/staging/business-registration/${slug}/`]) assert.equal((await fetch(base + route)).status, 404, route);
  }
  assert.equal((await fetch(base + '/docs/business-registration-cohort-01-link-checks.json')).status, 404);
  assert.equal((await fetch(base + '/business-registration/oklahoma/')).status, 200);
  assert.equal((await fetch(base + '/business-registration/')).status, 200);
  const published = load(path.join(output, 'assets/business-registration-data.js'));
  for (const code of cohort) assert.equal(published.states.find(s => s.state_code === code).publication_status, 'coming_soon');
});
