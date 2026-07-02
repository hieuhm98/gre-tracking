# Trade-off Thinking & Technical Debt

## 1. Why do developers always say "it's not that simple"?

This is the phrase a BA hears the most — and usually doesn't understand why.

You say: *"It's just adding this filter, it'll be quick."*
The dev says: *"It's not that simple."*

In reality, the dev isn't being lazy or exaggerating. They're seeing things the BA hasn't seen yet:

- The current code is written a certain way, and adding a new feature might break that structure
- This "small" feature requires changes in 5 different places because the code is coupled
- A shortcut was taken earlier, and now every new thing has to work around it
- Doing it properly takes 3 days; taking a shortcut takes 2 hours but incurs debt

All of these things are called **Technical Debt** — and understanding it is one of the most important skills a BA can have.

---

## 2. What is Technical Debt?

**Technical Debt** is a metaphor borrowed from financial debt: when you borrow money to do something faster, you have to pay interest later.

In software:
- **Borrowing**: taking shortcuts, skipping best practices, hardcoding, not writing tests, skipping refactoring
- **Interest**: every subsequent time you want to change that code, it takes more time
- **Default**: the system becomes too hard to maintain, bugs pile up, and devs are afraid to touch anything

```
Real-world example:

Sprint 1: Hardcode the list of provinces in the code (instead of storing it in the DB)
  → Saves 2 days

Sprint 4: Need to add districts and filter by region
  → Have to refactor everything, taking 5 days
  → Interest: 3 extra days, plus the risk of breaking existing features
```

**Technical debt isn't always bad.** Sometimes borrowing intentionally is the right call. The problem is borrowing without knowing you're borrowing.

---

## 3. Common Types of Trade-offs

### Trade-off 1: Speed vs Quality

```
Scenario: Only 2 days left in the sprint, and a search feature needs to be added

Option A — Do it right (5 days):
  + Full-text search, indexed, supports many filters
  + Scalable as users grow
  - Won't make the sprint

Option B — Do it temporarily (2 days):
  + Makes the demo for stakeholders in time
  + Validates the requirement before investing heavily
  - Search is slow when data grows large
  - Needs refactoring after confirming business value
```

**When Option B is right:**
- This is an MVP; you don't yet know if the feature will be used
- The user base is still small (<1000 people), so performance isn't yet an issue
- Stakeholders need to see it to confirm the direction

**When Option B is wrong:**
- This is a core feature that's definitely needed
- The data is already large, so performance will be an issue immediately
- The team already has a lot of debt; adding more is dangerous

---

### Trade-off 2: Generalization vs Simplicity

```
Scenario: Need to build an event registration form

Option A — Generic (every type of event):
  + Reusable for many types of events in the future
  + Admins configure the form themselves
  - Much more complex, takes 3 weeks
  - Many edge cases to handle

Option B — Specific (only for the current type of event):
  + Simple, takes 3 days
  + Easy to test, fewer bugs
  - If a new type of event is needed, it has to be redone
```

**The YAGNI principle** (You Aren't Gonna Need It):
> Don't build what you *think* you'll need. Build what you *know for sure* you need now.

BAs often make this mistake: *"We might need it later, so let's make it generic from the start."*
→ This is usually over-engineering, increasing complexity without immediate value.

---

### Trade-off 3: Consistency vs Flexibility

```
Scenario: A system has 10 screens, each with a different filter

Option A — Consistent (one single way to filter):
  + Consistent UX; users learn it once and can use it everywhere
  + Code reuse, easier to maintain
  - Some screens are limited in their filtering

Option B — Flexible (each screen its own style):
  + Each screen is optimized for its specific needs
  - Inconsistent UX
  - Duplicated code, 10 places to maintain
```

---

### Trade-off 4: Build vs Buy vs Integrate

```
Scenario: Need an email-sending feature

Option A — Build: write your own email server
  Time: 4 weeks
  Maintenance: high (deliverability, bounce handling, spam filters...)
  → Almost never the right choice

Option B — Buy/SaaS: use SendGrid, Mailchimp
  Time: 2 days to integrate
  Cost: $20-200/month
  → The right choice for 95% of cases

Option C — Integrate: use the company's email server
  Depends on the IT/infra team
  May have volume limits
  → The right choice if compliance requires it
```

**Questions a BA should ask when there's a third-party integration:**
- How much does it cost? Who approves the budget?
- Is there an SLA (uptime guarantee)?
- If the third-party service goes down, how is our system affected?
- Is data being sent externally? Are there any compliance concerns?

---

## 4. MVP Mindset — Do Enough to Learn, Not Enough to Be Perfect

**MVP** (Minimum Viable Product) doesn't mean building something bad. It means building something *small enough* to:
1. Validate the most important assumption
2. Ship it to real users
3. Gather feedback before investing further

```
Problem: Build an appointment booking system

Wrong MVP (too little):
  Just a landing page collecting emails
  → Validates nothing about the product

Right MVP:
  - Manual booking via a simple form
  - Automated confirmation email
  - Admin views the schedule via Google Calendar (no need to build a calendar)
  → Validates: are customers booking? Which appointment types are popular?

Full product (after validation):
  - Custom-built calendar
  - Doctor/staff management
  - Online payment
  - Mobile app
```

**MVP questions a BA should ask stakeholders:**
> *"What's the most important assumption we need to validate? What's the smallest feature that helps us learn that?"*

---

## 5. When is a shortcut reasonable, and when is it not?

### A shortcut is REASONABLE when:

| Condition | Example |
|-----------|-------|
| Validating before investing | Hardcode 5 provinces to test UX before building the full API |
| The user base is still small | 100 users: no need for a cache, no need for a queue |
| The feature may be changed or removed | Trying out an A/B test feature |
| Hard deadline, high business impact | Demo for investors, no time to spare |
| The team knows it's borrowing and has a plan to repay | Log it in the backlog, refactor next sprint |

### A shortcut is NOT REASONABLE when:

| Condition | Example |
|-----------|-------|
| Security is involved | Storing passwords as plaintext "temporarily" |
| Data integrity | Skipping validation because "we trust our users" |
| Core feature that definitely needs to scale | Not indexing the database for the main search feature |
| The team already has a lot of debt | Adding debt on top of old debt = compound interest |
| No one tracks and repays it | A "temporary" shortcut that lasts 3 years |

---

## 6. How a BA Can Recognize a Team with High Technical Debt

Here are the signs:

**Signs from developers:**
- *"This part is really old, nobody dares to touch it"*
- *"I need to fix this small bug but I'm afraid of breaking something else"*
- *"The estimate is high because we need to refactor before building the new feature"*
- *"I don't understand why this code was written this way"*

**Signs from the data:**
- Bug fixes take more dev time
- Sprint velocity gradually declines across sprints
- Regression bugs: fix one thing here, break something else there

**Signs from the process:**
- No automated tests → no one dares to refactor
- Deployments take hours and carry high risk
- *"Don't deploy on Friday"* is an unwritten rule

**When a BA realizes this:**
- Don't push more feature pressure
- Add a "tech debt cleanup" sprint into the backlog
- Ask the PO/PM: *"Can we dedicate 20% of the sprint's capacity to refactoring?"*

---

## 7. The Classic Trade-off Triangle

In every software project, you can only pick 2 out of 3:

```
          FAST
            △
           /|\
          / | \
         /  |  \
        /   |   \
       ▽---------▽
    CHEAP        GOOD
```

| Pick | Drop | Meaning |
|------|-----|---------|
| Fast + Cheap | Good | MVP, prototype — many bugs, not scalable |
| Fast + Good | Cheap | Needs many skilled devs, high cost |
| Good + Cheap | Fast | A high-quality system, but takes a lot of time |

**The BA needs to clarify with stakeholders:** what is this project prioritizing? You can't have all 3. If you don't align on this from the start → stakeholders expect all 3 → the team burns out.

---

## 8. How a BA Makes Smart Trade-off Decisions

### The RICE framework for prioritization:

| Criterion | Question |
|----------|---------|
| **R**each | How many users are affected? |
| **I**mpact | How large is the impact on each user? (0.25/0.5/1/2/3) |
| **C**onfidence | How confident (%) are you about the estimate? |
| **E**ffort | How many person-weeks does it take? |

```
Score = (Reach × Impact × Confidence) / Effort

Feature A: 1000 users × 2 impact × 80% / 2 weeks = 800
Feature B: 500 users × 3 impact × 60% / 1 week = 900
→ Feature B is prioritized higher despite fewer users
```

### Questions a BA should ask before pushing a feature:

1. *"What % of the user base does this feature serve?"* → if < 5%, reconsider
2. *"If this feature didn't exist, what would users do?"* → is the workaround acceptable?
3. *"What's the biggest risk of building this feature right now?"*
4. *"The dev says it's 'complex' — complex where, specifically?"* → understand it to decide correctly
5. *"If we take a shortcut this sprint and refactor next sprint, what's the specific refactoring plan?"*

---

## 9. Real-world Example: A BA Makes a Trade-off Decision

### Situation:
The product launches in 3 weeks. Stakeholders want to add a "related product recommendations" feature (recommendation).

### Analysis:

```
Option A — AI Recommendation (the proper way):
  + Personalized, increases conversion
  - Needs 3-4 weeks (machine learning pipeline, data collection, training)
  - Won't make the launch

Option B — Rule-based (shortcut):
  + Makes the launch (3 days)
  + "Products in the same category" is simple but valuable
  - Not personalized
  - Needs refactoring once there's enough data

Option C — Drop this feature from V1:
  + The team focuses on core features
  + No added risk before launch
  - Stakeholders are disappointed
```

### The decision the BA makes:
> **Option B + a clear plan:**
> "This sprint: recommend by the same category (3 days). Log it in the backlog for Sprint 5: implement collaborative filtering once we have enough data from the first 2 months of launch. This is conscious debt, not accidental technical debt."

**Why Option B is right:**
- There's immediate business value (some recommendation > nothing)
- No launch delay
- The team knows it's borrowing and has a plan to repay

---

## 10. Technical Debt Ledger — A Tool the BA Should Use

Don't leave technical debt inside the dev's head. The BA should proactively maintain a "debt ledger":

```markdown
## Technical Debt Log

| ID | Description | Reason for borrowing | Impact if not repaid | Sprint target |
|----|-------|-----------|---------------------|---------------|
| TD-01 | Hardcode provinces | MVP launch | Can't add districts | Sprint 4 |
| TD-02 | No unit tests for payment flow | Deadline | High bug risk when refactoring | Sprint 6 |
| TD-03 | Search uses LIKE instead of full-text index | Quick fix | Slow when > 10k records | Sprint 5 |
```

**Benefits:**
- Stakeholders see that trade-offs have been recorded, not forgotten
- The PO has a basis to allocate capacity for refactoring
- Devs don't feel like they "built something bad and no one knows"

---

## 11. What a BA SHOULD NOT Do

**❌ Push deadlines without understanding the impact:**
> *"Just do it temporarily, fix it later"* — without tracking, without a plan, without paying attention to accumulating debt

**❌ Ignoring it when a dev raises a concern:**
> Dev says: *"This part needs refactoring before we add the feature"*
> BA: *"Never mind, let's just build the feature this sprint and refactor later"*
> → Next sprint: *"Let's also refactor later"* → forever

**❌ Treating all debt the same:**
> Not all debt is equally dangerous. Hardcoding a color ≠ having no security validation.
> The BA needs to learn to classify: which debt is high-risk, which is low-risk.

**✅ What a BA SHOULD do:**
- When a dev raises a technical concern, ask: *"What's the specific impact if it's not fixed? When does it become a real problem?"*
- Dedicate 10-20% of sprint capacity to tech debt
- Every shortcut must be recorded with a clear plan
- Align with the PO/PM on the Fast-Good-Cheap triangle from the start
