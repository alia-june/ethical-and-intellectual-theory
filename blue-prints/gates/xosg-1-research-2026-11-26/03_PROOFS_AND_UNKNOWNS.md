# Proof Obligations and Unknown Findings — Reconciled

## Eleven open proof obligations (original identities and content)

| Identifier | Required proof / formalization | Status |
| --- | --- | --- |
| PO-01 | Specify consistent formal semantics for all eight G0 v0.4 axioms, including cross-domain effects. | OPEN |
| PO-02 | Establish (or decline) formal independence and minimality; current sketches are not proofs. | OPEN |
| PO-03 | Define project scope, authority source and precedence for conflicting external authorities. | OPEN |
| PO-04 | Define finite/unbounded effect universes, including side channels and cumulative effects. | OPEN |
| PO-05 | Distinguish complete mandatory-condition set from merely empty recorded set. | OPEN |
| PO-06 | Establish authorization point, commitment event, revocation and partial-order semantics. | OPEN |
| PO-07 | Define acceptable recovery states and conditional liveness assumptions. | OPEN |
| PO-08 | Prove or reject alternative dependency sets/substitutions for each optional package. | OPEN |
| PO-09 | Formalize T3 conflict resolution without illicitly converting conflict into permission. | OPEN |
| PO-10 | Examine T4 composition, aggregation, conflicting permissions and consequence closure. | OPEN |
| PO-11 | Examine T5 temporal properties, T6 independent assurance and T7 containment/recovery when authorized by continued research. | OPEN |

## Fourteen unresolved claims

| Identifier | Claim | What is still missing | State |
| --- | --- | --- | --- |
| U-001 | Logical independence/minimality of G0 v0.4 eight axioms | No fixed complete formal semantics or eight independent countermodels; no minimal-basis claim. | UNKNOWN |
| U-002 | Full consistency/completeness of G0 v0.4 and modular v0.2 | Bounded adversarial examples are not a universal model or deductive proof. | UNKNOWN |
| U-003 | Legitimate external authority precedence | Authority hierarchy, exceptional authority and conflicts among grant issuers unspecified. | UNKNOWN |
| U-004 | Complete protected effect universe | Cumulative effects, side channels and external consequences not exhaustively modeled. | UNKNOWN |
| U-005 | Completeness of all mandatory project conditions | An empty observed condition set may be incomplete. | UNKNOWN |
| U-006 | Time-of-authorization / revocation / commit ordering | Concurrent/distributed event ordering and commit points are scope-dependent. | UNKNOWN |
| U-007 | Actual isolation/fallback for a particular copy process | Aliasing, external effects and restoration capability not examined for any runtime. | UNKNOWN |
| U-008 | Veracity and completeness of provenance across transformations | T2-03 deferred; a provenance record is not independent proof. | UNKNOWN |
| U-009 | Universal four-state evidence admissibility semantics | T3-01 deferred; evidence aggregation, retraction and conflict resolution not fixed. | UNKNOWN |
| U-010 | Assessor/source independence in a particular project | T3-08 deferred; identity multiplicity does not guarantee independent evidence. | UNKNOWN |
| U-011 | Formal equivalence of modular selections to G0 v0.4 | Crosswalk is conceptual; substitute premise sets and closure unproved. | UNKNOWN |
| U-012 | Guarantee of bounded recovery/liveness | Requires specified recoverable states, authorized paths and progress assumptions. | UNKNOWN |
| U-013 | Model-to-implementation correspondence / runtime security | No runtime, source, configuration or environment attested; no deployment. | UNKNOWN |
| U-014 | Risk improvement from adding or removing optional controls | Restrictiveness, assurance, availability and recoverability are not one dimension. | UNKNOWN |

## Concrete research sequence

**First** develop common typed semantics for grants, required conditions, exact candidate and effect identity, representation/reference binding and selected project profiles (PO-01/03/04/05). **Second** define composition, admissible evidence and temporal commit semantics (PO-06/09/10). **Third** attempt independence/minimality and package equivalence using explicit countermodels or bidirectional derivations (PO-02/08). **Fourth** give bounded recovery and independent implementation assurance actual testable states, authorities and assumptions (PO-07/11).

The new atomic and Tranche research files provide *candidate semantic inputs* toward PO-06/09/10/11; they do not discharge any obligation. A simplified in-memory Alpha-Lock test cannot resolve U-006 (commit race), U-010 (real independent assessor), U-013 (model/implementation correspondence), or U-004 (effect completeness). The previous **UNKNOWN** classification is preserved on all 14 claims.
