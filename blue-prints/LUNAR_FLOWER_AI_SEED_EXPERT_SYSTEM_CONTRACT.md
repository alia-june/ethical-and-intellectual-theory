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

## First expert-system gates — generic proposed contracts

The following three gates are **implementation-independent design candidates**. They operate on declared contracts, evidence, and state rather than a named product, language, runtime, or organization. All start **unadmitted** until an actual implementation and its tests are accepted. A document describing a gate is not itself an enforcing mechanism.

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
  -> SEPARATE EFFECT AUTHORIZATION OR BLOCKED OUTCOME
```

Production Lock is **effect-scoped**: a locked system may still examine or develop a candidate when a separate read/staging contract permits it. It must re-check before any production effect. The Hand-off Gate cannot bypass the lock by sending an effect to another participant. Reiteration cannot convert a failed authorization into a success. All three support `REFUSE` and explicit unresolved outcomes.

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

**Status:** These are **first gates for the generic expert-system seed**, not proof that lock enforcement, iterative control, inter-agent communication, or delegated authorization exists. No gate may silently adopt a synthetic decision as fact or policy.

## Proposed decision order

```text
REQUEST
  -> EXPLICIT CONTRACT AND AUTHORITY CHECK
  -> EVIDENCE AND RULE MATCH
  -> DETERMINISTIC / HEURISTIC / EXPERT-SYSTEM ROUTE
  -> CONTRACT-CHECKED CANDIDATE
  -> VALIDATION AND ADMISSION GATE
  -> AUTHORIZED OUTCOME OR REFUSAL

Only if the contracted routes cannot resolve the request
AND the contract explicitly allows a last-resort proposal:
  -> GENERATIVE SYNTHETIC CANDIDATE
  -> LABEL + PROVENANCE + REVIEW
  -> VALIDATION AND SEPARATE ADMISSION
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
