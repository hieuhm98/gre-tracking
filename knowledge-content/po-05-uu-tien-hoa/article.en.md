# Product Prioritization

## 1. Why prioritization cannot be delegated

> **No team has the time to do everything everyone wants. The question is not *"must we cut"* but *"what do we cut, and who decides"*.**

**If the Product Owner does not decide the order, somebody else will — usually the worst person for the job:**

- **Developers**, when time runs out and they must choose based on what is easiest or most interesting.
- **Whoever speaks loudest**, when every decision is made in a meeting by the most persistent person.
- **Chance**, when things get done in the order they were requested.

**The consequence of unclear priorities:** when the schedule slips, a key person leaves, or an urgent request arrives, **management does not know how to respond** — and every cut becomes a political crisis.

---

## 2. Four obstacles to prioritization

**1. *"Everything is high priority."***

The most common stakeholder response. It really means **"I do not want to choose"** or **"I fear that calling it low priority means never."**

- **How to handle it — invert the question.** Do not ask *"which is important?"* Ask ***"if we can only deliver half this list by June, which half do you want?"*** **Forcing a choice between concrete options produces honest answers.**

**2. Fear of losing what they want.**

- **Handle it:** make clear that low priority means **later**, not **never** — and **keep that promise**. If you say *"we will revisit next quarter"*, actually revisit.

**3. Conflict between stakeholders.**

- **Handle it:** you need **one decision-maker with authority** and **a transparent framework** based on business value rather than who speaks loudest.

**4. Not enough information to decide.**

- **Handle it:** prioritization is **collaborative** — customers supply value, the team supplies cost and technical risk.

> **An important principle: priorities are NOT fixed.** They change as markets shift, as you learn, as competitors ship. **Revisit them regularly, especially at the start of each sprint.**

---

## 3. Quick prioritization techniques

### MoSCoW

Four levels used widely, especially in agile:

| Letter | Meaning | Explanation |
|--------|---------|-------------|
| **M** | **Must** | Mandatory; **without it the release fails** |
| **S** | **Should** | Important and desirable, but **a temporary workaround exists** |
| **C** | **Could** | Desirable; done **if time and resources permit** |
| **W** | **Won't** | **Not this time** — possibly reconsidered later |

> **The W is the most underrated and most useful part.** *"Won't this time"* is completely different from *"never"*. **It reassures stakeholders their idea was not discarded, merely deferred** — which sharply reduces the tendency to label everything Must.

**A practical guideline:** many teams cap **Must at about 60 percent of total effort**, leaving room for uncertainty.

### The $100 technique

**Each stakeholder gets 100 imaginary points to allocate across items by importance to them.**

- **Advantage:** it forces **real trade-offs** — more for this means less for that. That is precisely what three-level prioritization fails to do.
- **Weaknesses and fixes:** someone may dump all 100 on one item to push it to the top → **impose a cap**, no item may take more than 20 points from one person. The technique also **does not work on very long lists** — use it for 20 to 40 items.

---

## 4. Value, cost, and risk analysis

When the investment is large and decisions are hard, you need a **semiquantitative** approach.

> **The core principle: the highest priority belongs to items with the best VALUE-TO-COST RATIO, adjusted for risk.**

This solves the biggest weakness of purely intuitive prioritization: **a moderately valuable but very cheap item is often worth doing before a highly valuable but very expensive one.**

**Four factors to estimate on a relative scale (say 1–9):**

**1. Relative benefit** — the value of having it. Judged by the **customer**.

**2. Relative penalty** — the harm of **not** having it. Also by the customer.

> **Why both?** Because they differ. **A compliance feature may have low benefit** — nobody is happier for it — **but enormous penalty** through fines or a sales ban. **If you only ask about benefit, you will wrongly rank it at the bottom.**

**3. Relative cost** — implementation effort. Estimated by the **team**.

**4. Relative technical risk** — the degree of uncertainty. Also by the team.

**The formula:** **Priority = (benefit + penalty) ÷ (cost + risk)**

> **The real value of this technique is not the number.** It is that:
>
> - It **forces a structured conversation** between customers and the team, each contributing information the other lacks.
> - **It exposes disagreement.** When two stakeholders score the same item 9 and 2, **that is the most valuable discussion of the session**.
> - It **separates value from cost** — many arguments are really two sides discussing different dimensions without noticing.

---

## 5. The Kano model

**Kano classifies features by how they affect customer SATISFACTION** — a dimension value-cost analysis misses.

**Three main categories:**

**1. Must-be attributes.** Customers **take them for granted**. Having them pleases nobody; **lacking them angers everybody**.

- Examples: a banking app showing the correct balance; sent email actually arriving.
- **Strategy: reach ADEQUATE, do not chase excellence.** More investment does not raise satisfaction.

**2. Performance (one-dimensional).** **More is better** — satisfaction rises proportionally.

- Examples: page load speed, storage capacity, battery life.
- **This is where customers compare you with competitors.**
- **Strategy: invest deliberately, matched to the competitive position you want.**

**3. Delighters (attractive attributes).** Customers **neither expect nor request** them. Lacking them, nobody complains; **having them creates loyalty**.

- **Strategy: a few carefully chosen delighters make a big difference — but do not invest before the must-bes are solid.**

> **Kano's most important insight: these categories MIGRATE over time.** What was a delighter becomes performance, then becomes must-be. **This is why products must innovate continuously just to stay in place.**

**How to use Kano:**

- **Ensure every must-be is in the first release** — they are preconditions, not options.
- **Most remaining effort to performance** on the dimensions your customers genuinely care about.
- **A small slice for one or two delighters** to differentiate.
- **Never trade a must-be for a delighter.** A product with charming features but missing the basics gets rejected.

---

## 6. Do not forget dependencies

**Value-based ordering is an input to the plan, not the plan itself.**

**Some low-priority items must be built early because high-priority ones depend on them.** A user authentication mechanism may deliver no direct value, but everything else needs it.

**Four kinds of dependency to account for:**

| Kind | Example |
|------|---------|
| **Technical** | You cannot build reports before the data is being recorded |
| **Architectural** | Scalability requirements must be handled early; retrofitting is not cheap |
| **External** | Waiting for a partner to open an API; waiting for a regulator's licence |
| **Learning** | Needing an experiment's result before deciding the next direction |

> **How to handle it: rank by value first, then adjust for mandatory technical sequence — and record the reason whenever you break value order.** Without a record, in six months somebody will ask why a low-value item was built first.

---

## 7. Key takeaways

- The question is not *"must we cut"* but ***"what do we cut, and who decides"***.
- If the PO does not decide, **developers, the loudest voice, or chance will decide instead**.
- Without clear priorities, **every cut becomes a political crisis**.
- ***"Everything is high priority"* really means *"I do not want to choose"*.**
- The fix: **invert the question** to *"if we can only deliver half, which half?"*
- **Low priority means later, not never** — and you must keep that promise.
- **Prioritization is collaborative**: customers supply value, the team supplies cost and risk.
- **Priorities are not fixed** — revisit them regularly, especially each sprint.
- **The W in MoSCoW is the most useful letter**: *"won't this time"* differs entirely from *"never"*.
- Many teams cap **Must at about 60 percent of total effort**.
- **The $100 technique forces real trade-offs**, but needs a cap to resist manipulation.
- **A moderately valuable but very cheap item often beats a valuable but very expensive one.**
- **Ask about BOTH benefit and penalty** — compliance features have low benefit but enormous penalty.
- **The real value of semiquantitative analysis is exposing disagreement**, not the final number.
- Kano: **must-bes only need adequacy, performance deserves deliberate investment, delighters selectively**.
- **Kano categories migrate over time** — delighter to performance to must-be.
- **Never trade a must-be for a delighter** — a product missing the basics gets rejected.
- **Some low-priority items must be built early** because high-priority ones depend on them.
- **Record the reason whenever technical sequence overrides value order.**

## 8. Summary

- Prioritization is **the Product Owner's non-delegable responsibility**, and it must be continuous rather than one-off.
- Choose the technique to fit: **MoSCoW for speed, $100 for real trade-offs, value-cost-risk for large decisions**.
- **Kano adds the satisfaction dimension** value-cost analysis misses, and reminds you that expectations shift over time.
- **Value order is an input to planning**, and the final plan must account for mandatory technical sequence.
