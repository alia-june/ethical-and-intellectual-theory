# Ordered Seven-Gate Alpha-Lock — 31 In-Memory Mock Tests

**Observed:** 31/31 tests returned their expected result. Two returned fixture-valid CLEARED; twenty-nine returned NOT_CLEARED. They were executed as a local JavaScript *in-memory research evaluator*, not as deployed code, cryptographic attestation, independent receipt verification or an operating gate.

## Modeled requirement

The simplified evaluator requires an expressly selected seven-gate profile; exactly six receipts numbered One–Six in valid order; each receipt CLEARED, marked authenticated, unexpired and bound to identical candidate identity, revision, target, effect, profile, authorizer and risk snapshot; Gate Six restatement-consistency flag; no revoked grant; and a separate simulated independent Alpha-Lock clearance.

“Authenticated” and “independent” are **test fixture flags**, not genuine evidence. No physical, external or production effect is performed.

## Executed case groups

| Cases | Number | Expected/observed |
| --- | ---: | --- |
| Complete coherent mock receipts and mock Alpha-Lock clearance | 1 | CLEARED |
| Individually set Gates One through Six to NOT_CLEARED | 6 | All NOT_CLEARED |
| Gate Five emits UNRESOLVED, CONFLICTED, REFUTED, NOT_ADOPTED or NOT_APPLICABLE | 5 | All NOT_CLEARED |
| Profile not selected | 1 | NOT_CLEARED |
| Missing Gate Six receipt; out-of-order receipts; duplicate gate number | 3 | All NOT_CLEARED |
| Unverified receipt; expired receipt; revoked authorization | 3 | All NOT_CLEARED |
| Gate Six restatement mismatch | 1 | NOT_CLEARED |
| Missing independent Alpha-Lock permission; self-controlled Alpha-Lock | 2 | Both NOT_CLEARED |
| Change candidate, revision, target, effect, profile, authorizer, or risk snapshot | 7 | All NOT_CLEARED |
| Gate Three positively clears a contract-established no-handoff case | 1 | CLEARED |
| Gate Three omitted to skip evaluation | 1 | NOT_CLEARED |
| **Total** | **31** | **31 expected outcomes observed** |

The decision logic illustrates **Gate One clearance is necessary but not sufficient**, Gate Six is sixth, and Gate Seven is an independent final barrier. A non-triggered sub-action must be positively justified by adopted policy; it cannot be silently omitted.

## Untested material conditions

Authentication, signature/key revocation, replay and audit correctness; actual external authorizer identity; atomic final-effect commitment and time-of-check/time-of-use races; side channels and combined effects; genuine Operator comprehension; source/model independence; handling of real controller failure; and operational lock recovery remain **unproven**. This model cannot demonstrate actual es-xosg-9 instrumentation.

**Next research acceptance:** independently reproducible finite-state property tests, authenticated mock receipt schema, deliberate forgery/replay counterexamples and a coherent model of effect commit/revocation. Even those would remain model-level testing, not operational clearance.
