# The Product Backlog & Refinement

## 1. What a backlog is and is not

> **The product backlog is an ORDERED list of everything the team COULD do for the product.**

**Two key words:**

- **Ordered** — not a flat list. The item at the top is the one being done next.
- **Could** — not *"will"*. **Many items will never be built, and that is the CORRECT outcome** because they were worth less than what was built.

**A backlog is NOT:**

| Misconception | Reality |
|---------------|---------|
| *"A to-do list to complete"* | A list of what **could** be done, ordered by value |
| *"Only user stories"* | Also defects, technical work, research spikes, and technical debt |
| *"A store for every idea ever had"* | An unbounded backlog becomes useless — it needs periodic pruning |
| *"Written by the PO alone"* | The PO is accountable, but the BA, team, and stakeholders all contribute |

---

## 2. Four properties of a healthy backlog

**1. Ordered.** The single most important property. An unordered backlog helps nobody.

**2. Continuously evolving.** Items are added, removed, split, merged, and reordered throughout. **A backlog is never "finished".**

**3. UNEVEN detail.** The most misunderstood property:

> - **At the TOP:** detailed, small, estimated, ready to build.
> - **In the MIDDLE:** moderate, possibly still large.
> - **At the BOTTOM:** coarse, large, sometimes a single line.
>
> **This is NOT sloppiness — it is efficiency.** Detailing an item that will change or be dropped before its turn is **pure waste**.

**4. Transparent.** Everyone involved can see it and understand why the order is what it is.

---

## 3. Backlog refinement (grooming)

**Refinement is the CONTINUOUS activity of preparing top-of-backlog items so they are ready for the next sprint.**

**What happens in a refinement session:**

- **Splitting** items too large for one sprint.
- **Clarifying** vague items by asking the PO and users.
- **Adding acceptance criteria.**
- **Estimating** unestimated items.
- **Reordering** as priorities change.
- **Removing** items that no longer make sense.

**Who attends:** the Product Owner, the BA, and **at least some development team members** — because they ask the questions that surface hidden work.

> **A practical rule: keep about TWO to THREE sprints of work in a ready state.**
>
> Less and the team risks blocking at sprint start. More and you are wasting effort on things that will change before their turn.

**Frequency:** usually one or two sessions per sprint, each under an hour. **Refinement that runs long is a sign you are detailing things too far away.**

---

## 4. The definition of ready

**The definition of ready is the set of criteria an item must meet before entering a sprint.**

**A typical set:**

- Small enough to **finish in one sprint**.
- Has **clear acceptance criteria**, covering failure cases.
- Has been **estimated**.
- Has no unresolved **blocking dependency**.
- **The team understands what it means** — not only the PO.
- Has a **design or wireframe** if needed.
- Has identified **test data** if complex.

> **The definition of ready is a powerful team protection.** It lets the team say *"this story is not ready"* **objectively**, rather than accepting a vague story and getting stuck mid-sprint.
>
> **But beware overuse:** an overly strict definition of ready becomes a control gate that slows everything and recreates waterfall's document-handoff model. **Keep it short and focused on what genuinely blocks the team.**

---

## 5. Managing backlog size

**An unbounded backlog is a real problem.**

At 800 items nobody reads it all, searching becomes hopeless, and old items at the bottom merely create the illusion they will be built.

**Three practices to keep it usable:**

**1. Prune periodically.** Each quarter, review the bottom and **close items that have sat there over a year without ever being prioritized**. If they truly matter, they will come back.

**2. Close rather than delete, with a reason.** Rejected ideas have a way of returning. Keeping the decision and its rationale gives you the answer ready next time.

**3. Do not detail the bottom.** Items down there need one line. Detailing them is pure waste.

> **How to tell a stakeholder you are closing an item: *"We have not seen enough value to prioritize this in twelve months. If something has changed, tell me what is new and we will revisit."*** That is far more honest than leaving it at the bottom forever creating false hope.

---

## 6. Splitting epics into stories

**An epic is an item too large for one sprint.** Splitting it correctly is among the highest-value skills.

**The WRONG way: by technical layer.**

- ❌ *"Build the UI"*, *"Build the API"*, *"Build the database"*
- **Why wrong:** none delivers value on its own and none can be demonstrated at a sprint review.

**Five RIGHT ways:**

| Split by | Example for an "order management" epic |
|----------|---------------------------------------|
| **Process step** | Create order → Approve → Track status → Cancel |
| **Data type** | Domestic orders first, international later |
| **User class** | Sales staff first, managers later |
| **Business rule** | Simple case first, exceptions later |
| **Level of polish** | A basic list first, filtering and sorting later |

> **The overarching principle: every split story must be a thin VERTICAL SLICE — cutting through every technical layer for one real function.** This guarantees each story can be demonstrated and produces real feedback.

---

## 7. Key takeaways

- **A backlog is an ordered list of everything the team COULD do** — not a to-do list to complete.
- **Many items will never be built, and that is the correct outcome** because they were worth less.
- The backlog also holds **defects, technical work, research spikes, and technical debt**.
- Four properties: **ordered, continuously evolving, uneven detail, transparent**.
- **Uneven detail is efficiency rather than sloppiness** — detailing what will change is pure waste.
- Refinement covers: **splitting, clarifying, adding AC, estimating, reordering, removing**.
- **Some team members must attend refinement** — they ask the questions that surface hidden work.
- **Keep two to three sprints ready** — less and the team blocks, more and you waste effort.
- **Refinement running long signals you are detailing things too far away.**
- **The definition of ready lets a team objectively refuse an unready story.**
- **An overly strict definition of ready becomes a control gate** recreating waterfall's document handoff.
- **An 800-item backlog is a real problem** — nobody reads it and old items create illusions.
- **Close items that sat over a year without prioritization** — if they truly matter, they return.
- **Close rather than delete, with a reason**, since rejected ideas come back.
- **Splitting epics by technical layer is wrong** — no story delivers value alone or can be demonstrated.
- Five right splits: **process step, data type, user class, business rule, level of polish**.
- **Every story must be a thin vertical slice through every layer** for one real function.

## 8. Summary

- **Order is the backlog's most important property**, and decreasing detail from top to bottom is deliberate design.
- **Refinement is continuous, not an event** — the aim is always having two to three sprints ready.
- **The definition of ready protects the team**, but must stay short so it does not become a control gate.
- **Splitting epics into thin vertical slices** is the only way to guarantee every story is demonstrable and yields real feedback.
