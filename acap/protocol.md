# AI Collaboration Attribution Protocol

**ACAP · Working form extracted from the March 9, 2026 drafts**

Use this form to record what the human author intended and adopted, and what the AI collaborator reports generating, transforming, or contributing to the dialogue. The two statements have different speakers. Fill the human declaration in the author's voice and the generative report in the AI collaborator's voice.

This working edition uses the ACAP-2 records and retains the original ACAP's standalone **AI Generative Report** alongside them. It also retains the original collaboration mode and editorial control fields. The source map below identifies those choices.

## Fillable form

### Work metadata

| Field | Entry |
|---|---|
| Title | [Work title] |
| Author | [Author name] |
| Date | [Date] |
| Publication context | [Context] |
| Document version | [Version of the work being described] |
| Protocol basis | ACAP and ACAP-2, March 9, 2026 |

### Human Author Declaration

**Name:** [Name]
**Role:** [Role in the work]
**Editorial authority:** [Who controlled selection, revision, and inclusion]

> [In your own words, describe your purpose, what you contributed, how you used the AI collaborator, and what you selected or revised for the work.]

### AI System Record

| Field | Entry |
|---|---|
| System type | [Type of generative system] |
| Model class | [Model or model class, if known] |
| Interaction mode | [How the interaction took place] |
| Generative capabilities | [Capabilities used in this collaboration] |

### AI Generative Report

Ask the AI collaborator to complete this section using the interaction it can inspect. For a new collaboration, use the [copy-ready AI entry point](ai-entry-point.md).

> Describe your own contribution in the first person. Identify the candidate wording, explanations, examples, structures, or interpretations you generated, and describe any transformations you made to material supplied in the dialogue. Explain how the exchange shaped your output. Separate what you drafted from any author adoption shown in the record. Describe observable participation and procedural contributions. Leave the author's account of intent and editorial decisions to the Human Author Declaration.

**AI collaborator's report**

> [Insert the AI collaborator's first-person report here.]

### Collaboration Mode and Human Editorial Control Level

**Collaboration mode:** [Select all that apply]

| Mode | Activity |
|---|---|
| Assistive | Grammar, editing, or formatting |
| Generative | Drafting passages or examples |
| Structural | Organizing arguments or narratives |
| Analytical | Critique, interpretation, or analysis |
| Dialogical | Iterative development through dialogue |

**Human editorial control level:** [Full, Moderate, or Minimal]

| Level | Meaning in the original ACAP draft |
|---|---|
| Full | The author edited or rewrote extensively. |
| Moderate | The author curated and modified outputs. |
| Minimal | The author used outputs largely unchanged. |

Use the Human Author Declaration to record **who held editorial authority**. The level above records **how extensively the author intervened in the output**.

### Contribution Registry · Drafted material

Record candidate material produced by the AI, including drafts that were rejected or never entered the work. Assign each contribution an ID for use in the Adoption Registry.

| Contribution ID | Type | Idea origin | Language origin | Description | Draft excerpt |
|---|---|---|---|---|---|
| [ID] | [Type] | [Origin] | [Origin] | [What was generated] | [Excerpt] |

| Field | Values in the ACAP-2 draft |
|---|---|
| Type | Explanation · Example · Structure · Comparison · Language |
| Idea origin | Human · AI · Dialogical |
| Language origin | Human · AI · Mixed |

### Adoption Registry · Author decisions

Use the contribution ID to connect an author decision to the candidate material. Under ACAP-2, generated material becomes part of the work through explicit adoption by the author. Where the source evidence does not establish a decision, leave the adoption entry open.

| Contribution ID | Adoption type | Modification level | Final location |
|---|---|---|---|
| [ID from Contribution Registry] | [Type] | [Description of the extent of change] | [Section, passage, or other locator where applicable] |

| Adoption type | Meaning in the ACAP-2 draft |
|---|---|
| Full | Adopted unchanged |
| Edited | Wording modified |
| Adapted | Concept retained but rewritten |
| Reference | Idea used but text replaced |
| Rejected | Excluded from the work |

The draft gives overlapping descriptions for **Adapted** and **Reference**. Where the category remains unclear, describe the actual treatment. ACAP-2 gives *Moderate* as a modification-level example and leaves the full set of values unspecified.

**Optional draft-to-adoption comparison**

- **Contribution ID** [ID]
- **AI draft** [Candidate wording]
- **Author-adopted version** [Wording incorporated into the work]
- **Final location** [Locator in the identified work version]

### Process Record

| Field | Entry |
|---|---|
| Session count | [Number of sessions covered] |
| Interaction mode | [How the exchange was conducted] |
| Prompt type | [Kind of prompts used] |
| Iteration level | [Extent of iteration] |

### Generative Attribution Summary

Summarize the registries for the work version above. If you give counts, specify which registry entries and categories they cover.

| Measure | Entry |
|---|---|
| Drafted contributions | [Count or description] |
| Adopted contributions | [Count or description] |
| Adapted concepts | [Count or description] |
| Rejected drafts | [Count or description] |

### Responsibility Statement

> [Identify the human author who takes responsibility for the final work's accuracy, interpretation, conclusions, and publication, as applicable.]

## Source map

All three drafts appear in the March 9, 2026 conversation **Ethics of LLM Collaboration**. Message IDs identify the records in the August 2026 export. The source conversation requires access to that history.

| Source | Message ID | Material carried into this form |
|---|---|---|
| Original ACAP, §§ II–IV | `b9e69758-c65b-4e2e-b6c1-5de5075a7b07` | Dual Testimony Model, Human Author Declaration, AI Generative Report, Collaboration Mode, Human Editorial Control Level, and Responsibility Statement |
| Generative Attribution Separation, §§ I–III | `4e14d030-0002-42c4-83ca-6797d5d40d8c` | Drafted Text and Adopted Text distinction and optional side-by-side comparison |
| ACAP-2 Hardened Schema, §§ I–X | `2517cab4-ed00-4b0a-b6a4-72d84e4e7a4e` | Attribution dimensions, work and participant records, registries, process record, derived summary, and responsibility |

The fill-in instructions are editorial guidance for using the extracted fields. The report prompt is newly worded from the historical procedural disclosure principle. This form leaves undecided adoption entries open and carries through the source's unresolved category boundaries.
