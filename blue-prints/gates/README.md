# Gate Framework — Theoretical Gates, Restatement, and Opt-In Axioms

**Repository:** Ethical & Intellectual Theory / Lunar Flower AI Seed  
**Record date:** 2026-11-24  
**Disposition:** Published theoretical research. **No runtime gate is activated by this document.**

This README is a separate entry point for the gate research. The [Lunar Flower expert-system contract](../LUNAR_FLOWER_AI_SEED_EXPERT_SYSTEM_CONTRACT.md) remains the canonical description of the original standing-gate proposal. This page explains the wider Gate 0 theory, the modular opt-in catalog, and the additional **Gate 6 — Prompt Restatement** proposal.

## Purpose

The proposed expert-system architecture places an AI in a *contract-bound orchestration* role. It distinguishes a machine's interpretation from an Operator's intent; evidence from authorization; verified properties from implementation claims; and candidate work from approved effects.

The research seeks interlocking axioms that projects may **opt into** by explicit, scoped selection. A catalog entry does not create project obligations. A selected rule does not prove its own satisfaction. A theoretical promotion does not unlock a production gate or give an AI permission to amend its own authority.

## Reading the gate names

**Gate 0** is the theoretical foundational-invariants family, not an implemented runtime Gate 0. **Gates 1–6** are the numbered standing-gate proposals. Their numbers are stable identifiers, *not necessarily execution order*. In particular, Gate 6 operates at prompt interpretation, before substantive planning or Gate 2 reiteration.

| Gate | Purpose | Core distinction |
| --- | --- | --- |
| Gate 0 — Foundational invariants | Conserve authority, constrain effects, evidence, identity, conditions, and change | Theory is not deployment |
| Gate 1 — Production Lock | Separate permitted study/staging from authorized external effects | Planning is not production permission |
| Gate 2 — Reiteration | Re-examine a candidate within a bounded budget using an evidenced delta | Repetition is not progress or authority |
| Gate 3 — Hand-off | Preserve task scope, provenance, and authorization across participants | A transfer of work is not a transfer of privileges |
| Gate 4 — Informed Operator Validation | Distinguish acknowledgment, understanding, consent, and authorization | “Okay” is not sufficient evidence where explicit validation is mandatory |
| Gate 5 — Consequence-Scaled Challenge–Response | Apply adopted, risk-triggered challenge, verification, and stability requirements | Verification is not authorization |
| **Gate 6 — Prompt Restatement** | The machine restates the Operator's prompt as it understands it | **Interpretation is not instruction, agreement, consent, or clearance** |

The existing Gates 1–5 retain their identifiers; Gate 6 is added without renumbering them.

## Gate 6 — Prompt Restatement (new proposed contract)

**Identifier:** `LF-GATE-006`  
**Adoption:** Optional; selected for a project through an established governing contract  
**Position:** At interpretation, before substantive work requiring that interpretation; reassess when the prompt materially changes  
**Status:** Proposed, undocumented as an implementation, not deployed

### Simple rule

> The machine restates the prompt in its own words, as it understands the Operator's request, before treating its interpretation as the basis for a consequential plan or operation.

The restatement should identify the requested objective, any explicit constraints or exclusions, the intended target or scope where known, and material assumptions or uncertainties. It must remain concise and faithful: do not add goals, approvals, permissions, or constraints the Operator did not provide.

**Example**

- Operator: “Inspect this archive and summarize it; do not modify its contents.”
- Machine: “I understand the task as a read-only inspection and summary of the supplied archive. I should leave its files unchanged and report any parts I cannot inspect.”

The machine's wording is an **interpretation claim**, not an alteration of the original request. The original prompt remains the authoritative record of what was expressed. If the restatement conflicts with that source or established context, the interpretation is unresolved; the machine does not silently replace the prompt with its paraphrase.

### Proposed result states

| Result | Meaning |
| --- | --- |
| `RESTATED` | A scoped restatement is available for correction or comparison with the original request. |
| `NEEDS_CLARIFICATION` | Material ambiguity or conflict prevents reliance on a single interpretation. |
| `NOT_ADOPTED` | The project has not opted into this gate. |

A `RESTATED` receipt is not proof that the Operator agrees. An optional project may request explicit confirmation under its governing contract; confirmation is **not automatically required for every ordinary prompt**. Where the chosen interpretation would change targets, permissions, irreversible effects, or other material conditions, clarification or applicable higher gates remain necessary.

### Boundaries and interactions

- **Versus Gate 2 — Reiteration:** Gate 6 addresses *understanding the request*. Gate 2 revisits an already formed *candidate* and requires a meaningful delta.
- **Versus Gate 4 — Informed Operator Validation:** Gate 6 presents the machine's interpretation. Gate 4 evaluates the distinct evidence required of the Operator when explicit informed validation is mandatory.
- **Versus Gate 5 — Consequence-Scaled Challenge:** A clean restatement does not satisfy a required risk challenge, independent verification, or stability check.
- **Versus Gate 1 — Production Lock:** Restatement never authorizes a protected external effect.
- **Versus Gate 3 — Hand-off:** A restatement can help define a hand-off, but it does not transfer authority or prove the recipient has accepted the task.

**Failure handling:** Preserve the original prompt; identify only the material unresolved terms; ask a targeted clarification where necessary; do not repeatedly demand restatement for the same unchanged request. A new interpretation for a materially changed request supersedes the old interpretation for the new scope, without rewriting history.

**Invariant:** `MACHINE_RESTATEMENT != OPERATOR_AUTHORIZATION`.

## Gate 0 — Accepted theoretical foundation (v0.4)

Eight axioms were conceptually promoted; no operational gate was activated:

| Identifier | Axiom |
| --- | --- |
| `G0-00` | Authority Conservation |
| `G0-00a` | Effective Authority Closure |
| `G0-00b` | Assurance Boundary Integrity |
| `G0-00c` | Implementation Correspondence Integrity |
| `G0-01` | Default Denial |
| `G0-02` | Authorization Identity Continuity |
| `G0-03` | Condition Integrity |
| `G0-07` | Dependency-Scoped Change Invalidation |

Other historical entries—Independent Assurance (G0-04), Composition Integrity (G0-05), Non-Cumulative Authority (G0-06), and Safe Containment/Authorized Recovery (G0-08)—retain their recorded conditional or subordinate status. Minimality, complete consistency, formal independence, and equivalence to implementation are **not proved**.

## Opt-in modular library (G0-MOD v0.2)

The modular research decomposes the theory into candidate project-specific protections:

| Tranche | Domain | Catalog disposition |
| --- | --- | --- |
| T0 | Definitions, dependencies, profiles | 5 optional rules promoted |
| T1 | Authority, scope, delegation, restriction | 6 optional rules promoted |
| T2 | Identity, references, copying, boundaries | 6 promoted; 2 deferred |
| T3 | Evidence, conditions, conflicts, decisions | 6 promoted; 2 deferred |
| T4–T7 | Consequences, time, assurance, recovery | Modular specification deferred |

**M0 — Explicit Adoption** is the catalog charter. Thus **23 of 27 T0–T3 atomic candidates** are promoted as *optional theoretical rules*, and four are deferred: `T2-03` Provenance Continuity, `T2-06` assurance of Pre-Copy Fallback, `T3-01` normative four-state evidence semantics, and `T3-08` Assurance Independence. These remain research subjects, not rejected ideas.

Selecting a rule is distinct from establishing its prerequisites, verifying its guarantee, or authorizing an operation. A project may deliberately select a less restrictive optional profile **only through its authorized profile-revision authority**. That does not remove externally binding constraints or operational production locks.

Fourteen unresolved research claims remain marked **UNKNOWN**, including axiom minimality, authority precedence, completeness of protected effects, revocation ordering, runtime correspondence, and whether adding a restriction improves overall security. Unknown must not be converted into a passing result.

## Programming invariants: separate register

The programming-invariant research remains separate from security-gate authority. It records bounded iteration, explicit sentinels, defined variable states, human-legible names and control flow, copy isolation, and **establish a safe fallback before attempting a working copy**. Literal loop unrolling is retained as a technique but deferred as a universal requirement. A programming preference alone neither establishes a security guarantee nor authorizes production.

## Intended logical flow (not an executable pipeline)

```text
ORIGINAL OPERATOR PROMPT
    -> GATE 6: MACHINE RESTATEMENT [ONLY IF OPTED IN]
       -> material mismatch: clarify; no new authority
       -> faithful interpretation: retain alongside original prompt
    -> DECLARED CONTRACT / AUTHORITY CHECKS
    -> RULE-GOVERNED PLANNING AND EVIDENCE
    -> GATE 2: BOUNDED REITERATION [IF APPLICABLE]
    -> GATE 3: HAND-OFF [IF APPLICABLE]
    -> GATE 4: INFORMED VALIDATION [WHEN REQUIRED]
    -> GATE 5: CONSEQUENCE-SCALED REVIEW [IF ADOPTED/TRIGGERED]
    -> GATE 1: EXACT EFFECT REVIEW [REMAINS INDEPENDENTLY LOCKED]
    -> AUTHORIZED EFFECT OR BLOCKED / UNRESOLVED
```

Gate 1 can be checked throughout, not only at the end. This diagram does not claim a scheduler, enforcement mechanism, runtime, or implementation.

## Evidence and publication boundary

This is a public write-up of **theoretical, opt-in research**. Internal promotion is acceptance of a conceptual rule into the research catalog, not an independent assurance result. No code, gate-controller, privilege manager, external authority service, or deployment is provided here. Repository publication does not adopt the proposed protections on behalf of other projects or waive existing contracts.

### Navigation

- [Canonical Lunar Flower expert-system contract](../LUNAR_FLOWER_AI_SEED_EXPERT_SYSTEM_CONTRACT.md)
- [Blueprints index](../README.md)
- [Ethical & Intellectual Theory home](../../README.md)
- [Programming doctrine](../../programming-doctrine/HUMAN_DOCTRINE.md)

**Research checkpoint:** Gate 0 v0.4 and G0-MOD v0.2 accepted theoretical catalog; Gate 6 newly proposed and **not promoted, not adopted, not implemented**.
