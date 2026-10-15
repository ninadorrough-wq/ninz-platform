const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { renderPublicGuide } = require('../scripts/render-navigator-staged.cjs');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/business-registration-data.js'), 'utf8'), context);
const data = context.window.NINZ_BUSINESS_REGISTRATION;
const phase1 = ['TX', 'KS', 'AR', 'MO', 'CO', 'LA', 'NE', 'IA'];
const sections = ['filing_authority', 'official_business_portal', 'name_search', 'state_registration', 'tax_authority', 'tax_registration', 'licenses_permits', 'employer_registration', 'unemployment_insurance', 'workers_compensation', 'ongoing_reporting', 'registered_agent', 'trade_name'];

test('eight public guides match sourced claims, routes and review-safe metadata', () => {
  const hub = fs.readFileSync(path.join(root, 'business-registration/index.html'), 'utf8');
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  for (const code of phase1) {
    const state = data.states.find(s => s.state_code === code);
    const sources = new Map(state.official_sources.map(s => [s.source_id, s]));
    assert.equal(state.publication_status, 'published');
    assert.equal(state.public_url, `/business-registration/${state.slug}/`);
    for (const section of sections) for (const claim of state[section].requirements) {
      assert.equal(claim.status, 'VERIFIED', `${code} ${section}`);
      assert.ok(claim.source_ids.some(id => sources.get(id)?.evidence_method !== 'unresolved'), `${code} ${section} evidence`);
    }
    const artifact = fs.readFileSync(path.join(root, 'business-registration', state.slug, 'index.html'), 'utf8');
    assert.equal(artifact, renderPublicGuide(state, data.federal_modules[state.ein_module]), `${code} source/artifact drift`);
    assert.match(artifact, new RegExp(`<link rel="canonical" href="https://ninz.me${state.public_url}"`));
    assert.doesNotMatch(artifact, /noindex|Staged review draft|Activation blockers for this review draft|Research required:/);
    for (const [, id] of artifact.matchAll(/href="#(source-[^"]+)"/g)) assert.ok(artifact.includes(`id="${id}"`), `${code} missing ${id}`);
    for (const [, id] of artifact.matchAll(/aria-(?:labelledby|describedby|controls)="([^"]+)"/g)) {
      for (const name of id.split(' ')) assert.ok(artifact.includes(`id="${name}"`), `${code} missing ${name}`);
    }
    assert.ok(hub.includes(`data-state-code="${code}"><div class="state-card is-published"`));
    assert.ok(hub.includes(`href="${state.public_url}"`));
    assert.ok(sitemap.includes(`<loc>https://ninz.me${state.public_url}</loc>`));
  }
  assert.equal((hub.match(/class="state-card is-published"/g) || []).length, 9);
  assert.equal((hub.match(/class="state-status">Coming Soon/g) || []).length, 41);
  assert.ok(fs.readFileSync(path.join(root, 'assets/business-registration-navigator.js'), 'utf8').includes('50 states shown. Nine guides are currently available.'));
  for (const code of ['NM', 'MS']) {
    const state = data.states.find(s => s.state_code === code);
    assert.equal(state.publication_status, 'coming_soon');
    assert.equal(state.public_url, '');
    assert.ok(!sitemap.includes(`<loc>https://ninz.me/business-registration/${state.slug}/</loc>`));
    assert.ok(hub.includes(`data-state-code="${code}"><div class="state-card">`));
  }
});

test('WEB-005 social destinations and accessible icon markup remain on each public guide', () => {
  const urls = [
    'https://www.facebook.com/byninzme/?rdid=ndTlnJALmJUe8z7L',
    'https://www.instagram.com/byninz.me?igsh=bXdzdG4xYWwzbHlu&amp;utm_source=qr',
    'https://www.linkedin.com/in/ninadorroughofficial/',
    'https://www.youtube.com/@ByNINZ',
    'https://www.tiktok.com/@byninz.me',
    'https://ninzlearningcenter.blogspot.com/'
  ];
  for (const code of phase1) {
    const state = data.states.find(s => s.state_code === code);
    const page = fs.readFileSync(path.join(root, 'business-registration', state.slug, 'index.html'), 'utf8');
    for (const url of urls) assert.ok(page.includes(`href="${url}"`), `${code} ${url}`);
    assert.equal((page.match(/class="social-icon"/g) || []).length, 6, code);
    assert.ok(page.includes('aria-label="NINZ social media and Learning Center blog"'), code);
    assert.ok(page.includes('<svg'), code);
  }
});
