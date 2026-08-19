# Product Discovery & Validation

## 1. The biggest problem in product development

> **Most features that get built create no value at all.** Industry studies vary on the exact number, but the message is consistent: **a large share of development effort is wasted building the wrong thing correctly.**

**The cause is not bad developers.** The cause is that **we guess wrong about what users need**, then turn the guess into requirements, then turn requirements into code — without validating at any step.

**Two kinds of work in a product team:**

| | Discovery | Delivery |
|---|-----------|----------|
| **Question** | *"What should we build?"* | *"Build it correctly and solidly"* |
| **Output** | Knowledge and decisions | Working software |
| **Unit of success** | Learn fast, fail cheap | Ship steadily at quality |
| **Main risk** | Building what nobody needs | Building slowly or with defects |

> **These run in PARALLEL, not in sequence.** While the team delivers the current sprint, the PO and BA are discovering for the sprints ahead.

---

## 2. Four risks to validate

**Before committing to build anything significant, ask four questions:**

**1. Value risk — *will users want it?***

The most-skipped and most expensive risk. **Nobody reads your feature description and says "this is useless" — they simply do not use it after you ship.**

**2. Usability risk — *will they understand how to use it?***

A correct feature nobody can figure out is worth nothing.

**3. Feasibility risk — *can we build it within current constraints?***

Answered by the development team, usually with a technical spike.

**4. Business risk — *does it fit the rest of the organisation?***

Legal, sales, operations, brand, infrastructure cost.

> **A common mistake: validating only feasibility because it is the easiest to ask.** The team answers *"yes, three weeks"* immediately, while *"does anyone need this"* has no one in the room who can answer — so it gets ignored.

---

## 3. Interviewing customers properly

**The goal of a discovery interview is NOT to ask users which feature they want.** The goal is **understanding their problem, context, and current behaviour.**

**Four principles:**

**1. Ask about the past, not the future.**

- ❌ *"Would you use this feature if we built it?"* — people say yes to be polite.
- ✅ *"When did you last hit this situation? What did you do then?"*

**2. Dig into real behaviour, not opinions.**

Opinions are cheap; behaviour is expensive. *"Have you spent money or time solving this?"* is the question that separates a real problem from a conversational one.

**3. Ask why five times.**

Users state solutions rather than problems. *"I need an Excel export button"* — why? — *"to send to my boss"* — why not a link? — *"because my boss reads it on a plane"*. **The real problem is offline viewing, and Excel export is only one answer.**

**4. Do not sell during the interview.**

The moment you start persuading, the other person switches to politeness mode and you lose all your data.

> **How many: about five to eight interviews per user group is usually enough for patterns to repeat.** After that the marginal value drops fast.

---

## 4. Assumptions and cheap experiments

**Every product idea is a stack of assumptions.** Discovery's job is **finding the riskiest assumption and testing it the cheapest way.**

**How to find the riskiest assumption — two questions:**

- **If this assumption is wrong, does the whole idea collapse?**
- **Do we have any evidence for it yet?**

**An assumption that is both important and unevidenced is the one to test first.**

**A ladder of experiments from cheap to expensive:**

| Experiment | Cost | Which risk it answers |
|------------|------|----------------------|
| **Query existing data** | Nearly zero | Value, business |
| **Customer interviews** | A few hours | Value |
| **Paper or Figma prototype** | One to two days | Usability |
| **Fake landing page** | A few days | Value (measure sign-ups) |
| **Concierge / Wizard of Oz** | One to two weeks, done manually | Value, usability |
| **Technical spike** | A few days | Feasibility |
| **A real MVP** | Many weeks | All of them, but most expensive |

> **The principle: always pick the cheapest experiment that could DISPROVE the assumption.** You do not need perfect evidence; you need **enough evidence to dare take the next step**.

---

## 5. How the MVP is misunderstood

**An MVP is the smallest version that lets you LEARN the most important thing from real users.**

**Three common misreadings:**

| Misreading | Why it is wrong |
|------------|-----------------|
| *"An MVP is a cheap, low-quality build"* | An MVP is small in SCOPE, not low in quality — a buggy MVP only teaches you that users dislike bugs |
| *"An MVP is phase one of a three-phase plan"* | If all three phases are already decided, that is not an MVP, that is incremental delivery |
| *"An MVP saves budget"* | An MVP reduces the risk of learning wrong; saving is only a side effect |

> **The test of a real MVP: *"What result from this MVP would make us STOP?"*** With no answer, you are not doing an MVP — you are delivering incrementally under a fancier name.

**Do not forget the MVP's hidden cost:** a poor MVP released to real customers can **damage trust and cost you the chance to try again** with those same people.

---

## 6. Reading feedback honestly

**Four traps when interpreting results:**

**1. Confirmation bias.** You remember the three who praised it and forget the seven who shrugged. **The defence: write success criteria BEFORE running the experiment.** *"If fewer than 20 percent reach step two, we drop this direction."*

**2. Mistaking politeness for need.** *"Nice idea"* is not data. **Data is behaviour**: did they sign up, come back, pay?

**3. The wrong sample.** Five interviews with your own colleagues says nothing about the market.

**4. Not separating signal from noise.** One very loud user does not represent a thousand silent ones. **But conversely, feedback repeating at the third and fourth person is already a pattern.**

> **Discovery's most valuable outcome is a decision NOT to build.** Every time you kill an idea after two days of testing instead of two months of coding, discovery has paid for itself.

**Three valid conclusions after an experiment:** *continue*, *pivot*, *stop*. **If your team has never chosen the third, your discovery is a ritual.**

---

## 7. Key takeaways

- **A large share of features built create no value** — because we build the wrong thing correctly.
- **Discovery and delivery run in parallel**, not in sequence.
- Four risks to validate: **value, usability, feasibility, business**.
- **Teams tend to validate only feasibility** because it is the one question someone in the room can answer.
- Interviews aim at **understanding the problem and behaviour**, not asking which feature they want.
- **Ask about the past, not the future** — people say yes to be polite.
- ***"Have you spent money or time on this?"*** separates a real problem from a conversational one.
- **Ask why five times**, since users state solutions rather than problems.
- **Five to eight interviews** per user group is usually enough for patterns to emerge.
- The riskiest assumption is the one **both important and unevidenced**.
- **Always pick the cheapest experiment that could disprove the assumption.**
- **An MVP is small in scope, not low in quality.**
- **If no result would make you stop, it is not an MVP.**
- **A poor MVP can damage trust and cost you a second chance.**
- Beat confirmation bias by **writing success criteria before running the experiment**.
- ***"Nice idea"* is not data** — data is behaviour.
- **One loud user does not represent a thousand silent ones**, but repetition by the third person is a pattern.
- **Discovery's most valuable outcome is a decision not to build.**
- **A team that has never chosen to stop is performing a ritual.**

## 8. Summary

- Discovery exists to **reduce the risk of building the wrong thing**, and it must run continuously alongside delivery.
- **Four risk types deserve deliberate validation**, especially value risk since it is the easiest to skip.
- **Good interviews ask about past behaviour**, and the experiment ladder should run cheap to expensive.
- **An MVP is a learning tool rather than a trimmed release**, and its stopping criteria must be written first.
