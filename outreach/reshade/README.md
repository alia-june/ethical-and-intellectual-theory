# Before You Use AI — ReShade Research Outreach

**Public edition:** v0.3.0 · 2026-11-07  
**Authority:** Personal ethical and technical research proposal; not an official ReShade policy, endorsement, or community consensus.

> **Begin by not using AI.** Define the research question, consider the people affected, and use directly verifiable methods wherever possible.

## 1. Don't use AI — and why

Language models can produce plausible but unsupported claims. Their explanations do not prove correctness, authorship, independent derivation, consent, or a programmer's intent. They can add computational cost while replacing reliable specialist tools with uncertain output.

Avoid AI especially when:
- A compiler, debugger, linter, mathematical proof, published specification, or reproducible test can answer the question.
- Exact numerical behavior, resource control, provenance, or independent attestation is required.
- Source code, logs, correspondence, or personal information would be disclosed without suitable authority.
- Rights, licensing, confidentiality, or the author's expressed restrictions on a proposed use are uncertain.
- The proposed analysis would reconstruct or archive someone's identifying intellectual methodology without specifically scoped permission.
- A creator has declined the proposed form of research.

**Public access is not blanket consent** to personal profiling. Equally, ethical objections, copyright protection, software licensing, and enforceable legal prohibitions should not be conflated.

## 2. Do this instead

1. Write down the *question* and measurable requirements, limits, invariants, and failure conditions.
2. Study authorized public mathematics, shading theory, graphics papers, HLSL and ReShade FX documentation, and relevant APIs.
3. Ask a person about their work only where appropriate and welcome. **A refusal ends the proposed contact; silence is not permission.**
4. Prefer conventional compilers, static analysis, numerical CPU references, differential tests, repeatable benchmarks, and direct inspection where permitted.
5. Where the goal is to study a development process, create **your own experimental shaders** and record hypotheses, changes, mistakes, tests, and corrections.
6. Retain a provenance ledger distinguishing permissions, observed events, inferences, reproducible evidence, and unresolved uncertainty.

See [Do This Instead: Technical Alternatives](ALTERNATIVES.md).

## 3. If you use AI — these are the project's objections

This research program objects to unnecessary LLM use, nonconsensual disclosure, unverified claims, missing attribution, and extraction of an author's identifying methodological characteristics. These objections are **not attributed to any external author or community**.

For every model-assisted activity record:

| Review gate | Required account |
| --- | --- |
| Necessity | Why conventional or human-led methods are insufficient |
| Permission | Exactly which materials and operations are authorized |
| Disclosure | Model/service recipients, excluded inputs, and confidentiality |
| Contribution | What the human, tools, and source material actually contributed |
| Verification | Independent tests and the limits of what they establish |
| Retention | Recipients, storage, correction, withdrawal, and deletion limits |

Consent to one activity does not grant permission for a different purpose, recipient, model training, public quotation, or persistent personal profiling. Safety and applicable law remain independent constraints.

## 4. Decomposting is not extractive mining

Here, *extractive mining* means stripping work or a creator's methods for advantage without respecting provenance, permissions, or contribution.

*Decomposting* is intended as a regenerative method:

**Decompose → Study → Reason → Learn → Respect provenance → Correct → Regrow.**

Conceptual boundary:

> **Hermetically seal Code A → identify independently corroborated, permissible common Pattern B → disallow Code A − Pattern B.**

- **Code A:** the original work remains subject to its actual permissions and restrictions.
- **Pattern B:** genuinely transferable, independently supported computational principles or error classes, not a disguised reconstruction.
- **Code A − Pattern B:** an **excluded category**, not a literal difference, a feature vector, or a residue to calculate, retain, or publish.

Do **not** construct or archive the excluded remainder in the course of trying to exclude it. If the general principle cannot be determined without breaching an applicable boundary, stop and use independent specifications, original fixtures, or a consenting reference. Similarity alone does not prove copying; a statement of independence does not establish it either.

## 5. Creating shaders to study shader development

The declared research cycle begins with broadly accessible shading theory and specialist ReShade requirements. Where the development process and documentation are not sufficiently observable, the researcher creates controlled experimental shaders through human-led theory, optional AI assistance, expert systems, and deterministic checks.

The shaders serve as **experimental apparatus**, generating a documented sequence of design decisions, errors, tests, revisions, and corrections for research into error propagation, documentation, and attestation. This is the operator's described purpose, **not** an independent certification of any particular implementation.

The larger architectural goal is small, interchangeable research/documentation/verification modules that can be loaded, executed, recorded, and unloaded. Non-disruption to games and LLM services is an **intended design property**, not an unmeasured guarantee.

**Depth-oracle case study: deferred pending external chat verification.** It is deliberately not included in this publication. No third-party code, private conversations, or unverified chronology is being presented here.

## 6. Your place in the ecosystem

Researchers, shader authors, gamers, conventional programmers, critics of AI, and independent reviewers may voluntarily challenge **our own research methods**. Participation, source sharing, and endorsement are never presumed. You may simply decline.

A private conversation record, if ever offered for review, must be screened for third-party content and covered by a separate agreement identifying materials, purposes, recipients, methods, and retention; **no such link or record is published here**.

Read the [participation procedure](PARTICIPATION.md), [blank evidence worksheet](PROVENANCE_TEMPLATE.md), and [release record](PUBLICATION_RECORD.md).

---

*Personal proposal, published as repository content. Not an official ReShade document, legal advice, completed technical attestation, or permission to process another person's work. [Historical drafts remain preserved](https://github.com/alia-june/ethical-and-intellectual-theory/tree/staging/outreach-reshade/outreach).*
