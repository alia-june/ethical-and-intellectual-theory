# Consolidated Research Notes — Gate 0 and Modular Foundations

**Snapshot:** 2026-11-24  
**Scope:** Gate 0 theoretical foundations; G0-MOD opt-in axiom packages.  
**Non-goal:** Code, operational gate enforcement, publishing, deployment, or weakening any existing lock.

## A. Current accepted theoretical baseline — G0 v0.4

| ID | Accepted axiom | Required conceptual distinction |
|---|---|---|
| G0-00 | Authority Conservation | A governed component cannot acquire/exercise/delegate authority beyond legitimate authorization; external valid grants can change scope. |
| G0-00a | Effective Authority Closure | Independently permitted operations must not combine into a prohibited protected effect. |
| G0-00b | Assurance Boundary Integrity | Claims cannot exceed examined evidence, properties, assumptions, and scope. |
| G0-00c | Implementation Correspondence Integrity | A verified model does not by itself verify an actual implementation or environment. |
| G0-01 | Default Denial | In the opted-in admission model, absent/contradictory/unresolved evidence does not establish permission. |
| G0-02 | Authorization Identity Continuity | Grant origin, scope, issuer, target, actor, action, and context cannot be silently substituted. |
| G0-03 | Condition Integrity | Mandatory conditions cannot be marked satisfied without their specified verification requirements. |
| G0-07 | Dependency-Scoped Change Invalidation | Changes affecting a clearance's premises require reassessing its applicability; historical evidence is not erased. |

**Status caveat:** These axioms are accepted as premises of the theoretical framework. Their independence, minimality, completeness, and actual implementation correctness are **not established**.

### Historic subordinate rules / still explicit

- G0-00a.E1 — Enforcement Coverage and Non-Bypass: candidate derived engineering/assurance obligation; theoretical model coverage is not implementation proof.
- G0-04 — Independent Assurance Integrity: conditional on independently defined verification requirements (derived candidate).
- G0-05 — Mandatory Composition Integrity: requires complete mandatory condition set and context binding (derived candidate).
- G0-06 — Non-Cumulative Authority: repeated evidence does not create grants; properly issued distinct grants may compose under authorized constraints (derived candidate).
- G0-06.R1 — Authorization Evidence Idempotence; G0-06.R2 — Authorized Aggregation.
- G0-07.T1 — Temporal Authority Validity: historical authorization, continuing authority, and resulting consequences are distinct.
- G0-08.S — Containment Safety: failure/denial does not manufacture recovery authority.
- G0-08.R — Bounded Recoverability: a separate conditional progress objective, not implied by safety.
- G5-C1 — Consequence-Sensitive Admission: irreversibility may change required assurance, and authority only when the governing contract says so; confidence does not create permission.

## B. Modular research architecture — G0-MOD v0.1

**Purpose:** Build small, interlocking, optional theoretical security premises, allowing projects to select different control profiles without making the entire library mandatory.

1. **Library**: contains statements, definitions, proposed dependencies, derived propositions, and scopes.
2. **Project profile**: explicit selection of applicable items plus scope, revision and independently binding obligations.
3. **Assurance record**: evidence that the selected guarantees actually hold (separate from selection itself).

**M0 — Explicit Adoption (candidate):** Optional library axioms do not become binding on a project merely by existing. `NOT_SELECTED`, `SELECTED`, `APPLICABLE`, `UNRESOLVED` are distinct states.

**M1 — Dependency and Composition Integrity (candidate umbrella):** Selected guarantees must have their prerequisites and declared constraints established; likely covers T0-01, T0-02, T0-05, not another independent axiom.

Profile strength has multiple axes: restrictiveness, assurance quality, protected consequences, and recoverability. Adding restrictions does not automatically improve all dimensions of security. Profile revision authority differs from actual operational unlock authority; no AI self-unlocking path follows from optionality.

**Interlocking relationship classes:** dependency, derivation, reinforcement, conflict, substitution. Distinguish logical, applicability, assurance and future operational dependencies; avoid circular proof.

## C. T0 — Primitive Definitions and Relationships (first pass complete; unpromoted)

- T0-01 Explicit Dependency Satisfaction: a missing prerequisite cannot silently count as adopted or satisfied.
- T0-02 Consistency Integrity: cannot claim a profile is logically consistent where applicable requirements contradict.
- T0-03 Non-Circular Justification: a cycle of mutually assumed conclusions is not its own proof.
- T0-04 Revision Authority Separation: permission to select or revise an optional profile is not permission to unlock operational enforcement.
- T0-05 Guarantee Preservation: removing a premise requires reassessment of dependent assurance claims; it does not automatically make the claim factually false.

**Formal note:** Satisfiability of a profile's statements differs from evidence that the profile's assurances hold. Dependency completeness differs from logical consistency. Automatic dependency *discovery* is not automatic dependency *adoption*.

## D. T1 — Authority Foundations (first pass complete; unpromoted)

- T1-01 Authority Source Anchoring: accepted authority traces to independently established authority, not self-certifying cycles.
- T1-02 Explicit Authority Scope: operation, target, effects, conditions, validity are bounded by a declared scope.
- T1-03 Exercise–Delegation Separation: permission to act is not automatically permission to delegate; delegable authority need not be identical to executable authority.
- T1-04 Delegation Non-Escalation: child delegated scope is within valid delegable scope under all governing conditions.
- T1-05 Profile Revision Authority: changing optional project controls needs independent revision authority and cannot remove external locks.
- T1-06 Restriction–Grant Separation: permission to impose a lock does not itself permit unlock or permission expansion.

T1 complements G0-00 but is not proven equivalent to it. Selecting every T1 rule does not automatically establish consequence closure (G0-00a).

## E. T2 — Identity, Provenance, and Reference Integrity (first pass complete; unpromoted)

- T2-01 Identity Binding: distinct identity preserved for relevant object/grant.
- T2-02 Reference Resolution Integrity: stable/dynamic reference semantics explicit; changed targets require proper applicability analysis.
- T2-03 Provenance Continuity: record source, activities, actors and derivations without equating provenance recorded to verified provenance.
- T2-04 Representation Non-Equivalence: format/label/content equality does not establish event identity or authority.
- T2-05 Copy Isolation: prevent transformations of working copy from mutating authoritative original by aliasing; deep copy is not universally mandatory.
- T2-06 Pre-Copy Fallback: before potentially failing copy operation establish a fallback independent of successful copying and adequate for declared failure effects.
- T2-07 Transformation Boundary Integrity: source, copy, candidate, validated result, and authorized commit are distinguishable.
- T2-08 Authorization–Reference Binding: successful reference resolution is not authorization for the actual target.

**Candidate derived proposition T2.P1:** Non-Transference of Guarantees. Valid reference ≠ authorized access; valid copy ≠ valid transformation; validated candidate ≠ authorized commit.

**Illustrative opt-in packages (not endorsed or proved complete):** T2-ID; T2-PROV; T2-COPY; T2-AUTH.

## F. T3 — Conditions, Evidence, and Uncertainty (first pass complete; unpromoted)

A condition, evidence about it, an evidentiary finding, and a permission decision are separate objects.

Candidate four-valued **evidence-support** representation for proposition p:

| Support pair (positive, negative) | Status | Meaning |
|---|---|---|
| (0,0) | UNRESOLVED | Neither side adequately supported |
| (1,0) | SUPPORTED | Admissible positive support only |
| (0,1) | REFUTED | Admissible negative support only |
| (1,1) | CONFLICTED | Both sides adequately supported |

The pair represents **admissible evidentiary support**, not objective truth. Applicability is separate: `YES`, `NO`, `UNRESOLVED`; `NOT_APPLICABLE` is not `FAILED`.

- T3-01 Explicit Evidence State.
- T3-02 Condition Identity.
- T3-03 Evidence Provenance.
- T3-04 Applicability Integrity.
- T3-05 Conflict Preservation.
- T3-06 Sufficiency Integrity.
- T3-07 Decision Separation.
- T3-08 Assurance Independence.

**Key results:** More evidence can create conflict and *reduce* admissibility; duplicate reports do not establish independent assurance; a `PASSED` label without required evidence is not sufficient; `SUPPORTED` does not itself grant permission.

**Illustrative opt-in packages (not proved complete):** T3-BASIC, T3-TRACE, T3-CONFLICT, T3-INDEPENDENT.

## G. Programming layer — deliberately separate

PVI-01 through PVI-08 are a separate theoretical programming-invariant family. They are compatible with, but not identical to, T2/T3 guarantees. In particular, program sentinel state (`UNSET`, `INVALID`, etc.) is not the same as an evidentiary support state (`UNRESOLVED`, `CONFLICTED`, etc.). See `05_PROGRAMMING_INVARIANTS.md`.

## H. The next research boundary — T4

**T4: Composition and Consequences** — determine when individually valid selected premises, gate decisions, authorization grants, references, and operations form a legitimate composition. Examine:

1. Composition operator and scope compatibility.
2. Preservation of mandatory constraints and complete condition sets.
3. Aggregate/cumulative protected effects even with locally permitted components.
4. Repeated and aliased grants; conflicting or independent approvals.
5. Consequence categories, reversibility, uncertainty, and proportional assurance.
6. Composition of guarantees versus composition of actual authority.
7. Countermodels for invalid compositions and proof boundaries.

**Stop conditions:** No implementation, publication, production gate changes, grant/revocation of real permissions, or silent promotion of candidate axioms.

## Closure C1 note

Research progression is now bounded by a close-out process rather than the earlier open-ended T4–T7 plan. Earlier G0 research already addressed composition/consequences, temporal authority, independent assurance, and containment/recoverability, but **no accepted atomic modular design for T4–T7 exists**. See `09_TRANCHE_COVERAGE_CROSSWALK.md`. T0–T3 remain unpromoted; operational authorization is unchanged. C1 closure preparation does not constitute final research acceptance.

## C2 — Closure-phase reconciliation

The first conceptual research cycle is now frozen for closing. **G0 v0.4 remains the promoted theoretical baseline**, not a project default. **G0-MOD v0.1 remains unpromoted and strictly opt-in**, with 27 T0–T3 atomic candidates and meta-principles M0/M1. This does not automatically select any optional project control.

C2 confirms: (a) the Gate 0 baseline and modular branch are different layers; (b) dependency discovery is not dependency adoption; (c) explicit profile-revision authority cannot remove independently binding locks; (d) scope-limited assurance claims cannot be silently upgraded to proof of actual system correctness; and (e) containment does not entail recoverability.

T4–T7 are crosswalked to historic G0 subjects, **not** represented as newly completed modular research tranches. Refer to `10_C2_CONTRADICTION_REDUNDANCY_AUDIT.md` for the scoped audit, and `11_CLOSEOUT_DISPOSITION.md` for what may and may not be claimed at closure.

No new axioms or propositions were promoted in C2. Future work requires a newly authorized, bounded research purpose.
