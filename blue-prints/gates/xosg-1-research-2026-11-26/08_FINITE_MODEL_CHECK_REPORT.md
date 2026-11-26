# xOSG-1 — Finite Alpha-Lock and Effect-Closure Test Report

**Date:** 2026-11-26  
**Executable research artifact:** \`finite_clearance_commit_model.test.js\` in this directory  
**Test context:** Pure JavaScript functions evaluated in an isolated research runtime; the committed source was generated from those same function definitions. No real gate was invoked or controller instrumented.

## Results

| Coverage | Count |
| --- | ---: |
| Exhaustive combinations inside selected finite domain | **8,192** |
| Targeted structural and adversarial cases | **38** |
| Total checks evaluated | **8,230** |
| Returned expected outcomes | **8,230** |
| Mismatches | **0** |
| Mock CLEARED in exhaustive space | **2** |
| Mock NOT CLEARED in exhaustive space | **8,190** |

The only two mock-positive exhaustive cases are all six gate receipts marked CLEARED, all five independent prerequisite flags true, and temporal input either **NO_REVOKE** or **REVOCATION_AFTER_COMMIT**.

## Exact exhaustive space

\`\`\`text
64 combinations of six Gate One–Six clearance bits
 × 32 combinations of five prerequisite Boolean bits
 × 4 revocation ordering classes
 = 8,192 combinations
\`\`\`

The five varied prerequisite flags were issuer legitimacy, condition registry completeness, modeled effect-coverage evidence, independent Alpha-Lock authorization, and grant scope covering the emergent combined effect. Other necessary fixture flags were fixed as positively supplied; those have separate targeted negative cases. This is **not an exhaustive search over real candidates, events, authorizers or actual effect universes**.

The four revocation classes are **NO_REVOKE**, **BEFORE_COMMIT**, **AFTER_COMMIT** and **UNORDERED**. The model tests acyclicity and graph reachability for declared events; temporal reality is not independently verified.

## Targeted tests — 38

Distinct targeted cases cover complete positive fixtures and after-commit revocation; before-commit and unordered revocation; incomplete revocation visibility; empty or incomplete mandatory registries; contradictory or insufficient evidence; unmodeled or interacting effects; unauthorized aggregate effects; unknown issuer legitimacy or precedence; unselected profile; uncleared and missing receipts; duplicate and broken receipt chains; mock-signature failure; expired receipt; changed candidate/revision/target/risk fields; Gate Six mismatch; absent independent controller; broken, cyclic and incomplete causal event graphs; and a **second-order emergent protected effect**.

The tests evaluate how the *defined JavaScript predicate* responds to each synthetic input. A direct test of the exact committed file with a separate Node runtime was **not completed in this environment** because the runtime could not download the GitHub source; the JavaScript functions used to generate the file were executed in the research tool.

## Illustrative countermodels

| Case | Essential fixture differences | Expected result |
| --- | --- | --- |
| Gate One approval alone | Other five gate receipts NOT CLEARED | NOT CLEARED |
| Two locally permitted actions, prohibited combined consequence | Grant permits both direct effects, not generated combined effect | NOT CLEARED |
| Empty-but-unverified condition registry | No listed conditions; completeness not established | NOT CLEARED |
| Revoked before commit | REVOCATION causally precedes EFFECT_COMMIT | NOT CLEARED |
| Unordered revocation and commit | Neither event causally precedes the other | NOT CLEARED |
| Invalid clearance order | Required causal edge or sequential receipt is missing | NOT CLEARED |
| Alpha-Lock unavailable | Simulated external final authorization absent | NOT CLEARED |
| Fully coherent mock case | All declared fixture assumptions positively supplied, no revocation | CLEARED **in the mock only** |

## Important defect found after executing the finite sweep

The current receipts bind **named** candidate/revision/target/etc., but they do not cryptographically or structurally bind **the entire mutable effect plan, interaction rules, condition registry or grant scope**. A modification to those material objects while their short identifiers remain the same can invalidate the true prior clearance without being detected by the receipt identity comparison.

**Issue R1-001 — Material-to-Receipt Binding** is open and is a prerequisite for promoting any “same candidate” assurance claim. Add an immutable, canonical exact-material description and a receipt-to-content binding check in the next research model, then rerun the finite sweep and explicit material-mutation cases. A hash by itself will not establish source authenticity, issuer authority or the absence of undisclosed effects.

## Scientific and operational limitations

Results are conditional on fixture flags for valid signatures, trustworthy authorization, condition completeness, effect-coverage evidence, independent Alpha-Lock and revocation-feed completeness. None of those facts has been independently established for a deployed system. Passing a fixed finite domain does **not** prove all legal or security properties, nor does it make \`es-xosg-9\` instrumented.

**Disposition:** Bounded model-check progress, with an identified material-binding gap. **PO-01/03/04/05/06/10 remain OPEN; U-003/004/005/006/013 remain UNKNOWN.**
