const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const { buildReviewPreview } = require('../scripts/build-navigator-review-preview.cjs');

test('candidate Deploy Preview exposes noindex review routes without activating state routes', () => {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'ninz-preview-'));
  try {
    buildReviewPreview(root, output, { CONTEXT: 'deploy-preview', BRANCH: 'pull/3/head', REVIEW_ID: '3' });
    for (const slug of ['texas', 'kansas', 'arkansas', 'missouri', 'colorado', 'new-mexico', 'louisiana', 'nebraska', 'iowa', 'mississippi']) {
      const review = fs.readFileSync(path.join(output, 'review/business-registration', slug, 'index.html'), 'utf8');
      assert.match(review, /name="robots" content="noindex, nofollow"/);
      assert.match(review, /Public status: Coming Soon/);
      assert.ok(!fs.existsSync(path.join(output, 'business-registration', slug, 'index.html')));
      if (slug === 'arkansas') assert.doesNotMatch(review, /Portal review note:/);
      else assert.match(review, /Portal review note:/);
    }
    const publicData = fs.readFileSync(path.join(output, 'assets/business-registration-data.js'), 'utf8');
    assert.doesNotMatch(publicData, /TX-TWC-001|NM-SOS-001/);
    assert.match(fs.readFileSync(path.join(output, '_headers'), 'utf8'), /\/review\/business-registration\/\*\s+X-Robots-Tag: noindex, nofollow/);
  } finally { fs.rmSync(output, { recursive: true, force: true }); }
});

test('review build rejects every other branch or context', () => {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'ninz-guard-'));
  try {
    for (const env of [
      { CONTEXT: 'production', BRANCH: 'pull/3/head', REVIEW_ID: '3' },
      { CONTEXT: 'deploy-preview', BRANCH: 'pull/1/head', REVIEW_ID: '1' },
      { CONTEXT: 'deploy-preview', BRANCH: 'main', REVIEW_ID: '3' },
      {}
    ]) {
      assert.throws(() => buildReviewPreview(root, output, env), /candidate Deploy Preview/);
      assert.ok(!fs.existsSync(path.join(output, 'review')));
    }
  } finally { fs.rmSync(output, { recursive: true, force: true }); }
});
