# Voice of the User & Requirements Elicitation

## 1. What a user class is & how to classify users

People often talk about **"the user"** as though users were a monolithic group. In reality, most products of any size serve **several distinct user groups** with different expectations and goals.

A **user class** is a subset of the product users. Users can be grouped by differences in:

- **Access privilege or security level** (ordinary user, guest user, administrator).
- The **tasks** they perform during business operations.
- The **features** they use.
- The **frequency** with which they use the product.
- Their **application domain and computer experience**.
- The **platforms** they use (PC, laptop, tablet, smartphone, specialized devices).
- Their **native language**.
- Whether they interact with the system **directly or indirectly**.

One individual may belong to **multiple user classes**. An application administrator sometimes interacts with it as an ordinary user too.

> **A common mistake:** grouping users by **geographical location** or **type of company**. A banking software company initially considered distinguishing users by large commercial bank, small commercial bank, savings and loan, and credit union. But those are **market segments**, not user classes.

**The right way: classify by the TASKS they perform.** All those financial institutions have **tellers**, people who **process loan applications**, **business bankers**, and **branch managers**. People performing the same kind of work have **similar functional needs** across all the institutions. So better user class names are: *teller, loan officer, business banker, branch manager*.

**User classes need not be human beings.** They can be **software agents** performing a service on behalf of a human: bots that scan networks for information, software that monitors systems, or data-mining programs.

---

## 2. Favored, disfavored, ignored user classes & personas

Not every user class matters equally on a given project.

| Type | Meaning | How to handle |
|------|---------|---------------|
| **Favored** | Groups whose satisfaction is **most closely aligned with achieving the business objectives** | Get preferential treatment when resolving conflicts and making priority decisions |
| **Disfavored** | Groups who are **not supposed to** use the product for legal, security, or safety reasons | Deliberately build features that make it **hard** for them |
| **Ignored** | Groups who will use the product, but you do **not build specifically** for them | No special investment |
| Everyone else | Groups in none of the above | **Of equal importance** when defining requirements |

> **Important:** Favored does **not** mean the group paying for the system or the one with the most political clout. It is a matter of **alignment with the business objectives**.

**Disfavored examples:** locking an account after four unsuccessful login attempts protects against *"user impersonators"*, at the risk of inconveniencing forgetful legitimate users. A bank emailing a one-time access code when it does not recognise your computer exists because of *"people who might have stolen my banking information"*. CAPTCHA exists to block disruptive bots.

> **Trap:** Do not overlook **indirect user classes**. They will not use your application themselves, accessing its data or services through other applications or through reports. **Your customer once removed is still your customer.**

### Identifying user classes

Use the **"expand then contract"** collaboration pattern: ask the sponsor who will use the system, then brainstorm as many user classes as you can — do not worry if there are dozens at this stage. Then look for groups with similar needs that you can **combine**, or treat as one major class with several subclasses. The goal: pare the list down to about **15 user classes or fewer**.

One company that developed a specialized product for about 65 corporate customers initially regarded **each company as a distinct user**. Grouping them into **six user classes** greatly simplified their requirements challenges.

Supporting tools: **external entities on a context diagram** are candidate user classes; an **organization chart** helps discover departments that participate in or are affected by the business process.

### User personas

A **persona** is a description of a **hypothetical, generic person** who stands in for a user class. Personas make thinking about requirements **tangible** rather than vague speculation about a faceless group.

A persona can serve as a **placeholder** when the BA has no actual user representative at hand: rather than halting progress, the BA envisions the persona performing the task, drafts a requirements starting point, and confirms it when a real user is available.

An example persona for the *Chemist* user class:

> **Fred, 41**, has been a chemist at Contoso since he received his PhD 14 years ago. He **does not have much patience with computers**. Fred usually works on two projects at a time. His lab contains approximately **300 bottles of chemicals** and gas cylinders. On an average day he needs **four new chemicals**: two commercial chemicals in stock, one that must be ordered, and one from the proprietary sample supply. On occasion Fred needs a hazardous chemical requiring special safety training. When he buys a chemical for the first time, Fred wants the **material safety data sheet emailed to him automatically**. Each year Fred synthesizes about 20 new chemicals. Fred wants a **monthly chemical exposure report sent by email**.

While working, the BA can ask: ***"What would Fred need to do?"*** — far more concrete and useful than speculating about a faceless group. Make sure personas are **truly representative**, based on market, demographic, and ethnographic research rather than imagination.

---

## 3. Product champions: role, expectations & traps

A **product champion** is the primary interface between the members of **one user class** and the project BA. This model is an effective way to structure the customer-developer partnership.

Ideally the champion is an **actual user**, not a surrogate such as a funding sponsor, marketing staffer, user manager, or a developer imagining themselves as a user. Champions gather requirements from other members of the user class they represent and **reconcile inconsistencies** within that group.

Characteristics of a good product champion:

- A **clear vision** of the new system and **enthusiasm**, because they see how it benefits them and their peers.
- An **effective communicator** who is **respected by colleagues**.
- Thorough understanding of the **application domain** and the solution operating environment.

> **A note on division of labour:** Requirements development is a **shared responsibility** of the BA and the selected users — but **the BA should write the requirements documents**. It is hard enough to write good requirements if you do it for a living; it is not realistic to expect users who have never written requirements to do a good job.

**An underrated side benefit:** when colleagues wonder why the software is not done yet, a good champion **speaks up on the development team behalf**: *"Do not worry. I understand and agree with their approach. The time we are spending on requirements will help us get the system we really need and will save time in the long run."*

### Product champion activities

| Category | Activities |
|----------|------------|
| **Planning** | Refine scope and limitations; identify systems to interact with; evaluate impact on business operations; identify relevant standards and certification requirements |
| **Requirements** | Collect input from other users; develop usage scenarios, use cases, user stories; **resolve conflicts within the user class**; define priorities; provide performance and quality input; evaluate prototypes |
| **Validation** | Review requirements specifications; define acceptance criteria; develop user acceptance tests; provide test data from the business |
| **User aids** | Write portions of documentation and help text; contribute to training material; demonstrate the system to peers |
| **Change management** | Evaluate and prioritize defect corrections and enhancement requests; adjust scope of future releases; evaluate the impact of changes on users |

### Multiple champions for multiple user classes

One person can rarely describe the needs of **all** users. A system with four major user classes needs **four product champions**, not necessarily full time.

For a very large user class, the champion can assemble a **backup team** of representatives from different subclasses. This hierarchical approach engages additional users **without the expense of massive workshops or dozens of individual interviews**. The champion always strives for consensus, but **willingly makes the call** when agreement is not reached, so the project can move ahead.

### Traps to avoid

- **Managers overriding decisions** made by a qualified, duly authorized champion — leaving users dissatisfied and champions frustrated.
- A champion who **forgets they represent others** and presents only their own requirements.
- A champion who **lacks a clear vision** and defers all decisions to the BA. If every BA idea is accepted unchallenged, the champion is not helping.
- A senior user who **nominates a less experienced person** because they are busy, then still backseat-drives.
- Someone who **purports to speak for** a user class they do not belong to.

### External product champions

For commercial products it is hard to find champions outside your company. Options:

- Build on relationships with **major corporate customers** or **beta test sites**.
- Offer **economic incentives**: product discounts, or paying for their time.
- **Hire someone with the right background.** One retail company hired **three store managers** as full-time champions. A medical software company hired a **physician** to help them build software other doctors would accept.
- **Send BAs to the customer site** rather than bringing champions to yours.

> **Watch out:** Anytime the champion is a **former** or **simulated** user, beware of disconnects between their perceptions and the **current** needs of real users.

---

## 4. User representation on agile projects & resolving conflicts

Many agile methods include a **product owner** as the voice of the customer. The product owner defines the product vision and is responsible for developing and prioritizing the **product backlog**. They span **all three requirement levels** — business, user, and functional — essentially straddling the product champion and business analyst functions.

The ideal state of **one single product owner** is **not always practical**. An insurance company implementing a package solution across its whole business found the organization **too big and complex** for one person to know everything in enough detail. Their solution: a **product owner per department**, with the **CIO as lead product owner** — someone who understood the entire vision and decided when departments conflicted.

**The two models are not mutually exclusive.** If the product owner functions as a business analyst rather than as a stakeholder representative, they can set up a product champion structure. Alternatively the product owner collaborates with one or more BAs and serves as the **ultimate decision maker**.

### On-site and "on-sight"

A developer recounted writing programs for a research scientist who sat about 10 feet away. When John moved to another office — **same floor, about 100 feet away** — programming productivity **dropped immediately**, because of the cycle-time delay in getting input. Sometimes he went down the wrong path before he could get a course correction.

However, **an on-site customer does not guarantee the outcome**. A project manager reported: *"One champion sat in our midst and still managed to avoid us all. The new champion does a fine job of interacting with the developers and has truly enabled rapid development."* **There is no substitute for the right person, in the right role, in the right place, with the right attitude.**

Balance matters too: too-frequent interruptions make it hard to refocus — it can take up to **15 minutes** to reimmerse into the productive state of flow.

### Resolving conflicting requirements

| Disagreement between | How to resolve |
|----------------------|----------------|
| Individual users | Product champion or product owner decides |
| User classes | **The favored user class gets preference** |
| Market segments | The segment with the greatest impact on business success wins |
| Corporate customers | **Business objectives dictate direction** |
| Users and user managers | The product owner or champion for that user class decides |
| Development and customers | Customers get preference, **but in alignment with business objectives** |
| Development and marketing | Marketing gets preference |

Decisions should be made **as low in the organization hierarchy as possible**, by well-informed people who are **close to the issues**.

> **Trap:** Do not justify doing whatever a customer demands because *"the customer is always right"*. We all know the customer is **not** always right — sometimes they are unreasonable, uninformed, or in a bad mood. But the customer **always has a point**, and the software team must understand and respect that point.

If it is unclear who is responsible for these decisions, they fall to **developers or analysts by default** — people who usually lack the knowledge and perspective to make the best business decisions. Analysts sometimes defer to the **loudest voice** or the **person highest on the food chain**. Understandable, but not the best strategy.

---

## 5. Elicitation: what it really is

**Elicitation** is the process of identifying the needs and constraints of the various stakeholders — the **heart of requirements development**.

> **Elicitation is NOT "gathering requirements".** Nor is it transcribing exactly what users say. It is a **collaborative and analytical process** that includes activities to collect, discover, extract, and define requirements.

It is perhaps the most **challenging, critical, error-prone, and communication-intensive** aspect of software development.

Working principles:

- **Understand the thought processes** behind the requirements users state. Walk through the steps they use to make decisions, and extract the underlying logic.
- Make sure everyone understands **why** the system must perform certain functions.
- Look for requirements that reflect **obsolete or ineffective business processes or rules** and keep them out of the new system.
- Use the **vocabulary of the business domain**, not technical jargon.
- Record significant terms in a **glossary** rather than assuming shared definitions.
- Make clear that **discussing possible functionality is not a commitment** to include it.

**Elicitation techniques come in two kinds:**

- **Facilitated activities** — you interact directly with stakeholders: interviews, workshops, focus groups, observation.
- **Independent activities** — you work alone to discover information: document analysis, system interface analysis, user interface analysis.

**No project should expect to use only one technique.** There are always many types of information to discover, and different stakeholders prefer different approaches. One user can clearly articulate how they use the system; for another you must **watch them work** to reach the same understanding.

Independent activities **supplement** what users present and reveal needed functionality that **end users may not be aware of**.

Elicitation is **cyclic**: elicit → study what you learned → write some requirements → find missing information → elicit more. Do not expect to hold a couple of workshops and declare victory.

---

## 6. Interviews & workshops

### Interviews

The most obvious way to find out what users need is to **ask them**. Interviews can be one-on-one or with a small group, and are a traditional source of requirements across all product types and development approaches.

Advantages:

- **Easier to schedule and lead** than large workshops.
- **Less stakeholder time** because you discuss only the requirements important to them.
- Help you **get up to speed quickly** in a new application domain, so you can prepare draft requirements for a workshop.
- Build **rapport**: participants feel safer sharing thoughts one-on-one, especially about **touchy topics**.
- Easier to obtain **buy-in** about participating than in a larger setting.
- Appropriate for eliciting business requirements from **busy executives**.

Interview technique:

- **Establish rapport** at the start: introduce yourself, review the agenda, remind attendees of the objectives, address preliminary concerns.
- **Stay in scope.** Even with one person the conversation easily drifts.
- **Prepare questions and straw man models ahead.** People can **critique content more easily than create it** — a draft gives them a starting point.
- **Suggest ideas.** A creative BA proposes ideas and alternatives rather than merely transcribing. Sometimes users do not realise what developers can provide.
- **Listen actively**: lean forward, show patience, give verbal feedback, inquire when something is unclear, and **paraphrase** the main idea to show understanding.

### Facilitated workshops

A **requirements workshop** is *a structured meeting in which a carefully selected group of stakeholders and content experts work together to define, create, refine, and reach closure on deliverables that represent user requirements.*

Workshops have **formal roles**: a facilitator and a scribe. They suit eliciting from **multiple stakeholders concurrently**, **resolving disagreements** (a group is more effective than separate conversations), and **quick turnaround** under schedule pressure.

> **Warning:** Workshops are **resource intensive**, sometimes requiring many people for several days. Come in with **drafts prepared beforehand** — for example use cases already sketched — so the group reviews rather than creates from scratch. **Rarely does it make sense to start a workshop with a completely blank slate.**

Facilitation principles:

- **Establish and enforce ground rules**: start and end on time, return promptly from breaks, silence devices, one conversation at a time, everyone contributes, criticisms focus on issues rather than individuals.
- **Fill every role**: note taking, time keeping, scope management, ground rule management, making sure everyone is heard.
- **Plan an agenda** and share it in advance so participants can prepare.
- **Stay in scope** and at the **right level of abstraction**. Groups dive into distracting detail very easily.
- **Use parking lots** — flipcharts capturing important but off-topic information (quality attributes, business rules, UI ideas). This loses nothing and **shows respect** for whoever raised it.
- **Timebox discussions.** Before closing a timed-out topic, summarise status and next steps.
- **Keep the team small but include the right stakeholders.** Workshops with more than **five or six active participants** become mired in side trips, concurrent conversations, and bickering. Consider running **multiple workshops in parallel** for different user classes.

> **A true story:** A use case workshop for a website project had **12 participants** and progressed at a sluggish, contentious crawl. Reducing it to about **six people** representing key roles made progress accelerate dramatically. The workshop lost some input, but **the rate of progress more than compensated**.

- **Keep everyone engaged.** When someone stops contributing, read the body language (lack of eye contact, fidgeting, sighing, checking the clock) and find out why. They may feel their input is not taken seriously, may not want to disrupt completed work, or may be deferring to a domineering participant. On a teleconference there are no visual cues — **listen carefully for who has gone quiet**.

**When conflicts erupt:** deal with it immediately. Understand the cause; when the group is clear on the reason, a solution usually follows. If an individual simply will not participate productively, talk privately to determine whether their presence prevents the group from moving forward.

---

## 7. Focus groups & observation

### Focus groups

A **focus group** is a representative group of users convened in a facilitated activity to generate input and ideas about a product functional and quality requirements.

- Must be **interactive**, giving everyone a chance to voice their thoughts.
- Particularly valuable for **commercial products** where you lack ready access to end users inside your company.
- Useful for exploring user **attitudes, impressions, preferences, and needs**.
- Select members carefully: include people who used previous versions or similar products. Either hold multiple focus groups of one user class each, or one pool representing the full spectrum.
- **Do not expect quantitative analysis** — the output is a lot of subjective feedback that must be further evaluated and prioritized.
- Focus group members normally **do not have decision-making authority**.

> **Warning:** Make sure the focus group represents the kinds of users whose needs should drive your product. If it only includes **early adopters** or blue-sky thinkers, you may end up with many sophisticated, technically difficult requirements that **few customers find useful**.

**A real example:** a company asked a focus group to perform tasks with various digital cameras and computers. The results showed the company software took **too long** for the most common operation, because of a design decision made to accommodate less likely scenarios too. The company changed its next camera to reduce complaints about speed.

### Observation

When you ask users to describe how they do their jobs, the description is usually **imprecise or incomplete**. Why: tasks are complex and hard to recall fully, users are so familiar they **cannot articulate** it, or the task is so habitual they no longer think about it.

> **The classic example:** try telling a friend the steps to bake a cake from a mix. You will remember turning on the oven, getting out dishes, adding ingredients, mixing, preparing the pan, and baking. But when you said *"add each ingredient"*, did you remember to say **open the bag with the mix in it**? Did you say **crack the eggshell, add only the contents, and discard the shell**? Those seemingly obvious steps are **not obvious** to someone who has never baked.

Practice guidelines:

- **Limit each observation to two hours or less** so you do not disrupt the user regular work.
- Select **important or high-risk tasks** and multiple user classes.
- On agile projects, have the user demonstrate only tasks related to the **forthcoming iteration**.
- **Silent observation** when busy users cannot be interrupted; **interactive observation** when you need to ask immediately why they made a choice.
- Document what you observe; consider video recording if policies allow.

Observation helps **validate information** from other sources, identify new interview topics, see problems with the current system, and find ways the new system can better support the workflow. The BA must **abstract and generalize** beyond one individual so the requirements apply to the whole user class.

**A real example:** a team building a call-centre application for representatives who had to page through printed catalogs heard every representative say how difficult the paging was. Only by **sitting with them while they took real orders** did the team see the real difficulty: first find the right catalog by date, then locate the right product. The observation sessions showed what features an online catalog needed.

---

## 8. Questionnaires & the independent analysis techniques

### Questionnaires

**Questionnaires** survey large groups of users. They are **inexpensive**, a logical choice for large user populations, and **easy to administer across geographical boundaries**. Analysed results feed other techniques — for example use a questionnaire to identify the biggest pain points with an existing system, then discuss prioritization in a workshop.

**Writing good questions is the biggest challenge:**

- Provide answer options that **cover the full set** of possible responses.
- Make choices **mutually exclusive** (no overlapping numeric ranges) **and exhaustive** (list every possibility, or provide a write-in).
- **Do not phrase a question in a way that implies a "correct" answer.**
- Use **scales consistently** throughout.
- Use **closed questions** with two or more choices if you want statistical analysis. Open-ended questions make it hard to find commonalities.
- **Always test a questionnaire before distributing it.** It is frustrating to learn too late that a question was ambiguous or that an important one was omitted.
- **Do not ask too many questions** or people will not respond.
- Consider consulting a **questionnaire design expert** to be sure you ask the right questions of the right people.

### System interface analysis

**System interface analysis** is an independent technique: examine the systems your system connects to. It reveals functional requirements about the **exchange of data and services** between systems.

**Context diagrams** and **ecosystem maps** are the obvious starting point. In fact, if you find an interface with associated requirements that does **not appear** on those diagrams, the diagrams are **incomplete**.

For each connected system, identify functionality there that might create requirements for yours: what data to pass out, what data comes in, and **rules about that data** such as validation criteria.

> **The biggest payoff is discovering functionality you do NOT need to build.** For instance, you might think you need validation rules for a shopping-cart order in an e-commerce site before passing it to an order-management system. Through analysis you learn that **multiple systems pass orders there and that system performs the validation** — so you do not need to build it.

### User interface analysis

**User interface analysis** studies existing systems to discover user and functional requirements. It is best to interact with the existing system directly; otherwise use screen shots. For purchased packages, the vendor user manuals often contain screen shots that work fine as a starting point. If no system exists, look at the interfaces of **similar products**.

Benefits: it identifies a **complete list of screens** to reveal potential features; you learn the common steps users take so you can draft use cases; it reveals pieces of data users need to see; and it is a great way to **get up to speed** on how an existing system works.

> **Two warnings:** (1) **Do not assume** functionality is needed in the new system just because you found it in an existing one. (2) **Do not assume** the interface must look or flow the way the current one does.

### Document analysis

**Document analysis** examines existing documentation for potential requirements: old requirements specifications, business process descriptions, lessons-learned collections, user manuals for existing or similar applications, corporate and industry standards, regulations, comparative reviews of competing products, and problem reports and enhancement requests from the help desk.

For a replacement system, past documentation can reveal **functionality to retain** as well as **obsolete functionality**. For packaged solutions, vendor documentation mentions functionality your users might need, though you must still explore how to implement it in the target environment.

**A particular strength:** document analysis reveals **information people do not tell you** — because they do not think of it, or because they are not aware of it themselves. When building a new call-centre application you might find **complex business logic** described in the existing application user manual that users do not even know exists.

> **Risk:** documentation may be **out of date**. Requirements may have changed without the specification being updated, or documented functionality may no longer be needed.

---

## 9. Planning elicitation

Early in a project the BA should plan the elicitation approach. Even a simple plan increases the chance of success and **sets realistic expectations**. Only by gaining explicit commitment on resources, schedule, and deliverables can you avoid having participants pulled away to other work.

The plan should address:

- **Elicitation objectives** — for the whole project and for each planned activity.
- **Strategy and planned techniques** — which techniques suit which stakeholder groups, depending on access to stakeholders, time constraints, and your knowledge of the existing system.
- **Schedule and resource estimates** — both customer and development participants, with effort and calendar estimates. You may initially identify only **user classes** rather than named individuals, but that already lets management plan resource needs. Remember to estimate **preparation and follow-up analysis time**.
- **Documents and systems needed** for independent elicitation, so you have them when required.
- **Expected products** — knowing you will produce a list of use cases, an SRS, questionnaire analysis, or quality attribute specifications helps you target the right stakeholders, topics, and level of detail.
- **Elicitation risks** — factors that could impede progress, their severity, and how to mitigate them.

> **A common failure:** Many BAs have a **go-to technique** — usually interviews and workshops — and do not think to use others that could reduce resource needs or increase information quality. **Rarely will one technique alone give the best results.**

Suggested techniques by project characteristic:

| Project characteristic | Techniques most likely to help |
|------------------------|--------------------------------|
| New application development | Interviews, workshops, system interface analysis |
| Mass-market software | **Focus groups** rather than workshops, since the user base is large but representatives are hard to reach |
| Replacement / enhancement of a legacy system | Document analysis, user interface analysis, observation |
| Large, distributed user population | Questionnaires, then focused deep-dive elicitation based on the results |

---

## 10. Preparing for & performing elicitation

### Preparing

The larger the group, the more preparation matters.

- **Plan the session scope and agenda.** Decide the scope given the available time; align it with the overall project scope to keep the conversation on topic. The agenda itemises topics, time per topic, and objectives — **share it in advance**.
- **Prepare resources**: rooms, projectors, teleconference numbers, videoconferencing; schedule participants with **time zone differences** in mind; collect documentation; gain system access.
- **Learn about the stakeholders.** Understand their cultural and regional meeting preferences. If some participants are not native speakers of the session language, **send supporting material ahead** so they can read along. **Avoid an "us versus them" tension.**
- **Prepare questions.** Always go in with a prepared set.
- **Prepare straw man models** — a draft that helps you learn the topic and **inspires ideas**. It is easier to revise a draft than to create one from scratch. If the domain is new to you, use another technique first (read documents, examine existing systems, interview an SME). Then tell the group: *"This model will probably be wrong. Please tear it apart and tell me how it should look. You will not hurt my feelings."*

**The art of questioning:**

- Do not ask *"What do you want?"* — it generates a mass of random information. ***"What do you need to DO?"*** is a much better question.
- Ask **"why"** several times to move from a presented solution to a solid understanding of the problem.
- Use **open-ended questions** to understand current business processes and how the new system could improve performance.
- **Imagine yourself learning the user job** — what tasks would you perform, what questions would you have? Or play the role of an **apprentice** so the user leads the discussion.
- **Probe around the exceptions.** What could prevent the user from completing a task? How should the system respond to each error condition? Use openers such as *"What else could…"*, *"What happens when…"*, *"Would you ever need to…"*, *"Where do you get…"*, *"Why do you (or do you not)…"*, *"Does anyone ever…"*.
- On legacy replacement projects, ask: ***"What three things annoy you the most about the existing system?"*** — this surfaces expectations for the successor.
- **Do not be rigid about the script.** Five minutes in you may realise you missed an important area. Be ready to abandon your questions.
- End with: ***"Is there anything else you expected me to ask?"***

### Performing

- **Educate stakeholders** about your approach, the exploration techniques (use cases, process flows), and how their information will be captured and returned for review.
- **Take good notes.** Assign the scribe role to someone **not actively participating**. Notes should contain the attendee list, invitees who did not attend, decisions made, actions and owners, outstanding issues, and the high points of key discussions.
- If you must both facilitate and scribe, use shorthand, a recording device (with agreement), an audio pen that ties handwriting to recorded audio, or photographs of whiteboards.
- **Exploit the physical space.** Use whiteboards and big sheets of paper on walls for diagrams and lists; have sticky notes and markers ready. **Invite others to the wall** — moving around keeps people engaged. This is the *"Wall of Wonder"* pattern.
- For distributed teams, use online conferencing to share slides, and **video** so remote participants can see the walls and whiteboards.
- Where culturally appropriate, use **toys** to stimulate thinking and give people something to do with their hands.

> **A true story:** In a workshop with **12 engineers** at a semiconductor plant, the facilitator started drawing process flows at the whiteboard. Half a day in, one engineer asked for the marker. He had learned the flowchart notation and, already being a system expert, drew quickly — then walked the group through it, asking peers to validate or correct each step. Soon **all the engineers were passing the marker around**, freeing the facilitator to ask probing questions and take notes.

---

## 11. Following up & classifying customer input

### Following up

- **Consolidate and organise your notes** from multiple sources. Review and update them **soon after the session**, while the content is fresh.
- **Keep the raw notes.** Editing carries a risk: you might misremember what something meant and **unknowingly change the meaning**.
- **Share the consolidated notes with participants** and ask them to review. Only the people who supplied the requirements can judge whether they were captured correctly. Consider sharing with absent stakeholders so they can flag issues immediately.
- **Record open issues** in an issue-tracking tool with relevant notes, progress, an **owner**, and a due date. Use the same tool the development and testing teams use.

### Classifying customer input

**Do not expect customers to present a succinct, complete, well-organised list of needs.** The BA must classify myriad bits of information so each can be documented and used appropriately. While listening, make a quick notation when you recognise a type.

| Type | How to recognise it |
|------|---------------------|
| **Business requirement** | Talks about value to buyers or the business: *"Increase market share in region X by Y percent within Z months"* |
| **User requirement** | *"I need to <do something>"*, *"As a <role>, I need…"* |
| **Business rule** | *"Must comply with…"*, *"If <condition is true> then <something happens>"*, *"Must be calculated according to…"* |
| **Functional requirement** | Describes observable behaviour under specific conditions |
| **Quality attribute** | Words describing desirable characteristics: *fast, easy, user-friendly, reliable, secure* — probe further, they are too subjective |
| **External interface** | *"Must read signals from…"*, *"Must send messages to…"*, *"Must be able to read files in <format>"* |
| **Constraint** | *"Must be written in <language>"*, *"Cannot exceed <limit>"*, *"Must use <specific control>"* |
| **Data requirement** | Describes format, data type, allowed values, default value, complex data structures, or reports |
| **Solution idea** | Describes a **specific way of interacting** with the system to perform an action |

**Recognising solution ideas is the most important skill in this table.** Consider: *"Then I select the state where I want to send the package **from a drop-down list**."* The phrase *from a drop-down list* marks it as a solution idea, because it names a specific UI control. A prudent BA asks **"why from a drop-down list?"**:

- If the reply is *"that just seemed like a good way to do it"*, the real requirement is: *"The system shall permit the user to specify the state where he wants to send the package."*
- If the reply is *"we do the same thing in several other places and I want consistency; also the drop-down prevents invalid data"* — that is a **legitimate reason** to specify a solution.

Embedding a solution creates a **design constraint**: it limits the requirement to being implemented in **only one way**. This is **not necessarily wrong** — just make sure the constraint exists for a **good reason**.

Some information will **not fit any of the nine categories**: project requirements (user training), project constraints (cost, schedule), assumptions and dependencies, historical or context-setting information, or **extraneous information that adds no value**.

---

## 12. Knowing when you are done, traps & finding missing requirements

### How do you know when you are done?

No simple signal indicates elicitation is complete. In fact you are **never entirely done**, particularly when implementing a system incrementally. Cues that you are reaching the point of **diminishing returns**:

- Users **cannot think of any more** use cases or user stories. (Users tend to identify requirements in **decreasing order of importance**.)
- Users propose new scenarios but they **lead to no new functional requirements**. A "new" use case might really be an **alternative flow** of an existing one.
- Users **repeat issues** already covered in previous discussions.
- Suggested features and requirements are all deemed **out of scope**.
- Proposed new requirements are all **low priority**.
- Users are proposing capabilities for *"sometime in the lifetime of the product"* rather than *"the specific product we are talking about right now"*.
- Developers and testers who review the requirements **raise few questions**.

### Traps

- **Unbalanced stakeholder representation.** Collecting from too few people, or hearing only the **loudest, most opinionated** customer. The best balance: a few product champions, each backed by other representatives from the same user class.
- **Inappropriately defined scope.** Too **large** and you accumulate more requirements than needed while elicitation drags on. Too **small** and customers keep presenting clearly important needs that lie outside the current boundary — a sign the scope must expand.
- **The requirements-versus-design argument.** Saying *"requirements are the what, design is the how"* is an **oversimplification**. Between analysis and design lies a **gray area**, not a sharp line. Hypothetical hows help clarify and refine the what. Just make clear to users that screens and prototypes are **illustrative only**, not necessarily the ultimate solution.
- **Research beyond reason.** When an idea requires extensive research to evaluate, treat that exploration as a **separate project task** rather than letting it disrupt elicitation.

### Assumed & implied requirements

You will **never document 100 percent of requirements**. What you leave out risks delivering something different from what stakeholders expect. Two culprits:

- **Assumed requirements** — what people **expect without expressing**.
- **Implied requirements** — necessary **because of another requirement** but never stated. Developers cannot implement functionality they do not know about.

To reduce the risk, ask ***"What are we assuming?"*** during elicitation. When you encounter an assumption, **record it and confirm its validity**. People often assume things must be the way they always were because they are so familiar with the existing system — on a replacement project, review the old features to determine which are **truly required**.

To find implied requirements, study early elicitation results for areas of incompleteness. Does a vague, high-level requirement need fleshing out so stakeholders understand it the same way? Is a requirement that belongs to a **logical pair** (saving an incomplete web form) missing its counterpart (retrieving a saved form)? You may need to **re-interview the same stakeholders**, or bring in **new stakeholders** who know the topic and can spot gaps.

Use **context-free questions** — high-level, open-ended questions that elicit information about global characteristics of both the problem and the potential solution. For example *"What kind of precision is required in the product?"* or *"Can you help me understand why you do not agree with Miguel reply?"* — these lead to insights that yes/no or A/B/C questions do not.

> **A true story:** A team building a content portal had roughly **1,000 pieces of existing content** organised in a hierarchy. The content management team **assumed** users would navigate the hierarchy to quickly find a specific piece — but **specified no navigation requirements**. Developers implemented the interface with **all content on a single level**, showing **20 items per screen**. To find a specific piece a user might have to page through **50 screens**. A little more specification and dialogue would have avoided considerable rework.

### Finding missing requirements

Missing requirements are common and **hard to spot because they are invisible**. Techniques:

- **Decompose high-level requirements** into enough detail to reveal exactly what is being requested.
- Ensure **all user classes have provided input**, and that each user requirement has at least one user class receiving value from it.
- **Trace** system requirements, user requirements, event-response lists, and business rules to their corresponding functional requirements.
- **Check boundary values.** If one requirement says *"if the price is less than 100, shipping is 5.95"* and another says *"if the price is more than 100, shipping is 6 percent"* — what about **exactly 100**? A requirement is missing.
- **Represent requirements in more than one way.** It is hard to read a mass of text and notice what is **absent**. Analysis models show the **forest, not the trees** — you study a model and realise *there should be an arrow from this box to that one*; that missing arrow is a missing requirement.
- Sets of requirements with **complex Boolean logic** (AND, OR, NOT) are often incomplete. **Else conditions are frequently overlooked.** Use **decision tables** or **decision trees** to cover every situation.
- Create a **checklist of common functional areas**: error logging, backup and restore, access security, reporting, printing, preview, configuring user preferences. Periodically compare it with what you have specified.
- A **data model** can reveal missing functionality. Every data entity the system manipulates needs corresponding functionality to **create, read, update, and delete** it — the acronym **CRUD**.

> **Trap:** Watch out for **analysis paralysis** — spending too much time on elicitation trying to avoid missing any requirement. You will never discover them all, but nearly every team can do better than it does today.

---

## Key takeaways

- Classify user classes by the **TASKS they perform**, not by geography or company type (those are market segments).
- The **favored user class** is the one most aligned with business objectives — **not** the one paying or the one with the most clout.
- **Disfavored user classes** lead to features that deliberately **make things hard** for them, like account lockout or CAPTCHA.
- **Do not overlook indirect users** — your customer once removed is still your customer.
- Use **expand then contract** to pare the user class list down to about **15 or fewer**.
- A **persona** turns a faceless group into a specific person and can stand in when real users are unavailable.
- A **product champion is an actual user** who decides for their user class — but **the BA still writes the requirements documents**.
- For a large user class, the champion can assemble a **backup team** in a hierarchical structure.
- An agile **product owner** spans all three requirement levels; large organizations often need **per-department product owners** plus a lead.
- Conflicts between **user classes** go to the favored one; between **corporate customers**, **business objectives** decide.
- **Elicitation is not "gathering"** but a collaborative, analytical, **cyclic** process.
- **No project should use only one elicitation technique.**
- Workshops with more than **five or six active participants** bog down; run parallel workshops instead.
- **Never start a workshop with a blank slate** — bring a straw man model.
- **Focus groups have no decision authority** and give no quantitative analysis.
- **Observation reveals steps users are too familiar with to articulate** (like cracking the eggshell).
- System interface analysis can show functionality you do **NOT** need to build.
- **Do not assume** functionality in an old system is needed in the new one.
- Phrases like *"from a drop-down list"* signal a **solution idea** — ask **"why"**.
- Users tend to state requirements in **decreasing order of importance**.
- The requirements–design boundary is a **gray area**, not a sharp line.
- **Overlooked else conditions** are a very common source of missing requirements; use decision tables.
- **CRUD analysis** on the data model is a systematic way to find missing functionality.

## Summary

- Identify **user classes** first, then find the **right representatives** for each — this step determines the quality of everything that follows.
- The **product champion** (or product owner) structure brings the user voice into the project sustainably.
- Decide **who decides and how conflicts are resolved** before a conflict arises.
- Elicitation needs **a combination of techniques**: facilitated activities to understand people, independent activities to discover what they do not say.
- **Plan your elicitation** and **prepare before every session** — prepared questions and straw man models.
- **Follow up rigorously**: consolidate notes, send them for review, and track every issue to closure.
- **Classify customer input** into the right buckets, and stay alert for **solution ideas** disguised as requirements.
- Actively **hunt for missing requirements** using traceability, boundary values, multiple representations, decision tables, and CRUD analysis.
