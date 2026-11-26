# Compact Addressed Directory Architecture

**Encoding I and Encoding II**

**Fixed and adaptable 8.3 addressing, virtual composition, and recursive namespace expansion**

Technical white paper | Research draft 0.2 | 25 November 2026

## Executive summary

This paper describes a managed directory architecture that separates storage identity, human-readable designation, rack membership, virtual composition and integrity. Instead of representing a semantic hierarchy by progressively longer native paths, the system assigns each directory a compact, case-insensitive 8.3 designation. Encoding I uses a seven-character ordinal identity, an eighth-character CRC-5 or exception sentinel, and a three-character fifteen-bit inclusion mask. Encoding II retains the 8.3 envelope while allowing reserved directory identifiers to open subordinate namespaces and reallocating identifier characters to increase rack capacity. The integrity character moves left as the rack field grows.

Each directory is self-describing through a Lattice Universal Construct JSON record in its `.system` directory. Branch roots retain branch-specific metadata, while external redundant representations support inspection, indexing and recovery. A deterministic management layer resolves virtual trees and enforces integrity and authorization boundaries. The underlying operating system remains responsible for physical storage.

| Encoding I reference parameter | Value |
|---|---:|
| Canonical designation | `XXXXXXXC.RCK` |
| Usable directory identities | 78,364,162,048 |
| Reserved identity sentinels | 2,048 |
| Independent rack flags | 15 |
| Valid rack masks | 32,768 |
| Ordinary check-character states | 32 |
| Exceptional check-character states | 4 |
| Metadata redundancy target | Local record + 3 external representations |

Encoding II can trade local identity population for up to 36 independent rack flags under the existing sentinel reservations. A namespace expansion mechanism can distribute a large corpus across small physical directory environments without conflating native containment with the virtual hierarchy. The profile and namespace must be known before a designation is parsed.

**Status and scope.** This is a conceptual architecture and research record, not an implemented filesystem, security certification or production release. Operator decisions establish the core notation, sentinel reservations, rack encoding, Lattice metadata approach and the two encoding families. Encoding II mechanisms are operator-directed; detailed profile and expansion rules below remain proposals. Specific recovery semantics, CRC polynomial, transaction protocol, physical sharding and tooling details are proposals pending approval and verification. No production authorization is implied.

## 1. Design principles and physical layout

Conventional directory trees couple semantic containment to native path length. Renaming or reorganizing a high-level directory can change the paths of every descendant. This architecture instead makes the directory a self-describing storage construct, with virtual relationships established independently of physical containment.

| Plane | Responsibility |
|---|---|
| Identity | Stable ordinal identifier within the managed root |
| Physical storage | Native directories and file contents |
| Selection | Profile-defined independent rack membership bits |
| Composition | Metadata-defined branches and relationships |
| Presentation | Human-readable or machine-oriented navigation |
| Assurance | CRC, Lattice metadata, independent records and policy |

### 1.1 Encoding I canonical layout

```text
ROOT/
  .system/                       Root-level metadata
  00000SG?.005/                  Directory construct (illustrative)
    .system/
      universal.json             Lattice record (proposed filename)
    content...
  00000SH?.002/
    .system/
      universal.json
    content...
```

The question mark in the illustration is a placeholder, not a valid filename character. The actual eighth character is calculated from the identifier and rack mask or assigned through an authorized exception transition. `.system` is a reserved administrative directory outside the ordinary encoding and does not recursively require another `.system` directory.

The managed root contains one canonical live directory per ordinary identifier. Rack membership does not create physical copies or rack-specific folders. Changes in the semantic name or virtual parent do not require a physical move. Changing the rack mask does change the encoded native basename and its check character; the identity remains the seven-character ordinal. References should therefore use the stable identity, not cache a mutable native path.

### 1.2 Path length and scale

A flat layout removes virtual depth from native path-length calculations. For a drive-root path such as `D:\`, a 12-character directory designation yields a 15-character directory path; appending `\.system\universal.json` yields 38 characters, excluding the terminating null. Additional root prefixes and content paths must still be bounded by the actual platform. The architecture uses 8.3-shaped names, not a promise of full legacy DOS compatibility; `.system` and `universal.json` are not strict legacy 8.3 components.

A single native parent with billions of children is not a realistic deployment target. Nonsemantic sharding, if required by measured filesystem performance, may be introduced without changing virtual composition. Sharding is not the rack mechanism. Encoding II explicitly permits reserved expansion directories; physical partitioning and expansion policy remain to be specified. Logical depth is limited by explicit traversal budgets, cycle checks and available resources rather than by the compact directory name.


## 2. Encoding I: address grammar and allocation

```text
XXXXXXXC.RCK
|-----|| |--|
   ID  C MASK
```

Use ASCII alphabet `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`, with uppercase as the canonical form and case-insensitive input. The first seven positions encode the ordinal identity in base 36. The eighth position encodes the check value or an exception sentinel. The dot is mandatory. The last three positions encode the rack mask in base 36, restricted to values 0 through 32,767.

| Field | Width | Domain |
|---|---:|---|
| ID | 7 | 0 through 36^7 − 1 |
| C | 1 | `0–V` CRC; `W–Z` exception candidates |
| Delimiter | 1 | `.` only |
| RCK | 3 | `000–PA7` valid; `PA8–ZZZ` unassigned |

### 2.1 Sentinel reservations

| Allocation | Inclusive range | Count |
|---|---|---:|
| Lower sentinel block | `0000000–00000SF` | 1,024 |
| Ordinary identities | `00000SG–ZZZZZ7J` | 78,364,162,048 |
| Upper sentinel block | `ZZZZZ7K–ZZZZZZZ` | 1,024 |
| Total identity space | `0000000–ZZZZZZZ` | 78,364,164,096 |

The identity space is 36^7. Subtracting the two reserved blocks yields the usable population. The former eight-character ordinal design provided 36^8 = 2,821,109,907,456 values before reservations. Moving the last position to integrity reduces raw ordinal capacity by a factor of 36; using CRC-5 instead of another check scheme does not further reduce it.

Sequential allocation starts at `00000SG`, advances by one in base 36 and never wraps into a sentinel block. Reserved values are never allocated as ordinary identities. Encoding II may assign a subset to namespace expansion through a registered sentinel role. A suggested policy is monotonic allocation with no identifier reuse, including after deletion; exhaustion must halt allocation. A synchronized allocation high-water mark and durable tombstones would prevent accidental reuse under concurrency and recovery. The policy is not yet adopted.

### 2.2 Address versus identity

There are 2,567,836,861,988,864 possible ordinary identity/mask pairs, not that many independently existing directories. Each pair has one ordinary canonical CRC character for a fixed algorithm. Only one live record for an identity should exist within the root. Root or namespace identity is required when composing multiple managed roots; the seven-character field alone is not globally unique across unrelated installations.

Parsing requires exact length, ASCII normalization, delimiter and bounds checks before ordinary resolution. Reject malformed input, out-of-range masks and sentinel identities unless an explicit sentinel protocol applies. Unknown or unverified exceptional designations are never treated as ordinary addresses.


## 3. Encoding II: adaptable profiles and namespace expansion

Encoding II addresses two independent resource constraints: a small permissible physical directory population, and demand for more than fifteen rack flags. Both mechanisms may be used separately or together. The native 8.3-shaped envelope, case-insensitive base-36 alphabet, single integrity character and metadata-based virtual composition remain unchanged.

### 3.1 Reserved directories as namespace expansion points

An explicitly registered reserved directory identifier may designate an expansion point rather than a content directory. The expansion directory contains the root of another managed directory environment. Its local `.system` record describes the child namespace and its profile. The parent namespace also records the relationship, and external replicas preserve it. An expansion point is not a rack or a virtual branch merely by virtue of its role.

```text
ROOT/                              Namespace N0
  .system/                         N0 profile and expansion registry
  00000SG?.005/                    Ordinary Encoding I directory
  <reserved-ID>C.RCK/              Registered expansion point
    .system/                       Namespace N1 root and profile
    IIICRRRR.RRR/                  Ordinary Encoding II-4 directory
    <reserved-ID>C.../             Further expansion, if permitted
```

The diagram uses placeholders rather than literal directory names; actual child names always follow one declared 8.3 profile, with exactly one dot. For a three-character identity profile, a child name has the form `IIICRRRR.RRR`. Reserved expansion points have their own role-specific validation; ordinary directory allocation must never enter the sentinel ranges.

A namespace may impose a small operational cap on ordinary children independent of theoretical capacity. Once that cap is reached, another registered expansion point can host additional directories. Count administrative entries and expansion roots when evaluating a native parent limit. The allocation policy must bound physical depth, total namespaces, per-namespace children and path lengths. Expansion never implies unbounded recursion or automatic authority inheritance.

### 3.2 Adjustable allocation of the ten payload characters

The ten characters remaining after reserving one integrity character are divided into an identity field and a rack field. Let n be the number of identity characters and m = 10 − n the number of rack characters. Place the check character immediately after the identity; insert the dot after the eighth character of the complete undotted designation. Concatenate the rack characters across the dot before numeric decoding. For m rack characters, the unrestricted bit count is floor(log2(36^m)).

| Profile | Name pattern | ID chars | Rack chars | Rack bits | Usable IDs per namespace |
|---|---|---:|---:|---:|---:|
| I | `IIIIIIIC.RRR` | 7 | 3 | 15 | 78,364,162,048 |
| II-1 | `IIIIIICR.RRR` | 6 | 4 | 20 | 2,176,780,288 |
| II-2 | `IIIIICRR.RRR` | 5 | 5 | 25 | 60,464,128 |
| II-3 | `IIIICRRR.RRR` | 4 | 6 | 31 | 1,677,568 |
| II-4 | `IIICRRRR.RRR` | 3 | 7 | 36 | 44,608 |

The profile labels are proposed. Capacity is 36^n − 2,048 when retaining 1,024 lower and 1,024 upper reserved identifiers. The two-character identity space has only 1,296 values, so it cannot retain these two disjoint reservations. Profiles below three identity characters require a separately authorized sentinel policy; they are not part of this proposal.

| Profile | Valid rack masks | Unassigned mask encodings | ID bits for CRC | Payload bits |
|---|---:|---:|---:|---:|
| I | 32,768 | 13,888 | 37 | 52 |
| II-1 | 1,048,576 | 631,040 | 32 | 52 |
| II-2 | 33,554,432 | 26,911,744 | 26 | 51 |
| II-3 | 2,147,483,648 | 29,298,688 | 21 | 52 |
| II-4 | 68,719,476,736 | 9,644,687,360 | 16 | 52 |

The mask domain is 0 through 2^b − 1, where b is the profile's rack-bit count. Every bit combination is representable. The surplus base-36 values remain unassigned, and are rejected during ordinary resolution. The mask count is not the number of independent racks. The CRC payload widths use ceil(log2(36^n)) identity bits and b rack bits. These mathematical capacities have been recalculated; Encoding II checksum behavior has not yet undergone destructive testing.

### 3.3 Namespace identity and profile binding

The short ordinal is unique within its declared namespace. The proposed stable reference is `(namespace-id, ordinal-id)`; the namespace ID itself is independent of its native path and must be allocated without collisions. A parent expansion entry records its child namespace ID, registered expansion role and expected profile version. Moving a namespace does not imply a change to its identity. Cross-namespace links must retain both namespace and ordinal, never an unqualified local ID.

The profile is not encoded in the 8.3 name. Before interpreting a name, the management engine must obtain a verified namespace profile from the root record and corroborating external evidence. Never guess the CRC position by trying several profiles until one passes. A wrong profile can parse a name as a different valid identity and mask; CRC-5 alone is not a reliable profile discriminator.

Illustrative payload for the root Lattice record (not a replacement for its reference structure):

```json
{
  "encoding-family": "II",
  "profile-id": "II-3",
  "profile-version": 1,
  "radix": 36,
  "identifier-characters": 4,
  "integrity-position": 5,
  "rack-characters": 6,
  "rack-bits": 31,
  "lower-sentinel-reservation": 1024,
  "upper-sentinel-reservation": 1024,
  "expansion-enabled": true
}
```

The full binding must additionally carry the namespace identity, parent reference, profile digest/version, CRC algorithm version, rack registry, physical allocation bounds and registered expansion roles. Profile changes, expansion creation and migration require explicit authorization, durable evidence and validation. Missing, conflicting or unsupported profile data must fail closed.

### 3.4 Cross-namespace racks and profile migration

Rack bits are local positions interpreted through a verified rack registry. A cross-namespace view must bind local positions to stable rack identities; bit 3 in one namespace need not mean bit 3 in another. Expansion directories are traversed according to the namespace registry, not merely the mask of the expansion entry, unless an explicit traversal policy establishes otherwise. Inclusion of a directory never grants access authority.

A change in profile may shorten the identifier field, move the integrity position and alter rack capacity. It is therefore a controlled namespace migration, not a cosmetic rename. Proposed default: a namespace profile is immutable during ordinary operations. Migration must verify that every ordinal and mask fits the destination, preserve stable references or record an explicit mapping, stage new names and records, recompute check values, detect collisions and preserve recoverable checkpoints. If values do not fit, allocate a new namespace and an explicit mapping or deny migration. Do not truncate identifiers, silently discard rack bits or reuse sentinel identities. The implementation and governance of cross-profile migration remain open.


## 4. Rack masks and virtual branches

The rack is a simple selector, not a storage partition, hierarchy, access-control mechanism or executable predicate. In Encoding I the extension itself is the bitmap; in Encoding II the rack field can extend left of the dot. The following examples use Encoding I. Three base-36 characters provide 46,656 numeric values; fifteen independent binary flags require 2^15 = 32,768 values. A sixteenth independent flag would require 65,536 values and cannot be supported without restricting combinations. The remaining 13,888 values are unassigned; reserve them rather than silently interpreting them as masks.

| Mask | Decimal | Included racks (zero-based) |
|---|---:|---|
| `000` | 0 | None |
| `001` | 1 | 0 |
| `002` | 2 | 1 |
| `003` | 3 | 0, 1 |
| `005` | 5 | 0, 2 |
| `00A` | 10 | 1, 3 |
| `PA7` | 32,767 | All 15 |

Rack r includes directory d exactly when its existence is verified and `(mask(d) & (1 << r)) != 0`, where r is 0–14 in Encoding I and 0 through b − 1 for a profile with b rack bits. Inclusion is encoded by 1; exclusion by 0. No external per-rack bitmap or inclusion/exclusion polarity is required. The root remains the universe of allocated directories, including those with no selected rack. A missing or invalid record is an unresolved state, not proof of exclusion.

Bitwise OR sets membership, AND with a complemented bounded bit clears membership, XOR toggles membership, and AND tests membership. Set operations on selected directory populations can form overlays or working sets without changing the primitive. Rack names and purposes can be registered at root level; membership never confers authorization. A rack is not a snapshot unless separately bound to versioned content and metadata.

### 4.1 Virtual composition

| Directory identity | Semantic designation | Rack mask | Example virtual parent |
|---|---|---|---|
| `00000SG` | Research | `005` | Branch root |
| `00000SH` | Mathematics | `003` | Research |
| `00000SI` | Computation | `001` | Mathematics |
| `00000SJ` | Engineering | `004` | Research |

A rack selects a population; branch metadata establishes its relationships. Selection does not determine composition. The example admits Research and Mathematics in rack 0, but rack 1 selects Mathematics without its Research parent. The branch resolver must have an explicit policy for absent parents (e.g., reject the view or display an explicitly marked disconnected component), never silently synthesize membership.

A branch root (a semantic composition root, distinct from a physical namespace expansion root) carries its own branch identity, name, root reference, constituent references, relationship records, ordering if applicable, provenance, generation and validation state. Relationships can support alternate compositions without copying data. The initial proposal is a rooted acyclic hierarchy per branch; multi-parent graphs and cross-branch relations require separate semantics. Traversal must detect cycles, missing edges and exhausted budgets. Deletion and virtual unlinking are separate operations.


## 5. Lattice metadata and external redundancy

Each directory contains a Universal Construct record. The source Lattice template uses five blocks, with `$cry-ref` indirection and explicit `$sentinel` values. Its structure is retained rather than replaced with a flattened metadata format. The root directory, namespace expansion root and branch-root constructs use the same architecture, with contextual role determining their subject. The namespace profile and expansion registry are additional proposed reference-bound data; the source template is not modified by this paper.

| Lattice block | Directory application (proposed binding) |
|---|---|
| `block-0` | Self, designation, external identifiers, lineage, structure and relations |
| `block-1` | Safeguards, lifecycle, integrity, backup, fallback, recovery and audit |
| `block-2` | Directory-specific arbitrary data, including extended integrity observations |
| `block-3` | Reference selectors, matching, locks and validation state |
| `block-4` | Reference-bound data in core, active and safety contexts |

Store the real human-readable directory name through `identification.designation`, the ordinal and root namespace through `identification.external-identifiers`, and directory or branch role through `identification.contextual-role`. Preserve `core.lineage`, `core.continuity`, `structure.relations` and `structure.boundaries`. Contextual branch relations belong to the branch representation, not to intrinsic directory identity. Reference locks and context bindings must be validated before trusting the associated values; unrecorded data remains explicitly unrecorded.

The local `.system/universal.json` filename and exact reference payload schema remain proposed. The original template does not define the directory-specific fields or W–Z semantics. A stronger digest, algorithm version, generation, expected and observed designations, rack mask and exact population-count observations can be bound through integrity fields and directory-specific data. Digest scope and canonical serialization must be defined; avoid self-referential digest fields by hashing a specified projection or detached record.

### 5.1 Redundancy architecture

| Representation | Intended responsibility |
|---|---|
| Local Lattice JSON | Embedded identity and self-description |
| External JSON mirror | Portable, inspectable identity and metadata copy |
| External SQL store | Indexed management, membership and relationship queries |
| Third external record | Proposed independent recovery ledger/checkpoint history |

The target is one embedded record plus three external representations. The third representation is not yet fixed. SQL may be rebuilt from verified records if designated a derived index. Redundancy requires independent failure domains and provenance; four copies on one disk are not four independent backups. Metadata redundancy does not by itself back up file contents.

A reconciler should compare identity, generation, authenticated or otherwise trusted provenance, expected designation and digest across available records. A majority vote alone is insufficient: replicas may share a stale or corrupt origin. A proposed write-ahead journal records intent and completion; verified checkpoints support replay or restoration. Missing or contradictory authoritative evidence must halt unsafe transitions. The authority model and commit/recovery ordering are open engineering decisions.


## 6. Integrity engineering and exceptional states

The integrity character (eighth in Encoding I, immediately after the ID in Encoding II) provides one of 32 CRC-5 values encoded as `0–V`, or one of four reserved values `W–Z`. CRC-5 is a compact error detector, not authentication or authorization. It does not protect file contents, detect all substitutions, or prove metadata integrity. Stronger independent verification belongs in the Lattice and redundancy layers.

### 6.1 CRC candidate profile

The stress-test harnesses serialize the identity into 37 bits and the rack mask into 15 bits (52-bit payload), most-significant bit first, with initialization and final XOR both zero. The dot and check character are excluded from the payload calculation. Appending the five CRC bits logically permits a zero-residue check over the binary codeword; the check bits are physically stored before the dot, so verification must reconstruct the logical order. The complete eight-character base-36 integer is not the CRC codeword.

| Candidate | Generator polynomial | Status |
|---|---|---|
| Baseline | x^5 + x^2 + 1 | Tested, not finalized |
| Parity-preserving | x^5 + x^4 + x^2 + 1 | Tested, not finalized |

Both detect single-bit errors and binary bursts spanning at most five bits in the serialized codeword. The second polynomial has factor (x + 1), guaranteeing detection of odd-weight codeword errors. These guarantees concern the specified binary serialization, not arbitrary base-36 character changes. A CRC cannot guarantee detection of all two-bit errors across this payload with only 32 check values. Polynomial selection, versioning and reference vectors are required before implementation. Encoding II proposes the same logical ordering with profile-specific payload widths from Section 3.2. Validate the profile separately; the checksum alone does not attest namespace or profile identity. New vectors and destructive tests are required for each profile, especially the 51-bit payload of II-2 and split-field parsing.

### 6.2 Exceptional-state dispatch

| Character | Proposed meaning | Required response |
|---|---|---|
| `W` | Alternate verification requested | Stop normal resolution; consult authorized validation policy |
| `X` | Integrity failure recorded | Isolate, preserve evidence, inspect records |
| `Y` | Recovery required | Refer to authorized recovery plan |
| `Z` | Critical or indeterminate state | Halt and quarantine |

The four assignments are proposals, not existing Lattice definitions. They bypass only the ordinary CRC comparison as a routing choice, not the integrity requirement or any security gate. A recognized sentinel supplies no authority and is not itself proof that the encoded identity or mask is trustworthy. A corrupt normal character can become W–Z accidentally; thus the exception route must never be more permissive than normal verification. Inspect local metadata only in a constrained, separately authorized context, using independently trusted records to identify the subject and assess integrity.

Existing Lattice defaults include `integrity-failure: ISOLATE_AND_HALT`, `unrecognized-sentinel: FAULT_CLOSED`, `integrity.on-mismatch: DENY_AND_QUARANTINE`, `recovery.automatic-recovery: DENY`, and `audit.silent-error-suppression: DENY`. These are the governing basis for exception processing. A failed CRC must not trigger an automatic rename or grant a recovery operation. Return to ordinary representation only after verified reconstruction and explicit authorized transition.


## 7. Management, recovery and verification

A dedicated deterministic management layer is necessary because native filesystem tools do not understand the virtual hierarchy, rack masks, reference locks or redundancy contract. Ordinary operations should not depend on an LLM. Raw filesystem changes are possible unless separately prevented by operating-system controls; therefore the manager must detect unauthorized or out-of-band changes rather than assume exclusivity.

| Proposed utility | Responsibility |
|---|---|
| `dir-create`, `dir-list`, `dir-resolve` | Allocate, enumerate, resolve semantic and encoded identities |
| `dir-rename`, `dir-move`, `dir-copy` | Semantic rename, virtual reparent, identity-aware duplication |
| `dir-delete`, `dir-search`, `dir-inspect` | Controlled retirement, query and inspect |
| `rack-set`, `rack-clear`, `rack-test` | Modify or inspect encoded membership |
| `branch-export`, `branch-import`, `branch-audit` | Transport, reconstruct and verify compositions |
| `namespace-inspect`, `namespace-expand` | Validate profiles; stage registered expansion environments |
| `profile-verify`, `profile-migrate` | Check profile compatibility; stage controlled migration |
| `dir-verify`, `dir-reconcile`, `dir-recover` | Cross-check records and execute authorized recovery |

These are functional names, not a requirement for separate executable programs. An initial implementation could expose one CLI and a deterministic library. The interfaces should distinguish lookup, inspection, staging and mutation, returning explicit sentinels for malformed, missing, ambiguous, unverified and denied states rather than overloaded nulls or implicit permissions.

### 7.1 Proposed mutation protocol

1. Resolve and verify the namespace and profile, then parse and validate the requested operation, identity, expected generation, rack mask and authorized scope.
2. Resolve identity to the current native path from verified metadata or an index; verify the CRC or dispatch an exception. Do not follow untrusted symbolic links, junctions or path escapes.
3. Acquire the relevant lock, recheck generation and stage an intent record with old/new names, metadata and affected relations.
4. Apply authorized physical and metadata changes, including recalculating the check character if the mask changes. Validate staged state and update redundant representations under a defined durability protocol.
5. Commit and record the new generation only at the declared commit point. On interruption, preserve evidence and reconcile against the journal before exposing the result as ordinary state.

No native rename and external SQL/JSON updates can be assumed to form a single atomic transaction. The manager needs explicit crash-consistent state transitions, idempotent replay and a verified rollback or recovery plan. Concurrent writers, duplicate IDs, stale handles, external mutations, disk-full conditions and partial replication must be tested. Copying should normally allocate a fresh identity; virtual linking should retain identity. Deletion should be distinct from rack exclusion and branch unlinking.

### 7.2 Authorization boundary

CRC success proves only a check relation. Rack visibility, semantic resolution, file reads, writes, execution and publication are separately authorized. A checksum, name, JSON value or exception marker must not grant privilege. Enforce fail-closed defaults, monotonic non-escalation, auditability and authorized recovery. In the current research context, production remains locked; the paper does not enact any operation or modify the Lattice source.


## 8. Research evidence and development roadmap

A prior research cycle investigated preserving the population counts of the identity, check character, complete first block, mask and arithmetic sum in one character. Let I be the ordinal, C the check value, B the mask, A = 36I + C and S = A + B. Exact counts P(I), P(C), P(A), P(B), P(S) cannot generally be independently encoded in one base-36 character. A direct modulo-three fixed-point equation failed to produce a valid character in 6,982 of 20,000 archived trials. A parity-and-ranking hybrid guaranteed encodability but weakened short-burst detection. Retain exact bitness observations in metadata instead of imposing the hybrid on the primary check.

| Archived primary harness test | Valid trials | Hybrid missed | CRC-5 missed |
|---|---:|---:|---:|
| Single identifier bit | 358,635 | 0 | 0 |
| Single rack bit | 150,000 | 0 | 0 |
| Two payload bits | 95,752 | 4,856 | 1,552 |
| Three payload bits | 93,570 | 0 | 3,075 |
| Two-bit burst | 97,775 | 5,354 | 0 |
| Five-bit burst | 97,580 | 1,875 | 0 |
| Rack increment | 99,996 | 2,268 | 0 |

The archived sweep of 32 selected identifiers × 32,768 masks produced 1,048,576 hybrid constructions without encodability or parity violations, but 21,638 adjacent-mask check collisions against zero for the baseline CRC in that sweep. The parity-preserving CRC also missed zero sampled bursts of lengths two through five and zero sampled three-bit errors. Results are from the archived deterministic harnesses, inspected for this paper; not an exhaustive proof over all identifiers or a fresh benchmark. The selected polynomial remains an open decision. No performance or security certification is claimed.

### 8.1 Proposed development gates

| Stage | Required evidence before advancing |
|---|---|
| 1. Freeze encodings | Both grammars, sentinel/expansion registry, CRC profile and vectors |
| 2. Bind Lattice | Versioned reference schema, authority and integrity projection |
| 3. Build primitives | Bounded profile parser, allocation, masks, expansion and CRC library; regression tests |
| 4. Simulate management | Mixed-profile namespaces, branch and migration tests; transaction/crash and replica fault injection |
| 5. Pilot native storage | Measured filesystem limits, concurrency, security and recovery verification |
| 6. Production review | Independent attestation and explicit operator clearance |

### 8.2 Outstanding decisions

Freeze profile names and allowed ranges, expansion sentinel roles, namespace identity and rack registry rules, migration authority and traversal limits. Freeze the W–Z mapping, third external representation, identifier reuse policy, branch orphan/multi-parent semantics, authority and reconciliation model, CRC versioning and physical distribution policy. Define exact metadata schemas, content backup scope, lock protocol, and the native path resolution index. None of these should be silently promoted from proposal to requirement.

### Source and provenance

Primary architecture source: operator-directed design conversation, 25 November 2026. Lattice source inspected: `alia-june/this-repository-machine-interface`, `.ai.system.logic/ai.Lattice_Universal_Construct_Empty_Blocks.json`, blob `c2820295c8fd7dadfe99b00e04feee18765d2abb`. Repository front door: https://github.com/dastardlyrat/this-repository-machine-interface. Template: https://github.com/alia-june/this-repository-machine-interface/blob/main/.ai.system.logic/ai.Lattice_Universal_Construct_Empty_Blocks.json. Research evidence: archived `stress.cpp`, `results.txt`, `stress_parity.cpp`, `results_parity.txt` (checksum_research). Encoding II addition: operator-directed adaptability and expansion, with AI-proposed profile calculations and engineering constraints. Design initiation and direction: human operator; mathematical synthesis and paper drafting: AI-assisted; archived tests: deterministic C++ harnesses. No external repository changes were made.
