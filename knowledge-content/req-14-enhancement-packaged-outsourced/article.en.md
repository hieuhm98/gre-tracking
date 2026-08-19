# Enhancement, Packaged Solution & Outsourced Projects

## 1. Enhancement & replacement projects: their particular challenges

> **Most software development work in the world is NOT building new systems from scratch — it is modifying, extending, or replacing systems that already exist.**

That means most BAs will spend most of their career working in a context where **a system already exists**. That context brings challenges a greenfield project does not have.

### Three kinds of projects involving an existing system

| Kind | Description |
|------|-------------|
| **Enhancement** | Adding new functionality to a running system |
| **Replacement** | Building a new system to replace an old one, usually keeping most of the functionality |
| **Reengineering / migration** | Moving a system to a different platform, technology, or architecture |

### Six characteristic challenges

**1. The existing requirements are not documented anywhere.**

> **This is the most common and most frustrating reality.** The system has run for 15 years. The original requirements document — if it ever existed — went stale long ago. **The only remaining sources are the code, the data, and the memories of long-time users.**

**2. The existing system is both a constraint and a source of information.** You cannot ignore it — but you also should not treat everything it does as correct.

**3. Users describe the current SOLUTION, not their NEED.**

> When you ask *"what do you need?"*, a long-time user answers *"I need screen F7 to work as it does now but with one more column"*. **They are describing the system they know, not the business problem they solve.**
>
> **The technique: ask *"why"* repeatedly.** *"Why do you need that column?"* → *"To know which orders to prioritize."* → *"How do you decide priority?"* Only there do you reach the real need — and there may be a far better way to meet it.

**4. Hidden functionality and behaviour nobody knows about.** An old system contains countless rules, exceptions, and special-case handling added over the years that **nobody remembers the reason for**.

**5. The expectation that "everything must work exactly as before".** Users often refuse to lose any functionality, including functionality they **do not actually use**.

**6. You cannot just turn off the old system.** The new system may have to run in parallel, or the cutover must happen in a short window without losing data.

### The biggest trap: blind replication

> **The most common mistake in replacement projects: *"We just need the new system to be exactly like the old one."***
>
> **Why this is a mistake:**
>
> - You will **replicate functionality nobody uses any more** — studies repeatedly find a substantial share of features in enterprise systems are **rarely or never used**.
> - You will **replicate the workarounds** users invented to get around the old system limitations. **Those limitations may no longer exist.**
> - You **miss the improvement opportunity** a replacement project offers — and that opportunity may not come again for years.
>
> **The right approach: use the old system as a SOURCE OF INFORMATION, not as a BLUEPRINT.** For each function, ask: *what business need does it serve, and is that still the best way to serve it?*

---

## 2. Eliciting requirements when the existing system is the main source

When documentation does not exist, you must **reconstruct understanding from multiple sources** and **cross-check them against each other**.

### Six sources of information

**1. Observing real users at work.** This is the **highest-value source**. You will see:

- What they **actually do**, as opposed to what they say.
- The **workarounds** — every workaround is an **unmet requirement** waiting to be found.
- The steps they perform **outside the system** — personal spreadsheets, paper notes, email. **This is a gold mine of missing requirements.**

> **The principle: every Excel spreadsheet a user maintains alongside the official system is an indictment of missing functionality.** Find them and ask why they exist.

**2. The existing system itself.** Walk through every screen, report, and function with an expert user. Record **what it does**, then separately decide **what should be kept**.

**3. The real data in the database.** Data reveals a great deal:

- **Which fields are actually populated** and which are always empty — always-empty fields may be unnecessary.
- **Which values actually appear** — sometimes very different from the theoretical list of valid values.
- **Volume and growth rate** — essential information for performance and scalability requirements.

**4. The source code.** The last resort when everything else fails. **Expensive and slow**, but sometimes the only way to unearth a buried business rule.

> **A warning: do not confuse source code with requirements.** Code tells you what the system **does**, not what it **should do**. It contains defects, temporary fixes, and things nobody wanted.

**5. Support logs and change requests.** The support ticket repository is **a ready-made list of pain points** — and the backlog of change requests is a wish list already articulated by real users.

**6. Long-time users and system maintainers.** They carry **tribal knowledge** recorded nowhere.

> **A serious staffing risk: if only ONE person understands the old system and that person is about to retire, that is a top project risk.** Prioritize extracting knowledge from them immediately.

### Cross-checking

**Do not trust any single source.** Cross-check them:

- Users say they use function X → **check the usage logs** to see if that is true.
- Documentation says the rule is Y → **check the data** for exceptions.
- The code shows behaviour Z → **ask users** whether that is what they want.

> **Wherever the sources disagree, there is something to learn.**

---

## 3. Handling legacy data & migration

> **In replacement projects, data migration is routinely and seriously underestimated — and it is frequently what makes the project slip.**

### Why data migration is harder than expected

**1. Old data is always dirtier than you think.** After years, the database contains:

- Duplicate records.
- Fields repurposed — a *"notes"* field holding structured data somebody stuffed in because there was nowhere else.
- Invalid values, because validation rules were added **after** the data already existed.
- Orphan records referencing things that no longer exist.
- Multiple formats for the same kind of information, because conventions changed over the years.

**2. The new data model rarely maps perfectly onto the old one.** One old field may split into three new ones, or three old fields merge into one.

**3. Some data has nowhere to go.** The new system may have no corresponding concept.

### Seven requirements questions about data migration

**1. Which data must be migrated?** All of it, or only the last N years of active data? **Old historical data can be archived instead of migrated.**

**2. What are the transformation rules?** For each field: where does it come from, how is it transformed, and what happens when there is no corresponding source?

**3. How is dirty data handled?** Three options: **clean it before migration**, **migrate as-is and clean afterwards**, or **reject and report it**. **Each has different time and quality consequences — this is a business decision, not a technical one.**

**4. How do you verify the migration succeeded?** You need concrete **reconciliation criteria**: record counts, financial totals, random sample checks.

**5. What is the rollback plan?** If the cutover fails partway, how do you return to the old system without losing transactions?

**6. Is a parallel run needed?** Running both systems for a period is **expensive but safe** — and sometimes the only acceptable approach for critical systems.

**7. How is historical data accessed after cutover?** If it is not migrated, users still need to view it. **This is a real functional requirement, and it is routinely forgotten.**

> **A practical lesson: do the data quality analysis during the REQUIREMENTS PHASE, not during implementation.** Run exploratory queries against the real data to learn what you are facing. **What you find can change the whole project scope.**

---

## 4. Packaged solutions: when to buy instead of build

**A packaged solution (COTS — commercial off-the-shelf)** is commercial software bought and configured rather than developed.

### The buy versus build decision

| Lean toward **BUY** when | Lean toward **BUILD** when |
|--------------------------|---------------------------|
| The functionality is **common to the industry** — accounting, HR, CRM | The functionality is **your competitive differentiator** |
| A **mature solution** exists with many reference customers | No package comes close |
| Your processes **can adapt** to the software | Your process is **core and cannot change** |
| You need to deploy **fast** | You have the time and in-house capability |
| **Regulatory compliance** is maintained by the vendor | The requirements are too specialised |

> **The most important insight about this decision: do not buy a package for what CREATES your competitive advantage.** If you buy the same software your competitors buy, you have the same capability they do. **Buy for what every company does the same way, and build for what makes you different.**

### Requirements are still NECESSARY when buying a package

> **A dangerous misconception: *"We are buying a package so we do not need requirements."***
>
> **Exactly the opposite.** Without requirements you have **no basis for choosing between packages**, and you will choose based on the most impressive sales demo — which almost always leads to a poor decision.

**What changes is HOW you use requirements:**

| | Custom build | Buying a package |
|---|-------------|------------------|
| **Role of requirements** | Instructions for developers | **Evaluation criteria** for selecting and configuring |
| **Level of detail** | Very detailed | Enough to discriminate between options |
| **Focus** | *"What must the system do"* | *"Which needs must be met, and who meets them best"* |
| **Consequence if missing** | Build the wrong thing | **Buy the wrong thing** — far worse, because it is harder to reverse |

**Two kinds of requirements matter especially when buying:**

- **Business rules** — they determine whether the package fits how you operate.
- **Integration requirements** — which systems must the package exchange data with, in what formats?

---

## 5. Selecting a package & evaluating vendors

### A structured selection process

**Step 1: Define requirements at a level sufficient to discriminate.** You do not need custom-build detail, but you need enough to **tell one package apart from another**.

**Step 2: Classify requirements by how mandatory they are.**

- **Must-have:** without it, the package is eliminated immediately.
- **Should-have:** affects the evaluation score.
- **Nice-to-have:** used as a tiebreaker.

> **An important discipline: keep the must-have list SHORT.** If you have 80 must-haves, no package meets them all and you cannot discriminate at all. **A real must-have list is usually 5 to 15 items.**

**Step 3: Build an evaluation matrix.** Score each package on each criterion, weighted by importance.

**Step 4: Demand demonstrations using YOUR scenarios.**

> **This is the most important step and the one most often done wrong.**
>
> **Do not let the vendor demo their own script.** They have optimised that demo across hundreds of runs and will show you only what the package does best.
>
> **Give them YOUR scenarios, with YOUR data, and ask them to perform exactly the tasks your users will do every day.** You will learn more in those 30 minutes than in three standard demos.

**Step 5: Check real references.** Talk to the vendor current customers — **preferably ones you find yourself**, not only the ones the vendor introduces.

**A good question for reference users:** *"If you were choosing again, would you pick this package? What do you wish you had known before you bought?"*

**Step 6: Run a proof of concept with real data.** For a big decision, invest in a bounded trial before committing.

### Evaluation criteria beyond features

**Do not evaluate features alone.** Also evaluate:

- **Vendor health** — will they exist in 10 years?
- **Product roadmap** — where are they investing?
- **Licensing model and total cost of ownership** — not only the purchase price but **annual maintenance fees, implementation cost, training cost, integration cost**.
- **Support quality** — response times, time zones, languages.
- **Community and partner ecosystem** — is there anyone else who can help you?
- **Data extractability** — if you later want to leave, can you get your data out? **This is the least-asked question and the most regretted omission.**

---

## 6. Configuration, customization & handling gaps

**No package fits your needs 100 percent.** The distance between what the package does and what you need is called a **gap**.

### Five ways to handle a gap

| Approach | Description | Assessment |
|----------|-------------|------------|
| **1. Change the business process** | Adapt how you work to fit the package | **Usually the BEST option** — cheapest in the long run |
| **2. Configuration** | Use the package built-in options | Good; vendor-supported and preserved across upgrades |
| **3. Extension** | Add functionality through official extension points, APIs, plugins | Acceptable; moderate risk |
| **4. Source code customization** | Modify the package code | **Dangerous** — see below |
| **5. Accept the gap** | Live with the limitation, perhaps with an external tool | Legitimate if the gap does not matter |

### Why source code customization is so dangerous

> **This is the most expensive lesson in COTS projects.**
>
> When you modify the package code, you create a **private version** the vendor knows nothing about. The consequences:
>
> - **Every time the vendor ships an upgrade, you must redo your customizations.** That cost repeats forever.
> - **You gradually stop upgrading** because it is too expensive — then you are stuck on an old, unsupported version with no security patches.
> - **Vendor support becomes difficult** because they cannot reproduce the problem on the standard version.
>
> **Many organizations have customized so heavily that the total cost EXCEEDED building from scratch — while still lacking the flexibility of a custom system.**

**A practical rule: every time you consider customizing, ask *"can we change the process instead of the software?"*** The answer is usually yes, and it is usually the right answer — **especially when the current process only exists because the old system forced it.**

### The BA role on a COTS project

The role **shifts noticeably** from a custom-build project:

- **Less writing of detailed specifications**, more **gap analysis**.
- **More organizational change management** — because you are asking people to change how they work.
- **More configuration and process modeling.**
- **More integration and data migration work.**

> **The most important skill becomes: helping the organization distinguish between *"we need this"* and *"we are used to doing it this way"*.** The ability to ask that question tactfully determines whether a COTS project succeeds.

---

## 7. Outsourced projects: characteristics and risks

**On an outsourced project, development is performed by an external organization** — possibly domestic, possibly in another country.

### Why requirements matter so much more in this context

> **The founding principle: the greater the distance — organizational, geographic, linguistic, cultural, time-zone — the CLEARER AND MORE COMPLETE the requirements must be.**

**On an in-house team sharing a room**, an ambiguous requirement is resolved by swivelling your chair and asking. The cost is near zero.

**On an outsourced project across time zones**, the same question can take **two days** to answer. And if the vendor does not ask but **guesses instead**, you get the wrong thing — possibly discovered months later.

### Six characteristic risks

**1. Implicit requirements never get communicated.** An in-house team **automatically knows** things an external vendor cannot possibly know: company conventions, industry regulations, how other systems behave, how users actually work.

> **This is the most common source of outsourcing failure.** What *"everybody knows"* inside your organization is known by **nobody outside it**.

**2. The vendor has no incentive to ask.** Under a fixed-price contract, every question slows them down. **Staying quiet and guessing can be economically rational for them — and catastrophic for you.**

**3. Cultural differences in communication.** In some working cultures, saying *"I do not understand"* or *"this requirement is unclear"* to a client is considered impolite.

> **How to handle it: do not ask *"do you understand?"* — the answer will always be *"yes"*.** Instead ask ***"explain back to me how you will implement this."*** **You will know immediately whether they really understood.**

**4. Requirements become a legal document.** In a contractual relationship, requirements **can be used as legal evidence**. This makes precision far more important, and makes change procedurally expensive.

**5. Long feedback loops.** You discover problems much later, when fixing them costs much more.

**6. Knowledge loss when the project ends.** When the vendor leaves, **the knowledge of the system leaves with them** — unless you actively require a handover.

---

## 8. Requirements in an outsourcing contract

### Three things to make extremely clear

**1. The definition of "done" (acceptance criteria).**

> **Without clear acceptance criteria, disputes are unavoidable.** The vendor says *"we delivered what the requirements said"*; you say *"it does not work the way we need"*. **Both can be right by their own reading.**
>
> **Acceptance criteria must be specific, measurable, and agreed BEFORE the contract is signed.**

**2. The requirements change process.** The contract must state:

- **Who is authorised** to request changes.
- **How changes are priced** — at a pre-agreed rate, or negotiated case by case?
- **The response time** for impact assessment.
- **What counts as a clarification (free)** versus **a scope change (billable)**.

> **The boundary between "clarification" and "change" is the biggest source of dispute on outsourced projects.** Define it **beforehand**, not after the dispute erupts.

**3. Ownership and handover.** Who owns the source code, documentation, designs? **What must be delivered when the contract ends?** Enumerate it specifically.

### Contract models and their requirements consequences

| Model | Requirements must be | Risk |
|-------|---------------------|------|
| **Fixed price** | **Very detailed and stable** before signing | Change is expensive; the vendor is motivated to interpret narrowly; **suitable when requirements are clear and stable** |
| **Time and materials** | Can evolve | You carry the cost risk; needs close oversight; **suitable when requirements are still uncertain** |
| **Agile / capacity-based** | An evolving backlog, continuously prioritized | Needs an available product owner on your side; **suitable when you want flexibility and can manage it** |

> **The important paradox of fixed-price contracts:** they **promise** to remove cost risk from you, but they **require** you to know exactly what you want before you begin — **something most software projects cannot do**.
>
> **The typical real outcome:** a fixed-price contract with immature requirements leads to **a long series of expensive change orders**, with the final cost far exceeding the original estimate — plus an adversarial vendor relationship.

### Three risk-reducing practices

**1. Demand INCREMENTAL delivery, not one delivery at the end.** Receiving working software regularly lets you **detect misunderstandings early**, while fixes are still cheap.

**2. Keep BA capability on YOUR side.** Do not outsource requirements analysis itself.

> **The reason: the vendor cannot know your business better than you do.** If you hand off understanding the problem as well, you are giving away the one thing only you have. **You need someone on your side who understands enough to know when the vendor is heading in the wrong direction.**

**3. Invest in visual models and concrete examples.** Diagrams, wireframes, sample data, and acceptance tests **cross language barriers far better than prose**. A swimlane diagram is understood the same way on two continents; a long paragraph is not.

---

## 9. Managing the vendor relationship & change

### Building short feedback loops

**The principle: the greater the distance, the SHORTER the feedback loop must be** — this sounds paradoxical but it is exactly right.

**Practical mechanisms:**

- **Frequent deliveries** — weekly or fortnightly, not quarterly.
- **Overlapping working hours across time zones** — even 2 hours a day gives you a window to resolve problems quickly.
- **Direct channels between developers and BAs**, rather than everything routed through project managers.
- **Periodic in-person visits** — expensive, but they build trust no video call replaces.
- **One clear point of contact on each side** to prevent contradictory information.

### Techniques for verifying understanding

**Never assume shared understanding.** Verify it:

| Technique | How |
|-----------|-----|
| **Paraphrasing** | Ask the vendor to explain the requirement back in their own words |
| **Concrete examples** | *"Given this input, what is the expected output?"* — extremely effective at exposing misunderstanding |
| **Acceptance tests written first** | You and the vendor agree the tests before implementation |
| **Early prototypes** | Seeing the wrong thing after two weeks is far cheaper than after six months |

### Managing change in a contractual relationship

**Change is unavoidable — even under a fixed-price contract.** What matters is **managing it professionally rather than letting it become a source of conflict**.

**Four practices:**

- **Record every change in writing**, including seemingly small ones. *"It is only a small change"* multiplied by fifty becomes a different project.
- **Assess impact before approving** — time, cost, risk, effects on other parts.
- **Maintain a clear requirements baseline** so everyone knows what they are changing from.
- **Periodically review the cumulative change volume** — not just each change in isolation.

> **A relationship health indicator: if every conversation revolves around contract clauses rather than the product, the relationship has broken down.** The best contract is one you never have to open.

---

## 10. The three project types: what they share and what they teach

### Shared principles

Whether you are enhancing an old system, configuring a package, or managing an external vendor, **the same four principles apply**:

**1. You still have to understand the REAL business need.** All three contexts push you toward **describing a solution rather than understanding the problem** — the old system, the package features, or the contract specification. **Resist that pull.**

**2. You must separate "need" from "habit".**

> On a replacement project, users say *"it has to work like the old system"*. On a COTS project, they say *"this package cannot do what we need"*. **In both cases the real question is: is this a business need, or just a habit?**

**3. Implicit knowledge is the main enemy.**

> On a legacy project, it lives in long-time users heads and in the code. On a COTS project, it lives in the vendor assumptions about how you operate. On an outsourced project, it lives in everything that *"everybody knows"* inside your organization. **The BA job is to make implicit knowledge explicit.**

**4. Short feedback loops save you from expensive mistakes.** Incremental delivery, early prototypes, trial runs with real data — **all serve the same purpose: catching misunderstandings while fixes are still cheap.**

### The lesson specific to each type

| Project type | The most important lesson |
|-------------|--------------------------|
| **Enhancement / replacement** | **Use the old system as a source of information, not a blueprint**; and never underestimate data migration |
| **Packaged solution** | **Changing the process is cheaper than customizing the code** — and never buy a package for what creates your competitive advantage |
| **Outsourcing** | **The greater the distance, the clearer the requirements**; keep BA capability on your side and verify understanding rather than assuming it |

---

## Key takeaways

- **Most software work is not building new systems** but enhancing, replacing, or migrating existing ones.
- On legacy projects, **the existing requirements are usually documented nowhere** — you must reconstruct them from multiple sources.
- Long-time users **describe the current solution, not the need** — ask *"why"* repeatedly.
- **Do not blindly replicate the old system**: you will copy unused features and workarounds alike.
- **Use the old system as a SOURCE OF INFORMATION, not a BLUEPRINT.**
- **Observing real users is the highest-value source** — every workaround is an unmet requirement.
- **Every Excel spreadsheet running alongside the official system is an indictment of missing functionality.**
- **Code tells you what the system DOES, not what it SHOULD do** — it contains defects and temporary fixes too.
- **If only one person understands the old system and they are about to retire, that is a top project risk.**
- **Data migration is routinely underestimated** — do the data quality analysis during requirements.
- **How to handle dirty data is a business decision, not a technical one.**
- **Historical data access after cutover is a real functional requirement**, routinely forgotten.
- **Do not buy a package for what CREATES your competitive advantage** — buy for what every company does the same way.
- **Buying a package does not remove the need for requirements** — without them you will pick the most impressive demo.
- **Keep the must-have list SHORT** — 5 to 15 items, or you cannot discriminate at all.
- **Do not let the vendor demo their own script** — use your scenarios and your data.
- **Ask whether you can get your data out** — the least-asked question and the most regretted omission.
- **Changing the process is usually the best way to handle a gap**; customizing the source code is the most dangerous.
- **Heavy customization can push total cost above building from scratch** — with none of the flexibility.
- In COTS, the key skill is **separating "we need this" from "we are used to doing it this way"**.
- **The greater the distance, the clearer and more complete the requirements must be.**
- **Do not ask "do you understand"** — ask *"explain back how you will implement this"*.
- **The boundary between "clarification" and "change" is the biggest source of dispute** — define it beforehand.
- **Fixed-price contracts require you to know exactly what you want before starting** — which most projects cannot do.
- **Do not outsource requirements analysis itself** — the vendor cannot know your business better than you do.
- **Visual models cross language barriers better than prose.**
- **If every conversation revolves around contract clauses rather than the product, the relationship has broken down.**

## Summary

- These three contexts — **enhancement, packaged solutions, outsourcing** — make up most real BA work, and each carries its own risks.
- On **legacy projects**, reconstruct requirements from multiple sources and cross-check them, and bring data analysis in early.
- On **COTS projects**, requirements become evaluation criteria; keep must-haves short, demo with your own scenarios, and prefer process change over code customization.
- On **outsourced projects**, invest in clarity, verify understanding actively, and keep analysis capability on your side.
- Across all three: **make implicit knowledge explicit, separate need from habit, and shorten the feedback loop.**
