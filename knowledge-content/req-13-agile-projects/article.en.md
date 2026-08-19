# Requirements on Agile Projects

## 1. Requirements in agile: what stays the same, what changes

> **The most common misconception about agile: *"Agile means you do not need requirements."***

This is **flatly wrong**. Agile does not eliminate requirements — it changes **how you discover, record, and manage** them.

**Think of it this way:** whether you work in waterfall or agile, you still have to answer the same questions — *who will use this system, what do they need to do, how well must it work, what rules govern it.* **What changes is when you answer them and how you record the answers.**

### Four things that do NOT change

**1. You still have to understand the business problem.** No method excuses you from understanding **why** the project exists and **what value** it must create.

**2. You still have to identify stakeholders and user classes.** If you do not know who will use the system, you cannot build the right one.

**3. You still have to clarify details before implementing.** Agile defers detail, but **does not eliminate it**. Before a developer writes code for a story, somebody must know exactly what that story must do.

**4. You still have to handle quality attributes, business rules, and constraints.** They do not vanish just because you wrote the requirement on a card.

### Five things that DO change

| Aspect | Traditional | Agile |
|--------|------------|-------|
| **When details are worked out** | Before construction begins | **Just-in-time**, right before the iteration that implements it |
| **Storage form** | An SRS document | A **backlog** of user stories, with acceptance tests |
| **Source of the detail** | The written document | **Conversation** between the team and the product owner |
| **Handling change** | A formal change control process | **Reordering the backlog** |
| **Delivery unit** | The whole system at the end | **Working software** at the end of each iteration |

> **The overarching principle — and it applies to EVERY project, not just agile: accumulate shared understanding GOOD ENOUGH to build the next portion of the product at an acceptable level of risk.**
>
> This is *progressive refinement of detail*. Agile just applies it **more thoroughly and with more discipline**.

### The biggest trap in misunderstanding agile

> **The real risk is not producing too little documentation — it is CONFUSING "less documentation" with "less thinking".**
>
> A healthy agile team still invests **a great deal of effort** in understanding the problem — they just **do not package that understanding into a 200-page document**. They understand through conversation, prototypes, and feedback from working software.
>
> **An unhealthy agile team skips both: no documentation AND no thinking. The result is building the wrong thing, faster.**

---

## 2. The product owner & the BA role in agile

### The product owner

**The product owner is the person with the authority to decide the content and ordering of the product backlog.** This is **one person**, not a committee.

**Core responsibilities:**

- **Own the product vision** and communicate it to the team.
- **Decide the backlog order** — what gets built first and what waits.
- **Answer the team questions** about requirement details, promptly.
- **Accept or reject** completed work, based on acceptance criteria.
- **Represent the voice of all stakeholders** — customers, users, business, compliance.

> **Three common failure modes of the product owner role:**
>
> **1. An absent product owner.** The team cannot get answers so they **guess**. This is the most serious failure mode — it recreates exactly the problem agile was meant to solve.
>
> **2. A product owner without authority.** They must escalate every decision, blocking the team constantly. **A product owner who cannot decide is not a product owner.**
>
> **3. A product owner committee.** Several people direct the backlog, each in a different direction. **The team receives contradictory requirements and nobody is accountable.**

### The BA role on an agile team

**A common question: does agile still need BAs?**

**The answer: the BA work still exists — the only question is WHO does it.** On a small team, the product owner may do it themselves. On a complex system with many stakeholders, many integrations, and many regulations, **a dedicated BA makes an enormous difference**.

**What a BA does in agile:**

- **Supports the product owner** in eliciting, analysing, and refining the backlog — often as a *"proxy product owner"* or a partner to the product owner.
- **Splits epics into stories** sized to fit an iteration.
- **Writes and clarifies acceptance criteria** together with testers and developers.
- **Creates analysis models** when they clarify what text cannot.
- **Elicits quality attributes and business rules** — the things most easily missed in agile.
- **Maintains the holistic view** while the team focuses on individual stories: how does this story fit the overall workflow?
- **Connects with external stakeholders** the team does not meet daily.

> **The BA greatest value in agile: holding the BIG PICTURE.** When a team works story by story, iteration by iteration, it is very easy to **lose sight of the whole** — the end-to-end workflow, the dependencies, the gaps. **That is exactly where a BA contributes most.**

---

## 3. The product backlog & backlog grooming

**The product backlog is an ordered list of everything the team could do for the product.**

### Four core characteristics

**1. It is ORDERED, not a flat list.** The item at the top is the item being done next. This is the **most important property** of a backlog.

**2. It evolves continuously.** Items are added, removed, split, merged, and reordered throughout the project. **A backlog is never "finished".**

**3. It has UNEVEN detail.** This is the most misunderstood property:

> - **Items at the TOP:** detailed, small, estimated, ready to implement.
> - **Items in the MIDDLE:** moderate, possibly still too large.
> - **Items at the BOTTOM:** coarse, large, sometimes a single line of description.
>
> **This is NOT sloppiness — it is efficiency.** Detailing an item that will change or be dropped before its turn comes is **pure waste**.

**4. It contains more than user stories.** The backlog also holds **defects to fix, technical work, research spikes, and technical debt to repay**.

### Backlog grooming (refinement)

**Grooming is the ongoing activity of preparing the items at the top of the backlog so they are ready for the next iteration.**

**Grooming activities:**

- **Split** items too large to fit one iteration.
- **Clarify** vague items by asking the product owner.
- **Add acceptance criteria.**
- **Estimate** items that lack estimates.
- **Reorder** as priorities change.
- **Remove** items that no longer make sense.

> **A practical rule: keep roughly TWO to THREE iterations worth of items in a "ready" state.** Less than that and the team risks being blocked at the start of an iteration; more and you are wasting effort on things that will change.

**Definition of ready** — many teams explicitly define what an item must satisfy before entering an iteration:

- Small enough to complete in one iteration.
- Has clear acceptance criteria.
- Has been estimated.
- Has no blocking dependencies.
- The team understands what it means.

> **The definition of ready is a powerful team protection.** It lets the team say *"this story is not ready"* objectively, instead of accepting a vague story and getting stuck mid-iteration.

---

## 4. User stories: structure, the 3Cs, and INVEST

### The common template

> **As a &lt;type of user&gt;, I want to &lt;do something&gt; so that &lt;I achieve some benefit&gt;.**

Example: *"As a Chemist, I want to search vendor catalogs online so that I know whether the chemical I need is available before placing a request."*

**Why the template works:**

- **The "as a" clause** forces you to think about a **specific user class**, not a generic "user".
- **The "I want" clause** describes the **capability needed**.
- **The "so that" clause** — often skipped but **the most important** — states the **business value**. If you cannot write it, ask yourself **why we are doing this story at all**.

> **The template is a tool, not dogma.** If a requirement reads more naturally another way, **write it that way**. The goal is clear communication, not format compliance.

### The three Cs

**A user story is not the words on the card. It has three parts:**

| C | Meaning |
|---|---------|
| **Card** | The brief text on the card. It is a **REMINDER of a conversation**, not a complete specification |
| **Conversation** | **This is where the requirement actually lives.** The team and product owner discuss to clarify details before and during implementation |
| **Confirmation** | The **acceptance criteria** — how we know the story is done right |

> **The most important insight about user stories: the card is DELIBERATELY incomplete.** Newcomers are often frustrated that user stories *"lack detail"*. But that is **by design** — the detail comes from the conversation, and the conversation happens **just-in-time**.
>
> **The risk: if the conversation does NOT happen, all you are left with is a useless scrap of paper.** This is why geographically distributed teams or teams without an available product owner struggle with user stories.

### INVEST — six criteria for a good story

| Letter | Meaning | Explanation |
|--------|---------|-------------|
| **I** | **Independent** | Can be implemented **independently** of other stories, so you are free to order them |
| **N** | **Negotiable** | **Not a fixed contract** — the details are negotiated in conversation |
| **V** | **Valuable** | Delivers **visible value to a user or customer** |
| **E** | **Estimable** | The team **can estimate it** — if not, it means they do not understand it well enough |
| **S** | **Small** | Small enough to **complete within one iteration** |
| **T** | **Testable** | You can **verify** it was implemented correctly |

> **The two most frequently violated letters:**
>
> **V (Valuable):** teams often create stories like *"build the database layer"* — that **delivers no user value** and cannot be demonstrated. Better to build **a thin vertical slice** through every layer for one real function.
>
> **E (Estimable):** if the team cannot estimate a story, **that is not an estimation problem — it is a signal they do not understand it well enough**. The answer is to clarify it or run a **spike** (a time-boxed investigation) to learn enough.

### Stories do not fit everything

**User stories are excellent for user-facing functionality. But they are NOT suitable for:**

- **Quality attributes** — *"As a user, I want the system to be available 99.9 percent of the time"* reads awkwardly and cannot be implemented as a story.
- **Complex business rules** — better written separately and referenced from many stories.
- **Real-time systems with many events** — event-response tables fit better.
- **Complex decision logic** — a decision table is far clearer.

> **Do not force everything into the user story mould.** Use the representation that best fits the kind of information, exactly as on any other project.

---

## 5. Story mapping & epics, themes, and features

### The problem story mapping solves

> **A product backlog is a FLAT list. It gives you order, but not STRUCTURE.**

When a backlog has 300 items, you cannot look at it and answer: *"Can users complete their whole job end to end? Are we missing a step?"*

**Story mapping solves exactly this by arranging stories along TWO dimensions.**

### The structure of a story map

**The HORIZONTAL axis: the backbone — the user workflow in chronological order.**

For a chemical tracking system: *Search for a chemical → Prepare a request → Submit the request → Track its status → Receive the chemical → Record its usage → Dispose of it*

**The VERTICAL axis: the level of detail and priority within each step.**

Under each backbone activity, you stack the stories that implement it — **the most essential at the top, optional refinements below**.

### Three big benefits

**1. It exposes gaps.** When you look at the entire workflow, **missing steps become obvious** — something a flat list never shows.

**2. It helps you slice releases meaningfully.** You draw **a horizontal line** across the map. Everything above the line is the first release.

> **This is where story mapping shines: a horizontal slice guarantees that the first release is a COMPLETE but minimal workflow, rather than a few perfect features that users cannot actually use to get their job done.**
>
> Users would rather have **a basic way to complete the whole job** than **one polished step with the rest missing**.

**3. It builds shared understanding.** The whole team looks at one picture and sees the product as a whole, not as a pile of loose cards.

### Epics, themes, and features

**These are different abstraction levels on the same spectrum:**

| Term | Meaning |
|------|---------|
| **Epic** | A story **too large** to complete in one iteration; must be split |
| **Theme** | A **group of related stories**, usually serving the same business goal |
| **Feature** | A **product capability** recognisable to users or the market; usually spans several stories |
| **Story** | The unit **implementable in one iteration** |
| **Task** | A specific technical piece of work a team member does to complete a story |

> **Do not get drawn into terminology arguments.** Organizations use these words differently. **What matters is having a consistent way to get from "big idea" down to "work I can do this week".**

### How to split an epic

**The BAD split: by technical layer** — *"build the UI", "build the API", "build the database"*. None of these delivers value on its own and none can be demonstrated.

**Good splits:**

- **By process step** — each step in the workflow becomes a story.
- **By data type** — support one type first, others later.
- **By user class** — serve the most important user class first.
- **By business rule** — simple case first, exception cases later.
- **By level of polish** — basic version first, refinements later.

---

## 6. Estimation, velocity & release planning

### Story points

**A story point is a RELATIVE unit of estimation for the size of a story** — it bundles **effort, complexity, and uncertainty** together.

> **Why use a relative unit instead of hours?**
>
> **People estimate relative size far better than absolute duration.** You can look at two pieces of work and say with confidence *"this is about twice as big as that"* — while saying *"this will take 14 hours"* is almost always wrong.
>
> **Story points also separate size from speed.** A 5-point story is 5 points whether a new team or an experienced team does it. **Speed is captured separately, by velocity.**

**The common scale: the Fibonacci sequence** (1, 2, 3, 5, 8, 13, 21). The widening gaps **correctly reflect that uncertainty grows with size** — you can distinguish 1 from 2 points, but not 20 from 21.

> **A story larger than 13 points is usually a signal to split it.** Estimates at that size are too uncertain to plan with.

### Planning poker

**A consensus estimation technique in which each person picks a number PRIVATELY, and everyone reveals simultaneously.**

**Why private-then-simultaneous matters:** it **prevents anchoring**. If the loudest voice says *"I think it is a 3"* first, everyone converges on 3 even if they thought otherwise.

**The real value is NOT the number:**

> **When two people estimate the same story as 2 and 13, that is the most valuable discussion of the whole session.** They understand the story in two completely different ways — and **discovering that during estimation is far cheaper than discovering it mid-iteration.**

### Velocity

**Velocity is the number of story points a team actually completes in an iteration.**

**Correct use:**

- **A FORECASTING tool for that team.** If average velocity is 30 points and 300 points remain, you have about 10 iterations left.
- **Average it over several iterations**, never use a single one.
- **Count only fully completed stories** per the definition of done — a story 90 percent done counts as 0 points.

> **Three ways velocity is MISUSED — and all of them do serious harm:**
>
> **1. Comparing velocity between teams.** Story points are a **relative unit each team defines for itself**. Team A with velocity 40 is not "better" than Team B with velocity 20. **Comparing them is mathematically meaningless.**
>
> **2. Using velocity as a performance target.** If management demands *"increase velocity 20 percent"*, the team will simply **inflate their estimates**. Velocity rises, real output is unchanged. **You have just destroyed your only forecasting tool.**
>
> **3. Forcing velocity forecasts too early.** A new team needs several iterations for velocity to stabilise. **Do not make long-term commitments based on the first two iterations.**

### Release planning

**With velocity and an estimated backlog, you can answer two questions:**

- **"With fixed scope, when will we be done?"** = total points ÷ velocity = number of iterations.
- **"With a fixed deadline, what can we deliver?"** = velocity × remaining iterations = achievable points; take from the top of the backlog until you reach it.

> **Present forecasts as a RANGE based on the lowest and highest observed velocity**, not as a single number. This is the most honest way to communicate uncertainty.

---

## 7. Acceptance criteria & the definition of done

### Acceptance criteria (belong to EACH story)

**Acceptance criteria are the specific conditions that must be true for ONE particular story to count as correctly done.**

**They answer *"how do we know this story is done right?"***

**Characteristics of good acceptance criteria:**

- **Specific and verifiable** — not *"search must be fast"* but *"search results display within 2 seconds with up to 1,000 chemicals"*.
- **Written in business language**, not technical jargon.
- **Cover exception conditions**, not just the happy path.
- **Agreed BEFORE implementation begins**, not afterwards.

**The Given-When-Then format** is widely used:

> **Given** the user is logged in as a Chemist
> **When** they search for a chemical that is not in any catalog
> **Then** the system displays a "Chemical not found" message with the option to submit a special request

**Why this format works:** it forces you to state the **starting state, the action, and the expected result** — precisely the three things an under-specified requirement usually omits.

### Definition of done (belongs to EVERY story)

**The definition of done is the set of quality standards that apply to EVERY story, agreed by the whole team.**

**A typical example:**

- Code written and **peer reviewed**.
- **Unit tests written and passing**.
- **Integration and regression tests passing**.
- **The story acceptance criteria verified**.
- **User documentation updated** if applicable.
- **Deployed to the staging environment**.
- **No open critical defects**.
- **Meets the general nonfunctional standards** — performance, security, accessibility.

### Distinguishing the two

> **Acceptance criteria answer *"is THIS story correct?"*. The definition of done answers *"are we working to our quality standard?"***
>
> Acceptance criteria are **different for every story**. The definition of done is **the same for every story**.

**Why the definition of done matters so much:**

Without it, "done" becomes an elastic concept. A developer saying *"it is done"* means **the code is written**. A tester thinks it means **it has been tested**. The product owner thinks it means **it is ready to use**.

> **The consequence: velocity becomes meaningless and hidden "completion debt" accumulates silently.** The team believes it finished 10 stories while weeks of testing and defect-fixing work still lurk behind them. **This is one of the most common reasons agile projects slip without anyone noticing until it is too late.**

---

## 8. Nonfunctional requirements & architectural work in agile

> **This is agile most notorious weak spot when practised carelessly.**

**Why they get missed:** user stories focus on **visible user value**. Quality attributes like security, scalability, and maintainability are **invisible** and **belong to no single story** — they span the whole product.

### Four ways to handle them

**1. Constraint cards.** Write nonfunctional requirements on cards **not as stories but as constraints** applying to the whole product. Post them where the team sees them every iteration.

**2. Put them in the definition of done.** For attributes applying to **every** story — *"every page loads in 2 seconds"*, *"all user input must be validated"* — this is the right place.

**3. Fold them into the acceptance criteria of a related story.** A login story gets acceptance tests ensuring **certain user classes can access it while others are blocked** — a security requirement specified as a test.

**4. Create separate technical (enabler) stories.** When a quality attribute demands substantial architectural work — building a caching tier, setting up monitoring infrastructure — create a separate story and put it in the backlog.

> **A note about enabler stories: they violate the V in INVEST** because they deliver no direct user value. **That is acceptable and sometimes necessary** — but use them selectively, and always state **which user-facing story they enable**.

### The risk of late architectural discovery

> **This is the most serious risk of poorly practised agile.**
>
> If in iteration ten you learn the system must support 10,000 concurrent users, or must run on mobile, or must comply with a data regulation, retrofitting could **force much of the completed work to be redone**.

**How to prevent it:**

- **Elicit architecturally significant quality attributes EARLY** — in the first iterations, or during an *"iteration zero"* if the team has one.
- **Build a thin vertical slice through every layer in the first iteration.** It exposes architectural problems while fixes are still cheap.
- **Reserve a fixed share of capacity for technical work** — many teams reserve 15–20 percent of each iteration for technical debt and architectural work.
- **Include the BA or an architect in grooming** to ask the questions the stories do not ask themselves.

---

## 9. How much documentation is enough & managing change

### The "just enough" principle

> **The agile manifesto says *"working software OVER comprehensive documentation"* — NOT *"working software INSTEAD OF documentation"*.**
>
> The manifesto itself states: *"While there is value in the items on the right, we value the items on the left more."* **Documentation still has value.**

**Five questions for deciding whether to record something:**

**1. Who will read it, and what will they use it for?** If you cannot answer, you probably do not need it.

**2. Does this knowledge need to outlive the team memory?** If the system will be maintained for ten years by people not yet hired, the answer is **yes**.

**3. Is there a compliance, audit, certification, or contractual requirement?** In regulated domains, **documentation is legally mandatory** regardless of your method.

**4. Is the team distributed across locations or time zones?** Where face-to-face communication is unavailable, **documentation has to compensate**.

**5. Is the cost of recording less than the cost of rediscovering?** This is the core economic test.

> **Recalling the principle from the start of this course: the cost of RECORDING knowledge is small compared with the cost of ACQUIRING it or regenerating it in the future.**

**Things almost always worth recording, even in agile:**

- **The product vision and scope** — without it, the team loses direction.
- **Business rules** — they outlive every project.
- **Data definitions and the glossary** — they prevent integration defects.
- **Architectural decisions and their rationale** — future maintainers will thank you.
- **Automated acceptance tests** — the only documentation that **never goes stale**, because it runs.

> **One last thought worth sitting with: if your team discards user stories after implementation, then the automated acceptance tests may be the ONLY durable documentation of what the system does.** Make sure they are readable enough to serve that role.

### Change management in agile

**Agile does not eliminate change management — it makes it much cheaper.**

| | Traditional | Agile |
|---|------------|-------|
| **Attitude to change** | Must be controlled because it is expensive | Expected and welcomed |
| **Mechanism** | Change control board, formal impact analysis | **Reordering the backlog** |
| **Cost of change** | High, because work is already built on the baseline | Low, because only what is already implemented is affected |

**But there are three things agile does NOT excuse you from:**

**1. Change still has an opportunity cost.** Adding a story at the top of the backlog means **pushing another story out**. **There is no free lunch** — only more transparency about what you are trading away.

**2. Mid-iteration change is still harmful.** Most teams **protect the scope of the running iteration**. Changes go into the backlog for the next iteration, not into work in progress.

**3. Changing what is already built still costs.** Modifying an implemented, tested, documented feature is **always more expensive** than building it right the first time. **Agile reduces this cost by shortening the feedback loop, not by eliminating it.**

> **An important warning indicator: if the requirements change rate is NOT decreasing over time, the project is in trouble.** That usually means the product vision is unclear, or you have not been talking to the right people.

---

## 10. Transitioning from traditional to agile: common traps

### Seven common traps

**1. "Agile means no documentation."** Discussed above. **The consequence: knowledge evaporates as people leave the team, and future maintainers do not understand why the system was built as it was.**

**2. "Agile means no planning."** The opposite — **agile plans CONTINUOUSLY instead of once**. Agile teams plan more than traditional teams, just in shorter cycles.

**3. An absent or powerless product owner.** **This is agile number one cause of failure.** Without an available decision-maker, the team is either blocked or guessing.

**4. Treating the backlog as a to-do list to be completed.** The backlog is **a list of everything that COULD be done**, ordered by value. **Many items will never be done — and that is the correct outcome**, because they were worth less than what was done.

**5. Skipping quality attributes and architectural work.** Leads to accumulating technical debt and a late architectural crisis.

**6. Using velocity as a performance metric.** Destroys your forecasting tool and incentivises estimate inflation.

**7. Skipping or loosening the definition of done.** Creates hidden completion debt so reported progress does not reflect reality.

### What actually determines success

> **Agile is not a set of rituals — it is a set of principles about SHORT FEEDBACK LOOPS and CONTINUOUS ADJUSTMENT.**

**Four conditions that really matter:**

- **An available decision-maker with authority.**
- **Working software at the end of every iteration**, not nearly-working software.
- **Real feedback from real users**, not from a guessing proxy.
- **A team willing to change how it works** based on what it learns in retrospectives.

**With these four present, most other details sort themselves out. Without them, no ritual will save the project.**

> **And finally: every requirements practice covered in this course still applies in agile.** You still need to understand stakeholders, elicit needs, model when useful, specify clearly, validate through reviews and tests, prioritize, and manage change. **You just do it at a smaller scale, more often, and with less ceremony.**

---

## Key takeaways

- **Agile does not eliminate requirements** — it changes when you detail them and how you record them.
- The real risk is not less documentation but **confusing "less documentation" with "less thinking"**.
- **The product owner is ONE person with authority**, not a committee; absence or powerlessness is failure cause number one.
- **The BA work still exists in agile** — its greatest value is holding the big picture while the team focuses story by story.
- **The backlog is ORDERED, not flat**, and has **uneven detail** — fine at the top, coarse at the bottom.
- **The definition of ready protects the team** from accepting a vague story and getting stuck mid-iteration.
- **The "so that" clause is the most important part of a user story** — if you cannot write it, ask why you are doing the story.
- **The three Cs: the Card is a reminder, the Conversation is where the requirement lives, the Confirmation is the acceptance criteria.**
- **The story card is DELIBERATELY incomplete** — but if the conversation never happens, all you have is a useless scrap of paper.
- In INVEST, the two most violated letters are **V (technical-layer stories deliver no value)** and **E (unable to estimate means not understood well enough)**.
- **Do not force everything into the user story mould** — quality attributes, complex business rules, and decision logic need other representations.
- **Story mapping exposes gaps** a flat list never reveals.
- **A horizontal slice of a story map guarantees the first release is a complete but minimal workflow.**
- **Split epics by process step, data type, or user class** — never by technical layer.
- **Story points are relative** because people estimate relative size better than absolute duration.
- **Planning poker value is in the discussion, not the number** — estimates of 2 and 13 signal two different understandings.
- **Never compare velocity between teams** and **never use it as a performance target**.
- **Acceptance criteria differ per story; the definition of done is the same for every story.**
- **A missing definition of done creates hidden completion debt** — a common reason agile projects slip silently.
- **Nonfunctional requirements go into constraint cards, the definition of done, acceptance criteria, or enabler stories.**
- **Build a thin vertical slice in the first iteration** to expose architectural problems while fixes are cheap.
- The manifesto says *"working software OVER documentation"*, **not "instead of documentation"**.
- **Automated acceptance tests are the only documentation that never goes stale**, because they run.
- **Agile makes change CHEAPER, not FREE** — adding a story still pushes another one out.
- **Many backlog items will never be built — and that is the correct outcome.**

## Summary

- In agile, **the same requirements questions still have to be answered**; only the timing, the form, and the ceremony differ.
- **The product backlog is ordered by value and refined continuously** through grooming, with a definition of ready protecting the team.
- **A user story is a reminder of a conversation**, confirmed by acceptance criteria and judged against INVEST.
- **Story mapping supplies the structure** a flat backlog lacks, letting you slice releases along a complete workflow.
- **Relative estimation plus velocity gives honest forecasts** — as long as you do not abuse them as performance metrics.
- **Nonfunctional requirements and architectural work must be brought in deliberately**, or agile will miss them.
- **Just-enough documentation means recording what outlives team memory**, and every requirements practice you have learned still applies — just at a smaller scale, more often.
