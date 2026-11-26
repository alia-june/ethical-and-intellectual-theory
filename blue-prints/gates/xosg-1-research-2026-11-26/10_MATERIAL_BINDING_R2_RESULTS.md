# Second Material-Binding Model — R2-01 Results

**Cycle date:** 2026-11-26  
**Research-only source:** `material_receipt_binding_model.test.js`  
**Disposition:** Structural receipt-to-material binding modeled and tested in a second bounded mock. **No cryptographic or externally authenticated security guarantee.**

## Motivation and design

The earlier finite Alpha-Lock model checked matching candidate/revision/target labels but not the entire mutable plan underlying those labels. This allowed a potential **stale-receipt vulnerability in the model**: otherwise authorized new operations or revised conditions could be evaluated under old clearance receipts.

The second model records a canonical serialized snapshot of the following data at mock clearance:

- Candidate identity, revision, target, prompt identity and risk identity.
- Full candidate operation list, declared effects and interaction rules.
- Condition registry revision, enumerated required conditions, evidence and completeness marker.
- Grant identity, grant revision and exact permitted-effect scope.
- Selected project profile and policy revision.

The serialization sorts object keys while retaining array order. Every receipt must contain the *same* canonical material description as the source being evaluated. A mutation without renewing the receipt is rejected. This is intentionally **not a cryptographic digest** and proves neither origin nor the reality of those values.

## Executed bounded experiment

| Subset | Size | Result |
| --- | ---: | --- |
| Exhaustive six-gate status masks (64) × five independent material-change masks (32) | 2,048 | 2,048 outcomes matched |
| Targeted cases, including synthetic forgery witness | 17 | 17 outcomes matched |
| **Total** | **2,065** | **2,065 expected results observed** |

Of the 2,048 exhaustive combinations, exactly **one** returned mock `CLEARED`: all six gate results positive with **no** changed material axis. The five independent changes were: (1) an additional otherwise permitted operation, (2) a new supported condition and registry revision, (3) expanded grant permission, (4) updated policy revision, and (5) updated prompt identity. Any one changed axis without renewed receipts caused mock `NOT_CLEARED`.

The targeted tests additionally covered risk identity, target identity, interaction-rule changes/removal, condition verification method changes, an altered receipt snapshot, incomplete condition registry, missing gate, missing independent Alpha-Lock, and an explicit forgery witness.

## The forgery witness: not a passing security property

One targeted fixture **mutates source material and regenerates all mock receipt snapshots** while leaving the mocked `authenticatedFixture` flags true. The evaluator returns mock `CLEARED` because all *self-supplied data* is internally consistent.

That is not proof that a real authorization would be accepted or that a real exploit exists. It is a **counterexample to claiming authentication from structural consistency alone**: the model cannot distinguish a legitimately refreshed receipt chain from an attacker-supplied coherent one. A real protected check would need independently authenticated authorizers and signers, replay protection, applicable scope and revocation handling.

## Status of identified research issues

| Research issue | Current assessment |
| --- | --- |
| R1-001 — Material-to-Receipt Binding | **Structural modeling gap addressed in the isolated R2-01 mock**; operational assurance and authenticated content provenance remain OPEN. |
| R1-005 — Policy and Condition Revision | **Revision/content mutation covered in R2-01 mock**; authoritative registry completeness and actual policy identity remain OPEN. |
| R1-003 — Authenticated Receipt Trust | **Unresolved; deliberately illustrated by forged-source-and-receipts fixture**. |
| R1-002 / R1-004 / R1-006 / R1-009 | Still unresolved; event feed, authority precedence, independent control and atomic effect commit need separate formal work. |

## Important integration limitation

The earlier **8,230-case** finite event-order/effect-closure evaluator and this **2,065-case** material-binding evaluator are **two separate research models**. They have **not yet been integrated into one model with cross-module proof**, so it would be incorrect to describe their combined 10,295 outcomes as one exhaustive end-to-end test.

**Next bounded pass:** Integrate material binding with causal event ordering, then model external receipt trust and complete revocation-event visibility as *explicit assumptions or unresolved conditions*. Only a later independently checked implementation could support operational claims.

**Historic dispositions:** No promotion. Proof Obligations PO-01–PO-11 remain OPEN and Unknown Findings U-001–U-014 remain UNKNOWN.
