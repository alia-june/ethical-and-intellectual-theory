# ReShade outreach — Before You Use AI

> **Draft for voluntary community review — not an official ReShade statement.**  
> **Status:** Staging only. No individual, shader author, ReShade maintainer, or affiliated community has endorsed this page.

This is a proposal for a serious, respectful discussion of how AI should—and should not—participate in graphics programming research. The opening position is intentionally **do not use AI by default**. Human authors, directly inspectable tools, published mathematics, and deterministic tests are often the better starting point.

This page is not a request to analyze anybody's shaders, nor is it a claim that permission to see a source repository grants permission to construct an author's intellectual profile.

## 1. Don't use AI — and why

Do not use an LLM merely because it is available, particularly when:

- A compiler, linter, debugger, test harness, calculator, specification, paper, or discussion with the author can answer the question more precisely.
- A task demands reproducible numerical results, deterministic execution, or verifiable provenance that the model alone cannot guarantee.
- Source-code ownership, licenses, creator wishes, data-handling terms, or downstream disclosure requirements are unclear.
- A creator has expressly objected to machine-assisted extraction of information from their work.
- The proposed analysis could infer or retain a person's characteristic coding habits, author-identifying fingerprint, or intellectual mode of operation.
- There is a risk of confidently presenting plausible but fabricated explanations, assuming a programmer's intent, or concealing conceptual debt.

**Default:** If ordinary tools and human inquiry can do the job, use them. A model's confidence is neither proof nor attestation.

## 2. Do this instead

Begin by defining the **research question** rather than selecting a source repository as a target.

1. Write the desired behavior, invariants, resource constraints, failure cases, and unknowns on paper or in a transparent specification.
2. Study published rendering theory, mathematical foundations, official documentation, and material clearly authorized for the intended use.
3. Ask an author about their work if appropriate and welcome. An unanswered request is not consent, and a refusal ends that line of inquiry.
4. Prefer direct compilation, documented APIs, conventional static analysis, numerical reference programs, differential testing, and reproducible test cases **where lawful and permitted**.
5. Where the desired process cannot be observed, create your **own controlled experimental implementation** and record how it develops rather than reconstructing another person's private methodology.
6. Keep a provenance ledger: source, permission, human decisions, program versions, test inputs, outcomes, error corrections, and unresolved uncertainty.

## 3. If you use AI: objections and minimum boundaries

We object to treating other people's source code, creativity, or intellectual identity as unrestricted extraction material. We also object to replacing verifiable engineering claims with fluent but unaudited model assertions.

For any proposed AI-assisted step, record:

| Question | Required answer |
| --- | --- |
| Why AI? | What deterministic or human-led alternative was considered first? |
| What enters the model? | Exactly which source, text, logs, or observations—and under what permission? |
| What leaves it? | What output, contribution, inference, profile, or derivative artifact can be produced? |
| Whose authority? | Who authorized the activity, and what limits, withdrawal terms, and privacy constraints apply? |
| How is it tested? | Which independently reproducible check distinguishes evidence from inference? |
| What is retained? | Which records remain and which data are excluded or destroyed when appropriate? |

**Prohibited by this proposed doctrine:** constructing or archiving author-identifying methodological fingerprints without specific, applicable consent. Attribution alone does not supply consent. Permission to study code does not automatically permit profiling its author. Safety and law remain mandatory, independent constraints even when consent is present.

## 4. Experimental research: why I created shaders

My stated research objective concerns the **development process**—especially error formation, detection, persistence, correction, documentation, and attestation—rather than competing with graphics authors or LLM providers.

I began with publicly usable shading knowledge, HLSL and graphics theory, and the narrower practical questions posed by ReShade/ReShade FX. Because the documentation and the process observations needed for my research were uneven, I created experimental shaders through a documented, human-directed hybrid development cycle.

Those shaders were **research instruments and experimental outputs**. I wanted to observe how a shader develops so I could study that development, not infer an external programmer's complete intent from their source.

Small, specialized services can be loaded, executed, checked, and unloaded to help with research, documentation, provenance, and attestation. This is a non-displacement *design intention*, not a verified claim of zero performance or market impact.

## 5. Decomposting ≠ extractive mining

**Extractive mining**, as used in this ethical discussion, means treating a work or its author as raw material to strip for advantage without suitable provenance, permissions, or contribution.

**Decomposting** names an intended regenerative cycle:

**Decompose → Study → Reason → Learn → Respect provenance → Correct → Regrow.**

One proposed separation model is:

> **Hermetically seal Code A → identify only independently corroborated, permitted common Pattern B → disallow Code A − Pattern B.**

- **Code A:** The protected source and its author-specific information remain isolated, subject to applicable permissions and express boundaries.
- **Pattern B:** Only general computational requirements, documented mathematical invariants, or independently supported error classes may become transferable research lessons.
- **Code A − Pattern B:** A **conceptual exclusion**, not an instruction to calculate or save a residue. Do not reconstruct, archive, disclose, or reuse source-specific expression or author-identifying methodological fingerprints.

Calling a pattern 'common' does not make it permissible or non-identifying. If Pattern B cannot be established without prohibited analysis or exposing the excluded remainder, **stop**. Use independent public theory, your own test fixtures, or a consenting reference instead.

## 6. An accountable case study: the depth oracle

I invite criticism of **my own process**, including mistakes I made creating a depth oracle: whether I adequately scoped requirements; whether I should have investigated existing, permissibly forkable work; whether I separated source-informed observation from independent derivation; and whether I documented errors and uncertainty sufficiently.

My retrospective self-report is in [Record 02 of ERRATA.md](../../ERRATA.md#record-02). It states regrets and lessons; it does **not** certify another participant's motives or imply that anyone consented to use of their work.

A private, suitably redacted record of my human–AI interaction could be offered to a willing reviewer **only through a separately agreed, scope-limited sharing arrangement**. This draft does not publish that record, create a private link, or authorize further distribution.

## 7. Your place in this ecosystem

Shader authors, users, reviewers, LLM skeptics, research critics, and conventional programmers have a legitimate place here—including the right to say **no**, to ask for corrections, and to make no contribution at all.

Feedback is welcome on whether these principles are clear, too permissive, too restrictive, or inadequately evidenced. No named person is expected to participate, and no one's silence signifies agreement. Please do not submit third-party source code or private messages without authority to do so.

The purpose is to improve method and responsibility, not to recruit critics into endorsing AI.

### Separate gates

**Consent first for voluntary research participation and use of another person's intellectual work. Safety, applicable law, and non-harm remain independently mandatory.** An invitation is not consent; a license is not blanket consent; attribution is not permission to profile.

---

*Editorial status: staging draft, human review required. Not a legal opinion, a completed attestation, or an official ReShade policy. The [parent doctrine](../../research-ethics/SELF_DOCTRINE_EXTENDED.md) provides broader ethical context.*
