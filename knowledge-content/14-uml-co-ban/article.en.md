# UML Basics

## 1. What Is UML?

**UML** (Unified Modeling Language) is a standard modeling language for describing the design of software systems using visual diagrams.

UML has 14 types of diagrams, but a BA/PM mainly needs to know the following 3.

---

## 2. Use Case Diagram

**Purpose**: to describe what the system does (its features) and who uses it.

### Symbols

| Symbol | Description |
|---------|-------|
| Stick figure | **Actor** — a user or an external system |
| Oval | **Use Case** — a feature of the system |
| Rectangle | **System boundary** — the boundary of the system |
| Solid line | **Association** — an actor uses a use case |
| `<<include>>` | This use case includes another use case (mandatory) |
| `<<extend>>` | This use case extends another use case (optional) |

### Example: Online shopping system

```
┌─────────────────── Shopping system ───────────────────┐
│                                                          │
│  (Search products)      (View cart)                   │
│  (Place order)          (Track order)                 │
│  (Make payment)         (Manage products)             │
│                                                          │
└──────────────────────────────────────────────────────────┘

👤 Customer → Search, View cart, Place order, Make payment
👤 Admin → Manage products
👤 Payment system → <<extends>> Make payment
```

---

## 3. Activity Diagram

**Purpose**: to describe the flow of activities, a step-by-step process — similar to a flowchart but in the context of UML.

### Symbols

| Symbol | Description |
|---------|-------|
| Filled circle | Initial node (start) |
| Filled circle + outer ring | Final node (end) |
| Rounded rectangle | Activity (action) |
| Diamond | Decision/Merge node |
| Horizontal black bar | Fork/Join (parallel) |
| Swimlane | Division by role |

### Differences from a Flowchart
- An activity diagram has **Fork/Join** to describe parallel activities.
- It integrates better with other UML diagrams.
- The **swimlane** is called a **partition** in UML.

---

## 4. Sequence Diagram

**Purpose**: to describe the **order** of interactions between objects over time.

### Symbols

| Symbol | Description |
|---------|-------|
| Rectangle at the top | **Lifeline** — the participating object/actor |
| Vertical dashed line | **Lifeline** — existence over time |
| Narrow rectangle | **Activation box** — currently processing |
| Solid arrow | **Synchronous message** (call and wait) |
| Dashed arrow | **Return message** (return) |
| Open arrow | **Asynchronous message** (call without waiting) |

### Example: System login

```
Browser        Server        Database
  │               │               │
  │──POST /login─►│               │
  │               │──SELECT user──►│
  │               │◄──user data───│
  │               │ (verify pass) │
  │◄──200 + token─│               │
  │               │               │
```

---

## 5. When to Use Which Type of Diagram?

| Situation | Diagram to use |
|-----------|--------------|
| Identify system features and who uses what | Use Case Diagram |
| Describe a business process step-by-step | Activity Diagram |
| Describe how components communicate over time | Sequence Diagram |
| Design the class/object structure | Class Diagram |
| Describe the states of an object | State Diagram |

---

## 6. Practical Notes for BAs/PMs

- Use a Use Case Diagram at **project kick-off** — to scope the system.
- Use an Activity Diagram when **describing business processes** — similar to a flowchart.
- Use a Sequence Diagram when **working with developers** on APIs/integrations.
- You do not need to know all 14 types — the three above cover 80% of a BA's work.

---

## 7. Summary

- **Use Case**: what the system does and who uses it.
- **Activity**: a step-by-step process with support for parallelism.
- **Sequence**: the order of interactions over time.
- Actor = a user or an external system.
- `<<include>>` = mandatory; `<<extend>>` = optional.
