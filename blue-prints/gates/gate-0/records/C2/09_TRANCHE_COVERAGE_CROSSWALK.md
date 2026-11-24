# T4–T7 Coverage Crosswalk — Existing Research vs. Modular Work

**Record type:** Scope reconciliation for closure. This is **not** a new first-pass study of atomic T4–T7 axioms and not a proof of equivalence.

| Planned tranche | Earlier G0 coverage | Existing modular hooks | Supported conceptual finding | What remains **uncompleted** |
|---|---|---|---|---|
| **T4 Composition and Consequences** | G0-00a, G0-05, G0-06; G5-C1 separately | T1-02 scope; T2-08 authority–reference binding; T3-07 decision separation | Locally permissible actions can produce prohibited aggregate effects; mandatory gates require coherent context. Duplicating evidence does not add authority. | A defined modular composition operator; explicit effect-universe boundary; formal interaction and substitution proofs. |
| **T5 Temporal Validity** | G0-07 and G0-07.T1 | T2-02 dynamic reference resolution; T2-08; T3-04 applicability | Historical grant, current applicability, evidence validity, revocation, and commitment must be distinguished. | A formal event-order / commit-point semantics and modular dependency proof. |
| **T6 Independent Assurance** | G0-00b, G0-00c, G0-03, G0-04 | T3-03 provenance, T3-06 sufficiency, T3-08 independence | Verification claims must remain within evidence scope; required independence cannot be inferred from repeated reports. | Independent-assurance substitution criteria; model-to-implementation assurance proof; verifier trust assumptions. |
| **T7 Containment and Recovery** | G0-08.S and G0-08.R, G0-00 / G0-01 | T1-06 restriction/grant separation; T2-06 fallback; T2-07 transformation boundary | Denial creates no authority; containment and liveness/recovery are distinct; fallback adequacy depends on consequences. | Liveness assumptions; identified recoverable-state class; authorization of each recovery operation. |

## Closure classification

- **Conceptually covered:** Subject has already been examined within the historic G0 research; boundaries and counterexamples exist.
- **Modularly unformalized:** No accepted T4–T7 atomic catalog or dependencies have been established.
- **Deferred rather than silently completed:** Any claimed modular equivalence to G0 v0.4 requires a separately grounded derivation.

## Non-equivalence checks

1. Passing all applicable mandatory gates does not prove permitted combined effects.
2. The presence of historical authority does not guarantee authority at the effect's commit point.
3. More attestations do not necessarily mean independent assurance.
4. A safe denial does not guarantee eventual recovery.
5. Restriction-strengthening is not universally equivalent to increasing safety, availability, or recoverability.
6. A theoretically valid opt-in selection cannot override independently binding operational rules.

## Future disposition

If modular T4–T7 granularity becomes necessary for a specific selected project, reopen **only the appropriate tranche** with an explicit purpose and bounded scope. Do not treat broad theoretical closure as a guarantee of that project's fit.
