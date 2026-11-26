# xOSG-1 — Finite Core Semantics: Authority, Conditions, Effects and Time

**Research cycle:** 2026-11-26, second pass. **Status:** Draft bounded semantic model; not a formalization of all eight G0 axioms, an adopted profile, an operational controller, or a grant of production authority.

## 1. Explicit finite domains

| Domain | Role | Important separation |
| --- | --- | --- |
| CandidateIdentity, CandidateRevision, TargetIdentity | Distinguish actual work item and target | Representation changes do not prove continuity of identity. |
| GrantIdentity, IssuerIdentity, AuthorityScope | Identify the independently established source and scope of permission | A receipt of a grant is not permission; issuer legitimacy is an external assumption in this model. |
| ConditionIdentity, ConditionEvidence | Enumerate and evaluate mandatory conditions | Empty observed conditions do not prove completeness. |
| EffectIdentity, InteractionRule | Represent direct and emergent effects | Permitted components can combine into prohibited effects. |
| GateReceiptIdentity, GateNumber | Represent numbered and prior-linked gate clearances | Local receipt flags do not authenticate real attestations. |
| EventIdentity, CausalEdge | Represent issuance, six clearances, Alpha-Lock, effect commitment and possible revocation | A graph edge is meaningful only if its provenance and real-world interpretation are valid. |
| PolicyProfile, RiskAssessment, PromptIdentity | Bind the selected seven-gate policy and interpreted request | Same-looking text is not a substitute for an authorized context. |

The current bounded model uses a single declared authority root, a finite explicit effect domain, an explicit mandatory-condition registry and one candidate. It does **not** model a legitimate multi-issuer precedence system or an unbounded effect universe.

## 2. Necessary-condition semantics (not a universal theorem)

Let the clearance model be evaluated for one exact candidate and intended effect at its **effect-commit event**, not just at the Gate One authorization event. The model can return mock **CLEARED** only if **all** of the following predicates hold:

\`\`\`text
profile_is_explicitly_selected
AND issuer_root_is_established_for_fixture
AND authority_precedence_is_resolved_for_fixture
AND exact_grant_binding_is_established_for_fixture
AND condition_registry_is_authoritatively_complete_for_fixture
AND every_required_condition_is_applicable_supported_and_sufficient
AND direct_and_interaction_effects_are_within_declared_effect_universe
AND declared_effect_universe_has_coverage_evidence_for_fixture
AND all_effects_in_modeled_closure_are_within_granted_scope
AND six_authentic_fresh_consistent_mock_receipts_are_ordered
AND Gate_Six_restatement_is_consistent
AND issuance_precedes_gate_one_precedes_..._gate_six_precedes_alpha_lock
AND alpha_lock_precedes_effect_commit
AND revocation_visibility_is_complete_for_fixture
AND (no_revocation_is_recorded OR effect_commit_precedes_revocation)
AND independent_external_alpha_authorization_is_established_for_fixture
\`\`\`

Here **established for fixture** means a Boolean supplied by the research harness, **not** an actual outside trust determination. The conjunction is a decision predicate for the finite model, not a sufficient proof for a deployed system or external grant.

## 3. Mandatory-condition completeness

Define the declared mandatory-condition registry as a finite set of condition identities and context-bound verification requirements. Two cases must be distinguished:

- **Complete and empty:** An authoritative project rule explicitly establishes there are no applicable mandatory conditions for the examined scope. This could support an empty registry *inside a model* when independently evidenced.
- **Observed empty, completeness unknown:** No entries were seen, but the authoritative rule inventory and its closure were not independently established. This **cannot** clear the gate.

The model requires both condition-registry completeness and authority over the registry to be affirmed in the fixture; it additionally tests applicability, positive support, and sufficiency for every listed condition. The underlying evidence logic is **not** thereby promoted as the deferred universal Tranche Three Item 01 semantics.

## 4. Effects and closure

Let **DeclaredEffectUniverse** be a finite set. Each candidate operation has **DirectEffects**. The model begins with the union of those effects and iteratively applies **declared interaction rules**:

\`\`\`text
effective_effects = union_of_direct_effects

REPEAT within the declared finite effect bound:
    FOR each declared interaction_rule:
        IF all rule prerequisites are in effective_effects:
            ADD the rule's generated effect to effective_effects
    STOP when no new effect is added

REQUIRE every effective effect be in the declared effect universe
REQUIRE every effective effect be authorized by the grant for this composition
\`\`\`

A rule generating an effect outside the declared universe blocks evaluation. The test establishes only **closure under the explicitly supplied rules**, not the completeness or fidelity of real consequences, side channels, or undiscovered interactions. In the research fixture, two individually authorized direct effects generate a combined protected effect; the resulting composition must fail unless that extra effect is also authorized.

## 5. Causal time and revocation

Events are represented by a finite **acyclic directed graph**; reachability represents the proposed *happens-before* relation. The ordered clearance chain must have a path between consecutive entries:

\`\`\`text
grant_issuance
  → gate_one
  → gate_two
  → gate_three
  → gate_four
  → gate_five
  → gate_six
  → alpha_lock
  → effect_commit
\`\`\`

A revocation event is evaluated against the **effect-commit** event:

| Declared causal relation | Mock eligibility | Reason |
| --- | --- | --- |
| No recorded revocation **with explicitly complete revocation coverage** | Eligible for remaining checks | Absence is assumed complete **in the fixture only** |
| effect_commit happens-before revocation | Eligible for remaining checks | Authorization not withdrawn at modeled commit |
| revocation happens-before effect_commit | NOT CLEARED | Grant invalid before the modeled effect |
| Neither event causally precedes the other | NOT CLEARED | Ambiguous concurrent/partial order |
| Event graph cyclic, incomplete or malformed | NOT CLEARED | No supported causal proof of the ordered chain |

The model has no atomic real-world implementation, linearizability proof or operationally authoritative event feed. Its \`EFFECT_COMMIT\` node is symbolic; real commit-time revocation remains **U-006 UNKNOWN** and **PO-06 OPEN**.

## 6. Exact boundaries of the current model

A mock receipt binds named candidate ID, revision, target, profile, grant, risk assessment and prompt identity. **The currently committed test model does not yet bind the entire operation/effect plan, interaction-rule revision, condition-registry revision, or grant-scope revision to every receipt.** This is a material research-model defect: matching short names is not proof that the underlying content is unchanged. It is recorded for the next refactor, not ignored.

**Formal status:** A finite model and bounded test cases exist. Proof Obligation 01 is **OPEN**; this is not a complete formal interpretation of Gate Zero, and the 14 historical unknown findings remain **UNKNOWN**.
