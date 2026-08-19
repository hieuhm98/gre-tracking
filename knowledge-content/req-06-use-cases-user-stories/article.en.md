# Use Cases & User Stories

## 1. Use cases & user stories: two ways to capture user requirements

There are two basic strategies for eliciting requirements:

- **Product-centric** — emphasises defining features you expect will lead to marketplace success. The risk: you implement features that **do not get used much**, even though they seemed like a good idea at the time.
- **User-centric / usage-centric** — emphasises understanding **user goals** and deriving the necessary functionality from them.

Both **use cases** and **user stories** shift the focus to **what users need to accomplish**, in contrast to asking users what they want the system to do.

A **use case** describes a sequence of interactions between a system and an external actor that results in the actor achieving **an outcome of value**. Use case names are always written as **verb plus object**: *Request a Chemical*, *Check in for a Flight*, *Create an Invoice*, *Track a Shipped Package*.

A **user story** is a *"short, simple description of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system"*. The common template:

> **As a** *<type of user>*, **I want** *<some goal>* **so that** *<some reason>*.

A user story is shorter than a use case but has **two advantages over a bare use case name**: it identifies the **user class** (corresponding to the use case primary actor) and the **rationale** behind the request.

| | Use case | User story |
|---|----------|------------|
| Next step | The BA works with users to understand the **dialog** between them and the system, filling in a template | The story is a **placeholder for conversations** that happen just-in-time |
| Main output | **Functional requirements** plus tests | **Acceptance tests** describing the *conditions of satisfaction* |
| Strength | Provides **structure and context**; the template reminds you to explore every aspect | **Simplicity and conciseness** |
| Weakness | Heavier if written in excessive detail | Lacks structure; it is **easier to miss** acceptance tests without experience |

Use cases let you examine each template element — flows, preconditions, postconditions — to find pertinent functional and nonfunctional requirements. A loose collection of user stories **does not replicate** that rigour. For example, use case analysis may reveal that **several use cases share the same kind of exception**, suggesting a single consistent error-handling strategy for the whole application — something far harder to discern from a pile of stories.

> **Important:** Use cases and user stories work well for **business applications, websites, kiosks**, and systems that let a user control a hardware device. They are **NOT adequate** for batch processes, computationally intensive systems, business analytics, or data warehousing — where the complexity lies in the **computations and data**, not in user-system interactions.

**The classic limitation example: an automated car wash.** The driver has just **one goal** — wash the car — plus a few options. But the car wash itself has a lot going on: a drive mechanism, numerous motors, pumps, valves, switches, lights, timers, and sensors. You also have to worry about diagnostics (notifying the operator when a tank is nearly empty), fault detection, and safety requirements: *what happens if the drive mechanism fails while a car is in the tunnel?* For such systems the right technique is listing **external events and system responses**.

---

## 2. Actors & use case diagrams

An **actor** is a **person** — or sometimes another software system or hardware device — that interacts with the system to perform a use case.

Questions that help identify actors:

- **Who (or what) is notified** when something occurs within the system?
- **Who (or what) provides** information or services to the system?
- **Who (or what) helps** the system respond to and complete a task?

### Users versus actors

This distinction confuses people. Think of a human user as having **a collection of hats**, each labelled with the name of an actor the system recognises. When the user wants to do something, they **put on the appropriate hat**, and the system sees them as that actor.

Example: the Chemical Tracking System has an actor called **Requester**. There is no user class named Requester — **both chemists and chemical stockroom staff may request chemicals**, so members of either user class may play the Requester role.

> **In short: users are actual people; actors are abstractions.**

The **primary actor** initiates the use case and derives the main value from it. A **secondary actor** participates in its successful execution — often other software systems working behind the scenes. The Training Database is a secondary actor when a Requester asks for a hazardous chemical requiring a safety training check.

### Use case diagrams

A **use case diagram** represents user requirements at a high level using UML notation:

- A **box frame** represents the system boundary.
- **Stick figures** are actors.
- **Ovals** are use cases.
- An **arrow from an actor to a use case** means that actor is the primary actor.
- An **arrow from a use case to an actor** indicates a secondary actor.

**Compared with a context diagram:** both define the boundary between inside and outside the system. But:

| | Context diagram | Use case diagram |
|---|-----------------|------------------|
| System internals | **Nothing visible** | The **use cases** are visible |
| Meaning of arrows | **Flow** of data, control signals, or physical materials | Simply a **connection** between an actor and the use cases they participate in — **not a flow** |

> Everyone who reads your models must have a **consistent understanding** of the notation you use — a principle that applies to every form of requirements representation.

---

## 3. Use case elements & the template

The **essential** elements of a use case:

- A **unique identifier** and a **succinct name** stating the user goal.
- A **brief description** explaining the purpose.
- A **trigger** condition that initiates execution.
- **Zero or more preconditions** that must be satisfied before it can begin.
- **One or more postconditions** describing the system state after successful completion.
- A **numbered list of steps** showing the sequence of interactions between actor and system — a **dialog** leading from the preconditions to the postconditions.

A fuller template also has: primary actor, secondary actors, alternative flows, exceptions, priority, frequency of use, related business rules, other information, and assumptions.

### Labelling convention

Use cases contain many small packets of information. A simple convention keeps them straight:

- Each use case has a sequence number and a meaningful name: **UC-4 Request a Chemical**.
- The **normal flow** for use case 4 is **4.0**.
- **Alternative flows** increment the digit after the decimal: **4.1**, **4.2**, and so on.
- **Exceptions** on the normal flow: **4.0.E1**, **4.0.E2**.
- The second exception on the first alternative flow: **4.1.E2**.

### Level of detail: casual versus fully dressed

A **casual use case** is simply a textual narrative of the user goal and interactions — perhaps just the *Description* section. A **fully dressed use case** completes the whole template. You can do anything in between, and you **do not need** every use case documented to the same depth.

Fully dressed use cases are valuable when:

- User representatives are **not closely engaged** with the development team throughout the project.
- The application is **complex** and system failures carry **high risk**.
- The use cases represent **novel requirements** developers are not familiar with.
- The use cases are the **most detailed requirements** developers will receive.
- You intend to develop **comprehensive test cases** based on the user requirements.
- **Collaborating remote teams** need a detailed, shared group memory.

> **Do not be dogmatic about detail.** Remember the goal: understand the user objectives **well enough to let developers proceed at low risk of having to do rework**.

---

## 4. Normal flows, alternative flows & exceptions

A use case is a **collection of related usage scenarios**; a scenario is **a specific instance** of a use case.

The **normal flow** (also called the main flow, basic flow, primary scenario, main success scenario, sunny-day scenario, or happy path) is the default sequence of steps leading to success. It is written as a **numbered list**, indicating which entity — the actor or the system — performs each step.

An **alternative flow** (secondary scenario) delivers the **same business outcome** but represents a **less common or lower-priority variation** in how the task is accomplished. It **branches off** the normal flow at a decision point and may or may not rejoin it later.

How to recognise them in what users say:

- *"The default should be…"* → describing the **normal flow**.
- *"The user should also be able to request a chemical from a vendor"* → suggests an **alternative flow**.

An **exception** is a condition that can **prevent the use case from succeeding**. Exceptions describe anticipated error conditions and how they are handled. Sometimes the user can recover (re-entering incorrect data); other times the use case must terminate without reaching its success conditions.

> **If you do not specify exception handling, there are only two possible outcomes:**
> 1. Each developer makes their **best guess** at how to deal with the exceptions they see, leading to **inconsistent error handling** throughout the application and less robust software.
> 2. The system **crashes** when a user hits the error condition, because no one thought about it.
>
> It is a safe bet that *"system crashes"* is not on the user list of requirements.

**Errors affecting multiple use cases.** Some error conditions affect many use cases or many steps: loss of network connectivity, a database failure partway through an operation, a paper jam. Treat these as **additional functional requirements** rather than repeating them as exceptions for every affected use case. The goal is not to force-fit all known functionality into use cases.

**You will not necessarily implement every alternative flow** you identify — some can be deferred. **But you MUST implement the exceptions that can prevent the flows you do implement from succeeding.** Experienced programmers know that handling exceptions represents a lot of the coding effort. **Overlooked exceptions are a common source of missing requirements.**

With user stories, exceptions are handled through **acceptance tests**. For the story *"as a chemist, I want to request a chemical from a vendor"*, conversation might raise *"What if the chemical is not commercially available from any vendor?"* — leading to a matching acceptance test.

When a use case has complex logic, a **flowchart** or a **UML activity diagram** is a good visual way to show decision points and the conditions that cause branching.

> **Trap: highly complex use cases.** One use case ran to **four dense pages** of dialog steps, with a lot of embedded logic and branching conditions — it was incomprehensible. You cannot control the complexity of the business task, but you **can control how you represent it**. Select **one** success path as the normal flow, use alternative flows for other branches leading to success, and exceptions for branches leading to failure. You may have many alternatives, but each one will be short and easy to understand. If a flow exceeds **10 to 15 steps**, confirm whether it truly describes just a single scenario.

---

## 5. Preconditions & postconditions

**Preconditions** define prerequisites that must be met **before** the system can begin executing the use case. The system must be able to **test** every precondition.

A subtle point: preconditions can describe the **system state** (for an ATM cash withdrawal, the ATM must contain money), but they do **not** describe the **user intent** (*"I need some cash"*).

**The trigger event is NOT a precondition.** The correct sequence is: the system detects the trigger event indicating the user wants to perform the use case, then says to itself *"hold on a moment while I check these preconditions"*. If they are all satisfied it can begin; otherwise it cannot.

> Checking preconditions **prevents errors**. If the ATM is empty, it **should not** let a user even begin a withdrawal transaction. This is how you make applications more robust.

Users are **not likely to be aware** of all a use case preconditions, so the BA may need input from other sources.

**Postconditions** describe the state of the system after successful execution. They can be:

- Something **observable to the user** (the system displayed an account balance).
- **Physical outcomes** (the ATM dispensed money and printed a receipt).
- **Internal state changes** (the account was debited by the withdrawal amount plus any transaction fees).

Many postconditions are evident because they reflect the outcome that delivers user value. But **no user will ever tell a BA that the system should reduce its record of the cash remaining in the ATM** by the amount withdrawn. Users neither know nor care about such internal housekeeping — but **developers and testers need to know**. The BA must discover them, perhaps through a subject matter expert, and record them as additional postconditions.

### Chaining use cases

In many applications the user can **chain use cases** into a larger task. For an e-commerce site: *Search Catalog*, *Add Item to Shopping Cart*, *Pay for Items in Shopping Cart*. If each activity can be performed **independently**, they are individual use cases. But you may also be able to perform all three in sequence as one large use case called *Buy Product*.

> **For that chain to work: the postconditions of one use case must SATISFY the preconditions of the next.**

Similarly, in a transaction-processing application such as an ATM, each use case must leave the system in a state that permits **the next transaction to begin**.

### Checking the boundaries

When reviewing a use case flow, verify that the preconditions and postconditions **frame it properly**. One reviewer found a use case whose normal flow had **eight steps**, but whose postconditions were satisfied after **step 5** — meaning steps 6, 7, and 8 were **unnecessary**, outside the use case boundary. Likewise, preconditions must be satisfied **prior to** commencing step 1.

---

## 6. Extend, include & relationships between use cases

Use case diagrams can show two types of relationship between use cases.

### Extend

The **extend** relationship shows that a standalone use case **extends** the normal flow into an alternative flow.

Example: the normal flow of *Request a Chemical* is requesting from the stockroom; an alternative flow is requesting from a vendor. The Buyer already has a standalone use case *Search Vendor Catalogs*. If you want the Requester to also run that use case as an option during alternative-flow processing, the use case diagram shows this with an **extend** relationship.

### Include

Sometimes several use cases **share a common set of steps**. To avoid duplicating those steps in each one, define a separate use case containing the shared functionality, and have the others **include** it. This is analogous to **calling a common subroutine**.

Example, in accounting software: *Pay a Bill* and *Reconcile Credit Card* may both involve writing a check. You create a separate use case *Write a Check* containing the common steps, and the two transaction use cases **include** it. *Write a Check* remains a **standalone use case**, because that is also something someone might do directly with the accounting software.

> **Trap:** Do not have protracted debates with your colleagues over when, how, and whether to use extend and include. One author of a book on use cases said they are best discussed **by friends over beer**.

---

## 7. Use cases & business rules

Use cases and business rules are **intertwined**.

**How business rules affect use cases:**

- Some rules **constrain which roles** can perform all or part of a use case. Perhaps only users with a certain privilege level can perform a specific alternative flow — the rule **imposes a precondition** the system must test.
- Rules influence specific steps in the normal flow by **defining valid input values** or **dictating how computations are carried out**.

Example: an airline charges a premium for certain preferred seats. When a passenger runs the use case to select a new seat on the website, the **relevant business rules change the airfare** if he chooses one of those seats.

**How to record them in a use case:** do not copy the rule text into the specification. **Record the identifiers** of the business rules that affect the use case and indicate **which part** each rule affects. That way the use case does not go stale when a rule changes.

**The reverse direction: use cases help discover business rules.** While exploring a use case to view a stored order, a chemist said: *"Fred should not be able to see my orders, and I do not want to see Fred orders."* That is a business rule: **a user may view only the chemical orders that he placed**.

Three common situations:

- Sometimes you **invent** business rules as you go along.
- Sometimes discussions **reveal** relevant rules that already exist in the organization.
- Sometimes you **already know** about existing rules the system will have to respect.

---

## 8. Identifying use cases

You can identify use cases in several ways:

- **Identify the actors first**, then lay out the business processes the system supports, and define use cases where actors and the system interact.
- **Create a specific scenario** to illustrate each business process, then **generalize** scenarios into use cases and identify the actors involved.
- Using a business process description, ask: *"What tasks must the system perform to complete this process, or to convert the inputs into outputs?"*
- **Identify the external events** the system must respond to, then relate them to actors and specific use cases.
- Use a **CRUD analysis** to find data entities that require use cases to create, read, update, or delete them.
- Examine the **context diagram** and ask: *"What objectives does each of these external entities want to achieve with the help of the system?"*

### Combining top-down and bottom-up

The Chemical Tracking System team asked users, **before the workshops began**, to think of tasks they would need to perform with the new system. Each task became a **candidate use case**. This is a **bottom-up** approach, complementing the **top-down** strategy of identifying all the business processes the system will support and gleaning use cases from those. Comparing the lists generated by these different thought processes **reduces the chance of overlooking one**.

During exploration the group found that some candidates were **out of scope** and were dropped; some were **related scenarios that could be consolidated** into a single, more general use case; and additional use cases surfaced beyond the initial set. Expect to make these sorts of adjustments.

### Fixing badly named use cases

- **Not phrased as a task.** A user proposes *"Material Safety Data Sheet"* — that is a noun, not a goal. A use case name must **start with a verb**: does the user want to **request, view, print, download, order, revise, delete, or create** that data sheet?
- **A single step, not a goal.** A user proposes *"Scan Bar Code"*. The BA should ask: *"When you scan the bar code on the chemical container, what are you trying to accomplish?"* The reply might be: *"As a chemist, I need to scan the container bar code so I can log the chemical into my laboratory."* The real use case is **Log Chemical into Lab**; scanning is **one step** within it.

> **Do not dive into high-resolution analysis of the first use case someone proposes.** Learn **just enough** about each so the team can prioritize them and do an initial allocation to forthcoming releases or iterations. Then explore the highest-priority ones in depth. Lower-priority use cases can wait for detailing until just before they are scheduled to be implemented.

> **Trap:** Do not try to force **every** requirement to fit into a use case. Use cases can reveal **most — but probably not all** — of the functional requirements. If the BA already knows of certain functionality that must be implemented, there is little value in creating a use case simply to hold it.

---

## 9. Exploring & validating use cases

### The exploration process

The Chemical Tracking System team ran **two-hour workshops, twice a week**, with three BAs facilitating parallel sessions for different user classes. Each workshop included the user class product champion, other user representatives, and **a developer**. Having developers participate gives them early insight into the product they will build, and they serve as the **voice of reality** when infeasible requirements are suggested.

The sequence in each session:

1. Identify the **actor** who benefits and write the **short description**.
2. **Estimate frequency of use** — an early indicator of concurrent usage and capacity requirements.
3. Define **preconditions and postconditions** — the boundaries of the use case. They get adjusted as more information surfaces.
4. Ask users how they envision **interacting** with the system to perform the task → the resulting sequence becomes the **normal flow**.
5. Develop similar dialogs for **alternative flows** and **exceptions**. Many exceptions are discovered by asking *"What should happen if the database is not online at that moment?"* or *"What if the chemical is not commercially available?"*
6. Discuss **quality expectations**: response times, security requirements, UI design constraints.

The team captured steps on **sticky notes** placed on a flipchart sheet — easy to move around, group together, and replace as the discussion progresses. An alternative: project a use case template on a large screen and populate it live.

The team did **not** try to cover all use cases in one marathon workshop, nor to pin down every detail. They explored use cases **in layers**, beginning with broad strokes for high-priority ones and iteratively refining just before implementation.

### Writing UI-independent flows

When writing the steps, **avoid language that refers to specific user interface interactions**.

- ✅ *"Requester specifies the desired chemical"* — nicely general and UI-independent.
- ❌ *"System displays drop-down list"* — a premature constraint.

The general phrasing allows **multiple ways** to satisfy the intention: enter a chemical ID number, import a structure from a file, draw the structure with a mouse or stylus, or select from a list. Say *"System presents choices"* instead of *"System displays drop-down list"*. Proceeding too quickly into interaction details **constrains the thinking** of the workshop participants.

### Validation

A day or two after each workshop, the BA gave the use cases and functional requirements to the participants to review **before the next workshop**. These informal reviews revealed many errors: **previously undiscovered alternative flows, new exceptions, incorrect functional requirements, and missing dialog steps**.

> **An important lesson about pacing:** The team quickly learned to allow **at least one day** between successive workshops. The mental relaxation that comes after a day or two lets people examine earlier work from a **fresh perspective**. One BA who held daily workshops found that participants had **difficulty spotting errors** because the information was too fresh in their minds — they **mentally recited** the recent discussion and did not see the errors.

**Early conceptual testing.** The project test lead began creating **conceptual tests** from use cases early on — independent of implementation and user-interface specifics. These helped the team reach a shared understanding of how the system should behave in specific scenarios, and let the BAs **verify** that they had derived the functionality needed to let users perform each use case.

This early test thinking is **much cheaper and faster** than writing code, building part of the system, executing tests, and only then discovering problems with requirements.

---

## 10. From use cases to functional requirements

> **Software developers do NOT implement business requirements or user requirements. They implement FUNCTIONAL REQUIREMENTS.**

Some practitioners regard the use cases as **being** the functional requirements. Many organizations get into trouble when they simply pass use cases to developers for implementation.

The reason: use cases describe the **user perspective**, looking at **externally visible** behaviour. They **do not contain all the information** a developer needs. The user of an ATM **does not know** about any back-end processing, such as communicating with the bank computer — this detail is invisible to the user, yet the developer needs it. Developers who receive even fully dressed use cases often have many questions.

Many functional requirements **fall right out** of the dialog steps between the actor and the system, such as *"The system shall assign a unique sequence number to each request"* — there is no point duplicating those elsewhere if they are clear from the use case.

But other functional requirements **do not appear** in the use case description. For example, the way use cases are typically documented **does not specify what the system should do if a precondition is NOT satisfied**. The BA must **derive** those missing requirements and communicate them to developers and testers. **This analysis — getting from the user view to the developer view — is where the BA adds value.**

### Four ways to organise the documentation

| Approach | Description | Strength | Weakness |
|----------|-------------|----------|----------|
| **Use cases only** | Include the functional requirements with each use case specification | Compact, everything in one place | Still need separate documentation for nonfunctional requirements and non-use-case functionality; **several use cases may need the same requirement** — cross-reference rather than duplicate |
| **Use cases + functional requirements** | Write fairly simple use cases; document derived functional requirements in an SRS or repository | Clean separation | Requires **traceability** between the two; best with a requirements management tool |
| **Functional requirements only** | Organise functional requirements by use case or by feature; include both use cases and requirements in the SRS | No separate user requirements document | The approach the Chemical Tracking System team used |
| **Use cases + tests** | Write fairly complete use case specifications, then write **acceptance tests** instead of functional requirements | Avoids duplication between flows and requirements | Needs discipline so tests cover all exceptions |

> If you write **both** detailed use cases **and** functional requirements you will notice **duplication**, particularly around the normal flow. There is little value in writing the same requirement twice.

### Multiple views find errors

The Chemical Tracking System team created **multiple representations** of the same requirements: a list of functional requirements, a corresponding set of tests, and analysis models — all based on use cases. They used the tests to **verify** the functional requirements, looking for tests that **could not be executed** with the existing requirements set and for requirements **not covered by tests**. Comparing them revealed errors on both sides **before any code was written**.

> **The key principle:** If you create just a **single** representation of the requirements, you **must trust it**, because you have nothing to compare it against.
>
> - Agile teams often **do not** write functional requirements, preferring acceptance tests — still only **one** representation.
> - Traditional teams that only create functional requirements and leave testing until later also have **one** representation.
> - The best results come from a **judicious combination** of written requirements, tests, analysis models, and prototypes.

---

## 11. Use case traps & the benefits of usage-centric requirements

### Traps to avoid

- **Too many use cases.** If you are caught in a use case explosion, you may not be writing them at the **appropriate level of abstraction**. Do not create a separate use case for every possible scenario. You will typically have **many more use cases than business requirements and features**, but **many more functional requirements than use cases**.
- **Highly complex use cases.** Revisit the normal-flow / alternative-flow / exception split from section 4.
- **Including design in the use cases.** Use cases should focus on what users need to accomplish, not on how screens will look. Use **screen sketches and dialog maps** to help visualise interactions, **not** as firm design specifications. Do not let UI design drive requirements exploration.
- **Including data definitions in the use cases.** Use case explorations naturally stimulate data discussions. Some authors include definitions of the data elements right in the use case. This makes information **hard to find** (which use case holds which definition?) and creates **duplicate definitions that drift out of sync** when one instance changes and others do not. Store data definitions in a project-wide **data dictionary and data model**.
- **Use cases users do not understand.** If users cannot relate a use case to their business processes or goals, there is a problem. Write use cases **from the user perspective**, not the system point of view, and ask users to review them.

### Benefits

**The power of both use cases and user stories comes from their user-centric and usage-centric perspective.**

- Users have **clearer expectations** of what the new product will let them do than with a feature-centric approach.
- It helps BAs and developers **understand the user business**.
- Thinking through the actor-system dialogs **reveals ambiguity and vagueness early**, as does generating tests from the use cases.
- It **avoids orphan functionality** — features that seem like a good idea but that no one uses because they do not relate directly to user goals. Overspecifying up front and trying to include every conceivable function leads to implementing unnecessary requirements.
- It **helps with prioritization.** The highest-priority functional requirements are those originating in the top-priority user requirements.

A use case or user story may be high priority because:

- It describes part of a **core business process** the system enables.
- **Many users** will use it **frequently**.
- A **favored user class** requested it.
- It is **required for regulatory compliance**.
- **Other system functions depend** on its presence.

**Technical benefits:** use cases reveal some of the **important domain objects** and their responsibilities to each other. Developers using object-oriented design methods can turn use cases into **class and sequence diagrams**.

**Maintenance benefits:** as business processes change over time, the tasks embodied in user requirements change too. If you have traced functional requirements, designs, code, and tests back to their **parent user requirements** — the voice of the user — it will be **much easier** to cascade those changes through the entire system.

> **A final trap:** Do not spend a lot of time detailing use cases that **will not be implemented for months or years**. They are likely to **change or disappear** before construction begins.

---

## Key takeaways

- **Product-centric** focuses on features and risks building functionality nobody uses; **usage-centric** starts from user goals.
- Use case names are always **verb plus object**; user stories add the **user class** and the **rationale**.
- Use cases give **structure and context**; user stories give **simplicity** but make it easier to miss acceptance tests.
- Use cases are **NOT adequate** for batch, computation-heavy, analytics, data warehousing, or many real-time systems — use **event-response** instead.
- **Users are actual people; actors are abstractions.** One person can wear several actor hats.
- On a **use case diagram**, arrows are **connections**, not flows — unlike a context diagram.
- **A trigger event is not a precondition.** The system detects the trigger, then checks preconditions.
- **Postconditions must satisfy the preconditions of the next use case** for chaining to work.
- Failing to specify exceptions leads to **inconsistent error handling** or a **crashing system**.
- You may defer alternative flows, but you **must implement the exceptions** of the flows you do build.
- A flow exceeding **10–15 steps** signals a use case that has merged several scenarios.
- Record **business rule identifiers** in the use case; **do not copy rule text**.
- Use case names must start with a **verb**; *"Scan Bar Code"* is a **step**, not a goal.
- Allow **at least one day** between successive workshops so reviewers look with fresh eyes.
- Write flows **independent of the UI**: *"System presents choices"*, not *"displays drop-down list"*.
- Use cases **do not hold everything** developers need — the BA must derive the missing requirements.
- **Store data definitions in the data dictionary**, not embedded in use cases.
- A single representation means **you must trust it**; combine requirements, tests, models, and prototypes.
- Tracing back to user requirements makes **change propagation** easier as the business evolves.

## Summary

- Use cases and user stories both shift the question from *"what do you want the system to do"* to ***"what do you need to accomplish"***.
- The use case structure — **preconditions, normal flow, alternative flows, exceptions, postconditions** — is a checklist that forces you to explore every aspect.
- **Overlooked exceptions are the most common source of missing requirements**; hunt for them deliberately.
- Explore use cases **in layers**: enough to prioritize first, details later, just before implementation.
- **The BA must derive functional requirements** from use cases; this is where the BA adds the most value.
- Choose **one of the four documentation approaches** and apply it consistently, avoiding writing the same requirement twice.
- The usage-centric approach **avoids orphan functionality**, supports prioritization, and makes maintenance easier.
