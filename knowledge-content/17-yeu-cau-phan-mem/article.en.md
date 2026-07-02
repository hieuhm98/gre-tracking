# Software Requirements

## 1. What are software requirements?

**Software Requirements** are descriptions of what a system needs to do and the constraints it must satisfy.

Gathering requirements well → you build the right thing.
Gathering requirements poorly → you waste effort reworking it again and again.

---

## 2. Functional vs Non-functional Requirements

### Functional Requirements (FR)
Describe **what** the system does — specific behaviors and features.

**Examples:**
- A user can register an account with an email address.
- The system sends a confirmation email after an order is placed.
- An admin can view a list of all orders.

### Non-functional Requirements (NFR)
Describe **how** the system operates — quality attributes and constraints.

| NFR type | Example |
|----------|-------|
| **Performance** | The page loads in < 2 seconds |
| **Security** | Passwords must be hashed with bcrypt |
| **Availability** | 99.9% uptime (downtime < 8.7h/year) |
| **Scalability** | Supports 10,000 concurrent users |
| **Usability** | A new user can place an order without any guidance |
| **Maintainability** | Test code coverage > 80% |
| **Compliance** | Complies with GDPR, PCI DSS |

---

## 3. User Story

A User Story expresses a requirement **from the user's perspective**, using this format:

```
As a [who] (role),
I want [to do what] (action),
So that [I achieve what] (benefit/value).
```

**Example:**
> As an *online shopper*,
> I want to *filter products by price and category*,
> So that *I can find products that fit my needs faster*.

**Characteristics of a good User Story (INVEST):**
- **I**ndependent: independent of other stories.
- **N**egotiable: open to discussion and adjustment.
- **V**aluable: valuable to the user.
- **E**stimable: can be estimated.
- **S**mall: small enough to complete within 1 sprint.
- **T**estable: can be verified.

---

## 4. Acceptance Criteria

**Acceptance Criteria (AC)** are the criteria that define when a user story is considered **complete and correct**. They are the "contract" between the PO and the Dev Team.

**Given-When-Then format:**
```
Given [initial context]
When [an action occurs]
Then [expected outcome]
```

**Example** (for the product filtering story):
```
Given the user is on the product listing page
When they select a price of 100,000 - 500,000 VND and the "Electronics" category
Then only products in the Electronics category priced within that range are shown

Given no products meet the filter conditions
When the filter is applied
Then the message "No matching products found" is displayed
```

---

## 5. Requirements Gathering Techniques

| Technique | Best for |
|---------|---------|
| **Interview** | Understanding one specific stakeholder in depth |
| **Workshop** | Many stakeholders, aligning them at once |
| **Survey/Questionnaire** | Many people, simple questions |
| **Observation (Job shadowing)** | Understanding users' real-world processes |
| **Prototyping** | Validating ideas early, getting visual feedback |
| **Document analysis** | Legacy systems, existing processes |

---

## 6. Other types of requirements

- **Business Requirements**: high-level business goals.
- **User Requirements**: the needs of end users.
- **System Requirements**: detailed technical specifications.
- **Transition Requirements**: requirements for migrating from an old system.

---

## 7. Common mistakes when writing requirements

- ❌ **Vague**: "The system must be fast" → ✅ "The page loads in < 2 seconds at the 95th percentile".
- ❌ **Not testable**: "Easy to use" → ✅ "A new user places an order successfully without help".
- ❌ **Missing AC**: a user story without acceptance criteria → developers don't know what "done" means.
- ❌ **Missing edge cases**: only the happy path, forgetting error cases.

---

## 8. Summary

- **FR**: what the system does.
- **NFR**: how well the system runs (performance, security...).
- **User Story**: a requirement from the user's perspective, in the format "As a... I want... So that...".
- **Acceptance Criteria**: the criteria for "done", in the Given-When-Then format.
- Good requirements = specific, testable, with clear AC.
