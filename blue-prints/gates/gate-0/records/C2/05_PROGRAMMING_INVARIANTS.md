# Programming Invariant Ledger — Separate Theoretical Register

**Status:** PVI-01 through PVI-08 recorded proposals; do not import as mandatory Gate 0 security axioms or implementation directives.

| ID | Invariant | Intended rule | Qualification |
|---|---|---|---|
| PVI-01 | Deterministic Bounded Iteration | Declared, verifiable upper bound on iterations in scoped computation | Depends on stated input and computational model. |
| PVI-02 | Deterministic Loop Unrolling | Prefer finite guarded step representation for inspection | Literal code expansion not universally necessary. |
| PVI-03 | Explicit Sentinel States | Represent missing/unavailable/invalid/unresolved rather than silently using legitimate values | Typed alternatives preferred where possible; sentinel cannot masquerade as data. |
| PVI-04 | Defined and Initialized Variables | Every variable has a defined state before use | Dummy initialization can conceal missing assignment; use explicit state semantics. |
| PVI-05 | Human-Legible Naming | Identifiers communicate role and intent | Names alone do not prove semantics. |
| PVI-06 | Human-Legible Program Flow | Explicit entry, decisions, effects, failures, exits | Legibility does not prove correctness. |
| PVI-07 | Reference-Based Copy Isolation | Work on an isolated copy obtained via explicit reference to the original | A reference alone is not a copy; aliasing can mutate source. |
| PVI-08 | Fallback Before Copy | Establish an independent, adequate safe fallback prior to copy attempt | Fallback must cover declared failure consequences, not merely retain source. |

## Derived precedence

`FALLBACK ESTABLISHED` precedes `COPY ATTEMPT` precedes `TRANSFORMATION` precedes `VALIDATION`. `COMMIT` remains distinct and requires applicable authorization. This is a conceptual precedence requirement for selected copy-transform workflows, not universal ordering for every program.

## PVI ↔ modular cross-reference (non-equivalence)

- PVI-03/04 ↔ T3-01: program states and evidence support states are separate; no automatic entailment.
- PVI-05/06 ↔ G0-00b: legible structure can help bound claims, but names and diagrams are not proof.
- PVI-07 ↔ T2-05 Copy Isolation.
- PVI-08 ↔ T2-06 Pre-Copy Fallback.
- PVI-07/08 ↔ T2-07 Transformation Boundary Integrity.
- PVI-01/02 ↔ finite-state model inspection, assuming finite state domains and bounded environmental interactions.

## Deferred edge cases

- Copy-on-write and immutable data; required isolation without full deep copies.
- Failure during fallback establishment itself.
- Source identity changing after reference validation.
- External side effects created by copying.
- Unbounded external behavior despite bounded local loops.
- Recovery/fallback requiring independent authorization.

**Status unchanged:** No programming implementation, execution contract, or production control added.
