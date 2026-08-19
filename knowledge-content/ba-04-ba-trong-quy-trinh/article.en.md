# The BA in Scrum & Waterfall

## 1. One craft, two rhythms

> **The analysis work does not change between waterfall and Scrum. What changes is the RHYTHM: how much you do, when, and where you record it.**

In either model you still have to understand the business problem, identify stakeholders, elicit needs, clarify detail before developers write code, and confirm that what shipped matches what was agreed.

**The core differences:**

| | **Waterfall** | **Scrum** |
|---|--------------|-----------|
| **When analysis happens** | Concentrated up front | Continuously, sliced per sprint |
| **Level of detail** | Everything detailed before building | Just enough for what comes next |
| **Where it lives** | An SRS or BRD | The backlog, acceptance criteria, and conversation |
| **Handling change** | A change control process | Reordering the backlog |
| **Who the BA works with most** | Customers, the project manager | The development team and Product Owner |

> **A common mistake when switching models: carrying the old habits over.** A BA moving from waterfall to Scrum often still tries to specify the entire product before sprint 1 — wasted effort, since most of it will change. A BA moving the other way often records too little, leaving a distant team without enough to build from.

---

## 2. The BA in waterfall — phase by phase

**Phase 1 — Initiation.** Contribute to opportunity and feasibility analysis. Help define the **business objectives**, preliminary scope, and stakeholders. The output is usually a **vision and scope document**.

**Phase 2 — Requirements analysis.** This is the BA's heaviest phase in waterfall:

- Interviews, workshops, and observation to elicit requirements.
- Modeling the current (as-is) and future (to-be) processes.
- Writing a **BRD** and then an **SRS** with functional requirements, nonfunctional requirements, and business rules.
- Running reviews, obtaining approval, and then **baselining** the document.

**Phase 3 — Design.** The BA clarifies as architects and designers raise questions, and checks that the design covers all requirements.

**Phase 4 — Development.** Answering developer questions, processing change requests through the change control process, updating documentation and the traceability matrix.

**Phase 5 — Testing.** Reviewing test cases for requirement coverage, helping classify whether a defect is a code fault or a missing requirement.

**Phase 6 — Deployment and acceptance.** Running UAT, preparing user documentation, training users, supporting sign-off.

> **The BA's biggest risk in waterfall: locking everything down too early.** Where requirements are still uncertain, use prototypes and incremental delivery to reduce risk rather than writing a 200-page SRS on guesswork.

---

## 3. The BA in Scrum — event by event

Scrum does not define a BA role. **In practice the BA work still exists, and somebody must do it.** Usually the BA as a development team member, or the BA supporting the Product Owner.

**Backlog refinement (grooming)** — the most important event for a BA:

- Splitting epics into sprint-sized stories.
- Clarifying vague stories by asking the Product Owner and users.
- Adding acceptance criteria.
- Surfacing hidden work: empty states, error states, permissions, data migration.

**Sprint planning** — explaining stories, answering questions so the team can estimate accurately, confirming the definition of ready.

**Daily scrum** — listening for blockers; many turn out to be unclear requirements the BA can resolve the same day.

**During the sprint** — the biggest time sink nobody talks about: answering questions continuously, clarifying when testers find ambiguity, preparing stories for the next sprint.

**Sprint review** — presenting or supporting the presentation to stakeholders and turning feedback into new backlog items.

**Sprint retrospective** — participating as a team member; if many defects trace back to unclear requirements, that is a process problem to fix.

> **The golden rule for a BA in Scrum: always keep about TWO to THREE sprints of work in a ready state.** Less and the team risks being blocked at sprint start; more and you are wasting effort on things that will change.

---

## 4. BA and Product Owner — how to divide the work

This is the most confusing question when an organization adopts Scrum.

| Task | Usually belongs to |
|------|-------------------|
| Deciding the backlog **order** | Product Owner |
| Deciding an item's **business value** | Product Owner |
| **Accepting or rejecting** completed work | Product Owner |
| **Eliciting requirement detail** from users | BA |
| **Modeling processes**, drawing diagrams, analysing data | BA |
| Writing detailed **acceptance criteria** | BA with testers |
| Answering the team's **detailed questions** during the sprint | BA |

**Three patterns seen in practice:**

**1. The PO also acts as BA.** Suits simple products and small teams. Risk: the PO is overloaded and has no time for both strategy and detail.

**2. The BA supports the PO.** The PO owns value and order; the BA owns detail and modeling. **This is the most effective pattern for complex products.**

**3. The BA acts as proxy PO.** The BA stands in for the PO in daily work with the team. Risk: without real decision authority, the team is still blocked.

> **What matters is not the job title but this: ONE person must be able to decide order and value, and that person must be available when the team needs them.**

---

## 5. Documentation: how much is enough?

This is the most contested point when moving from waterfall to Scrum.

**The agile manifesto says *"working software OVER comprehensive documentation"* — not *"instead of documentation"*.**

**Five questions that decide whether to record something:**

1. **Who will read it, and what will they do with it?**
2. **Does this knowledge need to outlive the team's memory?**
3. **Is there a compliance, audit, or contractual requirement?**
4. **Is the team distributed across locations or time zones?**
5. **Is the cost of recording less than the cost of rediscovering?**

**Things almost always worth recording, even in Scrum:**

- **Product vision and scope** — without it the team loses direction.
- **Business rules** — they outlive every project.
- **Data definitions and the glossary** — they prevent integration defects.
- **Architectural decisions with their rationale** — future maintainers will need them.
- **Automated acceptance tests** — the only documentation that never goes stale, because it runs.

> **The real risk is not producing less documentation but confusing less documentation with less thinking.** Healthy agile teams still invest heavily in understanding the problem — they simply do not package it into 200 pages.

---

## 6. When an organization moves from waterfall to Agile

Many BAs in Vietnam are in the middle of this transition. Here are the practical adjustments:

**What to drop:**

- Trying to specify the entire product before anything starts.
- Waiting for a signed-off document before letting the team begin.
- Treating requirement change as a failure of the analysis phase.

**What to keep:**

- Modeling processes when that clarifies what prose cannot.
- Recording business rules, data definitions, and architectural decisions.
- Eliciting nonfunctional requirements early — they drive architecture and are expensive to discover late.

**What to learn:**

- Splitting epics into stories as vertical slices rather than by technical layer.
- Writing acceptance criteria in Given-When-Then form.
- Working to a sprint rhythm: always have stories ready for the next two sprints.

> **Hybrid models are very common in Vietnam:** the contract and overall scope run waterfall so the customer can sign, while delivery inside runs Scrum. A BA in this setup does both: maintaining the high-level document for the contract and a detailed backlog for the team.

---

## 7. Key takeaways

- **The analysis work is the same in both models; the rhythm, detail level, and storage differ.**
- The switching mistake: **carrying the old habits into the new model**.
- In waterfall, the **requirements analysis phase is the heaviest**, ending in review and a baselined document.
- **Waterfall's biggest risk is locking everything down too early** while requirements are still uncertain.
- **Scrum does not define a BA role**, but the BA work exists and somebody must do it.
- **Backlog refinement is the most important Scrum event for a BA.**
- In grooming, the BA surfaces **hidden work: empty states, error states, permissions, data migration**.
- **Always keep two to three sprints ready** — less and the team blocks, more and you waste effort.
- The PO owns **order and value**; the BA owns **detail and modeling**.
- **BA-supports-PO is the most effective pattern for complex products.**
- **One person must be able to decide order, and be available when the team needs them.**
- The manifesto says *"working software OVER documentation"*, **not "instead of documentation"**.
- **The real risk is confusing less documentation with less thinking.**
- Always worth recording: **vision, business rules, data definitions, architectural decisions, automated acceptance tests**.
- Moving to Agile, **keep modeling and early NFR elicitation**; drop waiting for sign-off before starting.
- **Hybrid models are very common**: waterfall contract, Scrum delivery.

## 8. Summary

- A BA does **the same kind of work** in both models, distributed differently over time.
- In waterfall, the BA's value concentrates in **the analysis phase and in maintaining documentation through change**.
- In Scrum, the BA's value lies in **grooming, continuous clarification, and holding the big picture** while the team focuses story by story.
- **The documentation level should be decided by five pragmatic questions**, not by either model's dogma.
