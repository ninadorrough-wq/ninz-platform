// Generates review-only pages. This command never changes public routes or status.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const cohort = ['TX', 'KS', 'AR', 'MO', 'CO'];
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function readData() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/business-registration-data.js'), 'utf8'), context);
  return context.window.NINZ_BUSINESS_REGISTRATION;
}
function evidence(claim) {
  return `<p${claim.status === 'VERIFIED' ? '' : ' class="guide-note"'}>${claim.status === 'VERIFIED' ? '' : '<strong>Research required:</strong> '}${escape(claim.text)} <small>${claim.source_ids.map(id => `<a href="#source-${escape(id)}">${escape(id)}</a>`).join(', ')}</small></p>`;
}
function destination(section) {
  return section.requirements.map(evidence).join('\n') + `<div class="official-actions"><a class="official-action" href="${escape(section.url)}">${escape(section.name)}</a></div>`;
}
function step(number, category, title, content) {
  return `<section class="guide-step" aria-labelledby="step-${number}-heading"><div class="guide-step-number" aria-hidden="true">${String(number).padStart(2, '0')}</div><div><p class="eyebrow">${category}</p><h2 id="step-${number}-heading">${escape(title)}</h2>${content}</div></section>`;
}
function renderGuide(state, federal) {
  if (state.publication_status !== 'coming_soon' || state.public_url) throw new Error('Only unpublished Coming Soon records may be rendered as review drafts.');
  const name = escape(state.state);
  const title = `How to Register a Business in ${state.state}`;
  const description = `Review draft of ${state.state} formation, name, tax, license, employer and reporting guidance. This guide is not activated.`;
  const baseline = fs.readFileSync(path.join(root, 'business-registration/oklahoma/index.html'), 'utf8');
  const header = baseline.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
  const footer = baseline.match(/<footer[\s\S]*?<\/footer>/)[0];
  const federalContent = federal.paragraphs.map(p => `<p>${escape(p)} <small><a href="#source-IRS-EIN-002">IRS-EIN-002</a></small></p>`).join('\n') +
    `<div class="official-actions"><a class="official-action" href="${escape(federal.guidance_url)}">Review IRS EIN guidance</a><a class="official-action" href="${escape(federal.application_url)}">Use the free IRS EIN application</a></div>` +
    (state.ein_sequencing ? evidence(state.ein_sequencing) : '');
  const sources = [...state.official_sources, ...federal.official_sources];
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, dateModified: state.last_verified, isPartOf: { '@type': 'WebSite', name: 'NINZ', url: 'https://ninz.me' }, publisher: { '@type': 'Organization', name: 'NINZ', url: 'https://ninz.me' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ninz.me/' },
      { '@type': 'ListItem', position: 2, name: 'Business Registration Navigator', item: 'https://ninz.me/business-registration/' },
      { '@type': 'ListItem', position: 3, name: state.state }
    ] }
  ];
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Staged review: ${escape(title)} | NINZ</title>
  <meta name="description" content="${escape(description)}">
  <meta property="og:title" content="Staged review: ${escape(title)} | NINZ">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://ninz.me/assets/ninz-social-share.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Staged review: ${escape(title)} | NINZ">
  <meta name="twitter:description" content="${escape(description)}">
  <meta name="twitter:image" content="https://ninz.me/assets/ninz-social-share.png">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles.css?v=20260914a">
  <link rel="stylesheet" href="/assets/business-registration.css?v=20260828a">
  <script src="/assets/theme-init.js?v=20260828a"></script>
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
</head>
<body class="business-registration-page">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header}
  <main id="main">
    <section class="navigator-hero">
      <nav class="eyebrow" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/business-registration/">Business Registration Navigator</a> / ${name}</nav>
      <p class="eyebrow navigator-feature-eyebrow">NINZ BUSINESS REGISTRATION NAVIGATOR</p>
      <h1>${escape(title)}</h1>
      <p class="subheadline"><strong>Staged review draft. Public status: Coming Soon.</strong> This page has not been activated.</p>
      <div class="verification-line"><span><strong>Evidence reviewed:</strong> October 4, 2026</span><span><strong>Next scheduled review:</strong> January 2, 2027</span></div>
    </section>
    <section class="navigator-shell guide-intro-grid" aria-labelledby="guide-start-heading">
      <div><h2 id="guide-start-heading">Start with the sequence, then verify what applies.</h2>
      <p>Structure, activities, employees and location determine the registrations that apply. Complete the applicable actions with the responsible agency.</p>
      ${destination(state.official_business_portal)}</div>
      <aside class="guide-summary" aria-labelledby="guide-summary-heading"><h2 id="guide-summary-heading">Before you begin</h2><ol><li>Clarify ownership and structure.</li><li>Gather the proposed name and address.</li><li>Identify activities and operating locations.</li><li>Know whether you expect to hire employees.</li><li>Keep filing and registration confirmations.</li></ol></aside>
    </section>
    <div class="registration-guide">
      ${step(1, 'Structure', 'Understand your business structure', destination(state.filing_authority))}
      ${step(2, 'Name', 'Search the proposed business name', destination(state.name_search))}
      ${step(3, 'State Filing', `Complete the applicable ${state.state} filing`, destination(state.state_registration))}
      ${step(4, 'Federal EIN', 'Use the shared IRS EIN guidance', federalContent)}
      ${step(5, 'State Taxes', `Determine ${state.state} tax-registration needs`, destination(state.tax_authority) + destination(state.tax_registration))}
      ${step(6, 'Licenses and Permits', 'Check state and local licenses and permits', destination(state.licenses_permits) + `<p class="guide-note">${escape(state.local_requirements_note)}</p>`)}
      ${step(7, 'Employers', 'Complete applicable employer registrations and coverage', destination(state.employer_registration) + '<h3>Unemployment insurance</h3>' + destination(state.unemployment_insurance) + '<h3>Workers compensation</h3>' + destination(state.workers_compensation))}
      ${step(8, 'Registered Agent', 'Confirm registered-agent requirements', destination(state.registered_agent))}
      ${step(9, 'Trade Name', 'Check trade, fictitious or assumed names', destination(state.trade_name))}
      ${step(10, 'Ongoing Requirements', `Track ongoing ${state.state} requirements`, destination(state.ongoing_reporting) + '<p class="guide-note">Record the applicable deadlines, agency accounts, responsible person and official sources. Review current instructions before filing.</p>')}
      ${step(11, 'Final Review', 'Questions to verify before operating', '<ul><li>Has the correct formation or foreign-authority filing been completed?</li><li>Which tax accounts, professional or activity licenses and local permits apply?</li><li>Are employer registration, reporting and coverage ready?</li><li>Which entity-specific reports and renewals need calendar reminders?</li></ul>' + '<h3>Activation blockers for this review draft</h3><ul>' + state.unresolved_items.map(x => `<li>${escape(x)}</li>`).join('') + '</ul>')}
      ${step(12, 'Educational Notice', 'Verify current requirements with the responsible agency', `<p>This is general educational navigation, not legal, tax, accounting, employment or licensing advice. NINZ does not submit government applications and is not affiliated with ${name}, the IRS or other government agencies.</p><p>Confirm current forms, deadlines, fees and exceptions directly with the responsible agency. A verified general rule does not establish that it applies to every business.</p><p><strong>Review status:</strong> unresolved research and link checks are listed above. Publication remains Coming Soon.</p>`)}
      <section class="source-register" aria-labelledby="official-sources-heading"><h2 id="official-sources-heading">Official sources and evidence</h2><ul>${sources.map(s => `<li id="source-${escape(s.source_id)}"><a href="${escape(s.url)}">${escape(s.title)}</a> (${escape(s.authority)}). <strong>${escape(s.source_id)}</strong>. Checked ${escape(s.last_checked)}. Evidence: ${escape(s.evidence_method)}. Link: ${escape(s.link_status || 'unchecked')}.${s.evidence_note ? ' ' + escape(s.evidence_note) : ''}</li>`).join('\n')}</ul></section>
    </div>
  </main>
  ${footer}
  <script src="/assets/main.js?v=20260828a"></script>
</body>
</html>
`;
}
function renderAll() {
  const data = readData();
  for (const state of data.states.filter(s => cohort.includes(s.state_code))) {
    const folder = path.join(root, 'staging/business-registration', state.slug);
    fs.mkdirSync(folder, { recursive: true });
    fs.writeFileSync(path.join(folder, 'index.html'), renderGuide(state, data.federal_modules[state.ein_module]));
  }
  console.log('Generated five review-only guides under staging/business-registration/.');
}
module.exports = { renderGuide, renderAll };
if (require.main === module) renderAll();
