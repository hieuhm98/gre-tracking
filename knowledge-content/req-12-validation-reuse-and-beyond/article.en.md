# Validation, Reuse & Beyond Requirements Development

## 1. What validation is & why you do it

> **Written requirements are not the same as correct requirements.**

You can have a thick SRS, beautifully formatted, every sentence starting with *"the system shall"* — and still build the wrong product. **Validation is the activity of ensuring that what you recorded really describes a product that will satisfy the customer needs.**

### Verification versus validation

| | **Verification** | **Validation** |
|---|-----------------|----------------|
| **The question** | *"Are we building the product RIGHT?"* | *"Are we building the RIGHT product?"* |
| **Checks** | Whether the product matches the specification | Whether the specification describes the real need |
| **Compared against** | The requirements document | Real user needs and business objectives |

> **Both are necessary.** A system can be **perfectly verified** — matching every sentence in the SRS exactly — and still be **completely useless**, if the SRS described the wrong thing.

### Why early validation pays enormously

**The cost of fixing a defect grows exponentially with the phase in which it is found.** A requirements defect found:

- **During requirements:** costs almost nothing — you edit a few lines of text.
- **During design:** costs rework of the design.
- **During coding:** costs rewriting finished code.
- **During testing:** costs code fixes, test fixes, and regression re-testing.
- **After delivery:** the most expensive of all — emergency patches, customer support, damaged reputation, and sometimes legal liability.

> **This is the simplest and strongest economic argument for requirements reviews: a few hours in a meeting room can save months of effort later.**

### Three main validation techniques

**1. Requirements reviews (peer review, inspection)** — people read and analyse requirements to find defects. **The most effective technique**, covered in detail in the following sections.

**2. Prototyping** — turning requirements into something tangible for users to react to. Especially effective at surfacing **missing requirements and misunderstandings**.

**3. Requirements-based testing** — writing test cases from the requirements **before** writing code. The act of writing tests **forces clarification** of what the requirements failed to say.

**Also: defining acceptance criteria.** Spelling out **the conditions under which the customer will accept the product** is itself a powerful form of validation, because it forces everyone to agree on **what success means**.

---

## 2. Requirements reviews & levels of formality

**A peer review** is an activity in which **people other than the author examine a work product to find defects and improvement opportunities**.

> **The founding principle: authors cannot find all their own defects.** You read what you **meant to write**, not what you **actually wrote**. You know what you meant, so an ambiguous sentence still looks clear to you. **Only someone else eyes catch that.**

### The spectrum of formality

Review is not one thing — it is **a spectrum**, from very informal to very formal.

| Type | Description | When to use it |
|------|-------------|----------------|
| **Peer deskcheck** | Hand the document to **one colleague** to read and comment on | Fast, cheap, good for small documents or early drafts |
| **Passaround** | Send the document to **several people** at once, each reads independently and returns comments | When reviewers are geographically dispersed or schedules do not align |
| **Walkthrough** | **The author leads** the group through the document, explaining and gathering feedback | When you need to transfer understanding as well as find defects |
| **Team review** | The group prepares in advance and then meets to discuss; planned but less ceremonial | A balance between cost and effectiveness |
| **Inspection** | The **most formal** process: defined roles, mandatory preparation, entry and exit criteria, metrics collection | For important, high-risk documents |

> **The rule for choosing: formality should match RISK.** A specification for a small feature needs only a deskcheck. A specification for a medical device control system deserves a full inspection.

### An important point often missed

> **Handing the document out for individuals to read alone is NOT equivalent to a group review.**
>
> The most dangerous kind of ambiguity is when **several people read differently and the requirement makes sense to each of them**. When everyone reads alone, **nobody sees a problem** — each believes they understood it.
>
> **Only when they sit together and articulate their understanding does the difference emerge.** This is why face-to-face reviews retain irreplaceable value.

---

## 3. Formal inspection: roles and steps

**Inspection** is the most formal review form, developed by Michael Fagan at IBM. It is **the most effective software quality assurance technique ever measured**.

### Five roles

| Role | Responsibility |
|------|----------------|
| **Author** | Wrote the document. **May NOT be moderator or reader.** Answers questions when asked but **does not defend or justify** |
| **Moderator** | Plans, runs the meeting, keeps the discussion on track and **focused on finding defects rather than fixing them** |
| **Reader** | **Paraphrases** each portion of the document in their own words. **This is inspection most powerful technique** |
| **Recorder** | Records every issue raised, neutrally and without judgment |
| **Inspector** | Everyone present plays this role — finding defects. Should include **user representatives, developers, and testers** |

> **Why is the Reader so important?** When the reader paraphrases a requirement in their own words and **that interpretation differs from what the author meant**, you have just found a **real ambiguity** — the most dangerous kind, undetectable any other way. **The author cannot be the reader**, precisely for this reason.

### The seven steps of inspection

**1. Planning** — The moderator determines **who attends**, splits the document into **manageable portions**, and checks the **entry criteria**: is the document complete and clean enough to be worth reviewing?

> **Do not review a sloppy draft.** Making the group point out typos **wastes expensive expert time**. The author must clean it up first.

**2. Overview** — The author briefly presents context if participants are unfamiliar with the subject. **This step can be skipped** if everyone already knows the context.

**3. Preparation** — **The most important and most frequently skipped step.** Each participant reads the document individually and records issues **BEFORE** the meeting.

> **Research shows most defects are found during PREPARATION, not during the meeting.** The meeting is mainly for **consolidating, classifying, and surfacing ambiguity through discussion**.
>
> **If participants have not prepared, POSTPONE the meeting.** An unprepared inspection is just an expensive group reading session.

**A preparation aid: a requirements defect checklist.** A list of common defect types — missing exceptions, vague wording, missing verification criteria, contradictions with other requirements — helps reviewers **search systematically** rather than randomly.

**4. Meeting** — The reader paraphrases each portion; inspectors raise issues; the recorder logs them.

**Three iron rules for the meeting:**

- **Find defects, do NOT fix them.** The moment the group starts designing solutions, the defect-finding rate drops to near zero. The moderator must interrupt: *"Log the issue, the author will handle it later."*
- **Evaluate the product, NOT the person.** Never say *"you wrote this badly"*. Say *"this requirement does not state what happens when the file cannot be saved"*.
- **Time-box to 2 hours maximum.** Beyond that, concentration collapses and the defect-finding rate drops sharply. **Split into several sessions rather than extending one.**

**5. Rework** — The author fixes the recorded issues.

**6. Follow-up** — The moderator or a designated person **confirms that every issue was addressed**. Not every issue has to be fixed — but every issue must be **consciously decided upon**.

**7. Exit criteria check** — Is the document good enough to move to the next step, or does it need another inspection round?

---

## 4. Keys to successful reviews & common traps

### Six keys

**1. Invite the right people.** A requirements review should include:

- **User representatives** — the only people who can judge correctness.
- **Developers** — they catch infeasible requirements and missing information needed to implement.
- **Testers** — they catch unverifiable requirements. **This is the most commonly omitted and most valuable group.**
- **Another BA** — a fresh perspective on wording and structure.

> **But do not invite too many.** A review with 12 people is **slow, hard to moderate, and everyone relies on someone else to find the problems**. The effective number is usually **4 to 7 people**.

**2. Break the document into portions.** **Nobody can effectively review 200 pages.** The effective review rate for requirements documents is only about **5 to 10 pages per hour**. Split it into several sessions.

**3. Use a checklist.** It turns defect-finding from improvisation into **a systematic process**.

**4. Prioritize the riskiest portions.** If you cannot review everything — and you usually cannot — focus on **the most complex, most novel, and highest-consequence** parts.

**5. Track metrics.** Record **defects found, effort spent, pages reviewed**. This lets you **demonstrate the value of reviews** to management, and improve the process over time.

**6. Create psychological safety.** If authors feel attacked, they will become **defensive** and the value of the review collapses.

> **The golden rule: review results must NEVER be used for individual performance evaluation.** If the number of defects found in someone document affects their annual review, people will **hide documents from review**. **That kills the entire practice.**

### Six common traps

**1. No preparation.** Discussed above — **the number one cause of inspection failure**.

**2. Turning the review into a problem-solving session.** The group sinks into designing a fix for the first defect and runs out of time before page three.

**3. The wrong participants.** All developers and no users: you will find technical problems but **miss that the requirements describe the business incorrectly**.

**4. Reviewing too late.** Waiting until the document is *"complete"* means the author has invested too much to accept major changes. **Review early and often.**

**5. Nobody tracks the fixes.** Issues get logged in the minutes and sit there forever. **Without follow-up, a review is just a conversation.**

**6. Treating review as a sign of distrust.** In organizations with a poor culture, being reviewed reads as having your competence questioned.

> **The cultural fix: start at the top.** When a lead architect or senior BA **volunteers their own document for review and thanks people for finding defects**, the message becomes clear: **review is a mark of professionalism, not of weakness.**

---

## 5. Testing requirements & acceptance criteria

> **You cannot test software that does not exist yet — but you absolutely CAN test the requirements.**

### Writing test cases from requirements

**The idea: for each requirement, think of the test cases that would prove it was implemented correctly — BEFORE writing a line of code.**

**This exposes problems immediately:**

- **You cannot think of any test** → the requirement is **unverifiable**.
- **You need many diverse tests** → **several requirements are probably combined**.
- **You do not know the expected result** → the requirement **lacks information**.
- **You do not know what the system does in case X** → **an exception requirement is missing**.

> **This is why testers should join requirements development early, not just receive the document at the end.** The testing mindset is **an extremely effective defect filter** applied to requirements.

### Cross-checking tests against requirements and models

**A powerful technique: walk your test cases through an analysis model.**

- Walk through the **dialog map** following a test case: can you reach where you need to go? Is a transition missing?
- Walk through the **state-transition diagram**: does the model permit every path the test takes?
- Compare test cases with the **decision table**: is any condition combination untested, or does a test not match any requirement?

> **Three representations — textual requirements, models, and test cases — cross-check each other.** Wherever they disagree, there is a defect.

### Acceptance criteria

**Acceptance criteria define the conditions under which the customer will ACCEPT the product.**

**Why they matter so much:**

- They force everyone to **agree in advance on what success means**, instead of arguing after delivery.
- They are **specific and verifiable**, unlike general requirements.
- They frequently **surface implicit expectations** nobody ever said out loud.

**In agile, acceptance criteria are the primary form of detailed specification.** For each user story, the team jointly determines **the conditions that must be true for the story to count as done**, usually written as tests.

> **A key point: acceptance criteria must cover EXCEPTION conditions, not just the happy path.** A story is only done when the system correctly handles what can go wrong.

**Who writes acceptance criteria?** This must be **collaborative**: the customer or product owner states what matters to them; testers help make it concrete and measurable; developers confirm it is feasible.

---

## 6. Requirements reuse: opportunities and levels

> **If your organization has built five systems with a login function, you have written login requirements five times — and probably written them five different ways.**

**Requirements reuse means using previously written, previously reviewed, previously proven requirements from earlier projects instead of writing them from scratch.**

### The benefits

- **Saved time.** No reinventing what is already known.
- **Higher quality.** Reused requirements have already been reviewed, implemented, and tested in the field — **they have been through fire**.
- **Consistency.** Multiple products in a product line behave the same way on shared functions.
- **Fewer integration defects.** Especially when reusing **data definitions** — the same definition means the same understanding.

### Four levels of reuse

| Level | Description | Example |
|-------|-------------|---------|
| **As-is reuse** | Used **without any change** | Standards compliance, regulatory, and corporate policy requirements |
| **Reuse with modification** | Used as a starting point, then **adjusted to fit** | A login function needing different password policies for different products |
| **Parameterized reuse** | A template with **blanks to fill in** | *"The system shall lock the account after &lt;N&gt; failed login attempts"* |
| **PATTERN-level reuse** | Reusing not the wording but the **structure and the list of questions** | A common template for all report requirements, audit trail requirements, notification requirements |

### Which information is most worth reusing

- **Data dictionary definitions** — the highest reuse value, because consistency here prevents integration defects across the enterprise.
- **Business rules** — organizational rules that apply to many systems. **This is exactly why business rules should live in an enterprise repository, not be buried in individual project SRSs.**
- **Glossary terms** — an enterprise glossary eliminates each project redefining the same word.
- **Nonfunctional requirements and constraints** — security standards, compliance regulations, and accessibility requirements are usually identical across products.
- **Functional requirements for common functions** — authentication, authorization, search, export, printing, backup.

---

## 7. Barriers to reuse & requirements patterns

### Six barriers

**1. You cannot find them.** **This is the biggest barrier.** The requirements exist somewhere among hundreds of Word documents on a shared drive, but **nobody knows how to find them**.

> **The precondition for reuse: a SEARCHABLE repository with metadata and classification.** This is exactly why a requirements management tool makes such a difference — not because it stores better, but because it **lets you find things again**.

**2. You do not trust them.** *"I do not know whether that requirement was correct, whether it is still valid, or whether that project even succeeded."* **You need provenance and status metadata** to build trust.

**3. Not-invented-here syndrome.** BAs like writing their own requirements. **This needs a bit of culture and a bit of incentive.**

**4. Nobody owns them.** Reusable assets need **a maintainer**. Without one, they go stale and trust collapses.

**5. Applying them mechanically.** **A serious risk.** Copying a requirement into a new project without checking whether it fits injects a **subtly wrong requirement** — worse than having none, because it **looks right**.

> **The rule: every reused requirement must be REVIEWED in its new context, not merely copied.** The question to ask: *"Is this actually true for THIS system, with THESE users?"*

**6. Up-front cost.** Building a reuse repository costs effort before it pays off. **It needs organizational commitment, not just project-level commitment.**

### Requirements patterns

**A requirements pattern is a structured template describing HOW to specify a common kind of requirement — not the requirement statement itself.**

> **The key distinction:** Reusing a requirement statement gives you **content**. A requirements pattern gives you **a list of what to ask and what to cover**.

**A typical pattern includes:**

- **The name and description** of the requirement type.
- **The questions that must be answered** when specifying this type.
- **The considerations commonly overlooked** — exceptions, limits, interactions.
- **The related nonfunctional requirements** that usually accompany it.
- **Example specimens** for reference.

**Example: a pattern for "report requirements"** would prompt you to ask about data sources, selection criteria, user-selectable parameters, calculations, sorting and totalling, behaviour when there is no data, security restrictions, frequency and disposition, and maximum size.

**Example: a pattern for "audit trail requirements"** would prompt: which actions are logged, what information is recorded, how long it is retained, who can view it, whether it is editable, and what happens when the log storage fills up.

> **The power of patterns: they turn one good BA experience into an ORGANIZATIONAL ASSET.** A new BA using a pattern asks exactly the questions it would otherwise take years to learn.

---

## 8. From requirements to project plans and estimates

> **Requirements are the FOUNDATION of every project management activity. You cannot plan what you do not understand.**

### Requirements-based estimation

**You cannot estimate reliably without knowing what you will build.** This is why estimates given **before** there are requirements — which management routinely demands — **are always seriously wrong**.

**The structure of requirements-based estimation:**

1. **Break the requirements into work units** small enough to estimate.
2. **Estimate each unit**, ideally by the person who will do the work.
3. **Add the cost of non-coding activities** — design, review, testing, documentation, defect fixing.
4. **Add contingency for uncertainty**, proportional to how stable the requirements are.
5. **Present the estimate as a RANGE, not a single number.**

> **The most important point about estimates: state clearly WHICH set of requirements the estimate is based on.** When the requirements change, the estimate must be revisited. **An estimate without a requirements baseline is a promise with no foundation.**

### The cone of uncertainty

**Estimation accuracy improves as the project progresses** and you learn more:

- **At the initial concept stage:** estimates can be off by **a factor of 4 in either direction**.
- **After vision and scope:** the range narrows considerably.
- **After the requirements are baselined:** it narrows further.
- **After detailed design:** it becomes fairly accurate.

> **The lesson: do not make firm commitments at the wide end of the cone.** If forced to estimate early, **state the uncertainty explicitly** and **commit to re-estimating** as you learn more.

### Requirements and scope management

**The vision and scope document is the most powerful scope management tool**, especially the **Limitations and Exclusions** section — it records clearly what is **not** in scope.

**When a new requirement appears mid-project, the first question is not "can we do it" but "does it fit the product vision".** If not, it belongs in a later release — or the vision needs a conscious amendment, with all its schedule and resource consequences.

---

## 9. Requirements and design, code, and testing

### Requirements → Design

**Requirements describe *what*; design describes *how*.** But the boundary is not perfectly sharp, and that is fine.

**Three things to remember:**

**1. Quality attributes drive architecture more than functional requirements do.** Requirements for **performance, scalability, security, and portability** determine the architecture shape, while functional requirements can usually be implemented in many architectures.

**2. Requirements should avoid imposing unnecessary design constraints.** Write requirements at the **essential level** — *what must be achieved* — and let designers find the best way. **Record constraints only when there is a real reason, and always record that reason.**

**3. But do not pretend the boundary is absolute.** Sometimes sketching a design clarifies a requirement. What matters is **clearly marking which is which**.

### Requirements → Code

**Every line of code should trace back to a requirement.** If it does not:

- **Code with no corresponding requirement** = either **gold plating** (a developer adding features nobody asked for) or **an implicit requirement never recorded**. Both are worth investigating.
- **A requirement with no corresponding code** = **missing functionality**.

> **Gold plating is a more serious problem than most people realise.** A feature nobody asked for still has to be **designed, tested, documented, maintained, and supported** — forever. **It consumes resources that should have gone to what customers actually need.**

### Requirements → Testing

**System tests should be designed from the REQUIREMENTS, not from the code.**

> **Why this matters:** If you write tests by reading the code, you can only check that **the code does what it does** — you cannot detect **functionality that is missing entirely**. Only tests derived from requirements catch that.

**A requirements-to-test traceability matrix** shows you immediately:

- **Which requirements have no test** → a testing gap.
- **Which tests trace to no requirement** → either a superfluous test or an unrecorded requirement.

**This measures test coverage at the requirements level**, far more useful than code line coverage alone.

---

## 10. Requirements and day-to-day project management

### The map: requirements touch every activity

| Project activity | What requirements provide |
|------------------|---------------------------|
| **Planning** | The basis for breaking down work, sequencing it, identifying dependencies |
| **Estimation** | The only foundation for a reliable estimate |
| **Resource allocation** | Knowing what skills are needed and how many |
| **Progress tracking** | Measured by **requirements completed and accepted**, not by a gut-feel percentage |
| **Risk management** | Unstable, ambiguous, or infeasible requirements are **the single largest source of project risk** |
| **Change management** | The requirements baseline is the reference point for assessing the impact of every change |
| **Scope negotiation** | A priority list allows controlled reduction instead of crisis |
| **Acceptance** | Acceptance criteria define when you are done |

### Measuring progress by requirements

> **The question *"what percent complete is the project?"* almost always gets a meaningless answer unless it is anchored to requirements.**

**Meaningful measures:**

- **How many requirements are implemented AND tested AND accepted?** (Not *"coded"* — untested code is unfinished work.)
- **How many requirements are still TBD or under dispute?**
- **The requirements change rate** — how many changes per week? **If this rate is not decreasing over time, the project is in serious trouble.**

### Requirements-related risks

**Requirements problems generate the top project risks:**

- **Incomplete requirements** → missing functionality discovered late.
- **Unstable requirements (scope creep)** → never being able to finish.
- **Unavailable stakeholders** → requirements based on guesswork.
- **Ambiguous requirements** → developers build the wrong thing.
- **No priorities** → no way to cut scope when needed.
- **No change management process** → uncontrolled change flooding in.

> **Every one of these risks is mitigated by exactly the practices covered throughout this course: structured elicitation, analysis models, clear specification, review, prioritization, and change management.**

### The closing message

> **Requirements are NOT a phase you pass through and leave behind. They are the foundation everything else stands on.**
>
> A brilliant requirements document sitting in a drawer **has no value**. The value comes from requirements being **used continuously** — to estimate, to design, to write tests, to measure progress, to negotiate scope, to decide what goes in the next release.
>
> **Invest in requirements proportionally to the project risk, then actually USE them.**

---

## Key takeaways

- **Verification asks *"are we building it right"*; validation asks *"are we building the right thing"*** — both are necessary.
- **Defect fixing cost grows exponentially with the phase of discovery** — the strongest economic argument for reviews.
- **Authors cannot find all their own defects** because they read what they meant to write.
- **Review formality should match risk** — from deskcheck to formal inspection.
- **Handing documents out for solo reading is NOT a group review** — ambiguity surfaces only when people articulate their understanding.
- In an inspection, **the author cannot be the reader**, because the reader paraphrase is what exposes ambiguity.
- **Most defects are found during PREPARATION, not the meeting** — if people have not prepared, postpone.
- **Find defects, do not fix them**; **evaluate the product, not the person**; **2 hours maximum per session**.
- **Testers are the most commonly omitted and most valuable participants** in requirements reviews.
- The effective review rate is only **5 to 10 pages per hour**; the effective group size is **4 to 7 people**.
- **Review results must never feed individual performance evaluation** — doing so kills the practice.
- **Writing test cases from requirements before coding** immediately exposes unverifiable, combined, or under-specified requirements.
- **Acceptance criteria must cover exception conditions**, not just the happy path.
- **The biggest reuse barrier is not being able to find things** — you need a searchable repository.
- **Data definitions and business rules have the highest reuse value**, and belong at the enterprise level.
- **Every reused requirement must be reviewed in its new context** — mechanical copying injects subtle defects.
- **Requirements patterns give you the list of questions to ask**, turning individual experience into an organizational asset.
- **An estimate without a requirements baseline is a promise with no foundation.**
- In the **cone of uncertainty**, initial estimates can be off by **a factor of 4 in either direction**.
- **Gold plating consumes resources forever** — a feature nobody asked for still has to be maintained indefinitely.
- **System tests must derive from requirements, not code** — otherwise you cannot detect missing functionality.
- Measure progress by **requirements implemented, tested AND accepted** — not by gut-feel percentages.
- **If the requirements change rate is not decreasing over time, the project is in serious trouble.**

## Summary

- **Validation ensures requirements describe the right thing to build**, through three main techniques: reviews, prototyping, and requirements-based testing.
- **Formal inspection is the most effective quality assurance technique ever measured**, provided participants prepare in advance and stay focused on finding defects.
- **Build a psychologically safe review culture** — completely separated from individual performance evaluation.
- **Requirements reuse saves time and raises quality**, but demands a searchable repository, an owner, and the discipline to re-review in the new context.
- **Requirements patterns reuse the thinking**, not just the wording.
- **Requirements are the foundation of estimation, design, coding, testing, progress measurement, and scope management** — not a phase you pass through and leave behind.
