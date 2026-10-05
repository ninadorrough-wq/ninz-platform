# NINZ FAQ and Learning Center authority expansion

October 4, 2026. Repository: `ninadorrough-wq/ninz-platform`.
Working branch: `authority-platform-expansion-2026-10-03`.
Initial audit commit: `d28aa45d21d839d5f21c48a4bbc1c71650631533`.
Concurrent integration base: `a5c907909465437d933269bc8dc2f387f688d471`.

## Result

Completed the two approved educational clusters and Learning Center scrub on the working branch. No deployment, production/default merge or write, Blogger publication/scheduling, or customer message was performed. The generic 20-FAQ project remains parked. EDUCATION FIRST. SOLUTION SECOND.

| Branch inventory | Initial audit | Final combined branch |
| --- | ---: | ---: |
| Published FAQ records and individual pages | 155 | 166 |
| Public FAQ categories | 8 | 9 |
| Free Resource records | 12 | 17 |
| Download files | 12 | 22 |
| Sitemap URLs | 200 | 219 |

The five additional resources and ten PDFs came from concurrent approved work. This authority task adds 11 FAQs, one category page and two native guides; it introduces no duplicate resource. The ninth category activates the existing Business Growth & Operations configuration. Original FAQ objects compare unchanged except related-guide additions to BUS-012 and AI-052. Original 12 resource records are preserved; concurrent resource records are preserved except authorized related content on RES-017. The FAQ source was recovered intact by Git clone and its blob hash matched GitHub before editing.

## Additions and coordinated pathways

- Seven bookkeeping FAQs, OPS-001–007: meaning, financial records, update frequency, receipts, bookkeeping versus accounting, starting without software, and choosing professional help. They apply to small businesses generally.
- Four customer follow-up FAQs, OPS-008–011: a repeatable system, CRM needs, automation readiness and useful measures.
- Two native guides using Question, Why It Matters, What You Need to Know, Misconceptions, FAQs, Related Guides, and a soft NINZ help section.
- Two complete Blogger article/settings packages adapted from the approved October 2 batch. Each includes labels, search/meta description, recommended slug, optional-location guidance, scheduling recommendation and internal links. No live Blogger URL is invented. November 5/19, 2026 remain recommendations; no schedule was set and October 1/15 plans were not changed.
- Reciprocal links from FAQs and relevant resources. Existing RES-017 Small Business Bookkeeping Basics Organizer now links the seven FAQs and guide through its registry, canonical source, generator and web page. Its existing seven-page Digital and Print PDFs remain unchanged.
- Matching individual-page IDs, categories, canonical URLs, schema, metadata, 14 authority sitemap additions and FAQ data cache-key updates.
- The local public-artifact builder includes the new Learning Center directory and retains the staged Navigator publication safeguards.

Native guides:

- `/learning-center/bookkeeping-basics-small-businesses/`
- `/learning-center/simple-customer-follow-up-system/`

Blogger packages:

- `docs/blogger/bookkeeping-basics-small-businesses.html` and `.md`
- `docs/blogger/simple-customer-follow-up-system.html` and `.md`

## Exclusions and Learning Center scrub

- No duplicate business/personal-finance separation FAQ: reuse substantive BUS-012.
- No duplicate AI-versus-automation answer: reuse AI-052; OPS-010 addresses follow-up readiness, exceptions, stop rules and handoffs.
- No expansion of adequately covered banking, credit/funding, grants, AI basics/comparisons, visibility/profile/review, landing-page or messaging-clarity subjects.
- Removed this task's independently drafted bookkeeping checklist route, PDF and generator after the remote advanced with the approved organizer. No second bookkeeping tool or conflicting resource ID is retained. The project-registry identifier RES-014 is distinct from Free Resources record RES-017.
- No extra customer-follow-up downloadable; the guide and existing relevant tools serve the approved need.
- Business Tips now routes to the two practical guides. Landing Page Tips routes to existing website FAQs; Chatbot Tips routes to existing customer-service/automation FAQs. Virtual Concierge Guide remains clearly Coming soon. Existing Navigator, Blogger, Free Resources/video routes and the concurrently added planning-tool section remain.
- Educational CTAs lead to learning/resources. Available offers remain AI Visibility Assessment at $297 one-time and Visibility Monitor at $150/month. Other retained services remain Coming Soon. NINZ is not presented as a bookkeeping, accounting, legal or tax provider or a current follow-up implementation provider.

## QA results

- Static integrity QA passes: 166 FAQs, nine public categories, 17 resource records, 22 downloads, 219 sitemap URLs and 225 HTML pages including preserved staged Navigator pages. Zero introduced errors; zero inherited broken local links/fragments.
- Checks include preservation, duplicates/IDs/categories, individual pages, schema answers, canonical/OG/Twitter metadata, full new FAQ static answer/explanation/misconception/insight/source/journey content, required guide/Blogger structures, settings, local links/fragments and sitemap coverage.
- Browser QA passes 28 layouts across seven pages at 390px/1280px in light/dark themes, with zero page errors and zero axe-core WCAG 2 A/AA and 2.1 AA violations. Search/category inclusion, all 11 new FAQs with JavaScript off, and FAQ → guide → organizer → guide navigation pass. Representative screenshots were visually inspected. A scoped fix corrects inherited dark-theme process-number contrast on the Learning Center.
- Two resource artifact tests and twelve Navigator tests pass. All five generated resource webpages exactly match generator output. Organizer PDF contracts pass; prior concurrent QA documents its 53-field digital edition, seven-page editions and filled-field/layout checks. PDFs were not changed in this task.
- Local-only public artifact contains all 219 sitemap targets and both guides; staged Navigator routes remain excluded. No deployment command ran.
- JavaScript syntax and Git whitespace checks pass. Independent content review found no Critical/Important defects; title grammar and static source/journey details were corrected. Independent integration review found no substantive defects and confirmed concurrent preservation.
- IRS, SBA and FTC primary guidance supports specific claims. Practical workflow suggestions are NINZ guidance, not universal rules. No blanket retention period, deduction promise, revenue/ranking guarantee, or confusion between email and text/call requirements. A pre-existing PRC-014 schema spacing typo was corrected without changing its editorial answer.

Evidence: `docs/authority-expansion-qa-2026-10-04.json`, `docs/authority-expansion-browser-qa-2026-10-04.json`, and the detailed audit. Automated checks and representative visual inspection are not a full manual accessibility conformance audit; PDF readers vary.

## Nina's judgment and publication dependencies

1. Review the adapted wording and confirm November 5/19 recommendations against the actual Blogger feed and scheduling screen. Public feed retrieval failed, so a live-feed/schedule audit is not claimed. Keep Blogger drafts until native destinations are approved and live.
2. Decide separately whether to normalize the 29 inherited static page-description/library-metadata differences listed in QA JSON. Each is unchanged against the initial commit; existing approved records were not cosmetically rewritten.
3. Virtual Concierge remains future material. Any production release, Blogger publication, service availability change or broader accessibility audit remains a separate decision.

## Commits and remote saving

Local staging commits: `dde7ea4` (approved clusters) and `a2e6f33` (review corrections and QA), followed by concurrent integration. Command-line push lacked authentication, so the connected GitHub API saves the final verified tree as one commit descended from `a5c9079`, with a non-forced update of the designated branch. The final handoff supplies the published commit hash. The default branch is not updated.

## Files changed by this authority task

Paths below are relative to the repository, compared with concurrent integration base `a5c9079`; concurrent Navigator/resource deliverables are not misrepresented as this task's additions. Most existing FAQ HTML changes refresh only the FAQ data cache key. The source FAQ library was appended and narrowly edited, not replaced blindly.

Total: 203 changed files.

| Status | Path |
| --- | --- |
| M | `assets/faq-library-data.js` |
| M | `assets/free-resources-data.js` |
| A | `assets/learning-center-guides.css` |
| M | `content/free-resources-expansion.json` |
| A | `docs/authority-expansion-2026-10-04-audit.md` |
| A | `docs/authority-expansion-2026-10-04-completion.md` |
| A | `docs/authority-expansion-browser-qa-2026-10-04.json` |
| A | `docs/authority-expansion-qa-2026-10-04.json` |
| A | `docs/blogger/bookkeeping-basics-small-businesses.html` |
| A | `docs/blogger/bookkeeping-basics-small-businesses.md` |
| A | `docs/blogger/simple-customer-follow-up-system.html` |
| A | `docs/blogger/simple-customer-follow-up-system.md` |
| M | `docs/free-resources-expansion-audit-2026-10-04.md` |
| M | `docs/free-resources-expansion-qa-2026-10-04.md` |
| M | `faq/ai-basics/can-ai-access-the-internet/index.html` |
| M | `faq/ai-basics/can-ai-help-me-write-better-prompts/index.html` |
| M | `faq/ai-basics/difference-between-ai-generative-ai-and-ai-assistant/index.html` |
| M | `faq/ai-basics/do-i-need-technical-skills-to-use-ai/index.html` |
| M | `faq/ai-basics/does-ai-know-who-i-am/index.html` |
| M | `faq/ai-basics/does-ai-learn-from-my-conversations/index.html` |
| M | `faq/ai-basics/does-ai-remember-what-i-tell-it/index.html` |
| M | `faq/ai-basics/how-can-i-get-better-results-from-ai/index.html` |
| M | `faq/ai-basics/how-do-i-know-if-an-ai-answer-is-accurate/index.html` |
| M | `faq/ai-basics/how-does-ai-work/index.html` |
| M | `faq/ai-basics/index.html` |
| M | `faq/ai-basics/is-ai-replacing-people/index.html` |
| M | `faq/ai-basics/is-ai-safe-to-use-for-business/index.html` |
| M | `faq/ai-basics/should-i-fact-check-information-from-ai/index.html` |
| M | `faq/ai-basics/what-are-the-benefits-of-ai-for-small-businesses/index.html` |
| M | `faq/ai-basics/what-are-the-limitations-of-ai/index.html` |
| M | `faq/ai-basics/what-information-should-i-never-give-ai/index.html` |
| M | `faq/ai-basics/what-is-a-large-language-model-llm/index.html` |
| M | `faq/ai-basics/what-is-an-ai-hallucination/index.html` |
| M | `faq/ai-basics/what-is-an-ai-model/index.html` |
| M | `faq/ai-basics/what-is-an-ai-prompt/index.html` |
| M | `faq/ai-basics/what-is-artificial-intelligence/index.html` |
| M | `faq/ai-basics/what-is-generative-ai/index.html` |
| M | `faq/ai-basics/what-is-prompt-engineering/index.html` |
| M | `faq/ai-basics/where-does-ai-get-its-information/index.html` |
| M | `faq/ai-basics/why-is-ai-becoming-so-popular/index.html` |
| M | `faq/ai-for-business/business-information-avoid-putting-into-ai-tool/index.html` |
| M | `faq/ai-for-business/can-ai-help-me-brainstorm-business-ideas/index.html` |
| M | `faq/ai-for-business/can-ai-help-me-create-a-business-plan/index.html` |
| M | `faq/ai-for-business/can-ai-help-me-organize-my-business/index.html` |
| M | `faq/ai-for-business/can-ai-help-me-research-for-my-business/index.html` |
| M | `faq/ai-for-business/can-ai-help-me-write-business-emails/index.html` |
| M | `faq/ai-for-business/can-ai-help-with-customer-service/index.html` |
| M | `faq/ai-for-business/can-ai-help-with-marketing/index.html` |
| M | `faq/ai-for-business/can-ai-safely-help-complete-business-registration-license-tax-forms/index.html` |
| M | `faq/ai-for-business/can-ai-save-my-business-time/index.html` |
| M | `faq/ai-for-business/can-ai-summarize-meetings-and-documents/index.html` |
| M | `faq/ai-for-business/copyright-content-created-with-ai/index.html` |
| M | `faq/ai-for-business/cybersecurity-basics-every-small-business/index.html` |
| M | `faq/ai-for-business/difference-between-using-ai-and-automating-a-business-process/index.html` |
| M | `faq/ai-for-business/does-small-business-need-ai-use-policy/index.html` |
| M | `faq/ai-for-business/first-business-task-to-try-with-ai/index.html` |
| M | `faq/ai-for-business/how-can-small-businesses-use-ai/index.html` |
| M | `faq/ai-for-business/index.html` |
| M | `faq/ai-for-business/trust-ai-tool-claims-business/index.html` |
| M | `faq/ai-for-business/what-business-tasks-can-ai-help-with/index.html` |
| M | `faq/ai-for-business/what-is-an-ai-workflow/index.html` |
| M | `faq/ai-for-business/when-should-i-not-use-ai-in-my-business/index.html` |
| M | `faq/ai-tools-assistants/can-i-use-more-than-one-ai-assistant/index.html` |
| M | `faq/ai-tools-assistants/difference-between-chatgpt-gemini-claude-and-perplexity/index.html` |
| M | `faq/ai-tools-assistants/do-i-need-to-pay-for-an-ai-assistant/index.html` |
| M | `faq/ai-tools-assistants/how-do-i-choose-the-right-ai-assistant-for-a-task/index.html` |
| M | `faq/ai-tools-assistants/index.html` |
| M | `faq/ai-tools-assistants/what-is-an-ai-assistant/index.html` |
| M | `faq/ai-tools-assistants/what-is-chatgpt/index.html` |
| M | `faq/ai-tools-assistants/what-is-claude/index.html` |
| M | `faq/ai-tools-assistants/what-is-deepseek/index.html` |
| M | `faq/ai-tools-assistants/what-is-google-gemini/index.html` |
| M | `faq/ai-tools-assistants/what-is-grok/index.html` |
| M | `faq/ai-tools-assistants/what-is-meta-ai/index.html` |
| M | `faq/ai-tools-assistants/what-is-microsoft-copilot/index.html` |
| M | `faq/ai-tools-assistants/what-is-perplexity/index.html` |
| M | `faq/ai-tools-assistants/which-ai-assistant-is-best-for-beginners/index.html` |
| M | `faq/ai-tools-assistants/which-ai-assistant-is-best-for-small-business/index.html` |
| M | `faq/business-credit-funding/bank-vs-credit-union-for-business-banking-and-funding/index.html` |
| M | `faq/business-credit-funding/business-loan-vs-business-line-of-credit/index.html` |
| M | `faq/business-credit-funding/can-a-new-business-get-funding/index.html` |
| M | `faq/business-credit-funding/can-business-have-credit-separate-from-owner/index.html` |
| M | `faq/business-credit-funding/do-i-need-good-personal-credit-to-get-business-funding/index.html` |
| M | `faq/business-credit-funding/does-business-bank-account-help-funding-readiness/index.html` |
| M | `faq/business-credit-funding/does-personal-credit-affect-business-funding/index.html` |
| M | `faq/business-credit-funding/how-does-a-business-begin-establishing-business-credit/index.html` |
| M | `faq/business-credit-funding/index.html` |
| M | `faq/business-credit-funding/personal-credit-vs-business-credit/index.html` |
| M | `faq/business-credit-funding/what-business-documents-might-a-lender-ask-for/index.html` |
| M | `faq/business-credit-funding/what-do-lenders-look-at-when-evaluating-a-business/index.html` |
| M | `faq/business-credit-funding/what-does-it-mean-for-a-business-to-be-funding-ready/index.html` |
| M | `faq/business-credit-funding/what-is-a-personal-guarantee/index.html` |
| M | `faq/business-credit-funding/what-is-business-credit/index.html` |
| M | `faq/business-credit-funding/what-to-work-on-before-applying-for-business-funding/index.html` |
| A | `faq/business-growth-operations/does-a-small-business-need-a-crm-to-follow-up-with-customers/index.html` |
| A | `faq/business-growth-operations/does-a-small-business-need-bookkeeping-software-to-start/index.html` |
| A | `faq/business-growth-operations/how-often-should-bookkeeping-records-be-updated/index.html` |
| A | `faq/business-growth-operations/how-should-receipts-and-expense-records-be-organized/index.html` |
| A | `faq/business-growth-operations/index.html` |
| A | `faq/business-growth-operations/what-financial-records-should-a-small-business-keep/index.html` |
| A | `faq/business-growth-operations/what-is-a-customer-follow-up-system/index.html` |
| A | `faq/business-growth-operations/what-is-bookkeeping-and-why-does-a-small-business-need-it/index.html` |
| A | `faq/business-growth-operations/what-is-the-difference-between-bookkeeping-and-accounting/index.html` |
| A | `faq/business-growth-operations/what-should-a-small-business-measure-in-its-customer-follow-up-process/index.html` |
| A | `faq/business-growth-operations/when-does-customer-follow-up-automation-make-sense/index.html` |
| A | `faq/business-growth-operations/when-should-a-small-business-work-with-a-bookkeeper-accountant-or-tax-professional/index.html` |
| M | `faq/business-profiles-reviews-credibility/choose-online-profiles-platforms-business-should-maintain/index.html` |
| M | `faq/business-profiles-reviews-credibility/customer-reviews-local-visibility-business-credibility/index.html` |
| M | `faq/business-profiles-reviews-credibility/does-business-need-crunchbase-profile/index.html` |
| M | `faq/business-profiles-reviews-credibility/does-local-business-need-nextdoor-business-page/index.html` |
| M | `faq/business-profiles-reviews-credibility/does-small-business-need-linkedin-page/index.html` |
| M | `faq/business-profiles-reviews-credibility/does-small-business-need-yelp-business-page/index.html` |
| M | `faq/business-profiles-reviews-credibility/does-small-business-need-youtube-channel/index.html` |
| M | `faq/business-profiles-reviews-credibility/facebook-page-vs-instagram-professional-account/index.html` |
| M | `faq/business-profiles-reviews-credibility/fake-abusive-policy-violating-google-review/index.html` |
| M | `faq/business-profiles-reviews-credibility/free-bbb-business-listing-vs-bbb-accreditation/index.html` |
| M | `faq/business-profiles-reviews-credibility/index.html` |
| M | `faq/business-profiles-reviews-credibility/is-alignable-worth-maintaining-small-business/index.html` |
| M | `faq/business-profiles-reviews-credibility/is-joining-local-chamber-of-commerce-worth-it/index.html` |
| M | `faq/business-profiles-reviews-credibility/is-pinterest-worth-maintaining-business/index.html` |
| M | `faq/business-profiles-reviews-credibility/request-respond-google-reviews-small-business/index.html` |
| M | `faq/business-profiles-reviews-credibility/should-business-maintain-professional-account-x/index.html` |
| M | `faq/business-profiles-reviews-credibility/what-is-score-free-small-business-mentoring/index.html` |
| M | `faq/business-profiles-reviews-credibility/yelp-reviews-vs-facebook-recommendations/index.html` |
| M | `faq/business-registration-compliance/business-changes-report-after-registration-agencies-to-notify/index.html` |
| M | `faq/business-registration-compliance/business-name-availability-entity-dba-trademark-domain-differences/index.html` |
| M | `faq/business-registration-compliance/can-i-use-my-home-address-for-my-business/index.html` |
| M | `faq/business-registration-compliance/difference-business-formation-ein-state-taxes-licenses/index.html` |
| M | `faq/business-registration-compliance/do-i-need-a-business-address/index.html` |
| M | `faq/business-registration-compliance/do-i-need-a-business-bank-account/index.html` |
| M | `faq/business-registration-compliance/do-i-need-a-business-email-address/index.html` |
| M | `faq/business-registration-compliance/do-i-need-a-business-phone-number/index.html` |
| M | `faq/business-registration-compliance/do-i-need-to-register-my-business/index.html` |
| M | `faq/business-registration-compliance/index.html` |
| M | `faq/business-registration-compliance/new-ein-business-name-address-ownership-structure-changes/index.html` |
| M | `faq/business-registration-compliance/register-llc-corporation-before-applying-for-ein/index.html` |
| M | `faq/business-registration-compliance/s-corporation-business-structure-or-tax-election/index.html` |
| M | `faq/business-registration-compliance/sole-proprietorship-vs-llc/index.html` |
| M | `faq/business-registration-compliance/state-tax-registration-sales-tax-employer-account/index.html` |
| M | `faq/business-registration-compliance/us-formed-business-beneficial-ownership-information-fincen/index.html` |
| M | `faq/business-registration-compliance/what-business-licenses-or-permits-might-i-need/index.html` |
| M | `faq/business-registration-compliance/what-do-i-need-before-starting-a-business/index.html` |
| M | `faq/business-registration-compliance/what-is-a-dba-or-trade-name/index.html` |
| M | `faq/business-registration-compliance/what-is-a-registered-agent/index.html` |
| M | `faq/business-registration-compliance/what-is-an-ein-and-why-does-a-business-need-one/index.html` |
| M | `faq/business-registration-compliance/what-is-an-llc/index.html` |
| M | `faq/business-registration-compliance/what-ongoing-compliance-does-a-business-need-to-maintain/index.html` |
| M | `faq/business-registration-compliance/what-should-i-do-after-registering-my-business/index.html` |
| M | `faq/business-registration-compliance/when-business-needs-foreign-qualification-another-state/index.html` |
| M | `faq/business-registration-compliance/where-register-business-secretary-of-state-revenue-county-city/index.html` |
| M | `faq/grants-funding-opportunities/business-grant-vs-business-loan/index.html` |
| M | `faq/grants-funding-opportunities/can-a-new-business-get-a-grant/index.html` |
| M | `faq/grants-funding-opportunities/do-business-grants-have-to-be-repaid/index.html` |
| M | `faq/grants-funding-opportunities/does-the-sba-give-grants-to-small-businesses/index.html` |
| M | `faq/grants-funding-opportunities/government-grants-to-start-a-small-business/index.html` |
| M | `faq/grants-funding-opportunities/how-to-tell-if-a-business-grant-is-legitimate/index.html` |
| M | `faq/grants-funding-opportunities/index.html` |
| M | `faq/grants-funding-opportunities/information-needed-before-applying-for-a-business-grant/index.html` |
| M | `faq/grants-funding-opportunities/private-or-corporate-small-business-grants/index.html` |
| M | `faq/grants-funding-opportunities/should-i-pay-someone-to-find-business-grants/index.html` |
| M | `faq/grants-funding-opportunities/what-are-sbir-and-sttr-programs/index.html` |
| M | `faq/grants-funding-opportunities/what-is-a-business-grant/index.html` |
| M | `faq/grants-funding-opportunities/what-is-grants-gov/index.html` |
| M | `faq/grants-funding-opportunities/what-to-do-before-applying-for-a-business-grant/index.html` |
| M | `faq/grants-funding-opportunities/where-small-businesses-can-look-for-legitimate-grants/index.html` |
| M | `faq/grants-funding-opportunities/who-qualifies-for-small-business-grants/index.html` |
| M | `faq/index.html` |
| M | `faq/online-presence-business-visibility/add-claim-verify-google-business-profile/index.html` |
| M | `faq/online-presence-business-visibility/business-information-to-keep-consistent-online/index.html` |
| M | `faq/online-presence-business-visibility/business-listed-more-than-one-search-engine-directory/index.html` |
| M | `faq/online-presence-business-visibility/can-online-presence-affect-ai-systems-find-mention-business/index.html` |
| M | `faq/online-presence-business-visibility/does-my-business-need-google-business-profile/index.html` |
| M | `faq/online-presence-business-visibility/does-small-business-need-google-search-console/index.html` |
| M | `faq/online-presence-business-visibility/does-small-business-website-need-faq-page/index.html` |
| M | `faq/online-presence-business-visibility/google-analytics-vs-search-console-vs-microsoft-clarity/index.html` |
| M | `faq/online-presence-business-visibility/home-based-service-area-google-business-profile-hide-home-address/index.html` |
| M | `faq/online-presence-business-visibility/how-search-engines-find-understand-business/index.html` |
| M | `faq/online-presence-business-visibility/index.html` |
| M | `faq/online-presence-business-visibility/measure-small-business-found-cited-ai-search/index.html` |
| M | `faq/online-presence-business-visibility/seo-aeo-geo-differences-small-business/index.html` |
| M | `faq/online-presence-business-visibility/small-business-website-google-business-profile-social-media/index.html` |
| M | `faq/online-presence-business-visibility/special-ai-markup-faq-schema-llms-txt-ai-answers/index.html` |
| M | `faq/online-presence-business-visibility/what-are-bing-webmaster-tools/index.html` |
| M | `faq/online-presence-business-visibility/what-is-bing-places-for-business/index.html` |
| M | `faq/online-presence-business-visibility/what-is-google-analytics/index.html` |
| M | `faq/online-presence-business-visibility/what-is-google-business-profile/index.html` |
| M | `faq/online-presence-business-visibility/what-is-google-search-console/index.html` |
| M | `faq/online-presence-business-visibility/what-is-microsoft-clarity/index.html` |
| M | `faq/online-presence-business-visibility/why-business-information-should-be-consistent-online/index.html` |
| M | `faq/online-presence-business-visibility/why-small-business-needs-online-presence/index.html` |
| M | `learning-center.html` |
| A | `learning-center/bookkeeping-basics-small-businesses/index.html` |
| A | `learning-center/simple-customer-follow-up-system/index.html` |
| M | `resources/ai-task-finder-worksheet/index.html` |
| M | `resources/business-compliance-calendar-template/index.html` |
| M | `resources/business-information-master-sheet/index.html` |
| M | `resources/business-startup-foundation-checklist/index.html` |
| M | `resources/small-business-bookkeeping-basics-organizer/index.html` |
| M | `scripts/build-public.cjs` |
| M | `scripts/build_free_resources.py` |
| A | `scripts/qa-authority-browser.cjs` |
| A | `scripts/verify-authority-expansion.py` |
| M | `sitemap.xml` |
