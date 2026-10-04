"""Artifact contract: broken downloads, unlabeled inputs, and unsafe scope must fail."""
import json, unittest
from pathlib import Path
from html.parser import HTMLParser
from pypdf import PdfReader
ROOT=Path(__file__).resolve().parents[1]
SLUGS=['ai-aeo-geo-visibility-checklist','business-goals-action-planner','business-journal','business-calendar','small-business-bookkeeping-basics-organizer']
class Page(HTMLParser):
 def __init__(self): super().__init__(); self.ids=[]; self.controls=[]; self.labels=[]; self.downloads=[]
 def handle_starttag(self,t,a):
  a=dict(a)
  if 'id' in a:self.ids.append(a['id'])
  if t in ('input','textarea','select'):self.controls.append(a)
  if t=='label' and 'for' in a:self.labels.append(a['for'])
  if t=='a' and 'download' in a:self.downloads.append(a['href'])
class ResourceContract(unittest.TestCase):
 def test_five_complete_resources(self):
  for slug in SLUGS:
   with self.subTest(slug=slug):
    p=ROOT/'resources'/slug/'index.html';self.assertTrue(p.exists(),f'Missing working resource: {slug}')
    s=p.read_text();h=Page();h.feed(s)
    self.assertEqual(len(h.ids),len(set(h.ids)))
    self.assertGreater(len(h.controls),10)
    for a in h.controls:self.assertIn(a.get('id'),h.labels)
    self.assertEqual(len(h.downloads),2)
    self.assertIn('application/ld+json',s);self.assertIn('canonical',s)
    for href in h.downloads:
     pdf=(p.parent/href).resolve();self.assertTrue(pdf.exists(),f'Broken download: {href}')
     r=PdfReader(pdf);self.assertGreaterEqual(len(r.pages),3);self.assertTrue(r.metadata.title);self.assertEqual(r.metadata.author,'NINZ')
     fields=r.get_fields() or {}
     if '_Digital_' in href:
      self.assertGreater(len(fields),10)
      self.assertTrue(all(f.get('/TU') for f in fields.values()))
      self.assertEqual(len(fields),len(h.controls))
     else:self.assertFalse(fields)
 def test_scope_boundaries(self):
  p=ROOT/'resources'/SLUGS[0]/'index.html';self.assertTrue(p.exists(),'Visibility resource not built')
  s=p.read_text().lower()
  self.assertIn('does not guarantee rankings',s)
  self.assertNotIn('evidence rating',s);self.assertNotIn('clear credibility check',s)
  p=ROOT/'resources'/SLUGS[-1]/'index.html';s=p.read_text().lower()
  self.assertIn('not accounting, tax, legal',s)
if __name__=='__main__':unittest.main()
