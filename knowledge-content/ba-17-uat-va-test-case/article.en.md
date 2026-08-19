# Supporting Testing & UAT

## 1. The BA's role in testing

**A BA is not a tester, but the BA plays a decisive part in ensuring the product is right.**

**Four concrete contributions:**

**1. Making requirements verifiable.** If a tester cannot write a test case from your requirement, a developer cannot build it correctly either.

**2. Reviewing coverage.** Comparing the test set against the requirement list to find gaps: which requirement has no test?

**3. Classifying issues.** When a tester reports a problem, helping determine whether it is a **code defect** or **a case the requirement never covered**.

**4. Running UAT.** Preparing scenarios, supporting real users, and recording and classifying the results.

> **The founding principle: system tests must derive from the REQUIREMENTS, not from the code.** If you write tests by reading code, you only verify that the code does what it does — you cannot detect **functionality that is missing entirely**.

---

## 2. Writing test cases from acceptance criteria

**Each acceptance criterion should produce at least one test case, usually more.**

**From one AC, generate four groups of tests:**

| Group | Example for an order-placement AC |
|-------|----------------------------------|
| **Happy path** | Placing an order with a valid cart and complete delivery details |
| **Boundary cases** | A cart with exactly 1 item; the maximum permitted quantity; an order value exactly at the approval threshold |
| **Failure cases** | A product goes out of stock mid-flow; the payment gateway is unreachable; delivery details incomplete |
| **Permissions** | A user without ordering rights; a user restricted to their own branch |

> **Boundary cases are the second most-omitted group after failure cases.** A great many defects sit exactly at the edge: a value equal to the threshold, an empty list, a list with exactly one element, the maximum permitted characters.

**The structure of a basic test case:**

| Field | Content |
|-------|---------|
| **ID** | TC-042 |
| **Related requirement** | UC-07 / AC2 |
| **Precondition** | Logged in as Requester, cart contains 2 products |
| **Steps** | 1. Open the cart. 2. Press Confirm Order. 3. Enter the delivery address. 4. Press Complete |
| **Expected result** | Order created in Pending Confirmation; stock decremented; confirmation email sent within 1 minute |
| **Test data** | Product A (stock 10), product B (stock 3) |

> **The "related requirement" field is the most important one many teams skip.** It answers two questions instantly: which requirement is untested, and which test traces to no requirement.

---

## 3. Checklists — when full test cases are too heavy

**Not everything needs a full test case.** For repetitive or quick checks, **a checklist is far more efficient**.

**Checklists suit:**

- **Quick regression checks** before each release.
- **Interface consistency checks** across many screens.
- **Accessibility checks** — every image has alt text, every field has a label, keyboard navigation works.
- **Checking a repeated requirement type** — for example, every list screen must have empty, loading, and error states.

**An example checklist a BA should keep for every new screen:**

- [ ] The empty state displays correctly and suggests the next action
- [ ] The loading state displays and does not hang forever on failure
- [ ] The error state shows a useful message, not a technical error code
- [ ] Users without permission get a clear response
- [ ] Large data (a thousand rows) remains usable — pagination or filtering exists
- [ ] Destructive actions require confirmation
- [ ] Double-clicking does not create two records
- [ ] Navigating back midway does not lose entered data unintentionally

> **This checklist applies to EVERY screen, so it belongs to the definition of done rather than to any one story's acceptance criteria.**

---

## 4. What UAT is and how it differs from system testing

**UAT (user acceptance testing) is where real users confirm the system meets their business need.**

| | **System testing** | **UAT** |
|---|-------------------|---------|
| **Performed by** | Professional testers | Real business users |
| **The question** | *"Does the system match the specification?"* | *"Does the system help me do my job?"* |
| **Environment** | Test | Staging with realistic data |
| **Data** | Controlled test data | A masked copy of real data |
| **Finds** | Defects against the specification | The gap between specification and real need |

> **The key point: UAT is not for finding technical defects — that is system testing's job.** UAT finds what **the specification missed**: the real process differing from the description, exception cases nobody considered, actions that are technically correct but so inconvenient they are unusable.
>
> **If UAT surfaces mostly basic technical defects, system testing was not done well** — and you are wasting valuable business users' time.

---

## 5. Running an effective UAT session

**Preparation:**

**1. Pick the right people.** **Real** users, not their managers. Include both experts and newcomers, since they hit different problems.

**2. Write scenarios around BUSINESS TASKS, not screens.**

- ❌ *"Open screen A, enter field B, press button C"*
- ✅ *"Process an order for customer ABC Company for 50 boxes of paper, delivered to the Binh Duong warehouse before Friday"*

**3. Prepare realistic data.** Fake data hides problems from users. Real product names of real length, real codes, real quantities.

**4. Ensure a stable environment.** Nothing kills a UAT session faster than the system crashing midway.

**During the session:**

- **Give the task then watch in silence.** Wherever they pause or go wrong is where the problem is.
- **Do not explain when they get stuck.** If you must explain, the real product will need you sitting beside every user.
- **Record the PROBLEM, not the solution** they propose.
- **Record both what they say and what they do** — the two often differ.

**Afterwards:**

- **Classify the results**: code defect / missed requirement / new requirement / misunderstanding needing training.
- **Close the loop**: tell participants which issues were addressed and which were not, with reasons.

> **Failing to report back to UAT participants is the error that kills collaboration.** Next time you invite them, they will not come — because they believe their input leads nowhere.

---

## 6. Classifying UAT results

**Not everything raised in UAT is a defect to fix immediately.** Correct classification determines what happens next.

| Category | Signal | Handling |
|----------|--------|----------|
| **Code defect** | The requirement is clear and the system does it wrong | The team fixes it in this cycle |
| **Missed requirement** | The requirement never covered this case, and current behaviour is unacceptable | Create a backlog item and prioritize it |
| **New requirement** | The user wants something never in scope | Into the backlog, decided for a later release |
| **Misunderstanding** | The system is correct, the user is unfamiliar | Add training or improve in-product guidance |
| **Personal preference** | No business reason, just an old habit | Note it, no immediate action |

> **An important lesson: if many UAT issues fall into "missed requirement", that is a PROCESS SIGNAL.** It means elicitation and grooming did not cover exception cases well — something to improve for the next project, not merely a batch of defects to fix.

**About the "needs training" category:** be careful with it. **If many users misunderstand the same way, that is not a training problem — it is a design problem.**

---

## 7. Key takeaways

- **A BA is not a tester but plays a decisive part** in ensuring the product is right.
- **If a tester cannot write a test case from your requirement, a developer cannot build it correctly.**
- **System tests must derive from requirements, not code** — otherwise you cannot detect functionality that is missing entirely.
- Each AC should produce four test groups: **happy path, boundary, failure, permissions**.
- **Boundary cases are the second most-omitted group after failure cases** — many defects sit exactly at the edge.
- **The "related requirement" field is the most important one many teams skip.**
- **Checklists beat full test cases** for quick regression and repeated requirement types.
- A checklist applying to every screen **belongs to the definition of done**, not to one story's AC.
- **UAT is not for finding technical defects** — it finds what the specification missed.
- **If UAT surfaces mostly basic defects, system testing was inadequate** and you are wasting users' time.
- UAT scenarios must be written around **business tasks, not screens**.
- **Fake data hides problems from users** — use realistic, masked data.
- **Give the task then watch in silence**; do not explain when users get stuck.
- **Record both what they say and what they do** — the two often differ.
- Classify UAT results into **code defect, missed requirement, new requirement, misunderstanding, personal preference**.
- **Failing to report back to UAT participants is the error that kills collaboration.**
- **Many "missed requirement" findings are a process signal**, not just a batch of defects.
- **If many users misunderstand the same way, that is a design problem, not a training problem.**

## 8. Summary

- The BA's testing role is **making requirements verifiable, reviewing coverage, classifying issues, and running UAT**.
- **Test cases derive from acceptance criteria** and must cover four groups, of which boundary and failure are most often missing.
- **UAT answers whether the system helps me do my job**, a different question from system testing's.
- **Correctly classifying UAT results** determines what gets fixed now, what enters the backlog, and what becomes a process lesson.
