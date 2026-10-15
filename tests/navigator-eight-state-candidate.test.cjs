const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { buildPublic } = require('../scripts/build-public.cjs');

const root = path.resolve(__dirname, '..');
const phase1 = ['texas', 'kansas', 'arkansas', 'missouri', 'colorado', 'louisiana', 'nebraska', 'iowa'];
const phase2 = ['new-mexico', 'mississippi'];

test('eight-state candidate explicitly reserves New Mexico and Mississippi for Phase 2', () => {
  const scope = JSON.parse(fs.readFileSync(path.join(root, 'docs/navigator-eight-state-release-scope.json'), 'utf8'));
  assert.deepEqual(scope.phase_1, phase1);
  assert.deepEqual(scope.phase_2, phase2);
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/business-registration-data.js'), 'utf8'), context);
  for (const slug of [...phase1, ...phase2]) {
    const state = context.window.NINZ_BUSINESS_REGISTRATION.states.find(s => s.slug === slug);
    assert.equal(state.publication_status, 'coming_soon', slug);
    assert.equal(state.public_url, '', slug);
    assert.ok(fs.existsSync(path.join(root, 'staging/business-registration', slug, 'index.html')), slug);
  }
});

test('production candidate build excludes every review route and preserves published output', () => {
  const config = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf8');
  assert.match(config, /command\s*=\s*"node scripts\/build-public\.cjs"/);
  assert.doesNotMatch(config, /context\.deploy-preview|build-navigator-review-preview/);
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'ninz-phase1-'));
  try {
    buildPublic(root, output);
    for (const slug of [...phase1, ...phase2]) {
      assert.ok(!fs.existsSync(path.join(output, 'review/business-registration', slug, 'index.html')), slug);
      assert.ok(!fs.existsSync(path.join(output, 'business-registration', slug, 'index.html')), slug);
    }
    for (const file of ['business-registration/oklahoma/index.html', 'index.html', 'faq-services.html', 'learning-center.html', 'robots.txt', 'sitemap.xml']) {
      assert.deepEqual(fs.readFileSync(path.join(output, file)), fs.readFileSync(path.join(root, file)), file);
    }
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(output, 'assets/business-registration-data.js'), 'utf8'), context);
    assert.deepEqual(Array.from(context.window.NINZ_BUSINESS_REGISTRATION.states.filter(s => s.publication_status === 'published'), s => s.slug), ['oklahoma']);
    for (const slug of [...phase1, ...phase2]) {
      const state = context.window.NINZ_BUSINESS_REGISTRATION.states.find(s => s.slug === slug);
      assert.deepEqual(Object.keys(state).sort(), ['public_url', 'publication_status', 'slug', 'state', 'state_code']);
    }
  } finally {
    fs.rmSync(output, { recursive: true, force: true });
  }
});
