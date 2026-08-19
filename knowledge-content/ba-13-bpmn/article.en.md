# BPMN & Business Process Modeling

## 1. What BPMN is and why it exists

**BPMN (Business Process Model and Notation)** is the **international standard** for modeling business processes, maintained by the OMG.

**The problem it solves:** flowcharts are easy to read but **lack notation for things that matter in real business** — time events, messages between parties, subprocesses, error handling, parallel paths. When you try to draw those with a flowchart, everyone draws them differently and nobody is sure they read them the same way.

| | **Flowchart** | **BPMN** |
|---|--------------|----------|
| **Notation** | Simple, a few basic shapes | Rich and standardized |
| **Who can read it** | Almost anyone, immediately | Needs a little notation training |
| **Can express** | Steps, decisions, flow | Also: events, messages, subprocesses, parallel paths, error handling |
| **Suits** | Simple processes, quick sketches | Complex, multi-party processes needing precision |
| **Executable** | No | Yes — many engines run BPMN directly |

> **Choose by your audience, not by how impressive the notation looks.** If you draw BPMN for a group that has never seen it, prepare a notation key and walk through an example first.

---

## 2. The four core notation groups

You do not need all of BPMN. **About 20 percent of the notation covers 80 percent of real processes.**

### Flow objects — what happens

| Element | Shape | Meaning |
|---------|-------|---------|
| **Event** | Circle | Something happens: a start, an end, or something in between |
| **Activity** | Rounded rectangle | Work being performed |
| **Gateway** | Diamond | A branch or a merge point |

### Connecting objects — how things link

- **Sequence flow** (solid arrow) — order of execution **within one pool**.
- **Message flow** (dashed arrow) — a message exchanged **between two different pools**.
- **Association** (dotted line) — links an annotation or document to an element.

> **The most common notation error: using a solid arrow between two pools.** Between pools there are only messages, never control flow — because each pool is an independent organization whose process you do not control.

### Swimlanes — who does it

- **Pool** — an independent participant: your company, the customer, a bank, a supplier.
- **Lane** — a role or department **inside** one pool.

### Artifacts — supporting information

- **Data object** — a document or data created or consumed.
- **Annotation** — an explanatory note.

---

## 3. Events — richer than you expect

Events are where BPMN goes far beyond flowcharts. **Three positions and several types.**

**Three positions:**

- **Start event** (thin border) — starts the process.
- **Intermediate event** (double border) — occurs midway.
- **End event** (thick border) — ends the process.

**The most-used types:**

| Type | Inner symbol | Example |
|------|-------------|---------|
| **None** | Empty | An ordinary start or end |
| **Message** | Envelope | Receiving an order from a customer; sending a confirmation email |
| **Timer** | Clock | Runs at midnight daily; wait 3 days then remind |
| **Error** | Lightning bolt | Processing failed, switch to a recovery path |
| **Conditional** | List | When stock falls below a threshold |

> **The timer event is the notation BAs most often omit from specifications.** Many processes contain *"if there is no response after 3 days then…"* — and if you do not draw it, it will not be implemented.

**Boundary events** attach to **the edge of an activity**, showing what happens if something occurs **while** the activity is running.

> For example, attach a timer to *"Wait for customer confirmation"* to express *"if unconfirmed after 48 hours, cancel automatically"*. **This is how BPMN expresses a timeout — something flowcharts struggle to convey.**

---

## 4. Gateways — branching correctly

This is where beginners go wrong most often. **Three common gateways:**

**1. Exclusive gateway (XOR) — a diamond with an X.**

Exactly **ONE branch** is taken. The conditions must be mutually exclusive.

> *"Orders above 50 million → approval path; orders of 50 million or less → straight-through processing."*

**2. Parallel gateway (AND) — a diamond with a plus.**

**All branches run.** The merging gateway waits for all of them.

> *"After receiving an order: check credit AND check stock simultaneously. Only when both finish is the order confirmed."*

**3. Inclusive gateway (OR) — a diamond with a circle.**

**One or more branches run**, depending on which conditions are true.

> *"If the order contains frozen goods → prepare a refrigerated vehicle. If it contains fragile items → special packaging. One order may need both."*

> **The three most common gateway errors:**
>
> **1. Using XOR when the branches can actually co-occur.** The result: the system skips a necessary handling.
>
> **2. Forgetting the default branch of an XOR.** Every XOR must have a branch for **every possible outcome**, including the case where no condition matches.
>
> **3. Splitting in parallel without merging.** If you split with AND, you must merge with AND, or the process continues before all branches finish.

---

## 5. Pools, lanes, and organizational boundaries

**A pool represents an independent participant — an organization whose internal process you do not control.**

**Two ways to draw an external pool:**

- **A black box pool** (empty, nothing drawn inside) — when you only care about the **messages exchanged**, not what they do internally. **This is the most common and most correct usage for customers, banks, and suppliers.**
- **A full pool** — when you genuinely need to describe their internal process.

**Lanes divide your pool by role or department.**

> **The greatest value of lanes: they expose the handoffs between roles — the places where business processes most often lose time and information.**

**Key rules:**

- **Within one pool:** use sequence flow (solid).
- **Between pools:** use only message flow (dashed).
- **A subprocess may never cross a pool boundary.**

---

## 6. As-is and to-be models

**As-is** describes the process **running today**. **To-be** describes it **after the new system**.

**Why you need as-is:**

- It builds **shared understanding** — often the first time anyone drew the whole end-to-end process.
- It **exposes waste**: repeated steps, waiting, unnecessary handoffs.
- It provides a **measurement baseline** for proving improvement later.
- It **reveals who actually participates** — usually more people than anyone thought.

> **But do not over-invest in as-is.** The risk is real: a team spends three months drawing a perfect, exhaustively detailed model of a process about to be replaced. **Draw enough to understand the problem and measure it, then move to to-be.**

**To-be design principles:**

- **Start from the desired outcome** and work backwards.
- **Reduce handoffs** — each one adds delay and risk of information loss.
- **Push decisions to the lowest possible level**, escalating only above a threshold.
- **Parallelise what can be parallel** rather than keeping a sequential order.
- **Separate the main flow from exception flows** — many processes are slow for everyone because they were designed around 5 percent of rare cases.

> **The most important question moving from as-is to to-be: does this step exist for a business need, or for a limitation of the old way?** If the latter, do not automate it — eliminate it.

---

## 7. From process model to requirements

A model only earns its keep when it produces concrete requirements. **For each element in the to-be model, ask:**

| Element | The question that yields a requirement |
|---------|---------------------------------------|
| **Activity** | What functionality supports this step? What data goes in and out? Who is permitted to perform it? |
| **Gateway** | What exactly is the condition? Which business rule is this? Is any branch uncovered? |
| **Timer event** | What is the exact deadline? Measured from what moment? What happens when it expires? |
| **Message flow** | What is the data format? Synchronous or asynchronous? What happens if the other side does not respond? |
| **Error event** | Which errors are handled? Who is notified? What happens to partial data? |
| **Lane** | Who belongs to this role? What permissions do they need? |

> **This is where the model pays its dividend: every symbol you draw generates one or more concrete questions, and every question answered is a requirement that did not get missed.**

---

## 8. Key takeaways

- **BPMN is the international standard** addressing flowcharts' weakness: no notation for events, messages, subprocesses, and parallel paths.
- **About 20 percent of the notation covers 80 percent of real processes** — you need not learn it all.
- **Choose by your audience**, and prepare a notation key if the group is unfamiliar.
- **Solid sequence flow within a pool; dashed message flow between pools.**
- **The most common notation error is joining two pools with a solid arrow** — you do not control another organization's process.
- **Timer events are the notation BAs most often omit**; undrawn, the *"after 3 days"* rule never gets built.
- **Boundary events are how BPMN expresses a timeout** — something flowcharts struggle with.
- **XOR takes exactly one branch; AND runs all; OR runs one or more by condition.**
- Three gateway errors: **XOR where branches co-occur, a missing default branch, splitting with AND without merging**.
- **A black box pool is the correct choice for customers, banks, and suppliers** when you only care about the messages.
- **Lanes expose the handoffs between roles** — where processes most often lose time and information.
- **Do not over-invest in an as-is model** of a process about to be replaced.
- To-be design: **start from the outcome, reduce handoffs, lower decision points, parallelise, separate exception flows**.
- The key question: **does this step exist for a business need or for an old limitation?**
- **Every symbol in the to-be model generates concrete questions**, and each answer is a requirement that did not get missed.
- **A message flow always implies questions about data format and behaviour when the other side is unavailable.**

## 9. Summary

- BPMN beats flowcharts on **events, inter-party messages, parallel paths, and error handling** — exactly what matters in real business.
- **Pools mark organizational boundaries and lanes mark internal roles**, and the connection rules between them must be respected.
- **As-is to understand and measure; to-be to design** — and do not get stuck in as-is.
- A model's ultimate value is that it **turns into concrete questions that produce more complete requirements**.
