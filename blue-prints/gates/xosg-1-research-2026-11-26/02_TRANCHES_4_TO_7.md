# Tranches Four to Seven — Initial Independent Modular Research

**State:** New working research, not a promoted T4–T7 atomic catalog. Historic C2 covered these themes conceptually; this document provides the first distinct candidate models and counterexamples.

## Tranche Four — Composition and Consequences

**Objects:** bounded candidate operations; individual direct effects; joint and emergent effects; actor and authority scopes; protected-effect domain; context. **Rule candidate:** A composition's relevant effects can exceed the union of its individual effects. Authorization of each component is not sufficient when an interaction yields a prohibited protected consequence. All claims of composition safety are limited to the modeled effects, not an assumed complete universe.

**Countermodel:** Two separately allowed state updates combine to violate a global invariant; two permitted disclosures jointly reconstruct a protected fact. A system that checks only each step incorrectly admits the composition.

**Open:** define a composition operator, concurrency and associativity conditions, interaction-effect closure and whether the protected-effect universe is demonstrably complete (U-004). Proposed dependency: Gate Zero Effective Authority Closure, Tranche One scoped grants, Tranche Two reference binding and Tranche Three condition evidence.

## Tranche Five — Temporal Validity

**Objects:** grant creation, evidence observation, Gate One clearance, revocation, Gate Seven Alpha-Lock clearance and the *actual effect-commit event*, related by a declared causal/temporal order. **Rule candidate:** a valid historical receipt does not prove authority when the effect is committed. A revocation ordered before commit invalidates the earlier permission. An unresolved race is not clearance.

**Countermodel:** Gate One and Gate Seven clear, then external authorization is revoked before effect commit. A time-of-check-only model erroneously allows the effect.

**Open:** trustworthy event order, distributed clock assumptions, atomic commit and revocation semantics, expiry and policy-version invalidation (U-006). A simulated “revoked” flag cannot prove that real-world ordering is enforced.

## Tranche Six — Independent Assurance

**Objects:** claim/property, abstract model, implementation, configuration, environment, assessor, data source and trust-dependency graph. **Rule candidate:** an assurance claim must be bound to what was actually checked. Independence is a relation under declared common-mode failure assumptions, not a raw number of certificates or reports. Model tests do not establish deployed runtime correspondence.

**Countermodel:** Two “independent” verifiers both reuse the same forged report or both execute the same defective check. They do not satisfy a requirement for separately grounded verification.

**Open:** concrete independent verifiers, disallowed common dependencies, property correspondence and verified environment (U-010/U-013). A gate controller authenticated by the producing AI is not automatically independent.

## Tranche Seven — Containment and Recovery

**Objects:** state, permissible stop state, recoverable state, authorized recovery transition, safe-state invariant, recovery-goal predicate, deadline and resource/fairness assumptions. **Separate claims:** (a) a denied operation creates no new authority (containment safety); (b) a bounded authorized recovery route reaches a satisfactory state (liveness/recoverability). Claim (b) does not follow from claim (a).

**Countermodel:** The system safely blocks all changes but has no authorized recovery operation. Another failure copies data outside the system; restoring bytes does not undo the disclosure.

**Open:** permitted recovery authorities, safe vs recoverable state distinctions, temporal bounds, environmental assumptions and actual fallback capability (U-007/U-012).

## Cross-tranche interfaces

- Composition constrains effect scope across the ordered receipts.
- Time constrains validity at Gate Seven and actual commit; it can invalidate earlier clearance.
- Assurance constrains who may certify receipt authenticity and external Alpha-Lock.
- Containment restricts what may happen after NOT_CLEARED; recovery needs independent authority.

**Current disposition:** The first individual models and adversarial examples are recorded. A formal modular catalog, proofs, equivalence to G0 v0.4, and any deployment guarantee **remain deferred**.
