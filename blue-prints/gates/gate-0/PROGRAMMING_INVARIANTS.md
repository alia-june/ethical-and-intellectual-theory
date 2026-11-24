# Programming Invariants — Separate Opt-In Register

These preferences do **not** constitute a Gate 0 authority grant or universal security certification. The [full C3 programming decision record](records/C3/05_C3_PROGRAMMING_REGISTER.md) is the accepted accounting.

| ID | Practice | C3 disposition |
| --- | --- | --- |
| PVI-01 | Deterministic bounded iteration | Accepted optional preference |
| PVI-02 | Literal deterministic loop unrolling | Deferred as a universal invariant; available as a technique |
| PVI-03 | Explicit sentinel states | Accepted optional preference |
| PVI-04 | Variables declared and placed in a known state before use | Accepted optional preference |
| PVI-05 | Human-legible identifier conventions | Accepted optional preference |
| PVI-06 | Human-legible program flow | Accepted optional preference |
| PVI-07 | Work on an isolated copy obtained through an explicit source reference | Accepted optional preference |
| PVI-08 | Establish a safe fallback **before** attempting the copy | Accepted optional preference |

A reference to a mutable object is not automatically an isolated copy. A sentinel must not be mistaken for legitimate data. A successful validation does not automatically authorize committing a result. A fallback may not compensate for irreversible external effects; that stronger claim is deferred as T2-06.

## Preferred human-readable programming form

- Declare every variable with its type, descriptive name, and known sentinel or defined initial state before use.
- Use terms such as `original_operator_prompt`, `authorization_grant`, `isolated_working_copy`, and `safe_fallback_reference` instead of one-letter identifiers or ambiguous numeric placeholders.
- Declare explicit bounds and named stop states for iteration. Literal loop unrolling is an optional representation, **not** a universal rule.
- Distinguish `UNRESOLVED`, `REFUTED`, `NOT_APPLICABLE`, and `SUPPORTED` when the selected evidence model requires them; none implicitly authorizes an effect.
- Preserve the original through an appropriate isolated copy, **establish the fallback before copying**, and separate validation of a candidate from authorization to commit.

See the [complete human-readable notation and bounded pseudocode](NAMING_AND_PSEUDOCODE.md) and the [earlier C2 programming record](records/C2/05_PROGRAMMING_INVARIANTS.md).
