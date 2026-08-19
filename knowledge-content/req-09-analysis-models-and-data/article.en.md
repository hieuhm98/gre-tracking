# Analysis Models & Data Requirements

## 1. Why model & selecting the right representation

> **No single view of the requirements provides a complete understanding.**

You need to **combine several representations** — textual and visual, at different levels of abstraction — to paint a full picture of the intended system. Representations can include lists of functional requirements, tables, visual analysis models, user interface prototypes, acceptance tests, decision trees, decision tables, photographs, and mathematical formulas.

**Ideally, different people create different representations.** The BA writes functional requirements and draws some models; the UI designer builds a prototype; the test lead writes test cases. **Comparing representations created through different thought processes and notations reveals inconsistencies, ambiguities, assumptions, and omissions that no single view exposes.**

**Diagrams communicate certain kinds of information more efficiently than text.** They also help **bridge language and vocabulary barriers** among team members. The BA might need to explain the purpose of a model and its notation to other stakeholders.

### Models supplement, they do not replace

An early goal of **structured systems analysis** was to **replace** the classic functional specification with diagrams and notations more formal than narrative text. However, **experience shows that analysis models should SUPPLEMENT rather than replace** a natural-language specification. Developers and testers still benefit from the **detail and precision** that written requirements provide.

**Do not look for a single diagram that encompasses everything.** No one diagram covers all of a system requirements. In fact, if you could model an entire system in one diagram, that diagram would be **unusable** — just like a list of a thousand requirements.

### The main value: finding errors

**Visual models help you spot missing, superfluous, and inconsistent requirements.** Given the limits of human short-term memory, analyzing a list of **a thousand requirements** for inconsistencies, duplication, and superfluous requirements is **nearly impossible**. By the time you get to the fifteenth requirement you have probably forgotten some of the first few. **You are unlikely to find all the errors just by reviewing textual requirements.**

### Analysis or design?

Modeling notations are useful for **both exploring requirements and designing software solutions**. Whether you are doing analysis or design depends on **when and with what intent**:

| | Used for **requirements analysis** | Used for **design** |
|---|---|---|
| What is modeled | The **problem domain**, or a conceptual representation of the new system | How you **intend to implement** the system |
| Content | **Logical** aspects of data components, transactions, transformations, real-world objects, state changes | The actual database to be created, object classes to be instantiated, code modules to be developed |

> **Because analysis and design diagrams use the SAME notations, clearly mark each diagram you draw as either an ANALYSIS (conceptual) model or a DESIGN (what you intend to build) model.**

### Tools

Many tools support modeling: commercial modeling tools, requirements management tools, and general drawing tools such as Microsoft Visio. **Dedicated modeling tools offer many advantages** over general drawing tools:

- They make it easy to **refine diagrams over several iterations** — you will almost **never draw it right the first time**, so the ability to iterate is key to success.
- They **enforce the rules** of each modeling method, catching syntax errors and inconsistencies a reviewer might miss.
- Some tools **link several diagrams** to each other and to their corresponding functional and data requirements.
- Requirements management tools that support modeling let you **trace requirements to models**.
- Using a tool with **standard notations** keeps your models consistent with each other.

### Common objections

| Objection | Answer |
|-----------|--------|
| *"Our system is too complex to model"* | **A model is simpler than the system it models.** If you cannot handle the complexity of the model, how can you handle the complexity of the system? |
| *"The schedule is too tight to model"* | Creating most models **does not take much more time** than writing requirement statements and analyzing them for problems. The extra time is **more than repaid** by catching requirements errors before you build the system. |

**Models or portions of models can sometimes be reused** from one project to another, or at least serve as a **straw-man starting point** for the next one.

### Where to focus

**A team rarely needs to create a complete set of analysis models for an entire system.** Focus modeling on:

- The **most complex and highest-risk** parts of the system.
- The parts most susceptible to **ambiguity or remaining uncertainty**.
- **Safety-critical, security-critical, and mission-critical** components, because the impact of errors there is severe.

---

## 2. From the voice of the customer to models

By **listening carefully to how customers state requirements**, the BA can pick out **key words** that translate into specific model components.

| Word type | Examples | Corresponding model components |
|-----------|----------|-------------------------------|
| **Nouns** | People, organizations, software systems, data elements, existing objects | External entity, data store, or data flow (DFD); Actor (use case diagram); Entity or its attribute (ERD); Lane (swimlane diagram); Object with states (STD) |
| **Verbs** | Actions, things a user or system can do, events that can occur | Process (DFD); Process step (swimlane); Use case (use case diagram); Relationship (ERD); Transition (STD); Activity (activity diagram); Event (event-response table) |
| **Conditions** | Conditional logic statements, if/then forms | Decision (decision tree, decision table, activity diagram); Branching (swimlane or activity diagram) |

**A real example.** Consider a needs description from the product champion for the Chemist user class. The significant **nouns**, the **verbs**, and the **conditional statements** all lead to model components:

> *A chemist or a member of the chemical stockroom can **place** a **request** for one or more **chemicals** **if the user is an authorized requester**. The request may be satisfied by **delivering** a **container** of the chemical already in the **stockroom** or by **placing** an **order** with an outside **vendor**. **If the chemical is hazardous**, the chemical can be delivered only **if the user has been trained**. The requester must be able to **search** the vendor **catalogs** online while preparing a request. The system needs to **track the status** of every chemical request from the time it is prepared until the request is either **fulfilled** or **canceled**. It also needs to track the **history** of every chemical container from the time it is received at the company until it is fully **consumed** or **disposed** of.*

From this short paragraph the BA can extract the **actors** (Chemist, Chemical Stockroom Staff, Requester), the **entities** (Chemical Request, Chemical, Container, Vendor Catalog, Order), the **use cases** (Request a Chemical, Search Vendor Catalogs), the **states** of a chemical request (prepared, fulfilled, canceled) and of a container (received, consumed, disposed), and the **decisions** (is the user authorized, is the chemical hazardous, has the user been trained).

> **Trap:** Do not assume that customers already know how to read analysis models — but also **do not conclude that they cannot understand them**. Provide product champions with a **key to the notations**, **explain the purpose and notation** of each model, and **walk through a sample model** to help them learn how to review each kind of diagram.

### Selecting models by information type

| Information to represent | Suitable representation techniques |
|--------------------------|------------------------------------|
| **System external interfaces** | Context diagrams and use case diagrams identify external objects that connect to the system; DFDs illustrate inputs and outputs at a high level of abstraction; ecosystem maps identify systems that interact even without a direct interface; swimlane diagrams show what happens during interactions between systems |
| **Business process flow** | Top-level DFDs for a high abstraction level; swimlane diagrams show participating roles; detail-level DFDs, flowcharts, and activity diagrams for detail |
| **Data definitions & data object relationships** | ERDs show logical relationships between entities; class diagrams show logical connections between object classes; data dictionaries hold detailed definitions |
| **System & object states** | State-transition diagrams and state tables; event-response tables |
| **Complex logic** | Decision trees show possible outcomes from a set of decisions; decision tables identify requirements for every combination of true and false |
| **User interfaces** | Dialog maps for a high-level view; storyboards and low-fidelity prototypes; detailed screen layouts and high-fidelity prototypes for detail |
| **User task descriptions** | User stories, scenarios, use case specifications; swimlanes, flowcharts, activity diagrams; functional requirements and test cases for the lowest level |
| **Nonfunctional requirements** | Usually written in natural language, but **Planguage** allows far more precise specification |

---

## 3. Data flow diagrams

The **data flow diagram (DFD)** is a cornerstone of structured analysis. It identifies:

- The **transformational processes** of the system — drawn as **circles (bubbles)**.
- The **collections (stores) of data or material** the system manipulates — drawn as **two parallel horizontal lines**.
- The **flows of data or material** between processes, stores, and the outside world — drawn as **arrows**.
- The **external entities (terminators)** — drawn as **rectangles**.

DFDs use a **functional decomposition** approach, subdividing a complex problem into progressive levels of detail. This works well for **transaction-processing systems** and other function-intensive applications. By adding **control flow** elements, the DFD technique is extended to model **real-time systems**.

### The special value of DFDs

> **DFDs give a holistic view of how data moves through a system — something other models do NOT show well.**

No single use case or swimlane diagram shows you the **entire life cycle of a piece of data**, because many different people and systems execute the processes that use, manipulate, and create it.

Also, **many pieces of data can be combined and transformed by a process** — for example, cart contents plus shipping information plus payment information transformed into an order object. That too is **difficult to show in other models**.

**But DFDs are not sufficient alone:** the details of how data is transformed are better shown through **the steps within a process, using use cases or swimlane diagrams**.

### DFD levels

- The **context diagram** is the **highest level of abstraction** of a DFD model: the whole system is **a single black-box process**. Flows on a context diagram often represent **composite data structures** defined in the data dictionary.
- The **level 0 DFD** partitions the system into its **major processes**. Every data flow from the context diagram **also appears** on level 0. In addition, level 0 shows the **internal data stores** — which do **not** appear on the context diagram.
- Each level 0 process can be **expanded into its own DFD** to reveal more detail. The BA continues **progressive refinement** until the lowest-level diagrams contain only **primitive operations** that can be clearly depicted with text, pseudocode, swimlane diagrams, or activity diagrams. **Functional requirements define exactly what happens inside each primitive process.**

**What arrow direction means for a data store:**

- A flow **from a bubble INTO a store** = a **write** operation.
- A flow **from a store OUT to a bubble** = a **read** operation.
- A **bidirectional** arrow between a store and a bubble = an **update** operation.

### DFD conventions

Not everyone follows the same conventions, but the following are useful. **Using models to enhance communication matters more than dogmatically obeying these guidelines.**

- **Processes communicate through data stores**, not through direct flows from one process to another.
- **Data cannot flow directly from one store to another**, nor directly between an external entity and a data store — it **must pass through a process bubble**.
- **Do not try to imply processing sequence** with a DFD.
- Name processes with a **concise action: a verb plus an object** (for example *generate reports*). Use names **meaningful to the customer** and appropriate for the business domain.
- **Number processes uniquely and hierarchically.** Use integers at level 0; the child DFD of process 3 numbers its processes 3.1, 3.2, and so on.
- **Do not draw more than 8 to 10 processes on a single diagram**, or it becomes hard to draw, change, and understand. If you have more, **group related processes** into a higher-level process.
- **A bubble with only inputs or only outputs is suspicious.** The processing a bubble represents usually needs **both inputs and outputs**.
- Each DFD level must be **balanced and consistent** with the level above: all inputs and outputs on a child diagram must match the flows on the parent. Composite data structures at a higher level can be **broken into their child elements** at lower levels.

**When customers review a DFD**, ask them to make sure all known and relevant data-manipulating processes are represented and that processes are **not missing or gaining** inputs and outputs. **Reviewing a DFD often reveals previously unrecognized user classes, business processes, and connections to other systems.**

> **A story: model the problem, not the software.** A business process reengineering team set a goal of a **tenfold reduction** in the time to incorporate a new chemical into a product. The team included a synthetic chemist, a scale-up chemist, an analytical chemist, a patent attorney, and a health and safety representative.
>
> After designing the new process and modeling it with a swimlane diagram, one member **interviewed each person responsible for each step** with **two questions**: *"What information do you need to perform this step?"* and *"What information does this step create that we should store?"*
>
> When they compared the answers across all steps, they found **steps that needed data no one had** and **steps that created data no one needed**. They fixed them all. They then drew a **DFD** illustrating the new process and an **ERD** modeling the data relationships, along with a **data dictionary** defining every data item. These models became a **communication tool** that helped the team reach a shared understanding, and a valuable **starting point** for scoping and specifying requirements for software to support the process.

---

## 4. Swimlane diagrams & process flow

**Swimlane diagrams** represent the steps in a business process or the operations of a software system. They are a **variation on the flowchart**, divided into visual elements called **lanes**. They are also called **cross-functional diagrams**, and are similar to **UML activity diagrams**.

Swimlane diagrams are most commonly used to show **business processes, workflows, or the interactions between a system and its users**.

**Relationship to other models:**

- Swimlanes can **show what happens INSIDE the process bubbles** of a DFD.
- They help **tie together the functional requirements** that let users perform a specific task.
- They are used for **detailed analysis to identify the requirements to support each process step**.

> **Swimlane diagrams are one of the EASIEST models for stakeholders to understand**, because the notation is simple and widely used. Sketching a business process as a swimlane diagram is a **great starting point for elicitation conversations**.

**The most commonly used elements:**

- **Process steps** — drawn as **rectangles**.
- **Transitions** between steps — drawn as **arrows** connecting the rectangles.
- **Decisions** — drawn as **diamonds** with multiple outgoing branches; the choices are shown as **text labels on each arrow** leaving the diamond.
- **Swimlanes** — the **horizontal or vertical lines** dividing the process. Lanes are usually **roles, departments, or systems**, indicating **who or what** performs the steps in that lane.

**How to use them to find functional requirements:** start at the first box and think about what functionality the system must have to support that step, along with **data requirements** for the objects involved. For a step like *"Receive and approve invoices"*, ask: **How is the invoice received? What is its format? Is the processing manual, or is it partly or fully automated by the system? Is data from the invoice pushed to another system?**

> **An important note on scope:** A complete business process **might not fall entirely within the scope of one software system**. For instance, a Receiving department could appear in a swimlane diagram as part of the process yet **not appear on the context diagram or DFD** because it never interacts directly with the system. **Reviewing an ecosystem map can help the team recognise that such a department has a place in the process.**

Compare the swimlane diagram to the **input and output data flows of the corresponding DFD process bubble** to make sure the two models **consume and create the same data**, and correct any errors you find. That is exactly **the power of modeling**: creating multiple representations through different thought processes to arrive at a richer understanding of the system you are building.

---

## 5. State-transition diagrams & state tables

Software systems consist of a combination of **functional behaviour, data manipulation, and state changes**.

**Real-time systems and process control applications** exist at any moment in only **one of a finite number of states**. State changes take place only when **well-defined criteria** are satisfied — such as receiving a specific input signal under certain conditions. A classic example: a **highway intersection** integrating vehicle sensors, protected turn lanes, pushbuttons, and pedestrian signals.

**Many information systems also have states**: orders, invoices, inventory items — **business objects with a life cycle** made up of a series of possible statuses.

> **The problem with text alone:** Describing a complex set of state changes in natural language creates a **high probability that you will overlook a permitted change or include a forbidden one**. Depending on how the SRS is organized, the requirements associated with state-dependent behaviour could be **scattered throughout the document**, making it hard to gain an overall understanding of system behaviour.

### The state-transition diagram (STD)

An STD contains **three kinds of elements**:

- **Possible states** — drawn as **rectangles** (some notations use circles; either is fine, just be **consistent**).
- **Allowed state changes (transitions)** — drawn as **arrows** connecting pairs of rectangles.
- **The events or conditions** that cause each transition — shown as **text labels on each arrow**. The label can state both the event and the system response.

**Termination states** are the final states an object can hold: they have **arrows coming in but no arrows going out**.

> **Customers can learn to read STDs with only a little instruction in the notation — it is just boxes and arrows.**

**Example: the seven states of a chemical request:**

| State | Meaning |
|-------|---------|
| **In Preparation** | The requester is creating a new request, launched from another part of the system |
| **Postponed** | The requester saves an incomplete request to finish later, **neither** submitting **nor** canceling it |
| **Accepted** | The requester submitted a complete request and the system accepted it for processing |
| **Placed** | The request must be fulfilled by an outside vendor and the buyer placed the order |
| **Fulfilled** | The request was satisfied, either by delivering a container from the stockroom or receiving the chemical from a vendor |
| **Back-ordered** | The vendor does not have the chemical in stock and told the buyer it is on back order |
| **Canceled** | The requester canceled an accepted request before it was fulfilled, or the buyer canceled the order |

The two **termination states** here are **Fulfilled** and **Canceled**.

### The state table

A **state table** presents all possible transitions as a **matrix**. Every state is listed in the **first column** and **repeated across the first row**. The cells indicate whether the transition from the state on the left to the state above is **valid**, and identify the **event that causes it**.

**STDs and state tables show the SAME information but serve different purposes:**

- The **state table** helps ensure **no transition is overlooked**, because the BA analyses **every cell** of the matrix.
- The **STD** helps stakeholders **visualise the possible sequences** of transitions.

You might not need to create both. But if you have created one, the other is easy to produce — useful when you want to analyse state changes from two perspectives. In a state table, **any row whose cells are all "no"** is a **termination state**.

> **Evidence of the value:** When the user representatives for the Chemical Tracking System reviewed the initial STD for a chemical request, they **identified an unnecessary state**, found that **an essential state was missing**, and pointed out **two incorrect transitions**. **No one saw those errors when reviewing the corresponding functional requirements.**
>
> This underscores the value of representing requirements information at **multiple levels of abstraction**. It is often easier to spot problems when you **step back from the details** and look at the big picture an analysis model provides.

**However, the STD does not provide enough detail** for developers to know what to build. So the SRS must still contain **functional requirements** associated with processing a chemical request and its possible state changes.

**State models give a high-level view spanning several use cases or user stories**, each of which might effect a transition. They help developers understand the intended behaviour, **facilitate early testing** because testers can derive tests covering all permitted transition paths, and help ensure **all necessary states and transitions are correctly and completely described** in the functional requirements.

---

## 6. Dialog maps

A **dialog map** represents a user interface design at a **high level of abstraction**. It shows the **dialog elements** in the system and the **navigation links** among them, but **not the detailed screen designs**.

**The conceptual foundation:** a user interface can be regarded as **a series of state changes**. At any moment, **only ONE dialog element** — menu, workspace, dialog box, command prompt, touch screen — is ready to accept user input. The user can navigate to a number of other dialog elements **depending on the actions they take** at the active input location. The number of possible navigation paths can be large, but it is **finite and generally known**.

> **A dialog map really is just a user interface modeled as a state-transition diagram.**

**The notation** is the same as a conventional STD: each **dialog element** is a **state (rectangle)**, each **permitted navigation option** is a **transition (arrow)**, and the **triggering condition** is shown as a text label on the arrow.

**Four kinds of triggering conditions:**

- **A user action** — pressing a function key, clicking a hyperlink, gesturing on a touch screen.
- **A data value** — for example, an invalid entered value triggers displaying an error message.
- **A system condition** — for example, detecting that the printer is out of paper.
- **A combination** of these — for example, typing a menu option number and pressing Enter.

### Dialog maps differ from flowcharts

Dialog maps **look like flowcharts but serve a different purpose**:

| | Flowchart | Dialog map |
|---|-----------|------------|
| Shows | Processing steps and decision points **explicitly** | Interface display elements |
| Does not show | Interface screens | The **processing** that takes place along the transition lines |
| Branch points | Visible on the diagram | **Hidden behind the screens** drawn as rectangles; the conditions leading to one screen or another appear in the **labels on the transitions** |

### How to simplify a dialog map

- **Omit global functions** such as pressing F1 for help from any dialog element. The SRS should specify that this function will be available, but **drawing many help screen boxes clutters the model while adding little value**.
- When modeling a website, **omit the standard navigation links** that appear on every page.
- You can also **omit transitions that reverse** a navigation sequence, since the **browser Back button** handles that.

### Practical value

**A dialog map lets you explore hypothetical interface concepts** based on your understanding of the requirements. Users and developers can study it to **reach a shared vision** of how the user will interact with the system to perform their tasks.

**It is also useful for modeling the visual architecture of a website** — the navigation links you build into the site appear as transitions on the dialog map. (Users have additional options through the Back and Forward buttons and the URL box, but a dialog map does not show those.)

> **The dialog map captures the ESSENCE of user-system interaction and task flow WITHOUT bogging the team down in detailed screen layouts.**

**Users can trace through a dialog map looking for missing, incorrect, or unnecessary navigations** — and therefore for **missing, incorrect, or unnecessary requirements**.

**A dialog map is a great way to represent the interactions a use case describes.** It can show alternative flows as branches off the normal flow. Sketching **dialog map fragments on a whiteboard** is useful during use case elicitation workshops as the group explores the actor action sequences and system responses.

**One important design benefit:** certain dialog map transitions let the user **back out of an operation** they are performing. **Users get frustrated if they are forced to complete a task even though they change their mind partway through.** A dialog map lets you **maximise usability by designing back-out and cancel options at strategic points**.

Users reviewing a dialog map can discover missing requirements. For example, a careful user might want to **confirm an action that would cancel an entire request** to avoid unintended data loss. **Adding this functionality at analysis time is much cheaper than building it into a finished product.**

> **Because a dialog map represents only a conceptual view of the elements involved in the interaction, do NOT try to pin down every detail of the interface design at requirements time.** Use these models to help stakeholders reach a common understanding of the intended system functionality.

---

## 7. Decision tables & decision trees

Software is often dominated by **complex logic**, with numerous combinations of conditions leading to different behaviours. For example: if the driver presses the accelerate button on a cruise control system **and** the vehicle is in cruise mode, the system increases the speed; but if the vehicle is **not** in cruise mode, the input is ignored.

> **Developers need functional requirements that describe what the system must do under EVERY possible combination of conditions. However, it is easy to overlook a condition, leading to missing requirements — and those gaps are hard to spot when reviewing a textual specification.**

A **decision table** lists the various values for all the factors that influence the behaviour and identifies the **expected system action for each combination**. The factors can be expressed as:

- Statements with **true/false** conditions.
- Questions with **yes/no** answers.
- Questions with **more than two possible** values.

**Example: deciding whether to accept or reject a new chemical request.** Four factors influence it:

1. Is the person creating the request **authorized** to request chemicals?
2. Is the chemical **available** in the stockroom or from a vendor?
3. Is the chemical **on the hazardous list** requiring special training?
4. Has the person creating the request **been trained** to handle this type of hazardous chemical?

Each factor has two conditions, in principle giving **2⁴ = 16 combinations** of true and false, implying up to 16 distinct functional requirements.

> **In practice, however, many combinations lead to the SAME system response.** If the user is **not authorized** to request chemicals, the system will not accept the request, so the **remaining conditions become irrelevant** — shown as **dashes** in the decision table cells. The table reveals that only **five distinct functional requirements** emerge from all the combinations of conditions.

A **decision tree** represents **the same logic** as a branching tree. For the example above, the tree has **five leaf boxes** corresponding to the five possible outcomes: accepting or rejecting the request.

> **Both decision tables and decision trees are useful ways to document requirements — or business rules — WITHOUT overlooking any combination of conditions. Even a complex decision table or decision tree is EASIER TO READ than a block of repetitive textual requirements.**

---

## 8. Event-response tables

**Use cases and user stories are not always helpful or sufficient** for discovering the functionality developers must implement. This is especially true of **real-time systems**.

> **Example: a complex highway intersection** with multiple traffic lights and pedestrian signals. **There are not many use cases** for such a system: the driver wants to go straight, turn left, or turn right; the pedestrian wants to cross the road; the ambulance wants to change the light to green in its direction; law enforcement might install cameras to photograph the license plates of red-light runners. **This information alone is NOT enough for developers to build the right functionality.**

**An alternative approach: identify the external events to which the system must respond.**

An **event** is some change or activity that takes place in the user environment that **stimulates a response** from the software system. An **event-response table** lists all such events along with the behaviour the system is expected to exhibit in reaction to each.

**Three kinds of system events:**

| Kind | Definition | Examples |
|------|-----------|----------|
| **Business event** | A user action that stimulates a dialog with the software, such as when a user initiates a use case | The corresponding event-response sequences correspond to the steps in a use case or a swimlane diagram |
| **Signal event** | The system receives a control signal, data reading, or interrupt from an external hardware device or another software system | A switch closes, a voltage changes, another application requests a service, a user swipes a finger on a tablet screen |
| **Temporal event** | Triggered by time | The computer clock reaches a defined time (launching an automated data export at midnight), or an interval has elapsed since a previous event (logging the temperature every 10 seconds) |

**The key point about event-response tables:**

> **The expected response depends NOT ONLY on the event but also on the STATE of the system at the moment the event takes place.**

For instance, with an automobile windshield wiper system, the driver setting the switch to intermittent leads to **slightly different behaviour** depending on whether the wipers are **on or off** at that moment. The response could just **change some internal information** in the system, or it could produce **an externally visible result**.

**Other information you can add to the table:**

- **Event frequency** — how many times the event happens in some period, or limits on how often it can occur.
- The **data elements** needed to process the event.
- The **system state after** the responses have been performed.

**Two uses:**

- **A scoping tool:** listing the events that cross the system boundary is a useful scoping technique.
- **Specifying functional requirements:** an event-response table that defines **all possible combinations of events, states, and responses, including exception conditions**, can serve as **part of the functional requirements** for that area of the system.

> **But the BA still has to supply more functional and nonfunctional requirements.** With the wiper example: **how many cycles per minute** do the wipers make at slow and fast speed? Is the intermittent mode **continuously variable**, or does it have discrete settings? What is the **minimum and maximum delay** between intermittent wipes? If you leave out this kind of information, **the developer either has to hunt it down or make it up**.

**A big advantage in design independence:** the events in the table describe the **essence of the event, not implementation details**. The wiper table **says nothing about what the wiper controls look like** or how the user operates them. A designer could satisfy these requirements with anything from a **conventional steering-column stalk** to **recognising spoken commands**: *"wipers on"*, *"wipe faster"*, *"wipe once"*. **Writing requirements at this essential level avoids imposing unnecessary design constraints** — but do **record any known design constraints** to guide the designer thinking.

---

## 9. UML & modeling on agile projects

### UML

Many projects use **object-oriented analysis, design, and development** methods. **Objects** generally correspond to items in the real world of the business or problem domain. They represent individual instances created from a general template called a **class**. A class description includes **both its attributes (data) and the operations** that can be performed on those attributes.

> **Products developed using object-oriented methods do NOT demand a distinctive requirements development approach.** The reason: requirements development focuses on **what users need to do** with the system and what functionality it must contain, **not how it will be built**. **Users do not care about objects or classes.**

That said, if you know you will build the system using object-oriented techniques, it can be useful to **begin identifying classes along with their attributes and behaviours during requirements analysis**. It facilitates the **transition from analysis to design**, when designers map problem-domain objects to system objects and further detail the attributes and operations of each class.

**UML (Unified Modeling Language)** is the standard object-oriented modeling language. It is **used primarily to create design models**. At an abstraction level suitable for requirements analysis, **four UML models** are useful:

- **Class diagrams** — show the object classes in the application domain; their attributes, behaviours, and properties; and the relationships among the classes. Class diagrams can also be used for data modeling, though **this limited use does not exploit their full semantic power**.
- **Use case diagrams** — show the relationships between external actors and the use cases they interact with.
- **Activity diagrams** — show how the flows in a use case interweave, or which role performs which actions (like a swimlane diagram), or model business process flow.
- **State diagrams (state machine diagrams)** — represent the different states a system or a data object can hold, and the allowed transitions.

### Modeling on agile projects

> **EVERY project should exploit requirements models to analyse requirements from multiple perspectives, regardless of the development approach.**

**The choice of which models to use is likely the SAME on traditional and agile projects.** The differences lie in **WHEN the models are created** and **how much detail** they include.

Practical examples on an agile project:

- Sketch a **level 0 DFD early** in the project.
- **During each iteration**, draw a more detailed DFD **covering only the scope of that iteration**.
- Create models in a **less durable or less polished format**: sketch on a whiteboard and **take a photograph**, without necessarily storing them in a formal requirements document or modeling tool.
- As user stories are implemented, **update the models** — perhaps using **colour to indicate the degree of completeness**. This both shows what is being implemented in the iteration and **reveals missing user stories** needed to complete the picture.

> **The key when using analysis models on agile projects — and really on ANY project — is to focus on creating ONLY the models you need, ONLY when you need them, and ONLY to the level of detail necessary to ensure stakeholders adequately understand the requirements.**

**User stories are not always sufficient** to capture the level of detail and precision needed on an agile project. **Do not rule out any model just because you are on an agile project.**

---

## 10. Modeling data relationships & the data dictionary

**Information systems provide value by manipulating data.** Whether the data represents pixels in a game, packets in a telephone call, quarterly sales figures, or bank account activity, **software functionality is specified to create, modify, display, delete, process, and use data**.

**A good starting point is the input and output flows on the context diagram** — they represent the major data elements at a high level of abstraction, which the BA can refine progressively into detail. The **nouns** users mention during elicitation often point to important data entities.

### Entity-relationship diagrams

**A data model** gives a **high-level view** of a system data; the **data dictionary** gives the **detailed view**.

The **ERD** is a commonly used data model. Whether you are doing analysis or design depends on the content:

- An ERD that represents **logical groups of information from the problem domain** and their connections → you are using it as a **requirements analysis tool**. It helps you understand and communicate the data component of the business or system **without implying that the product necessarily has a database**.
- An ERD created during **design** defines the logical or physical structure of the database.

**The elements:**

- **Entities** — drawn in **rectangles**; they can represent physical objects (including people) or collections of data important to the business. In relational database design, entities usually become **tables**.
- **Attributes** — each entity is described by one or more attributes; different instances of an entity have different attribute values. **Precise attribute definitions live in the data dictionary**, which helps ensure that entities in the ERD and the corresponding data stores in the DFD are **defined identically**.
- **Relationships** — drawn in **diamonds** (Peter Chen notation); they identify the logical linkages between pairs of entities.

> **A naming tip:** Name the relationship in a way that describes the nature of the connection. Some conventions suggest naming the diamond *"is placed by"*, but that **only makes sense read left to right**. If you redraw the diagram and swap the relative positions of the two entities, *"is placed by"* is **wrong** read left to right. **It is better to name the relationship *"placing"***, then rephrase it grammatically — *"places"* or *"is placed by"* — as you read the sentence.

**Cardinality (multiplicity)** — the number of instances of each relationship, shown on the lines connecting entities and relationships. Different ERD notations use different conventions:

- **Peter Chen notation:** writes **1** and **M** (many) on the connecting lines.
- **James Martin notation:** entities are still rectangles, but relationships are **labelled on the connecting lines**; a **vertical bar** next to an entity means a cardinality of one, a **crow foot** means many, and a **circle** next to a crow foot means **zero or many**.

Three kinds of cardinality: **one-to-one**, **one-to-many**, and **many-to-many**. If you know a cardinality more precisely than *"many"* (for example, a person has exactly two biological parents), **show the specific number or range** rather than a generic M.

**When customers review an ERD**, ask them to check whether all the relationships shown are **correct and appropriate**, whether **any entities are missing**, and whether there are **possible relationships between entities** the model does not show.

### Class diagrams for data modeling

Teams using object-oriented methods will draw a **UML class diagram**, showing the data attributes of each class, the logical connections between classes, and the cardinality of those connections. The notation **`1..*`** means *"one or many"*.

**Class diagrams also list the attributes** of each class in the **middle portion** of the rectangle. Note: when a class diagram is used for object-oriented analysis or design, the **bottom portion** of the rectangle shows the **operations (behaviours)** the class objects can perform. **When used for data modeling, that third section is left blank.**

> **Which notation you use matters far less than everyone on the project — ideally in the whole organization — following ONE notation convention, and everyone who must review or use the models knowing how to interpret them.**

**Important: the system must also contain functionality to do something useful with the data.** **The relationships among the entities often reveal that functionality.** For example, if there is a *"tracking"* relationship between the Chemical Container and Container History entities, you will need functionality — expressed through use cases, user stories, or process flows — that lets the user **access the history of a specific container**. When analysing requirements with the help of a data model, you might even **discover unnecessary data** that came up in discussions but is not used anywhere.

### The data dictionary

The **data dictionary** is a collection of detailed information about the data entities used in the application: **their composition, data types, lengths, formats, and allowed values**.

> **A true story about the cost of no data dictionary.** A team of three developers occasionally, inadvertently used **different variable names, lengths, and validation criteria for the SAME data item**. In fact, one developer used **two different lengths** for the variable that held a user name in **two programs he wrote himself**.
>
> **Bad things can happen when you convert back and forth between data items of different lengths:** you can **overwrite other data**, **pick up garbage padding characters** at the end, have **improperly terminated character strings**, and even **overwrite program code**, ultimately causing **system crashes**. As soon as the team began defining and managing their data more rigorously, **all those problems went away**.

**The benefits:**

- Consolidating information about composition, data types, and allowed values into **one shared resource** establishes the **data validation criteria**, helps developers write correct programs, and **minimises integration problems**.
- **Data definitions are often reusable across applications**, especially within a product line. Using consistent definitions enterprise-wide **reduces integration and interface errors**. Where you can, **refer to standard definitions** from an enterprise knowledge repository and keep only a small project-specific set to fill gaps.
- **A separate data dictionary makes it easy to find the information you need** while **avoiding redundancy and inconsistency**.

> **A cautionary story:** A reviewer once examined several use case specifications that listed the data elements making up certain data structures. **Unfortunately, the composition was NOT the same everywhere it appeared.** Inconsistencies like these force developers or testers to **hunt down which definition — if any — is correct**. It is also hard to maintain the integrity of duplicated data structures as they evolve. **Compiling or merging the information so each definition has just ONE instance that all stakeholders can access solves these problems.**

**Timing and maintenance:** During requirements analysis, the information in the data dictionary **represents the data elements and structures of the APPLICATION DOMAIN**. This information flows into design as **database schemas, tables, and attributes**, ultimately leading to **variable names in programs**.

> **The time you invest in creating a data dictionary will be more than repaid by avoiding the errors that can arise when different parties understand the data differently. If you keep it current, it will remain a valuable tool throughout the operational life of the system and beyond.**
>
> **If you do NOT keep it current**, it will **misleadingly suggest information that is out of date**, and **team members will stop trusting it**. Maintaining a data dictionary is **a serious investment in quality**.

**Organization:** arrange entries in **alphabetical order** so readers can find them easily.

### Three kinds of data dictionary elements

**Primitives** — cannot or need not be decomposed further. Other data dictionary columns describe the **data type, length, range of values, list of allowed values**, and other pertinent attributes.

**Structures (records)** — made up of multiple data elements. The *"Composition"* column lists the elements that make up the structure, **separated by plus signs (+)**. Structures can also **contain other structures**. Every element that appears in a structure **must also have its own definition** in the data dictionary.

- If an element in a structure is **optional** (the user or system is not required to supply a value), **enclose it in parentheses**.

**Repeating groups** — if multiple instances of an element can appear in a structure, **enclose the element in braces `{ }`**. The permitted number of repetitions is written as **`minimum:maximum`** ahead of the opening brace.

- For example **`1:10{Requested Chemical}`** means a chemical request **must contain at least one chemical** but **may not contain more than 10**.
- If the **maximum number of repetitions is unlimited**, use **`n`**: `3:n{something}` means the structure must contain at least three instances with **no upper bound**.

**Hyperlinks are very handy** in the data dictionary layout — or better, store the information in a tool that lets you define links. Readers can **click a link to jump to the definition** elsewhere in the data dictionary. Navigation links are **especially useful in a large data dictionary** that could span many pages, or several documents if your project incorporates definitions from an enterprise-level data dictionary. **Provide hyperlinks for every item appearing in a "Composition" column that is defined in the data dictionary.**

### Precise data definition is harder than it looks

> **Consider a simple data type like "alphabetic characters".** Are names **case sensitive**, so that *"Karl"* differs from *"karl"*? Should the system **convert text to all uppercase, all lowercase, retain** the value as looked up or entered, or **reject** input that does not match the expected format? Are **characters other than the 26 English letters** allowed, such as spaces, hyphens, periods, or apostrophes — all of which could appear in a person name? Is **only the English alphabet** permitted, or are alphabets with **diacritical marks** — tildes, umlauts, acute and grave accents, cedillas — usable?
>
> **Precise definitions like these are essential so developers know EXACTLY how to validate entered data.** The **display format** of a data element adds yet another level of variability — there are numerous ways to display timestamps and dates, with different conventions in different countries.

---

## 11. Data analysis & specifying reports

### Data analysis and the CRUD matrix

When performing **data analysis**, you can **map different representations of the information to one another** to look for gaps, errors, and inconsistencies:

- **Entities in the ERD** are likely defined in the **data dictionary**.
- **Data flows and data stores in a DFD** are probably somewhere in the **ERD**, as well as in the **data dictionary**.
- **Fields shown in a report specification** should also appear in the **data dictionary**.

**Compare these complementary views to identify errors and further refine your data requirements.**

A **CRUD matrix** is a rigorous data analysis technique for **detecting missing requirements**. CRUD stands for **Create, Read, Update, Delete**. The matrix **correlates system actions with data entities**, showing where and how each significant data entity is created, read, updated, and deleted.

**Extended variants:** some people add **L** to indicate an entity appears in a selection **List**, **M** to indicate **Moving** data from one location to another, and sometimes a second **C** for **Copy**.

**The kinds of correlations you can analyse:**

- Data entities and **system events**.
- Data entities and **user tasks or use cases**.
- **Object classes** and use cases.

**How to use it:** after creating the CRUD matrix, look for **any of the four letters that do NOT appear in any cell of a column**.

> **An example showing the power of the technique.** In a CRUD matrix for the Chemical Tracking System, **no cell under the Requester column contained a D** — meaning **no use case can delete a Requester** from the list of people who have ordered chemicals. There are **three interpretations**:
>
> 1. Deleting a Requester **is not expected functionality** for the system.
> 2. We are **missing a use case** to delete a Requester.
> 3. The *"Edit Requesters"* use case (or another one) **is incomplete** — it should have permitted the user to delete a Requester, but that functionality is missing.
>
> **We do not know which interpretation is correct, but CRUD analysis is a very powerful way to detect missing requirements.**

### Specifying reports

Many applications generate **reports** from one or more databases, files, or other information sources. Reports can be **traditional row-and-column tables**, **charts and graphs of all types**, or **any combination**.

> **Report specification straddles the requirements/design boundary:** *what information goes into the report and how it is organized* is a **requirement**; *what the report looks like* is **design**.

**Elicitation questions about usage context:**

- What is the report **name**?
- What is its **business purpose or intent**? How will the recipient **use the information**? **What decisions** will be made from the report, and **by whom**?
- Is the report generated **manually**? If so, **how often**, and **which user classes** generate it?
- Is the report generated **automatically**? If so, how often, and **what condition or event triggers** it?
- What is the **typical and maximum size** of the report?
- Is a **dashboard** needed to display multiple reports and charts? If so, does the user need to **drill down or roll up** any elements?
- **Where does the report go after it is generated?** Is it displayed on screen, sent to a recipient, exported to a spreadsheet, or printed automatically? Is it **stored or archived** for later retrieval?
- Are there **security, privacy, or governance restrictions** that limit access to the report, or **limit the data included based on who is generating it**? Identify the **business rules related to security**.

**Questions about the report itself:**

- What are the **data sources** and the **selection criteria** to retrieve data from the repository?
- **What parameters can the user select?**
- What **calculations or data transformations** are needed?
- What are the **sorting, page-break, and totalling** criteria?
- How should the system respond if a query **returns no data**?
- Should the underlying report data be made available to users for **ad hoc reporting**?
- Could this report serve as a **template for a group of similar reports**?

**Elicitation questions about existing reports:**

- Which reports are you **currently using**? (Some reports from an existing system or produced manually **will need to be reproduced** in the new system.)
- Which reports **need to be modified**? (A new system project is an opportunity to update reports that no longer meet current needs.)
- Which reports **are being generated but NOT used**? (You probably do not need to build those into the new system.)
- Are there any **departmental, organizational, or government standards** the reports must comply with? (Get copies of those standards and examples of current reports that meet them.)

### Considerations when specifying reports

**1. Consider variations.** When a user requests a specific report, the BA can **suggest variations** to see whether changes or additions increase business value. A simple variation is **sorting the data in a different order** — provide order-by capabilities on data elements beyond those the user originally requested. Consider giving users a tool to **specify the column order themselves**. Another kind of variation is **summarizing or drilling down**: a summary report aggregates detailed results into a condensed, higher-level view; *"drilling down"* means generating a report that shows the underlying detail behind the summarized data.

**2. Locate the data.** Ensure the **data needed to populate the report is available to the system**. Users think in terms of **producing the output they want**, which implies certain inputs and sources. This analysis can **reveal previously unknown requirements** for accessing or generating the necessary data. Identify any **business rules that will be applied to calculate output data**.

**3. Anticipate growth.** Users request reports based on their **initial vision** of the amount of data or number of parameters involved. **As the system grows over time, an initial layout that worked well with a small amount of data can become unusable.** For instance, a column layout for a certain number of departments fits on one page; **doubling the number of departments** could lead to awkward page breaks or horizontal scrolling. You might need to **change the layout from portrait to landscape**, or **transpose the information from columns to rows**.

**4. Look for commonalities.** Many users — or even the same user — could request reports that are **similar but not identical**. Look for opportunities to **consolidate these variations into ONE report** that provides enough flexibility to satisfy diverse needs, **without demanding redundant development and maintenance effort**. Sometimes the variations can be handled with **parameters**.

**5. Distinguish static from dynamic reports.**

- A **static report** prints or displays data **at a moment in time**.
- A **dynamic report** provides an **interactive, real-time view** into the data; as the underlying data changes, the system **automatically updates** the display. Example: while viewing an expense report in accounting software, you enter a check you just wrote and the expense report **updates immediately**.

**6. Prototype reports.** It is often valuable to create a **mock-up illustrating one possible approach** to stimulate user feedback, or to use a **similar existing report** to illustrate the desired layout. **Use plausible data in the mock-up** so the prototype experience is realistic to evaluators.

**A report specification template** should include: Report ID; Report Title; Report Purpose; Decisions Made from Report; Priority; Report Users; Data Sources; Frequency and Disposition; Latency; Visual Layout; Header and Footer; Report Body (record selection criteria, fields to include, column and row heading names and formats, layout, display format for each field, handling of numeric and text overflow, calculations, sort criteria, filter criteria, groupings and subtotals, pagination criteria); End-of-Report Indicator; Interactivity; Security Access Restrictions.

**Note:** some elements are identified during elicitation; others are established during design. **Requirements can specify report CONTENT, while the design process establishes the precise layout and format.** Existing report standards might already cover some items. **Not every element applies to every report.**

### Dashboards

A **dashboard** is a display screen or printed report that uses **multiple textual and graphical data representations** to provide a **consolidated, multifaceted view** of what is happening in an organization or a process.

Companies often use dashboards to aggregate information about **sales, expenses, and key performance indicators (KPIs)**. Stock trading applications display **an array of charts and data that is overwhelming to a novice**, yet a skilled eye can scan and process it **in a glance**. Some dashboard displays can be **dynamically updated in real time** as the input data changes.

**A sequence of elicitation and analysis activities for specifying a dashboard** — many of these steps are also useful when specifying individual reports:

1. **Identify the information users need** to make certain decisions or choices. Understanding how the data will be used helps you **select the most appropriate display technique**.
2. **Identify the sources of all the data** to be presented, to ensure the application can access those feeds and that you know whether they are **static or dynamic**.
3. **Choose the most suitable display type** for each set of related data: a simple data table, an editable spreadsheet with formulas, a text block, a bar chart, a pie chart, a line graph, a video display, or one of many other options.
4. **Determine the optimal layout and relative sizes** of the displays, based on how the user **absorbs and applies** the information.
5. **Specify each display in detail** — treat each one as its own **miniature report**.

**Additional questions to explore for dashboards:**

- If the displayed data is **dynamic**, how often and **in what fashion** must it be refreshed or supplemented? For example, does existing data **scroll to the left** as new information is added at the right edge of a fixed-width window?
- **What parameters should the user be able to change** to customise a display, such as a date range?
- Do users want **conditional formatting** so parts of a display change based on the data? This is useful for progress or status reports: **green** if the data meets *"good"* criteria, **yellow** for *"needs attention"*, and **red** for *"serious problem"*.
  > **An accessibility note: when using colours in a display, use PATTERNS as well** to accommodate viewers who have difficulty distinguishing colours and those who print and distribute black-and-white copies.
- Which displays need **horizontal or vertical scroll bars**?
- Should users be able to **enlarge** a display to see more detail? Should they be able to **shrink or close** a display to free up screen space? How should the user customisations **persist across sessions**?
- Do users want to **change the appearance** of any display, such as toggling between **tabular and graphical views**?
- Do users want to **drill down** within any display to see more detailed reports or the underlying data?

> **Prototyping a dashboard is a great way to work with stakeholders** to ensure the layout and presentation style meet their needs. You could **sketch the display components on sticky notes** and let stakeholders **move them around** until they find a layout they like. **Iteration is the key** both to refining requirements and to exploring design options.

**The overarching principle:** as always with requirements specification, **the amount of detail to provide when specifying a report or dashboard depends on WHO is making decisions about their appearance and WHEN those decisions are made**. **The more willing you are to delegate detail to designers, the less information you need in the requirements.** And as always, **close collaboration among the BA, user representatives, and developers** helps ensure everyone is happy with the outcome.

---

## Key takeaways

- **No single view of requirements is complete** — create multiple representations and compare them to find errors.
- Analysis models should **supplement, not replace** a natural-language specification.
- **Clearly mark each diagram as an analysis model or a design model**, since they use the same notations.
- *"Our system is too complex to model"* is self-defeating: **a model is simpler than the system it models**.
- **Nouns → entities/actors/data stores; verbs → processes/use cases/transitions; conditions → decisions.**
- On DFDs: **processes communicate through data stores**, never directly; **do not draw more than 8–10 processes** per diagram.
- **A bubble with only inputs or only outputs is suspicious.**
- **DFDs show the entire life cycle of data** — something use cases and swimlanes cannot.
- **Swimlanes are the easiest model for stakeholders**; a business process can extend beyond the software scope.
- **State tables ensure no transition is overlooked; STDs help visualise transition sequences.**
- Reviewing the Chemical Tracking System STD **found errors that reviewing the functional requirements did not**.
- **A dialog map is a user interface modeled as an STD**; unlike a flowchart it **hides the processing** behind the screens.
- Dialog maps help you design **back-out and cancel options** — users hate being forced to complete a task.
- **A decision table collapses 16 combinations to 5 distinct requirements** using dashes for irrelevant conditions.
- **Event-response tables are essential for real-time systems** where use cases fall short; the response depends on **both the event and the state**.
- **Object-oriented development does not demand a distinct requirements approach** — users do not care about classes.
- On agile projects, **the models are the same; the timing and level of detail differ**.
- **Name ERD relationships as "placing"**, not *"is placed by"*, so they read correctly in either direction.
- In a class diagram used for **data modeling**, the **operations section is left blank**.
- **A data dictionary prevents variable-length errors that overwrite data and crash systems.**
- Data dictionary notation: **`+`** for composition, **`( )`** for optional, **`{ }`** for repeating groups, **`min:max`**, **`n`** for unlimited.
- **A CRUD matrix detects missing requirements** — a column with no D could mean a missing delete use case.
- **Report content is a requirement; the precise layout is design.**
- Ask which reports **are generated but not used** — you probably do not need to build them.
- When using **colour** in a dashboard, **also use patterns** for viewers who cannot distinguish colours and for black-and-white printing.

## Summary

- Select models based on **what kind of information you need to represent, analyse, or explore**, and focus on the **most complex, risky, and uncertain** parts.
- **Listen for key words** in the customer voice and translate them into specific model components.
- Models **cross-check each other**: compare DFDs with swimlanes, context diagrams with event lists, ERDs with the data dictionary.
- **Models reveal errors that text conceals**, because they show you the forest instead of individual trees.
- **Data is central**: model relationships with ERDs, define them precisely in a data dictionary, and find gaps with CRUD analysis.
- **Specify reports and dashboards** by starting from the **decisions the user will make** with the information.
- Whatever models you use, remember the purpose: **reaching a level of understanding and communication beyond what text or any single view can deliver**.
