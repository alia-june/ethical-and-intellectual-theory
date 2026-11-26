# xOSG-1 — Pending and Deferred Research, Reopened November 26, 2026

**Framework:** xOSG-1 Operations Contract. **Instrumented realization:** es-xosg-9 *only if and when actually instrumented*. **Authority:** Research continuation only; no selected project profile, production clearance, security certification or promotion of deferred axioms.

The previous Gate Zero v0.4 foundation (eight promoted theoretical axioms) and G0-MOD v0.2 catalog (23 promoted optional atomic definitions, four deferred) remain the baseline. Historical C2/C3 archives are preserved unchanged. This directory is a new additive research cycle, not a revision of those decisions.

## Progress register

| Research area | Existing disposition | Progress this cycle | Remaining condition |
| --- | --- | --- | --- |
| Tranche 2, Item 03 — Provenance Continuity | DEFERRED | Derivation graph, evidence identity and incomplete-history counterexamples specified | Authenticated, bounded provenance coverage and proof |
| Tranche 2, Item 06 — Pre-Copy Fallback | DEFERRED | Failure phases, irreversible effects and recovery adequacy separated | Concrete failure/restore authority and effect model |
| Tranche 3, Item 01 — Explicit Evidence State | DEFERRED | Four support states, admissibility, scope and retraction sketched | Project-specific semantics and justified resolution |
| Tranche 3, Item 08 — Assurance Independence | DEFERRED | Assessor/source dependence model sketched | Independent trust roots, thresholds, verification |
| Tranches 4–7 | DEFERRED | New first modular research pass for each | Formal atomic semantics, proofs and module relationships |
| Gate Five consequence refinement | DEFERRED | Risk, evidence and invalidation counterexamples | Consequence thresholds, adopted policy, independent verifier |
| Universal literal loop unrolling | DEFERRED | Evaluated as optional bounded technique | Equivalence, maintenance and use-specific benefit |
| Proof Obligations 01–11 | OPEN | All mapped to candidate proof artifacts | Formal proof and independent verification |
| Unknown Findings 001–014 | UNKNOWN | All mapped to evidence gaps | Independent facts or proof not currently established |
| Ordered seven-gate Alpha-Lock | Proposed | 31 in-memory mock tests; all expected outputs observed | Real authentication, concurrent commit and external controller |
| Project adoption and es-xosg-9 instrumentation | NOT ESTABLISHED | Explicitly separated from theory | Independently authorized implementation and runtime evidence |

## Documents

1. **01_ATOMIC_RESEARCH.md** — all four deferred atomic items, with candidate semantics and countermodels.
2. **02_TRANCHES_4_TO_7.md** — a first substantive modular study of composition, time, independent assurance and recovery.
3. **03_PROOFS_AND_UNKNOWNS.md** — all eleven open proof obligations and all fourteen unknown claims, with bounded research actions.
4. **04_GATE_SEVEN_DRYRUN.md** and **alpha_lock_research_model.test.js** — the 31-test report and reproducible, mock-only JavaScript evaluator.
5. **05_OTHER_DEFERRED.md** — Gate Five consequence refinement, loop-unrolling, substitution and instrumented-system boundaries.
6. **06_WORKLOG.md** — decision and progress ledger.

## Second pass — finite semantic modeling (2026-11-26)

- **07_CORE_SEMANTIC_UNIVERSE.md** — authority, conditions, cumulative effects and causal time as explicit finite-domain predicates.
- **08_FINITE_MODEL_CHECK_REPORT.md** — the **8,192 exhaustive finite-domain cases** and **38 targeted cases**, with the observed outcomes and scope limitations.
- **09_DEFECTS_COUNTERMODELS_AND_RESEARCH_ORDER.md** — identifies a receipt-to-material binding gap and eight additional unverified assumptions; records the next countermodel order.
- **finite_clearance_commit_model.test.js** — executable research-only finite evaluator; **8,230** mock fixtures returned their expected outcomes.

**Earlier R2-01 material-binding follow-up (prior to R3 integration):** [10_MATERIAL_BINDING_R2_RESULTS.md](10_MATERIAL_BINDING_R2_RESULTS.md) and [material_receipt_binding_model.test.js](material_receipt_binding_model.test.js) record **2,048 exhaustive material-change combinations plus 17 targeted cases, all matching expected outcomes**. A deliberately forged-source-and-receipts fixture demonstrates that structural equality cannot authenticate the source. These models were separate at R2-01; the later R3 model integrates both behaviors.

The R1 finite model initially checked names without full material binding; R2 investigated material binding independently, and R3 tested both together with fixture signatures. None is proof of runtime enforcement, independent external authority or an operational release.

## R3 — Integrated signed-fixture model (2026-11-26)

- [R3 integrated test report](11_R3_INTEGRATED_GATE_COMMIT_REPORT.md): **2,048 bounded combinations plus 36 targeted cases; 2,084/2,084 expected outcomes observed**.
- [Trust-root, revocation and atomic commit research obligations](12_R3_TRUST_AND_ATOMIC_COMMIT_OBLIGATIONS.md): external authorization and real effect-commit requirements remain open.
- [Reproducible integrated offline Node.js source](integrated_gate_commit_research.test.js): tests ephemeral Ed25519 keys, chained receipts, full material digests, bounded cumulative effects, causal order and revocation cases.

**Scope:** Genuine Ed25519 signature checks run against *fixture-controlled keys*; no real legitimate issuer or independently authorized controller is established. The model has no external effects and is not es-xosg-9 instrumentation.

## Governing distinction

**Defined ≠ proven ≠ adopted ≠ instrumented ≠ authorized to act.** A gate returning CLEARED in a mock is not an actual gate clearance. The first production gate (Gate One) never permits production without the independent seventh gate, Alpha-Lock. Deferred and UNKNOWN entries are not silently promoted by this research pass.
