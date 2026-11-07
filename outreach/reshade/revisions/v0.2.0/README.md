# Before You Use AI — ReShade Research Outreach

**Edition:** Proposed v0.2.0 | **Date:** 2026-11-07  
**Status:** Publicly readable staging draft; not deployed, not merged, not an official ReShade policy or community position.  
**Authority:** Proposed by the repository's research operator. Human approval for release is **pending**.

> **Don't begin with AI. Begin with the question, the people affected, and the tools that can answer it reliably.**

This document invites criticism of *our own research process*. It does not solicit third-party shader code, demand that others justify their refusal, or claim endorsement from ReShade, individual developers, or their communities.

## 1. Don't use AI — and why

An LLM is not the first choice for shader engineering or technical research. It can produce plausible but incorrect interpretations and cannot itself certify why an author made a decision. Consider avoiding it when:

- a compiler, linter, debugger, mathematical derivation, specification, human expert, or reproducible test already answers the question;
- independent evidence, deterministic numeric behavior, repeatable validation, or a reliable chain of custody is essential;
- code licenses, confidentiality, permissions, author wishes, or processing terms are uncertain;
- the proposed analysis would construct or archive an author-identifying methodological fingerprint;
- a creator has expressly declined the proposed use of their work;
- disclosure to an external model would be difficult to undo.

**Consent and safety:** Consent is the first threshold for *voluntary participation and source use*. It does not override safety, law, security, or rights held by others. Do not turn public availability into a claim of personal permission.

## 2. Do this instead

Start with paper, a specification, and a bounded question:

1. Describe the behavior, invariants, error conditions, and unknowns you wish to investigate.
2. Research accessible mathematical theory, authorized papers, graphics APIs, ReShade FX documentation, and the limitations of those sources.
3. Ask authors directly **only when a conversation is appropriate and welcome**. A refusal ends that line of inquiry; silence is not an invitation to try a different channel.
4. Use permitted compilers, linters, numerical reference programs, deterministic heuristics, test harnesses, and small expert systems.
5. If the research question is about *how a shader develops*, create your **own experimental shaders**. Document hypotheses, mistakes, tests, revisions, and decisions rather than guessing another programmer's full intent from a finished file.
6. Record provenance, permissions, evidence, uncertainty, and corrections; separate what a test verifies from what a model merely describes.

These methods are not automatically permitted for every third-party source; licensing and scope still matter.

## 3. If you use AI — objections from this research program

We object to unnecessary model dependence, unverified explanations presented as fact, unauthorized disclosures, ambiguous conceptual debt, and treating a programmer's intellectual identity as an extractable resource.

Before an AI-assisted step, state:

| Gate | Required documentation |
| --- | --- |
| Purpose | Why a model is needed; which non-AI alternatives were tried |
| Consent and source | Specific material, scope, creator restrictions, legal permissions, and third-party exclusions |
| Input and recipients | What is transmitted and who or what may receive it |
| Output and attribution | What is produced; independent contribution versus source-informed material |
| Validation | What independent numerical, functional, or security check can reproduce the result |
| Retention | What may persist, for how long, and what must be omitted or corrected |
| Change control | Who may authorize added uses, new recipients, or publication |

This is a research proposal, **not a statement of the broader ReShade community's objections**. No affiliation or approval by any named developer is implied.

## 4. The research cycle: create shaders to study development

The research question was not simply how to reproduce a particular shader. It was how software errors form, survive, propagate, become observable, and can be corrected and attested.

**Proposed research history (operator's account):**

```text
Publicly usable shading knowledge and mathematical theory
       |                                  |
       +---- general graphics / HLSL -----+
       +---- ReShade FX-specific needs ---+
                         |
          uneven documentation and unresolved requirements
                         |
         human theory + AI-assisted formulation + expert systems
                         |
             construct experimental shaders
                         |
          tests + revisions + error and provenance records
                         |
           analyze the observed development process
                         |
              corrected methods and new experiments
```

This describes the operator's stated method. It does not independently certify implementation, ownership, technical correctness, or absence of hidden dependencies. Experimental shader outputs are **research apparatus and observations**, not necessarily competitors to existing effects.

Small, loadable research services for documentation, validation, and attestation are an intended *complementary* architecture. Performance and market non-disruption are goals, not measured guarantees.

## 5. Decomposting is not mining

In this doctrine, *extractive mining* means stripping work or methodology for advantage without due permissions, recognition of conceptual debt, or respect for the originating person.

*Decomposting* describes a regenerative, provenance-preserving method:

**Decompose → Study → Reason → Learn → Respect provenance → Correct → Regrow.**

One proposed boundary is:

> **Hermetically seal Code A → identify permissible common Pattern B → disallow Code A − Pattern B.**

- **Code A:** the sealed source remains subject to its actual license and expressed use boundaries.
- **Pattern B:** independently supported, general computational knowledge that is legitimately transferable.
- **Code A − Pattern B:** a conceptual label for **excluded** source-specific material and potentially identifying methodological characteristics—not a file, a feature vector, a residual to compute, or something to archive.

**Do not derive and store the excluded residue to prove its exclusion.** If generalizable knowledge cannot be identified without forbidden access, extraction, or reconstruction, stop and use your own fixtures or an expressly consenting reference.

Similarity alone does not establish copying; stating an intention to be independent does not prove independence. The record must distinguish resemblance, actual source access, known dependencies, and uncertainty.

## 6. Depth oracle — offer our own mistakes for review

The operator's [ERRATA Record 02](../../../ERRATA.md#record-02) documents retrospective regrets about a CPU-reference tooling direction, whether existing `DisplayDepth.fx` work could have addressed requirements, and an unsuccessful community opening. These are **first-person reflections** and are not assertions about other participants' mental states or consent.

Review is welcomed on scoping, error detection, provenance, reliance on reference works, consent, and remediation. A private model conversation, if ever offered, must first be screened for third-party material and shared only under an explicit, appropriately limited agreement. **No link or private material is provided in this draft.**

For controlled new experiments, see the [provenance template](../../PROVENANCE_RECORD_TEMPLATE.md).

## 7. Your place in the ecosystem

A shader author may decline analysis. A critic may reject AI entirely. A user may report an error. A researcher may propose a deterministic alternative. No one must disclose source, participate in review, endorse a project, or supply a reason for declining.

This project welcomes correction of **its own methods**, including uncomfortable examples. Voluntary criticism does not become blanket authorization to publish someone else's words. See the [participation and consent procedure](../../PARTICIPATION_AND_CONSENT.md).

The proposed public forum, page, or side server is **not** in operation. A public staging repository is **not private**, and `noindex` metadata does not enforce confidentiality. Do not post confidential conversations or access tokens here.

---

**Decision boundary:** Draft preserved for review. It is not permission to merge, deploy, create invitations, publish private records, or represent third-party endorsement. Read the [initial draft](../../README.md), [archival principle](../../../DRAFT_INTENT_AND_PROVENANCE.md), and [change record](CHANGES.md).
