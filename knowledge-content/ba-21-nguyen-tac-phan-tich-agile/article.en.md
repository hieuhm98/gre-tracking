# The Seven Agile Analysis Principles & the BACCM

The seven agile analysis principles are the central framework of the *Agile Extension to
the BABOK Guide v2*. In practice — and in every assessment on the subject — you are never
asked "what is principle X". You are given a scenario and asked which principle it shows.

The distractors are always chosen to be **adjacent rather than absurd**. So the thing most
worth memorising is not the definitions but the **trigger word** for each principle.

## The seven agile analysis principles

| Principle | What it means |
|---|---|
| **See the whole** | Understanding the wider context of the work and how a detail connects to the outcome |
| **Think as a customer** | Building and using an understanding of the customer's perspective |
| **Analyze to determine what is valuable** | Continuously deciding what is worth doing next |
| **Get real using examples** | Making the need concrete through real user examples |
| **Understand what's doable** | Understanding the constraints that bound the solution |
| **Stimulate collaboration and continuous improvement** | Working together and improving the way of working itself |
| **Avoid waste** | Not producing or refining more than is needed to learn and satisfy the need |

The seven are not an ordered process. They are seven lenses an agile BA holds at once; the
question is always which lens is **governing** the specific action.

## The trigger word for each principle

This is the single most worthwhile table in the topic.

| Principle | Trigger words in the scenario |
|---|---|
| See the whole | context, *why*, big picture, outcome, market, enterprise-wide impact |
| Think as a customer | empathy, customer viewpoint, decomposing customer needs, who the user is |
| Analyze what is valuable | prioritise, maximise value, continuously assess the work |
| Get real using examples | examples, scenarios, alternate and exception paths, BDD, Gherkin, *need* |
| Understand what's doable | **constraints**, feasibility, what can actually be done |
| Stimulate collaboration & improvement | improve the process, retrospective, work with other teams |
| Avoid waste | smallest version, only what is needed, only document what is needed, outdated information |

The strongest trigger in the table is **"constraints"**. If the question mentions
constraints, the answer is *Understand what's doable* — even when the scenario is full of
collaboration or prioritisation.

## The confusions created on purpose

The pairs below get swapped most often, and each has a tidy boundary.

| Confusion pair | How to separate them |
|---|---|
| Understand what's doable ↔ Analyze what is valuable | Doable = **constraints**. Valuable = **prioritisation**. If the sentence mentions constraints, it is never the value principle. |
| Avoid waste ↔ Analyze what is valuable | Avoid waste is about **not producing more than needed** (smallest slice, minimal documentation). Analyzing value is about the **ordering** of work. |
| Get real using examples ↔ Think as a customer | Examples, scenarios, exception paths = get real. Understanding who the customer is and decomposing their viewpoint = think as a customer. |
| See the whole ↔ Stimulate collaboration | If the team happens to be collaborating but the point of the sentence is context or outcome alignment → See the whole. Collaboration is only the answer when **improving the way of working** is the point. |
| Avoid waste ↔ Stimulate collaboration | "Only documenting what is needed at the time" is Avoid waste — documentation is not a strong form of collaboration. |

The general rule: nearly every agile scenario **contains** collaboration. So "the team is
collaborating" is almost never sufficient reason to pick the collaboration principle.

## The same principle at three different horizons

A distinct question type asks: how is principle X applied at horizon Y? The same principle
scales with the horizon.

| Principle | At the strategy horizon | At the initiative horizon | At the delivery horizon |
|---|---|---|---|
| See the whole | Considering the market, political climate, and current organisational capabilities, strengths and challenges | Aligning epics, features and themes | Making sure each user story has acceptance criteria and connects to the outcome |
| Avoid waste | Making sure decisions are based on current information and that the work is still relevant to organisational goals | Making sure teams prioritise in backlog refinement | Documenting only what is needed; slicing stories to the smallest useful version |
| Stimulate collaboration | Cross-portfolio alignment | Collaborating with the team and with other teams on related initiatives | Refining stories with the team; collaborating with customers in reviews and demos |

This is a rich source of traps. "Collaborating with the team to refine user stories" sounds
like initiative-horizon collaboration but is **delivery-horizon** work; "collaborating with
other teams on related initiatives" is the **initiative-horizon** answer.

## BACCM — the six core concepts

The Business Analysis Core Concept Model (BACCM) is the conceptual backbone of the whole
BABOK. There are exactly **six** concepts, no more and no fewer.

| Concept | Definition |
|---|---|
| **Change** | The act of transformation in response to a need |
| **Need** | A problem or opportunity to be addressed |
| **Solution** | A specific way of satisfying one or more needs within a context |
| **Stakeholder** | A group or individual with a relationship to the change, the need or the solution |
| **Value** | The worth, importance or usefulness of something to a stakeholder within a context |
| **Context** | The circumstances that influence, are influenced by, and provide understanding of the change |

The wrong answers to "which are the six core concepts" always mix in plausible agile
vocabulary: *adapt, customer, feedback, iteration, backlog item, team, product, review*.
Only **Change, Need, Solution, Stakeholder, Value, Context** is correct. A fast trick: some
distractor lists contain only **five** items — counting eliminates them outright.

## Mapping BACCM concepts to the agile principles

| Core concept | Maps to | Reasoning |
|---|---|---|
| Context | See the whole | Seeing the whole is entirely about context |
| Need | Get real using examples | Getting real using examples is all about understanding the need |
| Value | Get real using examples **and** Avoid waste (together) | Value is the concept those two principles embody |
| Change | **All** of the principles, not just one | Change cuts across every principle, so it is never the answer to a single-principle question |

That last row is a useful elimination: when a question asks you to map a BACCM concept onto
**one** principle, **Change** is almost certainly not the answer.

## Key takeaways

- Learn the **trigger words**, not the definitions: *constraints* → doable;
  *prioritise* → valuable; *smallest / only what is needed* → avoid waste;
  *scenarios, exception paths, Gherkin* → get real; *who the customer is* → think as a
  customer; *context, why* → see the whole; *improving the way of working* → collaboration.
- "The team is collaborating" is not enough to pick the collaboration principle — nearly
  every scenario has it.
- The same principle looks different at each horizon; read which horizon the question names.
- The six BACCM concepts: **Change, Need, Solution, Stakeholder, Value, Context**. Count the
  items to eliminate distractors fast.
- **Change** maps to every principle, so it is never the answer to a single-principle question.
