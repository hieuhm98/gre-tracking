# Scope & Change Management

## 1. What scope is and why it slips

> **Scope is the project boundary: what will be done, and just as importantly, what will NOT be done.**

**The second half is almost always omitted.** A scope document that only lists what will be built leaves **everything unmentioned as contested ground** — the customer assumes it is included, the team assumes it is not.

**Four sources of scope slippage:**

**1. Vague requirements from the start.** *"The system must have reports"* — how many? Exportable? Filtered by what? **Every unclear sentence is a gap that reality fills in the most expensive way available.**

**2. Changes that bypass the process.** A developer takes a request directly from a user over chat and simply builds it. **Nobody here is a villain; only a process is being ignored.**

**3. Gold plating.** The team adds nice-to-haves nobody asked for. **This is team-generated scope slip, and the least discussed kind.**

**4. Accumulating small things.** Nobody can refuse a task that *"only takes two hours"*. **Twenty of those is a week of unplanned work.**

**Two commonly confused concepts:**

| | Scope creep | Scope change |
|---|-------------|--------------|
| **Nature** | Scope grows **unnoticed** and unapproved | A **conscious** change, assessed and approved |
| **Effect on plan** | Not adjusted — so you are late and nobody knows why | Adjusted along with the scope |
| **Judgement** | **Always bad** | **Normal and necessary** |

> **The goal of scope management is NOT blocking change.** Change is a sign the organisation is learning. **The goal is ensuring every change is seen, priced, and accepted at that price by someone with the authority to pay it.**

---

## 2. Writing scope so it cannot be argued about

**A good scope document has four parts:**

**1. A deliverables list.** Specific enough to verify: *"monthly revenue report, exportable to Excel, filterable by branch and date range"* — not *"reporting functionality"*.

**2. An EXCLUSIONS list.** The most important part and the most frequently dropped:

- *"Does not include a native mobile app."*
- *"Does not include migrating data created before 2020."*
- *"Does not include end-user training at branch offices."*
- *"Does not include integration with the accounting system."*

**3. Assumptions.** *"Assumes the customer provides a test environment before April 1."* **Every assumption is a named risk, and if it fails, either scope or schedule must change.**

**4. Acceptance criteria for each deliverable.** Without them, acceptance becomes a negotiation at the worst possible moment — when the budget is gone.

> **A test for any scope document: give it to two people separately and ask *"is feature X included?"*** If their answers differ, the document is not finished.

**A note on contracts in outsourcing:** the exclusions section **protects both sides**, rather than being a trick for refusing customers. **A customer benefits from knowing clearly what they are not buying just as much as what they are.**

---

## 3. The change control process

**Six steps, and all six are needed:**

**1. Record the request in writing.** Who asked, for what, and why. **A request that exists only as words in a meeting will be remembered differently by every attendee.**

**2. Analyse the impact.** Not only development days. It must cover:

| Impact type | Easily forgotten example |
|-------------|--------------------------|
| **Development effort** | The easiest number to remember, and usually the smaller part |
| **Testing** | Regression too, not only the new feature |
| **Documentation and training** | User guides must be updated |
| **Architecture** | A small UI change may demand a data model change |
| **Schedule** | Whether it sits on the critical path |
| **New risks** | What risk this change opens that is not yet in the register |

**3. Offer options, not just a number.** *"We can add it, and here are three ways: move the date two weeks, drop feature Y, or add a person from next week."*

**4. An authorised decision-maker.** Who approves at what level must be agreed in advance. Under three person-days the PM approves; larger goes to the sponsor; anything touching the contract needs both parties.

**5. Update EVERYTHING affected.** Plan, budget, WBS, risk register, scope document. **An approved change with an unchanged plan is the surest way to be late without understanding why.**

**6. Notify everyone affected.** Including those who did not take part in the decision but will live with it.

> **The most important principle: the PM is NOT the person who says no.** The PM is the person who **makes the price clear** and takes the decision to whoever has authority to pay it. **The right phrasing is not *"no"* but *"yes, and here is the price — which option do you want?"***

---

## 4. Spotting scope creep early

**Scope creep is dangerous because there is no single moment to catch it — it accumulates.**

**Six warning signs:**

| Sign | What it means |
|------|---------------|
| **The team does unplanned work and nobody finds it odd** | The change process was abandoned long ago |
| **Ticket counts rise while scope progress does not** | Work outside the original scope is being done |
| **The phrase *"this one is small"* appears often** | Small-task accumulation is underway |
| **Estimates are right yet you are consistently late** | Emergent work is consuming time, not bad estimates |
| **Users contact developers directly** | The official request channel has been bypassed |
| **Nobody remembers where the scope document is** | There is no reference left to argue against |

**Four preventions, in order of effectiveness:**

**1. A signed baseline everyone can find.** Without a baseline there is nothing to compare against, so there is no creep — only confusion.

**2. A single request channel.** Everything goes through one place, small requests included. **Not to slow things down, but to make them visible.**

**3. Record the small things you agreed to do.** Even when you decide to absorb a two-hour task for free, **write it down**. At month end, the total of those free tasks is exactly the data you need to negotiate.

**4. Review scope periodically with the sponsor.** Every two to four weeks, fifteen minutes: *"here is what changed, here is the accumulated impact"*.

> **On absorbing small work for free:** sometimes it is the right call for the relationship. **But it must be a recorded DECISION, not an invisible habit.** A team carrying ten free tasks a month and then being judged as behind schedule is an injustice entirely preventable by record-keeping.

---

## 5. Negotiating change in practice

**Three common situations and how to handle them:**

**Situation 1: the customer says *"this is not a change, it was always meant to work this way"*.**

- **Do not argue about intent.** Return to the document: *"in the scope document signed March 3, this part is described this way. I understand what you need now differs — let us handle it as a change and I will bring options."*
- **If the document really is ambiguous, admit it.** Winning an argument over an ambiguity costs more than it gains. **But clarify it immediately so it does not repeat.**

**Situation 2: an internal sponsor pushes extra scope with nothing extra given.**

- **Bring data, not emotion.** *"The team has 6 weeks of work left and 5 weeks of time. Here are three items I recommend dropping."*
- **Make the trade-off visible.** Whoever pushes extra scope usually cannot picture what will be lost. **Showing a concrete list changes the conversation.**

**Situation 3: the change comes from the team — *"we need to refactor this part first"*.**

- **That is a legitimate change and deserves the same treatment as any other:** impact analysis, and a decision based on value.
- **The right question is *"if we do not do this now, what does it cost later?"*** If that cannot be answered, it is a technical preference rather than a need.

**One thing a PM must prepare for:** **you will have to say no to the person paying for the project.** The only way to do that without damaging the relationship is **always arriving with alternatives and data**, and **never letting the first no happen at a point when no other option is left.**

---

## 6. Scope in agile environments

**Agile does not remove scope management — it changes the mechanism.**

| | Traditional | Agile |
|---|-------------|-------|
| **Scope** | Fixed in a baseline, changed via change control | **Variable**, freely changed outside the current sprint |
| **Protection mechanism** | An approval process | **The sprint is inviolable** and the backlog is ordered |
| **Unit of negotiation** | A change request | Backlog order |
| **What is fixed** | Scope | **Time and cost** |

> **The key point: in agile, changing scope outside the current sprint is FREE and welcomed.** What is not free is **changing the scope of a running sprint** — and that is exactly why the sprint is protected.

**But agile has its own form of creep:** **an endlessly swelling backlog while the committed release date stays put.** Backlog order lets you cut from the bottom, but **if nobody tracks total remaining work against remaining time, the team reaches the release date before discovering half of it must go.**

**With a fixed-price contract run in agile — very common in Vietnam:** the pragmatic approach is **fixing the total volume (a story point count or a sprint count) while allowing the content to change**. The customer may change their mind about *what*, not about *how much*.

---

## 7. Key takeaways

- **Scope includes what will NOT be done** — the part almost always omitted.
- **Everything unmentioned is contested ground.**
- Four slip sources: **vague requirements, bypassed process, gold plating, accumulating small tasks**.
- **Gold plating is team-generated slip** and the least discussed kind.
- **Twenty tasks that "only take two hours" is a week of unplanned work.**
- **Scope creep is always bad; scope change is normal and necessary.**
- **The goal is not blocking change but making every change visible and priced.**
- A scope document needs **deliverables, exclusions, assumptions, acceptance criteria**.
- **Every assumption is a named risk.**
- **The test: two people reading separately must agree on whether feature X is in scope.**
- **A customer benefits from knowing what they are not buying as much as what they are.**
- **A request that exists only as spoken words is remembered differently by every attendee.**
- Impact analysis must cover **regression testing, documentation, architecture, the critical path, and new risks**, not only development days.
- **An approved change with an unchanged plan is the surest way to be late without knowing why.**
- **The PM is not the person who says no** — the PM prices the change and routes the decision.
- Creep signs: **right estimates but consistent lateness**, and **users contacting developers directly**.
- **One request channel, not to slow things but to make them visible.**
- **Record even the small tasks absorbed for free** — their total is negotiating data.
- When a customer says *"it was always meant to work this way"*: **return to the document, do not argue intent**.
- For a refactor request: **the right question is what it costs later if not done now**.
- **In agile, changing scope outside the sprint is free; changing a running sprint is not.**
- **Agile creep looks like a swelling backlog against an unchanged release date.**
- Fixed-price agile: **fix the total volume, allow the content to change**.

## 8. Summary

- Scope management is **making the boundary visible**, and exclusions matter as much as inclusions.
- **Change control exists to price change, not block it**, and impact analysis must reach beyond development days.
- **Creep accumulates, so prevention needs a baseline, one request channel, and records of even small work.**
- **Agile swaps the protection mechanism for an inviolable sprint and an ordered backlog**, but total remaining work still needs tracking.
