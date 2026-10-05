import re
import unittest
from pathlib import Path
from html import unescape
ROOT=Path(__file__).resolve().parents[1]
class ReleaseMetadata(unittest.TestCase):
    def test_descriptions_are_complete_and_space_separated(self):
        cases={
          'faq/ai-basics/where-does-ai-get-its-information/index.html':'Learn where AI information comes from, including training, your prompts, connected tools, and retrieved sources, and why answers still need verification.',
          'faq/online-presence-business-visibility/how-search-engines-find-understand-business/index.html':None,
          'faq/online-presence-business-visibility/can-online-presence-affect-ai-systems-find-mention-business/index.html':None,
        }
        for file,expected in cases.items():
            with self.subTest(file=file):
                text=(ROOT/file).read_text()
                descriptions=re.findall(r'<meta (?:name|property)="(?:description|og:description|twitter:description)" content="([^"]+)"',text)
                self.assertEqual(len(descriptions),3)
                for desc in descriptions:
                    self.assertNotIn(',and',desc)
                    self.assertFalse(desc.endswith('and.'))
                    if expected:self.assertEqual(unescape(desc),expected)
