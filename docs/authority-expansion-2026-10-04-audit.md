# NINZ authority expansion: audit and implementation decisions

Audit date: October 4, 2026. Working branch: `authority-platform-expansion-2026-10-03`.
Starting commit: `d28aa45d21d839d5f21c48a4bbc1c71650631533`.

## Authority and retrieval integrity

- User handoff authorizes these two educational clusters and the Learning Center scrub. EDUCATION FIRST. SOLUTION SECOND.
- Git clone recovered `assets/faq-library-data.js` intact: 1,763,673 bytes; Git blob SHA `2cd88c6878deaa3f1d8787e82a0a1850ecc84662`, identical to the GitHub recursive tree response. Empty connector content was not used to reconstruct the file.
- Parsed baseline: 155 published FAQ records, 16 configured categories, eight public categories, 155 individual FAQ pages, 12 Free Resources, 12 existing download files.
- Current NINZ Master Project Registry read October 4: KNW-002 generic 20-FAQ expansion remains PARKED; KNW-005 defines the seven-section article structure; RES-014 records the bookkeeping article + relevant FAQs + digital/print-friendly downloadable and explicitly excludes duplicating business/personal banking content. The current user handoff authorizes work on RES-014 without changing its registry status or production inventory.
- Approved current content batch read in full: `NINZ_Content_Blog_Batch_2026-10-02_UPDATED.docx`. Preserve November 5 bookkeeping and November 19 follow-up recommendations. Adapt those existing drafts to the required article structure, rather than create competing article versions. Do not change October 1/15 plans.
- Registry URL: https://docs.google.com/spreadsheets/d/1x3wNU0CovSOLj-LnQ7oynDjh7Nu-UCj5yVoJZKR2PyY/edit
- Blogger hub: https://ninzlearningcenter.blogspot.com/ . Article publication URLs are not yet known and must not be invented.

## Coverage decisions

| Proposed question | Existing coverage | Decision |
| --- | --- | --- |
| What is bookkeeping and why does a small business need it? | Banking/startup material mentions bookkeeping but does not explain it. | New OPS-001. |
| What financial records should a small business keep? | BUS-012 and CREDIT-013 mention records for banking/funding; no dedicated routine-recordkeeping answer. | New OPS-002; link existing banking answer. |
| How often should bookkeeping records be updated? | No dedicated answer. | New OPS-003. |
| Should business and personal finances be separated? | BUS-012 gives a substantive answer, reasons, qualifications and sources; RES-001 covers the setup habit. | Exclude separate FAQ; reuse BUS-012 and add guide links. |
| How should receipts and expense records be organized? | No dedicated answer or practical downloadable. | New OPS-004; reuse concurrent RES-017 organizer. |
| What is the difference between bookkeeping and accounting? | No dedicated answer. | New OPS-005. |
| Does a small business need bookkeeping software to start? | AI task-planning tools are not bookkeeping guidance. | New OPS-006. |
| When should a small business work with a bookkeeper, accountant, or tax professional? | RES-002 records professional contacts; no explanation of the decision. | New OPS-007. |
| What is a customer follow-up system? | AI-047/049/052/053 mention customer service, reminders and workflows; no complete customer follow-up process. | New OPS-008. |
| Does a small business need a CRM to follow up with customers? | No dedicated answer. | New OPS-009. |
| When does follow-up automation make sense? | AI-052 explains AI versus automation; not process readiness, stopping rules or human handoffs. | New OPS-010; reuse AI-052 for the distinction. |
| What should a small business measure in its follow-up process? | VIS-011/013/021 cover web/search/visibility measures, not customer follow-up operations. | New OPS-011. |

Adequately covered topics not expanded: business banking/setup, business credit and funding, grants, AI basics/tool comparisons, AI versus automation, online visibility, business profiles/reviews, AI search, landing pages and messaging clarity. The approved November operations topics are the gaps. No fixed question quota is used.

Existing resources inspected: startup/foundation checklist, business-information master sheet, compliance calendar, funding readiness, lender comparison, bank/credit-union comparison, AI task finder, prompt builder, AI research verification, responsible AI, Google Business Profile, and business reviews/credibility. None is a bookkeeping routine or customer follow-up tracker. Reuse appropriate existing tools; add only the explicitly approved bookkeeping downloadable. The initially reserved AI/AEO/GEO checklist was subsequently added by concurrent approved work; preserve it without recreating it.

## Bounded implementation

1. Preserve baseline FAQ objects and their IDs. Append OPS-001 through OPS-011, activate the already configured Business Growth & Operations category, and add two guide records plus the bookkeeping resource reference. Only add related guide links to BUS-012 and AI-052.
2. Create category and individual pages with matching metadata, canonical URLs, FAQPage and BreadcrumbList. Keep full new FAQ content available without JavaScript, and retain the established renderer/search architecture.
3. Adapt the approved November drafts into two native Learning Center guides using Question, Why It Matters, What You Need to Know, Misconceptions, FAQs, Related Guides, and a soft NINZ help section. Produce separate Blogger packages with complete article HTML and all requested settings. Publication remains manual and unscheduled.
4. Reuse the concurrently added RES-017 Small Business Bookkeeping Basics Organizer, including its existing digital and print editions. Link it in the guide and FAQs, and add reciprocal guide/FAQ references to its canonical content and generator. Remove the independently drafted duplicate checklist; do not introduce a second bookkeeping resource.
5. Scrub Learning Center cards: replace broad Business Tips with the two practical guides; connect Landing Page Tips to existing website FAQs; connect Chatbot Tips to existing customer-service/automation FAQs; retain the genuinely future Virtual Concierge guide clearly marked Coming soon. Keep Navigator, Blogger, existing downloads and video pathways.
6. Connect relevant existing resources back to these guides. Add only actual native pages to the sitemap; no Blogger guesses, documents or download files. Update FAQ data cache keys across consumers.

## QA and release boundaries

- Verify original-object preservation, unique IDs/questions/URLs, category routing, related IDs, individual pages and schema-answer parity.
- Verify metadata, JSON-LD, sitemap uniqueness/coverage and every local HTML link/fragment. Distinguish inherited issues from introduced ones.
- Browser-check search, category, both guides and checklist on desktop/mobile, JavaScript-off content and dark theme; inspect PDF renders and form fields.
- Review source-supported factual claims and NINZ voice. Practical routines are suggestions, not universal legal requirements. No fixed retention period or deduction promise. No revenue/ranking/AI recommendation guarantees.
- Only the $297 one-time AI Visibility Assessment and $150/month Visibility Monitor are Available Now. Retained services remain Coming Soon. Neither current offer is positioned as bookkeeping or customer follow-up implementation.
- No deployment, default-branch writes, merge, Blogger publication/scheduling or customer messages. Preserve the branch's pre-existing Navigator work.

## Editorial references checked October 4, 2026

- IRS, What kind of records should I keep: https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep
- IRS Publication 583 (December 2024 revision), recordkeeping sections: https://www.irs.gov/publications/p583
- SBA, Manage your business (current consolidated finance/marketing guidance): https://www.sba.gov/counseling/manage-your-business/
- FTC, CAN-SPAM Act: A Compliance Guide for Business: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business

Source support is specific: IRS supports records, documentation, recording and reconciliation; SBA supports financial management/professional help and customer support; FTC supports marketing email opt-outs and the distinction between commercial and transactional/relationship messages. The follow-up stages, tracker fields, example messages and metrics are NINZ educational suggestions, not regulator-prescribed systems.

## Completion evidence and remaining verification

- Branch inventory after implementation: 166 FAQs, nine public categories, 17 Free Resources, 22 download files and 219 sitemap URLs. These are staged branch counts, not a production baseline update.
- Standard-library/Node QA scans 225 HTML pages including the preserved staged Navigator pages, all local links and fragments, all 166 FAQ page IDs/canonicals/schema answers, category routes and sitemap targets. Zero introduced errors. Original 155 FAQ objects compare equal to the baseline except the two authorized related-guide additions; all 12 original Free Resource records compare equal.
- New guides and Blogger adaptations have all seven required sections. Blogger HTML uses absolute native links and includes no invented live Blogger article URL. Separate settings files preserve November 5/19 recommendations without publishing or scheduling.
- The initially drafted two-page checklist was checked and then removed to avoid duplicating concurrent work. Final deliverables reuse the existing seven-page digital and print bookkeeping organizer; its 53-field digital edition and PDF layout/round-trip evidence are recorded in the concurrent resource QA report. Resource contract checks were rerun after adding links; the PDFs were not modified.
- Fixed two new link slugs against the actual canonical FAQ records. Corrected an inherited PRC-014 schema spacing error (`policy,not` to `policy, not`) without changing its editorial answer.
- Logged 29 inherited differences between static page descriptions and library metadata. These alternate/truncated descriptions existed before this task. New-page metadata is consistent; broader existing metadata normalization is deferred so original approved FAQ records are preserved.
- Independent final review found no Critical or Important defects. Corrected its two Minor findings: new FAQ title grammar, and static source/journey content parity. Static pages now include source types, supported claims, access dates and specific guide button text. The verifier checks those details, all explanation/misconception/insight text, and title/OG/Twitter consistency. It also compares each inherited description difference directly with the starting commit.
- Initial browser setup was blocked, but the concurrent resource work provided a working local Chromium. Browser QA now passes 28 desktop/mobile/light/dark layouts across seven pages, all eleven new FAQ pages with JavaScript disabled, FAQ search/category inclusion, and FAQ → guide → organizer → guide navigation. No page errors or axe-core WCAG 2 A/AA and 2.1 AA violations. Corrected inherited Learning Center process-number contrast with a scoped CSS rule. Representative desktop/mobile guide and Learning Center screenshots were visually inspected. Automated checks do not constitute a full manual accessibility conformance audit.
- Public Blogger retrieval also failed in web lookup. The approved October 2 batch and current registry were read; no claim is made that the live Blogger feed or current scheduling UI was independently audited. Check those before Blogger publication, as the package instructions require.
- No deployment, merge, default-branch write, Blogger publish/schedule or customer message was performed.

## Concurrent branch integration

Before saving, the remote had advanced to `a5c907909465437d933269bc8dc2f387f688d471`, combining approved five-resource work and staged Navigator work. Integrated it without losing its changes. Its RES-017 bookkeeping organizer covers the approved downloadable need, so removed this task’s independently drafted checklist route, PDF and build script. No extra resource ID is added. The initial project-registry identifier RES-014 is distinct from the final Free Resources record RES-017.

Updated organizer source content, registry, web generator and webpage with OPS-001–007 and the native bookkeeping guide. Existing organizer PDFs are unchanged. Preserved all other concurrent resource records and Navigator/publication safeguards. The local public-artifact build now includes the new `learning-center` directory and continues excluding staged Navigator routes.

Integrated validation: two resource artifact tests and twelve Navigator tests pass. Local-only public artifact contains all 219 sitemap targets and the new guides, while staged Navigator routes remain excluded. The build is not a deployment.
