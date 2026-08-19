# Planning & Estimation

## 1. What a plan is for

> **A plan's value is not that it is right, but that it tells you EARLY when you are wrong.**

**This is the most misunderstood point.** People dismiss planning because *"every plan is wrong"* — true, but **without a plan you have nothing to compare against, so you do not know how far off you are until it is too late.**

**Three things a good plan must give you:**

| Thing | Why it matters |
|-------|----------------|
| **A baseline** | To measure deviation, not to show off |
| **Mandatory sequence** | Knowing what blocks what |
| **Decision points** | Knowing when to reconsider rather than press on |

**What a plan is NOT:** a promise. **A plan is the best model of current understanding, and it must be updated as understanding changes.** A PM who preserves an old plan to save face has turned a navigation instrument into decoration.

---

## 2. The WBS: breaking work down

**A Work Breakdown Structure divides the whole scope into pieces small enough to estimate, assign, and track.**

**Three principles:**

**1. Decompose by DELIVERABLE, not by activity.** A WBS node should read *"payment module, tested"* rather than *"programming"*. A deliverable can be checked as done or not done; an activity cannot.

**2. The 100 percent rule.** Child nodes must sum exactly to the parent — **nothing missing, nothing added**. This is the only mechanism that reveals forgotten scope.

**3. The lowest level must be small enough.** A practical rule: **each work package should fall between 8 and 80 hours**. Smaller and management costs more than it is worth; larger and you cannot tell it is drifting.

**Things routinely left out of a WBS — which consume a serious share of budget:**

- **Data migration** from the legacy system.
- **Integration** with third-party systems.
- **Performance and security testing.**
- **User training** and writing user documentation.
- **Post-release support** for the first few weeks.
- **Waiting time for customer approvals.**

> **A test for any WBS: hand it to the people who will do the work and ask *"what is missing?"*** There is almost always an answer, and every gap found at this stage is dozens of times cheaper than one found mid-execution.

---

## 3. Dependencies and the critical path

**Four dependency types:**

| Type | Meaning | Example |
|------|---------|---------|
| **Finish-to-Start** | B starts only when A finishes | No testing before there is a build |
| **Start-to-Start** | B starts after A starts | Writing docs alongside coding |
| **Finish-to-Finish** | B finishes only when A finishes | Testing ends when coding ends |
| **Start-to-Finish** | Rare | The old system shuts off only once the new one runs |

**Also distinguish two sources of dependency:**

- **Mandatory** — inherent to the work, unbreakable.
- **Discretionary** — a result of how we chose to work. **These can often be unpicked to run in parallel, and that is the cheapest way to shorten a schedule.**

**The critical path is the longest dependency chain from project start to finish.**

**Three things a PM must know about it:**

**1. Only work on the critical path directly affects the end date.** Work off it has **float** — slipping within that float costs nothing.

**2. The critical path can CHANGE.** When off-path work slips beyond its float, it becomes the new critical path. **A PM who only watches the original path will be surprised.**

**3. There are only two legitimate ways to shorten a schedule:** **crashing** (adding resources to critical-path work, which costs money) and **fast tracking** (running sequential work in parallel, which adds risk). **There is no third way, and in particular there is none called "asking the team to try harder".**

---

## 4. Estimation techniques

**Four techniques, for four levels of available information:**

**1. Analogous estimation.** Compare with a similar project already done. **Fastest, least accurate, but the only technique usable when you know almost nothing.**

**2. Parametric estimation.** Apply a factor from historical data: *"each CRUD screen averages 3 days"*. **More accurate if your historical data is trustworthy.**

**3. Bottom-up estimation.** Estimate each WBS work package and sum. **Most accurate, most time-consuming, and only possible once the WBS exists.**

**4. Three-point (PERT) estimation.** Take three numbers: optimistic (O), most likely (M), pessimistic (P).

> **The formula: `Estimate = (O + 4M + P) ÷ 6`**
>
> **The technique's real value is not the final number but the distance between O and P.** That distance **is your uncertainty** — and it is more important information than the average.

**On story points in agile:** points measure **relative size**, not hours. They work because **people compare better than they measure absolutely**. Points only mean something alongside that team's own velocity, and **comparing points between two teams is meaningless**.

**Planning poker** is useful not because it produces accurate numbers, but because **when two people estimate three steps apart, the conversation that follows always uncovers a misunderstanding about scope.**

---

## 5. The cone of uncertainty and honest presentation

**The cone of uncertainty says estimate accuracy improves as information accumulates.**

| Point in time | Typical error |
|---------------|---------------|
| **Before requirements are clear** | Can be off by **several multiples** |
| **Once scope is clear** | Roughly **±50 percent** |
| **Once design is done** | Roughly **±25 percent** |
| **During execution** | Narrowing steadily |

> **The most important practical consequence: a day-one estimate CANNOT be accurate, no matter how hard you try.** The response is not trying to estimate better, but **estimating in ranges and recommitting as you learn.**

**How to present an estimate honestly:**

- **Give a range, not a number:** *"12 to 16 weeks"* rather than *"14 weeks"*.
- **State the confidence:** *"I am 80 percent confident it falls in 12 to 16 weeks"*.
- **List assumptions:** *"assuming the partner API is ready before March 1"*.
- **Say what would narrow it:** *"after design, I will update this to ±10 percent"*.

**Two traps to avoid:**

**1. Negotiated estimates.** The customer says *"14 weeks is too long, can you do 10?"* — **the time work takes does not change because someone wants it shorter.** Only scope, resources, or quality can change. **Accepting a cut with nothing else changed is promising something you know is untrue.**

**2. Hidden padding.** Each person quietly adds 30 percent for safety, the PM adds another 20, and nobody knows the total. **The right way: estimate honestly, then hold contingency in one VISIBLE place managed by the PM.** Transparent buffer can be managed; hidden buffer gets consumed without anyone noticing.

---

## 6. Tracking a plan once reality diverges

**A plan is only useful if compared with reality often enough.**

**Three simple but effective indicators:**

**1. Trend rather than snapshot.** One slow week says nothing; **three consecutive weeks 10 percent behind is a trend, and the fourth week will not speed up on its own.**

**2. Budget burn rate against scope completion.** Having spent 60 percent of budget for 40 percent of scope is **a red flag**, even while the schedule still looks on time.

**3. Distance to the next milestone.** A milestone three months away makes everyone defer; **milestones every two to four weeks force the truth out early.**

**Once you know you have diverged, four options in the order to consider them:**

| Option | When it fits |
|--------|--------------|
| **Cut scope** | Almost always the least damaging, if the backlog is ordered |
| **Fast tracking** | When sequential work is not genuinely required to be sequential |
| **Crashing** | When money and available people exist, with time left for them to ramp up |
| **Move the date** | When the three above are not enough — and it must be said early |

> **The worst thing a PM can do is stay quiet and hope.** **A milestone slip flagged six weeks ahead is a problem to manage; the same slip flagged three days ahead is a crisis and a loss of trust.**

---

## 7. Key takeaways

- **A plan's value is telling you early when you are wrong**, not being right.
- A plan gives you **a baseline, mandatory sequence, and decision points**.
- **A plan is not a promise** — it must be updated as understanding changes.
- A WBS must **decompose by deliverable, not by activity**.
- **The 100 percent rule** is the only mechanism that reveals forgotten scope.
- **Each work package should fall between 8 and 80 hours.**
- Commonly forgotten in a WBS: **data migration, integration, performance and security testing, training, post-release support, approval wait time**.
- **Discretionary dependencies can often be unpicked to run in parallel** — the cheapest way to shorten a schedule.
- **Only critical-path work directly affects the end date.**
- **The critical path can change** when off-path work slips beyond its float.
- Only two legitimate ways to shorten: **crashing (costs money) and fast tracking (adds risk)**.
- Four estimation techniques: **analogous, parametric, bottom-up, three-point PERT**.
- PERT: `(O + 4M + P) ÷ 6`, and **the O-to-P distance matters more than the average**.
- **Story points measure relative size**, and **comparing points across teams is meaningless**.
- **Planning poker earns its keep because a three-step gap always reveals a scope misunderstanding.**
- **The cone of uncertainty:** a day-one estimate cannot be accurate however hard you try.
- Present honestly: **a range, a confidence level, listed assumptions, and what would narrow it**.
- **The time work takes does not change because someone wants it shorter.**
- **Transparent buffer can be managed; hidden buffer disappears unnoticed.**
- **60 percent of budget spent for 40 percent of scope is a red flag.**
- **Milestones every two to four weeks force the truth out early.**
- **A slip flagged six weeks ahead is a problem; three days ahead it is a crisis and a loss of trust.**

## 8. Summary

- Planning exists to **detect deviation early**, so it must be continuously updated rather than defended.
- **A deliverable-based WBS plus the 100 percent rule** is the cheapest way to avoid missing scope.
- **Estimates must be presented as ranges with assumptions**, because the cone of uncertainty is a law rather than a weakness.
- **Once you have diverged, cutting scope is usually least damaging**, and silence is always the worst option.
