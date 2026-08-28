# User Stories, Modelling Artefacts, Spikes & MVP

The four techniques in the "story family" have names so similar that they get swapped
systematically. Add the three C's, the INVEST criteria, job stories, personas, Gherkin, the
three spike types and the three MVP steps — this is the most vocabulary-dense topic in the
whole agile analysis area.

The good news: almost every question here is a **definition** question. One correct sentence
per term is enough.

## The story family: four confusable techniques

| Technique | What it actually is |
|---|---|
| **Story mapping** | Arranging the user stories for a product or release by the **sequence of the user workflow across the top** (left to right), then detailing and prioritising ordered stories **underneath, going down** |
| **Storyboarding** | A visual technique that analyses user interactions with a product by **sketching out each step** of the user experience |
| **Story decomposition** | Breaking work down from the big picture to the detail, in the order **goal → feature → story → acceptance criteria** |
| **Story elaboration** | Adding detail to a story **before an iteration begins**, including detailed design conversations |

On **story mapping** there is a separate question about correct use: it is best used as a
**self-facilitated or group activity**. Three wrong uses:

- Not something the BA does and then **sends to stakeholders for approval** before a release.
- Not a **roadmapping technique** — a story map has a different focus from a product roadmap.
- Not something the **development team uses to organise its tasks**.

On **story decomposition**, the order is asked directly. Two familiar distractors:
*"portfolio, project, release, iteration"* — which also goes from big to small but is not
about decomposing stories; and *"user story, story map, storyboard, story split"* — which is
not a decomposition at all.

## What makes a good user story

A user story states **who the end user is, what they need, and why**. Three classic errors:

| Example | Why it is wrong |
|---|---|
| "As a **developer** I need to produce a report for CDUs." | User stories are not about what developers need to do — unless developers genuinely are your end customers. |
| "As a **product owner** I want a report for each student." | The same — user stories are not about what product owners want, unless POs are the end users. |
| "As a learner I want a **CDU button on my dashboard screen** to click for a CDU report so I can claim CDUs." | Stories focus on user goals and actions, **not screen details**. This one fixes the UI instead of the goal. |

And the correct version: *"As a learner I need to view details of which courses I have
completed so I can claim CDUs."* — an end user, a need, a reason, and no interface.

## The three C's and INVEST

**The three C's of a user story: Card, Conversation, Confirmation.** Every distractor swaps
one of the three for *"customer"* or *"context"* — count carefully, since some options get
one word wrong and some get two.

**The best strategy for ensuring high-quality user stories is to follow the INVEST
criteria**: Independent, Negotiable, Valuable, Estimable, Small, Testable.

Three wrong approaches are rejected:

- **Making sure the story is stated exactly as submitted** — wrong, because most stories
  submitted to a team need refinement.
- **Tasking developers with judging story quality** — wrong, because they may not be trained
  or skilled in what a high-quality story is.
- **Specifying the technical details and components to be updated** — wrong, because that is
  not an aspect of a good story at all.

## Job stories, user stories and personas

| Artefact | Focus |
|---|---|
| **User story** | The user, their goal and the reason — a representation of a customer need |
| **Job story** | The same idea but with a lens on the user's **situation, motivation, and the outcome they want**. Choose it when a question emphasises *situation* and *motivation*. |
| **Personas** | **User archetypes** creating a shared understanding of **WHO** the customer is. The initiative-horizon technique most associated with "think as a customer". |
| **Acceptance criteria** | The boundaries of a story; used to verify and validate that the solution met the need. Provides little information about user motivation. |

The boundary to remember: **personas answer WHO**, **job stories answer IN WHAT SITUATION
AND FOR WHAT MOTIVATION**, **storyboarding answers HOW THE EXPERIENCE UNFOLDS**.

## Gherkin syntax

Gherkin expresses acceptance criteria as **Given / When / Then**:

| Keyword | What it represents |
|---|---|
| **GIVEN** | The conditions or preconditions |
| **WHEN** | **The action the user takes** using the product |
| **THEN** | The system or product response |
| *Scenario* | All three put together |

Behaviour Driven Development, which uses Gherkin, is the clearest example of the **"get real
using examples"** principle, and it sits in the **delivery horizon**.

## Spikes and the MVP

A **spike** is a **time-boxed effort** used to do the investigation, research or work needed
to **remove ambiguity** and estimate and deliver a backlog item. There are **exactly three
types**:

| Type of spike | What it is for |
|---|---|
| **Functional** | Splitting a large user story into smaller ones, and identifying where risk and complexity occur |
| **Technical** | Feasibility and technical design understanding |
| **Exploratory** | Exploring risks and impacts |

Two names that are **not** spike types but always appear as distractors:

- **Research** — research is not a type of spike; it is a **common activity done inside** a
  spike.
- **Design** — design is not a type of spike either, although what you learn in a spike may
  heavily influence design decisions.

**MVP** — the source is strict about the term itself: it is **Minimal Viable Product**.
*"Most Valuable Product"*, *"Most Viable Product"* and *"Minimum Value Product"* are all
offered as distractors and all wrong.

An MVP is **the minimal functionality needed in the product to start learning and to get
feedback that informs further decisions** — that is, the capabilities needed to merit
releasing a new product.

**The three steps of the MVP technique:**

1. Determine the problem
2. Identify the minimum set of features
3. Analyse the learning from users

Every wrong option in that question is a **backlog-and-approval** workflow (create the
backlog → review with stakeholders → get approval), which is precisely the non-agile framing
the Agile Extension avoids.

At the strategy horizon, the MVP is used to **prioritise the allocation of resources and
increase the speed of organisational learning**.

## Key takeaways

- Story mapping = **workflow across, priority down**, used as a group activity — not sent
  for approval, not a roadmap. Storyboarding = **sketching each step** of the experience.
- Story decomposition = **goal → feature → story → acceptance criteria**.
- A user story states **who / needs what / why**, never screen details, and never a
  developer's or PO's own need.
- The three C's = **Card, Conversation, Confirmation**. Story quality = **INVEST**.
- **Personas = WHO**; **job story = situation + motivation**; **acceptance criteria =
  boundaries**.
- Gherkin: GIVEN = conditions, **WHEN = the user's action**, THEN = the system response.
- The three spike types: **functional, technical, exploratory**. Research and design are
  **not** spike types.
- **Minimal** Viable Product. Three steps: **determine the problem → minimum feature set →
  analyse the learning**.
