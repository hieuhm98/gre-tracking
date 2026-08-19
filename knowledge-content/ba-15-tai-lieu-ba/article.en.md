# BA Documents: BRD, SRS, Meeting Minutes

## 1. The documents BAs produce

The list can get long, but the documents serve **three different purposes**: direction, specification, and record.

| Document | Answers | Primary readers |
|----------|---------|-----------------|
| **Vision & scope** | Why this project exists and how far it goes | Executives, the whole team |
| **BRD (business requirements document)** | What the business needs and why | Customers, executives |
| **SRS (software requirements specification)** | What the system must do, and how precisely | Developers, testers |
| **User stories + acceptance criteria** | What users must be able to do this iteration | The development team |
| **Use case specifications** | The detailed interaction flow for complex situations | Developers, testers |
| **Business rules catalog** | Which organizational rules govern the system | The business, the team |
| **Data dictionary** | What each field means and how it is formatted | Developers, testers, integrators |
| **Meeting minutes** | What was discussed, decided, and who does what next | Attendees and absentees |
| **Traceability matrix** | Which requirement links to which design, code, and test | The team, auditors |

> **The most important point: NO project needs all of these.** Choose by context, not by list.

---

## 2. How BRD and SRS differ

These two are the most commonly confused, and **organizations use the terms very differently**.

| | **BRD** | **SRS** |
|---|--------|---------|
| **Perspective** | Business | System |
| **Answers** | *"What must we achieve and why?"* | *"What must the system do to achieve it?"* |
| **Language** | Business language, no technical jargon | Precise, structured, verifiable |
| **Typical content** | Business objectives, current and desired processes, scope, constraints, success criteria | Functional requirements, nonfunctional requirements, external interfaces, business rules, analysis models |
| **Signed off by** | Business leadership | Business representatives and the technical team |

> **Because organizations use the terms differently, when joining a new place ask directly: *what does this document contain here, and who is the primary reader?*** Do not assume from the name.

**On agile projects** these usually compress: **vision and scope** keeps its directional role, while SRS content decomposes into **the backlog + acceptance criteria + a business rules catalog + a data dictionary**.

---

## 3. Choosing documents by context

**Five questions decide whether to write a document:**

1. **Who will read it, and what will they do with it?**
2. **Does this knowledge need to outlive the team's memory?**
3. **Is there a compliance, audit, certification, or contractual requirement?**
4. **Is the team distributed across locations or time zones?**
5. **Is the cost of recording less than the cost of rediscovering?**

**Three typical situations:**

| Context | A reasonable document set |
|---------|--------------------------|
| **Internal product, small co-located team** | Vision and scope, backlog + AC, business rules, data dictionary |
| **Outsourced project under contract** | Full BRD, SRS, traceability matrix, formal meeting minutes |
| **Regulated system (health, finance)** | All of the above plus full traceability and certification evidence |

> **The overarching principle: the cost of RECORDING knowledge is small compared with ACQUIRING it or regenerating it later.** But the cost of **maintaining** a document nobody reads is very high — in time and in trust, because a stale document does more harm than no document.

---

## 4. Writing useful meeting minutes

**Minutes are the most carelessly produced document and the one with the highest return if done well.**

**A four-part structure instead of continuous prose:**

**1. Decisions made.** *"Agreed the approval threshold is 50 million, effective from the June release."*

**2. Action items.** Each with **a named owner** and **a deadline**. *"Minh to confirm the retention period with Legal by Friday."*

**3. Open questions.** What remains unresolved and who will find the answer.

**4. Assumptions to verify.** *"Assuming every customer has a tax code — needs checking against real data."*

> **Separating these four turns minutes from a passive record into a working tool.** Readers find what they need instantly, and unfinished items do not sink into a paragraph.

**Three practical rules:**

- **Send within 24 hours**, while memories are fresh and corrections still possible.
- **Record decisions, not the debate** — unless the reasoning matters for the future.
- **Send to absentees too**, since they need the minutes most.

---

## 5. Version management and a single source of truth

**Three non-negotiable principles:**

**1. One single source of truth.** If the same requirement lives in three places, they will contradict each other within a month.

**2. Clear version identification.** Everyone must know which version they are discussing.

**3. A revision history recording what changed, who changed it, when, and WHY.**

> **The *"why"* field is the most important and the most frequently left blank.**
>
> Six months later someone looks at a strange requirement and asks *"why is it like this?"*. If the history says only *"updated section 3.4"*, you learn nothing. If it says *"changed from 30 to 60 days at Legal's request under regulation X"*, you immediately know whether it **is negotiable**.

**Signs of a broken process:**

- File names like **`SRS_final_v2_REALLY_final_MinhEdit.docx`**.
- Requirements living simultaneously in a Word document, a spreadsheet, and a tool — with nobody sure which is right.
- Nobody certain which version is current.

**Avoid redundancy.** Repeating a requirement in several places makes documents **easier to read but far harder to maintain** — every copy must change at once. Use **cross-references** rather than copying content.

---

## 6. Write for the reader, not for completeness

**Each document serves one audience, and that audience determines how you write.**

| Reader | What they need | How to write |
|--------|----------------|--------------|
| **Executives** | Value, cost, risk | Short, lead with the conclusion, back it with numbers, a one-page summary up front |
| **Business users** | Their daily work | Business language, concrete examples, visual diagrams |
| **Developers** | Detail, exceptions, constraints | Precise, structured, with sample data and payloads |
| **Testers** | Verification criteria | Clear acceptance criteria covering failure cases |

**Four general writing principles:**

- **Active voice, naming who does what.**
- **Avoid vague words** — fast, easy to use, appropriate, stable.
- **One sentence, one requirement** — the words *and, unless, except* usually signal two merged requirements.
- **Give concrete examples** — a sample payload removes ambiguity faster than any prose.

> **Do not fill the template for the sake of it.** If a section does not apply, write an explicit message such as *"No legal risks have been identified"* — do not leave it blank and do not delete it, since both leave readers wondering.

---

## 7. Key takeaways

- BA documents serve **three purposes: direction, specification, record** — choose by context, not by list.
- **No project needs every document type.**
- **A BRD answers what we must achieve and why; an SRS answers what the system must do.**
- Organizations use these terms very differently — **ask directly what a document contains and who reads it**.
- In agile, SRS content decomposes into **backlog, acceptance criteria, business rules catalog, and data dictionary**.
- Five deciding questions: **who reads it, must it outlive team memory, is there a compliance need, is the team distributed, recording versus rediscovery cost**.
- **Recording costs less than regenerating, but maintaining a document nobody reads costs a great deal.**
- **A stale document does more harm than no document**, because it manufactures false confidence.
- Minutes should separate four parts: **decisions, actions with owner and deadline, open questions, assumptions to verify**.
- **Send minutes within 24 hours** and include absentees — they need them most.
- **Record decisions, not the debate**, unless the reasoning matters for the future.
- Three non-negotiables: **one source of truth, clear versioning, a revision history with reasons**.
- **The "why" field is the most important and most often left blank.**
- **`SRS_final_v2_REALLY_final.docx` is the signature of a broken process.**
- **Repeating a requirement makes documents easier to read but far harder to maintain** — cross-reference instead.
- **Each audience needs a different way of writing**; executives want the conclusion first, developers want detail.
- **Do not fill a template for its own sake** — an inapplicable section deserves an explicit message, not a blank.

## 8. Summary

- The right document set is the **smallest one that still answers the questions of the people who genuinely need them**.
- **BRD and SRS serve two different perspectives**, and the names vary by organization, so ask.
- **Four-part meeting minutes** turn a passive record into a working tool.
- **One source of truth, clear versions, and recorded reasons** are what keep documentation trustworthy over time.
