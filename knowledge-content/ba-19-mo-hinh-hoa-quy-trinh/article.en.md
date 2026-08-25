# The Process Diagram Set: Context, Functional & Cross-Functional Flow

## 1. Four views, four diagrams

No **single** diagram answers every question about a process. Cramming everything into one picture is the fastest way to produce something nobody can read.

Classic process modeling uses **four diagrams at four levels of zoom**. Each answers exactly one question:

| Diagram | The question it answers | Zoom level |
|---------|-------------------------|------------|
| **Context model** | What does the organization exchange with the **outside world**? | Furthest out — the whole organization is one dot |
| **Functional flow diagram** | **Which department exchanges what information** with which? | Inside the organization, no sequence yet |
| **Cross-functional flow diagram** | **Who does which step**, in what **order**? | Step by step, with lanes of responsibility |
| **Process flowchart** | Every **step, decision, and loop** inside one process? | Closest in — operational detail |

> **The order you draw them in matters as much as what you draw.** Work outside in: settle the boundary, then the departments, then the sequence, then the detail. Working the other way — starting with a detailed flowchart — is the most common way to discover in week six that you left out an entire participant.

**Why a BA needs all four:** each zoom level exposes a different kind of missed requirement. The context model exposes **forgotten integrations**. The functional flow exposes **information nobody owns**. The cross-functional flow exposes **handoffs that cause delay**. The flowchart exposes **decision branches that were never covered**.

---

## 2. Context model — draw the boundary before you draw the process

**A context model puts the organization (or system) in the middle and every external party around it.** Each arrow is a flow — data, documents, goods, or money — labeled with what it actually is.

It deliberately says **nothing** about what happens inside the organization. That is its strength, not a gap.

**The classic example — an organization that makes and sells things:**

```
                        Assignments,
                        Payments
       Purchase Orders,      ↓        Invoices
       Payments          ┌────────┐      ↑
  [Customer] ──────────→ │        │ ←──────── [Contractor]
      ↑ ─────────────────│ Organi-│
       Products,         │ zation │ ── Deposits ────→ [Bank]
       Invoices          │        │ ←── Withdrawals,
                         └────────┘     Statements
        Orders,          ↙        ↘  Shipments,
        Payments        ↙          ↘ Payments
   [Supplier] ─── Materials,    [Shipping Company]
                  Invoices  ──────→ Invoices
```

It reads more clearly as a table — and **the table is what belongs in your document**, because it survives being printed in black and white:

| External party | The organization **sends** | The organization **receives** |
|----------------|----------------------------|-------------------------------|
| **Customer** | Products, Invoices | Purchase Orders, Payments |
| **Contractor** | Assignments, Payments | Invoices |
| **Supplier** | Orders, Payments | Materials, Invoices |
| **Shipping Company** | Shipments, Payments | Invoices |
| **Bank** | Deposits | Withdrawals, Statements |

**A context model settles three things projects usually argue about later:**

1. **Scope** — what is inside the circle is ours; what is outside belongs to someone else.
2. **The integration list** — nearly every arrow becomes an interface, a file exchange, or an API.
3. **The stakeholder list** — every external box is a group that has to be consulted.

> **A quick check for a good context model: every arrow is labeled, and every external party has arrows in both directions.** A party that only receives and never sends anything back is usually a sign you missed a flow — or that the party does not really belong in the context.

**One distinction worth stating explicitly:** the context model of an **organization** is not the context model of a **system**. For an organization, the circle is the company and the outside is customers, banks, suppliers. For a system, the circle is the software and the outside may include **internal departments** too. Say which one you are drawing.

---

## 3. Functional flow diagram — which function exchanges what with which

Step inside the boundary. **A functional flow diagram shows the functions (departments, roles) and the information flowing between them — but says nothing about time order yet.**

**The example — a credit card process:**

```
                    ┌────────────┐
       Bill/        │  Customer  │  Purchases
       Statement ↗  └────────────┘  ↘  Change, Receipt
    ┌──────────┐      ↖ Payment      ┌──────────┐
    │ Billing  │                     │ Merchant │
    │Department│                     └──────────┘
    └──────────┘   ↖ Request for Approval ↗
       ↖ Purchase   ┌──────────────────┐  ↘ Decision
         Info       │  Authorizations  │
                    │    Department    │
                    └──────────────────┘
```

| From | To | Information exchanged |
|------|-----|----------------------|
| Customer | Merchant | Purchases |
| Merchant | Customer | Change, Receipt |
| Merchant | Authorizations Department | Request for Approval |
| Authorizations Department | Merchant | Decision |
| Authorizations Department | Billing Department | Purchase Info |
| Billing Department | Customer | Bill / Statement |
| Customer | Billing Department | Payment |

**This diagram answers what the context model cannot:** information enters the organization, and then **whose hands does it pass through** before it leaves again.

> **The biggest payoff of a functional flow diagram: it exposes "orphan" information.** If the Authorizations Department sends *Purchase Info* to Billing but no diagram shows Billing using it for anything, either you are missing a flow, or that data is being collected and nobody needs it.

**Why leaving out sequence is deliberate:** with no order drawn, the meeting stays on **"who needs to know what"** instead of sinking into *"does this step come before that one?"*. Sequence is the next diagram's job.

---

## 4. Cross-functional flow diagram — who does which step, in what order

This is the diagram **most often used in BA documentation**, also known as a **swimlane diagram**.

**The structure:** one large box named for the process; inside it, horizontal or vertical **lanes**, one per role; steps sit in the lane of whoever performs them; arrows connect the steps in **true time order**.

**The example — Credit Card Process, three lanes:**

```
Credit Card Process
─────────────────────────────────────────────────────────────────────
Customer      | ●Make purchase                  [Receive    [Make
              |      │                           statement]→ payment]
              |      ↓                              ↑            │
─────────────────────────────────────────────────────────────────────
Merchant      | [Submit purchase   [Complete        │            │
              |  amount]            sale]           │            │
              |      │                ↑   │         │            │
─────────────────────────────────────────────────────────────────────
Credit Card   |      ↓                │   ↓         │            ↓
Company       | [Authorize purchase]──┘  [Post     [Bill    [Post      ● Account
              |                           purchase  customer] payment]   current
              |                           to acct]──┘
─────────────────────────────────────────────────────────────────────
```

The full sequence, read as a table:

| # | Lane | Step |
|---|------|------|
| 1 | Customer | Make purchase *(start point)* |
| 2 | Merchant | Submit purchase amount |
| 3 | Credit Card Company | Authorize purchase |
| 4 | Merchant | Complete sale |
| 5 | Credit Card Company | Post purchase to customer account |
| 6 | Credit Card Company | Bill customer |
| 7 | Customer | Receive statement |
| 8 | Customer | Make payment |
| 9 | Credit Card Company | Post payment |
| 10 | Credit Card Company | Account current *(end point)* |

**The most informative thing on this diagram is not the steps — it is every time an arrow crosses a lane.** In the example above there are **six handoffs**: 1→2, 2→3, 3→4, 4→5, 6→7, 8→9.

> **Every lane crossing is a risk point.** There the process waits on someone else, information has to be passed across in full, and responsibility changes owner. It is also exactly where you should ask: *how long does this handoff take? what data goes with it? what happens if the other side never responds?*

**Rules for drawing one:**

- **Lanes are roles, not people.** "Accounts clerk", not "Lan".
- **Every step sits in exactly one lane.** A step straddling two lanes means you have not decided who owns it — decide, or split it into two steps.
- **Read in one direction.** With horizontal lanes, time runs left to right; an arrow going back should only ever be a deliberate loop.
- **Three to five lanes is the workable range.** Many more means you are merging several processes into one diagram.

---

## 5. Process flowchart — every step, every decision, every loop

When you need **the full operational detail of one process**, use a process flowchart. It is the only one of the four that forces you to cover **every possible outcome** of every decision.

**Three symbols cover most cases:**

| Shape | Meaning |
|-------|---------|
| **Stadium (rounded)** | Start or end point — a *terminator* |
| **Rectangle** | A processing step |
| **Diamond** | A decision — every branch out of it must be labeled |

**The example — how a consulting firm takes in a request:**

```
( Customer calls )
        ↓
[Get customer information]
        ↓
[Determine type of service required]
        ↓
   ◆ Do we perform the service? ──No──→ [Recommend another firm] ──→ ( Done )
        │ Yes
        ↓
[Confirm type of service needed] ←──────────────┐
        ↓                                       │ No
   ◆ Is a qualified consultant available? ──────┘
        │ Yes
        ↓
[Determine cost of service]
        ↓
   ◆ Confirm customer agrees to the cost ──Yes──→ [Create JOB form]
        │ No                                             ↓
        ↓                                    [Give JOB form to office assistant]
[Recalculate the cost]                                   ↓
        ↓                                       ( JOB form to assistant )
   ◆ Does customer agree to new cost? ──Yes──→ [Create JOB form]
        │ No
        ↓
    ( Done )
```

**Three details in this example are worth memorizing:**

1. **The loop has a way out.** When no qualified consultant is available, the flow returns to *Confirm type of service needed* — but it returns to a step that **can change the outcome** (re-confirming what service is actually needed), not straight back to the question it just answered. A loop that returns to the same point without changing anything is an infinite loop.

2. **The "No" branches are not abandoned.** Both price questions have an explicit path for a "no": one leads to recalculating the cost, the other leads to an ending.

3. **Two different end points, on purpose.** *Done* is an ending with no work; *JOB form to assistant* is an ending with work. Collapsing both into a single *End* erases the most important thing the process tells you.

> **How to check a flowchart: walk every branch until it reaches a terminator.** If any branch dead-ends, or any diamond has only one way out, the diagram is not finished.

---

## 6. Choosing a diagram — and where BPMN fits

| If you need to… | Use |
|-----------------|-----|
| Settle scope and find every party involved | **Context model** |
| Understand how information moves between departments | **Functional flow diagram** |
| Show who does what and where the handoffs are | **Cross-functional flow diagram** |
| Specify every step and every decision branch in full | **Process flowchart** |
| Model precisely, across many parties, and possibly execute it | **BPMN** |

**How BPMN relates:** BPMN does not replace the four diagrams above — it is **a standardized upgrade of the cross-functional flow diagram**, plus events, messages, subprocesses, and error handling.

| | Cross-functional flow diagram | BPMN |
|---|---|---|
| **Lanes** | Lanes, by whatever convention you set | Pools (organizations) and Lanes (roles), formally defined |
| **Connecting two separate organizations** | Same arrow as everywhere else | Must use a dashed message flow |
| **Timers and timeouts** | No notation for them | Timer events, boundary events |
| **Audience** | Anyone can read it immediately | Needs a little training |

> **The practical rule: use a cross-functional flow diagram to *discuss* with the business, and BPMN to *specify* for the delivery team.** Many BAs burn time arguing which notation is better, when the answer depends on **who is going to read the drawing**.

**Do not skip the context model just because it looks simple.** It is the cheapest diagram to draw and the one that most often prevents the most expensive mistake — discovering late that a participant was never in scope.

---

## 7. Common process modeling mistakes

| Mistake | Why it hurts | The fix |
|---------|--------------|---------|
| **Unlabeled arrows** | "Something is exchanged" is useless; later nobody knows what data has to move | Every flow states **what** is passed |
| **Mixed zoom levels** | One diagram holding both "Sell products" and "Click Save" leaves the reader lost | One diagram, one level of detail |
| **Lanes named after people** | The diagram breaks the day that person changes jobs | Lanes are **roles** |
| **A diamond with one way out** | The other branch will never be built | Every decision covers every possible outcome |
| **A loop with no exit** | The process hangs in real life, not just on paper | Every loop needs a stop condition or a retry limit |
| **Missing terminators** | Nobody knows what state the process ends in | Every branch reaches an end point |
| **Quietly "tidying up" the as-is** | You lose the baseline for proving improvement, and the people who run the process will not recognize it | As-is is **reality**, even when reality is messy |
| **Never replaying it with the people who do the work** | The diagram shows the process as managers imagine it, not the one that runs | Walk the diagram with the people who actually perform it |

> **One very effective check: hand the diagram to someone who was not in the meeting and ask them to narrate the process back.** Wherever they hesitate is where the diagram is unclear — and that is usually exactly where the delivery team will misread it.

---

## 8. Key takeaways

- **No single diagram answers every question.** Four diagrams at four zoom levels: context → functional flow → cross-functional flow → flowchart.
- **Draw outside in.** Settle the boundary first and the detail last; going the other way is how you discover a missing participant far too late.
- **A context model puts the organization in the middle with every external party around it**, every flow labeled — and says nothing about what happens inside.
- **Nearly every arrow on a context model becomes an integration**, and every external box is a stakeholder who has to be consulted.
- **A functional flow diagram shows which department exchanges what information**, deliberately omitting sequence so the meeting stays on "who needs to know what".
- **A functional flow diagram exposes "orphan" information** — data that is sent but never used.
- **The cross-functional flow (swimlane) diagram is the one most used in BA documentation**: lanes are roles, each step sits in exactly one lane, and time runs in one direction.
- **The most informative thing on a swimlane is every lane crossing** — each handoff is a point of waiting, information loss, and changed ownership.
- **A process flowchart must cover every outcome of every decision**; a diamond with only one way out means the diagram is unfinished.
- **A loop must return to a step that can change the outcome**, otherwise it is an infinite loop.
- **Several different end points are legitimate and often necessary** — "ended with no work" is not the same as "ended with work".
- **BPMN does not replace these four diagrams**; it is the standardized form of the cross-functional flow diagram, with events, messages, and error handling added.
- **Choose the diagram by its audience:** swimlanes to discuss with the business, BPMN to specify for the delivery team.
- **Unlabeled arrows, lanes named after people, and a "tidied up" as-is** are the three fastest ways to destroy a model's value.
- **Check the diagram with someone who was not in the meeting:** where they hesitate is where the delivery team will misread it.

## 9. Summary

- Process modeling is **a set of diagrams, not a diagram** — each has exactly one question to answer and one level of detail to hold.
- **The context model settles scope, the functional flow settles information, the cross-functional flow settles responsibility and sequence, the flowchart settles every branch.**
- The value is not in the picture but in **the questions it forces you to ask**: what data is in this flow, how long does this handoff take, where does the other branch go.
- **BPMN is the next step, not a replacement** — reach for it when the reader needs precision, and keep the diagram simple when the reader needs to understand it fast.
