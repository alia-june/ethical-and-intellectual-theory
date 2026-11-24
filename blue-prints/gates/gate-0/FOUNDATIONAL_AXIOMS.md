# G0 v0.4 — Foundational Axioms

**Disposition:** Eight **promoted theoretical premises**, not universal security proofs. G0 v0.3 is retained as the earlier baseline. No production gate is cleared by promotion.

| ID | Axiom | Accepted theoretical obligation |
| --- | --- | --- |
| G0-00 | **Authority Conservation** | Governed components do not acquire, exercise or delegate rights beyond applicable independently authorized permissions; valid external grants may change scope. |
| G0-00a | **Effective Authority Closure** | The composition of locally permitted operations must not create a prohibited protected effect. |
| G0-00b | **Assurance Boundary Integrity** | Verification and attestation claims remain within the evidence, assumptions, state space, properties and transitions actually examined. |
| G0-00c | **Implementation Correspondence Integrity** | Verification of a model does not prove the behavior of a source, executable, configuration or environment without justified correspondence. |
| G0-01 | **Default Denial** | In a profile that adopts the admission model, missing, conflicting or unresolved required permission/conditions do not establish admission. |
| G0-02 | **Authorization Identity Continuity** | Authorization issuer, identity, scope, actor, action, target, effects and governing context cannot be silently substituted as records are used or transformed. |
| G0-03 | **Condition Integrity** | Mandatory conditions cannot be classified as satisfied unless their specified verification requirements are established. |
| G0-07 | **Dependency-Scoped Change Invalidation** | Material changes affecting the premises of a determination require reassessment of continued applicability; historical validity is not retroactively erased. |

## Interpretive boundaries

**Authority** is not the same as **evidence of authority**. **Approval to develop** is not **approval to publish or execute**. A correct verification statement may be inapplicable to a changed target. Identity of an approval and validity of its issuing authority are distinct.

A conceptual necessary-condition proposition for an eligible operation `q` at a relevant point `t` is:

```text
Eligible(q,t) requires:
    EstablishedAuthority(q,t)
    AND ApplicableIdentity(q,t)
    AND CompleteAndSatisfiedMandatoryConditions(q,t)
    AND AuthorizedEffects(q,t)
    AND TemporallyApplicableEvidenceAndAuthority(q,t)
```

This is **not** a sufficient-condition proof, authorization token, runtime gate, or algorithm. Unknowns remain unknown; a non-admission outcome does not itself prove authority never existed.

## Not claimed

Logical independence/minimality of the eight premises, an exhaustively specified effect universe, complete verification conditions, universal consistency, and implementation correspondence are **UNKNOWN**, not certified. Later modular optional rules have not been shown equivalent to these axioms.

See [propositions](PROPOSITIONS.md), [unknowns](UNKNOWNS.md), [historical theoretical research](records/C2/01_RESEARCH_NOTES.md), and the [C3 decision ledger](records/C3/02_C3_DECISION_LEDGER.md).
