# Prototyping & Prioritizing Requirements

## 1. What a prototype is & why you use one

> **Users often do not know exactly what they want until they see something.**

This is a basic reality of software development. You can interview for hours, write hundreds of requirement statements, and users will nod along in agreement — then see the finished product and say *"No, that is not it."*

**A software prototype is a partial, possibly crude, implementation of a proposed system.** It turns abstract requirements into **something tangible that users can see, touch, and react to**.

### Four main purposes of a prototype

**1. Clarify and complete requirements.** Prototypes surface **missing, wrong, and ambiguous requirements** that neither the BA nor the users noticed while reading text.

**2. Explore design alternatives.** You can try several interface approaches quickly and cheaply, instead of committing to one and then discovering it is bad.

**3. Reduce technical risk.** When you are unsure whether a technical approach is feasible, a small prototype can answer that question **before you build the whole system on a false assumption**.

**4. Provide the foundation for the final product.** Some prototypes are developed onward into the real product.

> **The key point: a prototype is a RISK REDUCTION tool.** It converts *"I am not sure"* questions into concrete answers, **early and cheaply**.

### What problems prototypes solve

| Problem | How a prototype helps |
|---------|----------------------|
| Users cannot articulate their needs | Gives them something concrete to react to instead of having to imagine |
| Requirements are vague or ambiguous | Building the prototype forces clarification |
| Nobody knows which approach is better | Lets you compare alternatives directly |
| Technical feasibility is unclear | Proves or disproves it quickly |
| Users and developers understand things differently | Creates a shared object everyone can look at |

> **A good prototype beats a thousand words of description — but it does NOT replace a requirements specification.** A prototype shows the **outward shape**; it does not tell developers every business rule, every exception condition, every valid value. **Use prototypes to DISCOVER requirements, then RECORD what you learn.**

---

## 2. Horizontal & vertical prototypes

There are two dimensions along which to classify prototypes. The first is **scope**: does the prototype cover breadth or depth?

### Horizontal prototype (mock-up / behavioral prototype)

**A horizontal prototype shows the SURFACE of the system — mostly the user interface — WITHOUT implementing the real functionality underneath.**

Characteristics:

- Users can **navigate through screens**, see layouts, labels, and buttons.
- Displayed data is **fake and hard-coded**, not from a real database.
- There is **no real business logic**, no calculations, no storage.
- It is **broad but shallow**.

**When to use it:** to explore and clarify **functional requirements and user task flows**, and to evaluate **usability**.

> **This is the most common prototype in BA work**, because it answers the question *"Can users do the things they need to do, and is it easy?"*

### Vertical prototype (structural prototype / proof of concept)

**A vertical prototype implements a narrow slice of functionality FULLY — from the interface through every layer down to the database.**

Characteristics:

- It uses **real data, real algorithms, real interactions with other systems**.
- It covers only **one or a few functions**, but covers them **completely**.
- It is **narrow but deep**.

**When to use it:** to answer a **technical question** — will this architecture work, is this algorithm fast enough, can we integrate with that system, can we hit the performance requirement?

> **Vertical prototypes are built when the development team needs to prove a technical concept, not for users to evaluate the interface.**

### Quick comparison

| | Horizontal | Vertical |
|---|-----------|----------|
| **Coverage** | Broad, shallow | Narrow, deep |
| **Answers** | *"Is this what I need?"* | *"Can we build this?"* |
| **Evaluated by** | Users, customers | Developers, architects |
| **Data** | Fake | Real |
| **Also called** | Mock-up, behavioral prototype | Proof of concept, structural prototype |

**You may need both on the same project**, for different purposes at different times.

---

## 3. Throwaway prototypes

The second classification dimension is **fate**: do you keep it or discard it?

**A throwaway prototype is built with the EXPLICIT INTENT of discarding it once it has done its job of answering a question.**

### Core characteristics

- Built **quickly and cheaply** with whatever tool is most convenient — not necessarily the same technology as the final product.
- **Skips** error handling, validation, security, performance, and maintainability.
- **Code quality does NOT matter**, because the code will not survive.
- The only goal: **learn something as fast as possible**.

### When to use a throwaway prototype

Use it when you face **requirements uncertainty**:

- Requirements are **vague, incomplete, or contradictory**.
- Users are **unsure what they want**.
- You need **fast feedback** on an idea.
- There are **several alternatives** and you want to compare them.

> **The deciding question:** *"What are we trying to learn?"* If the answer is clear and the question can be answered by something crude, build a throwaway prototype.

### The biggest trap: the prototype gets pushed into production

> **This is the most serious and most common risk of throwaway prototyping.**
>
> The familiar scenario: the team builds an attractive prototype to demonstrate. A manager or customer sees it and says **"That looks great! It is almost done — just finish it up and let us ship."**
>
> But the prototype was built **with no error handling, no data validation, no security, no performance consideration, and messy code written in a hurry**. *"Finishing it up"* really means **rebuilding it from scratch, but this time on a bad foundation**.
>
> **The result: a fragile product the team will be propping up for years.**

**How to prevent it:**

**1. Make the prototype OBVIOUSLY unfinished.** Use handwritten fonts, simple colours, or sketchy lines. **A polished-looking prototype creates the expectation that it is nearly done.**

**2. Say clearly up front, in writing, that the prototype will be discarded.** Record it in the project plan and repeat it at every demonstration.

**3. Use technology that CANNOT go into production.** If the prototype is drawn in a sketching tool or on paper, nobody can demand you *"just finish it"*.

**4. Explain the real cost.** Tell stakeholders that forcing a prototype into production creates **enormous technical debt** they will be paying interest on for years.

---

## 4. Evolutionary prototypes

**An evolutionary prototype is built with the intent of becoming the REAL PRODUCT, through successive rounds of refinement.**

### Core characteristics

- Built with the **same technology and the same quality standards** as the final product.
- **Solid architecture from the start**, because it will have to grow.
- Includes **error handling, validation, and good engineering practices**.
- Each iteration **adds functionality** based on feedback.

> **This is exactly the model agile development follows: each iteration produces a working piece of the product, improved incrementally based on real feedback.**

### Throwaway versus evolutionary

| | Throwaway | Evolutionary |
|---|-----------|--------------|
| **Fate** | Discarded | Becomes the product |
| **Code quality** | Irrelevant | Production quality |
| **Technology** | Whatever is fastest | Same as the final product |
| **Build speed** | Very fast | Much slower |
| **Error handling, security** | Skipped | Complete |
| **Purpose** | Learn and answer a question | Incremental delivery |
| **Main risk** | Being forced into production | Initial architecture not good enough to grow |

### The four-quadrant matrix

Combining the two dimensions gives four combinations, each serving a different purpose:

| | **Horizontal (broad, shallow)** | **Vertical (narrow, deep)** |
|---|---|---|
| **Throwaway** | **The most common.** UI mock-up to explore requirements and task flows, then discard | A technical proof of concept that answers one question, then discard |
| **Evolutionary** | Rare and **dangerous** — a broad surface with no foundation cannot evolve into a product | **The agile approach:** build a complete, production-quality slice, then extend |

> **An important caution:** The **evolutionary + horizontal** quadrant is almost always a mistake. Building a broad interface with nothing underneath and then trying to *"fill it in"* leads to **an architecture driven by the interface rather than by the business domain**.

---

## 5. Paper & electronic prototypes

The third classification dimension is **fidelity** — how much the prototype looks like the real product.

### Low-fidelity prototypes

**Paper prototypes** are the simplest form: **hand-draw screens on paper or cards**, then *"run"* them by having the user point to where they would click while someone plays the role of *"the computer"* and swaps in the corresponding sheet.

**Advantages — and they are bigger than most people expect:**

- **Extremely cheap and fast.** You can draw a screen in 2 minutes and throw it away without regret.
- **They encourage candid feedback.** Users hesitate to criticise something that looks finished, but **have no hesitation at all criticising a hand sketch**.
- **Nobody demands you put it into production.** The biggest throwaway-prototyping trap disappears entirely.
- **They focus attention on structure and flow, not on colours and fonts.** The conversation goes to what actually matters at this stage.
- **Anyone can participate.** Users can pick up a pen and sketch their own idea.

> **A powerful paradox: the cruder the prototype, the more valuable the early feedback.** Show a polished design and people comment on button colours. Show a hand sketch and people talk about whether the process is right.

**Disadvantages:** they cannot convey **dynamic interaction, animation, or a real sense of speed**. They are not suitable for evaluating those aspects.

### High-fidelity prototypes

**Electronic prototypes** are built with UI design tools, dedicated prototyping tools, or real code.

**Advantages:**

- They convey **dynamic interaction, transitions, and real-time response**.
- They can be **distributed remotely** to evaluators in many locations.
- They suit **formal usability testing** and executive demonstrations.
- They can serve as a **visual specification** for developers.

**Disadvantages:**

- **Much more time and cost.**
- **They create the expectation that the product is nearly done** — right back into the trap above.
- **They suppress structural feedback**, because viewers assume the big decisions are already settled.

### The practical strategy

> **Start on paper, finish electronically.**
>
> Use **paper prototypes** early to explore structure, task flow, and major alternatives — where you want to change a lot, fast. Move to **electronic prototypes** once the structure is stable and you need to evaluate detailed interaction or run formal usability tests.
>
> **The polish of the prototype should match how certain you are.**

---

## 6. Evaluating prototypes & the risks of prototyping

### How to run a prototype evaluation

**1. Pick the right evaluators.** They must be **representatives of the real user classes** who will use the system — not their managers, not the budget holder. **Include both power users and occasional users**, because they will react very differently.

**2. Give them TASKS, not a tour.** Do not walk users through each screen explaining it. Instead say: *"Place a request for 2 litres of acetone"* and then **watch in silence**. Wherever they hesitate is where the design has a problem.

**3. Record problems, not solutions.** When a user says *"there should be a button here"*, record the **underlying problem** — *"the user could not find a way to go back to the previous step"* — not the solution they proposed. **Solutions are the designer job; problems are the valuable data.**

**4. Convert what you learn into RECORDED REQUIREMENTS.** This is the most frequently skipped step. **A prototype is not a specification** — it is a discovery tool. After each evaluation round, update the requirements with what you learned.

**5. Set clear expectations at the start of every session.** State clearly **what the prototype is and is not**, which parts work and which are just a facade, and what will happen to it afterwards.

### Six risks of prototyping

**1. The prototype gets pushed into production.** Discussed above — **the most serious risk**.

**2. Users fixate on surface details.** They debate colours and button placement while you are trying to validate the workflow. **Fix: use low-fidelity prototypes and state the session goal explicitly.**

**3. Unrealistic expectations about progress.** Seeing working screens makes stakeholders think the project is 80 percent done when it is really 10 percent. **Fix: communicate clearly how much of the real work the prototype represents.**

**4. The prototype shows unrealistic performance.** A mock-up with fake data responds instantly; the real system with a million records will not. **Users will be disappointed if you do not say so in advance.**

**5. Over-investing in the prototype.** A prototype is a **means, not an end**. If you spend three months perfecting one, you have lost its main advantage: **being fast and cheap**.

**6. Stopping too early or too late.** **Stopping too early** means you did not learn enough. **Continuing too long** — round ten and still making major changes — usually signals that you **have not identified the decision-maker** or **do not understand the real business problem**.

> **The stopping criterion: decide BEFORE you start what question this prototype must answer.** Once it is answered, stop — even if the prototype could still be prettier.

---

## 7. Why prioritize & the obstacles to it

> **No project has enough time, money, and people to do everything everyone wants.**

This is not pessimism — it is **arithmetic**. The wish list is always longer than the capacity to deliver. **The question is not *"do we have to cut"* but *"what do we cut, and who decides"*.**

### What happens when you do NOT prioritize

**If every requirement is equally important, the project manager does NOT know how to respond when:**

- The schedule slips.
- A key team member leaves.
- An important new requirement appears mid-project.
- The original estimates turn out to have been optimistic.

**Without priorities, every cut becomes a political crisis.** With clear priorities, it is just **executing a plan that was agreed in advance**.

> **The worst consequence of not prioritizing: developers decide.** When time runs out, somebody has to choose what to build first. If stakeholders do not decide, **developers will** — based on what is interesting or easy, not on business value.

### Four obstacles to prioritization

**1. *"Everything is high priority."*** This is the most common customer reaction. It really means **"I do not want to have to choose"** or **"I am afraid that if I call this low priority it will never get built."**

- **How to handle it: invert the question.** Do not ask *"which of these is important?"* Ask *"if we can only deliver half of this list by June, which half do you want?"* **Forcing a choice between concrete alternatives produces honest answers.**

**2. Fear of losing what they want.** Stakeholders assign high priority to everything because they believe **low priority = never**.

- **How to handle it:** make clear that low priority means **later**, not **never** — and then keep that promise.

**3. Conflicts among stakeholders.** What matters most to sales may be meaningless to operations.

- **How to handle it:** you need a **decision-maker with authority** — a product champion or product owner — and a **transparent decision framework** based on business value, not on who talks loudest.

**4. Lack of information to decide with.** Nobody who does not know what a requirement costs can weigh its value against that cost.

- **How to handle it:** **prioritization is a COLLABORATIVE activity** — customers supply value, developers supply cost and technical risk.

> **An important principle: priorities are NOT fixed.** They change as market conditions change, as you learn new things, as competitors ship. **Revisit priorities regularly, especially at the start of each iteration or phase.**

---

## 8. Basic prioritization techniques

### In or out

**The simplest technique: for each requirement, the group decides whether it is in this release or not.** There is no middle level.

- **Advantages:** extremely fast, forces a decisive answer, suits short lists.
- **Disadvantage:** it tells you nothing about the order among the *"in"* items.
- **Important:** you need **all the key decision-makers in the same room**, because the decision is binding.

### Three-level prioritization

Sort every requirement into one of three groups. Common names:

| Level | Meaning |
|-------|---------|
| **High / Essential** | The software is **unacceptable** without it |
| **Medium / Conditional** | Makes the software **significantly better**, but is still acceptable without it |
| **Low / Optional** | **Nice to have** but not essential |

> **The built-in trap: people will put most requirements in the High bucket.** An effective countermeasure is **imposing a quota**: *"No more than 30 percent of requirements may be High."* This forces genuine discrimination.

### MoSCoW

A widely used four-level variant, especially in agile methods:

| Letter | Meaning | Explanation |
|--------|---------|-------------|
| **M** | **Must** | Mandatory; **without it the release fails** |
| **S** | **Should** | Important and should be included if possible, but **a temporary workaround exists** |
| **C** | **Could** | Desirable; will be done **if time and resources permit** |
| **W** | **Won't** | **Not this time** — but may be reconsidered for a later release |

> **The W is the most underrated and most useful part of MoSCoW.** *"Won't this time"* is completely different from *"never"*. **It reassures stakeholders that their idea has not been thrown away, just deferred** — which sharply reduces the tendency to label everything Must.

**A practical guideline:** many teams set a rule that **Must may not exceed about 60 percent of the total effort** of an iteration, leaving room for uncertainty.

### The $100 technique (cumulative voting)

**Each stakeholder is given 100 imaginary points — think of it as money — and allocates them to requirements according to their importance.**

- They can put everything on one requirement, or spread it thin.
- The total across all voters gives each requirement a **quantitative ranking**.

**Advantage:** it forces **real trade-offs** — giving more to one thing means giving less to another. That is exactly what three-level prioritization fails to do.

**Disadvantages and fixes:**

- **Strategic manipulation:** someone can dump all 100 points on their pet requirement to push it to the top. **Fix: impose a cap** — no requirement may receive more than 20 points from one person.
- **It does not work on very long lists.** With 200 requirements, 100 points is too thin. **Use it for lists of 20–40 items**, or group the requirements and prioritize within each group.
- **It reflects value only, not cost.** A requirement scoring 40 points but costing six months may be less attractive than three 15-point requirements costing two weeks each.

---

## 9. Prioritizing by value, cost, and risk

The techniques above rely largely on **gut feel**. When the investment is large and the decisions are hard, you need a **semiquantitative** approach.

### The core principle

> **The highest priority belongs to requirements with the best VALUE-TO-COST RATIO, adjusted for risk.**

This solves the biggest problem with purely intuitive prioritization: **a moderately valuable but extremely cheap requirement is often worth doing before a highly valuable but extremely expensive one.**

### Four factors to estimate

For each requirement or feature, estimate on a relative scale (say 1–9):

**1. Relative benefit** — the value of having it. Judged by the **customer**.

**2. Relative penalty** — the harm of **not** having it. Also judged by the **customer**.

> **Why do you need both?** Because they differ. A regulatory compliance feature may have **low benefit** (nobody is happier for it) but **enormous penalty** (fines or a sales ban). If you only ask about benefit, you will **wrongly rank it at the bottom**.

**3. Relative cost** — the effort to implement. Estimated by **developers**, based on complexity, reuse potential, and testing needed.

**4. Relative technical risk** — the degree of uncertainty about whether it can be done, or done right. Also estimated by **developers**.

### The calculation

**Value of a requirement** = benefit + penalty (weight them if penalty matters more in your organization).

**Priority** = value ÷ (cost + risk)

**Rank the requirements by descending priority score.** The ones at the top give you **the most value per unit of effort and risk**.

### Using the results wisely

> **Do not treat the numbers as absolute truth.** This is a **relative scale based on estimates**, not a precise measurement.

**The real value of this technique lies in:**

- **It forces a structured conversation** between customers and developers, each contributing information the other lacks.
- **It exposes disagreement.** When two stakeholders score the same requirement 9 and 2, **that is the most valuable discussion of the whole session**.
- **It separates value from cost.** Many priority arguments are really two sides talking about different dimensions without realising it.
- **It gives you an objective argument** when you have to explain why a requirement was deferred.

**Use the results as a STARTING POINT for discussion, then adjust with human judgment** for the factors the formula cannot capture — legal constraints, technical dependencies, customer commitments, market timing.

### Do not forget dependencies

**Some low-priority requirements must be built early because high-priority ones depend on them.** A user authentication mechanism may deliver no direct value, but everything else needs it.

> **Treat priorities as an input to planning, not as the plan.** The final plan must account for **mandatory technical sequence**, not just business value.

---

## 10. The Kano model & prioritization on agile projects

### The Kano model

**The Kano model classifies features by how they affect customer SATISFACTION** — and its insight adds a dimension that value-cost analysis misses.

**Three main categories:**

**1. Must-be (basic requirements / expected attributes)**

- Customers **take them for granted**. Having them pleases nobody; **lacking them makes everyone angry**.
- Examples: a banking app showing the correct balance; sent email actually arriving.
- **A nonlinear relationship:** investing more in them **does not increase satisfaction**, but any shortfall causes serious damage.
- **Strategy: reach an adequate level, do not aim for excellence.**

**2. Performance (one-dimensional / linear)**

- **More is better** — satisfaction rises in proportion to the level delivered.
- Examples: page load speed, storage capacity, battery life.
- **This is where customers compare you with competitors.**
- **Strategy: invest deliberately, based on the competitive position you want.**

**3. Delighters (attractive attributes)**

- Customers **do not expect them and do not ask for them**. Lacking them, nobody complains; **having them creates loyalty**.
- Example: a small feature that saves users hours they never thought to ask about.
- **Strategy: a few carefully chosen delighters make a big difference — but do not invest in them before the must-bes are solid.**

> **The most important Kano insight: these categories MIGRATE over time.** What was once a delighter becomes a performance attribute, then becomes a must-be. A camera on a phone was once astonishing; now a phone without one is unsellable. **This is why products must innovate continuously just to stay in place.**

**How to use Kano in prioritization:**

- **Make sure every must-be is in the first release** — they are preconditions, not options.
- **Allocate most of the remaining effort to performance attributes** on the dimensions your customers actually care about.
- **Reserve a small slice for one or two delighters** to differentiate.
- **Never trade a must-be for a delighter.** A product with charming features but missing the basics gets rejected.

### Prioritization on agile projects

Agile puts prioritization at the **centre of the process** rather than treating it as a one-time activity.

**Four principles:**

**1. The backlog is ALWAYS ordered.** A product backlog is not a flat list — it is **sorted top to bottom**, and the top item is the one being done next. **That ordering is revisited continuously.**

**2. The product owner is the final decision-maker.** The team supplies **effort estimates**; the product owner decides **the order**. **A single accountable person** resolves stakeholder conflict.

**3. Priorities only need to be accurate at the TOP of the list.** There is no point perfectly sorting the last 300 backlog items — they will change before their turn comes. **Invest the prioritization effort in the next 20–30 items.**

**4. Deliver in descending value order.** Because the highest-value item is done first, **every release delivers as much value as possible at that point in time**. If the project is stopped abruptly, you have still delivered the most important part.

> **The deeper benefit of continuous prioritization: it turns "cutting scope" from a failure into a routine decision.** When the backlog is ordered by value, stopping at item 40 instead of item 60 **is not a crisis — it is the expected outcome of delivering in value order**.

---

## Key takeaways

- **Users often do not know exactly what they want until they see something** — that is why prototypes exist.
- **A prototype is a risk reduction tool**, converting *"I am not sure"* into concrete answers, early and cheaply.
- **A prototype does NOT replace a requirements specification** — use it to discover, then record what you learn.
- **Horizontal prototypes are broad and shallow** (interface, fake data) and answer *"is this what I need?"*
- **Vertical prototypes are narrow and deep** (proof of concept) and answer *"can we build this?"*
- **Throwaway prototypes are built to be discarded** — skipping error handling, security, and performance.
- **The most serious risk: the prototype gets pushed into production**, giving a fragile product on a bad foundation.
- Prevent it by **making the prototype obviously unfinished** and using technology that cannot ship.
- **Evolutionary prototypes become the product** — production quality from the start; this is the agile model.
- **Evolutionary + horizontal is almost always a mistake** — a broad surface with no foundation cannot evolve.
- **The cruder the prototype, the more valuable the early feedback** — nobody hesitates to criticise a hand sketch.
- When evaluating, **give users TASKS rather than a tour**, then watch in silence.
- **Record the problem, not the solution** the user proposes.
- **Decide before you start what question the prototype must answer** — that is your stopping criterion.
- If every requirement is equally important, **the project manager does not know how to respond** to trouble.
- Without clear priorities, **developers decide** based on what is easy or interesting.
- For *"everything is high priority"*, **invert the question**: *"if we can only deliver half, which half?"*
- **Low priority means later, not never** — and you have to keep that promise.
- **The W in MoSCoW is the most useful letter**: *"won't this time"* is completely different from *"never"*.
- The **$100 technique forces real trade-offs**, but needs a cap to resist manipulation.
- **Ask about BOTH the benefit of having and the penalty of not having** — compliance features have low benefit but enormous penalty.
- **Priority = value ÷ (cost + risk)**, with customers supplying value and developers supplying cost and risk.
- The greatest value of semiquantitative analysis is **exposing disagreement** among stakeholders.
- **Some low-priority requirements must be built early** because high-priority ones depend on them.
- **Kano: must-bes just adequate, performance deliberately invested, delighters selectively** — and the categories migrate over time.
- On agile projects, **priorities only need accuracy at the top of the backlog**; the tail will change before its turn.

## Summary

- **Prototypes turn abstract requirements into something tangible** for users to react to, and should be chosen along three dimensions: **horizontal or vertical, throwaway or evolutionary, low or high fidelity**.
- **Decide what question the prototype must answer before building it**, and protect it from being forced into production.
- **Prioritization is mandatory**, not optional, because no project can do everything.
- Pick the technique to fit the situation: **MoSCoW for speed, $100 for real trade-offs, value-cost-risk analysis for big decisions**.
- **Prioritization is collaborative**: customers know the value, developers know the cost and risk.
- **Revisit priorities regularly**, because circumstances change and the Kano model shows customer expectations shift over time.
