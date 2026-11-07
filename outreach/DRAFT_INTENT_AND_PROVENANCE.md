# Drafts as Evidence of Intent — Outreach Archival Principle

**Recorded:** 2026-11-07  
**Status:** Staged archival note, not production policy  
**Scope:** `outreach/` and `outreach/reshade/` in this repository

## Declaration

Draft documents are important research artifacts. They preserve proposals, intentions, competing formulations, uncertainties, and changes in understanding **at the time those drafts were written**.

Their historical value must not be lost merely because later language is clearer, more accurate, or more suitable for publication. Corrections should be visible as subsequent developments—not presented as though the earlier draft never existed.

## Archival handling

1. Preserve original draft content and its Git commit history. Do not silently overwrite the historical record or rewrite commit history for editorial convenience.
2. Distinguish **stated intent** from **observed conduct**, **later interpretation**, **permission**, **actual consequences**, and **verified outcomes**. A draft is direct evidence of what its author recorded or proposed, not independent proof that it was acted upon or understood as intended.
3. Stage amendments and editorial corrections in separately identified, dated records or later revisions with explicit change notes and traceable commit identifiers.
4. Preserve disagreement, self-correction, and unresolved ambiguity, subject to any valid privacy, confidentiality, safety, legal, or deletion obligations.
5. Do not use the archival principle as authorization to preserve someone else's private source, conversation, personal profile, or material beyond the permitted retention scope. When these interests conflict, retain a minimally sufficient redacted account of the correction where permitted.
6. A public GitHub staging branch is publicly readable. Its draft status is a **production gate**, not a privacy gate.

## Initial staged artifacts — baseline

These SHA values identify Git blobs present at the time this note was prepared. They help distinguish original staging drafts from future amendments; they are not proof of factual truth, human consent, or acceptance by a third party.

| Path | Initial Git blob SHA |
| --- | --- |
| `outreach/README.md` | `fb7836260fd9c01f777a11d868f8a25d961c83c9` |
| `outreach/reshade/README.md` | `03f1a15ab81045f6f0dccf7559ddb43439b4ad11` |
| `outreach/reshade/REVIEW_NOTES.md` | `827d6fbbfdffcbe85e33d641985580a05da9443c` |
| `outreach/reshade/index.html` | `87575d11339fbfe95da00e6fe188e87607c2a4d0` |

## Later staged additions (not part of the original four-file baseline)

| Path | Git blob SHA at recording |
| --- | --- |
| `outreach/reshade/PARTICIPATION_AND_CONSENT.md` | `6fe82f81fac513d2bd3675790c9f79215ad8ce4a` |
| `outreach/reshade/PROVENANCE_RECORD_TEMPLATE.md` | `545b8e182e042e0c1454a2d44babefaa70343168` |

## Proposed editorial continuation

A future amended outreach version can clarify that staging files are public, distinguish the author's objections from community consensus, and link the consent and provenance templates. **Those are proposed editorial improvements, not reasons to erase the baseline.** Subsequent versions should be explicitly marked and diffable.

## Relationship to existing doctrine

See [self-doctrine](../../research-ethics/SELF_DOCTRINE_EXTENDED.md), especially epistemic classes, contradiction and variants, consent, and correction; see [fallibility and redress](../../research-ethics/FALLIBILITY_APPROXIMATION_AND_REDRESS.md); and see the author's [retrospective errata](../../ERRATA.md#record-02).

**Core statement:** Drafts evidence the development of intention. They do not independently attest to the correctness, authorization, execution, or reception of that intention.
