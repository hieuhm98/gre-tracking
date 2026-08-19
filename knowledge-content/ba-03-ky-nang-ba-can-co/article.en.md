# Essential BA Skills

## 1. A skill map in three tiers

BA skill lists are usually long enough to alarm newcomers. Reorganise them into three tiers by how foundational they are:

**Tier 1 — Core skills (indispensable).** Communication, questioning, analytical thinking, clear writing. **These decide whether you can do the job at all.**

**Tier 2 — Craft skills (learnable).** Elicitation techniques, modeling, writing user stories and acceptance criteria, SQL, reading APIs. **Learnable in months if you have tier 1.**

**Tier 3 — Contextual skills (accumulated).** Domain knowledge, organizational awareness, negotiation, relationship building. **No shortcuts here.**

> **Newcomers usually invest backwards: they learn tools and document templates (tier 2) first and skip tier 1.** The result is documentation in the right format with hollow content, because they never asked the right questions.

---

## 2. Questioning — the most important skill

If you could pick only one skill, pick this. **The quality of the requirements you write is capped by the quality of the questions you asked.**

### Open versus closed questions

- **Open questions** explore: *"Walk me through how the approval process runs today."*
- **Closed questions** confirm: *"So an order above 50 million always needs the director's signature — is that right?"*

**A common beginner mistake: closing too early.** You ask *"Do you need an Excel export?"* and hear *"Yes"* — but you just planted that idea rather than discovering the real need.

### Digging to the root

**Ask why repeatedly**, going one layer deeper each time:

> *"I need an Excel export button on the orders screen."*
> — *What will you do with that file?*
> *"I filter out overdue orders and send them to customer care."*
> — *How often do you do that?*
> *"Every morning."*
> — *If the system sent the overdue list to customer care each morning, would that solve it?*
> *"Oh, that would be much better."*

**The real need was not an Excel button but a process being done by hand every day.**

### Questions that surface omissions

These three catch most missing requirements:

- **"What happens if...?"** — catches exception cases.
- **"Who else is involved in this?"** — catches overlooked stakeholders.
- **"How do you handle it today when the system does not support it?"** — catches workarounds, each of which is an unmet requirement.

---

## 3. Active listening

Listening is not staying silent while waiting for your turn. **Active listening means listening to understand, and proving that you understood.**

**Three concrete techniques:**

**1. Paraphrase.** *"So when a customer cancels after paying, the system must refund automatically within 3 days. Have I got that right?"*

> **This is the single most powerful technique in the whole craft.** When you paraphrase and the other person says *"not quite"*, you have just caught an ambiguity before it became wrong code.

**2. Structured notes.** Do not write continuously. Separate: **confirmed facts / assumptions to verify / open questions / decisions made**. That structure turns notes into direct input for your documentation.

**3. Notice what is NOT said.** If someone describes the happy path in great detail but is silent about failure cases, that is a sign nobody has considered them — and you should ask.

---

## 4. Analytical thinking

**Analytical thinking is the ability to break a large vague problem into tractable parts and see the relationships between them.**

**Four concrete habits:**

**1. Separate problem from symptom.** *"Staff enter data incorrectly"* is a symptom. The cause may be a confusing form, missing validation, or a process that forces them to rush.

**2. Look for patterns and exceptions.** When hearing a process described, ask: *is this always true, or are there cases that differ?* Exceptions are where the real complexity lives.

**3. Think in data, process, and state.** For every requirement ask three questions: *what data is involved, who does what in what order, and what states can this object be in?*

**4. Verify instead of assuming.** When someone says *"customers always enter a phone number"*, run a query and see what percentage of records actually have one.

> **The test for analytical thinking is simple: given one requirement sentence, can you produce at least five clarifying questions?** If not, you are accepting information at surface level.

---

## 5. Clear writing

A great many software project problems are really **language problems**. One ambiguous sentence can cost weeks of rework.

**Four writing principles for BAs:**

**1. Write in the active voice, naming who does what.** *"The serial number will be updated"* does not say who updates it. *"The system updates the serial number when Fulfillment confirms shipment"* does.

**2. Avoid vague words.** *Fast, easy to use, appropriate, friendly, stable* — each must be translated into a measurable characteristic.

**3. One sentence, one requirement.** The words *and, unless, except, but* usually signal you have merged two requirements into one sentence.

**4. Give concrete examples.** A sample payload or an example data table removes ambiguity faster than any paragraph of prose.

> **A self-check: reread the requirement and invent a ludicrous but literally compliant interpretation.** If that reading would not be acceptable to the user, the sentence needs rewriting.

---

## 6. Communication and negotiation

BAs talk to very different groups, and **each group needs a different language**.

| Audience | What they care about | How to speak |
|----------|---------------------|--------------|
| Executives | Value, cost, risk | Short, lead with the conclusion, back it with numbers |
| Business users | Their daily work | Business language, concrete examples, avoid IT jargon |
| Developers | Detail, exceptions, constraints | Precise, structured, with sample data |
| Testers | Verification criteria | Clear acceptance criteria covering failure cases |

**Negotiation in BA work is rarely about money — it is about scope and ordering.**

Three principles:

- **Never say a bare no.** Say instead: *"Yes, and if we add this then that moves to the next release — which do you prefer?"*
- **Bring data rather than opinion.** *"The last three projects averaged seven weeks of rework from missed requirements"* beats *"I think we need more analysis time"*.
- **Separate the person from the problem.** Evaluate the requirement, not the person who raised it.

---

## 7. Just-enough technical knowledge

A BA need not write production code but **needs enough understanding to ask sharp questions and spot hidden work**.

**The level required:**

- **Web and APIs** — request/response, status codes, JSON. Enough to read the Network tab and tell whether a defect sits in the UI or the data.
- **Databases and SQL** — tables, relationships, keys; able to write basic filtering and aggregation queries.
- **Layered architecture** — knowing whether a change touches the interface, the business layer, or the data layer, because the ripple differs enormously.
- **The development process** — dev, test, staging, and production environments and the life cycle of a change.

> **The sign that you know enough: when a developer says *"this is complex because the data model must change"*, you understand why that costs more than a UI tweak — and can ask the right follow-up.**

---

## 8. How to practise each skill

Soft skills sound abstract, but each has a concrete exercise:

| Skill | Daily exercise |
|-------|----------------|
| **Questioning** | Pick any feature in an app you use and write 10 clarifying questions |
| **Listening** | After each meeting, rewrite it in your own words and send it back for confirmation |
| **Analytical thinking** | Take an everyday process (ordering food, parking) and chart it including every error branch |
| **Clear writing** | Write one requirement sentence, then find three different ways to read it |
| **Technical** | Open dev tools on a website and read the requests as you interact |
| **Domain** | Read industry news weekly and note the terms you do not understand |

> **BA skills are not learned by reading — only by doing and getting feedback.** The fastest way to improve is handing your documentation to someone else for review and genuinely listening to what they did not understand.

---

## 9. Key takeaways

- BA skills split into three tiers: **core (indispensable), craft (learnable), contextual (accumulated)**.
- Newcomers **invest backwards**, learning tools and templates first while skipping the core.
- **Requirement quality is capped by the quality of the questions you asked.**
- **Closing a question too early plants an idea** in the user's head instead of finding the real need.
- Three questions that catch most omissions: **what happens if, who else is involved, how do you handle it today**.
- **Paraphrasing is the most powerful technique** — a *"not quite"* means you caught an ambiguity.
- Notes should separate **facts, assumptions, open questions, decisions**.
- **Notice what is NOT said** — silence about failure cases means nobody considered them.
- Separate **problem from symptom**; exceptions are where the real complexity lives.
- **Verify with data instead of accepting assumptions** — run a query rather than trusting a claim.
- Writing: **active voice, no vague words, one sentence one requirement, concrete examples**.
- **Inventing a ludicrous but literally compliant reading** is the most effective self-check.
- Each audience needs **a different language**; executives want the conclusion first, developers want detail.
- Negotiation: **never a bare no, bring data not opinion, separate the person from the problem**.
- Just-enough technical means **understanding why a data model change costs more than a UI change**.
- **BA skills are only learned by doing and getting feedback**, never by reading alone.

## 10. Summary

- The four core skills — **questioning, listening, analytical thinking, clear writing** — decide whether you can do the job.
- Craft skills and tools are **learnable in months**; domain knowledge and relationships take time.
- **Just-enough technical knowledge** exists to sharpen your questions and reveal hidden work, not to make you a coder.
- Every skill has a **concrete daily exercise**, and the fastest way to improve is putting your work in front of a reviewer.
