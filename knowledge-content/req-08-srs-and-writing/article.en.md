# The SRS & Writing Excellent Requirements

## 1. Why document requirements & the limits of documents

> **Clear and effective communication is the core principle of requirements development** — from people with needs to people who can conceive solutions, then to people who can implement and verify them.

The result of requirements development is a **documented agreement** among stakeholders about the product to be built. Recording requirements in an organized fashion that key stakeholders can review helps ensure they **know what they are agreeing to**.

### Traditional documents pose numerous limitations

- It is difficult to store **descriptive attributes** along with the requirements.
- **Change management is clumsy.**
- It is difficult to retain **historical versions**.
- It is hard to **subset out** the requirements allocated to a particular iteration, or to track those once approved but then deferred or canceled.
- It is hard to **trace** requirements to other development artifacts.
- **Duplicating** a requirement that logically fits in multiple places causes maintenance issues.

Alternatives: a **spreadsheet** (which shares many of the same limits), a **wiki**, a **database**, or a **requirements management tool**. Think of these as different **containers** for requirements information. No matter which you use, you still need **the same kinds of information** — and an SRS template is a helpful reminder of what to collect.

### Should you write documentation at all?

Not everyone agrees that documenting requirements is worth the time. On **exploratory or highly volatile projects** where you are not sure what solution you will end up with, keeping up with changes in the details adds little value.

However:

> **The cost of RECORDING knowledge is small compared with the cost of ACQUIRING that knowledge, or regenerating it at some point in the future.**

The acts of specification and modeling **help project participants think through** and precisely state important things that a verbal discussion can leave ambiguous.

**The decision rule:** If you are **100 percent certain** that no stakeholder will ever need a specific piece of information beyond the duration of their own short-term memory, you need not record it. Otherwise, store it in a **group memory**.

> **Trap:** Do not rely on **telepathy** as a substitute for solid requirements specification practices. It does not work, even though it seems to be the technical foundation for some software projects.

### Three ways to represent requirements

| Approach | Description | Assessment |
|----------|-------------|------------|
| **Well-structured natural language** | Carefully written, organised prose | The most practical for most projects |
| **Visual models** | Diagrams illustrating transformational processes, system states, data relationships, logic flows | Augment rather than replace text |
| **Formal specifications** | Mathematically precise specification languages | The greatest rigour, but **few developers and even fewer customers** are familiar with them |

Formal specification suits high-risk systems — you would certainly hope the designers of a nuclear power plant control system use them. But most projects do not demand that level of formality.

> **Important: progressive refinement of detail.** On most projects it is **neither realistic nor necessary** to pin down every requirement detail early. Think in **layers**: learn just enough to prioritize and allocate requirements to releases, then detail groups of requirements **just-in-time**.
>
> And do not expect even the finest documentation to replace **ongoing discussions** throughout the project.

---

## 2. The SRS: purpose and audiences

The **software requirements specification (SRS)** states the functions and capabilities a software system must provide, its characteristics, and the constraints it must respect.

It goes by many names in different organizations — **business requirements document (BRD), functional specification, product specification, system specification** — and organizations **do not use these terms in the same way**. Because *"software requirements specification"* is the industry-standard term, that is what we use.

**The SRS should contain:** a description, **as completely as necessary**, of the system behaviours under various conditions, plus desired qualities such as performance, security, and usability.

**The SRS should NOT contain:** design, construction, testing, or project management details — other than **known design and implementation constraints**.

### Who reads the SRS

| Audience | What they need |
|----------|----------------|
| Customers, marketing, sales | To know what product they can expect |
| Project managers | To estimate schedule, effort, and resources |
| Development team | To know what to build |
| Testers | To develop requirements-based tests, test plans, test procedures |
| Maintenance and support | To understand what each part is supposed to do |
| Documentation writers | To base user manuals and help screens on it |
| Training personnel | To develop educational materials |
| Legal staff | To ensure requirements comply with laws and regulations |
| Subcontractors | They can be **legally held to** the specified requirements |

> **If a desired capability or quality does not appear somewhere in the requirements agreement, no one should expect it to appear in the product.**

**A single deliverable often cannot meet the needs of all audiences.** Some people need only the business objectives; others want only a high-level picture; others just the user perspective; and others need all the details. This is exactly why we advocate separate **vision and scope**, **user requirements**, and **SRS** deliverables. Do not expect all user representatives to read the detailed SRS, and do not expect developers to learn everything from a set of use cases or user stories.

### How much documentation?

- **Large projects** often write a **system requirements specification** followed by separate **software** (and perhaps hardware) requirements specifications. One complex process control project with more than 100 people had about **800 high-level system requirements**, divided into **20 subprojects**, each with its own SRS containing **800 or 900 derived requirements**. That is a lot of documentation — but a large project becomes **unmanageable** without a divide-and-conquer approach.
- **The opposite extreme:** one company created a single guiding document per project called *"The Spec"* — requirements, estimates, project plans, quality plans, test plans, tests, everything. **Change management and version control on such an all-inclusive document is a nightmare**, and the information level suits no audience.
- **A third extreme:** a company adopting agile **stopped writing any formal documentation**, putting user stories on sticky notes on their office walls. Unfortunately the adhesive gradually failed — a couple of months in, it was normal for **no-longer-sticky notes to flutter to the ground** as someone walked by.
- **Overdoing the middle ground:** another company had projects specifiable in 40 to 60 pages, yet some team members wanted to subdivide the SRS into as many as **12 separate documents** — one for a batch process, one for the reporting engine, and one for each of 10 reports. A document explosion causes headaches because it is hard to keep changes synchronized and to make sure the right people get all the information.

**A better alternative in all these cases:** store requirements in a **requirements management tool**. Then the SRS for any portion of the product, or for a given iteration, is just a **report generated from the database** based on query criteria.

**On timing:** you do **not** have to write the SRS for the entire product before beginning development. But you **should capture the requirements for each increment before building it**, and every project should **baseline an agreement** for each set of requirements before implementing them.

---

## 3. The SRS template structure

Every software development organization should **adopt one or more standard SRS templates**. If your organization tackles various kinds or sizes of projects — large new systems as well as minor enhancements — adopt **a template for each major project class**.

A typical structure:

**1. Introduction** — Purpose (which product, which release, which reader types); Document conventions (standards, typographical conventions, meaning of text styles and notations); Project scope (short description of the software and its purpose, related to business goals and strategies); References (documents and resources referred to, with hyperlinks if they live in a persistent location).

**2. Overall description** — Product perspective (context and origin: next member of a growing product line, next version, replacement, or entirely new product); User classes and characteristics; Operating environment (hardware platform, operating systems and versions, geographical locations of users and servers); Design and implementation constraints (with the **rationale** for each); Assumptions and dependencies.

**3. System features** — This is just **one** way to organize functional requirements. Other options: by functional area, process flow, use case, mode of operation, user class, stimulus, response, or **hierarchical combinations** such as use cases within user classes. **There is no single right choice** — select a scheme that makes it easiest for readers to understand the product intended capabilities. Each feature gets a short description with priority, plus its functional requirements, including how the product responds to **anticipated error conditions and invalid inputs and actions**.

**4. Data requirements** — Logical data model; Data dictionary (often better stored **separately** to increase reusability); Reports; Data acquisition, integrity, retention, and disposal.

**5. External interface requirements** — User interfaces; Software interfaces; Hardware interfaces; Communications interfaces.

**6. Quality attributes** — Usability; Performance; Security; Safety; and others. Indicate the **relative priorities** of various attributes, such as ease of use over ease of learning, or security over performance.

**7. Internationalization and localization requirements** — Currency, date and number formatting, language and character sets, given-name and family-name order, time zones, international regulations, paper sizes, weights and measures, voltages and plug shapes.

**8. Other requirements** — Legal, regulatory, and standards compliance; installation, configuration, startup and shutdown; logging, monitoring, and audit trail. Instead of lumping everything under *"Other"*, **add new sections** pertinent to your project.

**Appendix A: Glossary** — Specialized terms, acronyms, abbreviations. Consider building an **enterprise-level glossary** spanning projects. Note: **data definitions belong in the data dictionary, not the glossary**.

**Appendix B: Analysis models** — It is often **more helpful** to incorporate models into the relevant sections rather than collecting them at the end.

### How to use a template

> **Do not fill out a template from top to bottom.** **Populate sections as you accumulate information** during the course of the project.

**Empty sections are a valuable signal.** If partway through the project the *"Business risks"* section is empty, ask: does the project really have no business risks? Have we identified some but stored them somewhere else? Or have we **not yet worked with the appropriate stakeholders** to identify them?

**The "shrink to fit" principle:** begin with a rich template with many categories, then **condense it** for each situation. If a section does not apply, do not simply remove it and do not leave it blank — both leave readers wondering. **The best solution is an explicit message:** *"No business risks have been identified."*

**Do not duplicate information.** If you have recorded something elsewhere, **point to it** rather than copying it into the SRS.

**Improving readability:**

- Label and style sections, subsections, and individual requirements **consistently**.
- Use visual emphasis (bold, underline, italics, colour, fonts) **consistently and judiciously**. Remember **colour may not be visible** to people with colour blindness or when printed in greyscale.
- Create a **table of contents**, and **number and caption every figure and table**, referring to them by number.
- If you use documents, use your **word processor cross-reference facility** rather than hard-coded page or section numbers.
- Enlist a **skilled editor** to make the document coherent with consistent vocabulary and layout.
- Use **version control** and include a **revision history** recording what changed, who changed it, when, and **why**.

---

## 4. Labelling requirements

> **Every requirement needs a UNIQUE and PERSISTENT identifier.**

It lets you refer to specific requirements in a change request, modification history, cross-reference, or traceability matrix. It also enables **reusing requirements** across projects and helps team members **collaborate when discussing** requirements — such as in a peer review meeting.

**Simple numbered or bulleted lists are NOT adequate.**

> **An illustrative story:** On a long flight, two software people got talking. One pulled an SRS from his briefcase. The requirements were organised hierarchically — but they were **all in bulleted list form**, with up to **eight levels** of bullet hierarchy in places. They used different symbols, but **no label was more meaningful than a symbol**. It is impossible to refer to such an item, or to trace it to a design element, code segment, or test.

### Four labelling methods

**1. Sequence numbers** — each requirement gets a unique number: **UC-9**, **FR-26**. The prefix indicates the requirement type.

- ✅ Simple; a number is **not reused** if a requirement is deleted, so no reader confuses the original FR-26 with a new one; it **retains a unique identifier** when you move requirements around a document.
- ❌ Provides **no logical or hierarchical grouping**; the number **implies no ordering**; the label gives **no clue** what the requirement is about.
- Commercial requirements management tools typically assign this kind of identifier automatically.

**2. Hierarchical numbering** — the most commonly used convention. If functional requirements appear in section 3.2, they all begin with 3.2; more digits indicate a more detailed requirement, so 3.2.4.3 is a child of 3.2.4.

- ✅ Simple, compact, familiar; your word processor can **assign the numbers automatically**.
- ❌ Labels can grow to **many digits** even in a medium-sized SRS; numeric labels **tell you nothing about intent**; and in a word processor they are **not persistent**: inserting a requirement **increments the numbers** of all following requirements in that section; deleting or moving decrements them; and deleting, inserting, merging, or moving whole sections changes **a lot of labels** — disrupting every reference to them.

> **Trap:** A BA once said in all seriousness: *"We do not let people insert requirements — it messes up the numbering."* **Do not let ineffective practices hamper your ability to work sensibly.**

**3. A hybrid improvement** — number major sections hierarchically, then identify individual functional requirements with a **short text code plus a sequence number**. For example *"Section 3.5 — Editor Functions"* contains requirements **ED-1, ED-2**. This provides some hierarchy and organization while keeping labels short, somewhat meaningful, and **less positionally dependent**.

**4. Hierarchical textual tags** — label with **structured text strings**. The requirement *"The system shall ask the user to confirm any request to print more than 10 copies"* might be tagged **Print.ConfirmCopies**.

- ✅ **Structured, meaningful**, and **unaffected** by adding, deleting, or moving other requirements. Also suitable for labelling business rules when maintained manually.
- ❌ Tags are **longer**, and you must **think of meaningful names**; it can be **challenging to maintain uniqueness** with multiple people working on the set.
- **Simplification:** combine hierarchical naming with a numeric suffix for small sets: **Product.Cart.01**, **Product.Cart.02**.

### Solving the parent-child problem

Hierarchical textual tags help solve another problem. Any hierarchical organization creates **parent-child** relationships, and if the parent is **written as a functional requirement**, the relationship between children and parent becomes confusing.

> **A good convention: write the parent requirement to look like a TITLE, a heading, or a feature name — not like a functional requirement.** Its children, in the aggregate, deliver the capability the parent describes.

For example, a **Product** line is written as a heading rather than a discrete requirement. The first functional requirement is tagged **Product.Cart**; the third has the full ID **Product.Discount.Error** — built by **appending each line label to the parent labels above it**.

---

## 5. Handling TBDs & user interfaces in the SRS

### TBDs

Sometimes you know you **lack a piece of information** about a specific requirement. Use the notation **TBD (to be determined)** to flag these knowledge gaps.

> **The mandatory plan: resolve all TBDs BEFORE implementing that set of requirements.**

Any uncertainties that remain **increase the risk** of a developer or tester making errors and having to do rework. When a developer encounters a TBD, they might **make their best guess** — which will not always be correct — instead of tracking down the requirement originator.

If you must proceed with construction while TBDs remain, choose one of two options:

- **Defer implementing** the unresolved requirements.
- **Design those portions to be easily modifiable** when the issues are resolved.

> **Trap:** **TBDs will not resolve themselves.** Number them, record **who is responsible** for resolving each and **by when**, review their status at regular checkpoints, and track them to closure.

### User interfaces in the SRS

Incorporating UI design in the SRS has **both benefits and drawbacks**.

**Benefits:**

- Exploring possible interfaces with **paper prototypes, mock-ups, wireframes, or simulation tools** makes the requirements **tangible** for both users and developers.
- If users **have expectations** about how part of the product might look and feel — and would be disappointed if those expectations were unmet — then **those expectations belong in the realm of requirements**.

**Drawbacks:**

- Screen images and UI architectures describe **solutions** and might **not truly be requirements**.
- They make the document **larger**, and big requirements documents frighten some people.
- Delaying **baselining the SRS** until the UI design is complete **slows development** and tries the patience of people already concerned about spending too much time on requirements.
- Including design in requirements can result in **visual design driving the requirements**, which often leads to **functional gaps**.
- The people who write requirements are **not necessarily well qualified** to design user interfaces.
- **After stakeholders see a user interface, they will not "unsee" it.** Early visualization can clarify requirements, but it can also lead to **resistance to improving the UI** over time.

> **A cautionary story:** One Internet development company repeatedly got in trouble because after signing a contract the team went **directly into an eight-hour visual design workshop**. They **never sufficiently understood** what a user would be able to do at each website they built, so they spent a lot of time fixing sites after delivery.

**A sensible balance:**

- **Screen displays exactly as they will be implemented** are appropriate when the SRS specifies an **enhancement to an existing system** — developers are already constrained by that system reality.
- For new systems, include **conceptual images** — call them *sketches*, no matter how nicely drawn — and **make it clear they are not the committed designs**. A preliminary sketch of a complex dialog box illustrates the intent of a group of requirements, but a visual designer might turn it into a **tabbed dialog box** to improve usability.
- If you **really do** want certain functionality implemented with specific controls and layouts, it is appropriate to include that in the SRS as a **design constraint** — just make sure you are not imposing constraints **unnecessarily, prematurely, or for the wrong reasons**.
- Teams with many screens may find it more manageable to document UI specifics in a **separate user interface specification**, or by using design or prototyping tools, together with **display-action-response models** describing element names, properties, and behaviour.

---

## 6. Requirements specification on agile projects

Agile projects take a different approach.

**The starting point:** teams typically begin by writing **just enough information for each user story** so stakeholders have a general understanding of what it is about and can **prioritize it** relative to others. This allows planning allocations of stories to iterations.

Teams might **aggregate a group of related stories** into a **minimally marketable feature** that needs to be fully implemented before a release so it delivers the expected customer value.

**The product backlog:** user stories are accumulated and prioritized into a backlog that **evolves throughout the project**. Large stories that cannot be implemented within a single iteration are **subdivided**, then allocated across multiple iterations.

**The storage form can be very simple:** index cards. Some teams record stories in a **story management tool**; others **do not retain them at all** after implementation.

**Details come from conversations.** As the team gets into each iteration, conversations among the product owner, BA, developers, testers, and users flesh out the details of each allocated story. This is **progressive refinement of detail** — a good practice on **any** project.

**How details are represented:** agile often represents them as **user acceptance tests** describing how the system will behave if the story is properly implemented.

- The tests are conducted **during the iteration** that implements the story, and **in future iterations** for regression testing.
- Tests **should be automated** to assure rapid and complete regression testing.
- Tests must **cover exception conditions** as well as the expected behaviour.

> **A consequence to note:** If the team **discards the original user stories** after implementation, the only persistent documentation of the requirements **is likely to be the acceptance tests** — if they are stored in a tool.

**Nonfunctional requirements in agile** can be written on cards **not as user stories but as constraints**. Alternatively, teams specify nonfunctional requirements associated with a specific story as **acceptance criteria or tests** — for example security tests demonstrating that certain users may access the functionality in that story while others are blocked.

Agile teams are **not precluded** from using other representation methods such as **analysis models** or a **data dictionary**. Select whatever representation is customary and appropriate for your culture and project.

### Choosing the right level of formality

Each team chooses the most appropriate form. Remember the **overarching goal**: accumulate a shared understanding **good enough** to construct the next portion of the product at an **acceptable level of risk**.

The appropriate level depends on five factors:

- The extent to which **just-in-time informal verbal and visual communication** between customers and developers can supply the details needed to correctly implement each user requirement.
- The extent to which informal methods can keep the team **synchronized across time and space**.
- The extent to which it is **valuable or necessary** to retain requirements knowledge for **future enhancement, maintenance, reengineering, verification, statutory and audit mandates, product certification, or contractual satisfaction**.
- The extent to which **acceptance tests** can serve as effective replacements for descriptions of expected system capabilities and behaviours.
- The extent to which **human memories** can replace written representations.

> **The conclusion:** No matter what product you are building, what life cycle you follow, or what elicitation techniques you use, **effective requirements specification is an essential key to success**. There are many ways to achieve it. Just remember: when you **do not specify high-quality requirements**, the resulting software is like a box of chocolates — **you never know what you are going to get**.

---

## 7. Characteristics of an excellent requirement statement

The best way to tell whether your requirements possess the desired attributes is to have **several stakeholders review them** — different stakeholders spot different kinds of problems.

In an ideal world, **every** business, user, functional, and nonfunctional requirement would exhibit the following seven qualities.

**Complete** — Each requirement must contain **all the information necessary** for the reader to understand it. For functional requirements, that means providing what the developer needs to implement it correctly. If you know you lack information, use **TBD** or log it in an issue-tracking system.

**Correct** — Each requirement must **accurately describe a capability** that will meet some stakeholder need. To check correctness you must **go to the source**: a user who supplied it, a higher-level system requirement, a use case, a business rule, or another document. **A low-level requirement that conflicts with its parent is not correct.** To assess the correctness of user requirements, **user representatives or close surrogates** should review them.

**Feasible** — It must be possible to implement each requirement **within the known capabilities and limitations** of the system and its operating environment, and **within project constraints** of time, budget, and staff. A developer participating during elicitation provides a **reality check**. Incremental development and proof-of-concept prototypes are two ways to evaluate feasibility. **If a requirement must be cut because it is not feasible, understand the impact on the project vision and scope.**

**Necessary** — Each requirement should describe a capability that **provides the anticipated business value**, differentiates the product, or is **required for conformance** to an external standard, policy, or regulation. Every requirement should **originate from a source with authority**. You should be able to relate each requirement to **a business objective** that clearly indicates why it is necessary. **If someone asks why a requirement is included, there should be a good answer.**

**Prioritized** — Assign an implementation priority to each functional requirement, user requirement, use case flow, or feature. **If all requirements are equally important, the project manager does not know how best to respond** to schedule overruns, personnel losses, or new requirements. Prioritization should be a **collaborative activity** involving multiple stakeholder perspectives.

**Unambiguous** — Natural language is prone to **two types of ambiguity**:

- The type **you can spot yourself**: when you can think of more than one way to interpret a requirement.
- The type that is **much harder to catch**: when different people read it and come up with **different interpretations**, yet the requirement **makes sense to each of them**.

**Inspection is a good way to spot the second type.** A formal peer review — as opposed to handing the requirements out for individuals to examine alone — gives each participant an opportunity to **compare their understanding to someone else**. *Comprehensible* is closely related to *unambiguous*: readers must understand what the requirement says.

> You will **never remove all** the ambiguity from requirements — that is the nature of human language. Most of the time reasonable people draw the right conclusions from even a slightly fuzzy requirement. **Getting help from your colleagues through reviews will clean up the worst issues.**

**Verifiable** — Can a tester devise tests or other verification approaches to determine whether each requirement was properly implemented? If not, deciding whether it was correctly implemented becomes **a matter of opinion, not objective analysis**. Requirements that are **incomplete, inconsistent, infeasible, or ambiguous are also unverifiable**. **Include testers in your requirements reviews** to catch problems early.

---

## 8. Characteristics of an excellent requirement SET

It is **not enough** to have excellent individual requirement statements. Sets grouped into a baseline for a release or iteration should also exhibit the following four characteristics — whether recorded in an SRS, a tool, or a set of user stories and acceptance tests.

**Complete** — No requirement or necessary information should be absent. In practice you will **never document every single requirement** for any system; there are always some **assumed or implied** requirements — but they **carry more risk** than explicitly stated ones. **Missing requirements are hard to spot because they are not there!** Any specification that contains **TBDs is incomplete**.

**Consistent** — Consistent requirements **do not conflict** with other requirements of the same type, or with higher-level business, user, or system requirements. **If you do not resolve contradictions before diving into construction, the developers will have to deal with them.** Recording the **originator** of each requirement lets you know who to talk to when you find conflicts. Note: **it can be hard to spot inconsistencies when related information is stored in different locations**, such as partly in a vision and scope document and partly in a requirements management tool.

**Modifiable** — You can always rewrite a requirement, but you must **maintain a history of changes** made to each, especially after baselining. You also need to know about **connections and dependencies** so you can find everything that must change together.

- Modifiability dictates that each requirement be **uniquely labelled** and **expressed separately** from others so you can refer to it unambiguously.
- **Avoid stating requirements redundantly.** Repeating a requirement in multiple places where it logically belongs makes the document **easier to read but harder to maintain** — all instances have to be modified **at the same time** to avoid generating inconsistencies.
- **Cross-reference** related items to help keep them synchronized when making changes.
- **Storing each requirement JUST ONCE** in a requirements management tool solves the redundancy problem and facilitates **reusing common requirements** across projects.

**Traceable** — A traceable requirement can be linked **both backward to its origin and forward** to derived requirements, design elements, the code that implements it, and the tests that verify it.

> **An important note: you do NOT actually have to define all the trace links** for a requirement **to have the properties** that make it traceable.

Traceable requirements are **uniquely labelled with persistent identifiers** and written in a **structured, fine-grained way** — **not** in long narrative paragraphs. **Avoid combining multiple requirements into a single statement**, because different requirements might trace to **different development components**.

> You are **never going to create a perfect specification** in which all requirements demonstrate all these ideal attributes. But if you **keep these characteristics in mind** when you write and review, you will produce **better specifications and better software**.

---

## 9. Writing style

The best teachers are **experience** and **feedback from the recipients** of your requirements. Receiving constructive feedback from sharp-eyed colleagues is a great help — this is why peer reviews matter so much. To get started, **buddy up with a fellow BA** and exchange requirements for review.

> When we say *"writing requirements"*, people immediately think of natural language. It is better to **mentally translate the phrase to "representing requirements knowledge"**. In many cases, **alternative representation techniques present information more effectively** than straight text.

**Two important goals of writing requirements:**

1. **Anyone who reads the requirement comes to the same interpretation** as any other reader.
2. **Each reader interpretation matches what the author intended to communicate.**

These outcomes are **more important** than purity of style or dogmatically conforming to some arbitrary rule.

### System or user perspective

You can write functional requirements from the perspective of **something the system does** or **something the user can do**. Because effective communication is the overarching goal, **it is fine to intermingle these styles** — phrase each requirement in whichever style is clearer.

**A system-perspective template** (from the Easy Approach to Requirements Syntax — EARS):

> *[optional precondition] [optional trigger event]* **the system shall** *[expected system response]*

Example: *"If the requested chemical is found in the chemical stockroom, the system shall display a list of all containers of the chemical currently in the stockroom."*

**Should you keep "the system shall"?** Some writers omit it, arguing that because requirements describe system behaviour there is no need to repeat it. In the example above, deleting it is not confusing. **But sometimes it is more natural to phrase the requirement in terms of a user action.** Including *"shall"* and writing in the **active voice** makes it clear **what entity is taking** the action described.

**A user-perspective template:**

> *The [user class or actor name]* **shall be able to** *[do something] [to some object] [qualifying conditions, response time, or quality statement]*

Example: *"The Chemist shall be able to reorder any chemical he has ordered in the past by retrieving and editing the order details."*

> **Note:** This requirement uses the **specific user class name — Chemist —** in place of the generic *"user"*. **Making the requirement as explicit as possible reduces the possibility of misinterpretation.**

### Six style principles

**1. Do not write like fiction or an essay.** The style you learned in school — main idea, supporting facts, conclusion — **does not work well**. **Put the punch line FIRST**: the statement of need or functionality, followed by supporting details (rationale, origin, priority, other attributes). This structure **helps readers who are skimming** while still serving thorough readers.

**2. Do not practise creative writing in requirements documents.**

- **Do not interleave passive and active voice** to make the material more interesting.
- **Do not use multiple terms for the same concept** just to achieve variety: *customer, account, patron, user, client*.
- **Being easy to read and understand is essential; being interesting is far less important.** If you are not a skilled writer, expect that readers **might not understand** what you intend to convey.

**3. Clarity and conciseness.**

- Write **complete sentences** with proper grammar, spelling, and punctuation.
- Keep **sentences and paragraphs short and direct**.
- Use **simple language appropriate to the user domain**, avoiding jargon; define specialized terms in a **glossary**.
- **Write concisely:** *"needs to provide the user with the capability to"* condenses to *"shall"*.
- For each piece of information ask yourself: ***"What would the reader do with this?"*** If you are not certain some stakeholder would find it valuable, perhaps you do not need it.
- **Clarity is more important than conciseness.** Precisely stated requirements increase the chance people get what they expect; less specific ones offer developers more latitude. Sometimes that lack of specificity is fine, but in other cases it leads to **too much variability in the outcome**. If a developer reviewing the SRS is not clear on intent, **consider adding information**.

**4. The keyword "shall".** The traditional convention uses **shall** to describe a system capability. People sometimes object: *"That is not how people talk."* **So what?** *Shall* statements clearly indicate the desired functionality, consistent with the overarching goal of clear communication.

You might prefer *must* or *needs to* — **but be consistent**.

> **A serious problem:** Some specifications contain a **random and confusing mix** of requirements verbs: *shall, must, may, might, will, would, should, could, needs to, has to, should provide*. Readers **never know** whether there are differences in meaning. Nuances between different verbs also make the document far harder for **cross-cultural teams** to interpret consistently.

**Two DANGEROUS conventions to avoid:**

- Using different keywords to connote **priority**: *shall* = required, *should* = desired, *may* = optional. **It is clearer to always say *shall* or *must* and explicitly assign high, medium, or low priority.** Also **priorities change** as iterations proceed — do not tie them to the phrasing. Today *"must"* could become tomorrow *"should"*.
- Using *shall* to indicate a requirement and *will* to denote a design expectation. Such conventions **risk some readers not understanding the distinction** between words people use interchangeably in everyday conversation. **Best avoided.**

> **A witty but useful tip:** One consultant suggested you **mentally replace each instance of *should* with *probably won't***. Would the resulting requirement be acceptable? If not, replace *should* with something more precise.

**5. Active voice.** Much business and scientific writing uses the passive voice, but **it is never as clear and direct as the active voice**.

A passive example: *"Upon product upgrade shipment, the serial number **will be updated** on the contract line."*

The phrasing *"will be updated"* denotes the **recipient** of the action (the serial number) but offers **no clue as to who performs it**. **Does the system update it automatically, or is the user expected to?**

Rephrasing into active voice makes **both the actor and the trigger** explicit: *"When Fulfillment confirms that they shipped a product upgrade, the system shall update the customer contract with the new product serial number."*

**6. Individual requirements.** **Avoid writing long narrative paragraphs containing multiple requirements.** Readers should not have to **glean** the individual requirements embedded in a mass of free-flowing text. **Clearly distinguish** individual requirements from background or contextual information — background is valuable, but readers must **unambiguously recognise** the actual requirement statements.

> **An illustrative story:** A reviewer once examined a large requirements specification written as long paragraphs. He could read a full page and understand it, **but had to work hard to pick out the discrete requirements**. Other readers **might well come to different conclusions** about exactly which requirements were lurking in that text.

**Signs that multiple requirements have been combined:**

- The words **and, additionally, also** — this does not mean you cannot use *and*; just make sure the conjunction joins **two parts of ONE requirement**, not two separate ones. **If you would use different tests to verify the two parts, split them.**
- **Avoid "and/or"** — it leaves interpretation to the reader. *"The system must permit search by order number, invoice number, and/or customer purchase order number"* would let the user enter one, two, or three numbers at once in a single search — **that might not be what is intended**.
- The words **unless, except, but** also indicate multiple requirements. For example: *"The Buyer credit card on file shall be charged for payment, **unless** the credit card has expired."* **Failing to specify what happens when the "unless" clause is true is a common source of missing requirements.** Split it into two requirements addressing **both conditions**: the card is active and the card has expired.

---

## 10. Level of detail & representation techniques

### Appropriate detail

An important part of requirements analysis is **decomposing a high-level requirement into sufficient detail** to clarify and flesh it out. **There is no single correct answer** to the commonly asked question *"How detailed should the requirements be?"*

**The principle:** provide enough specifics to **minimize the risk of misunderstanding**, based on the development team knowledge and experience. **The fewer the opportunities for ongoing discussion about requirements issues, the more specifics you need to record.**

> **The pragmatic test:** If a developer can think of **several possible ways** to satisfy a requirement and **all are acceptable**, the specificity and detail are **about right**.

| Include MORE detail when | You can include LESS detail when |
|--------------------------|----------------------------------|
| The work is for an external client | The work is done internally for your company |
| Development or testing will be outsourced | Customers are extensively involved |
| Team members are geographically dispersed | Developers have considerable domain experience |
| System testing will be based on requirements | Precedents are available, such as replacing a previous application |
| Accurate estimates are needed | A package solution will be used |
| Requirements traceability is needed | |

### Consistent granularity

Authors often struggle to find the right **granularity**. You **need not** specify all requirements to the same level of detail — you might go deeper in a higher-risk area. However, **within a set of related requirements, write at a consistent granularity**.

**A helpful guideline: write individually TESTABLE requirements.** The count of testable requirements has even been proposed as a **metric for software product size**. If you can think of **a small number of related test cases** to verify a requirement, its granularity is probably appropriate. If you envision **numerous and diverse tests**, perhaps several requirements are combined and ought to be separated.

> **An example of severe mismatch.** One SRS split out two requirements:
>
> 1. *"The system shall interpret the keystroke combination Ctrl+S as File Save."*
> 2. *"The system shall interpret the keystroke combination Ctrl+P as File Print."*
>
> These are **very fine-grained** and need few tests. You can imagine a tediously long list of similar requirements — better expressed as a **TABLE** listing all the keystroke shortcuts and how the system interprets them.
>
> But that same SRS also contained: *"The product shall respond to editing directives entered by voice."*
>
> This single requirement — **seemingly no larger or smaller** than all the others — actually **stipulated the inclusion of a complex speech-recognition subsystem**, virtually an entire product in its own right! Verifying it in the working system could require **hundreds of tests**. Such a statement could be appropriate at the high level of abstraction of a vision statement or market requirements document, but **the speech-recognition requirement clearly demands much more functionality detail**.

### Representation techniques

**Readers eyes glaze over** when confronting a dense mass of turgid text or a long list of similar-looking requirements. Consider **the most effective way** to communicate each requirement to its intended audience.

Alternatives to natural language: **lists, tables, visual analysis models, charts, mathematical formulas, photographs, sound clips, video clips**. These will not suffice as substitutes in many cases, but they serve as **excellent supplemental information** to enhance understanding.

> **A story about the power of tables.** A set of requirements fit the pattern: *"The Text Editor shall be able to parse <format> documents that define <jurisdiction> laws."* There were **3 possible formats** and **4 jurisdictions**, for a total of **12 similar requirements**.
>
> The SRS **did indeed contain 12** — but **one combination was missing and another was duplicated**.
>
> You can **prevent such errors** by representing them in a table, which is **more compact and less boring** than a list. The cells contain only the **suffix** to append to the master requirement identifier.
>
> If a combination has **no corresponding requirement** for some logical reason, put **N/A (not applicable)** in that cell. This is **much clearer** than omitting the irrelevant combination from a long list and then having a reader **wonder** why there is no requirement for parsing documents containing territorial laws in the untagged format.
>
> **This technique also ensures completeness** — if there is something in every cell, you know you have not missed any.

---

## 11. Avoiding ambiguity

> **Requirements quality is in the eye of the READER, not the author.**

The analyst may believe a requirement is crystal clear and free from ambiguity. But **if a reader has questions, the requirement needs additional work**. **Peer reviews are the best way** to find places where requirements are not clearly understood by all intended audiences.

### Fuzzy words

- **Use terms consistently** and as defined in the glossary. Watch out for **synonyms and near-synonyms**. One project used **four different terms** to refer to **the same item** in a **single document**. Pick one term and use it consistently, placing synonyms in the glossary so people accustomed to another name see the connection.
- If you use a **pronoun** to refer to something mentioned earlier, make sure the **antecedent is crystal clear**.
- **Adverbs introduce subjectivity and hence ambiguity.** Avoid words like *reasonably, appropriately, generally, approximately, usually, systematically, quickly* — the reader will not be sure how to interpret them.

**An excellent test for ambiguity:** think of a **ludicrous but legitimate** interpretation. If it would **not be all right with the user**, the requirement needs more work.

> **The classic example:** *"The Background Task Manager shall provide status messages at regular intervals not less than every 60 seconds."*
>
> - What are the status messages? **Under what conditions and in what fashion** are they provided to the user? If displayed on screen, **how long do they remain visible**? Is it okay if they just **flash up for half a second**?
> - The **timing interval is not clear**, and the word *"every"* just muddles the issue. If the intent is that the interval between messages is **at least 60 seconds**, is providing a new message **once per year** okay? Alternatively, if the intent is that **at most 60 seconds** elapse between messages, would **one millisecond** be too short?
>
> **These extreme interpretations might be consistent with the original requirement, but they certainly are not what the user had in mind.** Because of these problems, **the requirement is NOT verifiable.**

After getting more information from the customer, it could be rewritten as a heading-style parent (*"The BTM shall display status messages in a designated area of the user interface"*) with children: update messages **every 60 plus or minus 5 seconds** after background processing begins; messages **remain visible continuously**; display the **percent completed**; display a **Done** message when complete; and display a message if the task has **stalled**.

> **An important note:** Rewriting a flawed requirement **often makes it LONGER**, because information was missing. Splitting it into multiple child requirements makes sense because each will demand **separate tests** and be **individually traceable**.

The revised requirements **do not specify how** the messages will be displayed, just *"in a designated area of the user interface"*. That wording **defers placement to design** — fine in many cases. **If you specify the display location in the requirements, it becomes a design constraint** placed on the developer. Unnecessarily constrained design options **frustrate programmers** and can result in a **suboptimal product design**.

**But sometimes the constraint is entirely legitimate.** If you are adding this functionality to an existing application whose UI already contains a status bar where users are accustomed to seeing important messages, it makes perfect sense to stipulate that the messages appear there **for consistency** — you **deliberately impose the design constraint for a very good reason**.

### The table of terms to avoid

| Ambiguous term | How to improve it |
|----------------|-------------------|
| acceptable, adequate | Define **what constitutes acceptability** and **how the system can judge this** |
| and/or | Specify whether you mean *and*, *or*, or *any combination of* |
| as much as practicable | Do not leave it to developers to determine what is practicable. Make it a **TBD** and **set a date to find out** |
| at least, not to exceed | Specify the **minimum and maximum** acceptable values |
| best, greatest, most | State the **level of achievement desired** and the **minimum acceptable level** |
| between, from X to Y | Define whether **the end points are included** |
| depends on | Describe the **nature of the dependency** |
| efficient | Define how efficiently the system uses resources, how quickly it performs operations, or how quickly users complete tasks |
| fast, quick, rapid | Specify the **minimum acceptable time** for the action |
| flexible, versatile | Describe the **specific ways** the system must adapt to changing conditions |
| i.e., e.g. | Many people are **unclear** which means *that is* and which means *for example*. **Use words in your native language**, not confusing Latin abbreviations |
| improved, better, faster | **Quantify** how much improvement is adequate |
| including, and so on, etc., such as | **List all possible values or functions**, not just examples, or refer the reader to the full list |
| in most cases, usually, almost always | Clarify **when the stated conditions do NOT apply** and **what happens then** |
| match, equals, the same | Define whether a text comparison is **case sensitive**, and whether it means *contains*, *starts with*, or *exact*. For real numbers, specify **precision** |
| maximize, minimize, optimize | State the **maximum and minimum** acceptable values |
| normally, ideally | Identify **abnormal conditions** and describe how the system behaves then |
| optionally | Clarify whether this is a **developer choice, system choice, or user choice** |
| probably, ought to, should | **Will it or will it not?** |
| reasonable, if possible, as applicable | Explain **how the developer or user makes this judgment** |
| robust | Define how the system **handles exceptions** and **responds to unexpected conditions** |
| seamless, transparent, graceful | What do these mean **to the user**? Translate expectations into **observable product characteristics** |
| several, some, many, multiple | State **how many**, or the **minimum and maximum** of a range |
| shouldn't, won't | Try to state requirements **as positives**, describing what the system **will** do |
| state-of-the-art | Define what the phrase **means to the stakeholder** |
| sufficient | Specify **how much** constitutes sufficiency |
| support, enable | Define **exactly what functions** the system performs that constitute *supporting* a capability |
| user-friendly, simple, easy | Describe **system characteristics** that satisfy usage needs and usability expectations |

### The A/B construct

Many specifications include expressions in the form **"A/B"** — two related (or synonymous, or opposite) terms combined with a slash. **They are frequently ambiguous.**

> Example: *"The system shall provide automated information collection of license key data for a mass release from the **Delivery/Fulfillment Team**."*
>
> This can be interpreted in **five ways**:
>
> 1. The name of the team is **Delivery/Fulfillment**.
> 2. Delivery and fulfillment are **synonyms**.
> 3. Some projects call the group a Delivery Team; others a Fulfillment Team.
> 4. **Either** team can do a mass release, so the slash means *"or"*.
> 5. The two teams **jointly** do a mass release, so the slash means *"and"*.

Sometimes authors use the construct **because they are not sure** what they have in mind. Unfortunately this means **each reader gets to interpret the requirement to mean whatever he thinks it ought to mean**. **Decide exactly what you intend to say and choose the right words.**

### Boundary values

Many ambiguities occur **at the boundaries of numerical ranges**, in both requirements and business rules.

> Example: *"Vacation requests of **up to 5 days** do not require approval. Vacation requests of **5 to 10 days** require supervisor approval. Vacation requests of **10 days or longer** require management approval."*
>
> This makes it unclear **which category requests of exactly 5 days and exactly 10 days belong to**. It gets more confusing with **fractions**, like 5.5 days.

**The words *through*, *inclusive*, and *exclusive* make it totally clear** whether the endpoints lie inside or outside the range: *"Vacation requests of **5 or fewer days** do not require approval. Requests of **longer than 5 days through 10 days** require supervisor approval. Requests of **longer than 10 days** require management approval."*

### Negative requirements

People sometimes write requirements saying what the system **will NOT do** rather than what it will do. **How do you implement a do-not-do-this requirement?**

**Double and triple negatives are particularly tricky to decipher.** Example: *"**Prevent** the user from activating the contract if the contract is **not** in balance."* — two negatives (*prevent* and *not in balance*).

Rephrase into a **positive sense** that clearly describes the restricting behaviour: *"The system shall allow the user to activate the contract **only if** the contract is in balance."*

**Do not use negative requirements to indicate that functionality is out of scope.** Include the restriction in the **Limitations and Exclusions section of the vision and scope document**. If a specific requirement was once in scope but then removed, **you do not want to lose sight of it** — it has a way of reappearing. If maintaining requirements in a document, use **strikethrough formatting** for a deleted requirement. **The best approach is a requirements status attribute** in a requirements management tool.

---

## 12. Avoiding incompleteness & before-and-after examples

### Symmetry

**Symmetrical operations are a common source of missing requirements.**

> A reviewer once found: *"The user must be able to save the contract at any point during manual contract setup."*
>
> **Nowhere else** in the specification was there a requirement allowing the user to **retrieve an incomplete but saved contract** to work on it further. Perhaps a requirement was missing.
>
> Nor was it clear whether the system should **validate the data entries** in the incomplete contract before saving it. An implied requirement? **Developers need to know.**

### Complex logic

**Compound logical expressions often leave certain combinations of decision values undefined.**

> Example: *"If the Premium plan is **not** selected **and** proof of insurance is not provided, the customer should automatically default into the Basic plan."*
>
> This refers to **two binary decisions**, whose combinations lead to **four possible outcomes**. But the specification **only addressed ONE combination**. It did not say what should happen if:
>
> - The Premium plan **is** selected and proof of insurance is **not** provided.
> - The Premium plan **is** selected and proof of insurance **is** provided.
> - The Premium plan is **not** selected and proof of insurance **is** provided.
>
> The reader is forced to conclude the system **takes no action** for those three conditions. **That might be correct, but it is better to make such conclusions EXPLICIT rather than implicit.**

**Use decision tables or decision trees** to represent complex logic and ensure you have not missed a variant.

### Missing exceptions

**Each requirement that states how the system should work when everything is correct should also have accompanying requirements describing how the system responds when exceptions occur.**

> Example: *"If the user is working in an existing file and chooses to save the file, the system shall save it with the same name."*
>
> This alone **does not indicate** what the system should do if it is **unable to save the file with the same name**. An appropriate second requirement: *"If the system is unable to save a file using a specific name, the system shall give the user the option to save it with a different name or to cancel the save operation."*

### Before and after examples

> **A note on context:** Pulling requirements out of context shows them **at their worst**. They might make more sense in their original environment. Also assume that **BAs — and all other team members — come to work each day to do the best job they can**, based on what they knew at the moment.

**Example 1 — missing information:**

- ❌ *"Corporate project charge numbers should be validated online against the master corporate charge number list, **if possible**."*
- **Problems:** The phrase *"if possible"* is ambiguous. Does it mean *"if it is technically feasible"* (a question for the developer) or *"if the master list can be accessed at run time"*? The requirement also **does not specify what to do** when the validation passes or fails. Avoid **imprecise words such as "should"**.
- **The principle:** If you are not sure whether a requested capability can be delivered, **use TBD** to indicate the issue is unresolved. After investigation, **either the TBD goes away or the requirement goes away**.
- ✅ *"At the time the requester enters a charge number, the system shall display an error message if the charge number is not in the master corporate charge number list."*

**Example 2 — unmeasurable usability:**

- ❌ *"The device tester shall allow the user to **easily** connect additional components, **including** a pulse generator, a voltmeter, a capacitance meter, and custom probe cards."*
- **Problems:** *"Easily"* implies a usability requirement, but it is **neither measurable nor verifiable**. *"Including"* makes it **unclear** whether this is the complete list of external devices — perhaps there are many others we do not know about.
- ✅ *"The device tester shall incorporate a USB port to allow the user to connect any measurement device that has a USB connection."* and *"The USB port shall be installed on the front panel to permit a trained operator to connect a measurement device in 10 seconds or less."*
- **A note on roles:** These contain **intentional design constraints**. **A BA should not rewrite requirements in a way that imposes design constraints on their own initiative.** Instead, **detect the flawed requirements and discuss them with the appropriate stakeholders** so they can be clarified.

**Example 3 — a paragraph containing many requirements.** Practise on this one:

> *"The system must check for inconsistencies in account data between the Active Account Log and the Account Manager archive. The logic used to generate these comparisons should be based on the logic in the existing consistency checker tool. In other words, the new code does not need to be developed from scratch. The developers should utilize the current consistency checker code as the foundation. However, additional logic must be added to identify which database is the authoritative source. The new functionality will include writing data to holding tables to indicate how/where to resolve inconsistencies. Additionally, the code should also check for exception scenarios against the security tools database. Automated email alerts should be sent to the Security Compliance Team whenever discrepancies are found."*

Issues to correct:

- There are **numerous requirements** here that should be **split out individually**.
- If the comparison logic is *"based on"* the existing tool logic, **exactly what portion can be reused** and **how does it need to change**? What functions differ between the new system and the existing tool? What *"additional logic"* must be added? **How exactly can the system determine which database is the authoritative source?**
- The new functionality *"includes"* writing data to holding tables — **is that all**, or is other functionality *"included"* that is not explicitly stated?
- Clarify what *"how/where"* means when resolving inconsistencies — this is the ambiguous **A/B construct**.
- *"Should"* is used in **several places**.
- What is the relationship between an *"exception scenario"* and a *"discrepancy"*? If they are synonyms, **pick one term and stick with it**. A **glossary** might clarify whether these are the same or how they relate.
- **What information should the system send** to the Security Compliance Team when it detects a discrepancy?

> **A final trap:** Watch out for **analysis paralysis**. All the *"after"* examples above **can be improved further**, but you **cannot spend forever** trying to perfect the requirements. Remember the goal: write requirements **good enough to let your team proceed with design and construction at an acceptable level of risk**.

---

## Key takeaways

- The cost of **recording** knowledge is small compared with the cost of **reacquiring** it later.
- **Progressive refinement of detail** — detail in layers, just-in-time, rather than pinning everything down early.
- The SRS should **not** contain design, testing, or project management details, **except known constraints**.
- **One document cannot serve every audience** — hence separate vision and scope, user requirements, and SRS.
- **Do not fill a template top to bottom**; **empty sections are a valuable signal** of knowledge gaps.
- The *"shrink to fit"* rule: if a section does not apply, **write an explicit message**; do not leave it blank.
- **Hierarchical numbering is not persistent** when you insert, delete, or move requirements; **textual tags** are.
- **Write parent requirements as HEADINGS**, not as functional requirements.
- **TBDs will not resolve themselves** — number them, assign owners and dates, track to closure.
- Once stakeholders **see** a user interface they **cannot unsee it** — be careful including UI in the SRS.
- Seven characteristics of a requirement: **complete, correct, feasible, necessary, prioritized, unambiguous, verifiable**.
- Four characteristics of a requirement set: **complete, consistent, modifiable, traceable**.
- The most dangerous ambiguity is when **several people interpret differently and each makes sense** — only inspection catches it.
- **Traceable is not the same as traced** — it is the property that makes tracing possible.
- Use **one** consistent requirements verb; **do not** use shall/should/may to connote priority.
- Mentally replace *should* with *probably won't* to test a requirement.
- The **active voice** makes clear **who** performs the action.
- The words **unless, except, but** signal a **missing requirement** for the opposite condition.
- If verifying a requirement needs **many diverse tests**, it is probably several requirements combined.
- **Tables prevent omission and duplication errors** in similar requirement sets; use **N/A** for inapplicable cells.
- **Requirements quality is in the eye of the reader**, not the author.
- The **A/B construct** is often ambiguous; **boundary values** need *through, inclusive, exclusive*.
- **Negative requirements** should be rephrased positively; out-of-scope functionality belongs in **Limitations and Exclusions**.
- **Symmetry, compound logic, and exceptions** are the three main sources of missing requirements.

## Summary

- The goal of every requirements document is **clear and effective communication** with several different audiences.
- Choose the right **container** — document, spreadsheet, wiki, or tool — but **the kinds of information you need are the same**.
- **Adopt standard templates** and adapt them to the types and sizes of projects your organization undertakes.
- **Label every requirement uniquely and persistently** to support tracing, reuse, and collaboration.
- Check each requirement against the **seven characteristics** and each set against the **four**.
- Write **clearly, concisely, actively, and individually**, at **consistent granularity** and a **context-appropriate level of detail**.
- Actively **hunt for ambiguity and incompleteness** using peer reviews, the terms-to-avoid table, decision tables, and symmetry checks.
