# Good Practices & the Business Analyst

## 1. The requirements development process framework

Every software professional needs a **tool kit of techniques** to approach each project challenge. A practitioner who lacks one is forced to invent an approach based on whatever seems reasonable at the moment — and ad hoc methods rarely yield great results.

Equally, do not cling to a packaged **methodology** and follow the same script in every situation. The more effective approach is to identify and apply industry **good practices**, then match the practice to the problem.

**Requirements development is NOT linear.** Its four activities are interwoven, incremental, and iterative:

As the BA you ask customers questions, listen to what they say, and watch what they do (**elicitation**). You process that information to understand it, classify it, and relate customer needs to possible requirements (**analysis**) — which may make you realise you need to elicit more. You structure the input as written requirement statements and diagrams (**specification**) — and while writing you find gaps that need more analysis. Then you ask stakeholders to confirm accuracy (**validation**) — which can send you back to rewriting, re-analysing, or even re-eliciting.

The key operating phrase is **progressive refinement of detail** — moving from initial concepts of what is needed toward further precision of understanding and expression.

A representative process runs to about 17 steps: the first seven are typically performed **once** early in the project (define vision and scope, identify user classes, select product champions, capture use cases and business rules), while the rest repeat **for each release or iteration**.

**Effort is distributed differently by life cycle:**

| Life cycle | How requirements effort is distributed |
|------------|----------------------------------------|
| Pure waterfall | Mostly concentrated at the beginning |
| Iterative (for example RUP) | Work in every iteration, heaviest in the first |
| Agile / incremental | Frequent but small efforts spread across the project |

> **Important:** None of these techniques will work if you are dealing with **unreasonable people**. But often they are not unreasonable — they are simply **uninformed**. Explain why you want to use a practice and why cooperating serves their own goals.

---

## 2. Good practices: Elicitation

- **Define product vision and project scope.** The vision gives everyone a common understanding of the outcome; the scope draws the boundary between what is in and out for a release. The vision stays relatively stable; each release needs its own scope statement.
- **Identify user classes and their characteristics.** Groups may differ in frequency of use, features used, privilege levels, or experience.
- **Select a product champion for each user class.** This person is the *literal voice* of that user class and makes decisions on its behalf.
- **Conduct focus groups with typical users.** Especially valuable for commercial products with a large, diverse customer base. Unlike product champions, focus groups generally do **not** have decision-making authority.
- **Work with user representatives to identify user requirements**, expressed as use cases, user stories, or scenarios.
- **Identify system events and responses.** Three classes: **signal events** (control signals or data from external devices), **temporal events** (time-triggered), and **business events** (a user action that triggers a use case).
- **Hold elicitation interviews.** Efficient because you discuss only the requirements that matter to each person, and they are easier to schedule than workshops.
- **Hold facilitated elicitation workshops**, sometimes called JAD (Joint Application Design) sessions.
- **Observe users performing their jobs.** This establishes the real usage context; simple process flow diagrams depict the steps and decisions.
- **Distribute questionnaires.** Useful with large or geographically distributed user populations.
- **Perform document analysis.** Existing system documentation, business processes, old specifications, competitor research, COTS user manuals.
- **Examine problem reports of current systems** for ideas for a later release. Help desk and support staff are a rich source.
- **Reuse existing requirements.** Security requirements, regulatory compliance requirements, glossaries, data models, and user class descriptions all reuse well.

---

## 3. Good practices: Analysis

Analysis refines requirements so all stakeholders understand them, and scrutinises them for errors, omissions, and other deficiencies.

- **Model the application environment.** A **context diagram** defines the boundaries and interfaces between the system and external entities. An **ecosystem map** shows the systems that interact and the nature of their interconnections.
- **Create user interface and technical prototypes.** A prototype makes concepts tangible and helps developers and users reach a mutual understanding of the problem.
- **Analyze requirement feasibility.** The BA works with developers to evaluate cost, performance, and technical risk for each requirement.
- **Prioritize the requirements** so the team implements the highest-value or most timely functionality first. Priorities must be **adjusted continually** as market conditions and business goals evolve.
- **Create a data dictionary** so everyone works from consistent data definitions.
- **Model the requirements.** Diagrams reveal incorrect, inconsistent, missing, and superfluous requirements that prose hides.
- **Analyze interfaces between your system and the outside world** — user, software, hardware, and communication interfaces.
- **Allocate requirements to subsystems** for complex products containing multiple software, hardware, and human components.

> **The golden rule:** represent requirements in **more than one way** — textual and visual, or requirements and tests. Each view reveals problems no single view provides, and helps all stakeholders arrive at a **shared vision** of what they will get.

---

## 4. Good practices: Specification & Validation

**Specification** means recording requirements consistently, accessibly, reviewably, and understandably for the intended audiences.

- **Adopt requirement document templates.** Even if you do not store requirements in traditional document form, a template reminds you of the kinds of information to explore.
- **Identify requirement origins.** Trace each back to a use case, customer input, higher-level system requirement, or business rule — so everyone knows **why** it is needed.
- **Uniquely label each requirement**, using a convention robust enough to withstand additions, deletions, and moves over time.
- **Record business rules SEPARATELY** from a project requirements, because they are an enterprise-level asset rather than a project-level one.
- **Specify nonfunctional requirements.** It is entirely possible to implement a solution that does exactly what it is supposed to do but does not satisfy user quality expectations.

**Validation** ensures requirements are correct, show the desired quality characteristics, and will satisfy customer needs.

- **Review the requirements.** Peer review — particularly **inspection** — is one of the highest-value software quality practices available. A small team representing different perspectives (analyst, customer, developer, tester) examines the material.
- **Test the requirements.** Writing tests forces you to think about how you would tell whether the functionality was implemented correctly. Tests are an **alternative view** of the requirements.
- **Define acceptance criteria.** Users describe how they will determine whether the solution meets their needs and is fit for use.
- **Simulate the requirements.** Commercial tools let BAs build executable mock-ups users can interact with, making requirements come to life before they are cast into the concrete of code.

---

## 5. Good practices: Requirements management

Once you have the initial requirements, you must cope with the inevitable changes from customers, management, marketing, and the development team.

- **Establish a requirements change control process.** Rather than stifling change or hoping it will not happen, provide a mechanism that prevents rampant change from causing chaos. Charter a small **change control board (CCB)** to evaluate and decide.
- **Perform impact analysis on changes.** Use the traceability matrix to find the requirements, design elements, source code, and tests you might have to modify, and estimate the effort involved.
- **Establish baselines and control versions.** Give every version of the specification a unique identifier so drafts are never confused with baselines.
- **Maintain a history of requirements changes:** date, who changed it, what changed, and **why**.
- **Track the status of each requirement** (proposed, approved, implemented, verified) to gain real insight into project status.
- **Track requirements issues.** Assign a **single owner** to each issue so nothing falls through the cracks.
- **Maintain a requirements traceability matrix**, populated **during** development rather than at the end.
- **Use a requirements management tool** to automate much of the above.

---

## 6. Good practices: Knowledge & Project management

**Knowledge**

- **Train business analysts.** Everyone who performs BA tasks should be trained, whether or not their job title says "business analyst".
- **Educate stakeholders about requirements.** The most effective classes have an audience spanning **multiple project functions**, not just BAs. It doubles as a team-building activity.
- **Educate developers about the application domain.** Day-in-the-life experiences alongside users are a sound investment.
- **Define a requirements engineering process** so analysts work consistently and so the work can be planned.
- **Create a glossary** defining specialized terms, acronyms, and words with more than one meaning.

**Project management**

- **Select an appropriate development life cycle** for the degree of requirements uncertainty.
- **Plan the requirements approach**, including an elicitation plan.
- **Estimate requirements effort.**
- **Base project plans on requirements**, refining them as understanding improves.
- **Identify requirements decision makers** — ideally before the first significant decision arrives.
- **Renegotiate commitments when requirements change.** If the current commitments are no longer achievable with the available resources, communicate the reality and negotiate.
- **Analyze, document, and manage requirements-related risks.**
- **Track the effort spent on requirements** to improve future estimates.
- **Review lessons learned** from earlier projects through retrospectives.

---

## 7. Getting started with new practices

Do not try to apply every practice on your next project. Think of them as **new items in your tool kit**.

How to choose: rank practices along two axes — **value contributed** and **difficulty of implementation** — and start with the **high value, low difficulty** group.

| Group | Example practices |
|-------|-------------------|
| High value, easy | Educate developers about the domain; adopt document templates; identify user classes; model the application environment; identify requirement origins |
| High value, medium difficulty | Train business analysts; plan the requirements approach; select product champions; hold elicitation interviews; specify nonfunctional requirements |
| High value, hardest | Define a requirements engineering process; base plans on requirements; renegotiate commitments |
| Lower value | Distribute questionnaires; maintain change history; simulate requirements; examine problem reports |

Note this classification is **not absolute** — your experience may differ. Some practices can be adopted mid-project (the change management group); others must wait for the next project or iteration (the elicitation group).

> Just make sure that each of your development teams **tries something new and better** at each opportunity.

---

## 8. The business analyst role

The **business analyst** is the individual with primary responsibility to **elicit, analyze, document, and validate** the needs of the project stakeholders. The BA is the **principal interpreter** through which requirements flow between the customer community and the development team.

**Business analyst is a ROLE, not necessarily a job title.** Synonyms include requirements analyst, systems analyst, requirements engineer, requirements manager, application analyst, business systems analyst, IT business analyst, or simply analyst.

Crucially, when someone performing another project role also serves as BA, they are doing **two distinct jobs**. A project manager who is also the BA must create and manage plans, schedules, and resource needs based on the very work the BA defines — the two roles demand somewhat different skill sets even when one person does both.

In organizations that develop consumer products, the BA role often belongs to the **product manager** or marketing staff. If a project has both, the product manager typically focuses on the external market and user demands while the BA converts those into functional requirements.

> **Trap:** Do not assume that any talented developer or knowledgeable user can automatically be an effective business analyst without training, resource materials, and coaching.

The impact of a good BA is large. One company found it could inspect specifications written by experienced analysts **twice as fast** as those from novices, because they contained fewer defects. In the Cocomo II estimation model, analyst experience and capability can reduce a project overall effort by **one-third**.

---

## 9. The business analyst tasks

- **Define business requirements.** Work with the funding sponsor, product manager, or marketing manager to express the vision clearly, usually via a vision and scope document.
- **Plan the requirements approach.** Build plans to elicit, analyze, document, validate, and manage requirements, aligned with overall project plans.
- **Identify project stakeholders and user classes.** Select appropriate representatives for each user class, enlist their participation, and **negotiate their responsibilities**.
- **Elicit requirements.** A proactive BA **helps users articulate** the capabilities they need, rather than transcribing passively.
- **Analyze requirements.** Look for **derived requirements** (logical consequences of what customers asked for) and **implicit requirements** (things customers expect without saying so). Use models to recognise patterns, find gaps, reveal conflicts, and confirm everything specified is in scope.
- **Document requirements** in a well-organised way that clearly describes the solution to the customer problem.
- **Communicate requirements.** Not putting requirements on paper and tossing them over a wall, but ongoing collaboration to ensure the team understands. Choose the right representation: visual models, tables, mathematical expressions, prototypes.
- **Lead requirements validation.** The BA is a central participant in reviews, and should also review designs and tests derived from the requirements to confirm they were interpreted correctly.
- **Facilitate prioritization.** The BA brokers collaboration and negotiation among stakeholders and developers.
- **Manage requirements.** After a baseline is established, the focus shifts to tracking status, verifying satisfaction in the product, and managing changes.

---

## 10. Essential analyst skills & knowledge

Much of the BA job is **soft skills** rather than technical ones. Patience and a genuine desire to work with people are key success factors.

| Skill | Why it matters |
|-------|----------------|
| **Listening** | Active listening: remove distractions, restate key points to confirm understanding. You must grasp what is said and read between the lines for what people hesitate to say. |
| **Interviewing & questioning** | Users naturally focus on normal, expected behaviour; much code is written to handle exceptions. The BA must probe for error conditions. |
| **Thinking on your feet** | No interview script is perfect; you must listen and produce the next smart question in the moment. |
| **Analytical thinking** | Think at **both high and low levels of abstraction**, and know when to move between them. |
| **Systems thinking** | Be detail-oriented and see the big picture; understand the interactions among people, processes, and technology. |
| **Learning quickly** | Read critically and efficiently. You need not be a domain expert, but you must **never hide your ignorance**. |
| **Facilitation** | Lead a group toward success in a way that encourages participation, ownership, and productivity. |
| **Leadership** | Create a collaborative environment and foster trust among stakeholder groups that do not understand each other motivations and constraints. |
| **Observation** | Catch comments made in passing and subtleties users would never think to mention. |
| **Communication** | Write and speak clearly for **multiple audiences**: customers who must validate, developers who need precision. |
| **Organization** | Cope with a jumble of rapidly changing information and set up an information architecture for the project. |
| **Modeling** | Know which model adds value when, and **teach others how to read** it. |
| **Interpersonal skills** | Speak the language of your audience; work with virtual teams across time zones, cultures, and native languages. |
| **Creativity** | The best BAs **invent potential requirements** for customers to consider, satisfying needs users did not even know they had. |

Beyond skills, a BA needs **knowledge**: contemporary requirements engineering practices, project management, development life cycles, risk management, quality engineering, and above all the **business, industry, and organization** they serve.

> One caveat on creativity: the BA must avoid **gold-plating** the solution — do not simply add new requirements to the specification without customer approval.

### Practising what you teach

An author once asked a colleague for a script to intercept and parse information out of email messages. The colleague replied: *"Excuse me, but I do not think that is your real requirement. Your real requirement is to **get the information you need some other way** besides manually reading emails."*

Exactly right — even someone who writes books about requirements fell into the oh-so-common trap of **presenting a solution as a requirement**. When you step back to the underlying issue, you almost always find multiple ways to solve the problem, some of them better than the first one that popped into your head.

---

## 11. Becoming a BA & the BA role on agile projects

BAs are grown from diverse backgrounds, each with its own **strengths and blind spots**:

| Background | Strength | Risk to watch for |
|------------|----------|-------------------|
| **Former user** | Knows the business, speaks the user language, is easily trusted | Little software engineering knowledge; may believe they know better than current users; stuck in how work is done today; thinks in user interfaces rather than needs |
| **Former developer / tester** | Analytical mindset, used to hunting exceptions and gaps | Lapses into technical thinking and jargon; focuses on the software rather than customer needs; needs business domain knowledge |
| **Project manager** | Strong communication, negotiation, facilitation, organization | Must shift focus from schedule, resources, and budget to **understanding business needs**; needs analysis, modeling, and interviewing skills |
| **Subject matter expert** | Deep domain knowledge, can judge whether requirements are reasonable | May specify to **personal preference** rather than user class needs; expert in the *as-is* system but struggles to imagine the *to-be* |
| **New graduate** | Few preconceptions about how requirements should work; hired for soft skills | Lacks experience and knowledge; needs mentoring to instil good habits from the outset |

**The BA role on agile projects.** The BA functions **still need to be performed**, but the person doing them may not be called a BA. Many agile approaches have a **product owner** who takes on some traditional BA activities, plus providing the product vision, communicating constraints, prioritizing the product backlog, and making the final product decisions.

A BA in an agile environment should:

- Define a **lightweight, flexible** requirements process and adapt it as the project warrants.
- Keep documentation at **the right level** — not too little and not too much. Neither extreme (specifying everything to the nth degree, or having no documentation at all) is ideal.
- Help determine the best approach to documenting the backlog.
- Apply facilitation and leadership skills so stakeholders **talk to one another frequently**.
- Validate that customer needs are accurately represented in the backlog, and facilitate prioritization.
- Work with customers when they change their minds, record those changes, and help the team determine the impact on iteration contents and release plans.

The product owner role is valuable, but the person filling it **may not have all the business analysis skills, or the time**, to perform every related activity. A BA brings exactly those capabilities to the team.

---

## Key takeaways

- **Requirements development is iterative**, driven by **progressive refinement of detail**; the four activities interleave rather than follow one another.
- Effort distribution differs by life cycle: waterfall front-loads it, iterative spreads it per cycle, agile spreads it into many small efforts.
- A **product champion** decides on behalf of a user class; a **focus group** only supplies input and has no decision authority.
- Three classes of system event: **signal, temporal, business**.
- **Business rules must be stored separately** from project requirements because they are an enterprise-level asset.
- **Peer review, especially inspection**, is one of the highest-value quality practices available.
- Represent requirements from **multiple views** so each exposes errors the others hide.
- Every **requirements issue needs a single owner**; the traceability matrix must be populated **during** development.
- Start improving with the **high value, low difficulty** practices.
- **BA is a role, not a title.** Someone holding two roles is doing two jobs with two skill sets.
- Great BAs **invent potential requirements**, but must avoid **gold-plating** without customer approval.
- The most common trap: a customer **presents a solution as though it were a requirement**. Dig down to the underlying need.
- On agile projects the BA tasks remain; a **product owner** usually absorbs some of them but rarely all.

## Summary

- Build a **tool kit of good practices** rather than committing to a single methodology.
- Choose practices to fit the project context; none suits every situation, and different parts of one project may need different practices.
- Five practice groups map to the five subdisciplines — **elicitation, analysis, specification, validation, management** — plus **knowledge** and **project management**.
- The BA is the **communication bridge** between customers and the development team, and the person who forges that partnership.
- The most important BA skills are **soft skills**: listening, questioning, facilitation, communication, organization.
- Every career path into business analysis carries its own **blind spots** — identify yours and close the gaps deliberately.
