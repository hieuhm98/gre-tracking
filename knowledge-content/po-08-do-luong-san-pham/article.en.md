# Product Metrics & Measurement

## 1. Why measurement is the Product Owner's job

> **If you do not measure, you do not know whether you are creating value or merely staying busy.**

**A team can ship steadily every sprint for six months while the product gets no better at all.** Velocity is high, the backlog drains, everyone is busy — but there is no evidence that users are better off or the business earns more.

**Measurement serves three different purposes, and mixing them causes endless argument:**

| Purpose | Question | Example |
|---------|----------|---------|
| **Learning** | *"Was our assumption right?"* | Completion rate of the new sign-up flow |
| **Steering** | *"What should we do next?"* | Which step in the flow drops the most users |
| **Accountability** | *"Did we meet our commitment?"* | Quarterly revenue against target |

> **A metric used for learning must be treated differently from a metric used to judge people.** The moment a metric becomes an individual performance measure, it loses all value as a learning tool — because people start optimising the number instead of the outcome.

---

## 2. Vanity metrics and how to spot them

**A vanity metric looks good in a report but leads to no action.**

**Three questions to spot one:**

**1. If this number doubled, what would I do differently?** No answer means it is useless for decisions.

**2. Can this number go down?** Cumulative metrics like *total users ever registered* **can only rise**, so they always look good even while the product is dying.

**3. Is it tied to a valuable behaviour?** A page view is not value; completing a transaction is.

**Common replacements:**

| Vanity metric | Actionable metric |
|---------------|-------------------|
| Total app downloads | Weekly active users |
| Total registered accounts | Day-7 return rate |
| Page views | Completion rate of the main flow |
| Features released | Share of features still used after 30 days |

> **A useful metric is usually a RATIO or a cohort figure, rarely a cumulative absolute number.**

---

## 3. Leading and lagging indicators

**Lagging indicators measure OUTCOMES that already happened:** revenue, churn, profit.

- **Strength:** they are what the business actually cares about.
- **Weakness:** by the time you see them worsen, it is too late to intervene.

**Leading indicators measure BEHAVIOUR that predicts those outcomes:** how often a user performs the core action in week one, time to second use.

- **Strength:** they move early, giving you time to react.
- **Weakness:** they are only a hypothesis — the link to the outcome must be validated.

> **A mature team watches BOTH: lagging indicators to know where you are, leading indicators to know where you are heading.**

**How to find a good leading indicator:** look at the users who stayed and find **a behaviour they performed in week one that leavers did not**. That is your candidate.

**Do not forget the counter metric:** whenever you optimise one metric, watch a metric that could worsen because of it. Optimising time in app? **Watch complaint rate and uninstall rate alongside it.**

---

## 4. Common metric frameworks

### The AARRR funnel

Five stages of the user journey, each a place users can leak away:

| Stage | Question | Sample metric |
|-------|----------|---------------|
| **Acquisition** | How did they find us? | New users by channel |
| **Activation** | Did they reach first value? | Initial setup completion rate |
| **Retention** | Do they come back? | Day-7 and day-30 active rate |
| **Revenue** | Do they pay? | Paid conversion rate |
| **Referral** | Do they bring others? | Accepted invitations |

> **A common mistake: pouring everything into Acquisition while the real leak is at Activation.** Adding more users to a leaking bucket only raises cost.

### The North Star Metric

**A single metric reflecting the core value the product delivers to users.**

- **Three criteria:** it reflects user value, it predicts long-term revenue, and the team can influence it.
- **Example:** for a learning platform, *lessons completed per week* beats *registered users*.

> **A North Star does NOT replace other metrics.** It is the convergence point that lets the whole organisation speak one language, while detailed metrics still live underneath for each team.

### HEART for experience quality

**Happiness, Engagement, Adoption, Retention, Task success** — useful when you need to measure experience rather than only business outcomes.

---

## 5. A/B testing and its limits

**A/B testing splits users into two random groups and compares a single change.**

**Four conditions for a meaningful A/B test:**

**1. A hypothesis written first.** *"Moving the checkout button above the fold will raise completion from 12 to 15 percent."*

**2. Enough sample.** With low traffic a test can take months — and in those months the market has changed.

**3. Only one variable changed.** Change the button's colour, label, and position together and you cannot tell what worked.

**4. Long enough to cover a full behaviour cycle.** Weekend behaviour differs from weekdays; stopping after three days is self-deception.

**Three limits to admit:**

- **A/B testing optimises locally very well but does not find new ideas.** It gives you the best button, not the right product.
- **It does not measure long-term impact.** A change lifting conversion 5 percent while eroding trust only shows up months later.
- **Stopping a test the moment results look good is cheating yourself.** Decide the stopping point before you start.

---

## 6. Four measurement traps

**1. Goodhart's law.** *"When a measure becomes a target, it ceases to be a good measure."* Set a target of tickets closed per week and the team splits tickets. **The defence: measure outcomes, not output.**

**2. Mistaking correlation for causation.** Users of feature X retain better — **that does not mean forcing everyone onto X will raise retention**. It may be that committed users go looking for X.

**3. Averages hide the truth.** A 200-millisecond average response time looks fine while 5 percent of users wait 8 seconds. **Look at the 95th and 99th percentiles, not only the mean.**

**4. Measuring what is easy instead of what matters.** Clicks are easy to collect; whether users actually solved their problem is hard — yet that is the thing worth knowing.

> **A practical rule: each team should have about three to five primary metrics.** Fewer and you are blind, more and nobody truly watches them and every number becomes dashboard decoration.

**Most important of all: every metric needs an owner, an expected threshold, and a review cadence.** A metric without those three is forgotten within a month.

---

## 7. Key takeaways

- **Without measurement you cannot tell value from busyness.**
- A team can ship steadily for six months while **the product gets no better**.
- Three purposes: **learning, steering, accountability** — mixing them causes argument.
- **A metric turned into an individual performance measure loses its learning value.**
- Spot vanity metrics: **would I act differently if it doubled**, and **can it go down**.
- **Cumulative metrics always look good even while the product dies.**
- **Useful metrics are usually ratios or cohorts**, rarely absolute numbers.
- **Lagging indicators say where you are; leading indicators say where you are heading.**
- Find leading indicators by **comparing week-one behaviour of stayers against leavers**.
- **Always keep a counter metric** — optimising time in app means watching uninstalls too.
- AARRR: **teams pile into Acquisition while the leak sits at Activation**.
- **A North Star is a convergence point, not a replacement for detailed metrics.**
- An A/B test needs **a written hypothesis, enough sample, one variable, and a full behaviour cycle**.
- **A/B testing optimises locally but does not find new ideas.**
- **Stopping a test when results look good is cheating yourself.**
- Goodhart's law: **a measure turned target stops being a good measure** — measure outcomes, not output.
- **Correlation is not causation** — committed users may simply seek the feature out.
- **Look at the 95th and 99th percentiles**, since averages hide the 5 percent waiting 8 seconds.
- **Three to five primary metrics per team**, each with an owner, a threshold, and a review cadence.

## 8. Summary

- Measurement is **the only way to distinguish real value from busyness**, and it belongs to the Product Owner.
- **Vanity metrics fall to three questions**, and good metrics are usually ratios or cohorts.
- **You need leading, lagging, and counter metrics together** for an honest picture.
- **A/B testing is powerful but clearly bounded**, and the four measurement traps hollow out any dashboard if ignored.
