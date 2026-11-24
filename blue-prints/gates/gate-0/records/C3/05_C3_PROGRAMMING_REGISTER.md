# C3 — Programming Invariant Disposition (Separate from Gate 0)

The user's preferred programming disciplines are preserved separately from the authority-axiom library. The decisions below recognize them as **opt-in design preferences**, not universal runtime security proofs, compiler constraints, or a command to write code.

| ID | Name | Disposition | Boundary |
|---|---|---|---|
| PVI-01 | Deterministic Bounded Iteration | ACCEPT PREFERRED DESIGN RULE | Only under an explicit bound and environmental model. |
| PVI-02 | Deterministic Loop Unrolling | DEFER AS UNIVERSAL INVARIANT | Keep as optional inspection/representation technique; bounded iteration does not require literal unrolling. |
| PVI-03 | Explicit Sentinel States | ACCEPT PREFERRED DESIGN RULE | Prefer tagged state where possible; sentinel cannot masquerade as operational data. |
| PVI-04 | Defined and Initialized Variables | ACCEPT PREFERRED DESIGN RULE | Known state before use; avoid dummy initialization that conceals omitted assignment. |
| PVI-05 | Human-Legible Naming | ACCEPT PREFERRED DESIGN RULE | Legibility not semantic proof. |
| PVI-06 | Human-Legible Program Flow | ACCEPT PREFERRED DESIGN RULE | Inspected flow not automatically correct. |
| PVI-07 | Reference-Based Copy Isolation | ACCEPT PREFERRED DESIGN RULE | Working copy must not unexpectedly alias the authoritative source. |
| PVI-08 | Fallback Before Copy | ACCEPT PREFERRED DESIGN RULE | Establish fallback before attempt; adequacy against all side effects remains UNKNOWN until the failure model is declared. |

**Important:** PVI-08 acceptance does not promote the stronger T2-06 assurance claim. PVI-01/03–08 remain opt-in programming preferences. No code or production controls have changed.
