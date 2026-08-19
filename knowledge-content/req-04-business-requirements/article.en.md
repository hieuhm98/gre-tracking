# Business Requirements: Vision & Scope

## 1. What are business requirements?

**Business requirements** are the set of information that describes a **business need** leading to one or more projects, together with the **desired ultimate business outcomes**. They have four parts:

- **Business opportunity** — the context and the business problem or opportunity.
- **Business objectives** — measurable business goals.
- **Success metrics** — indicators that measure progress toward those objectives.
- **Vision statement** — the product vision.

Business requirements sit at the **top of the requirements chain**. They set the context and objectives that user and functional requirements must align with. **Requirements that do not help the project achieve its business objectives should not be implemented.**

A project without a clearly defined and well-communicated direction invites disaster. Participants can unwittingly work **at cross-purposes** if they hold different objectives and priorities. Stakeholders will never agree on requirements if they lack a common understanding of the project business objectives.

> **Practice recommendation:** Display the business objectives, vision, and scope highlights in **every requirements elicitation session**, so the team can quickly judge whether a proposed requirement is in or out of scope.

### Conflicting business requirements

Business requirements collected from multiple sources can conflict. Consider a kiosk placed in a retail store:

| Stakeholder | Desired benefit |
|-------------|-----------------|
| Kiosk developer | A wide variety of products or services available through the kiosk |
| Retailer | Customers **linger longer** in the store and spend more |
| Customer | **Spend less time** purchasing goods and services |

The retailer goal and the customer goal are in **direct conflict**. The project decision makers must resolve that conflict **before** the BA details the requirements. The focus should be on delivering maximum business value to the primary stakeholders, avoiding distraction by superficial product characteristics that do not address the business objectives.

Do not expect the software team to resolve conflicts among stakeholders. As more constituencies climb aboard, scope grows. Uncontrolled **scope creep** can cause a project to topple under its own weight.

> On long projects the decision makers may **change partway through**. When that happens, immediately revisit the baselined business requirements with the new decision makers.

---

## 2. Business objectives & the business objectives model

No organization should initiate a project without a clear understanding of **the value it will add to the business**.

Business objectives must be **measurable**. Platitudes (*"become recognized as a world-class provider"*) and vaguely stated improvements (*"provide a more rewarding customer experience"*) are **neither helpful nor verifiable**.

| Financial objectives | Nonfinancial objectives |
|----------------------|-------------------------|
| Capture X percent market share within Y months | Achieve a customer satisfaction measure of at least X within Y months of release |
| Reach a sales volume of X units or revenue of Y within Z months | Increase transaction-processing productivity by X percent and cut the data error rate below Y percent |
| Achieve X percent return on investment within Y months | Develop an extensible platform for a family of related products |
| Save X per year currently spent on a high-maintenance legacy system | Comply with specific federal and state regulations |
| Increase gross margin from X percent to Y percent within one year | Receive no more than X service calls per unit within Z months after shipping |

A **business objectives model** is a hierarchy showing the relationship between **business problems** and **measurable business objectives**. The two are intertwined: understanding one reveals the other.

Elicit them with two alternating questions:

- Given an **objective**, ask: *"What is keeping us from achieving this goal?"* → reveals a more detailed **problem**.
- Given a **problem**, ask: *"How will we assess whether the problem is solved?"* → reveals a **measurable objective**.
- Working upward: *"Why do we care about that goal?"* → reveals a higher-level **problem or opportunity**.

The process iterates until a list of **features** emerges — features that would help solve the problems and meet the objectives.

> **Warning:** *Merging two systems into one* is **not** a reasonable business objective. Customers do not care whether they are using 1, 5, or 10 systems. They care about increasing revenue and decreasing costs. Merging systems might be **part of the solution**, but it is rarely the true business objective.

Regulatory and legal compliance projects also have clear business objectives — often phrased as **risk avoidance**: avoid being sued, avoid being put out of business.

---

## 3. Success metrics

**Success metrics** indicate whether a project is on track to meet its business objectives.

Why separate them from business objectives? Because **business objectives often cannot be measured until well after a project is complete**, and achieving them may depend on projects beyond the current one. Success metrics can be tracked **during testing or shortly after release**.

Example, for a chemical tracking system:

| Type | Statement |
|------|-----------|
| Business objective | Reduce time spent ordering chemicals to 10 minutes on 80 percent of orders |
| Matching success metric | Measure the average order time during testing or soon after release |
| Business objective (long term) | Track all chemical containers within one year |
| Matching success metric | Track 60 percent of commercial containers and 50 percent of proprietary chemicals within 4 weeks |

> **Important:** Choose your success metrics wisely. Measure **what is important to your business**, not just what is easy to measure. An objective to *"reduce product development costs by 20 percent"* is easy to measure — and easy to achieve by laying off employees or investing less in innovation. Those are clearly not the intended outcomes.

---

## 4. The vision statement

A **vision statement** summarises the **long-term purpose and intent** of the product. It reflects a balanced view that satisfies the expectations of diverse stakeholders. It can be somewhat idealistic but must stay grounded in existing markets, enterprise architecture, corporate strategic direction, and resource limits.

A keyword template works well:

- **For** *(target customer)*
- **Who** *(statement of the need or opportunity)*
- **The** *(product name)*
- **Is** *(product category)*
- **That** *(major capabilities, key benefit, compelling reason to buy or use)*
- **Unlike** *(primary competitive alternative, current system, current process)*
- **Our product** *(primary differentiation and advantages of the new product)*

**Vision versus scope:**

| | Vision | Scope |
|---|--------|-------|
| Applies to | The whole product | One specific project / iteration |
| Rate of change | Slow, follows strategic direction | Dynamic, adjusted for schedule, budget, resources |
| Clarity | Stable | Clear for the current release, fuzzier the farther out you look |

> **A great tip:** Have **several key stakeholders write the vision statement SEPARATELY**, rather than as a group exercise. Comparing the results is an excellent way to spot different understandings of the project objectives. And it is never too late — even mid-project, crafting a vision statement helps keep the remaining work in focus.

---

## 5. Business risks, assumptions & dependencies

**Business risks** are the major risks associated with developing — **or not developing** — this product. Categories include marketplace competition, timing issues, user acceptance, implementation issues, and possible negative impacts on the business.

For each risk, estimate the **potential loss**, the **likelihood of occurring**, and any **mitigation actions**.

**Business risks are NOT project risks.** Project risks typically centre on resource availability and technology factors.

An **assumption** is a statement believed to be true in the absence of proof or definitive knowledge. Incorrect assumptions can keep you from **meeting your business objectives**.

Example: a sponsor sets an objective that a new website will increase revenue by 100,000 per month. To reach that figure he assumed the new site would attract **200 additional unique visitors per day**, each spending an average of **17**. If the site does not attract enough visitors, or the average sale is lower, the project misses its objective even if the software works perfectly.

A **dependency** is a reliance on an external factor: a pending industry standard, government regulation, a deliverable from another project, a third-party supplier, or a development partner.

Note the **impact** of an assumption being wrong or a dependency breaking, so stakeholders understand why it matters. **Broken dependencies are a common source of project delays.**

---

## 6. Scope & limitations

When a chemist invents a new reaction, the paper always includes a *"Scope and limitations"* section — describing what the reaction **will** and **will not** do. A software project needs the same: you must state both **what the solution is** and **what it is not**.

**Scope** describes the concept and range of the proposed solution. **Limitations** itemise capabilities the product **will not include** that some people might assume will be there. Together they establish **realistic expectations**.

What to cover:

- **Major features** — each with a unique, persistent label so it can be traced.
- **Scope of the initial release** — capabilities planned for version one.
- **Scope of subsequent releases** — a roadmap; the farther out, the fuzzier, and it will certainly change.
- **Limitations and exclusions** — including items that were **cut from scope**, so the decision is not forgotten.

**The blue-sky trap.** One product company suffered near-catastrophic scope creep. Their manager said ruefully: *"We blue-skied the requirements too much"* — meaning any idea anyone had was included. They had a solid product vision, but they did not **manage scope** by planning a series of releases and deferring some features. They released an overinflated product after **four years**.

On the first release, one team made a very clear-eyed decision: users had to be able to **run their delivery business** with version 1. Version 1 did **not have to be fast, pretty, or easy to use** — but it had to be **reliable**. That focus drove everything they did.

> **Warning:** Do not neglect nonfunctional requirements in the initial release. The ones that **directly affect architecture** are critical from the outset — rearchitecting to fix quality deficiencies can cost almost as much as a total rewrite.

---

## 7. Context diagrams & ecosystem maps

A **context diagram** visually illustrates the boundary between the system you are building and everything else. It identifies **external entities** (also called terminators) outside the system, plus the **data, control, and material flows** between them and the system.

Notation conventions:

- The entire system is drawn as **a single circle** — the context diagram deliberately provides **no visibility** into internals.
- External entities appear in **rectangles**: user classes, organizations, other systems, hardware devices.
- **Arrows** show the flow of data or physical items between the system and its external entities.

The "system" inside the circle can encompass any combination of software, hardware, and **manual human operations**. Anything out of scope simply **does not appear** — and that absence is itself information.

An **ecosystem map** shows all the related systems that interact with one another and **the nature of those interactions**.

**The key difference from a context diagram:** an ecosystem map also shows systems that have a relationship but **NO direct interface** with your system.

How to scope with it: find the systems that **consume data** from yours. When you reach the point where your project no longer affects any additional data, you have found the **scope boundary** of systems participating in the solution.

This matters because a system may not connect directly to yours yet still receive your data through an intermediary — and you must still consider the requirements that arise from it.

---

## 8. Feature trees & event lists

A **feature tree** is a visual depiction of the product features, grouped logically and subdivided into up to three levels:

- **L1** — main features, drawn as branches off the central trunk.
- **L2** — subfeatures of an L1 feature.
- **L3** — subfeatures of an L2 feature.

The feature tree gives a **concise view of the whole scope**, making it the ideal model to show executives who want a quick glance at the project.

**Using it for release planning:** you define a release scope by selecting a specific set of L1 / L2 / L3 features. You could implement **part of a feature** in one release (only some subfeatures) and enrich it in later releases until it is complete. Mark those allocations with colours on the diagram itself, or build a **feature roadmap table**.

An **event list** identifies external events that could trigger behaviour in the system. It only **names** the events; how the system responds is detailed later through **event-response tables** in the SRS. The event list is a useful scoping tool because you can **allocate individual events** to specific releases or iterations.

**These models complement and cross-check each other:**

- Context diagram and ecosystem map say **which actors and systems exist**.
- The event list says **what those actors and systems might do** to trigger behaviour.
- For each external entity on the context diagram, ask: *"Do any actions by this entity trigger behaviour in the system?"*
- For each event on the list, ask: *"Does the corresponding entity appear on the context diagram or ecosystem map?"*

If you find a disconnect, check whether a model is missing an element. Sometimes the disconnect is legitimate: **Vendor** may be absent from the context diagram because the system does not interface directly with vendors, yet still appear on the ecosystem map.

---

## 9. Stakeholder profiles & project priorities

**Stakeholder profiles** describe the major categories of customers and other key stakeholders. You need not describe every group — focus on customer types, target market segments, and the user classes within them.

Each profile should include:

- The **major value or benefit** the stakeholder receives: improved productivity, reduced rework and waste, cost savings, streamlined processes, automation of manual tasks, the ability to perform entirely new tasks, compliance with regulations, or improved usability over current products.
- Their **likely attitude** toward the product.
- **Features and characteristics** of interest.
- Any **known constraints** that must be accommodated.

**Project priorities.** To make decisions effectively, stakeholders must agree on priorities across **five dimensions**: **features, quality, schedule, cost, staff**. Each falls into one of three categories:

| Category | Meaning |
|----------|---------|
| **Constraint** | A limiting factor the project manager must operate within |
| **Driver** | A significant success objective with limited flexibility |
| **Degree of freedom** | A factor the PM has latitude to adjust and balance against the others |

> **Important:** **Not all** five dimensions can be constraints, and they cannot all be drivers. The project manager **needs some degrees of freedom** to respond when requirements or project realities change.

When marketing suddenly demands release a month earlier, this priority table decides the response: defer requirements to a later release, shorten the system test cycle, demand overtime or hire contractors, or shift resources from other projects.

**Deployment considerations** also belong in the business context: what access users require, whether they are distributed across time zones, when they need the system, and what infrastructure changes are needed for capacity, network access, data storage, or migration.

---

## 10. Keeping the scope in focus

> **A scope definition is a STRUCTURE, not a straitjacket.**

Scope change is **not a bad thing** if it steers the project toward satisfying evolving customer needs. Problems arise only when change happens **unconsciously and uncontrolled**.

Whenever someone proposes a new requirement, the BA must ask: ***"Is this in scope?"*** — and there are exactly **three** answers:

1. **Clearly out of scope.** Interesting perhaps, but it belongs to a later release or another project.
2. **Clearly in scope.** It can go into the current project if its priority is high relative to already-committed requirements — which usually means **deferring or cancelling** something else, unless you extend the project.
3. **Out of scope, but it supports the business objectives so it ought to be in.** This is the **feedback loop** from user requirements back to business requirements: you update the vision and scope document (placed under change control when baselined) and adjust budget, schedule, and staffing accordingly.

**Use business objectives to decide.** Determine which proposed features add the most value against the business objectives and schedule those for early releases. Where possible, **quantify** the contribution: does this feature contribute roughly 1,000, 100,000, or 1,000,000 toward an objective? When an executive requests a feature he thought of over the weekend, quantitative analysis lets people decide on **facts rather than emotions**.

**Always record why a requirement was rejected.** Rejected requirements have a way of **reappearing**, and you will want to know why you said no last time.

**Assess the impact.** When scope increases, the PM usually must renegotiate budget, resources, schedule, or staff. Ideally the original schedule already contains **contingency buffers**. A common consequence of scope change is that **completed work must be redone**, and **quality suffers** if resources or time are not increased.

---

## 11. Vision & scope on agile projects; using objectives to determine completion

**Managing scope on agile projects** takes a different approach. Each iteration scope consists of user stories selected from a **dynamic product backlog**, based on priority and the team estimated delivery capacity for the timebox.

Instead of fighting scope creep, the team **prioritises new requirements against the existing backlog** and allocates them to future iterations. The number of iterations — and therefore the overall duration — still depends on the total functionality, but **each iteration scope is controlled** to ensure timely completion.

An alternative: fix the overall project duration and accept changing scope. The number of iterations stays the same while the content of remaining iterations shifts with priorities.

Agile projects often run an **iteration zero** — an upfront planning cycle to define the product vision and other business requirements. Even without a formal vision and scope document, **its contents remain essential**.

### Using business objectives to determine completion

The project manager steers the project to completion, but the **BA understands the business objectives most intimately** and can determine when the desired value has been delivered — meaning the work is done.

- If you begin with a **clear vision** and each release is scoped to deliver a portion of the functionality, you are done when the planned iterations are complete.
- In iterative approaches the end point can be **vaguer**. It is not always necessary to implement all remaining functionality. The project is complete when the **success metrics indicate a good chance of meeting the business objectives**.

> **A serious consequence:** Vague business objectives **guarantee** an open-ended project with no way to know when you are done. Funding sponsors dislike it because they cannot budget, schedule, or plan. Customers dislike it because they may receive a solution delivered on time and on budget that **does not provide the value they need**.

---

## Key takeaways

- Business requirements have four parts: **business opportunity, business objectives, success metrics, vision statement**.
- Business objectives must be **measurable**; unverifiable platitudes are useless.
- *Merging two systems into one* is **not** a business objective — it is part of a solution.
- **Success metrics are measurable early**, while business objectives often cannot be measured until long after the project ends.
- Pick success metrics that measure **what matters**, not what is easy.
- **Vision is stable and applies to the whole product; scope is dynamic and applies to one release or iteration.**
- Have several stakeholders write the vision statement **separately**, then compare — the fastest way to expose mismatched understanding.
- **A wrong assumption can defeat a business objective** even when the software works perfectly.
- A **context diagram** draws the system as a single circle and deliberately shows **no internals**.
- An **ecosystem map** differs by also showing systems that are related but have **no direct interface**.
- A **feature tree** goes up to **three levels** and is an excellent release-planning tool.
- Among the five priority dimensions, **not all can be constraints and not all can be drivers**.
- For every new requirement, always ask ***is this in scope*** — and record the reason when you reject it.
- Agile does not fight scope creep; it **prioritises new requirements into the backlog** while holding each iteration scope firm.
- **Vague business objectives mean a project with no end point.**

## Summary

- Business requirements set the context and enable **measurement** of the benefits the business expects.
- Resolve **conflicts between business requirements** before detailing requirements — and do not make the software team carry that job.
- The **vision and scope document** holds the business requirements; display it in every elicitation session.
- Four scope models — **context diagram, ecosystem map, feature tree, event list** — complement and cross-check each other.
- State explicitly **what the product will not do**, including anything cut from scope.
- Use **business objectives** as the yardstick for every scope decision, and **success metrics** to know when the project is done.
