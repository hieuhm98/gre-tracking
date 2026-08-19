# Requirements Management & Change Management

## 1. What requirements management is & how it differs from development

**Requirements engineering has two halves:**

| | **Requirements development** | **Requirements management** |
|---|----------------------------|----------------------------|
| **Purpose** | **Producing** a correct set of requirements | **Maintaining** that set as time passes and things change |
| **Activities** | Elicitation, analysis, specification, validation | Baselining, version control, status tracking, change management, tracing |
| **When it happens** | Mostly early, and at the start of each iteration | **Continuously from the first baseline until the product is retired** |
| **Central question** | *"What do we need to build?"* | *"What did we agree to build, who is doing what, and what has changed?"* |

> **The key point: excellent requirements development without requirements management falls apart within weeks.** You have a great document, then people start changing it, nobody knows which version is current, two people work from different versions, and by month three nobody is sure what the system is supposed to do.

### Four core activities

**1. Establishing and maintaining baselines** — freezing an agreed set of requirements as a reference point.

**2. Version and change control** — every change is recorded, assessed, and consciously approved.

**3. Status tracking** — where each requirement stands in its life cycle.

**4. Tracing** — knowing which requirement relates to which other requirement, design, code, and test.

### This applies to EVERY method

> **A common misconception: requirements management is only for waterfall projects.**
>
> **Wrong.** An agile team also needs to know **what the current backlog is**, **which stories are done**, **who agreed to what**, and **whether the acceptance criteria for this story have changed**. They just use **lighter mechanisms** — a backlog tool instead of a formal change control board.
>
> **What does not change across methods is the need to know current state and change history.**

---

## 2. Baselines & version control for requirements

### What a baseline is

**A baseline is a reviewed and agreed set of requirements, frozen as a reference point for subsequent work.**

> **A baseline does NOT mean requirements are frozen forever.** It means **change from this point on must go through a conscious process** rather than silently slipping in.

**Why baselines matter:**

- They give **a shared reference point** — when someone says *"the requirements changed"*, everyone knows changed from what.
- They are **the basis for estimation** — an estimate without a baseline is a promise with no foundation.
- They allow **measuring volatility** — how much has changed since the baseline?
- They are **the basis for contracts** in relationships with external vendors.

**When to baseline:**

- After the set of requirements has been **reviewed and validated**.
- Before **construction begins** on that part of the product.
- **Do not wait until the entire system is specified** — you can baseline by part, by release, by iteration.

> **In agile, the baseline corresponds to "the content of this iteration is locked".** The team agrees the story list for the iteration; mid-iteration change requires a conscious conversation, not just adding a card to the board.

### Version control

**Every requirements document — or every item in a requirements tool — needs:**

- **A unique version identifier** so everyone knows which version they are discussing.
- **A revision history** recording: **what changed, who changed it, when, and WHY**.

> **The "why" field is the most important one and the most frequently left blank.**
>
> Six months later, someone will look at a strange requirement and ask *"why is it like this?"*. If the history says only *"updated section 3.4"*, you learn nothing. If it says *"changed from 30 to 60 days at Legal request under regulation X"*, you immediately know whether the requirement **is negotiable**.

**Practical rules:**

- **Do not use file names as your versioning mechanism.** *"SRS_final_v2_REALLY_final_JohnEdit.docx"* is the signature of a broken process.
- **One single source of truth.** If requirements exist in three places, they will contradict each other within a month.
- **Control who can change what.** Not everyone should be able to edit baselined requirements.

---

## 3. Requirement attributes & status

### Why the requirement text alone is not enough

**A requirement is not just a sentence.** Surrounding it is information you need in order to manage it.

**Useful attributes:**

| Attribute | Why it is needed |
|-----------|-----------------|
| **Unique, persistent identifier** | For referencing, tracing, and discussion |
| **Origin** | When clarification or conflict resolution is needed, you know whom to ask |
| **Rationale** | Tells you whether the requirement is negotiable |
| **Priority** | The basis for controlled scope reduction |
| **Status** | Where it stands in the life cycle |
| **Version** | How many times it has changed |
| **Owner** | Who is accountable for it |
| **Allocated release** | Which release or iteration it belongs to |
| **Effort estimate** | The basis for planning |
| **Risk level** | The degree of technical uncertainty |
| **Related requirements / dependencies** | What must change alongside it |

> **Do not try to record every attribute for every requirement.** That creates enormous maintenance cost nobody uses. **Pick the smallest set of attributes you ACTUALLY use to make decisions**, and drop the rest.
>
> **The test: for each attribute, ask *"what decision will be made based on this field?"*** If you cannot answer, do not track it.

### The requirement status life cycle

**A typical set of statuses:**

| Status | Meaning |
|--------|---------|
| **Proposed** | Raised but not yet evaluated |
| **Approved** | Analysed, accepted, and allocated to a release |
| **Implemented** | Code written and unit tests passing |
| **Verified** | Passed testing; works correctly in the product |
| **Deferred** | Approved but moved to a later release |
| **Deleted** | Removed, **but retained in the system with a reason** |
| **Rejected** | Proposed but not accepted |

> **Why NOT delete a removed requirement outright:** rejected ideas **have a way of coming back**. If you keep it with the reason for rejection, then the next time someone proposes it you have the answer ready and do not have to re-analyse from scratch.

### The power of status tracking

**The status distribution gives you a meaningful picture of progress** — something a *"70 percent complete"* number never can.

> **An illustration:** Two projects both report *"70 percent complete"*.
>
> **Project A:** 70 percent of requirements are **verified**, 30 percent **implemented**. → The project is in good shape.
>
> **Project B:** 70 percent are **implemented** but only 5 percent **verified**. → **The project is in serious trouble** — an enormous unseen mass of testing and defect fixing lies ahead.
>
> **The same percentage, two completely different realities.**

---

## 4. Measuring & reporting requirements status

### Useful measures

**1. Status distribution over time.** Chart the number of requirements in each status week by week. **You want to see the "verified" line rising steadily.** If "implemented" rises fast while "verified" stays flat, you are accumulating testing debt.

**2. Requirements change rate.** How many requirements are added, modified, deleted per week?

> **This is one of the strongest project health indicators there is.**
>
> **The change rate must DECREASE over time.** If at week 20 you are still changing requirements at the week-3 rate, one of three things is happening: **you have not talked to the right people**, **the product vision is unclear**, or **scope is expanding uncontrolled**.

**3. Total requirement count over time (scope creep).** If this line keeps rising, scope is inflating.

**4. Number of requirements in TBD status.** Each TBD is an unresolved risk. **This number must reach zero before that part is implemented.**

**5. Requirements volatility.** The percentage of requirements changed since baseline. **Requirements modified repeatedly are a sign you have not understood the problem correctly.**

### How to present it to management

> **The principle: present TRENDS, not a snapshot.**

A single number (*"we have 340 requirements"*) says nothing. **A trend (*"we have 340 requirements, up from 280 last month and 210 two months ago"*) tells a very clear story.**

**Three questions a requirements status report must answer:**

1. **How much is completed and verified?**
2. **Is scope stabilising?**
3. **How much unresolved uncertainty remains?**

---

## 5. Why change happens & what it really costs

### Change is normal, not failure

> **A harmful misconception: a requirements change means somebody got it wrong early on.**
>
> **Usually not.** Change happens for entirely legitimate reasons:
>
> - **The business changes** — markets shift, competitors ship, new regulations arrive.
> - **Understanding grows** — users see a prototype and realise what they actually need.
> - **Technical constraints surface** — what seemed feasible is not.
> - **Mistakes are found** — and fixing a mistake is always better than building it.
>
> **The goal is NOT to prevent change. The goal is to ensure each change is made CONSCIOUSLY, with an understanding of its cost.**

### The real cost of a change

**Whoever proposes a change usually sees only the tip:** *"just add one more field to this screen."*

**The submerged part includes:**

- Analysing and clarifying the new requirement.
- Updating the requirements documentation and models.
- Design changes, possibly rippling into other components.
- Database changes and possibly data migration.
- Writing code and unit tests.
- Updating test cases; **rerunning regression tests**.
- Updating user documentation and training material.
- **Opportunity cost** — what work gets pushed out to make room?
- **Disruption cost** — the team switches context and loses momentum.

> **Disruption cost is almost never counted, but it is very real.** A small change dropped into the middle of an iteration can cost more than the same change planned for the next one.

### Cost rises with phase

**The same change costs very differently depending on when it arrives:**

- **During requirements:** edit a few lines of text.
- **After design:** redo the design.
- **After coding:** change code, change tests, run regression.
- **After delivery:** ship a patch, notify customers, retrain, possibly migrate data.

> **This is why early discovery has enormous value — and it is the economic argument for reviews, prototypes, and incremental delivery.**

---

## 6. The change control process

### Its real purpose

> **A change control process does NOT exist to say "no". It exists to ensure that when you say "yes", you know what you are agreeing to.**

**A good process must be:**

- **Simple enough that people actually use it.** A heavyweight process gets bypassed, and change enters through the back door.
- **Fast enough not to block progress.** If a small change takes three weeks to approve, the team will just do it without asking.
- **Transparent** — everyone can see the status of their proposal.
- **Proportional to risk** — a small change does not need the same scrutiny as a large one.

### Six steps

**1. Submit the proposal.** Anyone can propose. The proposal needs: **a description of the change, the reason, the expected benefit, urgency, and the proposer.**

**2. Preliminary screening.** One person — usually the BA — checks whether the proposal is **clear, not a duplicate, and within the scope of consideration**.

**3. Impact analysis.** Covered in detail below.

**4. Decision.** Approve, reject, defer, or request more information. **Every decision must be recorded with its rationale.**

**5. Communicate.** Everyone affected must be informed — including **the proposer when it is rejected**.

> **Failing to close the loop with the proposer is the common error that kills a process.** If people submit proposals and never hear back, they stop using the process and start going around it.

**6. Implement and update the baseline.** The change is made, requirements documentation updated, and status tracked through to verification.

### Tiering by impact

**Do not use one process for every kind of change.**

| Tier | Example | Who decides |
|------|---------|-------------|
| **Small** | Fixing a typo, clarifying wording without changing meaning | The BA or team lead decides on the spot |
| **Medium** | Adding a field, changing a validation rule | The project manager with a customer representative |
| **Large** | New functionality, business process change, schedule impact | The full change control board |

> **The key point: reserve deep scrutiny for the changes that genuinely need it.** Convening a whole board to approve a typo fix is the fastest way to make everyone resent and avoid the process.

---

## 7. The change control board: composition and operation

**The change control board (CCB)** is the group with authority to decide on change proposals.

### Composition

**Who must be present:**

- **A customer representative or product owner** — to judge business value.
- **The project manager** — to assess schedule and resource impact.
- **A technical representative** — to assess technical impact and feasibility.
- **A testing representative** — to assess testing impact.
- **The BA** — to provide analysis and context.

**The size principle:**

> **A CCB must be SMALL enough to actually meet and actually decide.** A 15-person board meets monthly and decides nothing. **The effective number is usually 3 to 6 people with real authority.**

**The authority principle:**

> **Every member must be able to decide on behalf of their organization.** If someone has to say *"let me check with my boss"* for every decision, they are not a real CCB member — they are a messenger.

### Operating effectively

- **Meet regularly and often** — weekly usually beats monthly, because it keeps the queue short.
- **Have a fast path for urgent changes** — but still record the decision.
- **Review proposals in batches, not one at a time.** Looking at 10 proposals together shows you the **aggregate impact** — which reviewing them individually never does.
- **Record the decision AND the rationale.** Six months later someone will ask *"why did we reject this?"*

### The BA role on the CCB

**The BA is usually NOT the decision-maker, but the person who:**

- **Prepares the impact analysis** so the board has a basis for deciding.
- **Clarifies the proposal** before it reaches the board — many proposals are too vague to evaluate.
- **Identifies the related requirements** that will be affected.
- **Updates the documentation** after the decision.
- **Points out when a series of small changes is accumulating** into a large scope shift.

> **The BA most valuable contribution: supplying the information for the board to decide WELL, not defending the baseline at all costs.**

---

## 8. Change impact analysis

> **Impact analysis is what turns a change proposal from a vague idea into an informed decision.**

### Three groups of questions

**Group 1: Impact on requirements**

- Which requirements are changed, added, or removed?
- **Which OTHER requirements are affected?** This is where tracing earns its keep.
- Does it conflict with any existing requirement?
- Which business rules are affected?

**Group 2: Impact on the product**

- Which design components must change?
- Does it affect the architecture? **This is the most important question** — architectural change has a completely different cost profile from a local change.
- Must the database change? Is data migration needed?
- Are interfaces to other systems affected?
- Which test cases must be added or modified? **How wide is the regression testing scope?**
- Must user documentation and training material be updated?

**Group 3: Impact on the project**

- What is the effort estimate — **including testing and documentation**, not just coding?
- How is the schedule affected?
- **What work gets pushed out to make room?** This is the question proposers rarely consider.
- Does it introduce new risks?
- Is any completed work wasted?

### The value of tracing in impact analysis

> **This is where the investment in requirements tracing pays a dividend.**
>
> Without tracing, impact analysis relies on **human memory** — *"I think it also affects the billing module, let me ask Minh."* **You will miss something**, and you will find out during testing or after delivery.
>
> With tracing, you can **query**: which design, code, tests, and other requirements does this one link to? **The answer comes in minutes instead of days, and is complete instead of guesswork.**

### Presenting the results

**An impact analysis should deliver:**

- **An effort estimate as a range**, not a single number.
- **A concrete list** of what is affected.
- **Alternatives** — there is usually more than one way to meet the need, at different costs.
- **A recommendation** with its rationale.

> **Beware the underestimation bias.** Analysts typically think only about the coding work and skip regression testing, documentation updates, and disruption cost. **A practical rule: when an estimate seems too small, ask yourself whether you counted the regression testing.**

---

## 9. Measuring change & recognising scope creep

### What scope creep is

> **Scope creep is the gradual, uncontrolled expansion of project scope through many small changes, each of which looks reasonable on its own.**

**Why it is more dangerous than one large change:** a large change is visible, assessed, and decided. **Fifty small changes, each "just a day of work", are never examined as a whole — yet together they are ten weeks of work nobody ever approved.**

### Measures that detect scope creep

**1. Total requirement count over time.** Chart it. **If it keeps rising after baseline, scope is inflating.**

**2. Total effort of approved changes.** Sum the estimates of every change. **This number is usually shocking the first time anyone sees it.**

**3. Change ratio against the original baseline.** If 40 percent of requirements have changed since baseline, that baseline no longer means anything.

**4. The origin of changes.** Who proposes them?

> **Origin analysis is very revealing.** If 60 percent of changes come from one stakeholder, that person **probably was not adequately involved during initial elicitation**. That is a process problem to fix, not just a batch of changes to approve.

**5. The reason for changes.** Classify them:

- **A requirement missed** initially → an elicitation problem.
- **A requirement misunderstood** → a specification or review problem.
- **The business genuinely changed** → entirely legitimate, nobody is at fault.
- **A new idea** → evaluate on value.

> **This classification turns change data into PROCESS IMPROVEMENT.** If most changes are of the "missed" kind, you know precisely what to improve on the next project.

### Distinguishing scope creep from legitimate change

| | **Legitimate change** | **Scope creep** |
|---|----------------------|-----------------|
| Recorded and assessed | Yes | Usually not |
| Has impact analysis | Yes | No |
| Approved by someone with authority | Yes | Usually slips in silently |
| Schedule and resources adjusted | Yes | No — the team is just expected to absorb it |

> **The clearest sign of scope creep: workload increases but schedule and resources do not.**
>
> **This is really not a change problem — it is a problem of refusing to acknowledge the consequences of change.**

---

## 10. A healthy change management culture

### Four signs of a good culture

**1. Change is discussed openly, not through the back door.** If people have to quietly ask a developer to "sneak it in", your process is too heavy or too rigid.

**2. Rejecting a change is routine.** If every proposal gets approved, the board is not really deciding — it is rubber-stamping.

**3. Consequences are acknowledged publicly.** When a change is approved, the organization **states what gets pushed out or how the schedule moves**. There is no free lunch, and pretending there is destroys trust.

**4. Change data is used for improvement, not for blame.** Analysing *"why did we miss this requirement"* must lead to improving elicitation, not to finding someone to hold responsible.

### Four signs of a bad culture

- **The process is too heavy** so people avoid it.
- **Everything is "urgent"** so the process is routinely bypassed.
- **The team is expected to absorb every change** without any schedule adjustment.
- **Proposers never hear back**, so they stop using the process.

### The final balance

> **Both extremes fail:**
>
> **Too rigid** → the project delivers exactly what was specified 18 months ago, but that is no longer what the organization needs. **You succeed procedurally and fail substantively.**
>
> **Too loose** → the project never finishes because the target keeps moving. **The team burns out, trust erodes, and nobody believes any commitment any more.**
>
> **The balance point: welcome the RIGHT changes, with full understanding of the cost, and with honest adjustment of schedule and scope.**

### The closing message

> **Good requirements management is not about preventing change — it is about making change TRANSPARENT and DELIBERATE.**
>
> Baselines give you a reference point. Attributes and status give you visibility. Tracing gives you the ability to analyse impact. The change process gives you informed decisions. **All of it serves one purpose: the team knows what it agreed to build, and the organization knows what each change costs.**

---

## Key takeaways

- **Requirements development produces the right set; requirements management maintains it as things change.**
- **Excellent requirements development without requirements management falls apart within weeks.**
- **Requirements management applies to EVERY method** — agile just uses lighter mechanisms.
- **A baseline is not a permanent freeze** — it means change must go through a conscious process.
- **The "why" field in the revision history is the most important and most often left blank.**
- ***"SRS_final_v2_REALLY_final.docx"* is the signature of a broken process.**
- **Track only attributes you actually use to decide** — ask *"what decision rests on this field?"*
- **Do not outright delete removed requirements** — rejected ideas have a way of coming back.
- **70 percent implemented with 5 percent verified is a project in trouble**, even though it reports the same "70 percent complete" as a healthy one.
- **The requirements change rate must decrease over time** — otherwise it is the strongest trouble indicator there is.
- **Present TRENDS, not a snapshot.**
- **Change is normal, not failure** — the goal is deliberate change, not no change.
- **Disruption cost is almost never counted but is very real** — mid-iteration change costs more than planned change.
- **A change control process does not exist to say "no"** but to ensure that when you say "yes" you know what you agreed to.
- **A heavyweight process gets bypassed** and change enters through the back door.
- **Failing to close the loop with the proposer is the error that kills a process.**
- **Tier the process by impact** — do not convene a board to approve a typo fix.
- **A CCB must be small (3–6 people) and every member must have real authority**, not be a messenger.
- **Review proposals in batches** to see the aggregate impact.
- **Tracing pays a dividend in impact analysis** — minutes and complete, instead of days and guesswork.
- **The question proposers rarely consider: what work gets pushed out to make room?**
- **When an estimate seems too small, ask whether you counted regression testing.**
- **Scope creep is more dangerous than one large change** because it is never examined as a whole.
- **Classifying change reasons turns the data into process improvement.**
- **If 60 percent of changes come from one stakeholder, that person was not adequately involved during elicitation.**
- **The clearest sign of scope creep: workload rises but schedule and resources do not.**
- **If every proposal is approved, the board is rubber-stamping.**
- **Too rigid succeeds procedurally and fails substantively; too loose never finishes.**

## Summary

- **Baselines, version control, attributes, and status** are the four foundational tools that let you know where you stand.
- **Status tracking gives a meaningful picture of progress** that gut-feel percentages never can.
- **Change rate and total requirement count over time are the two strongest project health indicators.**
- **The change control process must be simple, fast, transparent, and proportional to risk** — otherwise it gets bypassed.
- **Impact analysis turns a vague proposal into an informed decision**, and tracing is what makes it feasible.
- **The ultimate goal is not preventing change but making change transparent, deliberate, and fully acknowledged in its consequences.**
