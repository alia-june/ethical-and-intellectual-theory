# R3 — External Authority, Revocation and Atomic Commit: Proof Targets

**Designation:** xOSG-1 research only. The terms “shall” and “requires” below describe a **candidate future profile**, not operational adoption.

## 1. Three separate questions

1. **Message integrity:** Is a receipt exactly what a holder of a specified private key signed? The R3 model exercises Ed25519 on fixture data.
2. **Legitimate authority:** Was that key held and used by an independently authorized issuer for the exact scope, effect and period? This is **not established** by fixture signatures.
3. **Atomic enforcement:** Can the final clearance and the externally visible effect be serialized against revocation, policy changes, duplicated sessions and concurrent writes? The R3 in-memory model does **not** establish this.

Treating any of these as equivalent to the others would violate Gate Zero's assurance and correspondence boundaries.

## 2. Proposed trust model (not implemented)

**Operator authority record:** \`issuer_identity\`, \`issuer_key_identity\`, \`authority_source\`, \`delegable_scope\`, \`target_scope\`, \`effect_scope\`, \`policy_revision\`, \`validity_interval\`, \`revocation_endpoint\`, and evidence of the legitimacy of the issuer. The producing AI cannot select or alter the issuer trust root.

**Gate receipt:** \`gate_number\` (1–7), \`gate_clearance\`, \`candidate_identity\`, \`candidate_revision\`, canonical \`material_digest\`, \`grant_digest\`, \`session_identity\`, \`receipt_nonce\`, \`previous_receipt_digest\`, \`policy_revision\`, \`condition_registry_revision\`, \`risk_revision\`, \`gate_event_identity\`, \`issued_at\`, \`expires_at\`, signer identity, and a signature verifiable against an independently managed key registry.

**Independent Alpha-Lock authority:** Must be distinct from the producing AI's effective authority; simply generating a second private key or process does not establish independence. The external authorization policy must establish the signer set, threshold/roles, scope, separation requirements and revocation behavior.

**Canonical encoding:** Needs a precisely versioned byte format and duplicate-key rejection. JSON object-key sorting in the R3 fixture is only a local research format; a production protocol must specify character normalization, numeric boundaries, supported data types, content hashes and streaming behavior.

## 3. Proposed revocation evidence

A revocation event needs an authenticated \`grant_id\`, \`grant_revision\`, issuer or revoking authority, event identity, policy identity, causal/log position and signed evidence of the event. It must be clear **which authority can revoke which grant**.

An assertion that the event feed is “complete” is not sufficient. A future verifier would need a trustworthy watermark or equivalent statement of coverage, a defined freshness guarantee, and a failure policy for lost connectivity. An absent revocation in a stale or partitioned feed is not evidence of valid authority.

### Ordering cases

| Relative order at effect commit | Candidate decision |
| --- | --- |
| Authenticated commitment before authenticated revocation, with valid coverage | Possible clearance, subject to all other requirements |
| Authenticated revocation before commitment | NOT CLEARED |
| Revocation and commitment incomparable or order unavailable | NOT CLEARED |
| Source unavailable, coverage incomplete or untrusted clock | NOT CLEARED |
| Gate Seven cleared earlier, but a revocation precedes the **actual** effect | NOT CLEARED |

These are proposed semantics. The R3 event DAG supplies edges as test data, not an authoritative distributed log.

## 4. Candidate commit protocol

A future single authorized transaction boundary would have to guarantee, **at the same linearization point**:

\`\`\`text
ASSERT exact candidate material and relevant policy/condition version unchanged
ASSERT all six sequential gate receipts authenticated and current
ASSERT final Alpha-Lock receipt independently authenticated for same effect
ASSERT issuer/grant is presently valid, with authoritative revocation coverage
ASSERT the modeled cumulative protected effects are within granted scope
ASSERT this session or effect nonce has not already committed
IF every assertion is established:
    atomically reserve/consume the nonce and commit only the exact scoped effect
ELSE:
    refuse commit; retain Alpha-Lock closed or invalidate affected receipts
\`\`\`

An atomic in-memory \`Set.add\` in a local test process is **not** a guarantee of serialization with an external effect, remote revocation, crash recovery or concurrent controllers.

**Protocol failure modes to model:** transaction retry, duplicate nonce across replicas, partial external side effect before commit, crash between clearance and effect, authorization revocation on another node, expired signer trust, stale local policy, conflicting issuer hierarchies, and rollback that itself needs authorization.

## 5. Assurance obligations and negative-control experiments

| Obligation | Concrete evidence needed | Current status |
| --- | --- | --- |
| A-01: legitimate issuer roots | Independent source of identities, issuers, scopes and precedence | UNKNOWN; U-003 |
| A-02: signed receipt trust | Verified signers, key custody, replay defense, key/scope revocation | Only fixture signature checks |
| A-03: authoritative revocation visibility | Signed event source, coverage/freshness, partition handling | UNKNOWN; U-006 |
| A-04: effect material coverage | Complete applicable operation plan and relevant external effects | UNKNOWN; U-004/U-005 |
| A-05: independent Alpha-Lock | Demonstrated separation from producer and compromised common roots | UNKNOWN; U-010 |
| A-06: atomic final effect boundary | Formal transaction model, real implementation and independent validation | UNKNOWN; U-006/U-013 |
| A-07: containment and recovery | Authority-safe stop and recovery transitions after denial | UNKNOWN; U-007/U-012 |

**Required negative controls:** replace a trusted public key; compromise/reuse a test signer; supply a stale signed authorization; hide a revocation while claiming full coverage; create a concurrent commit/revocation; commit the same nonce on two simulated replicas; mutate condition rules while keeping labels unchanged; alter an independently held policy version. Positive results without these challenges do not support an operational-security assertion.

## 6. Release and adoption boundary

This document is **an open research specification**, not a key-management policy, deployed gate, real authentication service or security certification. It does not authorize the AI to generate, grant, unlock, or self-certify root permissions. **xOSG-1 remains a documented operations contract; es-xosg-9 remains conditional on genuine instrumentation.**

No T2/T3 deferred atomic candidate or T4–T7 tranche is promoted. PO-01–PO-11 remain OPEN and U-001–U-014 remain UNKNOWN.
