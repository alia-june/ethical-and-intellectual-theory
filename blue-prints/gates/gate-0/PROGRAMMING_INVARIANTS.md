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

See also the [earlier C2 programming record](records/C2/05_PROGRAMMING_INVARIANTS.md).
