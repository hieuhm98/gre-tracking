# Scrum Framework

## 1. What is Scrum?

**Scrum** is the most popular Agile framework. It organizes software development into **sprints** (iterations of 1-4 weeks), with 3 clear roles, 5 ceremonies, and 3 artifacts.

Scrum is not a methodology — it is a lightweight framework that teams adapt to their own needs.

---

## 2. The Three Roles

### Product Owner (PO)
- Represents the customer/stakeholders.
- Owns and prioritizes the **Product Backlog**.
- Decides **what** to build, not how to build it.
- Answers the team's questions about requirements.
- Is accountable for the **product's value**.

### Scrum Master (SM)
- Ensures the team understands and follows Scrum.
- Removes **impediments** for the team.
- Is not a project manager and does not assign work.
- Serves the team (servant leader).
- Organizes and facilitates the ceremonies.

### Development Team
- Cross-functional: has all the skills needed to deliver the sprint.
- Self-organizing: decides how to do the work.
- Ideal size: 3-9 people.
- No role hierarchy within the team.

---

## 3. The Three Artifacts

### Product Backlog
- A list of **all the requirements** for the product.
- Ordered by priority (the most important item at the top).
- Always changing — the PO continuously refines it.
- Each item is called a **PBI** (Product Backlog Item) or User Story.

### Sprint Backlog
- The subset of the Product Backlog selected for **this sprint**.
- Includes a plan to deliver them (tasks).
- Only the Development Team may change the Sprint Backlog.

### Increment
- The sum of all PBIs completed in the sprint.
- Must meet the **Definition of Done** (DoD).
- Must be **usable** — ready to use, whether or not stakeholders release it.

---

## 4. The Five Ceremonies (Events)

### Sprint Planning
- At the start of each sprint.
- The PO presents priorities, the Team selects suitable PBIs.
- The Team creates the Sprint Goal and Sprint Backlog.
- Max 8 hours for a 1-month sprint.

### Daily Scrum (Daily Standup)
- Every day, 15 minutes, same time.
- 3 questions: What did I do yesterday? What will I do today? Any impediments?
- The Dev team organizes it themselves; it is not a report to the SM/PO.

### Sprint Review
- At the end of the sprint, demo the Increment to stakeholders.
- Gather feedback → adjust the Product Backlog.
- Max 4 hours for a 1-month sprint.

### Sprint Retrospective
- After the Sprint Review.
- The team improves itself: workflow, tools, relationships.
- Questions: What went well? What needs improvement? Action items?
- Max 3 hours for a 1-month sprint.

### Backlog Refinement (not an official ceremony)
- The PO + Team clarify and estimate PBIs to prepare for the next sprint.
- Usually about 10% of each sprint's time.

---

## 5. Sprint

The Sprint is the "heartbeat" of Scrum:
- Fixed at 1-4 weeks (most common: 2 weeks).
- No scope is added midway.
- When a sprint ends → a new sprint starts immediately.

```
[Sprint 1] → [Sprint 2] → [Sprint 3] → ...
  2 weeks      2 weeks      2 weeks
```

---

## 6. Definition of Done (DoD)

The DoD is the set of criteria for considering a PBI **complete**:
- Code is written.
- Code reviewed.
- Tests pass.
- Deployed to staging.
- Documentation updated.

The DoD helps avoid "almost done" — everyone agrees on what "finished" means.

---

## 7. Summary

| | Who | What they do |
|--|----|----|
| **PO** | 1 person | Prioritize the backlog, represent the customer |
| **Scrum Master** | 1 person | Facilitate, remove impediments |
| **Dev Team** | 3-9 people | Build the increment |

**Ceremonies**: Planning → Daily Standup → Review → Retro.
**Artifacts**: Product Backlog → Sprint Backlog → Increment.
