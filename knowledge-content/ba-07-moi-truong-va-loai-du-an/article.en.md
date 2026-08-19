# Environments & Types of IT Projects

## 1. The four environments and why a BA needs them

Software does not run in one place. It travels through **a chain of environments** before reaching real users.

| Environment | Who uses it | Data | Purpose |
|-------------|-------------|------|---------|
| **Development (dev)** | Developers | Fake, self-created | Writing and trying code while working |
| **Test / QA** | Testers | Controlled test data | Functional and regression testing |
| **Staging / UAT** | Business users, the BA | A copy of real data (with sensitive fields masked) | Acceptance and deployment rehearsal |
| **Production (prod)** | Real users | Real data | Live operation |

> **Why a BA must care:** when a user reports *"this feature does not work"*, the first question is **which environment they are in**. Many defect reports turn out to be a user in the wrong environment, or data there differing from real data.

### Three things BAs miss about environments

**1. How realistic the staging data must be.** Testing with 10 records never reveals a performance problem that appears at 10 million. **This needs to be specified explicitly.**

**2. Masking sensitive data.** Copying real data to staging without masking phone numbers, emails, and card numbers is a **privacy breach**. Nobody thinks of this requirement until there is an incident.

**3. Integration with external systems.** In the test environment, is the payment system a stub or the real one in sandbox mode? **That difference determines how far you can actually test.**

---

## 2. The life cycle of a change through the environments

Understanding this chain lets a BA answer *"when can I see it?"* precisely.

1. **A developer writes code** locally and in the dev environment.
2. **A pull request is opened** and a colleague reviews the code.
3. **Merged to the main branch**, where automated tests run.
4. **Deployed to test**, where testers run functional and regression tests.
5. **Deployed to staging**, where the BA and business users perform UAT.
6. **Deployed to production**, usually in a planned window.

> **The key point for a BA: a feature finished in test does NOT mean users can use it.** When reporting progress, state which environment the feature is in — that is far more accurate than a completion percentage.

**The rollback plan.** If a production deployment fails partway, how do you return to the previous state without losing transactions? **This is a question the BA should ask before every major release.**

---

## 3. Common types of IT projects

BAs work across many project types, and **each demands a different approach**.

**1. Greenfield.** No existing system, free to design. The challenge: everything is ambiguous with no reference point.

**2. Enhancement.** Adding functionality to a running system. The challenge: understanding the current system and not breaking what works.

**3. Legacy replacement.** The biggest challenge: **existing requirements are usually documented nowhere**, and data migration is seriously underestimated.

**4. Integration.** Connecting existing systems. The challenge: data contracts and error handling when a partner system does not respond.

**5. Packaged solution (COTS).** Buying commercial software and configuring it. The challenge: **gap analysis** and persuading the organization to change its process rather than customize the code.

**6. Process automation.** The challenge: **automating a bad process gives you a bad process running faster**.

**7. Data and reporting projects.** The challenge: reconciling metric definitions and source data quality.

> **The first question on any new project: which type is this?** The answer decides where your effort goes — eliciting from scratch, eliciting from a legacy system, or gap analysis against a package.

---

## 4. Product companies versus outsourcing

These are very different working environments, and **the choice between them shapes a BA career**.

| | **Product company** | **Outsourcing** |
|---|--------------------|-----------------|
| **Who you build for** | One product owned by your company | Many different customers |
| **Engagement length** | Long, years on one product | Short, project by project |
| **Domain knowledge** | Very deep in one field | Broad but shallower |
| **User relationship** | Direct and continuous | Mediated and limited |
| **Documentation** | Just enough, more direct conversation | More of it, since it underpins the contract |
| **Decision influence** | The BA shapes product direction | The BA executes the customer's requirements |
| **Main pressure** | Will the market accept the product | Deliver the agreed scope, on time, per contract |

**A product company suits you if you want:** depth in one field, seeing a product evolve over years, participating in product decisions.

**Outsourcing suits you if you want:** exposure to many industries, fast learning across project types, sharpened customer-facing and documentation skills.

> **Practical advice for beginners: outsourcing usually teaches faster** because you pass through many projects in a short time. After a few years, many people move to a product company to go deep.

---

## 5. The roles on a delivery team

A BA works with many roles. Knowing what each does helps you **ask the right person**.

**Building the product:**

| Role | What they do | Ask them about |
|------|-------------|----------------|
| **Frontend developer (FE)** | Builds the user interface | Interaction feasibility, display states, behaviour across screen sizes |
| **Backend developer (BE)** | Builds business logic, APIs, data processing | How business rules are implemented, API contracts, data impact |
| **Fullstack developer** | Both | The end-to-end picture of a feature |
| **Mobile developer** | iOS/Android apps | Platform constraints, app store review processes |

**Quality and operations:**

| Role | What they do | Ask them about |
|------|-------------|----------------|
| **QC / tester** | Functional testing, finding defects | Requirement verifiability, exception cases |
| **QA engineer** | Builds test process and automation | Test strategy, regression scope |
| **DevOps engineer** | Infrastructure, deployment, monitoring | Environments, release process, scalability |
| **Tech lead** | Technical direction, code review, architectural decisions | Architectural impact, technical debt, feasibility |

**Design and product:**

| Role | What they do | Ask them about |
|------|-------------|----------------|
| **UI/UX designer** | Experience and interface | User flows, wireframes, usability |
| **Product Owner** | Value and priority | Business objectives, ordering, accepting work |
| **Project manager** | Plan, resources, risk | Schedule, dependencies, project status |
| **Solution architect** | Overall architecture and integration | System constraints, integration strategy |

> **A common beginner mistake: directing every question at one person.** Asking a tech lead about usability, or a designer about architectural impact, produces answers you should not rely on.

---

## 6. Tech lead, DevOps, and other misunderstood roles

**A tech lead is not a manager.** They hold the final say on **technical decisions**, code review, and architectural direction — but usually do not manage people.

- **Ask a tech lead when:** you need the architectural impact of a change, whether a requirement is feasible, or why the team says *"this is complex"*.

**DevOps is not the person who installs software.** They build and run **infrastructure, automated deployment pipelines, and monitoring**.

- **Ask DevOps when:** you need to know how long a release takes, how much load the system handles, what logs exist for investigating incidents, and how data is backed up.
- **Nonfunctional requirements usually need verifying with DevOps** — they know what the current infrastructure can bear.

**QA differs from QC.** QC (quality control) focuses on **finding defects in the product**; QA (quality assurance) focuses on **improving the process so fewer defects appear**. Many companies use the terms interchangeably.

> **A useful observation: DevOps and tech leads are the two roles BAs most often skip during analysis, then have to consult late** — precisely when changes have become expensive.

---

## 7. Key takeaways

- Four environments: **dev, test, staging/UAT, production** — each with its own users, data, and purpose.
- On any defect report, **the first question is which environment the user is in**.
- Three things BAs miss: **how realistic staging data is, masking sensitive data, and stub versus sandbox for integrations**.
- **Copying real data to staging without masking is a privacy breach.**
- **A feature finished in test does NOT mean users can use it** — report progress by environment.
- **Ask about the rollback plan before every major release.**
- Seven IT project types, and **the first question on a new project is which type it is**.
- On replacement projects, **existing requirements are usually documented nowhere** and migration is underestimated.
- On COTS projects, the challenge is **gap analysis and persuading the organization to change process rather than code**.
- **Automating a bad process gives you a bad process running faster.**
- **Product companies give deep domain knowledge; outsourcing gives breadth** and stricter documentation habits.
- **Outsourcing usually teaches beginners faster** because of the volume of projects in a short time.
- **A common mistake is directing every question at one person** rather than the right role.
- **A tech lead is not a manager** — they hold the final say on technical decisions.
- **DevOps is not the person who installs software** — they build infrastructure, pipelines, and monitoring.
- **Nonfunctional requirements usually need verifying with DevOps**, who know what the infrastructure can bear.
- **QC finds defects in the product; QA improves the process** so fewer appear.
- **DevOps and tech leads are the two roles most often skipped during analysis**, then consulted too late.

## 8. Summary

- Understanding **the environment chain and a change's life cycle** lets a BA report progress accurately and answer *when can I see it*.
- **Each IT project type demands a different analysis approach**, so identify the type at the outset.
- **Product and outsourcing are two different career paths**, each sharpening a distinct skill set.
- Knowing **who does what on the team** lets you ask the right person and avoid skipping tech leads and DevOps until it is too late.
