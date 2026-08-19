# UI/UX, Wireframes & Mockups

## 1. How UI and UX differ

> **UX is the whole experience of a user trying to achieve their goal. UI is the interface layer they see and operate.**

**UI is part of UX, not all of it.**

An example that makes the difference clear:

> A ticket booking app has a beautiful interface — harmonious colours, smooth animation, refined typography. **Good UI.**
>
> But to book one ticket the user passes through seven screens, re-enters information already given at step three, and cannot go back to correct it without losing everything. **Bad UX.**

| | **UI** | **UX** |
|---|-------|--------|
| **Covers** | Layout, colour, typography, buttons, icons | Task flow, information architecture, response time, error handling, documentation |
| **The question** | *"How does it look?"* | *"Do users achieve their goal easily?"* |
| **Measured by** | Aesthetic judgment, brand guideline compliance | Task completion rate, time on task, error rate, satisfaction |

> **The BA's role is not to design the UI — that is the designer's job.** The BA's role is to **ensure the task flow is correct and complete**, so the designer has the right foundation to design from.

---

## 2. The BA's contribution to good UX

**BAs contribute to UX through four concrete activities:**

**1. Understanding the users and their goals correctly.** Designers cannot design for a generic *"user"*. They need to know: who, doing what, how often, in what circumstances, at what skill level.

**2. Defining the complete task flow**, including branches and failure cases. **Many UX problems are really missing-flow problems**, not aesthetic ones.

**3. Supplying constraints and rules** — mandatory data, value limits, permissions, what error messages must say.

**4. Specifying usability requirements in measurable form**, rather than saying *"make it friendly"*.

### UX questions a BA should ask about every screen

- **Where does the user arrive from, and where do they go next?**
- **What does the empty state show?** (No data yet, no search results.)
- **What do the loading and error states show?**
- **Can the user cancel midway, and what happens to partial data?**
- **What does a user without permission see?** Hidden entirely, or shown disabled with an explanation?
- **How much data is really here?** Ten rows differs entirely from a thousand.
- **Which actions are irreversible, and do they need confirmation?**

> **Empty states, error states, and no-permission states are the three most-omitted items in screen specifications** — and the three that real users hit far more often than we assume.

---

## 3. Wireframes, mockups, and prototypes

These three words get used interchangeably. **They differ in fidelity and purpose.**

| | **Wireframe** | **Mockup** | **Prototype** |
|---|--------------|-----------|---------------|
| **Fidelity** | Low — boxes and lines | High — real colours, fonts, imagery | Low or high, but **interactive** |
| **Answers** | *"Is the structure and layout sensible?"* | *"Does it look right?"* | *"Is it comfortable to use?"* |
| **Made by** | The BA or the designer | The designer | The designer, sometimes the BA |
| **When** | Early, while exploring | Once the structure is settled | Before development, for testing |

**Wireframes are a BA's tool.** You need no design skill to draw boxes and labels — and that crudeness is precisely the advantage.

> **A powerful paradox: the cruder the prototype, the more valuable the early feedback.**
>
> Show a polished design and people comment on button colours. Show a hand sketch and people talk about **whether the process is right**. Users also hesitate to criticise something that looks finished, yet have no hesitation criticising a sketch.

---

## 4. Using wireframes effectively as a BA

**Wireframes serve three purposes:**

**1. Clarifying the requirement to yourself.** Drawing forces you to answer questions prose lets you dodge: where does this field go, how is this list sorted, what does the user press to go back?

**2. Confirming your understanding with users.** A drawing makes the conversation far more concrete than a description.

**3. Conveying context to designers and developers** — not for them to copy exactly, but so they understand the intent.

**Principles for BA wireframes:**

- **Keep the fidelity low.** Grey boxes, black text, no colour. Add colour and everyone will assume it is the final design.
- **Annotate the behaviour beside it**: *"This button only appears for the Manager role"*, *"The list paginates at 20 rows"*.
- **Draw the empty and error states too**, not only the fully populated one.
- **Use plausible data**, never *"lorem ipsum"* or *"abc xyz"*. Real data exposes length and format problems.

> **The essential thing to say every time you present a wireframe: this is a sketch of STRUCTURE and FLOW, not the final design.** Without that, you get the wrong kind of feedback and the designer feels encroached upon.

---

## 5. The boundary between BA and designer

This is the most friction-prone boundary and deserves stating clearly.

| Decision | Belongs to |
|----------|-----------|
| What users must be able to do | The BA, with business input |
| Which steps the task flow contains | The BA, with the designer |
| Business rules and data constraints | The BA |
| Which information appears on which screen | The BA and designer jointly |
| Layout, visual hierarchy, colour, typography | The designer |
| Specific interaction patterns (dropdown or radio, modal or page) | The designer |

> **A common BA mistake: over-specifying the interface.** *"A green Save button in the top-right corner"* is usually not a requirement but **a design decision in disguise**.
>
> **The test: ask why.** If the answer is a **genuine business reason** — consistency with an existing application, accessibility compliance, an established user expectation — then it is a **legitimate design constraint, so record it with its rationale**. If the answer is *"because I think it looks better"*, let the designer decide.

**Design constraints imposed unnecessarily, prematurely, or for the wrong reasons frustrate both designers and developers, and can lead to a suboptimal product.**

---

## 6. Specifying usability measurably

*"The interface must be user-friendly"* **is not a requirement — it is a wish.**

**How to translate it into measurable characteristics:**

| Dimension | Measurable phrasing |
|-----------|--------------------|
| **Ease of learning** | *"An untrained new user shall complete an order within 10 minutes of first opening the application."* |
| **Efficiency for experts** | *"An experienced user completes a standard order in no more than 6 clicks and 60 seconds."* |
| **Error prevention** | *"Every data-deleting action requires confirmation and is undoable within the session."* |
| **Memorability** | *"A user who has not used the system for 3 months can still perform the primary task without documentation."* |
| **Accessibility** | *"The application shall conform to WCAG 2.1 level AA."* |
| **Satisfaction** | *"A mean SUS score of at least 70 in the survey after three months in operation."* |

> **An important note: ease of learning and efficiency for experts are DIFFERENT and often conflicting goals.** A wizard-heavy interface is easy to learn but slows experts. A shortcut-heavy interface is efficient but hard to learn.
>
> **The BA must know which user class matters more**, and that is a question for stakeholders rather than something for the designer to guess.

---

## 7. Usability testing

**You do not need a professional lab.** A simple session with five real users surfaces most of the serious problems.

**How to run it:**

**1. Give a TASK, not a tour.** Do not walk them through the screens. Say: *"Place an order for 10 boxes of A4 paper delivered to the branch office"* — then **watch in silence**.

**2. Wherever they pause, hesitate, or go wrong is where the design has a problem.**

**3. Do not explain when they get stuck.** If you must explain, the real product will need you sitting beside every user.

**4. Record the PROBLEM, not the solution they propose.** When a user says *"there should be a button here"*, record *"the user could not find a way back to the previous step"*. **Solutions are the designer's job; the problem is the valuable data.**

> **The most surprising result in usability testing is usually not that users dislike something, but that they DO NOT SEE something you considered obvious.**

---

## 8. Key takeaways

- **UX is the whole experience of achieving a goal; UI is the visible interface layer.** UI is part of UX.
- A product can have **beautiful UI and terrible UX** if the task flow meanders and mistakes cannot be corrected.
- **The BA's role is not designing the UI but ensuring the task flow is correct and complete.**
- **Many UX problems are really missing-flow problems**, not aesthetic ones.
- The three most-omitted items in screen specifications: **empty states, error states, no-permission states**.
- **Wireframes for structure, mockups for appearance, prototypes for interaction** — three different purposes.
- **The cruder the prototype, the more valuable the early feedback** — people discuss process instead of button colours.
- **Wireframes are a BA's tool**, and their crudeness is the advantage rather than a defect.
- Wireframe rules: **keep fidelity low, annotate behaviour, draw empty and error states, use plausible data**.
- **Always state that a wireframe is a sketch of structure and flow, not the final design.**
- **Layout, colour, typography, and specific interaction patterns belong to the designer**, not the BA.
- ***"A green Save button top-right"* is usually a design decision disguised as a requirement.**
- The test: **ask why**; a genuine business reason means record it with rationale, *"it looks better"* means let the designer decide.
- ***"User-friendly"* is not a requirement** — translate it into measurable characteristics.
- **Ease of learning and expert efficiency are conflicting goals** — the BA must know which user class matters more.
- In usability testing, **give a task rather than a tour**, then watch in silence.
- **Do not explain when users get stuck** — if you must, the real product needs you beside every user.
- **Record the problem, not the solution** the user proposes.
- The most surprising finding is usually that users **DO NOT SEE** what you considered obvious.

## 9. Summary

- BAs contribute to UX by **understanding users correctly, defining complete flows, supplying constraints, and specifying usability measurably**.
- **Wireframes are the BA's thinking and communication tool**, not a design deliverable.
- **Respect the boundary with designers** — specify the need and the flow, leave the appearance to the specialists.
- **Testing with five real users** surfaces most serious problems, provided you give tasks and watch in silence.
