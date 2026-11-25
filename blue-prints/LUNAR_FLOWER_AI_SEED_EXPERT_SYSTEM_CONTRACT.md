# Lunar Flower AI Seed — Expert-System Contract

**Authorial direction:** alia june  
**Record date:** 2026-11-10  
**Disposition:** Public theoretical seed / proposed architecture. **Not a runtime contract, implemented expert system, admitted controller, or performance attestation.**

**Integrated standalone reading edition:** [Expert Systems Operation](gates/EXPERT_SYSTEMS_OPERATION.md). It embeds Gate Zero, all six standing gates, research accounting, and historical limitations without internal cross-links. The present contract remains the original source specification of the standing-gate proposal.

## Seed statement

> Place the AI under an expert-system contract, as an expert-system orchestrator, with generative synthetic decision-making as a last resort. Build all tools and the governing structure from the ground up.

The AI's assigned role is **contract-bound orchestration**, not independent authority to create its own rules, select new privileges, or declare its own outputs valid. Expert-system rules and explicit contracts govern admissibility, composition, task routing, and the conditions under which a candidate decision can be evaluated.

This seed is an architectural proposal. It must not be represented as an already operating system, and the words *expert system* do not themselves establish determinism, correctness, or security.

## Architectural commitments

1. **Expert-system contract first.** Define roles, goals, admissible actions, rule precedence, constraints, evidence requirements, and failure behavior before invoking an AI component.
2. **Orchestration within the contract.** The AI may organize work and propose routing or assembly steps only within explicitly permitted interfaces. Contract adjudication and final authority are separate from the AI's suggestions.
3. **Build the structure from the ground up.** The system's foundational abstractions, compositions, interfaces, contracts, and lifecycle rules are deliberately specified and constructed, rather than assumed from an opaque inherited stack.
4. **Build the tools from the ground up.** Tools are developed as inspectable parts of that architecture, with narrow purpose, explicit I/O, error states, and evidence. Studying or transmigrating lessons from other projects does not turn imported code into a native, independently validated tool.
5. **Prefer rule-governed decisions.** Explicit evidence, deterministic transformations where applicable, declared heuristics, and expert-system inference are evaluated before synthetic generation.
6. **Generative synthetic decision-making is the last resort.** Only an explicitly permitted unresolved case may solicit a generated *candidate decision*. That proposal remains synthetic, traceable, challengeable, and subject to separate validation and authorization; it cannot silently be treated as a recovered fact, an accepted rule, or a final action.
7. **Refusal and uncertainty are valid.** When a constraint fails, evidence is absent, or authority is missing, the system can decline, defer, or preserve a named unresolved state. Lack of evidence does not authorize synthesis or execution.

## Standing expert-system gates — generic proposed contracts

The following seven standing gates are **implementation-independent design candidates**. They operate on declared contracts, evidence, and state rather than a named product, language, runtime, or organization. They are not enabled by this publication: adoption remains governed by each project's authorized contract, and implementation and verification are separate obligations. A document describing a gate is not itself an enforcing mechanism. **Within the expressly selected seven-gate profile, gate clearance is strictly ordered from Gate One through Gate Seven.** See the dated [ordered-clearance erratum](gates/ERRATA_2026-11-25_ORDERED_CLEARANCE_ALPHA_LOCK.md). See the [Gates README](gates/README.md) for the gate map, and the [Gate 0 research archive](gates/gate-0/README.md) for foundational axioms, complete C2/C3 source records, optional modular selections, deferrals, and unresolved claims.

### Gate 1 — Production Lock

**Intent:** Separate thinking, design, simulation, construction, and testing from an authorized effect on a production environment or public release.

- **Entry:** A candidate action, its declared effect and scope, the currently effective lock state, candidate identity/revision, evidence, and the asserted authorizing principal.
- **Default:** `LOCKED`; analysis and isolated staging may continue if otherwise permitted, but production mutation, deployment, publication, and external effects remain denied.
- **Unlock criterion:** Explicit, independently checked authorization for one bounded scope and candidate revision; prerequisite checks and the target environment must match the authorization.
- **Output:** `DENY_LOCKED`, `REVIEW_REQUIRED`, or `CLEAR_FOR_DECLARED_SCOPE`, accompanied by a reason and a receipt. In the seven-gate profile, only independently verified `CLEAR_FOR_DECLARED_SCOPE` maps to **Gate One = CLEARED**. **This is the first production gate, not authority to begin production.** Gate Seven remains locked until every gate clears in order.
- **Reset:** Re-lock on revision change, scope change, failed invariant, revoked authority, stale evidence, or expired clearance.
- **Control-plane exception:** Inspection, cancellation, revocation, and narrowly scoped lock-management operations must remain possible under lock, using a separate authenticated contract; the ordinary application path cannot clear its own lock.
- **Failure:** Unknown state, mismatched identity, missing evidence, or unreachable authorizer yields `DENY_LOCKED`; no autonomous override.

**Invariant:** The producer of a candidate cannot grant that candidate production authority merely by asserting success, passing its own tests, or generating a plausible rationale. **Gate One CLEARED does not permit action; Alpha-Lock is still NOT CLEARED.**

#### External error-and-lesson preproduction review (proposed resource)

Before **effect-scoped Production Lock clearance**, the receiving expert system should obtain a bounded, verified **external evidence receipt** for the exact candidate identity and revision, using the proposed [Error and Lesson Registry](https://github.com/dastardlyrat/m.A.R.S.-Persistent-Tool-less-Amorphous-Workspace/blob/main/resources/EXTERNAL_ERROR_LESSON_REGISTRY.md) and [machine-readable resource contract](https://github.com/dastardlyrat/m.A.R.S.-Persistent-Tool-less-Amorphous-Workspace/blob/main/resources/EXTERNAL_ERROR_LESSON_REGISTRY_CONTRACT.json). The planned registry may live on a microcontroller or developer-board host and provides **evidence for review**, not authority to execute or release.

A receipt must identify its source/generation, check prior relevant errors, reviewed lessons, claim support, canonical locks, contradictions, test requirements, evidence freshness and retrieval coverage. Missing entries do not prove safety. A failed lookup, stale generation, unresolved contradiction or unsupported high-impact claim **keeps production locked**; read-only investigation may continue under its own permission. Generated text retains a FABRICATION FLAG and cannot be promoted to an accepted lesson without review. Reiteration and hand-off must re-check that the same candidate revision remains in scope.

**Status:** resource and gate integration are proposed, not deployed or tested. No running device, physical isolation, permanent logging, automated admission, or anti-hallucination guarantee is implied.


### Gate 2 — Reiteration

**Intent:** Permit purposeful re-examination of a candidate without confusing repeated reasoning with progress, proof, or increased authority.

- **Entry:** A bounded task, immutable baseline reference, current candidate, evidence delta, explicit stopping condition, and iteration budget.
- **Preflight:** Re-check the task objective, applicable rules, provenance, previous objections, and which fact or condition has changed since the last pass.
- **Permitted returns:** `ITERATE_WITH_DELTA`, `ACCEPT_FOR_NEXT_GATE`, `STOP_NO_PROGRESS`, `STOP_BUDGET_EXHAUSTED`, or `ESCALATE_UNRESOLVED`.
- **Progress witness:** A new admitted fact, a documented correction, a passed previously failing test, or another explicitly defined measurable change. Rephrasing, circular confirmation, self-citation, and synthetic elaboration do not by themselves count as progress.
- **Loop bounds:** Enforce a maximum pass count and resource budget, with an immutable or versioned record of inputs, changes, and outcomes.
- **Authority:** Reiteration may revise a proposal but cannot amend the governing contract, waive a gate, reset its own budget, or turn an unresolved issue into evidence.
- **Failure:** No meaningful delta or a repeated failure signature stops the loop and records the unresolved state rather than silently retrying.

**Invariant:** Repetition never creates permission, evidence, or correctness by accumulation alone.

### Gate 3 — Hand-off

**Intent:** Transfer a bounded assignment between participants while preserving task continuity, identity, restrictions, provenance, and the ability to refuse.

- **Entry:** Identified sender and intended recipient, requested outcome, task scope, candidate/source revision, permitted data, permitted actions, dependencies, deadlines or stopping conditions if defined, and a return address or channel.
- **Admission:** Confirm the recipient exists, can receive the specified data, has the required bounded capability and authority, and accepts the task under the stated contract.
- **Handoff envelope:** Include versioned task identity, outcome and success criteria, relevant evidence references, known unknowns, forbidden actions, original constraints, required receipts, and an explicit `SENTINEL_UNRESOLVED` for unfilled necessary fields.
- **Acknowledgment:** Receipt and acceptance are distinct. An acknowledgment cannot be inferred from transmission; a recipient may reject, defer, or accept only an authorized portion.
- **Authority:** Delegate work, **not** intrinsic policy ownership. The sender cannot pass privileges it does not hold. Acceptance cannot silently expand scope or override production lock.
- **Return:** Require a result or a bounded blocked/refused report with evidence and a correlation identifier; returned results re-enter validation and relevant gates before admission.
- **Failure:** Missing recipient, contract mismatch, absent acknowledgment, stale revision, or integrity failure produces `HANDOFF_BLOCKED` or `HANDOFF_UNRESOLVED`, not presumed completion.

**Invariant:** A transferred instruction is not a transferred authorization, and task completion by one participant does not imply final adoption by another.

### Gate 4 — Informed Operator Validation

**Gate ID:** `LF-GATE-004`  
**Default state:** `VALIDATION_PENDING`  
**Authority:** Human Operator  
**Failure behavior:** Fail closed  
**Status:** Proposed architectural contract; not an implemented enforcement mechanism

#### Purpose

An AI agent must not mistake acknowledgment for understanding, understanding for consent, or consent for authorization.

Whenever an AI agent requests human validation, clarification, confirmation, or authorization, the response must provide sufficient contextual evidence that the Operator understands the decision being presented.

**Simple acknowledgment is not sufficient validation.**

This gate is mandatory whenever the governing contract requires explicit human validation. Dangerous or sensitive operations require heightened evidence of understanding, not a weaker alternative to validation.

#### Validation requirements

1. **Reject empty acknowledgment.** Responses such as "yes," "okay," "understood," "continue," or similar generic affirmations must not independently satisfy a validation requirement.

2. **Require contextual understanding.** The Operator's response must demonstrate an understanding of the specific question, proposed action, relevant scope, or requested clarification. Existing conversation context may contribute evidence, but cannot substitute for explicit authorization when authorization is required.

3. **Distinguish clarification from authorization.** An answer that resolves uncertainty does not automatically authorize execution. The agent must not infer consent or authority merely because the Operator has supplied information.

4. **Apply heightened scrutiny to sensitive operations.** Where an action involves security, privacy, safety, destructive modification, irreversible consequences, external effects, or production changes, the agent must communicate the material implications and obtain explicit, action-specific authorization demonstrating awareness of those implications.

5. **Reject insufficient validation.** If the response is ambiguous, unrelated, contradictory, or does not adequately address the material decision, the agent must reject it as validation and request targeted clarification.

6. **Preserve the production lock.** Insufficient validation must never clear a production gate, authorize a dangerous operation, or be treated as permission to proceed.

7. **Prohibit inferred clearance.** Repeated acknowledgments, apparent confidence, urgency, prior cooperation, or the agent's own assessment cannot independently establish authorization.

#### Critical invariant

**Acknowledgment ≠ Understanding ≠ Consent ≠ Authorization**

Each is a distinct condition. Where the governing contract requires them, each must be established independently.

#### Fail-closed behavior

If understanding or authorization cannot be adequately established:

- Reject the response as sufficient validation.
- Preserve the current production lock.
- Identify the specific unresolved question or consequence.
- Request appropriate clarification without coercion.
- Permit only actions independently authorized under the existing contract.

A change in action, target, scope, material risk, or candidate revision invalidates any authorization that no longer applies.

#### Operator sovereignty

The Operator retains final decision authority within the governing security contract.

The agent evaluates observable evidence in the response, not the Operator's intelligence, competence, or mental state. It must not impose arbitrary comprehension tests, manufacture uncertainty to obstruct authorized work, or use this gate to assume authority over the Operator.

#### Production invariant

`VALIDATION_ACCEPTED` does not itself mean `PRODUCTION_AUTHORIZED`.

Production remains locked until every applicable authorization, technical validation, and security condition has independently passed.

**A plausible acknowledgment must never be promoted into authorization merely because the agent wishes to proceed.**

### Gate 5 — Consequence-Scaled Challenge–Response

**Gate ID:** `LF-GATE-005`  
**Classification:** Optional high-risk production safeguard  
**Default adoption state:** `DORMANT`  
**Trigger after adoption:** Declared risk thresholds, especially destructive, irreversible, critical, or operationally erratic actions  
**Failure behavior:** Fail closed for any required dependent transition  
**Status:** Proposed architecture; not implemented, activated, or independently verified

#### Governing purpose and adoption boundary

The greater an action's consequence, destructiveness, irreversibility, or observable operational instability, the stronger the assurance required before the action can be admitted. Relevant consequences include effects on people, rights, assets, security, privacy, data, external systems, and cascading dependencies.

Gate 5 is **optional for adoption by a governing contract**. When adopted, it is **not discretionary per operation**: the contract must declare its activation criteria and high-risk thresholds; the AI agent cannot silently bypass an applicable requirement by relabeling an operation low risk. A gate that is dormant has no claimed runtime effect. Every affected operation still remains subject to the other standing gates.

Gate 5 decomposes into independent controls with distinct inputs, outputs, evidence, and authority boundaries. One control's success does not imply that another control passed; separate logical modules do not themselves constitute independently trusted verification.

#### Control A — Risk Classification

**Function:** Determine risk for the exact proposed action, target, revision, environment, and effect scope using declared criteria and evidence.

**Inputs:** Consequence magnitude and affected parties/resources; reversibility and recovery; destructiveness; uncertainty; dependencies and possible cascading effects; observed operational instability.

**Output:** `RISK_CLASS` and a bounded, reviewable classification receipt.

| Class | Proposed meaning | Challenge burden |
| --- | --- | --- |
| `C0` | Ordinary, low-consequence, reversible | No Gate 5 challenge |
| `C1` | Material consequence | Identify action, target, and intended result |
| `C2` | High consequence | Demonstrate material-risk, scope, and recovery understanding |
| `C3` | Destructive or potentially irreversible | Rigorous, action-specific understanding plus independent checks |
| `C4` | Critical consequence or material uncertainty | Rigorous challenge and additional independent safeguards; unstable execution remains blocked until stabilized |

A higher level inherits applicable lower-level requirements. Risk may be escalated when new evidence requires it; **reducing** a classification requires a separate authorized review supported by evidence. Unknown or ambiguous risk cannot be asserted as `C0`.

**Invariant:** The classifier cannot evaluate its own challenge, declare independent verification, waive a safety requirement, or authorize execution.

#### Control B — Challenge–Response

**Function:** Evaluate whether the Operator supplies the action-specific understanding and authorization evidence required by Control A and the applicable contract.

**Inputs:** The risk classification and receipt, exact candidate/revision, material consequences, named required comprehension points, and declared challenge criteria.

**Outputs:** `PASSED`, `INSUFFICIENT`, `REJECTED`, or `UNRESOLVED`, with recorded reasons.

Responses must identify the action and material implications at the applicable risk level. Generic acknowledgments, repetition, irrelevant explanations, copied formulas lacking contextual meaning, and conversational momentum are insufficient. For destructive or irreversible actions, the response must address actual targets and scope, effects that cannot be recovered, and any material limits of rollback or mitigation.

Challenge **difficulty increases by required evidential substance and independently controlled safeguards**, not arbitrary verbal complexity, intimidation, or endless questioning. The evaluator tests observable response content, not intelligence, diagnosis, or psychological state. It must not manufacture uncertainties or demand unrelated information to obstruct lawful operator decisions.

**Invariant:** A passed challenge is not independent verification, does not alter the risk class, and cannot itself clear Production Lock.

#### Control C — Independent Verification

**Function:** Test material factual and operational prerequisites without relying exclusively on the proposing AI's assertions.

**Inputs:** Exact candidate and target identity; classification and response receipts; versioned evidence; technical prerequisites; recovery and impact claims; independent authorizations when applicable.

**Outputs:** `VERIFIED`, `FAILED`, `INCOMPLETE`, or `UNAVAILABLE` with evidence references and limitations.

Verification can cover integrity of candidate and target, destructive effects, backup/restore viability, permissions, blast radius, tool/runtime safety, and external authorizer status. **At C3 and C4 this control is mandatory** under an adopted Gate 5 contract; lower levels may require checks where independent contractual rules demand them. Merely restating an AI-generated explanation, duplicating a function within the same trust boundary, or posing a harder question is not independent verification.

**Invariant:** Independent verification does not authorize the action or override failed validation, unstable execution, or a production lock. Unavailable mandatory verification blocks admission.

#### Control D — Operational Stability

**Function:** Monitor observable execution conditions and whether the action remains identifiable, bounded, and controlled.

**Inputs:** Target/scope consistency, command and instruction coherence, actual effects versus declared effects, state changes, broken invariants, unexpected outputs, and control-plane signals.

**Outputs:** `STABLE`, `UNSTABLE`, or `UNRESOLVED`.

The control may run throughout planning and execution. Contradictory or rapidly shifting instructions, unstable targets, unexpected modifications, uncontrolled effects, and inconsistent execution state are grounds for containment or suspension when they compromise reliable execution. “Erratic” describes **observable operation behavior**, not a claim about the Operator's mental state.

**Invariant:** An unstable operation cannot become stable through acknowledgment, additional challenge responses, or a model's reassurances. The affected operation stays blocked until the required stability conditions are separately established.

#### Control E — Production Admission Interface

**Function:** Provide the bounded outcome of Controls A–D as the **Gate Five clearance receipt** for the later **Gate Seven — Alpha-Lock** decision. Control E checks the already established exact-effect Gate One clearance and the applicable current state; it neither reorders gate receipts nor authorizes production by itself.

**Inputs:** Applicable control receipts, exact candidate and effect scope, Gate 4 result when required, other mandatory gate outcomes, and the current Gate 1 authorization state.

**Outputs:** `GATE_FIVE_CLEARED_FOR_NEXT_GATE` or `BLOCKED`. This outcome is **never** synonymous with `PRODUCTION_AUTHORIZED`; it permits only the next ordered step, **Gate Six**.

Conceptual review predicate, evaluated by the authorized receiving control—not asserted by the producing agent. Every variable is explicitly introduced as an unresolved assessment before being assigned its evidenced state:

```text
TYPE RequirementEvidence = SUPPORTED | REFUTED | UNRESOLVED | CONFLICTED
TYPE GateFiveAdoption = ADOPTED | NOT_ADOPTED | UNRESOLVED

DECLARE gate_five_adoption_state : GateFiveAdoption = UNRESOLVED
DECLARE risk_classification_is_supported : RequirementEvidence = UNRESOLVED
DECLARE required_operator_challenge_is_satisfied : RequirementEvidence = UNRESOLVED
DECLARE required_independent_verification_is_satisfied : RequirementEvidence = UNRESOLVED
DECLARE operation_stability_is_supported : RequirementEvidence = UNRESOLVED
DECLARE candidate_identity_and_scope_are_unchanged : RequirementEvidence = UNRESOLVED
DECLARE required_operator_validation_is_satisfied : RequirementEvidence = UNRESOLVED
DECLARE all_other_mandatory_gates_are_satisfied : RequirementEvidence = UNRESOLVED
DECLARE valid_operator_authority_is_established : RequirementEvidence = UNRESOLVED
DECLARE gate_one_clearance_for_exact_effect_is_established : RequirementEvidence = UNRESOLVED
DECLARE gate_five_is_ready_for_gate_one_review : RequirementEvidence = UNRESOLVED
DECLARE gate_five_requirements_are_satisfied_under_the_adopted_policy : RequirementEvidence = UNRESOLVED
DECLARE all_production_effect_prerequisites_are_established : RequirementEvidence = UNRESOLVED

IF gate_five_adoption_state == ADOPTED:
    gate_five_is_ready_for_gate_one_review = SUPPORTED ONLY IF
        risk_classification_is_supported == SUPPORTED
        AND required_operator_challenge_is_satisfied == SUPPORTED
        AND required_independent_verification_is_satisfied == SUPPORTED
        AND operation_stability_is_supported == SUPPORTED
        AND candidate_identity_and_scope_are_unchanged == SUPPORTED
    gate_five_requirements_are_satisfied_under_the_adopted_policy =
        gate_five_is_ready_for_gate_one_review
ELSE IF gate_five_adoption_state == NOT_ADOPTED:
    // A separately established non-adoption policy determines whether
    // the operation is eligible without a Gate 5 challenge.
    EVALUATE gate_five_requirements_are_satisfied_under_the_adopted_policy
        using the independently authorized project contract
ELSE:
    // Unresolved adoption cannot be interpreted as a pass or non-adoption.
    gate_five_requirements_are_satisfied_under_the_adopted_policy = UNRESOLVED

// Applicable "if required" predicates mean SUPPORTED when the requirement
// is not triggered by a validly established governing policy. They never
// imply that an unmet required check has been waived.
all_production_effect_prerequisites_are_established = SUPPORTED ONLY IF
    gate_five_requirements_are_satisfied_under_the_adopted_policy
    AND required_operator_validation_is_satisfied == SUPPORTED
    AND all_other_mandatory_gates_are_satisfied == SUPPORTED
    AND valid_operator_authority_is_established == SUPPORTED
    AND gate_one_clearance_for_exact_effect_is_established == SUPPORTED
```

The named proposition `gate_five_requirements_are_satisfied_under_the_adopted_policy` must itself have an established applicable policy and evidence; it is **not** an alias that converts `NOT_ADOPTED` into `SUPPORTED`. This is explanatory pseudocode, not an executable authorization algorithm. The [human-readable naming guide](gates/gate-0/NAMING_AND_PSEUDOCODE.md) also defines the short historical predicates.

A dormant Gate 5 does not falsely satisfy `gate_five_is_ready_for_gate_one_review`: its result is `NOT_ADOPTED`, and a separate policy must determine whether any other already-mandatory protections permit the action. No gate may create authority from an absent requirement.

#### Control independence, escalation, and failure

- Each control has a separate responsibility and versioned receipt, bound to the candidate/revision, target, and operation scope. No control may silently rewrite another's evidence or erase a prior failed condition.
- New risk evidence may increase required scrutiny at any point. Higher risk invalidates lower-level assurances that do not meet the new requirements.
- If risk, target, scope, relevant effects, candidate revision, or operational state materially changes, dependent validation and authorization must be rechecked.
- A mandatory unavailable, failed, or unresolved control **blocks the dependent production effect**. Independently permitted inspection, cancellation, revocation, and safe containment may continue.
- Repeating requests or challenges does not accumulate authority. Any re-evaluation requires materially relevant new evidence, consistent with Gate 2.
- Gate 3 cannot delegate around an unresolved challenge. Gate 4's informed-validation result cannot substitute for independent verification. Gate 1 remains effect-scoped and locked by default.
- Enforceable independence requires actual trust-boundary and authority separation where claimed. A list of software components or an AI self-attestation is insufficient.

**Critical invariants:** Classification is not validation; validation is not verification; verification is not authorization; authorization is not stability; stability is not safety or permission; an absent or failed mandatory condition cannot be inferred to pass. No single AI-controlled component may classify risk, pass its own challenge, certify external verification, and clear the production lock.

**Publication boundary:** This is a proposed contract, not evidence that challenge engines, external checks, risk scoring, gate interlocks, or production enforcement have been built or tested.

### Gate 6 — Prompt Restatement

**Gate ID:** `LF-GATE-006`  
**Classification:** Prompt interpretation and final agreement safeguard  
**Adoption state:** Required as Gate Six in the selected seven-gate sequence; otherwise opt-in under any separately authorized legacy profile  
**Clearance position:** **Sixth**, after Gate Five, immediately before Gate Seven Alpha-Lock. An early informal paraphrase is not Gate Six clearance.  
**Status:** Proposed architecture; not implemented, adopted, or independently verified

**Intent:** The machine restates the Operator's prompt in its own words **as it understands the request**. The restatement is a bounded interpretation claim, not a replacement instruction, a new requirement, or an authorization.

- **Entry:** The original prompt and already established context, constraints, exclusions, targets, and authorized scope.
- **Action:** After Gates One–Five clear in order, restate the original Operator request, declared constraints, exact candidate identity/revision, target, intended effects, and scope as understood; compare the restatement with the original prompt and established authorization. Identify rather than invent missing intent.
- **Internal outcomes:** `RESTATED`, `NEEDS_CLARIFICATION`, or `NOT_ADOPTED`. Preserve the original prompt separately. **Final Gate Six result:** `CLEARED` only for a faithful, materially consistent restatement with valid prior gate receipts; otherwise `NOT CLEARED`. A restatement is not Operator agreement or independent authorization.
- **Material mismatch:** Do not rely on an unsupported interpretation of a changed target, permission, prohibited action, or consequential effect. Request targeted clarification where needed.
- **Bound:** Do not force repeated confirmations for unchanged, unambiguous routine requests. Explicit Operator confirmation is a *separate* requirement only where the adopted contract or another applicable gate requires it.
- **Authority:** A restatement does not establish Operator agreement, independent verification, informed consent, authority to delegate, or production clearance.

**Invariant:** `RESTATED != CONFIRMED != AUTHORIZED`. Gate Six concerns **prompt interpretation**, Gate Two concerns **candidate reiteration**, and Gate Four concerns **informed Operator validation**. Gate Six cannot bypass Gates One–Five. A material mismatch blocks clearance, invalidates affected earlier receipts, and prevents Alpha-Lock from clearing.

For the full background, examples, relationship to Gate Zero Foundational Theory v0.4 and Gate Zero Modular Catalog v0.2, and opt-in boundaries, see [Gate Framework README](gates/README.md).

### Gate 7 — Alpha-Lock (Second Production Gate)

**Gate ID:** `LF-GATE-007`  
**Position:** **Seventh and final**, after Gate Six; the second independent production barrier after Gate One  
**Default state:** `LOCKED` / final outcome `NOT CLEARED`  
**Status:** Proposed architecture; not implemented, adopted, or tested

**Purpose:** Prevent production from beginning merely because Gate One approved its exact effect. Alpha-Lock is the **last gate**. Only this final, independently authorized release, after a valid ordered chain, permits the bounded production operation to begin.

- **Entry:** The unchanged candidate identity/revision, original Operator prompt and final restatement, exact target/effects, current binding project contract, present external authorization, and sequential receipts proving Gates One, Two, Three, Four, Five, and Six each returned `CLEARED`.
- **Sequence check:** Gate `n` clears only after Gate `n-1` has cleared, and Alpha-Lock validates **all six** prior gate receipts in their required order. No post hoc reordering, fabricated receipt, or implied pass is sufficient.
- **Clearance condition:** Verify exact identity/revision/target/effects, current contract and authorizer scope, provenance, required evidence, non-expiry/non-revocation, and that every preceding gate is still valid. An appropriately authorized **external control**—not the producing AI—must clear Alpha-Lock.
- **Final output:** `CLEARED` (bounded production may begin for the exact admitted effect) or `NOT CLEARED` (production blocked). Internal reasons may be `FAILED`, `UNRESOLVED`, `CONFLICTED`, `STALE`, `NOT_ADOPTED`, or `UNAVAILABLE`; none substitutes for a `CLEARED` receipt.
- **Invalidation:** Any material change to the prompt interpretation, candidate, revision, target, effects, risk, conditions, authorizer, or policy invalidates dependent receipts. The candidate must re-enter the sequence at Gate One when its identity, effects or scope change. Alpha-Lock re-locks.
- **Bound:** A Gate Seven clearance applies only to the stated effect and validity window; it does not delegate further rights or waive independently binding constraints.

**Invariant:** `GateOneCleared != ProductionMayBegin`. Only `GateOneCleared AND GateTwoCleared AND GateThreeCleared AND GateFourCleared AND GateFiveCleared AND GateSixCleared AND OrderedValidReceipts AND IndependentlyClearedAlphaLock` can establish production eligibility under this adopted profile. **No AI may clear Alpha-Lock using its own assertions.**

### Ordered seven-gate clearance — errata-consolidated rule

Every gate in the adopted seven-gate profile has a **binary final outcome**: `CLEARED` or `NOT CLEARED`. A gate may internally record richer evidence states, but `UNRESOLVED`, `CONFLICTED`, `NOT_ADOPTED`, or an unproven `NOT_APPLICABLE` never maps silently to `CLEARED`. If an optional action inside Gate Two (additional iteration), Gate Three (hand-off), Gate Four (extra confirmation), or Gate Five (high-risk challenge) is **not required**, that gate must still produce a positive, independently justified `CLEARED` receipt under the adopted policy. The gate itself is **not skipped**.

```text
TYPE FinalGateResult = CLEARED | NOT_CLEARED

DECLARE gate_one_cleared   : FinalGateResult = NOT_CLEARED
DECLARE gate_two_cleared   : FinalGateResult = NOT_CLEARED
DECLARE gate_three_cleared : FinalGateResult = NOT_CLEARED
DECLARE gate_four_cleared  : FinalGateResult = NOT_CLEARED
DECLARE gate_five_cleared  : FinalGateResult = NOT_CLEARED
DECLARE gate_six_cleared   : FinalGateResult = NOT_CLEARED
DECLARE alpha_lock_cleared : FinalGateResult = NOT_CLEARED

// This describes logical requirements; these declarations are not a controller.
GATE_ONE:   independently verify exact-effect authority -> gate_one_cleared
GATE_TWO:   require gate_one_cleared == CLEARED -> gate_two_cleared
GATE_THREE: require gate_two_cleared == CLEARED -> gate_three_cleared
GATE_FOUR:  require gate_three_cleared == CLEARED -> gate_four_cleared
GATE_FIVE:  require gate_four_cleared == CLEARED -> gate_five_cleared
GATE_SIX:   require gate_five_cleared == CLEARED -> gate_six_cleared

IF any preceding result != CLEARED OR ordered receipts invalid:
    alpha_lock_cleared = NOT_CLEARED
ELSE:
    // Only a separate authenticated, independently authorized control can act.
    alpha_lock_cleared = external_alpha_lock_clearance_for_exact_effect()

PRODUCTION_MAY_BEGIN only when alpha_lock_cleared == CLEARED
```

The sequence is a **proposed theoretical profile**, not code that has been deployed. The prior Gate Zero research and historic modular opt-in decisions remain unchanged. Adoption of this new seven-gate profile requires project-specific authorization.

### Gate composition and precedence

**Errata:** The gate sequence is strictly `Gate One → Gate Two → Gate Three → Gate Four → Gate Five → Gate Six → Gate Seven (Alpha-Lock)`. Gate One clearance alone cannot start production. Gate Six is the **sixth** final clearance check, not an early gate pass. If early paraphrasing is used for convenience, the sixth-gate restatement and its receipt still occur after Gate Five.

```text
PREPARE EXACT CANDIDATE UNDER INDEPENDENTLY ALLOWED READ / STAGING SCOPE
    -> GATE 1: PRODUCTION LOCK / EXACT-EFFECT AUTHORIZATION       -> CLEARED?
    -> GATE 2: BOUNDED REITERATION OR DOCUMENTED NO-ITERATION     -> CLEARED?
    -> GATE 3: BOUNDED HAND-OFF OR DOCUMENTED NO-HANDOFF          -> CLEARED?
    -> GATE 4: INFORMED VALIDATION UNDER DECLARED CONTRACT       -> CLEARED?
    -> GATE 5: RISK CLASSIFICATION & REQUIRED INDEPENDENT CHECKS -> CLEARED?
    -> GATE 6: RESTATE ORIGINAL PROMPT / VERIFY EXACT CONSISTENCY-> CLEARED?
    -> GATE 7: ALPHA-LOCK / VERIFY ALL ORDERED RECEIPTS & AUTHORITY
        -> CLEARED: exact bounded production may begin
        -> NOT CLEARED: block production
```

Every transition verifies the preceding gate's receipt, the same candidate revision and scope, and required evidence. A non-cleared outcome halts the transition. Any material candidate change returns the proposed effect to Gate One and keeps Alpha-Lock locked. Operational Stability may be assessed continuously without changing receipt order. Gate Zero remains theory; no published document is itself a running enforcement mechanism.

### Initial validation cases (proposed, not executed)

| Test | Expected gate outcome |
| --- | --- |
| Production effect requested while locked | Deny effect; preserve inspection/staging boundary |
| Authorized clearance, then candidate revision changes | Re-lock and require fresh review |
| Same candidate repeated without new evidence | Stop reiteration as no progress |
| Iteration count or resource allowance exhausted | Stop with unresolved receipt |
| Recipient missing, refuses, or lacks scope | Block hand-off without privilege escalation |
| Hand-off acknowledged but not accepted | Do not infer task execution or completion |
| Returned result asks for a production effect | Re-check production lock and separate authorization |
| Generated explanation asserts that any gate passed | Treat assertion as data, not gate evidence |
| Adopted Gate 6: faithful prompt restatement | Record interpretation beside the original; no authorization implied |
| Adopted Gate 6: restatement changes target or omits a prohibition | Mark interpretation unresolved; preserve prompt and clarify material mismatch |
| Gate Six is not adopted within a selected seven-gate profile | Gate Six NOT CLEARED; Alpha-Lock NOT CLEARED; do not silently skip |
| Operator responds with a bare "yes" or "okay" when validation is required | Reject as insufficient validation; request contextual clarification |
| Operator clarifies the action but does not authorize it | Accept clarification only; keep authorization unresolved |
| Sensitive operation requires permission but material consequences were not understood | Do not authorize; communicate consequences and request action-specific validation |
| Validated action, target, risk, or candidate revision changes | Re-evaluate understanding and authorization; keep production locked until reauthorized |
| Adopted Gate 5: low-risk action with no trigger | Record `CHALLENGE_NOT_REQUIRED` under declared policy; preserve every other gate |
| Adopted Gate 5: destructive operation assigned C0 without evidence | Reject unsupported low classification and escalate/review |
| Operator repeats assent without describing irreversible effect | Fail required challenge; retain lock |
| C3/C4 challenge passes but independent verifier is unavailable | Block production; a verbal response cannot replace verification |
| Operation becomes erratic after challenge passes | Suspend affected action until independently stable; reassess scope and risk |
| AI attempts to use Gate Five or Gate One success as permission to execute | Reject; Gate Seven Alpha-Lock must independently clear after Gates One–Six clear in order |
| Proposal remains only a document, with Gate Five unimplemented | Record as theoretical; claim no running enforcement |
| Gate One CLEARED; Gate Two not cleared | Alpha-Lock NOT CLEARED; no production |
| Gate Six restatement conflicts with original prompt or candidate | Gate Six NOT CLEARED; Alpha-Lock NOT CLEARED; re-evaluate affected earlier receipts |
| All first six receipts CLEARED but received out of order | Gate Seven NOT CLEARED; no production |
| All first six receipts CLEARED in order, then candidate revision changes | Invalidate affected chain, restart Gate One; Alpha-Lock remains locked |
| Gates One–Six CLEARED in order but independent Alpha-Lock control unavailable | Gate Seven NOT CLEARED; no production |
| Gates One–Six CLEARED in order for unchanged effect, valid authority, independently cleared Alpha-Lock | Gate Seven CLEARED for exact bounded effect; production may begin, subject to other binding controls |

**Status:** These are **standing proposed gates for the generic expert-system seed**, not proof that lock enforcement, iterative control, inter-agent communication, or delegated authorization exists. No gate may silently adopt a synthetic decision as fact or policy.

## Proposed decision order — corrected seven-gate profile

Candidate preparation uses contract-bound rules, deterministic methods, expert-system inference and approved tools. **LLM orchestration remains a last resort** and supplies only a candidate; it never counts as a gate pass.

```text
REQUEST -> CONTRACT / EVIDENCE -> RULES / DETERMINISTIC TOOLS
    -> CANDIDATE
    -> if permitted and unresolved: LABELLED LLM-GENERATED CANDIDATE

CANDIDATE
    -> GATE 1 CLEARED  [first production authorization; do not act]
    -> GATE 2 CLEARED  [bounded reiteration assessment]
    -> GATE 3 CLEARED  [handoff assessment]
    -> GATE 4 CLEARED  [informed validation assessment]
    -> GATE 5 CLEARED  [consequence and independent review]
    -> GATE 6 CLEARED  [final faithful prompt restatement]
    -> GATE 7 CLEARED  [independently controlled ALPHA-LOCK]
    -> PRODUCTION MAY BEGIN FOR THE EXACT AUTHORIZED EFFECT

ANY NOT CLEARED -> ALPHA-LOCK REMAINS LOCKED -> NO PRODUCTION
```

This is a theoretical order, not executable code. It does not authorize a project to select the new seven-gate profile or let the producing model alter locked control planes. See [the dated erratum](gates/ERRATA_2026-11-25_ORDERED_CLEARANCE_ALPHA_LOCK.md) for the earlier error and correction.

## Relation to current publication work

- **Stage 0 — Site hydration:** publish eligible theory and qualified proofs of concept with provenance and limitations.
- **Stage 1 — Stable programmatic rehydration:** planned recovery and reconstruction of code from admissible evidence with expert systems and programmatic methods first. Synthetic generative material remains a separately labeled last resort.
- This seed is **not** a claim that Stage 1 has been built or that the underlying tools have already been recreated.

See the [EOL and site-hydration roadmap](../research-ethics/EOL_SITE_HYDRATION_AND_REHYDRATION_ROADMAP.md), [Heuristic-Grown Seed System](../research-ethics/WHEN_NOT_TO_USE_AI_HEURISTIC_GROWN_SEED_SYSTEM.md), and [Blueprints index](README.md).

## Boundaries

This document contains a general research proposal only. It does not publish private preservation data, credentials, undisclosed source material, or protected recovery details. Publication of a seed does not itself activate a contract, authorize execution, or establish independent verification.
