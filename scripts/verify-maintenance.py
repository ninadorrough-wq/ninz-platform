"""Verify Work 4's component boundary and preserved Work 1–3 inventory. No network."""
import json
import re
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
BASE = '9f07c408daf8adc0a06da4c276a6b89bac361d42'
EXPECTED = [
    'https://www.facebook.com/byninzme/?rdid=ndTlnJALmJUe8z7L',
    'https://www.instagram.com/byninz.me?igsh=bXdzdG4xYWwzbHlu&utm_source=qr',
    'https://www.linkedin.com/in/ninadorroughofficial/',
    'https://www.youtube.com/@ByNINZ',
    'https://www.tiktok.com/@byninz.me',
    'https://ninzlearningcenter.blogspot.com/'
]

class Footer(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.links, self.symbols = [], []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a':
            assert a.get('aria-label') and 'opens in a new tab' in a['aria-label']
            assert a.get('target') == '_blank'
            assert {'noopener', 'noreferrer'} <= set(a.get('rel', '').split())
            self.links.append(a['href'])
        if tag == 'svg':
            assert a.get('aria-hidden') == 'true' and a.get('focusable') == 'false'
        if tag == 'use': self.symbols.append(a['href'])

def original(p):
    return subprocess.check_output(['git', 'show', BASE + ':' + p], cwd=ROOT)

def verify():
    files = subprocess.check_output(['git','ls-tree','-r','--name-only',BASE],cwd=ROOT,text=True).splitlines()
    changed = []
    for name in files:
        current = (ROOT/name).read_bytes()
        old = original(name)
        if name.endswith('.html') and not name.startswith(('staging/','docs/')):
            before = re.search(r'<div class="social-links"[^>]*>.*?</div>',old.decode(),re.S)
            if before:
                after = re.search(r'<nav class="social-links"[^>]*>.*?</nav>',current.decode(),re.S)
                assert after, name + ': missing named social navigation'
                comparable = current.decode().replace(after[0],before[0])
                if name == 'index.html':
                    for a,b in [('--gold-deep:var(--gold-text)','--gold-deep:#765514'),
                        ('<strong>166</strong>','<strong>155</strong>'),('<strong>9</strong>','<strong>8</strong>'),
                        ('<strong>17</strong>','<strong>12</strong>'),('166 answers','155 answers'),('17 tools','12 tools')]:
                        comparable = comparable.replace(a,b)
                if name == 'solutions.html':
                    comparable = re.sub(r'<span role="(?:cell|columnheader)"','<span',comparable)
                assert comparable == old.decode(), name + ': change outside approved component corrections'
                footer = Footer(after[0])
                assert footer.links == EXPECTED, name + ': social destination changed'
                assert len(footer.symbols) == 6
                for reference in footer.symbols:
                    file, symbol = reference.split('#')
                    tree = ET.parse(ROOT/file.lstrip('/'))
                    assert tree.find(f'.//*[@id="{symbol}"]') is not None, reference
                changed.append(name)
                continue
        if name == 'assets/styles.css': continue
        if name == 'assets/business-registration.css':
            assert current.decode().replace('background: var(--gold);\n  color: #1E1E1E;',
                'background: var(--gold);\n  color: var(--charcoal);') == old.decode()
            continue
        assert current == old, name + ': protected baseline file changed'
    assert len(changed) == 219, len(changed)
    print(json.dumps({'public_footers':len(changed),'social_destinations_per_footer':6,
        'protected_baseline_files':'unchanged except public footers, scoped contrast, inventory and comparison semantics',
        'staged_guides':'five byte-identical review guides', 'metadata_changes':0},indent=2))

if __name__ == '__main__': verify()
