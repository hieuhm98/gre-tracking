# Project Risk Management

## 1. What a risk is and why it goes wrong

> **A risk is an event that has NOT happened, could happen, and if it happens would affect project objectives.**

**Three concepts get merged, and merging them makes every risk meeting pointless:**

| | Definition | How to handle it |
|---|-----------|------------------|
| **Risk** | Not yet happened, has a probability | **Prevent it or prepare a response** |
| **Issue** | **Already happened** | Deal with it now; there is nothing left to prevent |
| **Constraint** | An unchangeable fact | Plan around it |

**If your risk register is full of lines like *"the team is short-staffed"*, that is not a risk — it is an issue or a constraint.** The corresponding risk would be: *"if a senior developer leaves in March, the payment module slips three weeks"*.

**How to write a risk properly — the cause, event, consequence formula:**

> **"Because [cause], [event] may happen, leading to [consequence for an objective]."**

- ❌ *"Staffing risk."* — nothing can be done with this sentence.
- ✅ *"Because only one person understands the legacy payment system, if that person leaves, data migration slips at least four weeks."*

**The second sentence gives you three things immediately:** a clear preventive action (train a second person), an indicator to watch (signs that person wants to leave), and a number to compare against the cost of prevention.

> **The most important thing about risk management: its purpose is NOT eliminating risk.** A project with no risk is a project creating no new value. **The purpose is knowing consciously which risks you are carrying.**

---

## 2. Identifying risk: where to look

**Risks do not appear on their own in a meeting — you must hunt them systematically.**

**Seven risk sources to sweep on any software project:**

**1. People.** The only person who knows something, someone about to go on parental leave, a newly formed team that has never worked together, dependence on one external expert.

**2. Requirements.** Unclear requirements in the most complex area, stakeholders who do not agree with each other, a customer who has never used a comparable system and so does not yet know what they want.

**3. Technical.** Technology the team has never used, integration with an undocumented system, unvalidated performance requirements, technical debt exactly where heavy change is coming.

**4. External.** A partner who has not opened their API, a slow vendor, regulatory change, dependence on another project.

**5. Organisational.** The sponsor may change role, company priorities may shift next quarter, the team is shared with another project.

**6. Estimation and plan.** Work never done before, so estimates have low confidence; a long critical path with no buffer.

**7. Quality and operations.** No production-like test environment, no rollback plan, real data containing unknown edge cases.

**Three effective techniques for finding risk:**

- **A checklist from previous projects.** Cheapest and most effective. **The risk that tripped you last time is very likely to return.**
- **Interviewing people individually.** People speak more honestly without the room present, especially about people and organisational risks.
- **A pre-mortem.** Ask the team: *"imagine this project failed disastrously six months from now — write down why"*. **This technique surfaces far more risks than asking *"what are our risks?"*, because it lets people be pessimistic without being labelled negative.**

---

## 3. Assessing and prioritising risk

**Two basic dimensions: probability and impact.** Multiplying them gives **risk exposure**.

**A simple scale, sufficient for most projects:**

| | Low impact | Medium impact | High impact |
|---|-----------|---------------|-------------|
| **High probability** | Monitor | **Act** | **Act now** |
| **Medium probability** | Accept | Monitor | **Act** |
| **Low probability** | Accept | Accept | **Prepare a response** |

> **The most noteworthy cell is low probability, high impact.** It is the most-skipped because *"it is unlikely"* — yet that is the kind that sinks projects. **For this cell you do not need expensive prevention, you need a written response plan.**

**Three factors worth adding beyond probability and impact:**

**1. Detectability.** A risk you will see three weeks out is completely different from one that detonates without warning. **A hard-to-detect risk deserves higher priority at the same probability and impact.**

**2. Timing.** A risk that could hit next week needs more attention than one in month eight.

**3. Cost of prevention.** For a medium risk whose prevention costs almost nothing, just prevent it and stop discussing.

**On probability: do not pretend to precision.** *"35 percent probability"* sounds scientific but is usually invented. **High, medium, low is enough, and what matters is that the team means the same thing by those three levels.**

---

## 4. Four risk response strategies

**1. Avoid — change the plan so the risk no longer exists.**

- *Risk:* new technology the team has never used may not meet performance needs.
- *Avoid:* use technology the team already knows.
- **The strongest strategy but usually the costliest, since you give up the benefit that came with the risk.**

**2. Mitigate — reduce the probability or the impact.**

- *Reduce probability:* run a two-week technical spike to validate the technology before committing.
- *Reduce impact:* design so that component can be swapped out if it underperforms.
- **This is the most-used strategy in practice.**

**3. Transfer — move the risk to a party better able to carry it.**

- Buy insurance, contract a third party to take responsibility, use a managed service rather than self-hosting.
- **Note: transfer does not make the risk disappear, and you still bear the business consequence if it occurs.**

**4. Accept — decide to carry it.**

- **Passive acceptance:** do nothing, just record it.
- **Active acceptance:** record it and **prepare a contingency plan** with a clear **trigger condition**.

> **Acceptance is a legitimate and often correct decision.** The problem only arises when a risk is accepted **without anyone knowing it was accepted** — at which point it is not a decision, it is an oversight.

**On reserves — two different kinds, and mixing them causes arguments:**

| Kind | For | Who controls it |
|------|-----|-----------------|
| **Contingency reserve** | **Known** risks in the register | **The PM** — spent when a recorded risk occurs |
| **Management reserve** | **Unknown** risks, what nobody foresaw | **The sponsor** — the PM must ask |

**One way to size the reserve:** sum the expected impact of register risks, weighted by probability. A four-week slip at 25 percent probability contributes one week to the reserve.

---

## 5. Early warning indicators

**The most-skipped part of risk management: every risk needs an INDICATOR you can actually watch.**

**Without indicators, a risk register is a list of worries.** With them, it becomes a warning system.

**Examples pairing risks with indicators:**

| Risk | Early warning indicator |
|------|------------------------|
| Partner slow to open the API | No API specification by end of February |
| A key person leaves | They start refusing long-term work, or take unusual leave |
| Requirements not clear enough | Questions about the same module still rising after two sprints |
| Estimates too optimistic | Two consecutive sprints under 80 percent of commitment |
| Quality declining | Regression defects rising across three consecutive releases |
| Team overloaded | Parallel work-in-progress per person climbing steadily |

**Each register entry should have four things:**

**1. An owner** — a specific person, not *"the team"*.
**2. An indicator** — what shows it is approaching.
**3. A trigger condition** — the point at which you switch to the contingency plan.
**4. A review date** — without one it will not be reviewed.

> **On trigger conditions: decide them IN ADVANCE.** *"If we still have no partner API by March 10, we switch to mock data and split integration into a later release."* **A decision made before the pressure is always better than one made mid-fire.**

---

## 6. Continuous tracking and a culture of honesty

**A risk register is a LIVING document, and the surest sign of ceremonial risk management is a register unchanged for three months.**

**A pragmatic cadence:**

- **Weekly, fifteen minutes:** which indicators have moved? Which risks are spent? Any new ones?
- **At each major milestone:** review everything, since the context has shifted enough.
- **On any scope change:** every change opens new risk, and that belongs in the impact analysis.

**Three things teams usually forget:**

**1. Close spent risks.** A new-technology risk stops meaning anything once the team has used it for three months. **A register full of dead lines will not be read by anyone.**

**2. Record risks that occurred and how they were handled.** This is the raw material for the next project's checklist.

**3. Record the risks that did NOT occur.** Otherwise next year somebody will say *"you were worrying about nothing"* and cut every preventive cost.

> **The precondition for everything above: the team must feel safe raising risks.**
>
> **If whoever raises a risk is treated as negative, asked *"why are you always so pessimistic"*, or handed extra work as a punishment — risks will only be raised once they are already issues.** And by then you have no options left.

**Three PM sentences that destroy this culture fastest:** *"do not worry, it will be fine"*, *"bring me solutions, not problems"* when the person lacks the authority to solve it, and *"I told you so"* once the risk materialises.

---

## 7. Key takeaways

- **A risk has not happened yet**; if it has, it is an issue, and if it cannot change, it is a constraint.
- ***"The team is short-staffed"* is not a risk** — it is an issue or a constraint.
- Write risks as **because cause, event may happen, leading to consequence**.
- A well-written risk gives you **a preventive action, an indicator, and a number to weigh against cost**.
- **The purpose is not eliminating risk** but knowing consciously which risks you carry.
- Seven sources: **people, requirements, technical, external, organisational, estimation, quality and operations**.
- **A checklist from previous projects is the cheapest and most effective technique.**
- **Individual interviews surface more people and organisational risks than group meetings.**
- **Pre-mortems work because they let people be pessimistic without being labelled negative.**
- **Low probability, high impact is the most-skipped cell** — and the kind that sinks projects.
- **Hard-to-detect risks deserve higher priority** at the same probability and impact.
- **High, medium, low is enough** — a 35 percent figure is usually invented.
- Four strategies: **avoid, mitigate, transfer, accept** — mitigate is the most used.
- **Transfer does not remove the risk**; you still bear the business consequence.
- **Acceptance is valid; the failure is accepting without anyone knowing it was accepted.**
- **Contingency reserve covers known risks under PM control; management reserve covers unknown risks under the sponsor.**
- **Without indicators, a risk register is a list of worries.**
- Each risk needs **a named owner, an indicator, a trigger condition, and a review date**.
- **Deciding trigger conditions before the pressure** always beats deciding mid-fire.
- **A register unchanged for three months signals ceremonial risk management.**
- **Record the risks that did not occur**, or preventive spending gets cut as needless worry.
- **If risk-raisers are treated as negative, risks are only raised once they are issues.**

## 8. Summary

- Risk management starts with **writing the risk properly**, since the wording decides whether anything can be done about it.
- **Identification must be systematic**, and pre-mortems surface the most real risks.
- **All four response strategies are valid**, acceptance included, provided the decision is recorded.
- **Early warning indicators and a culture safe for honesty** are what turn a list of worries into a warning system.
