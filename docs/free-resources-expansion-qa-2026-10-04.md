# NINZ Free Resources expansion QA

Date: October 4, 2026
Branch: authority-platform-expansion-2026-10-03
Base commit: d28aa45d21d839d5f21c48a4bbc1c71650631533
Status: five resources built and checked as working-branch review candidates. No production deployment or merge.

| Check | Result |
|---|---|
| Baseline and duplication audit | All 12 existing tools and referenced downloads inspected; no replacement or duplicate master/compliance tool |
| Artifact contract tests | 2 tests pass, covering all five web tools and ten PDF downloads |
| JavaScript syntax / git whitespace | Pass |
| PDF layout | All 56 pages across 10 editions rendered and visually inspected; no clipped headings, tables, fields, or writing areas |
| Fillable PDFs | 278 fields filled, saved, reopened; values agree and widget appearances exist; representative populated pages visually checked |
| PDF field placement | All widgets within the working page area; no footer overlap |
| Static print PDFs | No interactive form fields; white background, ruled writing areas, grayscale-readable text |
| Metadata and filenames | Titles, authors, language, descriptions, canonical/Open Graph data, JSON-LD, versions, stable Digital/Print filenames checked |
| Local links | 855 local references across 19 changed/new web pages resolve, including fragment targets |
| Phone/desktop presentation | 20 layouts: five tools at 390px and 1280px, light and dark themes; no horizontal overflow |
| Automated web accessibility | axe-core WCAG 2 A/AA and 2.1 AA checks pass in all 20 layouts after appearance transitions settle |
| Web forms | All 278 controls labeled; repeated row labels include entry numbers; print action and clear confirmation/cancel tested; no JavaScript page errors |
| Web print | Entered text preserved; default output has 6 / 6 / 4 / 5 / 7 pages respectively; calendar weekly page remains together |
| Populated calendar print | Independent reviewer tested representative entries; weekly page stayed together. Maximum-length notes may add a page while preserving content |
| Rebuild consistency | Independent reviewer reproduced all five HTML tools and ten PDF editions byte-for-byte |
| Independent review | No Critical findings; calendar print fragmentation fixed; row labels, clear feedback, and dependency documentation improved; recheck found no material findings |
| Paid-service boundary | Visibility upkeep checklist contains no individualized assessment, numerical score, evidence-rating framework, paid methodology, or outcome guarantee |
| Bookkeeping disclaimer | Educational organization, no accounting/tax/legal/individualized financial advice; no deduction determination, account numbers, or tax IDs requested |

## Practical limits and dependencies

- Related standalone Learning Center article URLs remain a dependency of the authority-content work. Current related FAQ, resource, and Learning Center hub links work. Add the approved bookkeeping article and its specific FAQ cluster once their verified routes exist.
- PDF readers vary. Download and test a field before completing a digital edition; save and reopen the file. Long PDF entries may scroll, so concise notes and print-preview checking are recommended in the resource itself.
- Web pages provide semantic headings, fieldsets, labels, keyboard focus, responsive layouts, and visible status feedback. The PDFs have field tooltips and language metadata but are not fully PDF/UA tagged; use the web version for semantic assistive-technology navigation. Automated checks do not replace a full manual accessibility conformance audit.

## Repeating checks

Run `python -m unittest discover -s tests -v`. Rebuild with `python scripts/build_free_resources.py` (reportlab, pypdf, Node.js, and system DejaVu fonts required).

Browser QA is in `scripts/qa_free_resources.cjs`. It serves the repository on an ephemeral local port and blocks external requests. Install Playwright, Chromium, and axe-core in your development environment; run `node scripts/qa_free_resources.cjs`. Optional environment variables: NINZ_PLAYWRIGHT_MODULE, NINZ_AXE_SCRIPT, NINZ_CHROMIUM_EXECUTABLE, NINZ_QA_OUTPUT. Reports/screenshots are temporary QA output, not production content.

## Files changed

- assets/downloads/NINZ_AI_AEO_GEO_Visibility_Checklist_Digital_v1.0.pdf
- assets/downloads/NINZ_AI_AEO_GEO_Visibility_Checklist_Print_v1.0.pdf
- assets/downloads/NINZ_Business_Calendar_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Calendar_Print_v1.0.pdf
- assets/downloads/NINZ_Business_Goals_Action_Planner_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Goals_Action_Planner_Print_v1.0.pdf
- assets/downloads/NINZ_Business_Journal_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Journal_Print_v1.0.pdf
- assets/downloads/NINZ_Small_Business_Bookkeeping_Basics_Organizer_Digital_v1.0.pdf
- assets/downloads/NINZ_Small_Business_Bookkeeping_Basics_Organizer_Print_v1.0.pdf
- assets/free-resources-data.js
- assets/resource-working-tools.css
- assets/resource-working-tools.js
- content/free-resources-expansion.json
- docs/free-resources-expansion-audit-2026-10-04.md
- docs/free-resources-expansion-qa-2026-10-04.md
- faq/ai-for-business/can-ai-help-me-create-a-business-plan/index.html
- faq/business-credit-funding/does-business-bank-account-help-funding-readiness/index.html
- faq/business-registration-compliance/do-i-need-a-business-bank-account/index.html
- faq/online-presence-business-visibility/does-small-business-website-need-faq-page/index.html
- faq/online-presence-business-visibility/seo-aeo-geo-differences-small-business/index.html
- faq/online-presence-business-visibility/special-ai-markup-faq-schema-llms-txt-ai-answers/index.html
- faq/online-presence-business-visibility/why-business-information-should-be-consistent-online/index.html
- learning-center.html
- resources/ai-aeo-geo-visibility-checklist/index.html
- resources/business-calendar/index.html
- resources/business-compliance-calendar-template/index.html
- resources/business-goals-action-planner/index.html
- resources/business-information-master-sheet/index.html
- resources/business-journal/index.html
- resources/business-reviews-credibility-checklist/index.html
- resources/google-business-profile-checklist/index.html
- resources/index.html
- resources/small-business-bookkeeping-basics-organizer/index.html
- scripts/build_free_resources.py
- scripts/qa_free_resources.cjs
- sitemap.xml
- solutions.html
- tests/test_free_resources.py
