# NINZ Business Registration Navigator — Phase 4 State Architecture

Status: Working architecture. State records remain unpublished until activation gates pass.

## State record contract
Each state record must contain:
- state, state_code, slug, publication_status, public_url
- filing_authority
- official_business_portal when available
- name_search
- state_registration
- tax_authority and tax_registration
- licenses_permits, including explicit statewide-general-license status when verified
- employer_registration / unemployment_insurance
- workers_compensation, including coverage rule summary and official source
- ongoing_reporting
- local_requirements_note
- official_sources with authority, title, URL, and last_checked
- last_verified, next_scheduled_review, verification_status

## Shared federal EIN module
Federal EIN guidance is maintained once and referenced by every state. State pages may explain when the state workflow expects an EIN, but must not duplicate or reinterpret federal eligibility rules. Primary authority: IRS.

## Evidence rules
1. Prefer the responsible state agency or official state business portal.
2. Record only requirements supported by current official evidence.
3. Distinguish entity formation, tax registration, employer obligations, professional/activity licensing, and local licensing.
4. Do not imply a statewide general business license exists when the state says otherwise.
5. Do not convert thresholds or exceptions into universal requirements.
6. State guidance is educational navigation, not legal, tax, accounting, or licensing advice.
7. Every material state-specific requirement must map to an official source.
8. Verification dates are mandatory.

## Activation gates
A state may move from coming_soon to published only after:
1. Entity filing authority and name-search path verified.
2. Tax registration path verified.
3. Licensing/permit model verified, including local-government caveat.
4. Employer/UI path verified.
5. Workers' compensation rule verified.
6. Ongoing/periodic reporting path verified.
7. Federal EIN module reference verified.
8. All official links checked.
9. Page content and structured data QA completed.
10. Sitemap/internal-link QA completed.
11. NINZ release QA passed.
12. Production deployment explicitly approved.

## First cohort
Texas, Kansas, Arkansas, Missouri, Colorado.

Oklahoma remains the published baseline model. The cohort is intended to validate this reusable architecture before broader state activation.
