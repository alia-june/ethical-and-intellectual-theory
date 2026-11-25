# Dependencies and Interlocking Relationships

**Status:** Source-accounted, provisional dependency relationships. **Not a formal proof of equivalence or independence.**

The modular approach supports five relationship types: **dependency**, **derivation**, **reinforcement**, **conflict**, and **substitution**. A dependency says which premises a guarantee requires; it does **not** itself prove the guarantee or opt in to the missing premise.

The following is a **conceptual dependency path**, not an executing flow:

```text
declared_project_scope_and_defined_statements
    -> explicitly_selected_optional_requirements (Modular Principle 0 — Explicit Adoption; M0)
    -> all_required_prerequisites_identified (Tranche 0, Item 01 — Explicit Dependency Satisfaction; T0-01)
    -> selected_requirements_checked_for_consistency (Tranche 0, Item 02 — Consistency Integrity; T0-02)
    -> claimed_guarantees_checked_for_justification (Tranche 0, Item 03 — Non-Circular Justification; T0-03)
    -> evidence_scoped_assurance_claims (Tranche 0, Item 05 — Guarantee Preservation; T0-05)
```

A missing prerequisite remains missing; it is not silently enabled. Detailed, typed examples appear in [Human-readable naming and pseudocode](NAMING_AND_PSEUDOCODE.md).

For example, delegated authority requires established authority and delegable scope (Tranche 1 — Authority Foundations, Items 01–04); authorization of a referenced target requires established authorization plus the target/reference relationship (Tranche 1 and Tranche 2, Item 08 — Authorization–Reference Binding, `T2-08`); independent assurance requires defined independence criteria beyond merely counting copies (Tranche 3, Item 03 — Evidence Provenance, `T3-03`; and deferred Tranche 3, Item 08 — Assurance Independence, `T3-08`).

A dependency cycle is not automatically a contradiction, but a circular chain cannot act as its own sole justification. A project may choose a defensible alternative premise set; resemblance is not a substitution proof.

For the **full dependency matrix, Dependency Records 001–010 (`DEP-001` through `DEP-010`), the Closure Stage C2 redundancy comparisons, and caveats**, see [source dependency ledger](records/C2/03_AXIOM_AND_DEPENDENCY_LEDGER.md).

Related unresolved claims: [Unknown Finding 003 — authority precedence (`U-003`)](UNKNOWNS.md), [Unknown Finding 004 — effect universe (`U-004`)](UNKNOWNS.md), [Unknown Finding 011 — modular equivalence (`U-011`)](UNKNOWNS.md).
