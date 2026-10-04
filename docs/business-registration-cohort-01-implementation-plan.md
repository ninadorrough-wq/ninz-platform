# Five-State Navigator Continuation Plan

Goal: complete Texas, Kansas, Arkansas, Missouri and Colorado records and review drafts on `authority-platform-expansion-2026-10-03`, without activation, merging or deployment.

Spec: `business-registration-phase-4-architecture.md` and Nina's October 4, 2026 implementation handoff. This continues the existing architecture; it does not authorize a new subsystem or publication.

## Constraints and decisions

- Keep all five `publication_status` values `coming_soon` and `public_url` empty.
- Preserve Oklahoma's published guide, dates, navigation and sitemap.
- Store shared EIN content and IRS evidence once in the federal module.
- Map each material statement to source IDs, with independent evidence and link-check status. Unknown statewide licensing conclusions stay null and research-required.
- Prepare 12-section guides following Oklahoma's structure with state-specific substance.
- Exclude review drafts and research from Netlify's publish artifact. No deployment will be run. The present repository has no build pipeline or tests; add dependency-free Node commands for reproducible review and public-artifact checks.

## Tasks

1. Research and structured records (`assets/business-registration-data.js`). Write contract/evidence tests, see the incomplete records fail, then fill responsible-agency records with thresholds, exceptions, entity distinctions and explicit unresolved items.
2. Review drafts and publication boundary (`scripts/render-navigator-staged.cjs`, `staging/business-registration/*/index.html`, `scripts/build-public.cjs`, `netlify.toml`). Add tests for omitted unpublished routes, stripped draft data, noindex metadata, source links and shared federal rendering before implementation. Build only published state directories; root pages and other public assets remain unchanged.
3. QA and governance (`tests/navigator.test.cjs`, source-check evidence, `docs/business-registration-cohort-01-qa.md`, activation runbook, Registry REG-001 through REG-008). Run complete tests, live official-link checks, local browser/HTML/accessibility checks and independent branch review. Commit and preserve actual results and blockers. Update only relevant existing Registry cells, preserving prior notes/evidence.

## Review focus

- A staged guide must be absent from the deployable artifact, even if its HTML exists in source control.
- Kansas biennial reports and Missouri LLC/corporation/partnership distinctions must survive rendering.
- Arkansas's three-employee rule must not imply employers below three are exempt.
- Workers compensation elections for owners must not exempt ordinary employees.
- A blocked or absent source must never become a verified negative licensing conclusion.

## Execution record

- Baseline: clean isolated clone on the requested branch at `d28aa45`; no AGENTS.md, dependency manifest, test suite or Netlify configuration exists.
- Research: official government pages and agency publications only. Search-index evidence is distinguished from successful current direct retrieval.
- No production deployment or default-branch mutation authorized or performed.

- Record/draft/build tasks implemented; fresh local QA: 12 Node tests and five HTML checks passed. Official-link audit: 51 reachable, 13 access-blocked and 1 manual portal check out of 65 sources.
- Independent read-only review found no Critical or Important defects; two minor citation-precision findings corrected and drafts regenerated.
- Browser visual/keyboard/contrast checks were attempted but could not run: no Chromium executable and browser download failed. This remains an activation blocker for every state. Regulatory blockers remain explicit; no state is declared release-ready.
- Registry REG-001..REG-008 updated with 45 bounded value changes; readback confirmed intended cells, unchanged formulas/validation/layout and preserved Oklahoma dates/history. No other projects or tabs changed.
