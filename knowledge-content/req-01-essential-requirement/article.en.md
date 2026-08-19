# The Essential Software Requirement

## 1. What is a software requirement?

Many software projects fail not because of poor coding, but because **nobody agreed on what the product was supposed to do**. The paradox is that after decades of industry experience, project participants still do not share a common understanding of the word "requirement".

A few useful definitions:

- Brian Lawrence: a requirement is **"anything that drives design choices"**.
- Another framing: a requirement is **a property a product must have to provide value to a stakeholder**.
- The most complete definition, from Ian Sommerville and Pete Sawyer:

> Requirements are a specification of **what should be implemented**. They are descriptions of **how the system should behave**, or of a system **property or attribute**. They may be a **constraint** on the development process of the system.

This definition matters because it acknowledges that "the requirements" are a **collection of several different kinds of information**: behaviour visible to the user, internal characteristics developers care about, and constraints.

**Requirements have a time dimension.** A requirement may describe the current system, a near-term need (high priority), a mid-term need (medium priority), or a hypothetical future need (low priority). Do not waste time debating whether something "is really a requirement" just because you know it will not be built in this release — it **still is** one; its turn simply has not come.

> **Trap:** Do not assume all your project stakeholders share a common notion of what requirements are. Establish definitions up front so that you are all talking about the same things.

---

## 2. The three levels of requirements

Software requirements come in **three distinct levels**. This model is the foundation of the whole course.

| Level | Answers the question | Who supplies it | Where it lives |
|-------|----------------------|-----------------|----------------|
| **Business requirement** | *Why* is the organization doing this project? | Funding sponsor, acquiring customer, marketing, product visionary | Vision & Scope document |
| **User requirement** | What does the user *need to do* with the product? | Actual user representatives | Use cases, user stories, event-response tables |
| **Functional requirement** | What must the system *do* so the user can reach that goal? | Business analyst, derived from the two levels above | Software Requirements Specification (SRS) |

**Business requirements** describe the business benefit the organization hopes to gain. Example: an airline wants to *cut airport counter staff costs by 25 percent*. That objective leads to the idea of a self-service check-in kiosk.

**User requirements** describe goals or tasks the user must be able to perform. Example: the use case *Check in for a flight*, or written as a user story: *"As a passenger, I want to check in for a flight so I can board my airplane."*

**Functional requirements** specify the behaviours developers must implement, traditionally written as "shall" statements:

- *"The Passenger **shall** be able to print boarding passes for all flight segments for which he has checked in."*
- *"If the Passenger profile does not indicate a seating preference, the reservation system **shall** assign a seat."*

**Alignment across the three levels is essential for project success.** Every functional requirement should serve a user requirement, and every user requirement should serve a business requirement. If you cannot trace it back, ask why it exists.

---

## 3. Other types of requirements information

Beyond the three levels you will meet several other categories:

| Term | Meaning |
|------|---------|
| **Business rule** | A policy, guideline, standard, regulation, or computational algorithm of the business. **It is NOT a software requirement in itself**, but it is the origin of many. |
| **System requirement** | A top-level requirement for a product made of multiple subsystems (which may include hardware and people). |
| **Constraint** | A restriction imposed on the design and construction choices available to the developer. |
| **External interface requirement** | A description of a connection between the system and a user, another software system, or a hardware device. |
| **Quality attribute** | A service or performance characteristic: performance, security, availability, usability, portability. |
| **Nonfunctional requirement** | A property the system must exhibit, or a constraint it must respect. |

**Why is a business rule not a software requirement?** Because it exists **independently** of any application. The rule "employees must retake hazardous-chemical training every year" holds even if the company works entirely on paper. But that rule *forces* the software to contain a training-record check — and **that functionality** is the software requirement.

### Nonfunctional — if they are not functional, what are they?

The term *nonfunctional* is widely criticised because it says what these requirements are **not**, rather than what they **are**. In practice the group covers:

- **Quality attributes** — *how well* the system does what it does (fast, secure, usable, reliable).
- **External interfaces** — how the system connects to the outside world.
- **Constraints** — limits imposed on design and implementation.
- **Compliance / localization** — laws, certification, languages, currencies, time zones.

> You can deliver a product that has **all the desired functionality** and still have users hate it, because it does not match their (often unstated) quality expectations.

---

## 4. Features, user requirements, and functional requirements

A **feature** is one or more logically related system capabilities that provide value to a user and are described by a set of functional requirements.

The hierarchy: one **feature** decomposes into several **user requirements**, and each user requirement leads to several **functional requirements**.

The classic example — enhancing a text editor:

| Level | Example |
|-------|---------|
| Business requirement | Increase non-US sales by 25 percent within 6 months. |
| Feature | A **multilanguage** spelling checker (competitors only ship English). |
| User requirement | Select language for spelling checker; find spelling errors; add a word to a dictionary. |
| Functional requirement | Highlight misspelled words, autocorrect, display suggested replacements, globally replace. |
| Nonfunctional | Usability requirements for localizing to specific languages and character sets. |

A customer list of desired product features is **not equivalent** to a description of the user task-related needs. That is why this course keeps insisting: understand **user goals** first, then derive the features.

---

## 5. Product requirements vs project requirements

This distinction is often skipped, and it is what clutters most specifications.

- **Product requirements** describe properties of the *software* to be built. They belong in the SRS.
- **Project requirements** are what the *project* needs to succeed but are **not part of the software**.

Project requirements include:

- Physical resources: workstations, testing equipment, labs, team rooms.
- Staff training needs.
- User documentation: training material, tutorials, reference manuals, release notes.
- Support documentation: help desk resources, field maintenance information.
- Infrastructure changes in the operating environment.
- Procedures for releasing, installing, configuring, and testing the installation.
- **Transition requirements**: data migration and conversion, security setup, production cutover, closing skills gaps.
- Product certification and compliance requirements.
- Sourcing, acquisition, and licensing of third-party components.
- Beta testing, packaging, marketing, distribution.
- Customer service-level agreements.
- Legal protection for intellectual property (patents, trademarks, copyrights).

**Project requirements belong in the project management plan, not the SRS.** Keeping them apart lets the SRS answer only the right question: what are we going to build?

---

## 6. Requirements development

Requirements engineering splits into two halves. The first is **requirements development**, made of four interwoven activities — **not** four sequential phases:

**Elicitation** — everything involved with discovering requirements:

- Identifying the expected user classes and other stakeholders.
- Understanding user tasks and goals and the business objectives they align with.
- Learning about the environment in which the product will be used.
- Working with representatives of each user class to understand their functionality needs and quality expectations.

**Analysis** — reaching a richer, more precise understanding and representing requirements in several ways:

- Classifying incoming information (goal, business rule, suggested solution, quality expectation).
- Decomposing high-level requirements to an appropriate level of detail.
- Deriving functional requirements from other requirements information.
- Understanding the relative importance of quality attributes.
- Allocating requirements to components in the architecture.
- Negotiating priorities; finding gaps and unnecessary requirements.

**Specification** — turning the collected needs into written requirements and diagrams, stored persistently and organised for their intended audiences.

**Validation** — confirming you have the **correct set** of requirements: reviewing them to fix problems before the development group accepts them, and developing acceptance tests and acceptance criteria.

> **Important:** You are **never** going to get perfect requirements. The practical goal of requirements development is to accumulate a **shared understanding good enough** to build the next portion of the product at an **acceptable level of risk**.

---

## 7. Requirements management

The second half is **requirements management** — everything you do *after* you have a set of requirements in hand:

- Defining the **requirements baseline**: a snapshot of an agreed, reviewed, approved set of requirements, usually for one release or development iteration.
- Evaluating the **impact** of proposed changes and incorporating approved ones in a controlled way.
- Keeping **project plans** current with the requirements as they evolve.
- Renegotiating commitments based on the estimated impact of changes.
- Defining the **relationships and dependencies** between requirements.
- **Tracing** individual requirements to their designs, source code, and tests.
- Tracking requirements **status** and change activity throughout the project.

The object of requirements management is **not** to stifle change or make it difficult. It is to anticipate and accommodate the very real changes you can always expect, so as to minimise their disruptive impact on the project.

---

## 8. When bad requirements happen to good people

These are the most common requirements risks and how to avoid them.

**Insufficient user involvement.** Customers often do not understand why eliciting requirements is worth the effort; developers sometimes assume they already know what users need. The result is late-breaking requirements that generate rework and delay completion. Worse: the BA specifies apparently perfect requirements, developers implement them correctly, and then **nobody uses the solution** because the business problem was misunderstood.

**Inaccurate planning.** "Here is my idea for a new product; when will you be done?" gets a quick guess in reply — and the listener hears a commitment. Top contributors to poor estimation: frequent requirements changes, missing requirements, insufficient communication with users, poor specification, and insufficient requirements analysis.

**Creeping user requirements.** Requirements will change and grow, and that is normal. The problem is scope increasing while schedule, staff, and budget stay fixed. Begin with a clear statement of business objectives, vision, scope, and success criteria, then evaluate every proposed change against that reference.

**Ambiguous requirements.** Two symptoms: one reader can interpret a statement several ways; or multiple readers arrive at **different understandings that each make sense to them** — the more dangerous case, because a solo review will never surface it. The cure: have people representing different perspectives inspect the requirements, write tests against them, and build prototypes.

**Gold plating.** A developer (or a BA) adds functionality that was not in the specification because they believe users will love it. If users do not care about it, the effort is wasted. The cure: trace every bit of functionality back to its origin and business justification.

**Overlooked stakeholders.** Most products have several groups of users. Do not forget maintenance and field support staff, the people who will convert data from a legacy system, and regulators — parties who may **not even know the project exists** yet still impose standards on it.

---

## 9. The cost of requirement errors

These are the numbers to quote when you need to defend a budget for requirements work:

- Errors introduced during requirements activities account for **40 to 50 percent of all defects** found in a software product.
- **Rework** — doing again what you thought was already done — consumes **30 to 50 percent of total development cost**.
- Requirements errors account for **70 to 85 percent of that rework cost**.

The cost of fixing a defect rises sharply with how late it is found:

| Found during | Relative cost |
|--------------|---------------|
| Requirements work | 1 |
| Design | 1 (fix the requirement) + 2–3 (redo the design) |
| Operation | **100 or more** |

A real example: one company measured an average of **USD 200** of effort to find and fix a defect using **software inspection**, versus **USD 4,200** for a defect reported by a user — an **amplification factor of 21**.

> Think of better requirements as an **investment**, not just a cost. Do not balk at the time spent on requirements — balk at the money wasted when a project does not pay enough attention to them.

---

## 10. Benefits of a high-quality requirements process

Some people mistakenly believe that time spent discussing requirements simply delays delivery by that same duration — which assumes a zero return on the investment. In reality, investing in good requirements will virtually always return more than it costs.

What it costs you: developing new procedures and templates, training the team, buying tools, and above all **the time your project teams actually spend on requirements activities**.

The potential payoff:

- Fewer defects in the requirements and in the delivered product.
- Reduced development rework.
- Faster development and delivery.
- Fewer unnecessary and unused features.
- Lower enhancement and maintenance costs.
- Fewer miscommunications.
- Reduced scope creep and reduced project chaos.
- Higher customer **and** team member satisfaction.
- Products that do what they are supposed to do.

Frederick Brooks captured all of it in his classic 1987 essay *No Silver Bullet*:

> The hardest single part of building a software system is **deciding precisely what to build**. No other part of the conceptual work is as difficult as establishing the detailed technical requirements. No other part so cripples the resulting system if done wrong. No other part is more difficult to rectify later.

---

## Key takeaways

- A requirement is **a specification of what should be implemented** — a behaviour, a property, or a constraint.
- Three levels: **business (why) → user (what people need to do) → functional (what the system must do)**. They must **align**.
- **A business rule is not a software requirement**, but it is the origin of many.
- **Nonfunctional requirements** = quality attributes + external interfaces + constraints. Ignoring them is a reliable way to ship a fully functional product that users dislike.
- **Product requirements** (SRS) are distinct from **project requirements** (project management plan).
- **Requirements development** = elicitation + analysis + specification + validation, performed **iteratively**, not sequentially.
- **Requirements management** = baselines, change control, traceability, status tracking.
- Requirements errors cause **40–50 percent of all defects**; rework is **30–50 percent of cost**; requirements errors drive **70–85 percent** of that rework.
- The cost to fix a defect rises from **1 to 100 or more** when it escapes to operation.
- The goal is not perfect requirements, but **good enough to proceed at an acceptable level of risk**.

## Summary

- Requirements are the shared foundation of both software development and project management; this is where the interests of **all** stakeholders intersect.
- Keep the **three levels** distinct and always trace a functional requirement back to a business objective.
- Beyond functionality, actively elicit **quality attributes, interfaces, and constraints** — users rarely volunteer them.
- Six classic risks: **insufficient user involvement, inaccurate planning, creeping requirements, ambiguity, gold plating, overlooked stakeholders**.
- Separate **requirements development** (creating the shared understanding) from **requirements management** (protecting and evolving it).
- Investing in requirements **shortens** the schedule rather than lengthening it, because it removes the most expensive rework.
