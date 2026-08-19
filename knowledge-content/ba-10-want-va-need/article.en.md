# WANT vs NEED

## 1. The core difference

> **A WANT is what the customer SAYS. A NEED is the real problem hurting them. The two overlap less than you would expect.**

Customers rarely describe a problem. They describe **the solution they already imagined** — based on what they know, what they saw in other software, or how they do it manually today.

**That is entirely natural and not their fault.** Moving from solution back to problem is the BA's job.

| | **WANT** | **NEED** |
|---|---------|----------|
| **How it is stated** | *"I want an Excel export button"* | *"I need to send the overdue order list to customer care each morning"* |
| **Abstraction level** | Concrete, usually about the interface | More abstract, about a business outcome |
| **Ways to satisfy it** | One | Usually several, at very different costs |
| **Who states it** | The customer, unprompted | The BA draws it out through dialogue |

> **Why this matters so much:** building the WANT correctly means you built exactly what they asked for, which may still not solve their problem. Understanding the NEED usually reveals **a cheaper, faster, more effective route** than the one they proposed.

---

## 2. Techniques for digging to the real need

### Ask why repeatedly

The most basic and most effective technique. Each question steps back from solution toward problem.

> **Example:**
>
> *"I want the system to send a reminder email every day."*
> — *A reminder about what?*
> *"Reminding staff to approve pending requests."*
> — *Why do requests sit pending?*
> *"Because they do not know a new one arrived until they open the system."*
> — *What if the home screen showed a badge with the number of pending approvals?*
> *"Oh, that is better than email — I usually ignore email."*
>
> **The real NEED: staff cannot see the work waiting for them.** Email was just one of several solutions, and not the best one.

### Step-back questions

When you receive a WANT, ask one of these:

- **"What will you do with that?"** — leads to the purpose.
- **"What happens if you do not have it?"** — measures the real pain.
- **"How do you handle this today?"** — exposes the actual process and its workarounds.
- **"How often does this happen?"** — measures frequency and therefore reasonable investment.
- **"If you could only have one of the two, which would you pick?"** — exposes true priority.

### Observe instead of asking

**For needs users cannot articulate, do not ask — watch.** People working by habit are usually unaware of the steps they take, and even less aware of the irritating steps they have learned to tolerate.

> **Every spreadsheet, notebook, and internal chat message running alongside the official system is an unmet NEED.**

---

## 3. Three kinds of hidden needs

**1. Needs users do not know they have.** They have endured a pain point so long it feels normal.

- *"At month end I spend half a day merging three reports by hand."* — They never raise it as a requirement because they are used to it.

**2. Needs they know but do not say.** Because they consider it obvious, or assume it is not feasible.

- *"Obviously it must check for duplicate phone numbers"* — but nobody wrote that into the requirements.

**3. Needs that only surface on seeing a solution.** This is why prototypes are so valuable.

- *"Ah, looking at this screen reminds me that corporate customers work differently."*

> **To catch all three: combine interviews, observation, and prototypes.** Interviews catch type 2 if you ask well; observation catches type 1; prototypes catch type 3.

---

## 4. When WANT and NEED conflict

Sometimes you understand the NEED clearly but the customer insists on their WANT. **This is the most delicate situation in the craft.**

**Four common causes and how to handle them:**

**1. They have information you do not.** There may be a legal constraint, a customer commitment, or an executive decision you have not heard about.

- **Handle it:** ask directly *"is there another reason this approach is mandatory?"* before concluding they are wrong.

**2. They do not believe the alternative will work.** This is a trust problem, not a logic problem.

- **Handle it:** build a small prototype or give a concrete example. **Seeing persuades better than explaining.**

**3. They already committed publicly to that solution.** Dropping it means admitting error in front of others.

- **Handle it:** create a face-saving path. Present the alternative as **an improvement on their original idea**, not as a replacement.

**4. You misunderstood the NEED.** It may well be you who is wrong.

- **Handle it:** stay humble. Paraphrase your understanding and let them correct it.

> **The final principle: if after a full trade-off discussion the customer still chooses their WANT, that is their right.** The BA's job is to ensure the decision is made **with full information**, not to ensure the decision goes your way. Record the rationale and move on.

---

## 5. Separating needs from constraints and preferences

Not everything a customer states is a business need. **Classifying correctly tells you what is negotiable.**

| Type | Character | Negotiable? |
|------|-----------|-------------|
| **Business need** | Tied to a business objective or real pain | The way you meet it is negotiable; the need is not |
| **Want** | A specific proposed solution | Highly negotiable, if another route meets the need |
| **Constraint** | Law, regulation, policy, existing infrastructure | Usually not negotiable, but must have a stated reason |
| **Personal preference** | No business reason behind it | Should be left to the designer |

> **A simple test: ask *"why?"*.** If the answer is a business objective or a regulation, it is a need or a constraint. If the answer is *"because I think it looks nicer"*, it is a preference.

---

## 6. Saying no constructively

Understanding the NEED is only half the job. The other half is **communicating it without damaging the relationship**.

**Three effective ways:**

**1. Do not say no — state the trade-off.**

> *"Yes, that feature takes about two weeks. Putting it in the June release means the reporting work moves to August. Which suits you better?"*

**2. Propose a cheaper route to the same need.**

> *"I understand you need to know which orders are about to go overdue. Instead of a full dashboard taking six weeks, could we start with a simple alert in two days and see whether that is enough?"*

**3. Ask a question rather than deliver a conclusion.**

> *"If we build it this way, the screen gets hard to use beyond a thousand orders. What do you think about adding a filter first?"*

> **What NOT to do: refuse using technical reasons.** *"That is really hard"* or *"the system does not support it"* sounds like an arbitrary refusal to someone without technical background. **Always translate into business trade-off language.**

---

## 7. Key takeaways

- **A WANT is what the customer says; a NEED is the real pain** — the two overlap less than expected.
- Customers describe **the solution they imagined**, which is natural rather than their fault.
- Building the WANT correctly may **still not solve their problem**; understanding the NEED usually finds a cheaper route.
- **Asking why repeatedly** is the most basic and effective way to step back from solution to problem.
- Five step-back questions: **what will you do with it, what if you lacked it, how do you handle it today, how often, which if only one**.
- **For needs users cannot articulate, do not ask — observe.**
- Three kinds of hidden need: **unaware of it, aware but unsaid, only visible once a solution appears**.
- **Interviews catch type 2, observation type 1, prototypes type 3** — so combine all three.
- When a customer insists, ask **whether there is another reason this approach is mandatory** before concluding they are wrong.
- When they committed publicly, **present the alternative as an improvement on their idea**, not a replacement.
- **You may be the one who misunderstood the NEED** — stay humble and paraphrase for correction.
- If after a full trade-off discussion they still choose the WANT, **that is their right** — record the rationale and move on.
- Four categories: **need, want, constraint, personal preference** — each with a different level of negotiability.
- The test: **ask why**; if the answer is *"it looks nicer"*, it is a preference for the designer to decide.
- Three effective refusals: **state the trade-off, propose a cheaper route, ask a question rather than conclude**.
- **Never refuse using technical reasons** — translate into business trade-off language.

## 8. Summary

- The BA's core work is **translating WANT into NEED**, and that is where the role's greatest value lies.
- **Combine asking why, observation, and prototypes** to catch all three kinds of hidden need.
- When WANT and NEED conflict, understand **the reason behind the insistence** rather than assuming stubbornness.
- The goal is not winning the argument but **ensuring the decision is made with full information**.
