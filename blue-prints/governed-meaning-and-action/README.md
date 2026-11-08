# Governed Meaning and Action

An instruction can supply a purpose without settling what should be done. Before an assistant acts on an interpretation, the person giving the instruction should be able to see what the assistant took it to mean, what it inferred, and what operation it proposes. The authority to approve that operation belongs to the applicable reviewer and extends to the proposal they actually reviewed.

## From source to a reviewable proposal

Keep the source statement, the interpretation, and the proposed action distinguishable. Record which claims were supplied, which were inferred, which premises were adopted, and which questions remain unresolved. A derivation record shows how a conclusion was reached. A checked proof establishes what follows under the premises and rules that were checked. A claim about the state of a file, system, or institution still requires evidence about that state.

In Redux, aPROMPT uses a shared catalog of engineering axioms. The project uses those requirements to generate prompts and identifies where specific requirements are enforced in code. A prompt can explain why a destination must be fresh. The publication routine must enforce that condition at the point of publication. The receipt then records evidence about the particular operation. The instruction, the enforcement, and the receipt serve different purposes.

## A recovery request

Suppose someone asks to “recover the last good copy of the report.” The phrase leaves the object, generation, destination, and meaning of *good* to be resolved. A reviewable proposal identifies the retained report and its exact generation, names a fresh destination, and states the acceptance checks. In the local aPROMPT API, those checks can include a typed assertion about a JSON field, such as requiring a status value to equal `"ok"`.

When the request goes through the sistermachine adapter, the reviewer approves the exact prepared packet. The adapter can invoke one supported local operation after the conditions designated for it evaluate true. If the selected generation, destination, or acceptance criteria change, the revised packet requires its own approval.

Recovery checks the retained bundle and applies the declared acceptance checks before publication. The receipt can support a claim about the verified files and JSON assertions. A claim that an application is functioning requires evidence of application behavior. If publication may have occurred but a terminal receipt could not be verified, the effect remains uncertain. Inspect the destination and retained records before deciding whether to authorize another attempt.

## Adopting a contract and approving an action

The September 28 sistermachine registry proposal separates governance of the contract from the operational state of the request. A recovery contract can be reviewed while authority to adopt it remains unresolved. Adoption concerns an exact contract version and a decision by an authority whose scope is established. Operational approval concerns an exact prepared request. An execution receipt concerns what the runtime attempted and what its evidence supports.

The proposed handshake has a separate purpose. It concerns which parties and package are involved, which versions and capabilities are offered, and what was received. An authenticated exchange can establish facts about that exchange. Execution still requires its own approval.

The same distinctions apply to provenance. A verified digest supports a claim about the bytes examined. Origin, authority, adoption, and operational outcome each require evidence appropriate to that claim.

## Requirements, validation, and attestation

The proposed u\* design separates **definition and proof** from **execution**. Either kind of work can be governed by one of two sets of obligations.

- **Permissive** means hardened and requiring. The governing contract states and enforces mandatory requirements.
- **Restrictive** is onerous, validating, and attesting. It adds prescribed validation, supporting evidence, and an attributable account of what was checked and what the check found.

Recursion makes the distinction practical. A retry or restart remains subject to its declared scope and overall work budget, including work already spent. A restrictive policy would also prescribe how compliance is validated and attested. Termination, bounded resource use, and completion of the requested work each call for their own evidence.

## Status and provenance

**Implemented locally.** aPROMPT 1.1.0 provides the Python adapter and bounded file operations used in the recovery example. The adapter evaluates a limited set of Boolean expressions over supplied facts, preserving unknown values where applicable. Its approval gate applies to the adapter. Direct local API calls have a separate entry point.

**Explored through comparisons.** The representation experiments compared authored human-readable, machine, and formal examples under bounded checks. Compact formulas saved space in some cases, while the standalone indexed representation grew once its dictionary was included. The live interpretation test was withdrawn.

**Proposed.** The September 28 registry, including its acceptance, provenance, and handshake work, was preserved as a proposal pending adoption. The broader natural-language front end and u\* language remain development work.

This note is an AI-assisted synthesis of the Redux design discussion and project artifacts. The recovery scenario is illustrative and follows the documented local operation. The definitions of permissive and restrictive follow the author’s explicit correction in the design discussion.

- [Research ethics and scoped consent](../../README.md#begin-with-the-doctrine)
- [Programming doctrine and evidence](../../README.md#programming-doctrine)
