# Process Automation, Analytics & Embedded Systems

## 1. Business process automation: its nature and its trap

**A business process automation project** replaces manual work with software, or connects disconnected steps into a seamless flow.

### The central trap

> **If you automate a bad process, you get a bad process running faster.**

This is the most frequently repeated lesson in the field. Many organizations approach an automation project by asking *"how do we write software to do what our staff do by hand?"* — **and that is the wrong question**.

**The right question: *"what business outcome do we need, and what is the best way to achieve it with the technology we have?"***

### Why the current process usually is not worth copying

**Manual processes formed under constraints software does not have:**

- **Approval steps exist because there was no other way to enforce control.** With software, rules can be enforced automatically and approval is needed only for exceptions.
- **Data re-entry steps exist because systems do not talk to each other.** Integration makes the whole step vanish.
- **Manual consolidation and reconciliation steps exist because there was no automated reporting.**
- **Sequential ordering exists because paper can only be in one place at a time.** Software allows several people to work in parallel.

> **Every time you see a step in the current process, ask: *does this step exist because of a business need, or because of a limitation of the old way of working?*** If the latter, **do not automate it — eliminate it.**

### Three levels of intervention

| Level | Description | When appropriate |
|-------|-------------|-----------------|
| **Automation** | Keep the process, replace manual actions with software | The process is already sound; you need results fast; low organizational risk |
| **Improvement** | Adjust the process, then automate | There are clearly wasteful steps; **the most pragmatic choice in most cases** |
| **Reengineering** | Redesign the process from scratch around the desired outcome | The current process is fundamentally unsuitable; strong executive sponsorship exists |

> **This choice must be made CONSCIOUSLY at the start of the project**, because it determines scope, who must participate, and how much organizational change you have to manage. **Many projects fail because executives think they are doing level 1 while the team is really doing level 3.**

### The most underestimated aspect: organizational change

**Process automation always changes people jobs.** Some roles disappear, some change in nature, some people lose control they used to have.

> **The consequence for BA work: the resistance you encounter during elicitation is often NOT about the software.** When a manager keeps adding requirements for reports and approvals, they may be trying to **retain control** the new process takes away.
>
> **Recognise this and address it directly but respectfully.** Packaging an organizational problem as a software requirement produces more complex software without solving the real problem.

---

## 2. Modeling the current and future process

### As-is and to-be

**The as-is model** describes the process **as it runs today**. **The to-be model** describes the process **as it will run with the new system**.

**Why you need an as-is model:**

- It creates **shared understanding** — often the first time anyone has drawn the whole end-to-end process.
- It **exposes waste**: repeated steps, waiting, unnecessary handoffs.
- It gives you a **measurement baseline** to prove improvement later.
- It **reveals who actually participates** — usually more people than anyone thought.

> **But do not over-invest in as-is.** The risk is real: a team spends three months drawing a perfect, exhaustively detailed as-is model of a process about to be replaced. **Model as-is just enough to understand the problem and measure it, then move to to-be.**

**A sign you have done enough:** you can point at **specific pain points** and **quantify them** — how much time, how many errors, how much cost.

### Measuring the process

**If you cannot measure the current process, you cannot prove improvement.**

**Useful measures:**

| Measure | Meaning |
|---------|---------|
| **Cycle time** | Total elapsed time from start to finish, including waiting |
| **Processing time** | The time actually spent working — usually a small fraction of cycle time |
| **Error and rework rate** | What percentage of cases have to go back to an earlier step |
| **Number of handoffs** | Every handoff is an opportunity for delay and information loss |
| **Cost per transaction** | The basis for benefit analysis |
| **Volume and variability** | How many transactions, and how they vary seasonally |

> **The figure is often shocking: in many processes, actual WORKING time is a very small fraction of cycle time — the rest is waiting.**
>
> **The important insight: if 95 percent of cycle time is waiting, making each step 20 percent faster improves almost nothing. Eliminating the waiting is where the value is.** This is why measuring before designing is essential.

### Building the to-be model

**Design principles:**

- **Start from the desired outcome** and work backwards.
- **Reduce handoffs** — each one adds delay and risk.
- **Push decisions to the lowest possible level** — escalate only above a threshold.
- **Parallelise what can be parallel** instead of preserving a sequential order.
- **Handle the common case smoothly and handle exceptions separately.** Do not design the whole process around the 5 percent of complex cases.

> **That last principle deserves emphasis: a great many processes are slow for everyone because they were designed to handle rare exceptions.** Separate the main flow from the exception flow.

**From the to-be model to requirements:** for each step in the new process, ask: what functionality must the system provide to support this step? What data goes in and out? Which business rules apply? Who is permitted to perform it? What happens when it fails?

---

## 3. Business rules, processes, and automation

### Why business rules are central to automation projects

**In a manual process, business rules live in people heads.** Experienced staff know when to accept an exception, when to escalate, when to apply a discount.

**When you automate, those rules must be made EXPLICIT** — and this is usually the hardest part of the project.

> **What you will discover:**
>
> - **The rules contradict each other.** Two departments apply different rules to the same situation, and both believe they are right.
> - **Nobody knows where some rules came from.** *"We have always done it that way"* — but nobody knows why, or whether it is still valid.
> - **The actual rules differ from the official rules.** Policy says one thing; practice does another. **You must decide which to automate — and that is an executive decision, not a BA decision.**
> - **Exceptions are handled by human judgment.** Not everything can be automated, and some things **should not** be.

### Separating rules from process

> **Business rules change more often than processes, and processes change more often than architecture.**

**The design consequence: keep business rules where they can be changed without reprogramming** — configuration tables, a rule engine, or at minimum a single centralised module.

**Why this matters to the BA:** when you record a business rule, record with it:

- **Its origin** — which policy, which regulation, who decided?
- **Its stability** — does it change every quarter?
- **Who has the authority to change it?**
- **How are exceptions handled?**

**This information drives architecture.** A rule that changes monthly must be configurable; a rule unchanged in 20 years can be hard-coded.

### Exceptions and human intervention

**You will not automate 100 percent — and trying to is usually a mistake.**

**Three design questions:**

**1. Which cases can the system handle on its own?** This must be the overwhelming majority, or the benefit of automation is lost.

**2. Which cases need a human decision?** The system must **surface them clearly** with enough context for the person to decide quickly.

**3. Can a human override the system decision?** If so, **who is permitted to, in what circumstances, and is it logged?**

> **A frequently missed requirement: exception handling capability and an audit trail for every manual intervention.** Without them, an automated process **deadlocks** on the first case it did not anticipate — and users go back to doing it manually outside the system.

---

## 4. Business analytics: fundamentally different from transactional systems

**A business analytics project** builds the capability to **analyse data to support decisions** — data warehouses, reports, dashboards, predictive models.

### The fundamental differences

| | Transactional systems (OLTP) | Analytical systems (OLAP) |
|---|-----------------------------|---------------------------|
| **Purpose** | Record what is happening | Understand what happened and predict what will |
| **Users** | Operational staff | Analysts, managers, executives |
| **Main operations** | Many small writes and small reads | Few queries but scanning large volumes |
| **Primary requirement** | Transactional integrity, concurrency | Flexible querying, read performance |
| **Nature of requirements** | *"What must the system do"* | *"What questions must users be able to answer"* |

### Why analytics requirements are harder

> **In a transactional system you can enumerate functions. In analytics, users usually do NOT know what questions they will ask until they see the data.**

**The nature of analytical work is exploration.** One answer generates three new questions. **You cannot specify the full set of queries in advance.**

**Consequences for the requirements approach:**

- **Focus on DECISIONS, not on reports.** The right elicitation question is not *"what report do you need?"* but ***"what decisions must you make, and what information would help you decide better?"***
- **Specify AVAILABLE DATA and QUERY CAPABILITY, not just specific reports.** Users will need queries you have not thought of.
- **Prioritize self-service capability.** If every new question requires a three-week development request, the analytics system has failed.

> **The most powerful elicitation question on an analytics project: *"If you knew X, what would you DO differently?"***
>
> If the answer is *"I am not sure"* or *"nothing, really"*, then **that information is probably not worth the investment to collect** — however interesting it sounds. **This is the strongest filter against building beautiful dashboards nobody uses.**

---

## 5. Requirements for analytics projects

### Six groups of questions to answer

**1. Decisions and decision-makers**

- Which decisions will be supported? Who makes them? How often?
- What do they base those decisions on today? What is missing?
- **What action will be taken based on this information?**

**2. Metrics and definitions**

- Which metrics must be calculated? **What is the exact formula?**

> **This is where analytics projects fail most often.** Three departments all report *"revenue"* and give three different numbers, because each defines it differently: does it include returns? Does it include tax? Is it recognised at order or at delivery?
>
> **Reconciling metric definitions is PURE business analysis work and is usually the most valuable contribution a BA makes to an analytics project.**

**3. Analytical dimensions**

- Along which dimensions do users need to **slice the data** — time, region, product, channel, customer segment?
- What **hierarchy** does each dimension have — day → week → month → quarter → year?

**4. Data sources and availability**

- Which systems does the data come from? Who owns it?
- **Does the necessary data actually EXIST?** Sometimes the answer is no — and that finding changes the project scope.
- What is the quality of the source data?

**5. Freshness and latency**

- How often must the data be refreshed — real-time, hourly, nightly, weekly?

> **This is one of the biggest cost levers on an analytics project.** Users will instinctively say *"real-time"*. But moving from nightly refresh to real-time can **multiply the architectural cost several times over**.
>
> **The right way to ask: *"If the data were 24 hours old, how would you decide wrongly?"*** The answer usually reveals that nightly is entirely sufficient.

**6. History and retention**

- How many years of history are needed for trend analysis?
- What happens when **definitions change over time** — such as a departmental reorganisation? **Is old data restated under the new structure?** This is a hard question and is usually deferred until too late.

---

## 6. Data warehouses, data quality & governance

### Why data quality is risk number one

> **On an analytics project, source data quality determines success more than any technical factor.**

**Why the problems only surface with analytics:**

Transactional systems can run perfectly well on inconsistent data, because each transaction is processed individually. **Only when you aggregate millions of records does the inconsistency become visible and produce wrong numbers.**

**Typical problems:**

- **Optional fields left empty** in most records → analysing along that dimension is meaningless.
- **The same entity appearing several times** under different names → customer counts are wrong.
- **Inconsistent units and formats** between source systems.
- **Meaning drift over time** — a status code repurposed for something else in 2018.

> **An essential but frequently missing requirement: the system must indicate which data is NOT trustworthy.** A report showing a number without disclosing that it rests on records 40 percent of which are incomplete is **worse than no report at all** — because it manufactures false confidence.

### Data governance

**Analytics projects routinely reveal that the organization has no data governance — and cannot get far without building some.**

**The necessary elements:**

- **Data owners** — who is accountable for the quality and definition of each dataset?
- **Enterprise-standard definitions** — what does a *"customer"* mean across the whole company?
- **A process for changing definitions** — when a metric calculation changes, who approves and who is notified?
- **A single source of truth** — when two systems disagree, which one wins?

> **The scope must be agreed explicitly up front: does your analytics project include ESTABLISHING data governance, or only CONSUMING data as it stands?**
>
> **Many analytics projects blow their budget badly because this question was never answered**, and the team discovers mid-project that it must solve data problems ten years in the making.

### Security and privacy requirements

**Analytics concentrates data from many sources — which creates new security risks.**

- **Who may see which data?** Can a regional manager see another region data?
- **Must personal data be anonymised or pseudonymised?**
- **Does combining sources create re-identification risk?** Data anonymous within each source may **no longer be anonymous** once combined.
- **Which regulations apply** — GDPR, industry rules, internal policy?

---

## 7. Embedded & real-time systems: their characteristics

**Embedded systems** are software running inside a device — cars, medical devices, industrial machinery, appliances, network equipment.

### Five characteristics that set them apart

**1. Software is only part of the product.** Requirements must be **allocated between hardware, software, and mechanics** — and that decision has large cost and flexibility consequences.

> **The allocation principle: what may need to change after shipping should live in software; what demands extreme performance or reliability usually lives in hardware.** But note: **this decision typically has to be made very early**, before you fully understand the problem — one of the biggest challenges in embedded development.

**2. Severe resource constraints.** Memory, processing power, and energy are all limited and **cannot be expanded once the product ships**.

**3. Real-time constraints.** The system must respond **within a bounded time**.

> **An important distinction:**
> - **Hard real-time:** missing the deadline is a **system failure**. An airbag deploying at 200 milliseconds instead of 20 is useless — or dangerous.
> - **Soft real-time:** missing the deadline **degrades quality** but remains acceptable. A video drops a frame.
>
> **You must state which category each timing constraint belongs to**, because they lead to entirely different architectures.

**4. You cannot patch easily.** With web software, you fix a defect and deploy the same day. With a shipped device, updating can be **extremely expensive, slow, or impossible**.

> **The direct consequence: the cost of a requirements defect in an embedded system is ORDERS OF MAGNITUDE higher than in enterprise software.** This justifies far greater investment in requirements engineering — deeper specification, stricter review, more modeling.

**5. Interaction with the physical world.** Sensors, actuators, temperature, vibration, electromagnetic interference. **The physical world is not polite and does not honour your assumptions.**

---

## 8. Eliciting requirements for embedded systems

### Why use cases are often insufficient

> **For many embedded systems, the primary "users" are not humans but other DEVICES and SIGNALS.**

An engine controller has no use cases in the ordinary sense. It reacts to **sensors, control signals, and environmental conditions** — thousands of times per second.

**More suitable techniques:**

| Technique | Why it fits |
|-----------|-------------|
| **Event-response tables** | Directly capture *"when event X occurs in state Y, the system does Z"* |
| **State-transition diagrams** | Embedded systems are usually state machines in the literal sense |
| **Decision tables** | Complex control logic with many condition combinations |
| **Timing diagrams** | Express timing constraints between events |
| **Context diagrams** | Identify every signal and interface crossing the system boundary |

### Requirement types specific to embedded systems

**1. Hardware interface requirements.** Every sensor and actuator needs specification: **value range, resolution, sampling rate, units, accuracy, behaviour out of range, behaviour when the device fails.**

**2. Timing requirements.** Not just *"must be fast"* but: **maximum response time, latency, allowable jitter, sampling rate, mandatory ordering between operations.**

**3. Operating mode requirements.** Most embedded systems have several modes: **startup, normal operation, calibration, maintenance, degraded mode, shutdown, emergency.** Each has its own behaviour, and **all transitions between them must be fully specified**.

**4. Error handling and degraded mode requirements.**

> **This is where embedded systems demand substantially more than enterprise software.** The question you must answer for **every** component: *what happens when this sensor fails, when this value is out of range, when power is lost mid-operation, when memory is corrupted?*
>
> **In an enterprise application you can show an error message and let the user retry. In an embedded system there may be nobody to tell — the system must decide FOR ITSELF what to do.**

**5. Startup and shutdown requirements.** How long until it is ready? What is the safe state on sudden power loss? What data must be preserved?

**6. Diagnostics and maintenance requirements.** What does a field technician need to diagnose a fault? What logs are kept and how are they extracted?

### Who the stakeholders are

**The stakeholder list is far wider than for enterprise software:**

- Hardware, mechanical, and electrical engineers.
- Manufacturing engineers — the product must be **manufacturable and testable on the production line**.
- Field maintenance technicians.
- Regulatory compliance and certification specialists.
- The safety organization.
- End users and operators.

> **Manufacturing testability requirements are the most frequently omitted requirement type on embedded projects.** Without a self-test mode or a test interface, **each unit on the line cannot be verified** — discovering this after the design is finished is extremely expensive.

---

## 9. Safety, certification, and hardware constraints

### Safety requirements

**For systems that can harm people, property, or the environment, safety is not one quality attribute among many — it is the constraint that governs everything.**

**The standard process:**

**1. Hazard analysis.** Identify **what can go wrong** and **the consequences**. Techniques include FMEA (failure mode and effects analysis) and fault tree analysis.

**2. Assess the severity and probability** of each hazard.

**3. Determine the mitigations**, and **each mitigation becomes a safety requirement**.

**4. Trace every safety requirement** to the design, code, and tests proving it was implemented.

> **For safety-critical systems, requirements tracing is LEGALLY MANDATORY, not an optional good practice.** You must **demonstrate** to a certification body that every safety requirement was implemented and verified.

**Characteristics of safety requirements:**

- They usually describe what the system **must NOT allow to happen**.
- They frequently demand **redundancy** or **independent mechanisms** — two independent sensors, a hardware interlock.
- They define the **fail-safe state** the system enters on a fault.
- They usually carry **hard timing constraints** — *"within 500 milliseconds"*.

### Certification and regulatory compliance

**Many embedded systems must be certified before sale:** medical devices (FDA, MDR), automotive (ISO 26262), aviation (DO-178C), industrial equipment (IEC 61508), electrical equipment (CE, UL).

**Consequences for requirements work:**

- **The standards themselves generate requirements**, both on the product and on the process you must follow.
- **Evidence must be produced throughout the project**, not assembled at the end. **Trying to reconstruct traceability documentation after the fact is extremely expensive and usually fails.**
- **Changes after certification can require recertification** — which strongly affects how you plan releases.

> **The planning lesson: identify certification requirements at the very START of the project.** They affect process, documentation, architecture, and schedule. **Discovering late that you need certification is one of the most expensive scope shocks that can happen.**

### Hardware constraints and co-development

**On embedded projects, hardware and software are usually developed in parallel** — which creates its own challenges:

- **Software must be written before the hardware exists**, using simulators or development boards.
- **Hardware specifications change** during development, invalidating software assumptions.
- **The hardware-software interface must be specified extremely precisely** and managed as a formal baseline.

> **Hardware-software interface (HSI) requirements deserve their own document and their own change control process**, because every change there affects both teams and often external suppliers too.

**Unit cost constraints:** in a mass-produced product, **adding a 50-cent chip multiplied by a million units is $500,000**. This creates enormous pressure to use minimal hardware — and **pushes complexity into software**, where the marginal cost is zero.

---

## 10. Shared lessons across the three specialised project types

### What they share

**1. Functional requirements are not the hard part.** In all three contexts, **the difficulty lies elsewhere**:

- In process automation: **implicit business rules and organizational change**.
- In analytics: **metric definitions and data quality**.
- In embedded systems: **timing constraints, error handling, and safety**.

**2. The representation technique must match the kind of problem.**

> Use cases and user stories serve user-facing software well. **But swimlane diagrams serve processes better, dimensional models serve analytics better, and event-response tables plus state diagrams serve embedded systems better.** This is a direct application of the principle of **choosing the representation to match the information type**.

**3. Exception behaviour is what gets omitted most.** In all three project types, the question *"what happens when things do not go as expected"* separates good specifications from bad ones.

**4. The cost of a requirements defect varies enormously by context** — and **the investment in requirements engineering must match**.

> A requirements defect in an internal dashboard can be fixed in a week. The same defect in a shipped medical device can mean **a product recall, regulatory penalties, and harm to people**.
>
> **This is the overarching principle: calibrate the rigour of your requirements work to the CONSEQUENCES OF BEING WRONG, not to personal preference or rigid organizational mandate.**

### The lesson specific to each

| Project type | The most important lesson |
|-------------|--------------------------|
| **Process automation** | **Automating a bad process gives you a bad process running faster** — ask whether each step exists for a need or for an old limitation |
| **Business analytics** | **Ask "if you knew X, what would you do differently"** — and reconcile metric definitions before building anything |
| **Embedded systems** | **Defect costs are orders of magnitude higher**, so invest accordingly in specifying states, timing, exceptions, and safety |

---

## Key takeaways

- **Automating a bad process gives you a bad process running faster.**
- For each existing step, ask **whether it exists for a business need or for a limitation of the old way** — if the latter, eliminate it.
- **Choose the intervention level — automate, improve, or reengineer — consciously at the outset.**
- **Resistance during elicitation is often not about the software** but about control being taken away.
- **Do not over-invest in as-is models** of a process about to be replaced.
- **If 95 percent of cycle time is waiting, making each step 20 percent faster improves almost nothing.**
- **Separate the main flow from the exception flow** — many processes are slow for everyone because they were designed around 5 percent of rare cases.
- When automating, **implicit business rules must be made explicit** — and you will discover they contradict each other.
- **Actual rules often differ from official rules** — which to automate is an executive decision.
- **Business rules change more often than processes**, so keep them where they can change without reprogramming.
- **Exception handling and audit trails for manual intervention are frequently missed** — without them, users go back to working outside the system.
- In analytics, **users do not know what they will ask until they see the data**.
- The strongest elicitation question: ***"If you knew X, what would you DO differently?"***
- **Reconciling metric definitions is the most valuable contribution a BA makes to an analytics project.**
- **"Real-time" is the biggest cost lever** — ask *"if the data were 24 hours old, how would you decide wrongly?"*
- **Source data quality determines analytics success more than any technical factor.**
- **A report that does not disclose which data is untrustworthy is worse than no report** — it manufactures false confidence.
- **Agree explicitly up front: does the project include establishing data governance, or only consuming data as it stands?**
- In embedded systems, **software is only part of the product** — requirements must be allocated between hardware and software.
- **Hard real-time means a missed deadline is a failure; soft real-time means degraded quality** — they lead to different architectures.
- **The cost of an embedded requirements defect is orders of magnitude higher**, because you cannot patch easily.
- For embedded systems, **use cases are often insufficient** — use event-response tables, state diagrams, and decision tables.
- **In an embedded system there may be nobody to tell about an error** — the system must decide for itself.
- **Manufacturing testability requirements are the most frequently omitted** on embedded projects.
- For safety-critical systems, **requirements tracing is legally mandatory**, not optional.
- **Certification evidence must be produced throughout the project**, not assembled at the end.
- **Calibrate the rigour of requirements work to the CONSEQUENCES OF BEING WRONG.**

## Summary

- These three specialised project types demand **the same foundational requirements principles with different emphases and techniques**.
- In **process automation**, measure before designing, separate need from old limitation, and make business rules explicit.
- In **business analytics**, start from decisions rather than reports, reconcile metric definitions, and treat data quality as risk number one.
- In **embedded systems**, specify states, timing, hardware interfaces, failure behaviour, and safety requirements with far greater rigour.
- Across all three: **match the representation technique to the problem, focus on exception behaviour, and invest in requirements proportionally to the consequences of being wrong.**
