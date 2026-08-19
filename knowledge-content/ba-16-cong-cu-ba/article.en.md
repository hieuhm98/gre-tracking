# BA Tooling: Jira, Confluence, Figma

## 1. Principles before product names

Tool lists change constantly, but **the selection principles do not**.

**Four principles:**

**1. Prefer the tool the team will ACTUALLY use.** A simple tool used consistently beats a powerful one that gets avoided.

**2. Prefer integration over standalone features.** A suite that talks to itself beats best-in-class tools that do not connect.

**3. Minimise the number of places the same information lives.** Each copy is an opportunity to drift out of sync.

**4. Do not let the tool dictate the process.** If you find yourself changing how you work only because the tool cannot support it, ask whether you picked the wrong tool.

> **The most important warning: a tool does NOT give you good requirements.** It helps you organize, search, link, and track. It does not elicit, clarify, detect gaps, or resolve stakeholder conflict. **An organization with weak analysis skills simply gets bad requirements organized more attractively.**

---

## 2. Jira — work and backlog management

**Jira is the most widely used work tracker in software teams.**

**Concepts a BA needs:**

| Concept | Meaning |
|---------|---------|
| **Issue** | A unit of work: story, task, bug, epic |
| **Issue type** | The classification: epic (large), story (one iteration), task (technical), bug, sub-task |
| **Backlog** | Ordered work not yet pulled into a sprint |
| **Sprint / board** | The work in the current iteration |
| **Workflow** | The chain of statuses an issue passes through |
| **Epic link** | Connects a story to its parent epic, showing progress by theme |
| **Label / component** | Horizontal classification for filtering and reporting |

**What a BA uses Jira for:**

- **Writing and maintaining stories and acceptance criteria** where the team actually works.
- **Linking stories to epics** to keep the bigger picture visible.
- **Answering questions on the issue itself** — every answer in a comment is a piece of context preserved permanently.
- **Tracking status** to report progress accurately by environment.
- **Linking defects to their originating story** to see which area is failing.

> **A high-value practice few teams adopt: when commit messages reference the issue ID, the requirement-to-code link is created AUTOMATICALLY as a side effect of normal work.** This is the most durable form of tracing — because it requires nobody to remember updating a separate table.

**Three Jira traps:**

- **Over-complicated configuration** with twenty mandatory fields — people fill in anything to get past the form and the data becomes worthless.
- **Stories written too briefly** on the assumption that detail comes from conversation — true for co-located teams, false for distributed ones.
- **Using Jira as a repository** that is never queried, filtered, or reported on.

---

## 3. Confluence — documentation and knowledge

**Confluence holds what must outlive a sprint.**

**A sensible split between Jira and Confluence:**

| Content | Belongs in |
|---------|-----------|
| Stories, acceptance criteria, defects | **Jira** — tied to running work |
| Product vision and scope | **Confluence** |
| Business rules catalog | **Confluence** |
| Data dictionary and glossary | **Confluence** |
| Process diagrams, analysis models | **Confluence** (or a drawing tool, embedded) |
| Meeting minutes and decisions | **Confluence** |
| Architectural decisions with rationale | **Confluence** |

> **The dividing principle: Jira for short-lived items tied to work; Confluence for what outlives the project.**

**Four practices that keep Confluence useful rather than a dumping ground:**

**1. A clear folder structure** with **an index page** for each area.

**2. A last-updated date and an owner** on every important page. A page without an owner goes stale and nobody fixes it.

**3. Delete or mark obsolete** pages that are no longer correct. **A wrong page does more harm than no page.**

**4. Two-way links with Jira** — the Confluence page references the relevant epic, and vice versa.

---

## 4. Diagramming tools

**Three groups with three different purposes:**

| Group | Examples | Strong at |
|-------|----------|-----------|
| **General drawing** | Draw.io / diagrams.net, Lucidchart | Flowcharts, architecture diagrams, org charts; free or cheap; easy |
| **Dedicated modeling** | Enterprise Architect, Visual Paradigm, specialist BPMN tools | Enforcing notation rules, linking many models, tracing to requirements |
| **Collaborative whiteboards** | Miro, FigJam | Remote workshops, story mapping, brainstorming, sketching together |

**Why dedicated modeling tools are worth considering on large projects:**

- They **enforce each method's rules**, catching syntax errors and inconsistencies a reviewer might miss.
- They **link several diagrams** to each other and to the corresponding requirements.
- They make it **easy to iterate and refine** — and you almost never draw it right the first time.

> **But for most projects a general drawing tool is enough.** Do not buy an expensive modeling tool when your real problem is that nobody reads the diagrams you draw.

**Practical advice: more important than the tool is that the whole project — ideally the whole organization — follows ONE notation convention, and everyone who must review or use the models knows how to interpret them.**

---

## 5. Wireframing and design tools

| Tool | Character | Useful to a BA when |
|------|-----------|--------------------|
| **Balsamiq** | Deliberately hand-drawn look, low fidelity | **The best choice for a BA** — the crudeness makes reviewers comment on structure rather than colour |
| **Figma** | Full design, real-time collaboration, interactive prototypes | When the BA needs to view and comment on the designer's work |
| **Whiteboard or paper** | Fastest and cheapest | In workshops and face-to-face meetings |

> **For a BA, Figma is most useful not for DRAWING but for READING and COMMENTING.** The designer works in Figma; the BA reviews it against the requirements and leaves comments right where the problem is — *"what does this list's empty state show?"*, *"what does an unauthorised user see here?"*

**Repeating the key principle: whenever you present a wireframe, state clearly that it is a sketch of structure and flow, not the final design.**

---

## 6. AI tools in BA work

**AI is now part of the BA toolkit, but how you use it decides its value.**

**The three highest-hit-rate uses:**

**1. Generating test cases from acceptance criteria**, especially boundary and exception cases.

**2. Challenging your own document** — *"read this requirement and list every way a developer could interpret it"*.

**3. Finding gaps in a process description** — *"which exception situations are not addressed?"*

**Three risks to manage:**

- **Hallucination** — never put AI-sourced information into a document unverified, especially numbers and legal requirements.
- **Data leakage** — pasting requirements or customer data into a public tool can breach confidentiality agreements. **Know your company's policy before using one.**
- **Loss of thinking depth** — for the most important parts, think it through yourself first, then ask AI to compare.

> **The most effective use: treat AI as an always-available reviewer, not a ghostwriter.** The strongest prompt is usually asking it to **find faults** in what you already wrote.

---

## 7. A minimum toolkit for a BA

If you are starting out and unsure what to learn first, this is a sensible order:

**Essential:**

1. **A work tracker** — Jira or equivalent. This is where the team actually works.
2. **A documentation tool** — Confluence, a wiki, or even a clearly structured folder.
3. **A diagramming tool** — Draw.io is enough and free.
4. **A spreadsheet** — still the strongest tool for quick data analysis, simple traceability matrices, and checklists.
5. **SQL** — to query data yourself and test assumptions without waiting on anyone.

**Worth having:**

6. A low-fidelity wireframing tool.
7. A collaborative whiteboard for remote workshops.
8. An AI assistant, used correctly.

> **More important than anything on this list: the ability to ask the right question.** Tools amplify existing capability — they do not create new capability.

---

## 8. Key takeaways

- **Prefer the tool the team will actually use** — simple and consistent beats powerful and avoided.
- **Prefer integration over standalone features**, and minimise where the same information lives.
- **Do not let the tool dictate the process** — changing how you work for a tool suggests the wrong tool.
- **Tools do NOT give you good requirements** — weak analysis just yields bad requirements organized attractively.
- **Jira for what is tied to running work; Confluence for what outlives the project.**
- **Commit messages referencing issue IDs create tracing automatically** as a side effect of normal work.
- **Twenty mandatory fields make people fill in anything** and the data becomes worthless.
- **Very brief stories suit co-located teams but fail distributed ones.**
- Confluence pages need **an owner and a last-updated date**; ownerless pages go stale.
- **A wrong documentation page does more harm than no page.**
- **Dedicated modeling tools enforce notation rules** and link models, but most projects need only a general drawing tool.
- **More important than the tool is the whole project following one notation convention.**
- **Balsamiq is the best BA choice** because its crudeness draws comments about structure rather than colour.
- **For a BA, Figma is most useful for READING and COMMENTING**, not drawing.
- The three best AI uses: **generating test cases, challenging your document, finding process gaps**.
- **Never put AI-sourced information into a document unverified.**
- **Pasting customer data into public AI tools can breach confidentiality agreements.**
- The minimum kit: **work tracker, documentation, diagramming, spreadsheet, SQL**.
- **Spreadsheets remain the strongest tool for quick data analysis and checklists.**
- **The ability to ask the right question outweighs any tool** — tools amplify rather than create capability.

## 9. Summary

- Choose tools by **actual adoption and integration**, not by feature list.
- **Jira and Confluence divide by information lifespan**: short-lived work items versus long-lived organizational knowledge.
- **Keep diagrams and wireframes low-fidelity early** to attract feedback about structure.
- **AI is an always-available reviewer, not a ghostwriter** — and everything it produces needs your verification.
