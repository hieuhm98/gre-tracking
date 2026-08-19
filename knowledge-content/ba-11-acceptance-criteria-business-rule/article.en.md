# Acceptance Criteria & Business Rules

## 1. What acceptance criteria are

> **Acceptance criteria (AC) are the specific conditions that must be true for an item to count as correctly done.**

They answer the question everyone on the team needs answered: ***"How do we know this is done right?"***

**Four characteristics of good AC:**

**1. Specific and verifiable.** Not *"search must be fast"* but *"search results display within 2 seconds with up to 1,000 records"*.

**2. Written in business language**, without technical jargon. Users must be able to read and confirm them.

**3. Covering exception conditions**, not only the happy path. **This is the most frequently omitted part.**

**4. Agreed BEFORE implementation begins**, not afterwards.

> **AC do not describe HOW.** *"Use a cache to speed up search"* is a design decision, not an acceptance criterion. AC state only **the conditions that must hold**.

---

## 2. The Given-When-Then format

This is the most widely used way to write AC, because it forces you to state **the three things an under-specified requirement usually omits**.

> **Given** *(the starting state)*
> **When** *(the action occurs)*
> **Then** *(the expected result)*

**A full example for an order placement story:**

> **AC1 — Successful order**
> **Given** the cart contains at least one in-stock product
> **When** the user confirms the order with valid delivery details
> **Then** the system creates an order in Pending Confirmation status, decrements stock, and sends a confirmation email within 1 minute
>
> **AC2 — Product goes out of stock in the meantime**
> **Given** a product in the cart went out of stock after the user added it
> **When** the user confirms the order
> **Then** the system shows a message naming which product is unavailable, preserves the cart, and does NOT create an order
>
> **AC3 — Connection lost during processing**
> **Given** the user has pressed confirm
> **When** the connection to the payment gateway fails
> **Then** the system keeps the order in Awaiting Payment status, shows retry guidance, and does NOT decrement stock a second time

> **Note AC2 and AC3: those are exactly what teams usually omit.** A story is only truly done when the system handles what can go wrong.

---

## 3. How many AC are enough

There is no fixed number, but there are useful indicators:

- **Too few (1–2 AC for a medium story)** → you probably described only the happy path.
- **Too many (over 10 AC)** → the story is probably too large and should be split.
- **No AC covering a failure case** → something is certainly missing.

**A quick checklist for every story:**

- Is the happy path covered?
- What displays when the data is **empty**?
- What happens with **too much data** (a thousand rows)?
- What does a user **without permission** see?
- How is an **external system failure** handled?
- What if the user **acts twice in quick succession**?
- Are there **value limits** to state (length, numeric range, format)?

> **A pragmatic rule: if a tester cannot write a test case from your AC, the AC is not yet sufficient.**

---

## 4. What a business rule is

> **A business rule is a policy or rule of the organization that exists independently of software and usually outlives every system.**

**Examples:**

- *"Orders above 50 million must be approved by the sales manager."*
- *"Gold-tier customers receive 10 percent off every order."*
- *"Medical records must be retained for a minimum of 15 years."*
- *"Only safety-trained staff may collect hazardous chemicals."*

**The key point: a business rule exists even where no software does.** Before the system existed, that rule was enforced on paper by people.

### Business rules versus requirements

| | **Business rule** | **Functional requirement** |
|---|------------------|---------------------------|
| **Nature** | An organizational policy | System behaviour |
| **Exists without software** | Yes | No |
| **Example** | *"Orders above 50 million need approval"* | *"The system shows a Submit for Approval button when the order total exceeds the threshold"* |
| **Owned by** | The business function | The product team |
| **Change frequency** | With company policy | With each release |

> **One business rule can generate several functional requirements** in different parts of the system: one on the order screen, one on the approval screen, one in reporting, one in the API.

---

## 5. Why business rules belong in their own place

**This is one of the highest-value practices that few teams adopt.**

**Four reasons:**

**1. Business rules change more often than processes, and processes more often than architecture.** An approval threshold can move from 50 to 100 million without anything else changing.

**2. One rule applies in several places.** Write it into three separate stories and you must remember to change all three when it moves — and you will miss one.

**3. Business rules outlive the project.** Systems get replaced, but *"orders above 50 million need approval"* remains.

**4. They belong to the business function, not the product team.** Keeping them separate clarifies who has the authority to change them.

**How to record a business rule well:**

| Field | Example |
|-------|---------|
| **ID** | BR-012 |
| **Statement** | Orders with a total value above 50,000,000 VND must be approved by the sales manager before processing |
| **Origin** | Internal finance policy 07/2024 |
| **Owner** | The CFO |
| **Stability** | Reviewed annually |
| **Exceptions** | Does not apply to Diamond-tier customers |

> **The most important field is ORIGIN.** It tells you whether the rule is negotiable and whom to consult when a change is needed.

---

## 6. Four kinds of business rule

Classifying them helps you notice which kind you are missing.

**1. Constraints.** What is mandatory or forbidden.

- *"An issued invoice may not be deleted."*

**2. Action enablers.** When a condition becomes true, an action must occur.

- *"When stock falls below the minimum level, the system must raise a replenishment request."*

**3. Inferences.** Deriving one fact from another.

- *"A customer with annual spend above 500 million is classified as Gold tier."*

**4. Computations.** A formula for calculating a value.

- *"Delivery fee is 2 percent of order value, minimum 20,000 and maximum 100,000 VND."*

> **Inferences are the most frequently missed kind.** They live implicitly in the heads of business staff and nobody thinks to say them aloud — until the system misclassifies an important customer.

---

## 7. Business rules in AC and in the system

**The right way to link them: AC reference a business rule rather than repeating its content.**

> **AC — High-value order approval**
> **Given** the user creates an order whose total exceeds the threshold defined in **BR-012**
> **When** the user presses Submit
> **Then** the system moves the order to Pending Approval and notifies the sales manager

**The benefit:** when the threshold moves from 50 to 100 million, you change **BR-012** in one place. Every AC referencing it remains correct automatically.

**The same principle applies in the system:** because business rules change often, they **should live where they can be changed without reprogramming** — a configuration table, a rule engine, or at minimum one centralised module.

**Questions a BA should ask about every business rule:**

- How often does this rule change?
- Who has the authority to change it?
- When it changes, must it be applied retroactively to existing data?
- Are there exceptions, and who may override it?
- Is an override logged?

> **The retroactive question is the most frequently omitted and the source of the most serious business incidents.** If the approval threshold changes, are orders already pending processed under the old rule or the new one?

---

## 8. Key takeaways

- **AC answer how we know this is done right.**
- Good AC are **specific, verifiable, in business language, cover exceptions, and agreed before implementation**.
- **AC do not describe how** — that is a design decision belonging to the development team.
- **Given-When-Then forces you to state the starting state, the action, and the expected result** — the three things usually omitted.
- **The most-omitted part of AC is exception conditions**, not the happy path.
- **Only 1–2 AC for a medium story** signals you described only the happy path.
- **Over 10 AC** signals a story too large to keep whole.
- The checklist: **empty data, too much data, no permission, external failure, double action, value limits**.
- **If a tester cannot write a test case from the AC, it is not sufficient.**
- **Business rules exist independently of software** and usually outlive every system.
- **One business rule can generate several functional requirements** in different parts of the system.
- Keep rules separate because they **change more often, apply in many places, outlive the project, and belong to the business**.
- **The most important field when recording a rule is its origin** — it reveals whether the rule is negotiable.
- Four kinds: **constraints, action enablers, inferences, computations**.
- **Inferences are the most frequently missed kind** because they live implicitly in business staff's heads.
- **AC should reference a business rule rather than repeat it**, so a policy change means one edit.
- Business rules should live where they can be **changed without reprogramming**.
- **The retroactive-application question is the most omitted** and causes the most serious business incidents.

## 9. Summary

- **AC are the shared contract between BA, developer, and tester** about what done means, so write them together and agree them first.
- **Given-When-Then is an omission-prevention tool**, especially effective for failure and exception cases.
- **Business rules are organizational assets, not project assets** — separate them, give them IDs, and record their origin.
- When AC reference a business rule instead of repeating it, **a policy change requires exactly one edit**.
