# Error, Risk, and Open-Issue Ledger

**Purpose:** Prevent certainty inflation, accidental promotion, or loss of unresolved questions.  
**Status:** Theoretical; research register open while T4–T7 continue.

## Historical accounting corrections (A0 series)

| ID | Issue | Risk | Accounting / next action |
|---|---|---|---|
| A0-E01 | Independence claims stated too strongly | Treat counterexamples as proof of minimality | Qualify as provisional; require formal semantics and countermodels. |
| A0-E02 | Authority hierarchy unspecified | Conflicting grant resolution without authority | Define legitimate issuer and authority relationship in future theory. |
| A0-E03 | Protected effect universe incomplete | Unmodeled composite consequences | Declare effect boundaries; scope assurance claims. |
| A0-E04 | Temporal ordering ambiguous | Revocation / commit race misclassified | Model partial ordering and commitment; preserve unresolved cases. |
| A0-E05 | Safety and recovery conflated | Treat denial as sufficient recovery or recovery as new authority | Keep G0-08.S vs G0-08.R distinct. |

## Modular branch issues (M series)

| ID | Issue | Severity to research claims | Required follow-up |
|---|---|---|---|
| M-R01 | Optional selection may be confused with deployment | High | Explicit release/adoption/enactment boundary in every profile. |
| M-R02 | Dependencies may be accidentally auto-adopted | High | Treat dependency closure as discovery; never silent activation. |
| M-R03 | Adding restrictions may reduce recoverability | Medium | Compare separate restrictiveness, assurance, availability, recovery axes. |
| M-R04 | Profile downgrade may implicitly remove externally binding lock | High | Require separate revision authority; external gate precedence. |
| M-R05 | Cyclic dependency may masquerade as proof | High | Ground proof graph; distinguish axioms, obligations and derived propositions. |
| M-R06 | Satisfiable profile may be represented as verified | High | Separate model existence from evidence/correspondence assurance. |
| M-R07 | Equivalent substitutions may not actually prove equivalent guarantees | Medium | Require scoped derivation before declaring substitute controls. |

## T1/T2/T3 technical-theory issues

| ID | Issue | Required boundary or countermodel |
|---|---|---|
| T1-R01 | Delegable vs executable authority assumed identical | Model two rights separately; allow legitimate delegate-only actor. |
| T1-R02 | Circular issuance without external anchor | Two agents authorizing each other is not sufficient grounding. |
| T2-R01 | Shallow copy aliases mutable source | Copy created ≠ source isolated; define required isolation. |
| T2-R02 | Copy itself discloses data or causes external effects | Original preserved ≠ sufficient fallback. |
| T2-R03 | Reference target changes between check and use | Applicability to resolved target must be renewed or stably bound. |
| T2-R04 | Provenance record merely asserted | Recorded ≠ verified provenance. |
| T2-R05 | Candidate validated but commit unauthorized | Separate validation from commit permission. |
| T3-R01 | Evidence status interpreted as objective truth | Four support states are epistemic, not truth values. |
| T3-R02 | Missing applicability labeled inapplicable | Use `UNRESOLVED` where applicability is not established. |
| T3-R03 | Contradictory evidence silently replaced by favorable finding | Preserve conflict until admissible resolution. |
| T3-R04 | Multiple dependent reports claimed as independent | Source/process correlation must be examined. |
| T3-R05 | Increased evidence treated as increased permission | New contrary evidence may reduce admissibility. |
| T3-R06 | Evidence state conflated with programming sentinel | Keep state-of-value distinct from state-of-knowledge. |

## Outstanding proof obligations

- **PO-01:** Specify consistent formal semantics for all eight G0 v0.4 axioms, including cross-domain effects.
- **PO-02:** Establish (or decline) formal independence and minimality; current sketches are not proofs.
- **PO-03:** Define project scope, authority source and precedence for conflicting external authorities.
- **PO-04:** Define finite/unbounded effect universes, including side channels and cumulative effects.
- **PO-05:** Distinguish complete mandatory-condition set from merely empty recorded set.
- **PO-06:** Establish authorization point, commitment event, revocation and partial-order semantics.
- **PO-07:** Define acceptable recovery states and conditional liveness assumptions.
- **PO-08:** Prove or reject alternative dependency sets/substitutions for each optional package.
- **PO-09:** Formalize T3 conflict resolution without illicitly converting conflict into permission.
- **PO-10:** Examine T4 composition, aggregation, conflicting permissions and consequence closure.
- **PO-11:** Examine T5 temporal properties, T6 independent assurance and T7 containment/recovery when authorized by continued research.

## Assurance/claim restrictions

No mechanized proof, runtime verification, completeness proof, repository update, production clearance or actual profile adoption occurred as a result of this notes snapshot. Proof sketches are deliberately marked conditional. Records are not equivalent to validated implementations.

## Closure triage C1

| ID | Question or issue | Closure disposition |
|---|---|---|
| C1-01 | T4–T7 modular studies not individually completed | **Disclosed limitation; nonblocking** for scope-limited conceptual closure |
| C1-02 | G0 v0.4 axiom independence/minimality unproved | **Disclosed limitation; nonblocking** if no formal-minimality claim is made |
| C1-03 | Optional profile selection vs existing production lock | **Boundary reaffirmed; resolved at theoretical-scope level** |
| C1-04 | Dependencies recorded as though selection implied activation | **Prohibited by M0/T0-01; residual verification remains open** |
| C1-05 | Proof obligations PO-01–PO-11 | **Deferred for formalization**, not asserted completed |
| C1-06 | Open-ended proliferation of new axioms | **Frozen for closure** absent a material protection gap |

**No issues are marked as mathematically resolved solely because they are deferred.**

## C2 close-out classification

No open proof obligation is represented as discharged. Audit dispositions below concern **fitness for bounded theoretical closure**, not fitness for an operational security claim.

| ID | Issue | Status at C2 | Blocks |
|---|---|---|---|
| C2-01 | Opt-in M0 vs accepted v0.4 theoretical axioms | Resolved by scoping | Not research closure; requires explicit project adoption for applicability. |
| C2-02 | Operator profile weakening vs non-escalation | Resolved by authority separation | Operational weakening without independently established authorization. |
| C2-03 | Dependency discovery vs adoption | Resolved by T0-01 boundary | Claims of an established guarantee with missing prerequisites. |
| C2-04 | M1 duplicates several T0 requirements | Classified as umbrella | Formal independent-axiom count for M1. |
| C2-05 | T2 copy invariants vs PVI duplicates | Classified as cross-domain overlap | Claims that coding conventions prove authorization or data safety. |
| C2-06 | G0-03 vs T3-06 / G0-04 vs T3-08 | Defer equivalence | Modular coverage/equivalence claims. |
| C2-07 | Formal independence/minimality of eight axioms | Deferred, explicit limitation | Any claim of proven minimality. |
| C2-08 | Protected-effect domain, authority precedence and temporal ordering | Deferred, explicit limitation | Complete security proofs or operational specification. |
| C2-09 | T4–T7 modular axiom formalization | Deferred, crosswalk only | Claim of modular specification completion. |
| C2-10 | Recoverability/liveness and authorized recovery paths | Deferred, separate goal | Guaranteed recovery claim. |
| C2-11 | Verified implementation correspondence | Outside theoretical scope | Claims about deployed security. |

**Research close-out blockers:** None identified that prevents documenting the studied scope, provided claims remain bounded as above. **Certification/deployment blockers:** Open PO-01 through PO-11 and unestablished operational correspondence remain material.

**Ledger freeze:** The historical A0, M, T1–T3, and PO registers are retained rather than overwritten. Future research may update them only as a new, explicitly scoped cycle.