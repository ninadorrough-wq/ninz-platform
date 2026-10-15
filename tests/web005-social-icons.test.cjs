const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const expected = [
  ['facebook', 'https://www.facebook.com/byninzme/?rdid=ndTlnJALmJUe8z7L'],
  ['instagram', 'https://www.instagram.com/byninz.me?igsh=bXdzdG4xYWwzbHlu&amp;utm_source=qr'],
  ['linkedin', 'https://www.linkedin.com/in/ninadorroughofficial/'],
  ['youtube', 'https://www.youtube.com/@ByNINZ'],
  ['tiktok', 'https://www.tiktok.com/@byninz.me'],
  ['blogger', 'https://ninzlearningcenter.blogspot.com/']
];

function publicHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['dist', 'staging', '.git'].includes(entry.name)) return [];
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? publicHtml(p) : entry.name.endsWith('.html') ? [p] : [];
  });
}

test('WEB-005 uses the established six destinations and accessible symbols on every public page', () => {
  const pages = publicHtml(root).filter(p => fs.readFileSync(p, 'utf8').includes('class="social-links"'));
  assert.ok(pages.length > 200);
  const symbols = fs.readFileSync(path.join(root, 'assets/social-icons.svg'), 'utf8');
  for (const [icon] of expected) assert.match(symbols, new RegExp(`<symbol id="${icon}"`));
  for (const page of pages) {
    const html = fs.readFileSync(page, 'utf8');
    const nav = html.match(/<nav class="social-links"[^>]*>(.*?)<\/nav>/s)?.[1];
    assert.ok(nav, page);
    assert.equal((nav.match(/class="social-icon"/g) || []).length, 6, page);
    for (const [icon, url] of expected) {
      assert.ok(nav.includes(`href="${url}"`), `${page}: ${icon} destination`);
      assert.ok(nav.includes(`/assets/social-icons.svg#${icon}`), `${page}: ${icon} symbol`);
    }
    assert.equal((nav.match(/aria-label="NINZ [^"]+\(opens in a new tab\)"/g) || []).length, 6, page);
    assert.equal((nav.match(/rel="noopener noreferrer"/g) || []).length, 6, page);
  }
  const css = fs.readFileSync(path.join(root, 'assets/styles.css'), 'utf8');
  assert.match(css, /\.social-icon\{[^}]*width:48px;height:48px/);
  assert.match(css, /\.social-icon:focus-visible\{outline-color:var\(--charcoal\)/);
});
