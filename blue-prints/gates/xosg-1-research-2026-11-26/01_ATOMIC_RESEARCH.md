# Four Deferred Atomic Rules — First-Pass Specification

**All four retain disposition DEFERRED.** These are models and bounded tests, not accepted normative axioms. Historical identifiers are stable.

## T2-03 — Provenance Continuity

**Candidate model:** a bounded provenance graph with distinct entity identities, activity identities, source/output roles, asserted actor, time/context, derivation edges and supporting evidence. Every transformation inside the declared workflow must name its inputs, activity and outputs. A missing required edge is PROVENANCE_UNRESOLVED, not a verified complete history. Valid hashes and signatures do not by themselves prove the physical history or authority. **Counterexamples:** an omitted manual intermediate; copied assertions passed off as independent provenance; a valid signer lacking grant authority; a graph complete only after omitting a hidden upstream source. **Promotion prerequisite:** independently specify trusted roots, identities, admissibility, completeness boundary, graph semantics and repeatable negative tests. **Unknown U-008 remains.**

## T2-06 — Pre-Copy Fallback

**Candidate model:** distinguish acquiring the original reference, reading, copying, storing an isolated work copy, validating and committing. Define a finite *failure class* and an effect model, then a separately authorized fallback whose safe properties have actually been demonstrated for those failures. Preserving original bytes cannot reverse unauthorized disclosure. **Counterexamples:** shallow copy aliases the source; copy-to-cloud leaks sensitive material; backup exists but restore authority is absent; snapshot taken after an irreversible effect. The accepted PVI-08 *programming preference* to establish fallback before copying remains separate from this deferred guarantee. **Promotion prerequisite:** declared failure/side effects, safe state, restoration rights and bounded adequacy argument. **Unknowns U-007/U-012 remain.**

## T3-01 — Explicit Evidence State

**Candidate evidence semantics:** after condition identity, applicability and admissibility are independently established, model support as two attributes: admissible-positive-support and admissible-negative-support. Neither gives UNRESOLVED; positive only SUPPORTED; negative only REFUTED; both CONFLICTED. These are **support statuses, not objective truth**. Candidate aggregation is union of support over active, admissible, same-scope items. Retraction requires a separately grounded revision and a recomputation; historical conflict is preserved. Applicability (YES/NO/UNRESOLVED) is evaluated separately. **Counterexamples:** favorable evidence silently overwrites negative; incomparable scopes are merged; a self-authored retraction erases an objection. **Promotion prerequisite:** precise admissibility, sufficiency, retraction and adjudication semantics, plus reproducible cases. **Unknown U-009 remains.**

## T3-08 — Assurance Independence

**Candidate model:** a trust-dependency graph connecting assessors, data sources, verification code, authorizers, keys and common failure modes. Independence is defined *relative to a project-specified threat model and property*, not by count of reports or machines. **Counterexamples:** two AI outputs derived from the same report; separate processes sharing a compromised signing key; a verifier checking its own author-provided “passed” flag; two independent witnesses sharing one faulty reference model. **Promotion prerequisite:** acceptance criteria for shared dependencies, externally verified trust roots, scope of claim, and threshold for independence. **Unknowns U-010/U-013 remain.**


## Cross-cutting findings

Admissibility of evidence is not verification of provenance; provenance is not authority; a verified candidate is not an authorized commit; two reports are not necessarily independent. Any attempt to promote an item should identify a particular project scope, environmental assumptions, required truth/evidence model and independent counterexamples. No deferred item has crossed this acceptance bar.
