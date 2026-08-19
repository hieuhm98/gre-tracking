# Use Cases & Use Case Specifications

## 1. What a use case is and when to use one

> **A use case describes a sequence of interactions between a user (actor) and the system to achieve a goal of value.**

The key point: a use case is always written **from the actor's perspective** and always targets **a complete goal**, not an isolated action.

- ✅ *"Place a chemical request"* — a complete goal.
- ❌ *"Click the Save button"* — an action, not a goal.

### Use cases versus user stories

| | **User story** | **Use case** |
|---|---------------|--------------|
| **Length** | One sentence on a card | A structured document |
| **Detail** | Comes from conversation | Lives in the document |
| **Strong at** | Prioritization, working by iteration | Complex flows with many branches and exceptions |
| **Weak at** | Long flows with many branches | Prioritization and sprint-sized slicing |
| **Fits when** | The team sits together and talks constantly | Distributed teams, contracts, regulated systems |

> **This is not an either-or choice.** Many teams use stories to prioritize and plan, then write use case specifications for **the most complex flows** — where one sentence on a card is not enough.

**Use a use case when:** the flow has many branches and exceptions, several actors participate, documentation is needed for a contract or certification, or the team is too distributed to rely on conversation.

---

## 2. The components of a use case specification

There is no single standard template, but these fields appear in almost all of them:

| Field | Content |
|-------|---------|
| **ID and name** | UC-07 — Place a chemical request |
| **Primary actor** | Who initiates it and receives the value |
| **Secondary actors** | Systems or people who assist |
| **Brief description** | One or two sentences about the goal |
| **Preconditions** | What must be true before it starts |
| **Postconditions** | The system state after successful completion |
| **Trigger** | The event that starts it |
| **Normal flow** | The steps when everything goes well |
| **Alternative flows** | Other routes that also reach success |
| **Exception flows** | What happens when something fails |
| **Related business rules** | References to rule IDs |
| **Related nonfunctional requirements** | Performance and security applying to this use case |

> **The two most-omitted fields are preconditions and postconditions.** Without them, developers do not know what state the use case starts and ends in — the source of many integration defects between screens.

---

## 3. The three kinds of flow

### Normal flow

The sequence when **everything goes well**. Write it in pairs: **actor action → system response**.

> **UC-07 — Normal flow**
>
> 1. The requester selects Create New Request.
> 2. The system displays an empty request form.
> 3. The requester enters the chemical name and quantity.
> 4. The system searches the stockroom and the vendor catalogs.
> 5. The system displays available options with estimated delivery times.
> 6. The requester selects an option and confirms.
> 7. The system creates the request in Pending Approval status and notifies the approver.

**Principles for the normal flow:**

- **Number every step** so other flows can reference them.
- **One action per step**, never merged.
- **Do not describe the interface** — say *"the system displays the options"*, not *"the system shows a three-column table"*.
- **Keep it to 5 to 10 steps.** Longer usually means you merged several goals.

### Alternative flows

**Other routes that also reach success.** State which step they branch from and where they rejoin.

> **3a. The requester picks a previously ordered chemical**
> 3a1. The requester selects Reorder from History.
> 3a2. The system displays chemicals ordered in the last 12 months.
> 3a3. The requester selects one. The flow continues at step 4.

### Exception flows

**What happens when something fails.** This is the **most important and most omitted** part.

> **4a. The chemical is found in neither the stockroom nor the catalogs**
> 4a1. The system reports it was not found and offers to raise a special request.
> 4a2. If the requester agrees, the system creates the request in Sourcing Needed status. The use case ends.
>
> **7a. The notification service is unreachable**
> 7a1. The system still creates the request and records the notification failure.
> 7a2. The system retries the notification after 5 minutes.

> **The numbering convention matters:** `4a` means the first branch off step 4. It lets you reference precisely in documents, test cases, and defect reports.

---

## 4. Identifying actors

**An actor is anyone or any system that interacts with the system under discussion from outside it.**

**Three kinds of actor:**

- **Users** — classified by role, not job title. *"Requester"* and *"Approver"* are two actors even when one person plays both at different times.
- **External systems** — payment gateways, HR systems, email services.
- **Time** — for scheduled use cases, the actor is a timer.

**Common mistakes:**

- **Confusing an actor with a specific person.** *"Minh from purchasing"* is not an actor; *"Requester"* is.
- **Omitting system actors.** Many use cases involve an external system that is never written down, leading to missed integration requirements.
- **Creating too many actors.** If two roles share the same use cases and the same permissions, they should be one actor.

---

## 5. Common mistakes when writing use cases

**1. Writing at the action level rather than the goal level.** *"Log in"* is usually not a use case but a precondition of many others.

**2. Describing the interface inside the flow.** *"The user clicks the green button on the right"* locks the design and makes the document stale the moment the interface changes.

**3. Writing only the normal flow.** The most serious mistake. **Most of the complexity and most of the defects live in the exception flows.**

**4. Flows that are too long.** Over 15 steps usually means several use cases merged.

**5. Not referencing business rules.** Copying rule text into the flow means editing many places when the rule changes.

**6. Writing use cases for everything.** Not every function needs a full specification. **Use it for the most complex flows, where a card sentence is not enough.**

> **A quality test: hand the specification to a tester and ask whether they can write complete test cases.** If they must come back with many questions, it is not yet sufficient.

---

## 6. Use case diagrams versus specifications

**These serve different purposes and do not replace each other.**

**A use case diagram** gives **a high-level scope picture**: which actor uses which capability. It answers *"who does this system serve and what can it do?"*

**It does NOT show:** step order, conditions, exceptions, or data.

**A use case specification** gives **the flow detail**. That is what developers and testers actually work from.

> **A common mistake: drawing the diagram and considering the specification complete.** The diagram is a table of contents; the content lives in the specification.

**Three relationships on a use case diagram:**

- **Association** — an actor participates in a use case (a plain line).
- **Include** — use case A always invokes B as a mandatory part.
- **Extend** — use case B adds behaviour to A under a certain condition.

> **Practical advice: do not overuse include and extend.** They invite argument and add little for non-specialist readers. If the diagram becomes hard to follow because of them, simplify it.

---

## 7. Key takeaways

- **A use case describes actor-system interaction to achieve a goal of value**, not an isolated action.
- **User stories are strong at prioritization; use cases at complex, multi-branch flows with exceptions.**
- **It is not an either-or choice** — use stories to plan and use cases for the most complex flows.
- Use a use case when **many branches, many actors, contractual documentation, or a distributed team**.
- **Preconditions and postconditions are the two most-omitted fields**, causing integration defects between screens.
- The normal flow is written in **actor action → system response** pairs, kept to 5 to 10 steps.
- **Never describe the interface in the flow** — it locks the design and dates the document instantly.
- **Exception flows are the most important and most omitted part** — most defects live there.
- The convention **4a** means the first branch off step 4, enabling precise references.
- **Actors are classified by role, never by job title or a person's name.**
- **Omitting system actors** leads to missed integration requirements.
- **If two roles share the same use cases and permissions, they should be one actor.**
- ***"Log in"* is usually not a use case** but a precondition of many others.
- **A flow over 15 steps usually means several use cases merged.**
- **Reference business rules rather than copying them**, so a rule change means one edit.
- **Do not write use cases for everything** — only the most complex flows.
- The test: **can a tester write complete test cases from the specification**.
- **The diagram is the table of contents; the specification is the content** — drawing one is not specifying.
- **Do not overuse include and extend** — they invite argument and add little for non-specialists.

## 8. Summary

- Use cases are a strong tool for **complex flows with many branches and exceptions**, where one card sentence is not enough.
- Three flow types — **normal, alternative, exception** — and the exception flows hold most of the value.
- **Identify actors by role**, and do not forget external systems are actors too.
- **Diagrams give scope, specifications give detail** — they complement rather than replace each other.
