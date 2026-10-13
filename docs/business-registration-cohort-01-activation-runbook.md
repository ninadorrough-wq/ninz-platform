# Five-State Activation Runbook — Not Authorized for Production

This continues the twelve activation gates in `business-registration-phase-4-architecture.md`. The October 4, 2026 package prepares review drafts; it does not authorize publishing Texas, Kansas, Arkansas, Missouri or Colorado. Nina retains production approval. No merge into the production/default branch, deployment, filing or account registration belongs to this implementation session.

## Current publication boundary

- All five records remain `publication_status: "coming_soon"` with empty `public_url`.
- Review pages live under `staging/business-registration/`, outside the public artifact.
- `node scripts/build-public.cjs` builds local `dist/`. It includes only state directories whose records are published and strips all structured draft details from Coming Soon records in the browser data.
- `netlify.toml` declares the build command and `dist` publish directory. The hosting dashboard and branch-deploy settings have **not** been inspected or changed. A future approved release must confirm the actual host respects this configuration. Do not deploy the repository root or `staging/`.
- Public Navigator markup, routing script, Oklahoma guide, robots and sitemap remain unchanged.
- The tests deliberately assert that Oklahoma is the only published guide. A future approved activation requires a reviewed test update, not merely flipping a status.

## Verification gates

Before requesting activation approval, finish and record all of the following for every state in the proposed release:

1. Confirm formation authority, filing path, foreign authority rules and name-search limits from current official instructions.
2. Confirm applicable state tax accounts, registration destinations and local-tax distinctions.
3. Resolve statewide general-business-license treatment from explicit official evidence, plus activity/professional and city/county caveats. Null is unresolved; a missing search result is not evidence of absence.
4. Confirm employer registration and unemployment tests, category exceptions, withholding and applicable new-hire or other employer programs.
5. Confirm workers-compensation thresholds, worker counts, owner elections, contractor rules and important exceptions from the responsible agency or current law.
6. Confirm entity-specific annual, biennial, periodic, tax and renewal obligations, including current deadlines. Do not present the same report requirement for every structure.
7. Confirm the shared EIN reference and current IRS guidance. State sequencing may be source-supported, but must not redefine federal eligibility.
8. Recheck all official destinations. A 403 means blocked retrieval, not a dead link or regulatory conclusion. Complete functional/manual checks for interactive portals and independently verify the content behind blocked pages. Exclude development/test mirrors as authority.
9. Resolve all `unresolved/research-required` claims and `unresolved_items`; review each VERIFIED claim against its source, rather than treating an HTTP 200 as substantive verification. Update source methods, dates and scoped record status accordingly.
10. Run desktop/mobile visual and keyboard QA, focus and contrast checks, and appropriate accessibility checks. Validate title, description, canonical, social metadata, JSON-LD and internal links for the final public page. The current noindex/no-canonical metadata is for review drafts.
11. Run release tests and inspect the exact publish artifact. Verify routes, sitemap, navigation, indexability and Oklahoma behavior. Confirm host/build configuration before any approved deployment; obtain independent review.
12. Present the final package, evidence, unresolved-item count, QA evidence and exact proposed changes to Nina. Record her explicit activation and production approval before executing a separate release task.

## Future approved release sequence

Only after verification and Nina's explicit approval: adapt the reviewed draft into the intended public state directory, update public metadata and links, set the approved state's publication fields, update the sitemap and public inventory, revise status assertions, regenerate the artifact and rerun QA. Review the exact diff and hosting settings before any separately approved merge/deploy. The current scripts do not perform these release actions.

Preserve previous research, verification addenda, audit reports, approval evidence and project history. Update the Master Project Registry to distinguish implementation completion from state verification and production activation.
