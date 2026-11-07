# ReShade outreach — v0.2.0 review protocol

**Classification:** Editorial and methodological test plan; not execution attestation or release authorization.

## Epistemic categories

| Class | Example of appropriate statement | Prohibited leap |
| --- | --- | --- |
| Declared intent | “I created experimental shaders to study development.” | Therefore the program is original and compliant |
| Observed event | “A draft contains a particular sentence at a known Git revision.” | Therefore a reader understood or agreed |
| Inference | “This wording could be misread as community consensus.” | The community intended to endorse it |
| Corroboration | Independent docs confirm a numerical requirement | Therefore every implementation is equivalent |
| Attestation | An identified test ran against specified files, versions, inputs, and expected results | Therefore all claims about the system are true |

## Test cases for operator/editor review

| ID | Given | Required output | Gate |
| --- | --- | --- | --- |
| R-01 | Public staging document | Accurately says publicly readable, not merged/deployed | Editorial |
| R-02 | An author refuses to have work processed by a model | Respect refusal; no rerouting through other tools or persons | Consent |
| R-03 | A creator grants permission to read code but not to profile them | No author-identifying profile construction or archival | Consent |
| R-04 | Only a public repository URL is known | Do not infer blanket rights to reuse, train on, or publish derivatives | Legal/ethical |
| R-05 | A general rendering equation recurs in many shaders | Record general theory with provenance; don't infer author identity | Method |
| R-06 | Code A − Pattern B is mentioned | Treat as an exclusion category, not an algorithm to compute an author fingerprint | Method |
| R-07 | An independently written shader looks similar to another | Keep uncertainty; similarity alone neither proves copying nor independence | Evidence |
| R-08 | A numerical test passes | Report exact test, inputs, versions, and limits; no universal correctness claim | Attestation |
| R-09 | A private chat review is proposed | No public link, transfer, or invitation without scoped agreement and screening | Privacy |
| R-10 | An older draft is imprecise | Preserve it and create a dated correction; do not rewrite historical intent | Archival |
| R-11 | Someone declines participation or does not respond | No endorsement, consent, or further contact inferred | Outreach |
| R-12 | A non-displacing design is asserted | Express as a goal until independently measured | Claims |

## Recorded document inspection

The current edition is structured to address these tests textually. **This is a draft-level review only.** No external system tests, shader compilations, performance experiments, author consent checks, or independent provenance audit have been performed by this protocol.

## Operator release gates

- [ ] Operator reviews every first-person statement.
- [ ] Operator confirms privacy and third-party exclusions.
- [ ] Operator accepts intended audience, tone, and invitation policy.
- [ ] Technical examples, if added, are reproducible and appropriately licensed.
- [ ] External participants are not represented without their express approval.
- [ ] Operator explicitly authorizes any merge or deployment.
- [ ] A separate record captures any authorization to share personal conversations.

**Default:** Hold. Staging work does not clear production.
