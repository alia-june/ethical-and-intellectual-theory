# Gate 0 — Conditional Propositions and Derived Requirements

**These are not all independently promoted axioms.** Their deductions depend on premises listed in historical research.

| Identifier | Proposition or requirement | Qualification |
| --- | --- | --- |
| G0-00a.E1 | Enforcement Coverage and Non-Bypass | Every modeled path to protected consequences must face an applicable guard; coverage of a finite model is not proof of actual implementation. |
| G0-04 | Independent Assurance Integrity | Conditionally follows when independent verification is part of a genuinely established mandatory condition. |
| G0-05 | Mandatory Composition Integrity | Conditionally follows when all mandatory conditions are completely identified, context-bound, and positively satisfied. |
| G0-06 | Non-Cumulative Authority | Duplicated/replayed authorization records do not add grants; distinct valid grants may compose only within their governing scopes. |
| G0-06.R1 | Authorization Evidence Idempotence | Multiple records referring to one grant do not constitute new independent grants. |
| G0-06.R2 | Authorized Aggregation | Legitimate independent grants may coexist subject to composition and effect constraints. |
| G0-07.T1 | Temporal Authority Validity | Historical, continuing, consequential and commitment-time permission must be distinguished; concurrent ordering remains unspecified. |
| G0-08.S | Containment Safety | Failure/denial does not create new authority for recovery or cancellation. |
| G0-08.R | Bounded Recoverability | Separately conditioned progress objective; safety alone cannot guarantee an authorized recovery path. |

**G5-C1 Consequence-Sensitive Admission** is a **separate, deferred Gate 5 refinement**, not an additional foundational Gate 0 axiom. More assurance does not manufacture missing authority. Irreversibility can affect assurance thresholds, and may change required authority when an applicable governing contract explicitly so provides.

The original proof sketches and scope limits are recorded in [C2 research notes](records/C2/01_RESEARCH_NOTES.md) and [C2 dependency ledger](records/C2/03_AXIOM_AND_DEPENDENCY_LEDGER.md). They have **not** been machine checked or shown sufficient for production.
