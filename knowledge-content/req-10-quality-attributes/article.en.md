# Quality Attributes & Constraints

## 1. Why quality attributes matter & how to elicit them

> **When a user says *"this software is great"*, what are they actually saying?**

**You cannot tell** — unless you ask. Maybe the application does exactly what they need, maybe it is easy to learn, maybe it is blazingly fast, maybe it has never crashed. **The key point: greatness lies along many dimensions, and most of them are NOT functional.**

**Functional requirements describe *what the system does*. Quality attributes describe *how WELL it does it*.** They are also called **quality factors, quality of service requirements, constraints, nonbehavioral requirements**, or collectively **"the -ilities"**.

> **These are characteristics stakeholders care about DEEPLY yet RARELY state.** Users seldom say *"I need this system to be reliable"* — they **assume** it is reliable. But if you do not specify and design for that quality, you will most likely **not achieve it**.

### Why they get overlooked

- **Users find them hard to articulate.** They have expectations but no vocabulary for them.
- **They are implicit.** If nobody asks, nobody says.
- **They are hard to measure.** *"Easy to use"*, *"fast"*, *"reliable"* are all vague unless quantified.
- **They conflict with each other.** Increasing security usually decreases usability; increasing performance usually decreases maintainability.

> **The cost of missing them:** **Quality attributes have an ENORMOUS influence on architecture.** Discovering late that the system must serve 10,000 concurrent users instead of 100, or must run on mobile devices, can **force a rewrite of much of the system**. **Retrofitting these characteristics after the fact is usually far more expensive than designing for them up front.**

### How to elicit quality attributes

**1. Ask specific questions, not general ones.** Do not ask *"How fast do you need the system to be?"* — the answer will always be *"as fast as possible"*. Instead ask about **concrete scenarios**: *"When you search for a chemical, how long are you willing to wait before you get frustrated?"*

**2. Use a checklist of attributes.** Walk through a standard list with stakeholders and ask whether each one matters for this system. **Do not try to specify every attribute** — pick the ones that genuinely matter.

**3. Ask about the downside.** *"What happens if the system is unavailable for an hour? For a day?"* The answer tells you what availability is really needed.

**4. Find the differences between user classes.** Power users who work in the system daily prioritise **efficiency of use**; occasional users prioritise **ease of learning**. **These are DIFFERENT and often conflicting goals.**

**5. Prioritize.** You cannot optimise everything. **Determine which attributes matter most and what stakeholders are willing to trade away.**

> **Trap:** Do not just say *"the system must be user-friendly"* and consider the job done. **That is not a requirement — it is a wish.** Translate it into **observable, measurable product characteristics**.

---

## 2. Classifying quality attributes & distinguishing them from constraints

### Two broad groups

| Group | Who cares | Examples |
|-------|-----------|----------|
| **Attributes important to USERS (external / operational)** | Users, customers, operators | Availability, installability, integrity, interoperability, performance, reliability, robustness, safety, security, usability |
| **Attributes important to DEVELOPERS (internal / development)** | Developers, maintainers, testers | Efficiency, modifiability, portability, reusability, scalability, verifiability |

> **Why specify the "internal" attributes at all?** Because **good development attributes lead to a system that is easier to maintain, extend, and port later** — which ultimately serves the customer. **But customers are often unwilling to pay for them**, so the development team must **raise and justify** them.

### How quality attributes differ from constraints

- A **quality attribute** describes a **desired level of quality** — usually achievable at many different levels, and you choose the right one.
- A **constraint** **limits the choices available to designers and developers**. It is not something you optimise — it is something you **must obey**.

**Example:** *"The system shall respond to a query within 2 seconds"* is a **quality attribute (performance)**. *"The system shall be written in Java 8"* is an **implementation constraint**.

### Four sources of constraints

**1. Design constraints** — limit design options: *"The interface must conform to the corporate style guide"*, *"Data must be stored in the existing Oracle database"*.

**2. Implementation constraints** — limit how code is written: mandated programming language, permitted libraries, coding standards.

**3. Operating-environment constraints** — hardware platform, operating system, browsers to support, available network bandwidth.

**4. External constraints** — laws, regulatory requirements, industry standards, company policies, contractual terms.

> **An important principle: every constraint should come with a RATIONALE.** Without one, developers will not know whether the constraint still applies when circumstances change. **Design constraints imposed unnecessarily, prematurely, or for the wrong reasons frustrate developers and can lead to a suboptimal product design.**

---

## 3. Availability, installability & integrity

### Availability

**Availability** measures the **fraction of time the system is genuinely available for use**. It is a function of **reliability** and **maintainability**.

How to specify it: *"The system shall be available at least 99.5 percent of the time during business hours from 8:00 to 18:00 on weekdays."*

> **Put it in perspective: 99 percent availability sounds excellent, but that is 3.65 days of downtime a year. 99.9 percent is about 8.8 hours. 99.99 percent is under 1 hour. Each additional nine makes the COST SOAR.** Ask stakeholders about the **real cost** of each hour of downtime to choose a sensible level.

Questions to ask:

- Does **planned downtime** (maintenance) count against it?
- Must the system be available **24/7**, or only during business hours?
- What is the **maximum permitted recovery time** after a failure?
- Is a **degraded mode** needed, where some functions keep working when others fail?

### Installability

**Installability** describes how easy it is to **install, uninstall, and reinstall** the application. It is often forgotten until the last minute.

Aspects to specify:

- The **maximum time** to complete an installation.
- How much **user interaction** is required, and what **technical skill level** the installer needs.
- Can an installation **roll back** if it fails?
- Must the application be installable **without administrator privileges**?
- Does **upgrading** preserve user data and settings?
- Does **uninstalling** remove everything or leave user data behind?

### Integrity

**Integrity** deals with **preventing data loss and corruption**. It addresses the **accuracy and correctness** of data in the system.

> **Integrity is DIFFERENT from security.** Security focuses on **preventing unauthorized access**; integrity focuses on **ensuring data is not corrupted, lost, or distorted** — whether by a software defect, a hardware failure, or a mistake by a legitimate user.

How to specify it: *"The system shall detect any data corruption caused by transmission errors and request retransmission"*, or *"No more than 1 minute of transaction data shall be lost if the system crashes."*

Related mechanisms: **checksums, transaction rollback, backup and recovery, audit trails, input data validation**.

---

## 4. Interoperability, performance & reliability

### Interoperability

**Interoperability** indicates how readily the system **exchanges data and services with other systems**.

To specify it, you need to know:

- **Which other systems** the application must exchange information with.
- Which **data formats, protocols, and standards** must be supported.
- Whether the exchange is **synchronous or asynchronous**, **real-time or batch**.
- What happens when a partner system is **unavailable**.

An **ecosystem map** is very useful here: it shows every system your application interacts with.

### Performance

**Performance** is the **responsiveness of the system** — the time needed to respond to events, or the number of events processed in a given interval.

Because performance is **highly visible to users**, it is often among the most important quality attributes.

**Kinds of performance requirements:**

| Kind | Example specification |
|------|----------------------|
| **Response time** | *"95 percent of search queries shall return results within 2 seconds with up to 500 concurrent users."* |
| **Throughput** | *"The system shall process a minimum of 1,000 transactions per minute at peak load."* |
| **Capacity** | *"The system shall support up to 2,000 concurrent users."* |
| **Latency & timing** | *"The control system shall sample the sensor every 100 milliseconds with a tolerance of no more than 5 milliseconds."* |
| **Degradation** | *"Above 2,000 users, the system shall queue new requests rather than reject them."* |

> **A vague performance requirement is useless.** *"The system must be fast"* is not verifiable. Always state: **what is measured, under what load conditions, and what threshold is acceptable.**

**Performance has an enormous architectural impact.** If performance requirements are demanding, the architect needs to know **from the outset** to pick the right caching, sharding, and asynchronous processing strategies.

### Reliability

**Reliability** is the **probability of the software executing without failure for a specified period of time**. It is closely related to availability and robustness.

**Ways to measure it:**

- **MTBF (mean time between failures)** — the average time between two failures.
- **MTTF (mean time to failure)** — the average time to the first failure.
- **MTTR (mean time to repair)** — the average repair time, which directly affects availability.
- **Defect density** — defects per thousand lines of code or per unit of functionality.

How to specify it: *"No more than 1 critical failure per 1,000 hours of operation"*, or *"MTBF shall be at least 720 hours."*

> **The reliability you need depends on the consequences of failure.** A phone game and a pacemaker control program **clearly have very different reliability requirements**. Ask: **what is the consequence of one failure?**

---

## 5. Robustness, safety & security

### Robustness

**Robustness** is the degree to which the system **continues to function correctly when faced with invalid inputs, failures in connected systems, or unexpected operating conditions**.

**Three common components:**

- **Error tolerance** — how does the system handle bad input? Does it **reject it gracefully** with a useful message, or crash?
- **Fault tolerance** — does the system keep operating when a component fails? Does it **switch to a degraded mode**?
- **Recovery** — after a failure, does the system **recover on its own** or does it need manual intervention? How long does it take?

How to specify it: *"If the connection to the chemical server is lost, the system shall let the user continue preparing a request in offline mode and submit it automatically when the connection is restored."*

> **The principle: every functional requirement describing behaviour when things go right should have companion requirements describing behaviour when exceptions occur.** This is exactly where robustness meets requirements completeness.

### Safety

**Safety requirements** concern **preventing harm to people, property, or the environment**. They are especially important in **embedded systems, medical devices, automotive, aviation, and industrial control**.

Safety requirements are often written in terms of **what the system must NOT allow to happen**, together with **protective mechanisms**:

- *"The system shall prevent the pump from operating when the level sensor detects an empty tank."*
- *"If the temperature exceeds 90°C, the system shall cut power to the heating element within 500 milliseconds and activate an audible alarm."*

**Safety requirements usually derive from:**

- **Hazard analysis** — identifying what can go wrong and what the consequences are.
- **Laws and industry standards** — FDA for medical devices, ISO 26262 for automotive, DO-178C for aviation.
- **Product certification** — the product must pass an inspection before it can be sold.

> **For safety-critical systems, requirements tracing is MANDATORY, not optional.** You have to demonstrate that every safety requirement was implemented and tested.

### Security

**Security requirements** concern **protection from unauthorized access, use, modification, disclosure, or destruction**.

**The main aspects:**

| Aspect | Questions to answer |
|--------|--------------------|
| **Authentication** | How does a user prove their identity? Is multifactor authentication required? |
| **Authorization** | Who is permitted to do what? Are permissions granted by role or individually? |
| **Confidentiality** | Which data must be encrypted, at rest and in transit? |
| **Audit** | Which actions must be logged? How long are logs retained and who can view them? |
| **Privacy** | What personal data is collected, for what purpose, retained how long, and accessible to whom? |
| **Non-repudiation** | Is undeniable proof needed that a transaction took place? |

**Many security requirements derive directly from business rules.** For example, the business rule *"Only department managers may approve expenses over $5,000"* leads to specific functional and security requirements.

> **Security requirements also frequently derive from regulations** — HIPAA for health data, GDPR for personal data, PCI DSS for payment card data. **Identify which regulations apply, because they usually impose non-negotiable requirements.**

---

## 6. Usability & other operational attributes

### Usability

**Usability** — sometimes called **human engineering** or **ease of use** — covers a large space of characteristics that make software **accessible, learnable, and easy to use**.

> **The biggest problem: usability is the most poorly specified attribute of all.** People write *"the system shall be user-friendly"* and consider it specified. **That is not a requirement.**

**The dimensions of usability — each must be specified separately because they often conflict:**

| Dimension | Definition | How to specify it |
|-----------|-----------|-------------------|
| **Ease of learning** | How quickly a newcomer learns to use it | *"An untrained new user shall be able to place a chemical request within 15 minutes of opening the application for the first time."* |
| **Efficiency of use** | How quickly an expert works | *"An experienced user shall complete a standard request in no more than 6 mouse clicks and 60 seconds."* |
| **Memorability** | How easily it comes back after a break | *"A user who has not used the system for 3 months shall be able to perform the primary task without documentation."* |
| **Error prevention & recovery** | Preventing mistakes and allowing correction | *"Every destructive operation shall require confirmation and shall be undoable within the session."* |
| **Satisfaction** | How users feel about it | Measured with a standardized survey such as the **System Usability Scale (SUS)** against a specific score threshold |
| **Accessibility** | Can people with disabilities use it | *"The application shall conform to WCAG 2.1 level AA."* |

> **Ease of learning and efficiency of use are DIFFERENT and often CONFLICTING goals.** An interface full of step-by-step wizards is easy to learn but slows down experts. An interface full of keyboard shortcuts is efficient but hard to learn. **You must know which user class matters more.**

**Usability requirements are best determined through:**

- **Observing real users** at work (observation, ethnographic study).
- **Usability testing** on prototypes.
- **Benchmarking** against an existing system or a competitor.

### Other operational attributes to consider

- **Localizability** — how easily the product adapts to different languages, currencies, date formats, alphabets, and cultural conventions.
- **Maintainability** — how easily defects are fixed and changes made **after delivery**. Very important, since most of a software life-cycle cost is maintenance.
- **Supportability** — how easily the support organization diagnoses and resolves user problems. Relates to diagnostic logging, error messages with lookup codes, and remote support tooling.

---

## 7. Attributes important to developers

These attributes are **less visible to customers but have a large impact on life-cycle cost**. The development team usually has to **raise and justify** them proactively.

### Efficiency

**Efficiency** measures how well the system **uses resources** — processor, memory, disk, network bandwidth, battery.

> **Do not confuse efficiency with performance.** Performance is **how fast the system responds**; efficiency is **how much resource it consumes to do so**. A system can be fast but resource-hungry (inefficient), or frugal but slow.

How to specify it: *"The application shall not consume more than 40 percent of the CPU for more than 5 consecutive seconds"*, *"It shall use no more than 512 MB of RAM when processing a 100 MB file"*, *"The mobile app shall consume no more than 5 percent of the battery per hour while running in the background."*

**Efficiency is especially important in embedded systems**, where hardware resources are tightly bounded and cannot be expanded.

### Modifiability

**Modifiability** measures how easily functionality can be **added, changed, or removed**. It depends on **code structure, documentation, and the coupling between modules**.

How to specify it: *"Adding a new report type shall not require changes to the source code of any other module"*, *"A developer familiar with the system shall be able to change the discount calculation rule within 4 hours."*

**A common way to achieve modifiability: move business rules out of hard-coded logic** into configuration tables or a rule engine, so changing them does not require recompilation.

### Portability

**Portability** measures the effort needed to **migrate the software to a different operating environment** — a different operating system, hardware platform, browser, or database.

> **Portability must be known EARLY because it drives architecture.** If you know the application will eventually need to run on multiple platforms, you will **isolate platform-dependent code** from the outset. Porting a system that was never designed for it can **cost as much as a rewrite**.

How to specify it: *"No more than 5 percent of the source code may depend on a specific operating system"*, *"The web application shall be fully functional in the current and one previous version of Chrome, Firefox, Safari, and Edge."*

### Reusability

**Reusability** indicates the extent to which components can be **used in other systems**. **Building reusable components costs more** — often **two to three times as much** as building single-use components — so it is only worth doing when you **genuinely plan to reuse them**.

> **Trap:** Do not specify reusability just because it sounds good. Ask: **which components will be reused, where, and who is responsible for maintaining them as a shared asset?**

### Scalability

**Scalability** measures the ability of the system to **grow to meet increasing demand** — more users, more data, more transactions — **without degrading performance and without redesign**.

How to specify it: *"The system shall support growth from 500 to 5,000 concurrent users purely by adding application servers, with no source code changes."*

**Two forms:** **scaling up (vertical)** — adding resources to one machine; **scaling out (horizontal)** — adding more machines. **They demand very different architectures**, so clarify which one you need.

### Verifiability

**Verifiability** — also called **testability** — indicates how easily you can **check whether the software was implemented correctly**.

Factors that affect it: the degree of **complex and nested logic**, the ability to **isolate components for testing**, and the existence of **diagnostic interfaces and hooks**.

How to specify it: *"Every business component shall be testable independently of the database through a well-defined interface"*, *"The system shall provide a simulation mode allowing testers to inject synthetic sensor data."*

---

## 8. Trade-offs among quality attributes

> **You cannot optimise every quality attribute at once. Improving one usually degrades another.**

**Common trade-offs:**

| Increasing… | Usually decreases… | Why |
|-------------|-------------------|-----|
| **Security** | Usability, performance | Extra authentication steps and encryption cost time and annoy users |
| **Performance** | Modifiability, portability, reusability | Optimisation ties code to a specific platform and makes it harder to understand |
| **Reusability** | Performance, efficiency | Generalized components carry abstraction overhead |
| **Robustness** | Efficiency, performance | Error checking and recovery mechanisms consume resources |
| **Ease of learning** | Efficiency of use | Step-by-step wizards slow down experts |
| **Portability** | Performance, efficiency | Platform abstraction layers add overhead and prevent platform-specific optimisation |
| **Verifiability** | Efficiency | Test hooks and diagnostic interfaces add code and overhead |
| **Modifiability** | Performance | Dynamic configuration and indirection are slower than hard-coded logic |

**How to handle trade-offs:**

**1. State relative priorities explicitly.** The SRS should say **which attributes matter more than others** — for example *"ease of use is more important than ease of learning"*, or *"security takes priority over performance"*.

**2. Bring trade-offs to stakeholders.** Do not let developers decide silently. **The person who bears the consequences should make the decision.**

**3. Specify thresholds, not maxima.** Instead of *"as fast as possible"*, state the **minimum acceptable** level and the **desired** level. This lets the architect find a balance.

**4. Identify conflicts early.** When two quality attributes directly conflict, **raise the issue at requirements time** rather than letting it explode during testing.

> **A real trade-off that had to go to stakeholders:** A banking system required **automatic logout after 3 minutes of inactivity** (security), while customer service complained that agents were **constantly logged out mid-call with customers** (usability). **The solution was not technical but a stakeholder decision about acceptable risk** — they settled on 15 minutes for workstations in secure areas and 3 minutes for remote access.

---

## 9. Planguage: specifying quality attributes precisely

Natural language is a poor tool for specifying quality attributes precisely. **Tom Gilb developed Planguage** — a **keyword-driven language** that lets you specify quality attributes with **far greater precision**.

### The main Planguage keywords

| Keyword | Meaning |
|---------|---------|
| **Tag** | A short, unique identifying name for the requirement |
| **Gist** | A brief description of the requirement |
| **Stakeholder** | Who cares about this requirement |
| **Scale** | The **unit of measurement** used to quantify the attribute |
| **Meter** | **How it is measured** — the method or instrument used to obtain a value on the Scale |
| **Must** | The **minimum required level** — a failure if not met |
| **Plan** | The **target level** the team aims for |
| **Wish** | The **ideal level** in a perfect world — not a commitment |
| **Past** | The level achieved in the current system or a previous product |
| **Trend** | The projected level needed in the future |
| **Defined** | Definitions of terms used in the requirement |

### A full example

> **Tag:** Performance.SearchResponse
>
> **Gist:** Speed of returning chemical search results.
>
> **Stakeholder:** Chemist, Chemical Stockroom Staff.
>
> **Scale:** Seconds elapsed from the user submitting a query until the first result is fully displayed on screen.
>
> **Meter:** Measured with a performance monitoring tool across 1,000 random queries in a test environment with 500 simulated concurrent users; report the 95th percentile.
>
> **Must:** 5 seconds.
>
> **Plan:** 2 seconds.
>
> **Wish:** 0.5 seconds.
>
> **Past:** 12 seconds (current legacy system).

**Why this is powerful:**

- **Scale and Meter remove ambiguity** about what is measured and how. No more arguing *"2 seconds from when to when?"*
- **Must / Plan / Wish make three distinct levels explicit**, instead of collapsing everything into one number where nobody knows if it is mandatory or aspirational.
- **Past gives context** — knowing the old system took 12 seconds helps judge whether 2 seconds is realistic.

> **You do not need Planguage for every requirement.** Use it for the **most important, riskiest, and most contentious quality attributes** — where precision actually makes a difference.

**If Planguage feels too heavyweight for your project, at minimum always state three things:** **what is measured**, **under what conditions**, and **what threshold is acceptable**.

---

## 10. Quality attributes on agile projects & their relationship to business rules

### On agile projects

Quality attributes pose a particular challenge for agile, because they **usually span many user stories** rather than belonging to any one story.

**Four common approaches:**

**1. Write them as constraints on a card.** Many teams record nonfunctional requirements on cards **not as user stories but as constraints** that apply to the whole product. These cards are posted where the whole team sees them every iteration.

**2. Fold them into the acceptance criteria of related stories.** For example, a login story gets acceptance tests demonstrating that **certain user classes can access the functionality while others are blocked** — that is a security requirement specified as a test.

**3. Put them in the "definition of done".** Attributes that apply to **every** story — such as *"every page must load in 2 seconds"* or *"all new code must reach 80 percent test coverage"* — belong in the team shared definition of done.

**4. Write separate stories for architectural work.** When a quality attribute demands substantial architectural work (such as building a caching tier to hit a performance target), the team can create a **separate technical story** and put it in the backlog.

> **The biggest agile risk: architecturally significant quality attributes discovered LATE.** If you learn in iteration ten that the system must support 10,000 concurrent users, retrofitting could **force much of the completed work to be redone**. **Elicit architecturally significant quality attributes EARLY**, even on agile projects.

### Relationship to business rules

**Many quality attributes derive directly from business rules**, especially:

- **Corporate policies** → security and access requirements.
- **Laws and regulations** → security, privacy, data retention, and auditability requirements.
- **Industry standards** → interoperability and data format requirements.
- **Service level agreements (SLAs)** with customers → availability and performance requirements.

> **The benefit of tracing back to a business rule: you get the RATIONALE.** When someone asks *"Why must the system retain audit logs for 7 years?"*, the answer **"because regulation X requires it"** is far stronger than **"because someone thought it was a good idea"**. It also tells you whether the requirement is **negotiable**.

---

## 11. Constraints: kinds and how to specify them

**Constraints limit the choices available to designers and developers.** Unlike quality attributes — which you can achieve at various levels — **a constraint is something you must obey**.

### Four kinds of constraints

**1. Design constraints**

- *"The interface shall conform to the corporate brand style guide."*
- *"Customer data shall be stored in the existing enterprise Oracle database."*
- *"Status messages shall appear in the status bar at the bottom of the window, because that is where users of the existing application are accustomed to looking."*

**2. Implementation constraints**

- *"The system shall be developed in Java, version 8 or later."*
- *"Only open-source libraries under the MIT or Apache 2.0 licence may be used."*
- *"Source code shall conform to the internal coding standard, document ENG-STD-042."*

**3. Operating-environment constraints**

- *"The application shall run on existing Windows 10 workstations with 8 GB of RAM, with no hardware upgrade required."*
- *"The mobile application shall function over a 3G connection with a minimum bandwidth of 384 kbps."*

**4. External constraints**

- *"The system shall comply with GDPR requirements for processing the personal data of EU citizens."*
- *"The product shall obtain FDA Class II certification before market release."*
- *"Financial data storage shall comply with PCI DSS version 3.2.1."*

### The golden rule for specifying constraints

> **Every constraint MUST come with a rationale.**

Why this matters:

- **Developers need to know whether a constraint still applies** when circumstances change. A constraint *"must use the Oracle database"* justified by an **enterprise licence** can be revisited when the licence lapses; but if the reason is **integration with a legacy system**, it will outlive the licence.
- **It prevents "ghost" constraints** — restrictions nobody remembers the reason for, yet the whole team obeys for years.
- **It separates genuine constraints from personal preferences.** If nobody can supply a rationale, it probably **is not a constraint**.

### The trap: design constraints disguised as requirements

> **Requirements writers often slip design decisions into requirements.** *"The system shall have a Save button in the upper right corner"* looks like a requirement but is really a **design decision**.
>
> **Design constraints imposed unnecessarily, prematurely, or for the wrong reasons frustrate developers and can lead to a suboptimal product design.**
>
> **The test:** ask *"Why?"* If the answer is a **genuine business reason** — consistency with an existing application, standards compliance, user expectations — then it is a **legitimate constraint, so record it with its rationale**. If the answer is *"because I think it looks nicer"*, then it is a **preference, so let the designer decide**.

---

## Key takeaways

- **Functional requirements describe what the system does; quality attributes describe how WELL it does it.**
- Quality attributes are things stakeholders **care about deeply but rarely state** — you must elicit them actively.
- Do not ask *"how fast do you need it"* — ask about **concrete scenarios** and the **consequences of falling short**.
- **Quality attributes have an enormous architectural impact**; discovering them late can force a rewrite.
- Attributes split into two groups: **important to users** (availability, performance, security, usability…) and **important to developers** (modifiability, portability, verifiability…).
- **Each additional nine of availability makes the cost soar** — 99 percent is 3.65 days of downtime a year.
- **Integrity differs from security:** integrity guards against data loss and corruption; security guards against unauthorized access.
- **Performance is how fast the system responds; efficiency is how much resource it consumes.**
- The **reliability you need depends on the consequences of failure** — a game and a pacemaker differ enormously.
- **Safety requirements are often written as what the system must NOT allow to happen.**
- For **safety-critical systems, requirements tracing is mandatory**, not optional.
- *"User-friendly"* **is not a requirement** — translate it into observable, measurable characteristics.
- **Ease of learning and efficiency of use are different and often conflicting goals.**
- **Portability must be known early** because it drives architecture; retrofitting can cost as much as a rewrite.
- Building **reusable components costs two to three times as much** — only do it when reuse is genuinely planned.
- **Scaling up and scaling out demand very different architectures** — clarify which you need.
- **You cannot optimise everything**; the SRS should state **relative priorities**.
- **Specify thresholds, not maxima** — give the minimum acceptable and the desired level.
- **Planguage** uses **Scale** (unit) and **Meter** (measurement method) to remove ambiguity, plus **Must / Plan / Wish** for three levels.
- On agile projects, quality attributes usually become **constraint cards, acceptance criteria, or definition of done**.
- **The biggest agile risk is discovering architecturally significant quality attributes late.**
- **Every constraint needs a rationale** — if nobody can supply one, it probably is not a constraint.

## Summary

- Quality attributes largely determine the **perceived quality of the product**, but because they are implicit they must be **actively elicited with specific questions and checklists**.
- Select the **handful of attributes that genuinely matter** for this system rather than trying to specify them all.
- For each selected attribute, state **what is measured, how, under what conditions, and what threshold is acceptable** — Planguage gives you a ready-made frame for this.
- **Take the trade-offs to stakeholders**, because whoever bears the consequences should make the decision.
- **Elicit architecturally significant attributes early** on every kind of project, including agile ones.
- **Distinguish quality attributes from constraints clearly**, and always record the **rationale** for each constraint.
