// Candidate-only Deploy Preview: normal public artifact plus noindex review drafts.
const fs = require('node:fs');
const path = require('node:path');
const { buildPublic } = require('./build-public.cjs');

const branch = 'navigator-ten-state-release-2026-10-13';
const slugs = ['texas', 'kansas', 'arkansas', 'missouri', 'colorado', 'new-mexico', 'louisiana', 'nebraska', 'iowa', 'mississippi'];

function buildReviewPreview(sourceRoot, outputRoot, env = process.env) {
  if (env.CONTEXT !== 'deploy-preview' || env.REVIEW_ID !== '3' || ![branch, 'pull/3/head'].includes(env.BRANCH)) {
    throw new Error('Review drafts require PR #3 in the candidate Deploy Preview context.');
  }
  sourceRoot = path.resolve(sourceRoot);
  outputRoot = buildPublic(sourceRoot, outputRoot);
  for (const slug of slugs) {
    const source = path.join(sourceRoot, 'staging/business-registration', slug, 'index.html');
    const target = path.join(outputRoot, 'review/business-registration', slug, 'index.html');
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
  }
  fs.appendFileSync(path.join(outputRoot, '_headers'), '\n/review/business-registration/*\n  X-Robots-Tag: noindex, nofollow\n');
  return outputRoot;
}

module.exports = { buildReviewPreview };
if (require.main === module) {
  console.log(`Candidate review artifact prepared at ${buildReviewPreview(path.resolve(__dirname, '..'), path.resolve(__dirname, '../dist'))}`);
}
