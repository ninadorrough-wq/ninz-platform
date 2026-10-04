// No network or deployment. Produces only the existing published website.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
function buildPublic(sourceRoot, outputRoot) {
  sourceRoot = path.resolve(sourceRoot);
  outputRoot = path.resolve(outputRoot);
  if (outputRoot === sourceRoot || sourceRoot.startsWith(outputRoot + path.sep)) throw new Error('Publish output must not contain or replace the repository.');
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(sourceRoot, 'assets/business-registration-data.js'), 'utf8'), context);
  const data = context.window.NINZ_BUSINESS_REGISTRATION;
  const publicStates = data.states.filter(s => s.publication_status === 'published');
  for (const s of publicStates) {
    if (!/^[a-z]+(?:-[a-z]+)*$/.test(s.slug) || s.public_url !== `/business-registration/${s.slug}/`) throw new Error('Invalid published state route.');
    if (!fs.existsSync(path.join(sourceRoot, 'business-registration', s.slug, 'index.html'))) throw new Error(`Published guide missing: ${s.slug}`);
  }
  fs.rmSync(outputRoot, { recursive: true, force: true });
  fs.mkdirSync(outputRoot, { recursive: true });
  for (const item of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    if (item.isFile() && (item.name.endsWith('.html') || ['robots.txt', 'sitemap.xml', '_headers', '_redirects'].includes(item.name))) {
      fs.copyFileSync(path.join(sourceRoot, item.name), path.join(outputRoot, item.name));
    }
  }
  for (const folder of ['assets', 'faq', 'resources', 'learning-center']) {
    if (fs.existsSync(path.join(sourceRoot, folder))) fs.cpSync(path.join(sourceRoot, folder), path.join(outputRoot, folder), { recursive: true });
  }
  const navigator = path.join(outputRoot, 'business-registration');
  fs.mkdirSync(navigator);
  fs.copyFileSync(path.join(sourceRoot, 'business-registration/index.html'), path.join(navigator, 'index.html'));
  for (const state of publicStates) fs.cpSync(path.join(sourceRoot, 'business-registration', state.slug), path.join(navigator, state.slug), { recursive: true });
  // Keep the same browser contract while removing review-only state details.
  data.states = data.states.map(s => s.publication_status === 'published' ? s : ({ state: s.state, state_code: s.state_code, slug: s.slug, publication_status: 'coming_soon', public_url: '' }));
  fs.writeFileSync(path.join(outputRoot, 'assets/business-registration-data.js'), `(function () { "use strict"; window.NINZ_BUSINESS_REGISTRATION = ${JSON.stringify(data, null, 2)}; }());\n`);
  return outputRoot;
}
module.exports = { buildPublic };
if (require.main === module) console.log(`Public artifact prepared at ${buildPublic(path.resolve(__dirname, '..'), path.resolve(__dirname, '../dist'))}; no deployment performed.`);
