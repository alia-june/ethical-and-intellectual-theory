# Human-Readable Symbols, Variables, and Conceptual Pseudocode

**Scope:** The live Gate 0 v0.4 / Gate Zero Modular Catalog v0.2 documentation and the proposed Lunar Flower Gates 1–7.  
**Status:** Readable *theoretical examples only*. These are **not executable code**, implemented checks, or evidence of an operating controller.

This document replaces unexplained one-letter symbols and ambiguous placeholder status values with descriptive names. Existing numbered axiom and gate identifiers are stable references, **not variable names**. Their historical forms remain unchanged. See the [identifier glossary](IDENTIFIER_GLOSSARY.md) and [complete Tranche catalog](TRANCHES.md) for their full meanings. The archived Closure Stages C2 and C3 research is intentionally preserved verbatim.

## Naming contract

| Kind | Convention | Example |
| --- | --- | --- |
| Entity or data | Descriptive `snake_case` noun | `requested_operation`, `authorization_grant` |
| Truth-valued assertion | Named, qualified proposition | `required_authority_is_established` |
| Decision or evidence state | Descriptive `snake_case` with typed sentinel | `authorization_evidence_state = UNRESOLVED` |
| Operation or theoretical function | Verb-led `snake_case` | `evaluate_applicable_authority` |
| Time / event point | Name its causal role | `effect_commit_event`, `evaluation_event` |
| Collection | Plural or `_set`, with declared bounds | `applicable_mandatory_conditions` |
| Fixed identifiers | Retain published stable tokens | `G0-01`, `T2-08`, `LF-GATE-006`, `LF-GATE-007` |
| Enumerated outcome | Explicit descriptive value | `ADMITTED_FOR_REVIEW`, `DENIED`, `UNRESOLVED` |

Use the terms **established**, **verified**, **eligible**, **authorized**, and **committed** only for their distinct meanings. Use `is_...` and `has_...` for clear assertions, but do not silently coerce a three-state proposition to a Boolean.

**Declaration and sentinel discipline:** Introduce every variable with its type and an explicit non-authorizing initial state *before* any operational assignment. `UNRESOLVED` is not `FALSE`; `NOT_APPLICABLE` is not `SATISFIED`. When the selected language supports tagged/optional types, prefer them to a magic integer sentinel. Do not initialize an unvalidated datum to a legitimate default merely to suppress an uninitialized-variable warning.

## Historical symbol-to-name map

| Earlier shorthand or label | Human-readable replacement | Meaning |
| --- | --- | --- |
| `q` | `requested_operation` | The exact action and target under consideration |
| `t` | `authorization_decision_event` | The relevant event or commitment boundary |
| `g` | `authorization_grant` | An identified historical grant |
| `p` (proposition) | `condition_proposition` | A statement whose support is evaluated |
| `P_p` | `project_security_profile` | Selected project-specific protections |
| `S_p` | `project_scope` | Declared operations, targets, and effects |
| `A_p` | `selected_axiom_set` | Optional rules explicitly adopted |
| `D_p` | `required_dependency_set` | Prerequisites needed for claimed guarantees |
| `R_p` | `profile_restriction_set` | Selected restrictions and parameters |
| `V_p` | `profile_revision` | Version identity for the profile |
| `K_t(p)` | `evaluate_evidence_state(condition_proposition, authorization_decision_event)` | Scope- and time-bound evidence evaluation |
| `A(q,t)` | `required_authority_is_established` | Is the required scoped authorization evidenced? |
| `I(q,t)` | `authorization_identity_is_applicable` | Is the exact grant bound to this request? |
| `R(q,t)` | `mandatory_condition_set_is_complete` | Have all applicable requirements been enumerated? |
| `C(q,t)` | `all_applicable_mandatory_conditions_are_satisfied` | Are those enumerated requirements established? |
| `E(q,t)` | `requested_effects_are_within_authorized_scope` | Does composition preserve consequence boundaries? |
| `V(q,t)` | `authorization_and_evidence_remain_applicable` | Is relevant scope/temporal validity current? |
| `E(p)=(s⁺,s⁻)` | `evidence_support=(positive_support_exists,negative_support_exists)` | Proposed, **not promoted**, four-state evidence support pair |
| `C0`–`C4` | `consequence_classification` with enumerated levels | The Gate 5 class names remain stable |
| `Controls A–E` | `risk_classification`, `operator_challenge`, `independent_verification`, `operational_stability`, `production_admission_interface` | Gate 5's stable control labels are retained for cross-reference |

The table is a **notation mapping**, not a claim that all historical formulas have been formally proved or that all labels are software variables.

## State and operation declarations

The examples use `UNRESOLVED` as an explicit *tagged absence state* for any optional object/reference/input type; it is not a permitted value of an ordinary `Operation`, `Text`, or numeric datum. Likewise `EMPTY` is an explicit, typed empty bounded collection. A concrete programming language would need corresponding tagged union/option definitions rather than silently inserting an invalid value.

Conceptual verbs such as `ESTABLISH`, `EVALUATE`, `VERIFY`, `CREATE`, `TRANSFORM`, and `READ` are **named abstract procedures**, not implicit guarantees of success. Each produces evidence or remains `UNRESOLVED`. Any real implementation would need separately specified inputs, outputs, error cases, and trust boundaries; none is claimed here.

## Conceptual gate-zero eligibility

The following pseudocode is *illustrative* and uses a declared finite set of mandatory conditions. It deliberately returns **review eligibility**, not operational execution permission.

```text
TYPE EvidenceState = SUPPORTED | REFUTED | UNRESOLVED | CONFLICTED
TYPE EligibilityState = ELIGIBLE_FOR_REVIEW | DENIED | UNRESOLVED
TYPE ApplicabilityState = APPLICABLE | NOT_APPLICABLE | UNRESOLVED

DECLARE requested_operation : Operation = UNRESOLVED
DECLARE authorization_decision_event : DecisionEvent = UNRESOLVED
DECLARE applicable_authorization_grant : GrantReference = UNRESOLVED
DECLARE required_authority_state : EvidenceState = UNRESOLVED
DECLARE authorization_identity_state : EvidenceState = UNRESOLVED
DECLARE mandatory_condition_completeness_state : EvidenceState = UNRESOLVED
DECLARE applicable_mandatory_conditions : BoundedConditionCollection = EMPTY
DECLARE mandatory_condition_count : BoundedInteger = 0
DECLARE current_condition_index : BoundedInteger = 0
DECLARE all_required_conditions_satisfied : EvidenceState = UNRESOLVED
DECLARE authorized_effects_state : EvidenceState = UNRESOLVED
DECLARE current_validity_state : EvidenceState = UNRESOLVED
DECLARE eligibility_result : EligibilityState = UNRESOLVED

INPUT requested_operation, authorization_decision_event
ESTABLISH applicable_authorization_grant and its governing scope
EVALUATE required_authority_state, authorization_identity_state
ESTABLISH applicable_mandatory_conditions, mandatory_condition_count
VERIFY mandatory_condition_completeness_state

IF required_authority_state == REFUTED
   OR authorization_identity_state == REFUTED
   OR mandatory_condition_completeness_state == REFUTED:
    eligibility_result = DENIED
    RETURN eligibility_result
IF required_authority_state != SUPPORTED
   OR authorization_identity_state != SUPPORTED
   OR mandatory_condition_completeness_state != SUPPORTED:
    RETURN eligibility_result  // UNRESOLVED, no admission

all_required_conditions_satisfied = SUPPORTED
FOR current_condition_index FROM 0 TO mandatory_condition_count - 1:
    DECLARE current_mandatory_condition : Condition = UNRESOLVED
    DECLARE current_condition_evidence : EvidenceState = UNRESOLVED
    current_mandatory_condition = applicable_mandatory_conditions[current_condition_index]
    current_condition_evidence = evaluate_declared_condition(current_mandatory_condition)
    IF current_condition_evidence == REFUTED:
        eligibility_result = DENIED
        RETURN eligibility_result
    IF current_condition_evidence != SUPPORTED:
        all_required_conditions_satisfied = UNRESOLVED
        BREAK

EVALUATE authorized_effects_state
EVALUATE current_validity_state

IF authorized_effects_state == REFUTED OR current_validity_state == REFUTED:
    eligibility_result = DENIED
ELSE IF all_required_conditions_satisfied == SUPPORTED
    AND authorized_effects_state == SUPPORTED
    AND current_validity_state == SUPPORTED:
    eligibility_result = ELIGIBLE_FOR_REVIEW
RETURN eligibility_result
```

**Constraints:** The number and identity of mandatory conditions must be affirmatively established. The loop is bounded by that established count, not an untrusted sentinel or implicit infinite retry. Conflict or unknown cannot be treated as affirmative support. Declaring these types does not provide a verified runtime evaluator. Other independently binding conditions can still block effect admission.

## Opt-in project-profile reasoning

```text
TYPE ProfileStatus = NOT_SELECTED | SELECTED | INCOMPLETE | CONFLICTED | VALID_PROFILE | UNRESOLVED
TYPE ProfileAdoptionState = ADOPTED | NOT_ADOPTED | UNRESOLVED

DECLARE project_adoption_state : ProfileAdoptionState = UNRESOLVED
DECLARE project_security_profile : ProjectProfile = UNRESOLVED
DECLARE explicitly_selected_axioms : BoundedAxiomSet = EMPTY
DECLARE missing_dependency_set : BoundedDependencySet = EMPTY
DECLARE profile_consistency_state : EvidenceState = UNRESOLVED
DECLARE profile_status : ProfileStatus = NOT_SELECTED

EVALUATE project_adoption_state against an independently established project selection
IF project_adoption_state == NOT_ADOPTED:
    RETURN profile_status  // NOT_SELECTED, NOT a failing operational gate
IF project_adoption_state != ADOPTED:
    profile_status = UNRESOLVED
    RETURN profile_status

READ project_security_profile from the independently established project selection
ESTABLISH explicitly_selected_axioms from project_security_profile
FIND missing_dependency_set over the declared finite dependency graph

IF missing_dependency_set is not EMPTY:
    profile_status = INCOMPLETE
    RETURN profile_status

EVALUATE profile_consistency_state
IF profile_consistency_state == REFUTED:
    profile_status = CONFLICTED
ELSE IF profile_consistency_state == SUPPORTED:
    profile_status = VALID_PROFILE
    // This means only that the theoretical profile is structurally coherent.
RETURN profile_status
```

The procedure does **not** silently activate missing prerequisites or assume a complete dependency graph. Structural validity is not implementation verification, and profile revision does not clear any separately imposed lock.

## Gate Six — Prompt Restatement (illustration; sixth clearance in the seven-gate profile)

```text
TYPE RestatementState = NOT_ADOPTED | RESTATED | NEEDS_CLARIFICATION | UNRESOLVED
TYPE GateSixAdoptionState = ADOPTED | NOT_ADOPTED | UNRESOLVED

DECLARE gate_six_adoption_state : GateSixAdoptionState = UNRESOLVED
DECLARE original_operator_prompt : ImmutableText = UNRESOLVED
DECLARE established_request_context : ContextReference = UNRESOLVED
DECLARE proposed_prompt_restatement : Text = UNRESOLVED
DECLARE interpretation_match_state : EvidenceState = UNRESOLVED
DECLARE restatement_result : RestatementState = NOT_ADOPTED

EVALUATE gate_six_adoption_state using the independently established project profile
IF gate_six_adoption_state == NOT_ADOPTED:
    RETURN restatement_result  // NOT_ADOPTED
IF gate_six_adoption_state != ADOPTED:
    restatement_result = UNRESOLVED
    RETURN restatement_result

READ original_operator_prompt, established_request_context
proposed_prompt_restatement =
    restate_objective_constraints_and_unknowns(original_operator_prompt,
                                               established_request_context)
EVALUATE interpretation_match_state against the preserved original prompt

IF interpretation_match_state == SUPPORTED:
    restatement_result = RESTATED
ELSE:
    restatement_result = NEEDS_CLARIFICATION
RETURN restatement_result
```

A `RESTATED` outcome means the **machine's proposed interpretation** is available; it does not mean the Operator confirmed it. Material ambiguity requires clarification where consequential reliance would otherwise occur. Reiteration, challenge and authorization remain separate. In the new seven-gate profile this routine cannot itself clear Gate Six before **all Gates One–Five have cleared in order**. The final result is binary: **CLEARED** only if the restatement is materially faithful, or **NOT CLEARED**; Gate Seven is still required.

## Gate Seven — Alpha-Lock, the second production gate (illustrative)

This conceptual receipt check is **not** an implemented controller. Every declared gate result begins `NOT_CLEARED`; a valid `CLEARED` is independently established under an adopted seven-gate contract. Internal evidence may still be `UNRESOLVED`, `CONFLICTED`, or `REFUTED`, but none of those is a gate clearance.

```text
TYPE GateClearance = CLEARED | NOT_CLEARED

DECLARE gate_one_result : GateClearance = NOT_CLEARED
DECLARE gate_two_result : GateClearance = NOT_CLEARED
DECLARE gate_three_result : GateClearance = NOT_CLEARED
DECLARE gate_four_result : GateClearance = NOT_CLEARED
DECLARE gate_five_result : GateClearance = NOT_CLEARED
DECLARE gate_six_result : GateClearance = NOT_CLEARED
DECLARE alpha_lock_result : GateClearance = NOT_CLEARED

// Each preceding gate must clear in order, with matching, current receipts.
IF all_previous_six_gates_cleared_in_order_for_exact_effect
   AND independent_authorization_for_alpha_lock_is_valid:
    REQUEST independently controlled Alpha-Lock clearance
    // Only an authorized external controller may return CLEARED.
ELSE:
    alpha_lock_result = NOT_CLEARED

// Gate One clearance alone NEVER permits production.
PRODUCTION_MAY_BEGIN ONLY IF alpha_lock_result == CLEARED
```

The predicates above are abstract responsibilities, not a claim that an operational controller exists. A changed candidate or material condition invalidates the relevant chain and requires renewed clearance beginning at Gate One.

## Copy-through-reference and fallback example

This is a separate **programming-invariant** illustration, not an authority axiom or a guarantee of recovery from irreversible side effects.

```text
TYPE CopyWorkState = NOT_STARTED | FALLBACK_READY | COPY_READY | CANDIDATE_VALID |
                     BLOCKED | UNRESOLVED

DECLARE authoritative_source_reference : ImmutableSourceReference = UNRESOLVED
DECLARE safe_fallback_reference : FallbackReference = UNRESOLVED
DECLARE fallback_adequacy_state : EvidenceState = UNRESOLVED
DECLARE isolated_working_copy : MutableWorkingCopy = UNRESOLVED
DECLARE transformed_candidate : Candidate = UNRESOLVED
DECLARE copy_work_state : CopyWorkState = NOT_STARTED

ESTABLISH authoritative_source_reference and its permitted scope
ESTABLISH safe_fallback_reference without depending on copy success
EVALUATE fallback_adequacy_state against the declared failure and effect scope
IF safe_fallback_reference == UNRESOLVED
   OR fallback_adequacy_state != SUPPORTED:
    copy_work_state = BLOCKED
    RETURN copy_work_state

copy_work_state = FALLBACK_READY
CREATE isolated_working_copy through authoritative_source_reference
IF isolated_working_copy == UNRESOLVED:
    copy_work_state = BLOCKED
    RETURN copy_work_state

copy_work_state = COPY_READY
TRANSFORM isolated_working_copy -> transformed_candidate
IF transformed_candidate == UNRESOLVED:
    copy_work_state = BLOCKED
    RETURN copy_work_state

IF validate_transformed_candidate(transformed_candidate) == SUPPORTED:
    copy_work_state = CANDIDATE_VALID
RETURN copy_work_state
// Candidate validation does not commit, replace, publish or execute anything.
```

**Failure boundary:** A fallback must be established *before* attempting the copy. If the act of copying itself causes an irreversible unauthorized disclosure, the unchanged original is not a sufficient fallback. General fallback adequacy remains deferred as **Tranche 2, Item 06 — Pre-Copy Fallback (`T2-06`)**.

## Gate 5 — Human-readable review predicates

The existing contract's `GATE_5_READY_FOR_GATE_1_REVIEW` and `PRODUCTION_ADMISSIBLE` shorthand is rewritten in the [standing-gates contract](../../LUNAR_FLOWER_AI_SEED_EXPERT_SYSTEM_CONTRACT.md). Stable consequence classes `C0`–`C4` and formal gate IDs remain unchanged.

The review requires established classification, any mandated challenge, any mandated independent verification, stability, unchanged candidate/scope, required informed validation, satisfaction of all other mandatory gates, valid Operator authority, and an independently obtained Gate One clearance for the exact effect. **None of these permits action until Gate Six and Gate Seven — Alpha-Lock — independently clear in order.** Gate 5 being `NOT_ADOPTED` is **not** a passing result: a separate governing policy determines the applicable requirements.

## Refactor boundaries

- **Changed:** Human-readable active Gate 0 notation and illustrative pseudocode; links and programming conventions; Gate 5 theoretical review predicate.
- **Unchanged:** The research status and adoption authority; the 20 archival C2/C3 source records; canonical gate and axiom IDs; operational production locks.
- **Unknown:** Independence/minimality, universal consistency, complete effect coverage, actual runtime correspondence and independent assurance. These remain unknown regardless of naming quality.

[Gate 0 index](README.md) · [Foundational axioms](FOUNDATIONAL_AXIOMS.md) · [Programming invariants](PROGRAMMING_INVARIANTS.md) · [Historical records](records/C3/00_INDEX.md)
