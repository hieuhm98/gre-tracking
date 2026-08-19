# Stakeholders: Identifying & Engaging

## 1. Who is a stakeholder?

> **A stakeholder is anyone affected by the project, anyone who can affect it, or anyone with an interest in its outcome.**

That definition is far broader than newcomers assume. **Stakeholders are not only customers and users.**

**The four groups most often missed:**

| Group | Examples | Why they matter |
|-------|----------|-----------------|
| **Indirect users** | People who receive system-generated reports, your customer's customers | They bear the consequences yet never open the software |
| **Operations and support** | IT support, system administrators, customer care | They live with the product daily after handover |
| **Compliance functions** | Legal, audit, information security | They hold a late veto if they are not consulted early |
| **External systems and partners** | Payment providers, integration partners | Your change can break their integration |

> **The classic lesson: Legal appears in the final week before release and says the feature breaches a regulation.** The cost of that late discovery usually dwarfs the cost of inviting them to one meeting in week one.

---

## 2. How to find the stakeholders you missed

Do not wait for them to appear. **Hunt for them deliberately.**

**Technique 1 — Follow the flow.** Chart the end-to-end business process and ask at each step: *who performs this, who supplies the input, who receives the output?* Every handoff is a potential stakeholder.

**Technique 2 — Follow the data.** For each important data type ask: *who creates it, who reads it, who changes it, who deletes it, who is accountable for its quality?*

**Technique 3 — Ask around the circle.** End every interview with this question: ***"Besides you, who else should I be talking to about this?"*** It is the most effective and least expensive question in the whole process.

**Technique 4 — Review an ecosystem map.** Diagram every system your application exchanges data with. Each one has a team that owns it.

**Technique 5 — Ask who will object.** *"Who might be unhappy when this system arrives?"* This finds influential people you need to win over early.

---

## 3. Mapping by influence and interest

You cannot give every stakeholder equal time. **The influence-interest matrix allocates communication effort.**

| | **Low interest** | **High interest** |
|---|-----------------|-------------------|
| **High influence** | **Keep satisfied** — periodic summaries, do not burden them with operational detail | **Manage closely** — regular meetings, involve in decisions, review documents |
| **Low influence** | **Monitor** — notify on major changes | **Keep informed** — regular updates, consult on detail |

**Using the matrix correctly:**

- **High influence, high interest** is where most of your time goes. These are usually the product champions and decision-makers.
- **High influence, low interest is dangerous if forgotten**: they do not participate but can veto. Keep them informed enough never to be surprised.
- **A person's position can shift during the project.** A director who started disengaged becomes very interested once the budget overruns.

> **An important caution: do not confuse job title with influence.** A long-serving operations specialist whom everyone consults may hold more real influence than a newly appointed department head.

---

## 4. Product champions — representing a user class

**For each important user class, find a product champion: a real, experienced user whom colleagues trust and who is willing to spend time on the project.**

**Why a champion beats trying to meet every user:**

- You **cannot interview 500 warehouse staff**, but you can work deeply with two representatives.
- A champion **takes responsibility for gathering their group's input** and brings you the collective voice.
- They become **the product's advocate** inside their own department at rollout.

**Criteria for a good champion:**

- A **real user**, not a manager relaying second-hand accounts.
- **Deep understanding of the work**, including the exception cases.
- **Respected by colleagues** — their voice genuinely represents the group.
- **Has time and their manager's permission** to spend it.

> **A common trap: picking the most available person rather than the most knowledgeable.** People are often available precisely because they hold no critical role in the process — and the requirements you gather will reflect that.

---

## 5. Handling stakeholder disagreement

Disagreement between stakeholders is **normal and unavoidable**, because their goals differ.

**Three kinds of disagreement and how to handle them:**

**1. Disagreement from different understandings.** Both sides actually want the same thing but use different words, or each sees a different part of the problem.

- **How to handle it:** clarify with concrete examples and visual models. A great many disagreements evaporate once everyone looks at the same diagram.

**2. Disagreement from different priorities.** Sales wants feature A, operations wants feature B, and there is only capacity for one.

- **How to handle it:** this is **not the BA's decision**. Your job is to make the trade-off explicit with data — value, cost, risk of each option — and take it to whoever has the authority.

**3. Disagreement from conflicting interests.** Automating a process may reduce a department's importance.

- **How to handle it:** name it honestly but respectfully. **Do not package an organizational problem as a software requirement** — that produces more complex software without solving the real issue.

> **A key principle: the BA clarifies and supplies data; the person with authority decides.** If you decide for them, you carry responsibility for a decision you had no right to make — and it will be reversed late.

---

## 6. Sustaining relationships through the project

Identifying stakeholders at project start is not enough. **Relationships must be maintained.**

**Four practices:**

**1. Have a communication plan.** For each stakeholder group: what they need to know, how often, through which channel, at what level of detail. Write it down and follow it.

**2. Close the loop.** When someone raises a request or a concern, **always report back the outcome** — even when the answer is no. People who never hear back stop contributing and start working around you.

**3. Revisit the stakeholder list regularly.** New people appear, old ones change roles, interest levels shift. A list written in week one and never revisited goes stale fast.

**4. Build credibility before you need it.** When you must say no or defend a hard decision, the credit you accumulated by being right and honest earlier is what earns you a hearing.

> **A relationship health indicator: when stakeholders come to you for an opinion before deciding, you have become a partner rather than a note-taker.**

---

## 7. Key takeaways

- A stakeholder is **anyone affected by, able to affect, or with an interest in** the project.
- The four most-missed groups: **indirect users, operations and support, compliance functions, external systems and partners**.
- **Legal appearing in the final week** is the classic lesson in the cost of late discovery.
- The most effective question for finding missed stakeholders: ***"Besides you, who else should I talk to?"***
- Three other hunting techniques: **follow the process flow, follow the data life cycle, ask who will object**.
- The **influence-interest matrix** allocates communication effort; it is not a ranking of people.
- **High influence with low interest is dangerous if forgotten** — they hold a veto.
- **Do not confuse title with influence** — a long-serving specialist may outweigh a new department head.
- **A person's position on the matrix shifts during the project**, so revisit it.
- **A product champion is a real, knowledgeable, respected user with time** — not the most available person.
- Three kinds of disagreement: **different understanding, different priorities, conflicting interests** — each needs its own handling.
- Disagreement from different understanding usually **evaporates once everyone sees the same diagram**.
- **The BA clarifies and supplies data; the authority decides** — deciding for them gets reversed late.
- **Do not package an organizational problem as a software requirement.**
- **Closing the loop is mandatory** — people who never hear back stop contributing and work around you.
- When stakeholders **seek your opinion before deciding**, you have become a partner rather than a note-taker.

## 8. Summary

- Stakeholder identification is **an active, repeated activity**, not a step completed in week one.
- Map by **influence and interest** to spend effort where it counts, and update as positions change.
- **Product champions** let you understand a user class deeply without meeting every user.
- When disagreement arises, **the BA's role is to make the trade-off explicit with data**, while the decision belongs to whoever has authority.
