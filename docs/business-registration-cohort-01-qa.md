# Five-State Navigator Implementation and QA — October 4, 2026

Branch: `authority-platform-expansion-2026-10-03`. Baseline: `d28aa45d21d839d5f21c48a4bbc1c71650631533`. This record supplements the earlier research and verified addendum; it does not replace them.

## Outcome

Texas, Kansas, Arkansas, Missouri and Colorado have complete structured review records and twelve-section staged guides. Every material requirement paragraph has a status and official source IDs. The shared federal EIN module supplies one maintained set of IRS guidance and source records. State-specific sequencing does not redefine federal EIN eligibility.

All five states remain **Coming Soon**. No state is ready for activation. The package is implementation-tested and ready for regulatory/visual review, **not fully verified or release QA-ready**. A VERIFIED paragraph indicates reviewed evidence for that paragraph, not approval of its entire guide. A record's October 4 `last_verified` value is scoped by `verification_scope` and `verification_status: "research_required"`; it does not imply all requirements passed. Global Navigator verification dates and Oklahoma's published baseline remain on their existing cycle.

## QA evidence

| Check | Result | Evidence / limitation |
| --- | --- | --- |
| Structured records, official evidence bindings, unknowns and federal separation | PASS | Node tests validate all thirteen destination fields in all five states, source bindings, evidence methods, dates and shared EIN references. No per-state IRS eligibility copies. |
| Public Navigator names/codes | PASS | Existing routing script exercised for all five names, codes and trimmed uppercase input: Coming Soon message, no navigation. Oklahoma navigates to its existing URL. |
| Public artifact exclusion | PASS | Fixture includes accidental source state directories and private folders; build excludes them and strips unfinished data. Oklahoma stays present; sitemap preserved byte-for-byte. |
| Local HTTP route checks | PASS | Five public state paths, their index.html variants, five staging paths and research JSON return 404 from the artifact; Oklahoma and Navigator return 200. This is a local static-server test, not a deployed-host test. |
| Draft metadata / structured data | PASS | noindex/nofollow, no unpublished canonical or public state URL; valid WebPage/BreadcrumbList JSON-LD; titles/descriptions/social metadata provided. |
| HTML semantics / internal links | PASS | All five drafts checked for language, one main/H1/title, unique IDs, source anchors, ARIA targets, accessible link/control names, image alt text, internal assets/links and linked fragments. See `business-registration-cohort-01-html-checks.json`. |
| Node suite | PASS | `node --test tests/navigator.test.cjs`: 12 passed, 0 failed. |
| Official source reachability | PARTIAL | 65 source checks: 51 reachable, 13 access-blocked, 1 interactive/manual review. See `business-registration-cohort-01-link-checks.json`. HTTP success alone is not requirement verification. |
| Desktop/mobile browser, keyboard, visual contrast/accessibility | NOT COMPLETED | Chromium executable unavailable. Playwright browser download failed with an invalid/truncated archive. Static semantic checks do not substitute for this gate. |
| Hosted build configuration and production route behavior | NOT RUN | No hosting dashboard changes or deployed-site checks. `netlify.toml` points future builds at `dist`; actual host/branch settings require release review. |
| Registry governance | PASS | REG-001 through REG-008 updated with scoped completion, preserved history and readback of values/formulas/validation/formatting. Oklahoma verification dates unchanged. See `business-registration-cohort-01-registry-checkpoint.md`. |
| Independent staged-work review | PASS with two minor citation corrections | No Critical or Important findings. Added the precise Arkansas county-filing FAQ binding and removed an unsupported Colorado historical rule-change date. Final local QA rerun after corrections. Regulatory certification, Registry audit and browser/host QA were outside that review. |
| Production merge/deployment | NOT PERFORMED | No merge to main, deploy, publishing, government filing or account registration. |

## Remaining state verification

| State | Principal regulatory/link blockers |
| --- | --- |
| Texas | Direct current TWC registration instructions and destination access. SOS nonprofit/LLP reporting distinctions and current franchise threshold are source-supported. |
| Kansas | Blocked KDOL registration/form/WC destinations; current account sequence/category guidance; explicit statewide general-license conclusion; full assumed/trade-name treatment. UI thresholds were separately verified from current K.S.A. 44-703, not inferred from another state. |
| Arkansas | Explicit statewide general-license conclusion; detailed WC statutory/contractor/owner exceptions; LLC and unincorporated fictitious-name/county treatment. 2026 forms establish May 1 franchise and August 1 partnership reporting deadlines; corporation county/Pulaski distinction is verified separately. |
| Missouri | Blocked SOS formation/FAQ/report destinations and current corporate reporting deadlines/eligibility; explicit statewide general-license conclusion; special owner/religious/motor-carrier WC elections. LLC/LP no-annual-report and LLP/LLLP renewal distinctions remain separate from corporation reporting. |
| Colorado | Current production DOR/DORA/CDLE instructions, UI/WC tests and exceptions, tax/local home-rule paths, FAMLI/new-hire applicability and destinations, interactive MyBizColorado paths, explicit statewide general-license conclusion. Development/test mirrors were rejected as authority. The official 2026 CDLE FAMLI bulletin supports only the specific program obligations cited. |

All five also require the unfinished browser/visual gate and eventual hosting/release review. None can activate solely because its data structure or staged HTML exists.

## Reproduction

```sh
node scripts/render-navigator-staged.cjs
node scripts/build-public.cjs
node --test tests/navigator.test.cjs
python scripts/check-navigator-html.py
python scripts/check-navigator-sources.py
git diff --check
```

The link-check script is read-only and refreshes its dated audit report; a new run may differ because agencies change or block access. Inspect results and update structured source `link_status` values before rerendering review drafts. No command above deploys or changes publication status.

See `business-registration-cohort-01-activation-runbook.md` for the remaining verification, review and Nina approval gates.

## Files changed

- `.gitignore`, `assets/business-registration-data.js`, `netlify.toml`.
- `scripts/build-public.cjs`, `scripts/render-navigator-staged.cjs`, `scripts/check-navigator-sources.py`, `scripts/check-navigator-html.py`.
- `tests/navigator.test.cjs`.
- Five `staging/business-registration/{texas,kansas,arkansas,missouri,colorado}/index.html` guides.
- `docs/business-registration-phase-4-architecture.md` (appended checkpoint) and six new cohort documents/reports: implementation plan, link checks, HTML checks, QA, activation runbook and Registry checkpoint.

Existing earlier research/addenda were retained. Public Oklahoma/Navigation HTML, Navigator script, robots and sitemap have no diff from the baseline.
