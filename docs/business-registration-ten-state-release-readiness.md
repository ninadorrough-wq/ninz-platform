# Ten-state Navigator release checkpoint — 2026-10-13

Decision: **NO-GO for activation or production release**. Target date remains October 15, 2026, conditional on closing the evidence and manual QA gates. No state has been published or authorized for activation.

Scope: TX, KS, AR, MO, CO (the earlier staged cohort) plus NM, LA, NE, IA, MS. Oklahoma remains the only published guide. The isolated `navigator-ten-state-release-2026-10-13` worktree starts from main `f717f8441d456a3bdfc7e404a63cb3e57b433839` and selectively carries the Navigator implementation from PR #1 head `bcebe9714828a08ccaa75fe7c7b5ab5daf26f577`; unrelated PR #1 work is not included.

The five new records follow the same 13-section evidence-linked data contract, shared IRS EIN module, 12-step review-only guide, navigation, semantics and presentation as the original cohort. Claims are marked `VERIFIED` only where current official source content was reviewed; uncertain claims are visibly labeled research-required. The ten states remain `coming_soon`, with empty public URLs. Staged guides are noindex and excluded from the public artifact; the public data is reduced to five public-facing inventory fields per unpublished state.

Targeted evidence examples: NM SOS requires online business filings; NM WCA identifies coverage categories. LA SOS lists domestic LLC form #365 at $125, foreign LLC form #972 at $185, annual reports at $35 and trade-name form #309 at $95. IA SOS lists a $50 domestic LLC certificate and $100 foreign registration, while IWD requires UI registration within 30 days of first Iowa wages. MS SOS states LLC/for-profit corporation annual reports are due April 15 and nonprofit reports May 15. Nebraska SOS indexed forms show $100 online/$110 in-office LLC formation, but direct fee-page access timed out. These are entity-specific examples, not universal requirements; source IDs and exact URLs are retained in each record.

Open regulatory and destination gates:

| State | Release-blocking follow-up |
| --- | --- |
| TX | TWC current registration page is identified, but its challenge blocks direct review of account instructions. |
| KS | KDOL account and workers-compensation details, trade-name treatment and general-license conclusion require direct official confirmation. |
| AR | Workers-compensation exceptions, LLC/unincorporated fictitious names and general-license conclusion remain open. |
| MO | Reporting deadlines for each entity, special workers-compensation elections and licensing conclusion remain open. |
| CO | Home-rule taxes, UI/coverage, FAMLI/new hires, licensing and MyBiz flows require current official confirmation. |
| NM | SOS LLC form/fees, reporting/trade-name obligations, portal search and DWS registration remain unconfirmed; WCA exceptions need review. |
| LA | Exact annual-report due date, trade-name applicability, search and account flows need manual verification. |
| NE | SOS direct pages timed out; reconfirm fees and reporting, UI liability and exact employer account route, trade names and license applicability. |
| IA | Confirm report fees, fictitious-name rule, precise search and account routes, and general-license applicability. |
| MS | Current workers-compensation threshold/exclusions need a source newer than the 2013 agency summary; trade name, registered agent, fees and account flows need confirmation. |

Across all ten, a broad assertion that there is no statewide general business license must be backed by explicit current government guidance, not inferred from a directory. Interactive government portals need human destination/form review. Original five browser QA was previously completed and is not repeated here; the new five still need desktop/mobile visual, keyboard and contrast review. Actual hosted build settings/route behavior also remain a release gate. The schedule is not evidence of readiness.

Targeted local QA on 2026-10-13: `node --test tests/navigator.test.cjs` passed 17/17; ten generated review guides passed structural HTML/ARIA/internal-link checks; local publish artifact and HTTP 404 checks confirmed no ten-state draft route or private evidence appears publicly, and Oklahoma stays reachable. This does not substitute for substantive regulatory or hosted-browser verification. The prior five-state source audit was not rerun. No merge, push, deploy, or activation was performed.

GO criteria: close every state-specific evidence/destination item; complete the new-state visual/keyboard and hosted-build checks; rerun only impacted targeted checks; obtain one separate explicit production authorization before merging or deploying the coordinated ten-state release.

## Blocker-resolution update — 2026-10-13

Decision remains **NO-GO**. The following corrections use current official agency pages, statutes or forms; the residual items remain release gates. This addendum supersedes the corresponding open-item descriptions above, without changing publication status or authorization.

| State | Closed in this update | Still blocking release |
| --- | --- | --- |
| TX | Prior verified evidence retained; no new claim inferred from an access challenge. | TWC employer registration/account instructions behind the agency challenge; statewide licensing and any prior unresolved category-specific checks. Direct browser/agency confirmation needed. |
| KS | Prior five-state evidence retained. | KDOL employer account and workers-compensation rule pages return 403 in automated retrieval; name/trade-name and statewide-license conclusions require authoritative confirmation. Direct browser/agency confirmation needed. |
| AR | Official DN-18/F-18 establishes LLC fictitious-name paper fee ($25) and county-clerk copy except Pulaski County; the form and LLC online fee are separately identified on SOS forms. | Unincorporated-business county treatment, current workers-compensation exclusions/contractor exceptions and statewide-license conclusion. |
| MO | Official SOS report entry point and corporate instructions establish the corporate annual report-month rule; LLC/LP and LLP distinctions remain as previously verified. | Portal account/biennial election and entity-specific submission, special workers-compensation elections, statewide-license conclusion. |
| CO | DOR CR 0100 is the applicable tax-account application; state-administered sales tax does not replace home-rule city obligations. Child Support Services identifies the new-hire route and 20-day period. | CDLE UI, workers-compensation, FAMLI categories, DORA, MyBiz and interactive submission remain blocked or manual; statewide-license conclusion. |
| NM | Prior SOS online-only, tax BTIN and WCA coverage evidence retained. | Enterprise LLC forms/fees, reports, trade-name and name search; DWS employer route and exceptions; interactive portals and statewide-license conclusion. |
| LA | Legislature R.S. 12:1308.1 establishes LLC annual-report anniversary-date deadline; SOS fee schedule lists $35. | GeauxBiz filing-account path, trade-name applicability, CAPTCHA name search, LWC/LaTAP flows and statewide-license conclusion. |
| NE | DOL's UI application gives the general $1,500-quarter or 20-week worker tests and separate special-employer categories. | SOS pages timed out; LLC/trade-name/report fees and forms need live official confirmation. Confirm whether the DOL's current employer account uses UI Connect or NEworks, plus tax/portal flows and licensing. |
| IA | SOS forms/fees confirms odd-year LLC report window January 1–April 1 ($30 online/$45 paper) and $5 fictitious-name resolution for applicable entities. | Entity-specific name/trade-name applicability, Fast Track/GovConnectIowa/myIowaUI interactive destinations and statewide-license conclusion. |
| MS | Current SOS registered-agent guidance establishes physical in-state address/consent for a noncommercial agent; refreshed fee-PDF destination is recorded but still flagged for live review. | Current Commission/statutory workers-compensation rule, fees, trade-name applicability, SOS/MDES/TAP account flows and statewide-license conclusion. |

Direct browser interaction requested from the user or an authorized reviewer: open each blocked government page in a normal browser and record the visible agency heading, exact form or account path, entity-specific fee/deadline, and any redirects without submitting a real business application. In particular, inspect TX TWC, KS KDOL, CO CDLE/DORA/MyBiz, NM Enterprise/DWS, LA GeauxBiz/CoraWeb/LaTAP/LWC, NE SOS/UI Connect or NEworks, IA Fast Track/GovConnectIowa/myIowaUI, and MS SOS/TAP/MDES. Check the interactive report/name routes in AR and MO as applicable. A URL loading does not establish the underlying requirement.

The five new drafts still need a human desktop/mobile visual and keyboard/contrast pass. A hosted ten-state candidate route cannot be verified from this local-only branch without a push or preview deployment; neither is authorized. Do not test the existing live site or PR #1 preview as if it were this candidate. Local targeted structural/public-exclusion checks are not a substitute for those gates. All ten remain Coming Soon; no push, merge, activation or deployment occurred.

After the evidence-linked content changes, the affected Navigator suite passed 18/18 (including a new focused source/destination regression), and regenerated review drafts passed the ten-state HTML/ARIA/internal-link structural check. The original full-site audits were not repeated.

## Gate classification and preview candidate — 2026-10-13

**Publication-critical (P)** means an applicable legal requirement, fee, form or filing destination lacks authoritative confirmation; a notice cannot cure it. **Disclosable portal limitation (D)** identifies an account, challenge or blocked automated fetch. It can be stated accurately in a guide, but remains a gate wherever it prevents confirmation of a P item. **Technical verification (T)** means candidate behavior or accessibility still needs a check. No guide asserts that the state has no general business license; any future affirmative absence claim requires its own official support.

| State | P: authoritative requirement or destination | D: portal limitation to disclose accurately | T: candidate check |
| --- | --- | --- | --- |
| TX | Confirm current TWC employer-registration instructions and applicability. | TWC automated access challenge. | Hosted Coming Soon and review route; previously completed five-state browser evidence retained unless changed. |
| KS | Confirm KDOL employer steps and workers-compensation rules, trade-name treatment. | KDOL pages return 403 to automated retrieval. | Same original-five targeted hosted check. |
| AR | Confirm workers-compensation exclusions/contractor treatment and unincorporated fictitious-name process. | None added for the accessible LLC form. | Same original-five targeted hosted check. |
| MO | Confirm special workers-compensation elections and entity-specific report account/election path. | SOS reporting requires account interaction. | Same original-five targeted hosted check. |
| CO | Confirm CDLE UI/coverage and FAMLI applicability, licensing route and business-specific local tax path. | CDLE/DORA/MyBiz and employer submissions require direct inspection. | Same original-five targeted hosted check. |
| NM | Confirm SOS LLC forms/fees, reports/trade names, DWS route and relevant coverage exceptions. | Enterprise and DWS screens are interactive or blocked. | New-five desktop/mobile, keyboard, contrast and hosted route. |
| LA | Confirm trade-name applicability, name search and GeauxBiz filing path for the entity. | GeauxBiz/LaTAP/LWC account screens and CoraWeb challenge. | New-five desktop/mobile, keyboard, contrast and hosted route. |
| NE | Confirm SOS fees/forms/reports/agent requirements and current DOL employer account/timing. | SOS automated timeout; reconcile UI Connect and NEworks. | New-five desktop/mobile, keyboard, contrast and hosted route. |
| IA | Confirm fictitious-name applicability and entity name-search/submission route. | Fast Track, GovConnectIowa and myIowaUI account screens. | New-five desktop/mobile, keyboard, contrast and hosted route. |
| MS | Confirm current workers-compensation rule, SOS fees/trade-name applicability and UI account route. | SOS/TAP/MDES account screens; fee PDF requires live confirmation. | New-five desktop/mobile, keyboard, contrast and hosted route. |

State-specific portal notes appear only in the review drafts where an actual access or account limitation exists; Arkansas has no such note. They explicitly preserve the critical verification gates. The candidate adds a branch-guarded Netlify Deploy Preview build: the ordinary public artifact still contains only Oklahoma and Coming Soon inventory, while review-only drafts are copied to `/review/business-registration/<state>/` with HTML and response-level noindex. This branch-specific configuration must never be merged or used for production; remove the preview-only command before any separately authorized release. Local targeted tests pass 20/20, including the new context/branch guard and unpublished-route assertions. Hosted and browser results are recorded below once a preview is available.
