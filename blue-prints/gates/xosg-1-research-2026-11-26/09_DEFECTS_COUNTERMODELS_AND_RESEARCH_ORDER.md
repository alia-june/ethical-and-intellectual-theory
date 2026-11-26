# xOSG-1 — Defect Ledger and Next Countermodel Pass

**Class:** Research-model defects and unsatisfied assumptions. This list is **not** a record of discovered defects in a deployed es-xosg-9, because its instrumentation remains unestablished.

| Research issue | Specific flaw or unproved assumption | Proposed correction | Blocked assurance claim |
| --- | --- | --- | --- |
| **R1-001 — Material-to-Receipt Binding** | Receipt compares named candidate identity but not a canonical immutable copy of operation plan, interaction rules, mandatory-condition registry and grant scope. | Specify identity of exact effect plan/policy revision; bind to every numbered clearance; mutation invalidates dependent receipts; test changes that preserve labels. | “All seven gates cleared for this same material candidate.” |
| **R1-002 — Revocation Feed Completeness** | Fixture says no revocation occurred or visibility is complete without proving either claim. | Define authoritative revocation event source, coverage, freshness, exclusion/replay handling and fail-closed communication loss. | “Authorization was valid at commitment.” |
| **R1-003 — Authenticated Receipt Trust** | \`signatureVerifiedFixture\` is supplied by the test author; no signature, key history or authorizer authority is established. | Specify independently validated signers, key scope, rotation, revocation, nonce/replay constraints, plus failure cases. | “Receipts were authentic and independently authorized.” |
| **R1-004 — Authority Precedence** | Single-issuer test assumes valid authority and resolved precedence. | Define conflict resolution among independently legitimate issuers as a parameter to the contract; preserve UNRESOLVED if absent. | “The applicable grant is authoritative.” |
| **R1-005 — Policy and Condition Revision** | Profile identifier alone is insufficient to prove identity of the rules or completeness of mandatory conditions. | Bind exact profile/condition-rule revision, evidence criteria, and authorized revision issuer into receipts and commit check. | “The reviewed conditions were the conditions at execution.” |
| **R1-006 — Independent Alpha-Lock** | Fixture assumes the final controller is independent, not established by a trust graph. | Model disallowed shared roots, controller signature scope, authorization chain and failure isolation. | “The final gate was independent of the AI.” |
| **R1-007 — Operator Restatement** | A Boolean “consistent” flag is not an objective comparison of prompt, intent, boundaries and candidate. | Define semantic materiality criteria and separately evidenced Operator validation when required. | “Gate Six preserved the Operator's actual intent.” |
| **R1-008 — Effect Universe** | Finite closure only accounts for effects declared by the fixture. | Counterexamples for omitted cross-effects, side channels and out-of-domain interactions; bounded completeness claim only. | “All protected consequences were covered.” |
| **R1-009 — Atomic Commit Boundary** | \`EFFECT_COMMIT\` is a symbol in a directed graph, not a hardware/software atomic barrier. | Formalize a trusted serialization or transactional protocol and prove absence of unchecked time-of-use gaps under stated assumptions. | “A revocation cannot race past Alpha-Lock.” |

## Counterexamples that the next model must reject

1. Gate One–Six receipts have unchanged IDs, but a candidate adds a new operation that happens to be separately permitted. **Old receipts must be invalidated** despite the new plan's individual permissions.
2. The interactions now generate a different authorized effect, while the same original candidate ID remains. **Changing the effect plan must require reassessment.**
3. A condition registry gains a new mandatory condition that is marked satisfied; the earlier Gate Four receipt must still be treated as stale.
4. The same grant ID now carries an expanded grant scope; the old Gate One evidence must not automatically apply to that altered grant.
5. Two “authenticated” receipts share a single compromised signer despite a requirement for independence.
6. A revocation is hidden by an incomplete or stale authority feed.
7. An operation has a newly discovered side effect outside the declared universe.
8. A modeled receipt chain is valid but the implementation executes the effect after a revocation that the model never observed.

## Next bounded execution order

**Pass R2-01:** Fix R1-001 and R1-005 in the **research-only** model; add material-plan/condition-revision mutation tests and re-enumerate the finite space.  

**Pass R2-02:** Formalize authorized issuer hierarchy and event feed assumptions; add causal counterexamples for R1-002, R1-004, R1-009.

**Pass R2-03:** Define the trust-dependency graph and admissible evidence semantics for deferred Tranche Three Items 01/08 and provenance for Tranche Two Item 03.

**Pass R2-04:** Define Tranche Seven authorized containment/recovery transitions with conditional liveness claims; do not assume recovery follows from safety.

**Pass R2-05:** Reassess optional module substitutions and Gate Five consequence thresholds after the core model is stabilized.

None of these passes constitutes authorization to implement, select a security profile, alter a gate, or promote a deferred axiom.

## Addendum R2-01 — Bounded correction, not full closure (2026-11-26)

The initial lack of receipt-to-material equality was addressed *structurally* in a separate mock model that binds canonical operation plans, interaction rules, grant scope and mandatory-condition/policy revisions to every receipt. A 2,065-case test suite produced expected results, but it is not integrated with the causal event model.

**Residual counterexample:** A mocked adversary who updates the source data **and all simulated authenticated receipt snapshots** together can still obtain mock `CLEARED`. This is a deliberate demonstration that **R1-003 — Authenticated Receipt Trust** remains unmet; merely matching canonical material is not proof of legitimate signed authority. R1-001 and R1-005 are **modeled only**, not certified.

The next research pass should bind exact material, authentic authorization, causal ordering, and commit-time validation into one explicit assumption-aware model; it must not claim deployment or production gate clearance.


## Addendum R3 — Integrated signed-fixture model (2026-11-26)

**R1-001 / R1-005:** Material-to-receipt and policy/condition revision binding are now integrated *structurally* into the bounded R3 model, which verifies signed payload digests against the exact current material. **R1-003:** Ed25519 signature verification relative to ephemeral fixture public keys was exercised; independently legitimate signer identity, custody, rotation and revocation are **not established**.

**R1-002:** Full revocation coverage remains an assumed Boolean; the causal graph is not an authenticated external event log. **R1-004:** External authority hierarchy/precedence is undefined outside the fixture. **R1-006:** A distinct Alpha-Lock signing key is not proof of an independent controller. **R1-009:** An in-memory nonce-consumption operation is not an atomic external effect-commit transaction. **R1-008:** Only declared effects and rules are covered.

The exact tested R3 source and 2,084-case result are documented in \`11_R3_INTEGRATED_GATE_COMMIT_REPORT.md\`. Next work: authoritative trust roots, signed revocation-feed coverage, reliable causal ordering and a genuine commit-time serialization model. **No original UNKNOWN or proof-obligation disposition has changed.**
