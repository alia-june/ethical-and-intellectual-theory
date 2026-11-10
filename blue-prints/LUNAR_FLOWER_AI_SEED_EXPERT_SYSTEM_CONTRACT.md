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
