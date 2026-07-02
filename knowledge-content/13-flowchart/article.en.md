# Flowchart

## 1. What Is a Flowchart?

A **flowchart** is a tool for visualizing a process, a processing flow, or an algorithm using standard symbols connected by arrows.

A flowchart helps you:
- Understand and communicate a business process.
- Spot redundant steps and bottlenecks.
- Document a process.
- Describe logic for developers.

---

## 2. Standard Symbols (ISO 5807)

| Symbol | Shape | Meaning |
|---------|-----------|---------|
| **Terminal** | Oval/rounded | The start or end point |
| **Process** | Rectangle | A processing step or action |
| **Decision** | Diamond | A decision point (Yes/No, If/Else) |
| **Input/Output** | Parallelogram | Data input/output |
| **Connector** | Small circle | A link between sections |
| **Arrow** | Arrow | The direction of the flow |
| **Database** | Cylinder | Data storage |
| **Document** | Rectangle + wave | A document or report |

---

## 3. Rules for Drawing Flowcharts

1. **Start and end** with an oval (Terminal).
2. **Arrows** show the direction of the flow, usually top-to-bottom or left-to-right.
3. A **Decision** must have at least 2 outgoing branches (Yes/No or True/False).
4. **Each step** has one clear purpose.
5. **Avoid crossing** connector lines.

---

## 4. Example: Online Ordering Process

```
[Start]
    ↓
[Customer selects a product]
    ↓
[Add to cart]
    ↓
◆ Logged in yet? ──No──→ [Prompt to log in] ──→ ◆ Login successful?
    ↓ Yes                                                   ↓ No → [Show error] → [End]
[Enter shipping address]                                   ↓ Yes
    ↓                                                  [Enter shipping address]
[Choose payment method]
    ↓
◆ Enough stock available?
    ↓ Yes              ↓ No
[Process the order]    [Notify out of stock]
    ↓                    ↓
[Send confirmation email] [End]
    ↓
[End]
```

---

## 5. Swimlane Flowchart

When a process involves multiple people/departments, use a **Swimlane** to clearly divide responsibilities:

```
│ Customer   │ Sales staff    │ System   │
│            │                │          │
│ Place order ─────────────────→ Receive order│
│            │     Approve ←─────           │
│            │     order  │               │
│ Receive ←──────────────────── Send email│
│ confirmation │              │           │
```

A swimlane diagram makes it clearer who does what and avoids confusion over responsibilities.

---

## 6. Flowchart Drawing Tools

- **draw.io / diagrams.net**: free, web-based.
- **Lucidchart**: paid, feature-rich.
- **Figma**: design combined with diagramming.
- **Microsoft Visio**: popular in enterprises.
- **Mermaid**: write flowcharts as code (markdown-like).

---

## 7. Flowchart vs BPMN

| | Flowchart | BPMN |
|--|-----------|------|
| **Purpose** | General purpose | Specific business processes |
| **Complexity** | Simple | More complex and detailed |
| **Users** | Everyone | BAs, process engineers |
| **Standard** | ISO 5807 | OMG BPMN 2.0 |

---

## 8. Summary

- **Oval**: start/end.
- **Rectangle**: processing step.
- **Diamond**: decision.
- **Parallelogram**: input/output.
- **Swimlane**: divides responsibilities by role.
- A flowchart is a communication tool — draw it in enough detail to avoid misunderstanding.
