# Errata — Ordered Gate Clearance and Gate Seven Alpha-Lock

**Date:** 2026-11-25  
**Subject:** Expert Systems Operation / Lunar Flower expert-system gate contract  
**Class:** Corrective architectural amendment; **theoretical proposal only**, no implementation, deployment, project adoption, or actual Production Lock change.

## The correction

The previous six-gate design placed **Gate Six — Prompt Restatement** before the numbered clearance sequence and treated **Gate One — Production Lock** as the ultimate effect-admission gate. That was incorrect for the newly directed ordered-clearance model.

The revised **seven-gate profile** has one fixed clearance order:

1. **Gate One — Production Lock:** Independently establish the exact effect-scoped authorization. Clearing does **not** start production.
2. **Gate Two — Reiteration:** Verify bounded candidate progress or, where applicable, establish that no further iteration is required.
3. **Gate Three — Hand-off:** Verify the bound, accepted transfer; if no hand-off is required, establish that fact under the profile rather than silently skipping the gate.
4. **Gate Four — Informed Operator Validation:** Establish the exact informed validation required by the contract, or establish that no additional validation is required under that contract.
5. **Gate Five — Consequence-Scaled Challenge–Response:** Apply risk classification and any required independent controls; a low-risk classification is not a silent bypass.
6. **Gate Six — Prompt Restatement:** Restate the original Operator prompt as understood; verify agreement with the exact candidate, constraints, authorized effects, and prior receipts. A mismatch is not clearance.
7. **Gate Seven — Alpha-Lock:** The **second, final production gate**. Only an independent, authorized control may clear it after confirming **all six prior gates were actually CLEARED in order** for one identical candidate identity/revision/target/effect/policy context. Only then may that bounded production effect begin.

**Final gate outcome:** Every gate in the adopted seven-gate profile returns **CLEARED** or **NOT CLEARED**. Internal findings remain more expressive (failed, unresolved, conflicted, unavailable, not applicable). No internal state except positively established satisfaction may yield `CLEARED`. `NOT ADOPTED`, `UNKNOWN`, `CONFLICTED`, `NOT_APPLICABLE` without its independently validated governing rule, or an unsupported assertion **never** counts as a passing receipt.

**Order:** Gate One → Gate Two → Gate Three → Gate Four → Gate Five → Gate Six → Gate Seven. The restatement occurs as **Gate Six's clearance step**, not an earlier substitute. An early, non-gating paraphrase is permissible as a working interpretation, but is not the Gate Six clearance receipt.

**Two production gates:** Gate One clearance is necessary but insufficient. Gate Seven remains locked until the entire chain is complete and applicable independent external authorization remains valid. A cleared Gate Seven is bounded to the exact effect and does not waive other independently binding controls.

## Non-escalation, reuse, and failure

- Gate Seven must not be self-cleared by the producing AI or by a Gate One receipt alone.
- Each receipt binds gate identity, sequence position, candidate and revision, declared target/effects, authorizer, policy/context, evidence, and relevant validity window.
- Gate `n` must verify the valid `CLEARED` receipt of Gate `n-1` before it clears itself; Gate Seven verifies **all** six, not only Gate Six.
- A change to prompt interpretation, candidate, target, revision, material risk, scope, external authorization, or required conditions invalidates affected clearances. Re-enter at Gate One when a material candidate or effect change occurs; Alpha-Lock remains locked.
- A late restatement mismatch cannot be patched by relabeling the previous receipts. Re-evaluate the affected chain.
- No hand-off, no extra iteration, no triggered challenge, or no additional Operator validation may be a *documented clearance outcome* of a gate **only when the adopted governing policy authorizes that conclusion and evidence supports it**. Silence is not clearance.
- The seven-gate sequence is a new proposed profile. Older unselected projects are not silently forced into it; their independently binding production locks remain effective.

## Acceptance cases (conceptual, not executed)

| Case | Expected final result |
| --- | --- |
| Gate One clears, Gate Two unresolved | Gate Seven NOT CLEARED; no production |
| Gates One–Five clear, Gate Six restatement mismatches | Gate Six NOT CLEARED; Gate Seven NOT CLEARED |
| Gates One–Six clear but recorded out of order | Gate Seven NOT CLEARED |
| Gate Five is not adopted in a selected seven-gate profile | Gate Five NOT CLEARED; Gate Seven NOT CLEARED |
| Gate Three establishes no hand-off required under a declared valid policy | Gate Three can CLEARED with a bounded receipt; not an implicit skip |
| All six clear in order, then exact candidate revision changes | Alpha-Lock remains NOT CLEARED; re-evaluate from Gate One |
| All six clear in order but external production authorization is revoked | Gate Seven NOT CLEARED |
| All six clear in order, receipts valid and coherent, independently authorized Gate Seven clearance | Gate Seven CLEARED for exact bounded effect; production may begin subject to other binding controls |

## Publication and lineage

This erratum corrects the *active* canonical gate contract and the self-contained **Expert Systems Operation** reading edition. The older **Closure Stage C2/C3** Gate Zero research and historical decision records remain unchanged; neither their archival preservation nor their theoretical promotions establishes runtime enforcement.

**Disposition:** Proposed seven-gate architecture and corresponding documentation; no code execution, actual gate state, or external authority changed.
