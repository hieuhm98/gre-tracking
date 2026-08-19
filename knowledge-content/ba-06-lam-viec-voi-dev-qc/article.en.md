# Working With Dev & QC

## 1. Three roles, three different goals

A delivery team is not a uniform block. **BA, developer, and tester see the same feature through three different lenses** — and understanding that is the first step to collaborating well.

| Role | The question they ask themselves | What they fear most |
|------|----------------------------------|---------------------|
| **BA** | *"What is the real business need?"* | Finding out after it is built that it was the wrong thing |
| **Developer** | *"What exactly must I build, and in what time?"* | Requirements changing repeatedly after the code is written |
| **QC / Tester** | *"How do I know it is right, and where is it wrong?"* | Having no clear criterion to judge right from wrong |

> **Most team conflict is not somebody being deliberately difficult; it is these three goals colliding.** Developers want stable requirements; the business wants flexibility. Testers want clear criteria; the BA sometimes does not yet have enough information to supply them.

---

## 2. Working with developers

### What developers actually need from a BA

**1. Clarity about exception cases.** The happy path is usually easy. What consumes time is: *what shows when data is empty, what happens when the API fails, what does an unauthorised user see, who wins when two people edit at once?*

**2. The reason behind the requirement.** When developers understand **why**, they often propose a cheaper route to the same goal. When they only receive **what**, all they can do is follow the letter.

**3. Timely answers.** A question unanswered for a day leaves them either blocked or guessing. **Guessing is the worse failure mode.**

**4. Stability within the sprint.** A mid-sprint change costs more than the same change next sprint, because of disruption and lost momentum.

### When a developer says this is complex

**Do not respond with suspicion.** Ask further:

- *"What specifically makes it complex?"*
- *"If we dropped part X, would that simplify it a lot?"*
- *"Is there a cheaper way to meet the same business need?"*

> **There are usually several ways to meet one need at very different costs. That conversation is where a BA adds the most value — more than any document.**

### What a BA should NOT do with developers

- **Do not specify the technical solution.** Say *"the system must retain a change history"*, not *"create a history table with columns…"*
- **Do not promise on their behalf.** When a customer asks when it will be done, do not answer before asking the team.
- **Do not forward a requirement you do not understand.** If it is unclear to you, it will be unclear to them.

---

## 3. Working with QC / testers

### Why testers are a BA's best ally

**Testers are the most commonly omitted group in requirements reviews, yet the most valuable one.**

The reason: **the testing mindset is an extremely effective defect filter applied to requirements.** When a tester reads a requirement, they automatically ask:

- *How would I prove this is correct?* → exposes **unverifiable** requirements.
- *What is the expected result?* → exposes **under-specified** requirements.
- *Are there other cases?* → exposes **missing exceptions**.

> **A pragmatic rule: if a tester cannot write a test case from your requirement, a developer cannot build it correctly either.**

### Concrete collaboration

**Write acceptance criteria together.** The BA brings business understanding, the tester brings exception-hunting instincts. The result is far better than a BA writing alone and a tester reviewing afterwards.

**Bring testers into grooming.** They ask the questions BA and developers skip, at the moment it is still cheap to fix.

**Classify defects together.** When a tester raises an issue, the first question is: **is this a code defect, or a case the requirement never covered?**

- If a **code defect** → the developer fixes it.
- If a **missing requirement** → it is a new backlog item to be prioritized, not slipped quietly into the sprint.

> **Confusing the two produces two bad outcomes: either the team is unfairly blamed for a missing requirement, or scope expands silently under the label of bug fixing.**

---

## 4. Handling disagreement: requirement changes

**The situation:** the requirement was agreed, the team started building, and now the customer wants a change.

**The right process:**

**1. Establish what the change really is.** Many change requests turn out to be **clarifications** of something already implied — and a clarification is not a scope change.

**2. Analyse impact with the team.** Not just coding effort but regression testing, documentation updates, and effects on what is already built.

**3. Present the trade-off, not a refusal.** *"Yes, this takes about three days. Putting it in this sprint means story X moves to the next one. Which do you prefer?"*

**4. Record the decision with its rationale.** In six months someone will ask why it was done this way.

> **The boundary between clarification and scope change is the biggest source of dispute, especially on outsourced projects.** Define it **beforehand**, not once the dispute has erupted.

---

## 5. Handling disagreement: arguing about defects

**The classic situation:** a tester logs a defect, the developer says *"that is not a bug, the requirement never covered this case"*, and the tester says *"but this behaviour is clearly wrong"*.

**Both are right — and that is exactly the problem.**

**How to handle it:**

**Step 1 — Determine: does the requirement cover this case?**

- **Yes, and the system does it wrong** → it is a genuine defect; the developer fixes it.
- **Not covered** → not a defect in the contractual sense, but still a gap needing a decision.

**Step 2 — For a gap, ask: is the current behaviour acceptable?**

- **Acceptable** → record it as a decision and close the issue.
- **Not acceptable** → create a new backlog item and prioritize it normally.

**Step 3 — Extract the lesson.** If many defects fall into the *"requirement never covered it"* category, that is a **process signal**: the BA needs to cover exception cases better during grooming.

> **The most important thing: do not let the argument become a hunt for who is at fault.** The right question is not *"who was wrong"* but *"how do we catch this earlier next time"*.

---

## 6. Role boundaries — who decides what

Many conflicts are really **boundary conflicts** rather than content disagreements.

| Decision | Belongs to |
|----------|-----------|
| What the product should do | The Product Owner / customer, with BA input |
| What exactly this requirement means | The BA, after clarifying with the authority |
| How it is built, what architecture | The development team |
| Effort estimates | The development team, not the BA or PM |
| Test strategy and test scope | The QC lead |
| The order of work and what gets cut | The Product Owner |
| Whether quality is good enough to ship | The whole team, per the definition of done |

> **The two most common boundary violations:**
>
> **1. The BA estimating on the team's behalf.** When a customer asks *"how long will this take?"* and the BA answers immediately, you just committed for the people who must do the work.
>
> **2. Developers deciding business behaviour.** When a requirement is ambiguous and a developer picks a handling, a business decision is being made by someone without business context.

---

## 7. Building a good working relationship

**Four habits that make a large difference:**

**1. Be present and available.** Most of the value a BA creates during a sprint comes from **answering questions promptly**. A brilliant BA nobody can reach helps nobody.

**2. Admit when you do not know.** *"I am not sure — let me check and get back to you today"* builds more credibility than a confident guess that turns out wrong.

**3. Shield the team when needed.** When a customer pushes extra work mid-sprint, the BA should explain the impact rather than staying silent and leaving the team to cope.

**4. Give credit publicly.** When a developer spots a gap in the requirements, say so in the review. It encourages the whole team to hunt for defects early.

> **The best relationship indicator: developers and testers come to you before deciding for themselves.** That means they trust you to answer fast and answer correctly.

---

## 8. Key takeaways

- **BA, developer, and tester see the same feature through three lenses** with three different fears.
- Most conflict is **not deliberate obstruction** but these three goals colliding.
- What developers need most: **clarity on exceptions, the reason behind the requirement, timely answers, sprint stability**.
- When developers understand **why**, they often propose a cheaper route to the same goal.
- **An unanswered question leaves developers blocked or guessing** — guessing is the worse failure mode.
- When a developer says *"this is complex"*, ask **what specifically makes it complex and whether a cheaper option exists**.
- **A BA specifies the need, not the technical solution.**
- **Do not forward a requirement you do not understand** — developers will not understand it either.
- **Testers are the most omitted group in requirements reviews and the most valuable.**
- **If a tester cannot write a test case from your requirement, a developer cannot build it correctly.**
- On any defect, the first question is: **code defect, or a case the requirement never covered?**
- Confusing the two produces **unfair blame or silent scope expansion under the label of bug fixing**.
- Many change requests turn out to be **clarifications of something already implied** — not scope changes.
- **Present the trade-off, not a refusal**: if we add this, that moves out.
- **The clarification-versus-change boundary must be defined beforehand**, not once a dispute erupts.
- In a defect argument, the right question is not *"who was wrong"* but ***"how do we catch it earlier"***.
- Two common boundary violations: **the BA estimating for the team** and **developers deciding business behaviour**.
- **Effort estimates belong to the development team**, not the BA or PM.
- **Being present and available** creates most of a BA's in-sprint value.
- The best relationship indicator: **developers and testers ask you before deciding themselves**.

## 9. Summary

- Good collaboration starts with understanding **what each role fears** and what makes their work easier.
- With developers, a BA's greatest value is **clarifying exceptions, explaining the why, and answering fast**.
- With QC, **jointly written acceptance criteria** and **correct defect classification** are the two key collaboration points.
- When disagreement arises, **separate the problem from the person** and shift the question from *who was wrong* to *how do we catch it earlier next time*.
