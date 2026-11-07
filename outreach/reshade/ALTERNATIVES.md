# Do This Instead — Tools Before AI

**Purpose:** Ways to work on shader research without resorting to language models by default.

| Question | Conventional method | Evidence to preserve |
| --- | --- | --- |
| Will a shader compile? | ReShade FX compiler, diagnostics, specification | Tool/version, exact source revision, settings, warnings |
| Is the mathematical operation correct? | Paper derivation, numerical libraries, independently written CPU reference | Equations, assumptions, test vectors, tolerances |
| Why does it render differently? | Reproducible test scene, graphics capture, controlled settings | Environment, expected/observed frames, driver versions |
| Does an error persist or propagate? | Controlled experiment on your own code, differential tests | Revision timeline, injected condition, detection and correction |
| Is the implementation deterministic? | Repeated bounded tests and state inspection | Inputs, outputs, nondeterminism observed |
| What is performance cost? | GPU profiler, resource accounting, repeatable benchmarks | Hardware, workload, measurements and variance |
| What does an API require? | Official docs, authorized minimal examples, direct experiments | Version, API contract, observed behavior |
| Can findings be trusted? | Human review plus reproducible tests and provenance ledger | Source permissions, methods, hashes, limitations |

**Human-directed cycle:** Research question → specification → authorized references → independent experiment → deterministic checks → error log → correction → documented conclusion.

A test pass supports that particular tested claim, not universal correctness. A hash records file identity, not intellectual independence, authorship, or consent. A successful conversation with an LLM is not an attestation of truth.

Use source code and tools only within their applicable rights and restrictions. An author may decline voluntary participation even where a separate license legally permits certain uses.
