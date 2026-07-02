# Software Testing

## 1. What is testing?

**Software Testing** is the process of evaluating software to detect defects (bugs) and ensure it meets requirements.

**Goal**: detect defects early — the sooner you fix them, the cheaper it is.

**Rule of 10**: the cost of fixing a bug grows exponentially across phases:
- Requirements: 1x
- Design: 10x
- Development: 100x
- Production: 1000x

---

## 2. Levels of testing

### Unit Test
- Tests each **smallest** function/module in isolation.
- Written by developers.
- Fast, run many times.
- Example: testing a function that calculates VAT.

### Integration Test
- Tests the **combination** of multiple modules/services.
- Checks the interfaces and data flow between the parts.
- Example: testing whether the order API connects correctly to the database.

### System Test
- Tests the **entire system** as a single unit.
- End-to-end scenarios.
- Close to the production environment.

### UAT (User Acceptance Testing)
- Real users or the customer test it.
- Confirms the system meets the business requirements.
- The final step before go-live.

### Regression Test
- After every change, retest everything to ensure nothing that was working is broken.
- Usually automated.

---

## 3. Test Pyramid

```
         ┌─────────────┐
         │     E2E     │ ← Few, slow, expensive
         ├─────────────┤
         │ Integration │
         ├─────────────┤
         │  Unit Test  │ ← Many, fast, cheap
         └─────────────┘
```

Principle: many unit tests (fast, cheap) + few E2E tests (slow, expensive).

---

## 4. Bug Lifecycle

```
New → Assigned → In Progress → Fixed → Testing → Verified → Closed
                                  ↑                ↓
                              Re-opened ←── Failed
```

| Status | Meaning |
|-----------|---------|
| New | The bug was just reported |
| Assigned | Assigned to a developer |
| In Progress | The developer is fixing it |
| Fixed | The developer has fixed it, awaiting verification |
| Testing | QA is retesting |
| Verified | QA has confirmed it is fixed |
| Closed | The bug is closed |
| Re-opened | QA finds the bug still exists → reopen |
| Won't Fix | A decision not to fix it (low impact) |

---

## 5. A good Bug Report

A bug report needs:
1. **Title**: concise, clearly describing the problem.
2. **Environment**: the environment (browser, OS, version).
3. **Steps to Reproduce**: the steps to reproduce it.
4. **Expected Result**: the expected outcome.
5. **Actual Result**: the actual outcome.
6. **Severity**: the level of severity.
7. **Priority**: the priority for handling it.
8. **Attachment**: screenshot, video, log.

---

## 6. Severity vs Priority

| | Severity (Technical severity) | Priority (Handling priority) |
|--|-------------------------------------|--------------------------|
| **Critical** | App crash, data loss | Fix immediately |
| **High** | A core function doesn't work | Fix in this sprint |
| **Medium** | A workaround is available | Fix next sprint |
| **Low** | UI off by a pixel | Fix when there's time |

Severity ≠ Priority. Example: a small bug (low severity) that the CEO just saw → critical priority.

---

## 7. Manual vs Automated Testing

| | Manual | Automated |
|--|--------|-----------|
| **Best for** | Exploratory, UAT, UI/UX | Regression, unit, performance |
| **Initial cost** | Low | High (you must write scripts) |
| **Speed** | Slow | Fast |
| **Accuracy** | Can make mistakes | Consistent |

---

## 8. Summary

- **Unit Test**: the smallest module, written by developers.
- **Integration Test**: combining modules together.
- **UAT**: real users confirm it.
- **Regression**: retest after every change.
- A good **bug report** = has clear steps to reproduce.
- **Severity** ≠ **Priority** — distinguish them to prioritize correctly.
