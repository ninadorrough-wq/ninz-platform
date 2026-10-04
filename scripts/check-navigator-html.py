"""Structural QA for excluded review drafts; does not replace browser accessibility QA."""
import datetime
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
SLUGS = ('texas', 'kansas', 'arkansas', 'missouri', 'colorado')


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.elements = []
        self.stack = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        element = {'tag': tag, 'attrs': dict(attrs), 'text': ''}
        self.elements.append(element)
        if tag == 'img':
            for ancestor in self.stack:
                ancestor['text'] += element['attrs'].get('alt', '')
        if tag not in ('area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'):
            self.stack.append(element)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i]['tag'] == tag:
                del self.stack[i:]
                break

    def handle_data(self, text):
        for element in self.stack:
            element['text'] += text


def target_file(url):
    parts = urlsplit(url)
    if parts.netloc and parts.netloc != 'ninz.me':
        return None
    if parts.scheme not in ('', 'https', 'http'):
        return None
    route = unquote(parts.path)
    file = ROOT / 'dist' / route.lstrip('/')
    if file.is_dir() or route.endswith('/') or not route:
        file /= 'index.html'
    return file


results = []
for slug in SLUGS:
    file = ROOT / 'staging/business-registration' / slug / 'index.html'
    doc = Document(file.read_text())
    errors = []
    ids = [e['attrs']['id'] for e in doc.elements if 'id' in e['attrs']]
    if len(ids) != len(set(ids)):
        errors.append('Duplicate IDs')
    for tag in ('html', 'main', 'h1', 'title'):
        if sum(e['tag'] == tag for e in doc.elements) != 1:
            errors.append('Expected exactly one ' + tag)
    html = next(e for e in doc.elements if e['tag'] == 'html')
    if html['attrs'].get('lang') != 'en':
        errors.append('Missing document language')
    if not any(e['tag'] == 'meta' and e['attrs'].get('name') == 'robots' and e['attrs'].get('content') == 'noindex, nofollow' for e in doc.elements):
        errors.append('Missing noindex')
    if any(e['tag'] == 'link' and e['attrs'].get('rel') == 'canonical' for e in doc.elements):
        errors.append('Draft canonical must be omitted')
    for e in doc.elements:
        a = e['attrs']
        for attr in ('aria-labelledby', 'aria-describedby', 'aria-controls'):
            for id in a.get(attr, '').split():
                if id not in ids:
                    errors.append('Dangling ' + attr + ': ' + id)
        if e['tag'] == 'img' and 'alt' not in a:
            errors.append('Image missing alt')
        if e['tag'] in ('button', 'a') and not (e['text'].strip() or a.get('aria-label') or a.get('aria-labelledby')):
            errors.append('Control missing accessible name')
        if a.get('target') == '_blank' and not {'noopener', 'noreferrer'}.issubset(set(a.get('rel', '').split())):
            errors.append('External new-tab link missing rel protection')
        if 'href' in a and a['href'].startswith('#'):
            if a['href'][1:] not in ids:
                errors.append('Broken draft anchor ' + a['href'])
        else:
            for attr in ('href', 'src'):
                if attr in a:
                    target = target_file(a[attr])
                    if target is not None:
                        if not target.is_file():
                            errors.append('Missing public internal target ' + a[attr])
                        elif urlsplit(a[attr]).fragment and target.suffix == '.html':
                            linked = Document(target.read_text())
                            linked_ids = {x['attrs']['id'] for x in linked.elements if 'id' in x['attrs']}
                            if urlsplit(a[attr]).fragment not in linked_ids:
                                errors.append('Missing linked fragment ' + a[attr])
        if e['tag'] == 'script' and a.get('type') == 'application/ld+json':
            try:
                schema = json.loads(e['text'])
                if schema[0]['@type'] != 'WebPage' or schema[1]['@type'] != 'BreadcrumbList':
                    errors.append('Unexpected schema types')
            except (ValueError, KeyError, IndexError):
                errors.append('Invalid structured data')
    results.append({'state': slug, 'file': str(file.relative_to(ROOT)), 'elements': len(doc.elements), 'links': sum(e['tag'] == 'a' for e in doc.elements), 'status': 'PASS' if not errors else 'FAIL', 'errors': errors})
report = {'checked_date': datetime.datetime.now(datetime.timezone.utc).date().isoformat(), 'scope': 'HTML semantics, accessible names, internal assets/links, IDs/ARIA, metadata and structured data', 'browser_visual_keyboard_contrast_review': 'NOT COMPLETED — Chromium executable unavailable; download failed', 'results': results}
output = ROOT / 'docs/business-registration-cohort-01-html-checks.json'
output.write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report, indent=2))
raise SystemExit(1 if any(r['errors'] for r in results) else 0)
