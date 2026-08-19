# Business Rules

## 1. What business rules are & why they matter

Every organization operates according to an extensive set of policies, laws, and industry standards. Such controlling principles are known collectively as **business rules** or **business logic**.

Two formal definitions from the Business Rules Group:

- **From the business perspective:** *"A business rule is guidance that there is an obligation concerning conduct, action, practice, or procedure within a particular activity or sphere."* (There ought to be an explicit motivation, enforcement methods, and an understanding of the consequences if the rule is broken.)
- **From the information system perspective:** *"A business rule is a statement that defines or constrains some aspect of the business. It is intended to assert business structure or to control or influence the behavior of the business."*

> **The key point: most business rules originate OUTSIDE the context of any specific software application.**

The rule *"employees must take an annual refresher class in the safe handling of hazardous chemicals"* holds even if all chemical purchasing and dispensing is done **manually**. So **business rules are not themselves software requirements**. But they often dictate that the system must contain functionality to comply with them — and **that functionality** is the software requirement.

**Three easily confused concepts:**

| Concept | What it is |
|---------|-----------|
| **Business requirement** | A desirable outcome or high-level objective of the organization; the justification for undertaking the project |
| **Business process** | A series of activities that transform inputs into outputs to achieve a specific result |
| **Business rule** | A policy, guideline, standard, regulation, or computational formula that defines or constrains the business |

Business rules **influence** business processes by establishing vocabulary, imposing restrictions, triggering actions, and governing how computations are carried out. **The same business rule can apply to multiple processes** — manual and automated. This is precisely why business rules should be treated as a **separate set of information**.

### The cost of not managing business rules

Not all companies treat their essential business rules as the valuable enterprise asset they are. Certain departments might document their local rules, but many companies lack a unified effort to document rules in a common repository accessible to the IT organization.

The consequences of treating business rules as **corporate folklore**:

- Rules exist only **in the heads of select individuals**.
- A BA needs to know **who to call** to learn about rules affecting their project.
- Individuals can have **conflicting understandings**, which leads to different applications **enforcing the same rule inconsistently**, or overlooking it entirely.
- When those experts **leave the organization**, the knowledge goes with them.

By contrast, a master repository makes it easier for all affected projects to **learn about rules and implement them consistently**.

**A relatable example:** your organization almost certainly has security policies controlling access to information systems — minimum and maximum password length, allowed characters, required change frequency, how many failed login attempts before an account locks. Applications the organization develops **should apply these policies consistently**. Tracing each rule into the code that implements it makes it easier to update systems when the rules change, and it **facilitates code reuse** across projects.

> **Trap:** Having undocumented business rules known only to certain experts results in a **knowledge vacuum** when those experts leave.

---

## 2. Taxonomy: Facts

Numerous classification schemes have been proposed. A simple taxonomy of **five types** works for most situations: **facts, constraints, action enablers, inferences, computations**. A sixth category is **terms** — defined words, phrases, and abbreviations important to the business; you could group terms with facts, or define them in a **glossary**.

> Recording business rules **consistently** is more important than having heated arguments about precisely how to classify each one. However, a taxonomy is still helpful: it helps you **identify rules you might not have thought of otherwise**, and it gives you an idea of **how you might apply them** in an application.

**Facts** are simply statements that are **true about the business at a specified point in time**. A fact describes **associations or relationships** between important business terms. Facts about important data entities often appear in **data models**.

Examples:

- Every chemical container has a **unique bar code identifier**.
- Every order has a **shipping charge**.
- **Sales tax is not computed** on shipping charges.
- Nonrefundable airline tickets **incur a fee** when the purchaser changes the itinerary.
- Books taller than **16 inches** are shelved in the library **Oversize** section.

> **A scoping warning:** There are **countless** facts floating around a business. Collecting irrelevant facts can **bog down** business analysis. Even if they are true, it may not be obvious how the development team is to use the information.
>
> Focus on facts that are **in scope for the project**. Try to connect each fact to: the inputs and outputs on the **context diagram**, the **system events**, known **data objects**, or specific **user requirements**.

---

## 3. Constraints

A **constraint** is a statement that **restricts the actions** the system or its users are allowed to perform.

How to recognise one: someone says that certain actions **must** or **must not** or **may not** be performed, or that **only** certain people or roles can perform particular actions.

Constraints come from various origins:

**Organizational policies:**

- A loan applicant who is less than 18 years old **must have** a parent or legal guardian as cosigner.
- A library patron **may have a maximum of 10 items** on hold at any time.
- Insurance correspondence **may not display** more than four digits of the policyholder social security number.

**Government regulations:**

- All software applications **must comply** with government regulations for usage by visually impaired persons.
- Airline pilots **must receive at least 8 continuous hours of rest** in every 24-hour period.
- Individual federal income tax returns **must be postmarked** by midnight on the first business day after April 14 unless an extension has been granted.

**Industry standards:**

- Mortgage loan applicants **must satisfy** the Federal Housing Authority qualification standards.
- Web applications **may not contain** HTML tags or attributes deprecated by the HTML 5 standard.

### The roles and permissions matrix

Because so many constraints deal with **which types of users can perform which functions**, a concise way to document them is a **roles and permissions matrix**:

- **Roles** run across the columns (which can be separated into employees and non-employees).
- **System functions** run down the rows, grouped by type (system operations, operations on patron records, operations on individual items).
- An **X** in a cell indicates the role in that column **has permission** to perform the operation in that row.

### Constraints imply functionality

A constraining business rule can convey **implications for development** even when it does not translate directly into functionality.

Consider a retail store policy that **only supervisors and managers** may issue cash refunds larger than 50. If you are developing a point-of-sale application, that rule implies:

- Each user must have a **privilege level**.
- The software must **check** whether the current user is of sufficiently high privilege to perform certain actions — such as opening the cash register drawer so a cashier can issue a refund.

> **A note on the word constraint:** Software projects have many kinds of constraints.
>
> - **Project constraints** — schedule, staff, budget limits → belong in the **project management plan**.
> - **Design and implementation constraints** — conditions imposed on the builder choices → belong in the **SRS** or design specification.
> - **Business rule constraints** — restrictions on how the business operates → belong in the **business rules repository**.
>
> Whenever these are reflected in software requirements, indicate the pertinent rule as the **rationale** for each derived requirement.

---

## 4. Action enablers

An **action enabler** is a rule that **triggers some activity if specific conditions are true**.

A person could perform that activity in a manual process. Alternatively the rule might lead to specifying **software functionality** that makes the application exhibit the correct behaviour when the system detects the triggering event.

**How to recognise one:** a statement of the form ***"If <some condition is true or some event takes place>, then <something happens>"***.

The conditions leading to the action can be a **complex combination** of true and false values for multiple individual conditions. In that case a **decision table** provides a concise way to document action-enabling rules with extensive logic.

Examples from the Chemical Tracking System:

- **If** the chemical stockroom has containers of a requested chemical in stock, **then** offer existing containers to the requester.
- **On the last day of a calendar quarter**, generate the mandated OSHA and EPA reports on chemical handling and disposal for that quarter.
- **If** the expiration date for a chemical container has been reached, **then** notify the person who currently possesses that container.

### Action enablers serving commercial goals

Businesses often develop policies intended to **enhance commercial success**. Consider how an online bookstore uses action enablers to stimulate impulse purchases after a customer has asked to buy a specific product:

- **If** the customer ordered a book by an author who has written multiple books, **then** offer the other books **before completing** the order.
- **After** a customer places a book in the shopping cart, display related books that other customers also bought when they bought this one.

### When implementing a rule ruins the experience

> **A cautionary tale.** A customer redeemed frequent-flyer miles to buy a ticket for his wife. When he attempted to finalise the purchase, the website said it had **encountered an error** and told him to **call the airline immediately**. The reservation agent explained that the airline could not issue a mileage award ticket by mail or email because **he and his wife have different last names**. He had to go to the airport ticket counter and show identification.
>
> The incident resulted from a perfectly sensible **constraining business rule**: *"If the passenger has a different last name from the mileage redeemer, then the redeemer must pick up the ticket in person."* The rule is probably there for **fraud prevention**. But the software **implemented it in a way that produced usability shortcomings** and customer inconvenience:
>
> - It displayed an **alarming error message** instead of simply explaining the different-last-names issue and what to do.
> - It **wasted the time** of both the customer and the reservation agent with an unnecessary phone call.
>
> **Poorly thought-out business rule implementations can adversely affect your customer and hence your business.**

---

## 5. Inferences & Computations

### Inferences

An **inference** — sometimes called **inferred knowledge** or a **derived fact** — creates a **new fact from other facts**.

Inferences are often written in the **"if/then"** pattern also found in action enablers. **The key difference:** the *"then"* clause of an inference simply **provides a piece of knowledge**, **not an action to be taken**.

Examples:

- **If** a payment is not received within 30 calendar days after it is due, **then** the account **is delinquent**.
- **If** the vendor cannot ship an ordered item within five days of receiving the order, **then** the item **is considered back-ordered**.
- Chemicals with an **LD50 toxicity lower than 5 mg/kg** in mice **are considered hazardous**.

Note the structure: each ends by **assigning a state or classification**, not by directing the system to do something.

### Computations

**Computations** define calculations that transform existing data into new data using **specific mathematical formulas or algorithms**.

Many computations follow rules that are **external to the enterprise**, such as income tax withholding formulas.

Examples in text form:

- The domestic ground shipping charge for an order weighing more than two pounds is **4.75 plus 12 cents per ounce or fraction thereof**.
- The total price for an order is the **sum of item prices, less volume discounts, plus state and county sales taxes for the shipping location, plus shipping, plus optional insurance**.
- The unit price is reduced by **10 percent** for orders of 6 to 10 units, **20 percent** for 11 to 20 units, and **30 percent** for more than 20 units.

**A better representation:** writing computation details in natural language is often **wordy and confusing**. Consider a **mathematical expression** or a **table of rules** that is clearer and easier to maintain:

| ID | Number of units purchased | Percent discount |
|----|---------------------------|------------------|
| DISC-1 | 1 through 5 | 0 |
| DISC-2 | 6 through 10 | 10 |
| DISC-3 | 11 through 20 | 20 |
| DISC-4 | More than 20 | 30 |

> **The boundary value trap:** Watch out for **overlapping ranges** when writing a set of rules or requirements that define ranges. It is easy to inadvertently define ranges like **1–5, 5–10, 10–20**, which introduces **ambiguity** about which range the values of exactly 5 and exactly 10 fall into.

---

## 6. Atomic business rules

Suppose you ask your librarian: *"How long can I check out a DVD for?"* The reply: *"You can check out a DVD or Blu-ray Disc for one week, and you may renew it up to two times for three days each, but only if another patron has not placed a hold on it."*

The answer is **correct**, but it **combines several rules into a single statement**. Composite rules like that are:

- **Hard to understand and maintain.**
- **Hard to confirm** that all possible conditions are covered.
- If several functionality segments trace back to this complex rule, it becomes **time-consuming to find and modify the right code** when just **one part** of the rule changes.

**A better strategy: write business rules at the ATOMIC level**, rather than combining multiple details into one rule. This keeps rules short and simple, and facilitates **reusing, modifying, and combining** them in various ways.

**Rules for writing atomically** (for inferences and action enablers):

- **Do not use OR logic** on the left-hand side of an if/then construct.
- **Avoid AND logic** on the right-hand side.

Breaking the composite library rule into atomic rules:

| ID | Rule |
|----|------|
| **Video.Media.Types** | DVD discs and Blu-ray Discs are video items. |
| **Video.Checkout.Duration** | Video items may be checked out for one week at a time. |
| **Renewal.Video.Times** | Video items may be renewed up to two times. |
| **Renewal.Video.Duration** | Renewing a checked-out video item extends the due date by three days. |
| **Renewal.HeldItem** | A patron may not renew an item that another patron has on hold. |

These are called **atomic** because they **cannot be decomposed further**. You will end up with **many** atomic rules, and your functional requirements will depend on **various combinations** of them.

**A concrete maintenance benefit:** when the next generation of video technology arrives, or the library purges all its DVDs, the library **only updates Video.Media.Types** — **none of the others are affected**.

---

## 7. Documenting business rules

Because business rules can influence **multiple applications**, organizations should manage them as **enterprise-level assets**.

**A path that scales with size:**

1. A **simple business rules catalog** suffices to begin.
2. If you use a **requirements management tool**, you can store business rules as a **requirement type** — provided they are accessible to all your projects.
3. Large organizations, or those whose operations and information systems are heavily rule-driven, should establish a **business rules database**.
4. **Commercial rule-management tools** become valuable when your catalog outgrows a word processor, spreadsheet, wiki, or collaboration tool. Some **business rule management systems** contain **rules engines** that can **automate the implementation** of rules in your applications.

> **An important principle:** As you identify new rules while working on an application, **add them to the catalog** — rather than embedding them in the documentation for that specific application or, **worse**, only in its code.

Rules related to **safety, security, finance, or regulatory compliance** pose the **greatest risk** if they are not managed and enforced appropriately.

### The structure of a catalog entry

Start with a simple format with these columns:

| Column | Meaning and value |
|--------|-------------------|
| **ID** | A unique identifier, letting requirements link back to a specific rule |
| **Rule definition** | The rule text, written atomically |
| **Type of rule** | Fact, constraint, action enabler, inference, or computation |
| **Static or dynamic** | How likely the rule is to change over time |
| **Source** | Origin: management policy, government regulation, subject matter expert, document |

**Why does the static-or-dynamic column matter so much?** This information is **directly helpful to developers**. If they know that certain rules are subject to **periodic change**, they can **structure the software to make the affected functionality or data easy to update**.

The classic example: **income tax calculations change at least every year**. If the developer structures tax information into **tables or a database**, it is far easier to update those values than if they were **hard-coded** into the software.

> **The rule of thumb:** **Laws of nature** — such as calculations based on the laws of thermodynamics — can safely be hard-coded. **Laws of humans are much more volatile.**

**The source column helps** people know where to go for more information about a rule or to learn about changes.

> **Trap:** Do not make your business rules catalog **more complex than necessary**. Use the simplest form that ensures your development teams will actually **use** the rules effectively. **The business should own the rules repository, not the IT department or the project team.**

As you gain experience you can apply **structured templates** for defining rules of different types — patterns of keywords and clauses that structure rules consistently and **facilitate storing them in a database** or rules engine. Sets of related rules can also be represented with **decision trees, decision tables** (particularly with complex logic), and **roles and permissions matrices**.

---

## 8. Discovering business rules

Just as asking *"what are your requirements?"* does not help much when eliciting user requirements, asking users *"what are your business rules?"* **does not get you very far**.

Six places to look:

- **Common knowledge from the organization** — often collected from individuals who have worked with the business for a long time and **know the details of how it operates**.
- **Legacy systems** — where business rules are **embedded in requirements and code**. This requires **reverse-engineering the rationale** behind the requirements or code. This sometimes yields **incomplete knowledge**.
- **Business process modeling** — which leads the analyst to look for rules affecting **each process step**: constraints, triggering events, computational rules, and relevant facts.
- **Analysis of existing documentation** — requirements specifications from earlier projects, regulations, industry standards, corporate policy documents, contracts, business plans.
- **Analysis of data** — such as the various **states** a data object can have, and the **conditions** under which a user or system event can change that state. These authorizations can also be represented as a **roles and permissions matrix** to provide information about privilege-level and security rules.
- **Compliance departments** in companies building regulated systems.

> **An important caution:** Just because you found business rules in these sources **does not mean** they necessarily apply to your current project, or that they are **even still valid**. Computational formulas implemented in the code of legacy applications **may be obsolete**. Be sure to **confirm** whether rules gleaned from older documents and applications need updating.

Also **assess the scope of applicability** of the rules you discover: are they **local to the project**, or do they span a **business domain** or the **entire enterprise**?

### Elicitation questions from different perspectives

The BA can glean business rules during elicitation activities that also define other requirements artifacts. During interviews and workshops, **ask questions probing the rationale** behind the requirements and constraints users present — these discussions **frequently surface business rules** as the underlying reason.

If your environment has employees who deal with **particular types or classes of rules**, find out who they are and **bring them into the discussion**.

---

## 9. Business rules & requirements

Business rules and functional requirements **sometimes look a lot alike**. However:

> **Rules are EXTERNAL statements of policy that must be enforced in software — and that is what drives system functionality.**

**Every BA must decide three things:** which rules pertain to their application, which ones **must be enforced in the software**, and **how to enforce them**.

### One rule, two different implementations

Recall the constraint from the Chemical Tracking System: **training records must be current before a user can request a hazardous chemical.**

The analyst would derive **different functional requirements** depending on the environment:

| Situation | Derived functionality |
|-----------|----------------------|
| The training records database **is accessible** to the system | The system looks up the user training record and **decides itself** whether to accept or reject the request |
| The records **are not available** online | The system **stores the chemical request temporarily** and **sends a message** to the training coordinator, who can approve or reject it |

**The rule is the same in either situation**, but the **software functionality — the actions to take when the rule is encountered during execution — varies** depending on the system environment.

### From rules to features to requirements

Consider two rules:

- **Rule #1 (action enabler):** *"If the expiration date for a chemical container has been reached, then notify the person who currently possesses that container."*
- **Rule #2 (fact):** *"A container of a chemical that can form explosive decomposition products expires one year after its manufacture date."*

Rule #1 serves as the **origin** of a system feature called **"Notify chemical owner of expiration"**. Additional rules like #2 help the system determine **which containers have expiration dates**. For instance, an opened can of ether becomes **unsafe** because it can form explosive byproducts in the presence of oxygen.

Based on such rules it is clear the system must **monitor the status of containers that have expiration dates** and **inform the right people at the right time**. The BA might derive a set of functional requirements: notify the owner **one week before** the expiration date, **on** the expiration date, **one week after**, and notify the **owner manager two weeks after**.

> **A presentation tip:** Whenever you encounter a set of **very similar requirements** like these, consider laying them out in a **table** instead of a list. A table is **more compact and easier to review, understand, and modify**, and it provides a **more concise way to label** them — the table only shows the **suffixes** to append to the parent requirement label.

### Linking rules to requirements

**To prevent redundancy, do not duplicate rules from your catalog in the requirements documentation.** Instead, **refer back** to specific rules as being the source of certain functionality or algorithms. Three ways to define the links:

1. **A requirement attribute.** If you use a requirements management tool, create an attribute called **"Origin"** and indicate the rules as the origin of derived functional requirements.
2. **A traceability matrix.** Define traceability links between functional requirements and connected business rules in a **requirements traceability matrix** or **requirements mapping matrix**. This is **easiest when business rules are stored in the same repository** as the requirements.
3. **Hyperlinks.** If rules and requirements live in word processing or spreadsheet files, define **hyperlinks** from rule ID references to the rule descriptions. **Be aware that hyperlinks are prone to breaking** if the location of the rules collection changes.

**Benefits of using links:**

- Requirements **stay current** with rule changes, because they simply **point to the master instance**.
- If a rule changes, you can **search for the linked rule ID** to find requirements — or implemented functionality — you might need to change.
- It **facilitates reusing** the same rule in multiple places and projects, because rules are not buried in the documentation for any single application.

**The trade-off:** a developer reading the SRS will need to **follow the cross-referenced link** to access the rule details. This is the price of choosing **not to duplicate information**.

---

## Key takeaways

- **Business rules exist outside any application**, so they are **not software requirements themselves** — but they are the **origin** of many.
- Business rules differ from **business requirements** (objectives) and **business processes** (activity sequences).
- The five-type taxonomy: **facts, constraints, action enablers, inferences, computations** (plus **terms**).
- **Facts** describe relationships; do not collect facts outside the project scope.
- **Constraints** use the words *must, must not, only*; a **roles and permissions matrix** records them concisely.
- Distinguish three kinds of constraint: **project** (project plan), **design/implementation** (SRS), **business rule** (rules repository).
- **Action enablers** in if/then form produce an **action**; **inferences** in if/then form produce **new knowledge**.
- **Computations** are better shown as **tables or expressions** than as long prose.
- Watch for **overlapping boundary values** when defining ranges (1–5, 5–10, 10–20).
- Write rules **atomically**: no OR on the left, avoid AND on the right of if/then.
- The **static or dynamic** attribute tells developers whether to put values **in a table or database** rather than hard-coding.
- **Laws of nature can be hard-coded; laws of humans cannot.**
- Rules found in legacy systems **may be obsolete** — always confirm.
- **The same rule leads to different functional requirements** depending on the operating environment.
- **Do not copy rule text into the SRS** — link via an attribute, traceability matrix, or hyperlink.
- **The business owns the rules repository**, not the IT department.

## Summary

- Treat business rules as an **enterprise-level asset**, stored in a shared repository every project can reach.
- Use the **five-type taxonomy** not to argue about classification, but to **remind you of rules you would otherwise miss**.
- Write rules at the **atomic level** so they are easy to understand, reuse, and maintain when only one part changes.
- Record the **type, volatility, and source** of each rule — three pieces of information that directly help developers and maintainers.
- **Discover rules** from organizational knowledge, legacy systems, process models, documents, data analysis, and compliance departments.
- **Connect rules to requirements with links, not copies**, so everything stays in step as rules change.
- Remember that a **thoughtless implementation** of a perfectly sensible rule can still ruin the customer experience.
