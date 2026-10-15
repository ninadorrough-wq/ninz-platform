const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { renderGuide } = require('../scripts/render-navigator-staged.cjs');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/business-registration-data.js'), 'utf8'), context);
const data = context.window.NINZ_BUSINESS_REGISTRATION;
const phase1 = ['TX', 'KS', 'AR', 'MO', 'CO', 'LA', 'NE', 'IA'];
const changed = new Set(['KS', 'AR', 'CO', 'LA', 'NE', 'IA']);
const sections = ['filing_authority', 'official_business_portal', 'name_search', 'state_registration', 'tax_authority', 'tax_registration', 'licenses_permits', 'employer_registration', 'unemployment_insurance', 'workers_compensation', 'ongoing_reporting', 'registered_agent', 'trade_name'];

test('eight-state general claims have evidence, and changed review artifacts match source', () => {
  for (const code of phase1) {
    const state = data.states.find(s => s.state_code === code);
    const sources = new Map(state.official_sources.map(s => [s.source_id, s]));
    assert.equal(state.publication_status, 'coming_soon');
    assert.equal(state.public_url, '');
    for (const section of sections) for (const claim of state[section].requirements) {
      assert.equal(claim.status, 'VERIFIED', `${code} ${section}`);
      assert.ok(claim.source_ids.some(id => sources.get(id)?.evidence_method !== 'unresolved'), `${code} ${section} evidence`);
    }
    if (changed.has(code)) {
      const artifact = fs.readFileSync(path.join(root, 'staging/business-registration', state.slug, 'index.html'), 'utf8');
      assert.equal(artifact, renderGuide(state, data.federal_modules[state.ein_module]), `${code} source/artifact drift`);
      assert.match(artifact, /noindex, nofollow/);
      assert.match(artifact, /Coming Soon/);
    }
  }
  for (const code of ['NM', 'MS']) {
    const state = data.states.find(s => s.state_code === code);
    assert.equal(state.publication_status, 'coming_soon');
    assert.equal(state.public_url, '');
  }
});
