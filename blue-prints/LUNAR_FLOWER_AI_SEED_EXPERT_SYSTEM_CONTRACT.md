# Lunar Flower AI Seed — Expert-System Contract

**Authorial direction:** alia june  
**Record date:** 2026-11-10  
**Disposition:** Public theoretical seed / proposed architecture. **Not a runtime contract, implemented expert system, admitted controller, or performance attestation.**

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

The following five standing gates are **implementation-independent design candidates**. They operate on declared contracts, evidence, and state rather than a named product, language, runtime, or organization. All start **unadmitted** until an actual implementation and its tests are accepted. A document describing a gate is not itself an enforcing mechanism.

### Gate 1 — Production Lock

**Intent:** Separate thinking, design, simulation, construction, and testing from an authorized effect on a production environment or public release.

- **Entry:** A candidate action, its declared effect and scope, the currently effective lock state, candidate identity/revision, evidence, and the asserted authorizing principal.
- **Default:** `LOCKED`; analysis and isolated staging may continue if otherwise permitted, but production mutation, deployment, publication, and external effects remain denied.
- **Unlock criterion:** Explicit, independently checked authorization for one bounded scope and candidate revision; prerequisite checks and the target environment must match the authorization.
- **Output:** `DENY_LOCKED`, `REVIEW_REQUIRED`, or `CLEAR_FOR_DECLARED_SCOPE`, accompanied by a reason and a receipt. Clearance from this gate is **not** a substitute for downstream validation or other necessary permissions.
- **Reset:** Re-lock on revision change, scope change, failed invariant, revoked authority, stale evidence, or expired clearance.
- **Control-plane exception:** Inspection, cancellation, revocation, and narrowly scoped lock-management operations must remain possible under lock, using a separate authenticated contract; the ordinary application path cannot clear its own lock.
- **Failure:** Unknown state, mismatched identity, missing evidence, or unreachable authorizer yields `DENY_LOCKED`; no autonomous override.

**Invariant:** The producer of a candidate cannot grant that candidate production authority merely by asserting success, passing its own tests, or generating a plausible rationale.

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

**Function:** Provide the bounded outcome of Controls A–D to **Gate 1 — Production Lock**, which retains the actual effect-admission authority. Control E is an interface and an independent consistency check, **not an additional independent right to clear production**.

**Inputs:** Applicable control receipts, exact candidate and effect scope, Gate 4 result when required, other mandatory gate outcomes, and the current Gate 1 authorization state.

**Outputs:** `ADMISSIBLE_FOR_GATE_1_REVIEW` or `BLOCKED`. This outcome is **never** synonymous with `PRODUCTION_AUTHORIZED`.

Proposed admission predicate, evaluated by the authorized receiving control rather than asserted by the producing agent:

```text
GATE_5_READY_FOR_GATE_1_REVIEW :=
    RISK_CLASS_VALID
    AND CHALLENGE_PASSED_IF_REQUIRED
    AND INDEPENDENT_VERIFICATION_PASSED_IF_REQUIRED
    AND OPERATION_STABLE
    AND CANDIDATE_IDENTITY_AND_SCOPE_UNCHANGED

PRODUCTION_ADMISSIBLE :=
    GATE_5_READY_FOR_GATE_1_REVIEW
    AND GATE_4_SATISFIED_IF_REQUIRED
    AND ALL_OTHER_MANDATORY_GATES_PASSED
    AND VALID_OPERATOR_AUTHORITY
    AND GATE_1_EFFECT_CLEARANCE_FOR_EXACT_CANDIDATE
```

A dormant Gate 5 does not falsely satisfy `GATE_5_READY_FOR_GATE_1_REVIEW`: its result is `NOT_ADOPTED`, and a separate policy must determine whether any other already-mandatory protections permit the action. No gate may create authority from an absent requirement.

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

### Gate composition and precedence

A proposed generic ordering is:

```text
REQUEST
  -> CONTRACT + AUTHORITY VALIDATION
  -> PRODUCTION LOCK CHECK [DEFAULT LOCKED]
  -> RULE / EVIDENCE / EXPERT-SYSTEM EVALUATION
  -> REITERATION GATE [BOUNDED; PROGRESS REQUIRED]
  -> OPTIONAL HAND-OFF GATE [RECEIPT + ACCEPTANCE REQUIRED]
  -> RETURNED WORK / CANDIDATE
  -> REVALIDATE CONTRACT + LOCK + EVIDENCE
  -> INFORMED OPERATOR VALIDATION [WHEN EXPLICIT HUMAN VALIDATION IS REQUIRED]
  -> GATE 5 [IF ADOPTED AND RISK-TRIGGERED]
       A: RISK CLASSIFICATION
       D: OPERATIONAL STABILITY [MONITORED THROUGHOUT]
       B: CONSEQUENCE-SCALED CHALLENGE [WHEN REQUIRED]
       C: INDEPENDENT VERIFICATION [WHEN REQUIRED]
       E: RECEIPT CONSISTENCY / GATE 1 REVIEW INTERFACE
  -> RECHECK EXACT CANDIDATE + REQUIRED GATE OUTCOMES
  -> GATE 1 EFFECT AUTHORIZATION OR BLOCKED OUTCOME
```

Production Lock is **effect-scoped**: a locked system may still examine or develop a candidate when a separate read/staging contract permits it. It must re-check before any production effect. The Hand-off Gate cannot bypass the lock by sending an effect to another participant. Reiteration cannot convert a failed authorization into a success. All five support refusal and explicit unresolved outcomes when applicable. Gate 4 applies whenever explicit human validation is required, including during a clarification or hand-off if that interaction calls for validation. It must not be bypassed by calling a sensitive operation low-risk. Demonstrated understanding, consent, and operator authorization remain separate; Gate 4 acceptance never clears Production Lock on its own. Gate 5 is optional at adoption, mandatory for triggered operations after adoption, and cannot clear Gate 1. Operational stability may be checked before, during, and after other gate evaluation; the sequence above shows logical dependencies rather than a fixed scheduler.

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
| Operator responds with a bare "yes" or "okay" when validation is required | Reject as insufficient validation; request contextual clarification |
| Operator clarifies the action but does not authorize it | Accept clarification only; keep authorization unresolved |
| Sensitive operation requires permission but material consequences were not understood | Do not authorize; communicate consequences and request action-specific validation |
| Validated action, target, risk, or candidate revision changes | Re-evaluate understanding and authorization; keep production locked until reauthorized |
| Adopted Gate 5: low-risk action with no trigger | Record `CHALLENGE_NOT_REQUIRED` under declared policy; preserve every other gate |
| Adopted Gate 5: destructive operation assigned C0 without evidence | Reject unsupported low classification and escalate/review |
| Operator repeats assent without describing irreversible effect | Fail required challenge; retain lock |
| C3/C4 challenge passes but independent verifier is unavailable | Block production; a verbal response cannot replace verification |
| Operation becomes erratic after challenge passes | Suspend affected action until independently stable; reassess scope and risk |
| AI attempts to use Gate 5 success as production authorization | Reject; only Gate 1's authorized clearance can admit exact effect |
| Proposal remains only a document, with Gate 5 unimplemented | Record as theoretical; claim no running enforcement |

**Status:** These are **standing proposed gates for the generic expert-system seed**, not proof that lock enforcement, iterative control, inter-agent communication, or delegated authorization exists. No gate may silently adopt a synthetic decision as fact or policy.

## Proposed decision order

```text
REQUEST
  -> EXPLICIT CONTRACT AND AUTHORITY CHECK
  -> EVIDENCE AND RULE MATCH
  -> DETERMINISTIC / HEURISTIC / EXPERT-SYSTEM ROUTE
  -> CONTRACT-CHECKED CANDIDATE
  -> INFORMED OPERATOR VALIDATION [IF EXPLICIT HUMAN VALIDATION REQUIRED]
  -> GATE 5 INDEPENDENT CONTROLS [IF ADOPTED / RISK-TRIGGERED]
  -> VALIDATION AND GATE 1 EFFECT ADMISSION
  -> AUTHORIZED OUTCOME OR REFUSAL

Only if the contracted routes cannot resolve the request
AND the contract explicitly allows a last-resort proposal:
  -> GENERATIVE SYNTHETIC CANDIDATE
  -> LABEL + PROVENANCE + REVIEW
  -> INFORMED OPERATOR VALIDATION [IF EXPLICIT HUMAN VALIDATION REQUIRED]
  -> GATE 5 INDEPENDENT CONTROLS [IF ADOPTED / RISK-TRIGGERED]
  -> VALIDATION AND SEPARATE GATE 1 ADMISSION
  -> AUTHORIZED OUTCOME OR UNRESOLVED / REFUSED
```

This is an ordering sketch, not a claimed executable workflow. A generated candidate cannot revise the contract, infer consent, or elevate its own authority.

## Relation to current publication work

- **Stage 0 — Site hydration:** publish eligible theory and qualified proofs of concept with provenance and limitations.
- **Stage 1 — Stable programmatic rehydration:** planned recovery and reconstruction of code from admissible evidence with expert systems and programmatic methods first. Synthetic generative material remains a separately labeled last resort.
- This seed is **not** a claim that Stage 1 has been built or that the underlying tools have already been recreated.

See the [EOL and site-hydration roadmap](../research-ethics/EOL_SITE_HYDRATION_AND_REHYDRATION_ROADMAP.md), [Heuristic-Grown Seed System](../research-ethics/WHEN_NOT_TO_USE_AI_HEURISTIC_GROWN_SEED_SYSTEM.md), and [Blueprints index](README.md).

## Boundaries

This document contains a general research proposal only. It does not publish private preservation data, credentials, undisclosed source material, or protected recovery details. Publication of a seed does not itself activate a contract, authorize execution, or establish independent verification.
