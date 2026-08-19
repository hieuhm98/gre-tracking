# The Product Owner in Scrum

## 1. Why Scrum gives the PO a separate role

> **Scrum separates three responsibilities: WHAT (Product Owner), HOW (the development team), and PROCESS (Scrum Master).**

**The reason for the separation:** when one person decides both what to build and how to build it, **schedule pressure always beats quality**. That person will let themselves cut technical corners to meet a commitment they made themselves.

**Three boundaries worth memorising:**

| Question | Who decides |
|----------|-------------|
| **What to build and in what order** | **Product Owner** — nobody may override backlog order |
| **How much fits in a sprint** | **The development team** — the PO may not force items in |
| **How it gets built** | **The development team** — design, architecture, technique |
| **How the process runs** | **Scrum Master** — but supporting, never commanding |

> **The most common mistake: a PO saying *"all seven stories must be done this sprint"*.** That invades the team's authority. **The PO says what matters more than what; the team says how much is feasible.**

---

## 2. The PO at each Scrum event

### Sprint Planning

- **The PO presents the sprint goal** and explains why the top backlog items matter.
- **The PO stays for the whole session** to answer questions as the team breaks work down.
- **The PO does NOT** decide how much the team takes, and does **NOT** assign work to individuals.

> **A sign of a poorly prepared PO: planning runs long because the team keeps asking questions that should have been answered in refinement.**

### Daily Scrum

- **The PO need not attend.** This is the development team's session.
- **If present, the PO listens** to hear impediments, rather than turning it into a status report for themselves.
- **The main value of attending: hearing a problem the same day and answering business questions on the spot.**

### Sprint Review

- **The PO decides which items are accepted.**
- **The PO invites real stakeholders** — a review without real users is only an internal demo.
- **The PO updates the backlog from the feedback** right after the session.

### Sprint Retrospective

- **The PO should attend** because the PO is part of the working system.
- **But carefully:** if the team will not speak frankly with the PO present, ask the Scrum Master and accept being absent from some sessions.

### Backlog Refinement

- **This is where the PO invests the most time**, even though the Scrum Guide does not list it as a formal event.
- See the product backlog article for detail.

---

## 3. Accepting or rejecting work

**At sprint review, the PO alone may declare an item "done".**

**Acceptance rests on two layers:**

**1. The Definition of Done — common to every item.** Coded, reviewed, tested, integrated, documentation updated. **Agreed between team and PO in advance.**

**2. Acceptance criteria — specific to each item.** The concrete conditions describing expected behaviour.

> **The golden rule: there is no "90 percent done".** An item either passes or it does not. **Accepting partial work is the fastest way to destroy the meaning of velocity and every forecast built on it.**

**When you must reject, do it properly:**

- **Reject the item, not the person.** Say *"this story does not meet AC 3"*, not *"your work is not good enough"*.
- **Reject on the spot with the reason recorded**, rather than leaving it vague and arguing next sprint.
- **Ask how it got this far.** Unclear AC? A misunderstanding? A PO unavailable during the sprint? **The cause usually sits upstream, not with the developer.**

> **If you reject many items every sprint, the problem is refinement rather than the team.**

---

## 4. What the PO must not do

**Four PO behaviours that break Scrum:**

**1. Adding work mid-sprint.** The sprint backlog belongs to the team. If something is genuinely urgent, **the correct move is negotiating an equivalent item out**, or in the extreme case cancelling the sprint.

**2. Forcing commitments.** *"You did 30 points last sprint, so this one must be 35."* **Velocity is a forecasting tool, not a productivity target.** Turn it into a target and the team inflates estimates, and you lose the forecasting tool entirely.

**3. Being unavailable.** **An absent PO is a Scrum team's number one risk.** A blocked team guesses, and wrong guesses mean rework.

**4. Designing the solution.** The PO describes the problem and the value; **the team designs the answer**. A PO who imposes a technical solution both usurps the team and loses the better idea.

---

## 5. Boundaries with the Scrum Master and the BA

**PO and Scrum Master:**

| | Product Owner | Scrum Master |
|---|---------------|--------------|
| **Optimises for** | Product value | Process and team effectiveness |
| **Authority** | Decides content and order | No command authority, only support |
| **Healthy conflict** | Wants to deliver more | Protects a sustainable pace |

> **The two roles are DELIBERATELY in tension.** Merging them removes the check: a PO who is also SM will always favour schedule over the team's health.

**PO and Business Analyst:** in many Vietnamese organisations the BA does most of the analysis and story writing while the PO owns order and value. **What is mandatory is that ordering authority sits with exactly one person.** Two people ordering a backlog is a recipe for chaos.

---

## 6. Being a PO across distributed and multiple teams

**When the team spans time zones:**

- **Increase acceptance criteria detail** to compensate for not being able to ask immediately.
- **Write decisions down** in Jira or Confluence rather than keeping them in your head.
- **Guarantee one overlapping hour** each day to clear blocking questions.

**When one product has several teams:**

- **One single product backlog** for the product — parallel backlogs create contradictory priorities.
- **One PO ultimately accountable**, possibly with area POs supporting each team.
- **Cross-team dependencies must surface early**, usually via a shared refinement session.

> **One PO serving about two teams is the practical limit.** Beyond that the PO becomes a bottleneck and teams start guessing.

---

## 7. Key takeaways

- Scrum separates **WHAT (PO), HOW (team), PROCESS (SM)** so schedule pressure does not automatically beat quality.
- **The PO decides order; the team decides volume and approach.**
- At planning, **the PO presents the goal and answers questions** but does not decide how much the team takes.
- **Daily Scrum belongs to the team** — a PO who attends listens rather than collecting status.
- **A sprint review without real stakeholders is only an internal demo.**
- The PO should attend retrospectives **but must step out if their presence stops candour**.
- Acceptance rests on **a shared Definition of Done and item-specific acceptance criteria**.
- **There is no "90 percent done"** — accepting partial work destroys the meaning of velocity.
- **Reject the item, not the person**, and ask how it reached sprint review.
- **Rejecting many items every sprint means refinement is broken**, not the team.
- **Adding work mid-sprint is wrong** — trade an equivalent item out instead.
- **Velocity is a forecasting tool, not a productivity target.**
- **An absent PO is a Scrum team's number one risk.**
- **The PO describes the problem; the team designs the solution.**
- **PO and SM are in deliberate tension**; merging the roles removes the check.
- **Backlog ordering authority belongs to one person**, even when a BA writes most stories.
- Distributed teams need **more detailed AC and written decisions**.
- Multiple teams need **one backlog and one ultimately accountable PO**.
- **A PO serving more than about two teams becomes a bottleneck.**

## 8. Summary

- Scrum's strength lies in **clear boundaries between three roles**, and most PO problems come from stepping into the team's half.
- **Each event gives the PO a specific job** — preparing well for refinement is the cheapest way to make every other event run smoothly.
- **Acceptance must be decisive and based on criteria agreed beforehand**, or every forecast loses meaning.
- **Scale is a real limit:** one PO cannot serve unlimited teams while keeping decision quality.
