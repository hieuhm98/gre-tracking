# The PM in Agile vs Waterfall

## 1. Two models answering two different problems

> **Waterfall and Agile are not one right and one wrong. They are two answers to two different questions about uncertainty.**

**Waterfall assumes: we can know in advance what must be built.** If that assumption holds, working sequentially is most efficient — no waste on replanning, no cost of iteration.

**Agile assumes: we will learn what matters only after real users touch the product.** If that assumption holds, working sequentially is a disaster — you will perfect the wrong thing with great precision.

**Both assumptions are correct in different contexts:**

| Context | Which assumption fits better |
|---------|------------------------------|
| Building an accounting system to a published standard | **Waterfall** — requirements come from regulation, not users |
| Making a new product for an untouched market | **Agile** — everything is an assumption |
| Migrating data from a legacy system | **Waterfall** — the work is clear, nothing to learn from users |
| Improving conversion on a checkout flow | **Agile** — only real data reveals what works |

> **The costliest mistake is not choosing the wrong model but choosing one and applying it half-heartedly.** Waterfall without change control and Agile without real feedback are both worse than either original model.

---

## 2. How the PM role shifts

**Four core shifts:**

| | PM in Waterfall | PM in Agile |
|---|-----------------|-------------|
| **Planning** | Detailed once, then defended | **Continuous**, one small loop per sprint |
| **Control** | Measure deviation from baseline | **Measure real delivery rate** and total remaining |
| **Scope** | Fixed, changed by approval | **Variable**, managed through backlog order |
| **Working with the team** | Assign and track | **Clear impediments and protect the pace** |

**What does NOT change — and this is the most important part:**

- **Somebody still answers for the budget and for external commitments.**
- **Somebody still manages dependencies across teams and with third parties.**
- **Somebody still tracks risks larger than one sprint** — contracts, legal, staffing, long-term architecture.
- **Somebody still communicates upward in leadership's language**, not in burndown charts.

> **The common claim that *"Agile does not need a PM"* holds only for a single team, one product, no external dependencies, and no date commitments to anyone.** In that context the PO and Scrum Master divide the responsibility adequately. **The moment there are several teams, several dependencies, or a contract — the PM work reappears, whatever the title.**

---

## 3. What a PM does in an Agile organisation

**Six areas that clearly belong to the PM rather than the PO or Scrum Master:**

**1. Cross-team coordination.** When three teams build one product, dependencies between them do not vanish. **The PM sees a dependency before it becomes an impediment.**

**2. Managing third parties.** Partners, vendors, certification bodies. **No Scrum team negotiates its way out of a partner being two months late with an API.**

**3. Budget and upward reporting.** Leadership does not read backlogs. They need: **how much spent, what was gained, which risks, and what decision is needed from them.**

**4. Long-horizon risk.** Staffing, contracts, compliance, architecture — the risks outside one sprint's field of view.

**5. External date commitments.** Some dates are not negotiable: marketing campaigns, regulations coming into force, industry trade shows. **The PM converts those dates into constraints the team understands, and the team's capacity into forecasts outsiders understand.**

**6. Removing organisation-level impediments.** No test environment, a three-week approval process, missing access rights. **Teams cannot fix these themselves.**

**The boundary must stay sharp:** **a PM in Agile does NOT assign work to individuals, does NOT decide backlog order, and does NOT force sprint commitments.** A PM who crosses into those three breaks the very mechanism that makes Agile work.

---

## 4. Hybrid models and how to keep them from being awful

**Most real projects are hybrids, and that is not a failure of theory — it is a rational response to a reality that has both clear and uncertain parts.**

**Three common hybrids:**

**1. Hybrid by phase.** Initiation and overall planning done traditionally; construction done in sprints. **Fits when budget must be approved once for the whole project while the content stays flexible.**

**2. Hybrid by work type.** Integration and data migration run to a sequential plan; interface and experience work runs in sprints with feedback. **The most pragmatic form, because it puts each kind of work into the model that suits it.**

**3. Hybrid by reporting layer.** The team runs real Scrum; upward reporting is translated into milestones and percentages. **Valid if the translation is honest; dangerous if the team must maintain two parallel planning systems.**

**Three signs a hybrid has become the worst of both:**

| Sign | Why it is bad |
|------|---------------|
| **Regular sprints but scope and date both fixed from the start** | The team carries every cost of Agile with none of the benefit — nothing adjusts to learning |
| **A backlog whose order is set weekly by outsiders** | Nobody owns value, and the team cannot plan |
| **Sprint reviews with no real users, only percentage reports** | The feedback loop is severed, leaving only ceremony |

> **The rule that makes a hybrid work: every variable must have somewhere to give.** If the date is fixed and the scope is fixed and quality may not drop, your hybrid is waterfall with daily standups.

---

## 5. Choosing an approach for a specific project

**Six questions, answered honestly, beat any theoretical argument:**

**1. How knowable are the requirements up front?** If regulation or an existing system dictates them, uncertainty is low and sequential work is cheaper.

**2. What does being wrong cost, and how long until you find out?** **This is the most important question.** If it takes six months to find out, you need short feedback loops whatever the contract says.

**3. Are users available to give feedback?** Agile does not work if nobody answers within two weeks. **Without user participation you are doing chopped-up waterfall, not Agile.**

**4. How do the contract and budget work?** Fixed price does not rule out Agile, but it requires fixing total volume while allowing content to change.

**5. How heavy are compliance requirements?** Healthcare, finance and aviation need more documentary trail. **That does not remove sprints, but it adds cost to each loop.**

**6. Is the team mature enough?** Agile pushes many decisions down to the team. **A team that has never decided anything for itself needs time and support, and imposing Agile in a week usually fails.**

**A pragmatic view: choose by the uncertainty of each part, not by a philosophy for the whole project.** The same project can run one part sequentially and another in sprints, provided the boundary and dependencies between them are managed explicitly.

---

## 6. Skills a PM must add when moving to Agile

**The four largest personal changes:**

**1. From control to enablement.** Your source of value is no longer knowing every detail but **removing what blocks the team**. This is the hardest shift, especially for a PM who is good at control.

**2. From percentage reporting to demonstrating working software.** *"This module is 70 percent done"* is replaced by *"here is the running part, please try it"*. **This is more honest, but it also leaves you nowhere to hide.**

**3. From forecasting by plan to forecasting by real data.** Use the team's actual delivery rate rather than the plan written at the start. **A forecast from the last three sprints beats a forecast from estimates made six months ago.**

**4. From protecting the plan to protecting the pace.** What you need to protect is no longer the committed numbers but **the team's ability to deliver steadily and sustainably** — because that is precisely what produces predictability.

> **The point of the whole article: both models demand the same responsibilities — knowing why the project exists, knowing where you are, knowing what risks hang over you, and telling everyone the truth about all of it.** **Only the tools and the cadence differ.**

---

## 7. Key takeaways

- **Waterfall assumes requirements are knowable; Agile assumes learning comes after users touch the product.**
- **Both assumptions hold in different contexts** — data migration is not a new product.
- **The costliest mistake is half-hearted application**, not choosing the wrong model.
- The PM shifts from **planning once to planning continuously**, and from **measuring deviation to measuring real delivery rate**.
- Unchanged: **budget, cross-team dependencies, risks beyond a sprint, and upward communication**.
- ***"Agile does not need a PM"* holds only for one team, one product, no dependencies, no date commitments.**
- Six PM areas in Agile: **cross-team coordination, third parties, budget and reporting, long-horizon risk, external dates, organisational impediments**.
- **Leadership does not read backlogs** — they need spend, gain, risks, and decisions needed.
- **A PM in Agile does not assign individuals, set backlog order, or force sprint commitments.**
- **Hybrids are a rational response to reality**, not a failure of theory.
- **Hybrid by work type is the most pragmatic** — each kind of work in the model that suits it.
- **Regular sprints with scope and date fixed from the start is the worst of both models.**
- **Every variable must have somewhere to give**, or it is waterfall with daily standups.
- The most important selection question: **what being wrong costs and how long until you find out**.
- **Without user participation you are doing chopped-up waterfall, not Agile.**
- **Fixed price does not rule out Agile** but requires fixing total volume.
- **Heavy compliance does not remove sprints**, it adds cost per loop.
- **Choose by the uncertainty of each part, not a philosophy for the whole project.**
- The PM must shift **from control to enablement** — the hardest change.
- **Working software is more honest than percent complete, and leaves nowhere to hide.**
- **A forecast from the last three sprints beats estimates made six months ago.**
- **What needs protecting is no longer the committed numbers but a sustainable delivery pace.**

## 8. Summary

- The two models **answer different questions about uncertainty**, so the choice must rest on context rather than belief.
- **The PM role does not disappear in Agile** — it shifts to coordination, dependencies, budget and long-horizon risk.
- **Hybrids work when every variable has somewhere to give**, and fail when they only carry the costs of both.
- **Both models demand the same core responsibilities**; only the tools and cadence differ.
