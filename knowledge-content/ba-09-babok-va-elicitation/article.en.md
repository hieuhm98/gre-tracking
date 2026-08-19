# BABOK & Elicitation Techniques

## 1. What BABOK is and what it is for

**BABOK (Business Analysis Body of Knowledge)** is the standard reference compiled by the **IIBA (International Institute of Business Analysis)**, systematising what the business analysis profession covers.

**BABOK is NOT:**

- A mandatory process to follow step by step.
- A to-do list for every project.
- Something you must memorise to do the job.

**BABOK IS:**

- **A shared vocabulary** so practitioners across organizations understand each other.
- **A checklist** that helps you notice which group of work you are skipping.
- **The basis for the ECBA, CCBA, and CBAP certifications.**

> **The most pragmatic way to use BABOK: treat it as a map rather than a mandatory route.** When a project is struggling and you cannot say why, comparing against the knowledge areas usually points straight at what is being skipped.

---

## 2. The six BABOK knowledge areas

**1. Business Analysis Planning and Monitoring** — Planning the analysis work itself: which approach, who participates, what deliverables, how effectiveness is measured.

> **This is the most-skipped area.** Many BAs dive straight into interviews without pausing to ask: *how risky is this project, and how much analysis effort is proportionate?*

**2. Elicitation and Collaboration** — Drawing out information and sustaining collaboration with stakeholders. In practice this consumes the most time.

**3. Requirements Life Cycle Management** — Managing requirements over time: tracing, maintaining, prioritizing, assessing change, obtaining approval.

**4. Strategy Analysis** — Understanding the need at a strategic level: current state, desired state, gap analysis, scope, and risk.

**5. Requirements Analysis and Design Definition** — Analysing, modeling, specifying, identifying solution options, and evaluating them.

**6. Solution Evaluation** — Measuring whether the solution actually delivers value, and recommending improvements.

> **Area 6 is the second most-skipped.** Many teams ship a feature and move to the next without ever checking whether it solved the original problem.

**Beyond the six areas, BABOK defines *underlying competencies*** — analytical thinking, communication, business knowledge, interaction skills — and **perspectives** (agile, business intelligence, IT, business architecture, business process management) describing how to apply BABOK in each context.

---

## 3. Why it is called elicitation, not gathering

> **The word *elicitation* was chosen deliberately over *gathering*. Requirements are not lying around waiting to be picked up — they must be DRAWN OUT.**

The reasons:

- **Users do not know everything they need.** Many needs only surface once they see a solution.
- **Much of what they know goes unsaid** because they consider it obvious. This is **tacit knowledge** — the BA's main enemy.
- **What they do say is usually a solution**, not a need.
- **Different groups describe the same process differently**, and nobody knows they are contradicting each other.

**Three kinds of information you must draw out:**

| Kind | Character | Approach |
|------|-----------|----------|
| **What they say** | Easiest to get, usually a solution or a wish | Interviews, workshops |
| **What they do** | Differs from what they say, and is more reliable | Observation, usage data analysis |
| **What they do not say** | Tacit knowledge, assumptions, exceptions | Challenging questions, extreme examples |

---

## 4. Interviews — the foundational technique

**Interviewing is the most used technique and the most often done badly.**

### Preparation

- **Define a concrete goal for this session.** *"Learn about the system"* is a poor goal. *"Understand the approval process from receipt to payment, including exceptions"* is clear.
- **Prepare questions but do not cling to the list.** The best answers usually come from follow-up questions.
- **Read the existing documents and data first.** Do not spend someone's valuable time on what you could have read yourself.
- **Send the topic in advance** so they can think.

### During the interview

- **Start with open questions**, narrowing with closed ones to confirm.
- **Paraphrase frequently** — the single most powerful technique.
- **Use deliberate silence.** After they answer, wait a few seconds. A great deal of valuable information arrives in that pause.
- **Ask about exceptions:** *"Are there cases that go differently?"*, *"When did this last not go smoothly?"*
- **Do not lead.** *"You would want an email notification, right?"* buys you a meaningless nod.

### After the interview

- **Write it up within 24 hours**, while memory is fresh.
- **Separate: confirmed facts / assumptions to verify / open questions / decisions made.**
- **Send it back to the interviewee for confirmation.** This is the most-skipped step and the one that causes the most defects.

---

## 5. Workshops — when you need several people at once

**Workshops suit:** needing several perspectives simultaneously, resolving disagreements between departments, or building shared understanding quickly.

**Four factors that decide workshop success:**

**1. A facilitator separate from a note-taker.** Doing both means doing both badly.

**2. A clear goal and output.** *"By the end we will have an approval process diagram all three departments agree on."*

**3. The right people in the room.** Without someone who can decide, the workshop only produces a list of open questions.

**4. Something visual to look at together.** A whiteboard, sticky notes, a rough diagram. **Many disagreements evaporate once everyone looks at the same picture.**

> **A common trap: inviting too many people.** A workshop with 15 becomes a one-way presentation. The effective number is usually **5 to 8**.

---

## 6. Observation, surveys, and document analysis

### Observation

**This is the highest-value technique and the least used.**

You sit beside a user and watch them work. What you will see:

- **What they actually do**, as opposed to what they describe.
- **The workarounds** — each one an unmet requirement.
- **Steps done outside the system** — personal spreadsheets, notebooks, chat messages. **This is a gold mine.**

> **The principle: every Excel spreadsheet a user maintains alongside the official system is an indictment of missing functionality.**

**Two modes:** **passive** (watch only, no questions, so as not to interrupt) and **active** (watch while asking *"why do you do this step?"*).

### Surveys

**Suitable when:** you need input from many users, or quantitative data to confirm a hypothesis.

**Not suitable for:** discovering new problems, since you only get answers to the questions you already thought of.

**Principles:** keep it short, avoid leading questions, always include at least one open question, and **always pilot it with a few people before sending it widely**.

### Document and data analysis

**Documents:** existing process descriptions, contracts, regulations, reports, support logs, and the backlog of outstanding change requests.

> **The support ticket repository is a ready-made list of pain points**, and the change request backlog is a wish list already articulated by real users. Very few BAs mine these two sources.

**Data:** run queries against real data to test assumptions. *"Customers always enter a phone number"* — count what percentage of records actually have one.

---

## 7. Choosing the right technique

| Situation | Suitable technique |
|-----------|-------------------|
| Understanding a complex process deeply | Interviews + observation |
| Resolving disagreement between departments | A workshop |
| Users who work by habit and cannot articulate it | On-site observation |
| Needing input from hundreds of people | A survey |
| A legacy system with no documentation | Code and data analysis, interviewing long-time users |
| Confirming an assumption | Querying real data |
| Requirements still very vague | Prototyping and gathering feedback |
| Discovering needs nobody has considered | Observation + a brainstorming workshop |

> **The most important principle: never rely on a single technique.** Each has its own blind spot. Interviews give you what they say; observation gives you what they do; data gives you what actually happens. **Cross-checking those three is where you find the truth.**

---

## 8. Key takeaways

- **BABOK is a map and a shared vocabulary, not a mandatory process** to follow step by step.
- The six knowledge areas: **planning, elicitation, requirements life cycle management, strategy analysis, analysis and design definition, solution evaluation**.
- **Analysis planning is the most-skipped area** — few pause to ask how much effort is proportionate to the risk.
- **Solution evaluation is the second most-skipped** — few check whether the feature solved the original problem.
- The word **elicitation** was chosen over **gathering** because requirements do not lie around waiting to be collected.
- Three kinds of information: **what they say, what they do, what they do not say** — each needs a different approach.
- **Tacit knowledge is the BA's main enemy** — people leave it unsaid because they consider it obvious.
- In interviews: **open questions first, paraphrase frequently, use deliberate silence**.
- **Do not spend someone's time asking what you could have read yourself.**
- **Sending notes back for confirmation** is the most-skipped step and the one causing the most defects.
- Workshops need: **a facilitator separate from the note-taker, a clear goal, the right people, something visual**.
- **Effective workshops usually have 5 to 8 people**; 15 turns it into a one-way presentation.
- **Observation is the highest-value and least-used technique.**
- **Every spreadsheet running alongside the official system is an indictment of missing functionality.**
- **Surveys cannot discover new problems** — you only get answers to questions you already thought of.
- **Support tickets and the change request backlog are two ready-made sources very few BAs mine.**
- **Never rely on a single technique** — each has its own blind spot.
- **Cross-checking what they say, what they do, and the real data is where you find the truth.**

## 9. Summary

- BABOK gives you **a map for noticing which group of work you are skipping**, not a process to follow mechanically.
- **Elicitation is hard because most important information is tacit knowledge** users never think to mention.
- Interviews, workshops, observation, surveys, and document analysis **each have their own strengths and blind spots**.
- The truth usually sits **where the three information sources disagree**, so always cross-check.
