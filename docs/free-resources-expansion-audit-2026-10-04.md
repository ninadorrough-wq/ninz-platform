# NINZ Free Resources audit and expansion

Date: October 4, 2026
Repository: ninadorrough-wq/ninz-platform
Working branch: authority-platform-expansion-2026-10-03
Starting commit: d28aa45d21d839d5f21c48a4bbc1c71650631533
Production restriction: no deployment, default-branch write, or production merge.

## Existing library audit

Verified 12 resource records, 12 resource detail pages, the library index, referenced downloadable files, shared resource CSS, Learning Center, and connected FAQ pages. The branch has 155 FAQs. Existing content and download editions were retained. Some historical metadata still describes formats as future despite working downloads; this expansion does not reinterpret their approval state.

| Existing resource | Function and duplication boundary | Expansion decision |
|---|---|---|
| Business Startup & Foundation Checklist | Early business setup and foundation considerations | Goals planner begins with current outcomes; no repeated startup sequence |
| Business Information Master Sheet | Master record of identity, contacts, registrations, and provider details | New tools refer to it; bookkeeping uses shorthand and workflow details only |
| Business Compliance Calendar Template | Verified obligations, authority, jurisdiction, due date, verification source, and completion | New calendar schedules business execution; compliance remains in the existing tracker |
| Funding Readiness Checklist | Organizing lender-facing business and financial records | Bookkeeping organizer supports recurring records, without funding readiness ratings |
| Lender Comparison Worksheet | Factual funding offer comparison | No lender comparison or affordability recommendation added |
| Bank vs. Credit Union Comparison Worksheet | Institution/product comparison | Organizer maps existing accounts and payment channels rather than choosing banks |
| AI Task Finder Worksheet | Task suitability for AI, automation, and human judgment | Journal captures business decisions; visibility tool does not assess AI task suitability |
| AI Prompt Builder Template | Context, instructions, constraints, and verification in prompts | No duplicate prompt template created |
| AI Research Verification Checklist | Verification of AI facts, sources, currency, and jurisdiction | Visibility tool links official guidance without recreating research verification |
| Responsible AI for Business Checklist | Privacy, oversight, and review of AI outputs | New tools do not add an AI governance checklist |
| Google Business Profile Checklist | Detailed eligibility and profile field review | Visibility checklist refers to it for field-level platform requirements |
| Business Reviews & Credibility Checklist | CLEAR customer-facing credibility framework and review practices | Visibility checklist uses ordinary upkeep actions; no CLEAR ratings, evidence scale, or scoring |

The existing downloadable PDFs and spreadsheet tabs were inspected for purpose, layout/field structure, and duplication. The Business Information Organizer PDF has 16 fields; the compliance workbook contains a verified-obligation table rather than an execution month grid. The existing credibility checklist has separate digital/print editions. Its design informed the paired editions without copying its framework.

## New deliverables

Each new resource has a semantic web working tool, a fillable digital PDF, and a static low-ink print PDF. The final PDF page contains saving instructions, the full educational disclaimer, and connected tools/references. Resources are review candidates and marked unpublished in the resource registry. Their web routes and cards are prepared only on this working branch.

| Resource | PDF pages per edition | Fillable fields | Practical distinction |
|---|---:|---:|---|
| AI/AEO/GEO Visibility Checklist | 6 | 42 | Eight upkeep fundamentals plus action/owner/date; no assessment, scores, evidence rating, paid methodology, or outcome guarantee |
| NINZ Business Goals & Action Planner | 6 | 67 | One to three goal pages, milestones, assigned actions, measures, and monthly review |
| NINZ Business Journal | 4 | 28 | Weekly signals and reflection; decision log with reasons/revisit trigger; idea parking lot |
| NINZ Business Calendar | 5 | 88 | Undated 42-cell month grid, weekly schedule, monthly priorities, execution details, carry-forward |
| Small Business Bookkeeping Basics Organizer | 7 | 53 | Setup workflow, accounts/channels, category plan, record storage, routines, month-end review, professional questions; no ledger/calculations/advice |

Total: 5 web tools, 10 PDFs, 56 PDF pages across both editions, 278 interactive fields across digital editions. The branch library now contains 17 records. Print PDFs have no AcroForm fields.

## Integration

- Added five cards to the existing Free Resources Library and an execution/visibility tools section in the Learning Center.
- Added resource records RES-013 through RES-017 without changing the established twelve tools' purposes.
- Added reciprocal links from four existing resources and seven existing FAQ pages. FAQ runtime rendering remains intact because added links are outside its article mount.
- Each new tool connects to related FAQs, the Learning Center, and other appropriate resources. The visibility resource links to the actual AI Visibility Assessment description with an explicit free/paid distinction. No paid solution is forced into the bookkeeping or planning content.
- Added a working fragment target to the existing Assessment description and five source sitemap URLs.
- New web tools omit analytics/chat scripts and do not submit or persist entries. The shared appearance control may retain the theme preference. Print copies use text nodes so entered notes are preserved and long web entries can wrap.

## Rebuild and filenames

Canonical content: content/free-resources-expansion.json
Generator: scripts/build_free_resources.py
Rebuild: python scripts/build_free_resources.py
Dependencies: Python reportlab/pypdf, Node.js for reading the established JavaScript FAQ data, DejaVu fonts at /usr/share/fonts/truetype/dejavu.

The generator emits matching field IDs in HTML and PDFs, embeds body fonts, adds PDF language and widget tooltips/tab order, and fails on writing-area overflow. Filename pattern: NINZ_[Resource_Name]_Digital_v1.0.pdf or NINZ_[Resource_Name]_Print_v1.0.pdf.

## Download inventory

### AI/AEO/GEO Visibility Checklist

- assets/downloads/NINZ_AI_AEO_GEO_Visibility_Checklist_Digital_v1.0.pdf
- assets/downloads/NINZ_AI_AEO_GEO_Visibility_Checklist_Print_v1.0.pdf

### NINZ Business Goals & Action Planner

- assets/downloads/NINZ_Business_Goals_Action_Planner_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Goals_Action_Planner_Print_v1.0.pdf

### NINZ Business Journal

- assets/downloads/NINZ_Business_Journal_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Journal_Print_v1.0.pdf

### NINZ Business Calendar

- assets/downloads/NINZ_Business_Calendar_Digital_v1.0.pdf
- assets/downloads/NINZ_Business_Calendar_Print_v1.0.pdf

### Small Business Bookkeeping Basics Organizer

- assets/downloads/NINZ_Small_Business_Bookkeeping_Basics_Organizer_Digital_v1.0.pdf
- assets/downloads/NINZ_Small_Business_Bookkeeping_Basics_Organizer_Print_v1.0.pdf

## Source verification

The visibility text was checked against Google Search Central's AI features and structured data guidance on October 4, 2026. Google-specific statements are identified as such; no claim is made that every AI provider works the same way. The bookkeeping organizer references IRS recordkeeping guidance and keeps tax treatment, accounting method, and retention decisions with qualified professionals.

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping

## Remaining content dependencies

The branch does not contain verified standalone Learning Center article URLs for these five tools. The Blogger hub could not be read through the web retrieval tool. No article URLs were invented. Resource-to-FAQ and Learning Center hub links work now. Add verified related article links once the authority-content work supplies them; in particular, link the approved Bookkeeping Basics for Small Businesses article to RES-017 and add its future specific FAQ cluster to the organizer's related_faq_ids.

The user authorized these resource builds and their working-branch integration. Production publication remains a separate action and is not performed.

## QA evidence

QA results and independent review are recorded in docs/free-resources-expansion-qa-2026-10-04.md.
