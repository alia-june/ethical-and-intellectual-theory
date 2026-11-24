# Atomic Axiom and Dependency Ledger

**Branch:** G0-MOD v0.1, unpromoted.  
**Interpretation:** A row with dependencies expresses a *provisional prerequisite for the guarantee*, not an automatically applied requirement or a proof of logical entailment. Alternative justifications may be possible and must be shown.

## Meta

| ID | Name | Relation / note | Status |
|---|---|---|---|
| M0 | Explicit Adoption | Project scope + legitimate selection; no library-wide automatic applicability | Candidate |
| M1 | Dependency and Composition Integrity | Umbrella for T0-01/T0-02/T0-05 | Candidate umbrella |

## T0 — Foundations

| ID | Name | Provisional prerequisites / constraint | Status |
|---|---|---|---|
| T0-01 | Explicit Dependency Satisfaction | Defined dependency relation and project selection | Candidate |
| T0-02 | Consistency Integrity | Common scope/interpretation for evaluated statements | Candidate |
| T0-03 | Non-Circular Justification | Proof/premise semantics; independently grounded base cases | Candidate |
| T0-04 | Revision Authority Separation | Distinct profile selection and operational enforcement authorities | Candidate |
| T0-05 | Guarantee Preservation | Tracked justification dependencies across profile revisions | Candidate |

## T1 — Authority

| ID | Name | Provisional prerequisites / constraint | Status |
|---|---|---|---|
| T1-01 | Authority Source Anchoring | Authority domain, issuer identity, independent origin | Candidate |
| T1-02 | Explicit Authority Scope | Operation/action/target/effect/validity definitions | Candidate |
| T1-03 | Exercise–Delegation Separation | Authority source and scope, distinct execution/delegation rights | Candidate |
| T1-04 | Delegation Non-Escalation | Delegable scope, valid delegation chain, T1-01/02/03 or equivalents | Candidate |
| T1-05 | Profile Revision Authority | Authorized revision issuer, scope, external binding constraints | Candidate |
| T1-06 | Restriction–Grant Separation | Permission/restriction semantics, authority source/scope | Candidate |

## T2 — Identity / Provenance / References

| ID | Name | Provisional prerequisites / constraint | Status |
|---|---|---|---|
| T2-01 | Identity Binding | Relevant object/grant identity and equivalence criteria | Candidate |
| T2-02 | Reference Resolution Integrity | Binding semantics (stable or dynamic), target identity | Candidate |
| T2-03 | Provenance Continuity | Identifiable entities, activities and derivations | Candidate |
| T2-04 | Representation Non-Equivalence | Identity and representation semantics | Candidate |
| T2-05 | Copy Isolation | Source/copy identities; alias/isolation semantics | Candidate |
| T2-06 | Pre-Copy Fallback | Failure model and independent fallback adequacy | Candidate |
| T2-07 | Transformation Boundary Integrity | Source, copy, candidate, validation, commit boundaries | Candidate |
| T2-08 | Authorization–Reference Binding | T1 scope/authority + T2 target and reference semantics | Candidate |

**T2.P1 candidate:** no guarantee transfer across identity/reference/content/provenance/authority without an explicit valid justification.

## T3 — Conditions / Evidence / Uncertainty

| ID | Name | Provisional prerequisites / constraint | Status |
|---|---|---|---|
| T3-01 | Explicit Evidence State | Propositions and admissible positive/negative support semantics | Candidate |
| T3-02 | Condition Identity | Defined proposition, scope, conditions/revision | Candidate |
| T3-03 | Evidence Provenance | Traceable source, method and context | Candidate |
| T3-04 | Applicability Integrity | Condition identity, scope/context and applicability test | Candidate |
| T3-05 | Conflict Preservation | Distinguishable admissible positive and negative evidence | Candidate |
| T3-06 | Sufficiency Integrity | Condition-specific evidentiary requirements | Candidate |
| T3-07 | Decision Separation | Explicit evidence outcomes and distinct decision rules | Candidate |
| T3-08 | Assurance Independence | Defined independence and adequate provenance/evidence | Candidate |

### T3 evidence semantics

`UNRESOLVED = (0,0)`; `SUPPORTED = (1,0)`; `REFUTED = (0,1)`; `CONFLICTED = (1,1)`. Support must already be admissible. Objective truth is not established by the status label. Applicability separately takes `YES`, `NO`, `UNRESOLVED`.

## Provisional package combinations (not equivalence proofs)

| Package | Proposed composition | Caveat |
|---|---|---|
| T2-ID | T2-01, T2-02, T2-04 | Does not establish access authority |
| T2-PROV | T2-01, T2-03 | Provenance can be recorded but unverified |
| T2-COPY | T2-01, T2-02, T2-05, T2-06, T2-07 | Adequate fallback depends on consequence model |
| T2-AUTH | T2-01, T2-02, T2-08 + relevant T1 | A valid reference is not permission |
| T3-BASIC | T3-01, T3-02, T3-06, T3-07 | Does not require external authorization regime |
| T3-TRACE | T3-BASIC + T3-03, T3-04 | Evidence applicability still must be established |
| T3-CONFLICT | T3-TRACE + T3-05 | Conflict resolution is separately specified |
| T3-INDEPENDENT | T3-CONFLICT + T3-08 | Independence must be evidenced, not counted |

## Interlocking relationship ledger

| Edge ID | From -> to | Type | Research status |
|---|---|---|---|
| DEP-001 | T0 vocabulary -> T1–T3 atomic semantics | Definition prerequisite | Provisional |
| DEP-002 | T1-01 + T1-02 -> T1-03 | Applicability semantics | Provisional |
| DEP-003 | T1-03 + delegable scope -> T1-04 | Applicability / assurance | Provisional |
| DEP-004 | T1 scope + T2 reference binding -> T2-08 | Cross-family | Provisional |
| DEP-005 | T2 identity + derivations -> T2-03 | Provenance | Provisional |
| DEP-006 | T3-02 + scope -> T3-04 | Applicability | Provisional |
| DEP-007 | T3-03 + independence criteria -> T3-08 | Assurance | Provisional |
| DEP-008 | T0-05 + profile change -> reevaluate dependent guarantees | Change invalidation | Provisional |
| DEP-009 | G0-00 + G0-02 + G0-03 -> G0-06 duplicate-grant proposition | Conditional derivation | Proof sketch only |
| DEP-010 | G0-01 + G0-02 + G0-03 + complete condition set -> G0-05 | Conditional derivation | Proof sketch only |

**Important:** `X -> Y` does **not** mean `X` mathematically entails `Y` unless it is separately marked as a verified derivation. Dependency cycles require independently grounded premises or valid fixed-point/proof semantics. Removing a prerequisite suspends claims justified solely by it; it does not prove the claimed statement false.

## Closure C1 note

No new atomic T4–T7 identifiers have been created. See `09_TRANCHE_COVERAGE_CROSSWALK.md` for conceptual coverage; crosswalk relationships are **not** new formal dependencies and do not establish equivalence. Candidate counts remain unchanged.

## C2 dependency and redundancy dispositions

The following **overlaps are not equivalence proofs**:

| Items compared | Assessment | Ledger disposition |
|---|---|---|
| M1 vs T0-01/T0-02/T0-05 | M1 is a collective description of those distinct checks. | Retain as **umbrella**, do not count as additional independent atomic axiom. |
| T1-05 vs T0-04 | One concerns authorized optional revision; other separates revision authority from operational unlocking. | Reinforcing, not identical; both unpromoted. |
| T1-03 vs T1-04 | Delegation right vs attenuation of actual delegation. | Separate concerns; no inferred authority. |
| T2-01/T2-02/T2-04 | Identity, resolution and representation can fail separately. | Distinct candidates; dependencies remain provisional. |
| T2-05/T2-06/T2-07 vs PVI-07/PVI-08 | Theory guarantees vs programming conventions. | Preserve separate registers; overlap intentional. |
| T3-01 vs T3-05 | Four-state vocabulary vs conflict-preservation obligation. | Distinct; state existence alone does not compel preservation. |
| T3-03 vs T3-08 | Evidence provenance vs assurance independence. | Distinct; provenance does not establish independence. |
| G0-03 vs T3-06 | Similar condition sufficiency at different theory levels. | Subject overlap only; modular equivalence not proven. |
| G0-07 vs T0-05 | Changes to assessed context vs loss of a profile guarantee's premise. | Shared dependency logic, different applications. |
| G0-08.S vs G0-08.R | No authority from failure vs existence of recovery path. | Do not merge safety with liveness. |

**Dependency convention:** A selected optional claim requires established prerequisites or a justified alternative, not silently selected controls. The mathematical implication `A -> B` must not be inferred from a graph edge that merely records a prerequisite or conceptual relationship.
