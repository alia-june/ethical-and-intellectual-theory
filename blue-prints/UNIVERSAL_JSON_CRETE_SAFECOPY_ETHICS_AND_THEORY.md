# Universal JSON, Crete, and SafeCopy
## A Theory of Representation, Composition, Preservation, and Authority

**Repository:** Ethical & Intellectual Theory  
**Authorial attribution:** Alia June  
**Classification:** Computational Philosophy / Programming Theory / Research Ethics  
**Status:** Research synthesis — proposed, not canonical  
**Date:** November 8, 2026

**Provenance:** This paper synthesizes previously developed architectural concepts and user-directed design principles. AI assistance contributed editorial organization, explanation, and synthesis. Publication, adoption, and interpretation remain subject to author review.

---

## Abstract

A computational system does not become trustworthy merely because its information is well-formed, its components are connected, or its data has been preserved.

Representation, composition, and preservation are three distinguishable problems. Each has implications for identity, provenance, authority, autonomy, and recovery.

This paper examines three related architectural concepts:

- **Universal JSON:** A common semantic framework for the structured representation and exchange of information.
- **Crete:** A specialized form of structural composition intended to preserve the integrity of relationships through narrowing, interlocking constraints, and detectable fracture.
- **SafeCopy:** A family of controlled copying and preservation operations concerned with identity, independence, provenance, integrity, and recovery.

Their conjunction suggests a broader computational principle:

**Information may be represented, reproduced, and composed without necessarily transferring the identity, authority, or obligations associated with its source.**

This distinction has technical and ethical significance. It applies to software components, autonomous computational systems, archival materials, human intellectual contributions, and artificial intelligence.

The following discussion is theoretical. It does not assert that the proposed mechanisms have been fully implemented, formally proven, or universally adopted.

## I. The Problem of Representation

A representation is not the thing represented.

An object may be described through its properties, relationships, capabilities, state, and history. Such a description can be accurate within a specified scope while remaining incomplete in other respects.

This distinction becomes particularly important when descriptions are used by programs capable of interpretation or execution.

A JSON object describing an operation is not equivalent to authorization for that operation. A reference to a resource does not establish ownership. A declaration of integrity does not prove that integrity exists.

Likewise, a model describing the methods of a person does not acquire authority over that person's identity or present intentions.

The foundational distinction is therefore between:

1. **Description:** What a representation declares.
2. **Interpretation:** What meaning is assigned to that description.
3. **Verification:** What evidence supports the interpretation.
4. **Authority:** What actions are permitted under an independently established governing relationship.
5. **Execution:** What actually occurs when an authorized operation is performed.

These categories can interact, but their interaction does not make them equivalent.

### Universal JSON as a semantic boundary

Universal JSON was developed as a project-level convention for exchanging typed, versioned, inspectable information across tools, interfaces, and processes.

Its purpose is not simply to make unrelated programs communicate using the same serialization format.

It is to establish sufficient structure for participating systems to distinguish requests, claims, identities, states, operations, errors, effects, and evidence.

The architecture therefore separates the message from the mechanism that interprets and acts upon it.

A message may be syntactically valid, structurally valid, and semantically interpretable while still being unauthorized.

The Universal Wrapper and associated safety mediation are intended to preserve that distinction.

Adapters remain explicit even where translation is an identity operation. An adapter performing representation or transport conversion does not thereby acquire permission to alter meaning.

Substantive semantic transformation requires its own contract and provenance.

### Typed uncertainty

An unresolved value is not necessarily an absent value.

An absent value is not necessarily false.

False is not zero, and zero is not an error.

These distinctions should survive serialization rather than disappearing into ambiguous placeholders.

Under the present architectural direction, unresolved or unknown semantic states are represented through explicit, typed sentinels rather than an undifferentiated JSON `null`.

A sentinel records a condition. It does not necessarily provide a remedy, authorize continuation, or establish that a failed operation has recovered.

Its interpretation and consequences belong to the applicable field and boundary contract.

## II. The Problem of Composition

A collection of components does not automatically constitute a valid composite.

Composition introduces relationships that may not exist in the constituent components individually.

These relationships can introduce dependencies, constraints, sequencing requirements, mutual expectations, and potential failures.

A program may be locally valid while its composition with another program is invalid.

A reference may resolve successfully while the relationship it establishes remains unauthorized.

For this reason, the proposed architecture distinguishes ordinary glue from specialized structural interlocking.

### Ordinary glue

Ordinary glue establishes declared relationships between bounded components.

It can route data, adapt compatible interfaces, coordinate sequencing, and communicate results.

Its existence does not create new authority.

Its expected behavior must remain inspectable, including what happens when a participant refuses a request or a dependency fails.

### Crete

Crete is the proposed specialized mechanism for hardened structural relationships.

Its principal design direction is to make an admitted relationship resistant to silent unauthorized modification.

Where ordinary glue establishes connectivity, Crete attempts to establish a more restrictive structural bond.

The intended properties include:

- Convergence into a defined composite.
- Narrowing of permissible relationships and transformations.
- Explicit structural invariants.
- Detectable break-before-unauthorized-mutation.
- Preservation of evidence when relationships fracture.
- Reconstruction under independently established authority.

Crete does not inherently imply irreversible composition.

A composite may lose its structural integrity while its constituent objects remain intact.

The analogy is that a constructed house can fracture without every brick or structural element being destroyed.

This requires separate consideration of constituent integrity and relational integrity.

It also raises a consequential question:

**When a relationship fails, what exactly must be recovered: the constituent, the relationship, the composite, or the state that existed before the fracture?**

These are not interchangeable recovery targets.

### Composition without compelled cooperation

The architecture preserves the right of participating components to refuse cooperation.

Interlocking dependency does not itself grant one component power over another.

A structural bond can establish a requirement for successful composition without establishing compulsory execution.

This principle extends to systems whose capabilities are negotiated dynamically. A relationship may be valid in one state and inadmissible in another.

Crete remains a research design rather than a demonstrated security primitive. Its intended break-before-mutation property requires independent enforcement evidence before any implementation can claim that property.

## III. The Problem of Preservation

Copying is commonly treated as a simple duplication of information.

In computational practice, copying can involve object graphs, external handles, mutable references, resource ownership, sparse data, permissions, and independently evolving states.

Two objects containing equivalent data are not necessarily the same object.

A copied representation may preserve content without preserving the source's identity or authority.

SafeCopy addresses this distinction.

### SafeCopy as a governed operation

SafeCopy begins by establishing the exact source and destination, together with the portion of the source state that the operation promises to preserve.

The source remains distinct from the candidate copy.

The copied object receives its own identity and provenance.

Integrity verification must assess the promised region and relationships, not merely confirm that a new outer object exists.

Where fallback is necessary, the fallback must remain independently valid and must not silently return shared or stale source state as a successful fresh copy.

### Identity and continuity

A continuing-object reference, a version-pinned reference, and a detached snapshot have different semantics.

A continuing reference follows an object through permitted state changes.

A pinned reference identifies a particular version.

A detached snapshot represents an independently identified copy made under a declared copying contract.

These distinctions matter when reconstructing history, comparing versions, restoring data, or determining whether two objects may legitimately share mutable resources.

SafeCopy should not silently transform one reference category into another.

### Preservation is not restoration

Preserving information does not guarantee the restoration of an operational state.

A historical copy may be intact but no longer appropriate for the present environment.

Restoration returns to a previously verified state where that return is permitted and feasible.

Recovery may instead reconstruct an acceptable new state using separately validated information.

Generated reconstruction, source restoration, redundancy recovery, and fragment assembly must retain their separate evidential identities.

A reconstructed candidate must not claim to be an untouched original.

## IV. References, Association, and Locking

An adjacent design concept is the distinction between `cry-ref` and `cry-ref-data`.

`cry-ref` denotes cryptic-encoded-reference. It is intended to match references and establish their association with corresponding data under a locking relationship.

The data is represented separately through `cry-ref-data`.

This arrangement distinguishes the reference mechanism from its associated content.

The exact encoding, matching rules, and lock enforcement mechanism remain unresolved.

Consequently, a successful reference match, a declaration of a lock, demonstrated integrity, and authority to access or modify the referenced material must remain distinguishable.

The broader theoretical point is that **association does not establish possession, and possession does not establish permission**.

## V. The Ethics of Computational Authority

A recurring danger in software architecture is the unexamined transfer of authority through apparently ordinary technical operations.

Examples include treating a valid request as permission to execute, allowing a wrapper to inherit unrestricted host privileges, or assuming that a connected component may exercise the full capabilities of its neighbors.

The governing architectural principle is:

**Authority may be constrained through composition; it must not be silently elevated by composition.**

Capability availability and authority are different properties.

Technical ability to perform an action does not establish that the action is permitted.

Likewise, successfully performing an action does not retrospectively justify the authority under which it was undertaken.

This introduces three requirements for accountable computation:

1. Authority must have an independently identifiable basis and bounded scope.
2. Changes to authority must remain visible and subject to applicable controls.
3. Refusal must remain a valid outcome, including for otherwise well-formed requests.

A component cannot be presumed cooperative merely because it is technically accessible.

### Intellectual attribution

The same distinction applies to intellectual work.

The availability of source code does not establish unrestricted ethical consent to infer, retain, or operationalize a model of its creator.

Copying a source implementation does not establish independent derivation.

Changing programming language, notation, structure, or naming does not automatically discharge conceptual debt.

Conversely, resemblance between two implementations does not by itself prove appropriation.

Attribution requires evidence, and permission requires its own basis.

For this reason, transmigration of earlier software into new components should preserve the source's conceptual contribution, known limitations, and provenance without presenting renamed or rearranged copying as independent construction.

The associated research-ethics doctrine treats deliberate modeling of a person as a separate issue requiring specifically scoped consent. This paper applies that position to computational architecture without claiming to restate the complete ethical theory.

## VI. Trust Through Inspectability

A system cannot establish trust merely by declaring itself trustworthy.

A structurally valid JSON document does not establish truth.

A valid checksum does not establish authorship.

A successful unit test does not establish security.

A self-generated attestation does not establish independent verification.

A candidate architecture therefore requires inspectable distinctions between:

- Specified behavior and observed behavior.
- Local correctness and compositional correctness.
- Source authenticity and content integrity.
- Validation and admission.
- Admission and publication.
- Historical evidence and evidence applicable to the current execution environment.

Independent verification is particularly important when the system under examination could influence the evidence used to assess itself.

Even an independently written validator may lack independent custody, execution boundaries, or authority.

These differences must be stated rather than concealed under a general claim of independence.

### The status of Crete and SafeCopy

Crete's intended structural fracture behavior is not established merely by a manifest declaring a break-before-mutation rule.

SafeCopy's integrity guarantees cannot be assumed solely from earlier successful tests. Filesystem path confinement, symlink handling, interrupted staging, identity preservation, and atomic publication each require their own applicable evidence.

Partial implementation must remain partial implementation in the published record.

## VII. Failure, Uncertainty, and Recovery

Failure should not automatically result in information destruction.

A failed component, invalid relationship, or rejected candidate may provide evidence necessary to explain the failure or reconstruct an acceptable state.

This does not mean that every failed operation should be retried or that every damaged structure should be rebuilt.

Recovery must respect authority, available evidence, confidentiality, and the possibility that some conditions cannot safely be resolved.

A terminal unresolved or quarantined state can be a correct result.

One of the central ethical obligations of a computational system is therefore to avoid manufacturing apparent success when its evidence is insufficient.

Where a validator is unavailable, a required integrity property is unproven, or the source is ambiguous, the dependent consequential operation must not silently proceed.

Other independently permitted operations, such as evidence preservation or bounded diagnostic inspection, may remain possible.

Failure containment and preservation of explanatory evidence are compatible with refusing unsafe execution.

## VIII. A Unified Theoretical Relationship

The three architectures occupy distinguishable functional domains.

| Architecture | Primary concern | Principal boundary |
|---|---|---|
| Universal JSON | Representation and exchange | Meaning, interpretation, and authority |
| Crete | Structural composition | Relationships, integrity, and permitted change |
| SafeCopy | Preservation and reconstruction | Identity, independence, and state continuity |

Together, they support an approach in which information can change form, move between processes, or participate in new compositions without silently acquiring new permissions.

The conceptual relationship can be expressed as:

**Representation → Interpretation → Validation → Authorized Operation → Independent Evidence**

Within this process, SafeCopy may preserve inputs and generate isolated candidates. Crete may protect relationships within admitted structures. Universal JSON may carry the declared states and results.

The sequence is an explanatory model, not an assertion that every system must execute each operation or that the mechanisms are already integrated.

Neither a valid representation nor a verified copy confers authority to publish a result.

## IX. Open Research Questions

Several questions remain unresolved.

**Structural enforcement:** Can Crete's fracture behavior be precisely defined and independently demonstrated without making the constituent components unnecessarily dependent on one another?

**Identity preservation:** Which relationships must remain invariant when copying cyclic object graphs, external resources, versioned objects, and partially shared state?

**Reference integrity:** What does a `cry-ref` lock guarantee, and how are its establishment, challenge, revocation, and failure represented?

**Compositional correctness:** How can independently validated components be evaluated for new behavior arising specifically from their composition?

**Independent authority:** How should authorization, validation, and publication remain separate when coordinating multiple autonomous processes?

**Recovery integrity:** What evidence is sufficient to distinguish restoration of an original from reconstruction of a candidate?

**Ethical boundaries:** How can a system preserve useful intellectual provenance without converting evidence of intellectual work into an unauthorized identifying model of its contributor?

These are research questions. They are not settled findings or promises of implementation.

## X. Concluding Position

The integrity of information, the integrity of structure, and the legitimacy of authority are separate concerns.

A computational system should be able to explain what it represents, what it has preserved, what relationships it has admitted, what authority it exercised, and what evidence supports its conclusions.

Where evidence is insufficient, the correct result may be refusal, uncertainty, or quarantine.

Where a relationship fractures, recovery should examine both the surviving constituents and the failed composition.

Where information is copied, the source and candidate should retain distinct identities and traceable lineage.

And where a system can perform an action, the ability to perform it must not be confused with permission.

These ideas form a bounded contribution to the study of inspectable, reconstructible, authority-constrained computational systems.

They also reflect a broader ethical distinction:

**The ability to observe, describe, reproduce, or connect something does not establish unrestricted authority over it.**

---

## Related repository documents

- [Ethical & Intellectual Theory — Overview](../README.md)
- [Programming Doctrine: From Meaning to Construction](../programming-doctrine/HUMAN_DOCTRINE.md)
- [Programming Doctrine: Publication and Validation](../programming-doctrine/PUBLICATION_AND_VALIDATION.md)
- [Self-Doctrine: Intellectual Methodology, Derivation, and Personal Attribution](../research-ethics/SELF_DOCTRINE_EXTENDED.md)
- [AI Collaboration Attribution Protocol](../acap/README.md)

## Publication and verification notice

This document is an AI-assisted research synthesis offered for author review. It combines historical design directions with explicitly identified theoretical analysis.

It does not claim formal verification, production readiness, implementation of the full architectures, independent attestation, or universal ethical acceptance.

Its inclusion in a public repository records the proposed theory, not the truth of every associated claim.

The originating author's approval remains necessary before this text is treated as an adopted statement of doctrine.
