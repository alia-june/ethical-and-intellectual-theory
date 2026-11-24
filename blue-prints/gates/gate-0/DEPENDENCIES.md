# Dependencies and Interlocking Relationships

**Status:** Source-accounted, provisional dependency relationships. **Not a formal proof of equivalence or independence.**

The modular approach supports five relationship types: **dependency**, **derivation**, **reinforcement**, **conflict**, and **substitution**. A dependency says which premises a guarantee requires; it does **not** itself prove the guarantee or opt in to the missing premise.

The following is a **conceptual dependency path**, not an executing flow:

```text
declared_project_scope_and_defined_statements
    -> explicitly_selected_optional_requirements (M0)
    -> all_required_prerequisites_identified (T0-01)
    -> selected_requirements_checked_for_consistency (T0-02)
    -> claimed_guarantees_checked_for_justification (T0-03)
    -> evidence_scoped_assurance_claims (T0-05)
```

A missing prerequisite remains missing; it is not silently enabled. Detailed, typed examples appear in [Human-readable naming and pseudocode](NAMING_AND_PSEUDOCODE.md).

For example, delegated authority requires established authority and delegable scope (T1-01 through T1-04); authorization of a referenced target requires established authorization plus the target/reference relationship (T1 and T2-08); independent assurance requires defined independence criteria beyond merely counting copies (T3-03 and deferred T3-08).

A dependency cycle is not automatically a contradiction, but a circular chain cannot act as its own sole justification. A project may choose a defensible alternative premise set; resemblance is not a substitution proof.

For the **full dependency matrix, DEP-001 through DEP-010, the C2 redundancy comparisons, and caveats**, see [source dependency ledger](records/C2/03_AXIOM_AND_DEPENDENCY_LEDGER.md).

Related unresolved claims: [U-003 authority precedence](UNKNOWNS.md), [U-004 effect universe](UNKNOWNS.md), [U-011 modular equivalence](UNKNOWNS.md).
