# IT Project Management

## 1. What is an IT project?

An **IT project** is a time-bound effort to create a unique IT product/service/result, with a defined scope, budget, and timeline.

A PM/BA in IT needs to understand the core constraints and how to manage them.

---

## 2. The Triple Constraint

Three constraints are always present in every project:

```
        Scope
        /  \
       /    \
     Time──Cost
```

**Iron Triangle**: if one side changes, at least one other side is affected.

- Want to add scope → you need more time or more cost.
- Want to shorten the time → you must reduce scope or increase cost.
- Want to cut cost → you must reduce scope or extend the time.

**Quality** is usually placed in the center of the triangle — it is affected when the three sides are out of balance.

---

## 3. Scope Management

**Scope creep**: the scope gradually expanding out of control.

**How to prevent scope creep:**
- Define the scope clearly from the start (WBS, SRS).
- Change Control Process: every change must be evaluated and approved.
- Communicate impact: "Adding this feature → +2 weeks to the timeline".

**WBS (Work Breakdown Structure)**: decomposing the project into progressively smaller deliverables.

```
E-commerce App Project
├── Frontend
│   ├── Home page
│   ├── Product page
│   └── Checkout page
├── Backend API
│   ├── User API
│   ├── Product API
│   └── Order API
└── Database
    ├── Schema design
    └── Data migration
```

---

## 4. Timeline Management

**Gantt Chart**: a horizontal bar chart showing the timeline of each task.

```
Task              | T1 | T2 | T3 | T4 | T5 | T6
Design            |████|    |    |    |    |
Development       |    |████|████|    |    |
Testing           |    |    |    |████|    |
Deployment        |    |    |    |    |████|
Buffer            |    |    |    |    |    |████
```

**Critical Path**: the longest chain of tasks that determines the minimum duration of the project. A delay in any task on the critical path → the entire project is delayed.

**Milestone**: an important checkpoint (not a task) — for example: "MVP completed", "UAT passed", "Go-live".

---

## 5. Risk Management

**Process:**
1. **Identify**: list all risks.
2. **Assess**: evaluate likelihood × impact.
3. **Plan**: response strategy.
4. **Monitor**: track continuously.

**Response strategies:**
- **Avoid**: change the plan to eliminate the risk.
- **Mitigate**: reduce the probability or impact.
- **Transfer**: shift the risk to another party (insurance, outsourcing).
- **Accept**: accept it and prepare a contingency plan.

---

## 6. Stakeholder Management

A **stakeholder** = anyone affected by, or who can affect, the project.

**Influence × Interest matrix:**

```
         HIGH interest
              │
HIGH     Keep │  Manage
influence     │  Closely
─────────────┼─────────
LOW      Monitor│  Keep
influence     │  Informed
              │
         LOW interest
```

- **Manage Closely**: high influence + high interest → engage continuously.
- **Keep Informed**: low influence + high interest → give them full information.
- **Keep Satisfied**: high influence + low interest → don't let them become unhappy.
- **Monitor**: low/low → don't spend too much effort.

---

## 7. Popular project management tools

| Tool | Used for |
|---------|---------|
| **Jira** | Agile projects, bug tracking |
| **Trello** | Simple Kanban board |
| **Asana** | Task management |
| **Monday.com** | Visual project management |
| **MS Project** | Gantt charts, resource planning |
| **Notion** | Documentation + tasks |
| **Confluence** | Team wiki, documentation |

---

## 8. Summary

- **Triple Constraint**: Scope – Time – Cost — you can't optimize all 3 at once.
- **Scope creep**: the biggest danger for IT projects — prevent it with Change Control.
- **WBS**: decompose the project into small deliverables.
- **Critical Path**: determines the minimum timeline.
- **Risk Register**: a tool for tracking risks.
- **Stakeholder matrix**: prioritize communication where it matters.
