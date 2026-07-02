# Splitting Tasks Between FE & BE

## 1. Why does a BA need to know how to split tasks?

One of the most important skills of a BA is to **translate business requirements into technical tasks** that are clear enough for developers to estimate and implement. You don't need to know how to code, but you do need to understand:

- Which part is done by FE and which part by BE
- Whether a new API is needed or an existing API can be reused
- Which tasks depend on which (dependency)
- What needs to be agreed upon first (API contract)

Without this mindset, tasks become vague, developers estimate incorrectly, and the sprint slips.

---

## 2. Principles for splitting FE / BE

### Frontend is responsible for:
- **UI Components**: rendering the interface, layout, responsive design
- **UX Logic**: loading state, error state, empty state, transitions
- **Form handling**: client-side input validation, form submission
- **Routing**: navigation between screens
- **Client-side state**: temporary data on the screen
- **API calls**: calling BE APIs to fetch/send data
- **Local storage**: temporarily storing the token, user preferences

### Backend is responsible for:
- **Business logic**: calculations, business rules
- **Authentication & Authorization**: authentication, permission control
- **Database**: CRUD, queries, migrations
- **API endpoints**: creating and maintaining REST/GraphQL APIs
- **Validation**: re-validating all incoming data (never trust FE)
- **External services**: email, SMS, payment, storage
- **Cron jobs**: background tasks that run on a schedule
- **File processing**: handling uploads, conversion

### Both do together:
- **API Contract**: agree on the request/response format before coding
- **Error handling**: FE displays errors, BE returns the correct error code

---

## 3. The process for splitting tasks for a feature

### Step 1: Identify the screens (FE)

From the user story, list all screens and components:

```
Feature: Product management

Screens:
1. Product list (ProductListPage)
   - Header + "Add product" button
   - Filters (filter by category, status)
   - Search bar
   - Product table/grid
   - Pagination

2. Create/edit product form (ProductFormPage)
   - Input: name, description, price, category
   - Image upload
   - Toggle: active/inactive
   - Save / Cancel buttons

3. Delete confirmation modal
```

### Step 2: Identify the required APIs (BE)

Each FE action needs an API endpoint:

```
Required APIs:
1. GET  /api/products          → get the list (filter, search, pagination)
2. GET  /api/products/:id      → get details of one product
3. POST /api/products          → create new
4. PUT  /api/products/:id      → update
5. DELETE /api/products/:id    → delete (soft delete)
6. POST /api/products/upload   → upload image

7. GET  /api/categories        → get categories for the dropdown (can be a separate API)
```

### Step 3: Define the API Contract

Agree on the format before coding:

```json
// Request: POST /api/products
{
  "name": "Áo thun unisex",
  "description": "Mô tả sản phẩm...",
  "price": 299000,
  "category_id": "abc123",
  "status": "active",
  "images": ["url1", "url2"]
}

// Response: 201 Created
{
  "success": true,
  "data": {
    "id": "xyz789",
    "name": "Áo thun unisex",
    "price": 299000,
    "created_at": "2025-04-09T10:00:00Z"
  }
}

// Response: 422 Validation Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dữ liệu không hợp lệ",
    "fields": {
      "name": "Tên sản phẩm không được để trống",
      "price": "Giá phải lớn hơn 0"
    }
  }
}
```

### Step 4: Break it down into concrete tasks

```
BACKEND TASKS:
□ [BE-1] Create database schema: products, categories tables
□ [BE-2] API: GET /api/products (filter, search, pagination)
□ [BE-3] API: GET /api/products/:id
□ [BE-4] API: POST /api/products (validation, business rules)
□ [BE-5] API: PUT /api/products/:id
□ [BE-6] API: DELETE /api/products/:id (soft delete)
□ [BE-7] API: POST /api/products/upload (validate file type/size, store on S3)
□ [BE-8] API: GET /api/categories

FRONTEND TASKS:
□ [FE-1] ProductListPage: layout + table component
□ [FE-2] ProductListPage: filter and search (calls API BE-2)
□ [FE-3] ProductListPage: pagination
□ [FE-4] ProductFormPage: create form (calls API BE-4)
□ [FE-5] ProductFormPage: edit form (calls API BE-3 + BE-5)
□ [FE-6] ProductFormPage: image upload (calls API BE-7)
□ [FE-7] Delete confirmation modal (calls API BE-6)
□ [FE-8] Loading/error/empty states for all screens

DEPENDENCY:
- FE-1 through FE-8 depend on the BE APIs (need a BE mock or completed BE first)
- FE-4 needs BE-8 (category dropdown)
- All FE tasks need an agreed API contract (BE-1 completed first)
```

---

## 4. Real-world example: The "Book an appointment" feature

### User Story
```
As a patient,
I want to book an appointment with a doctor online,
So that I don't have to call the clinic.
```

### FE screen analysis

```
1. Choose specialty → 2. Choose doctor → 3. Choose date/time → 4. Confirm information → 5. Payment → 6. Booking confirmation
```

### Required APIs

```
GET  /api/specialties                    → list of specialties
GET  /api/doctors?specialty_id=X        → doctors by specialty
GET  /api/doctors/:id/availability      → a doctor's available slots
GET  /api/doctors/:id/availability?date=2025-04-09  → availability by date
POST /api/appointments                  → create an appointment
GET  /api/appointments/:id             → appointment details
POST /api/payments/create-session       → initialize payment
POST /api/payments/webhook              → receive the result from the payment gateway
```

### Task breakdown

```
BACKEND:
□ [BE-1] Schema: appointments, doctor_schedules, specialties tables
□ [BE-2] API to get the list of specialties
□ [BE-3] API to get doctors by specialty (filter, paginate)
□ [BE-4] API to get a doctor's open slots (logic to check schedule overlap)
□ [BE-5] API to create an appointment (validate: no double booking, check payment)
□ [BE-6] Integrate the payment gateway (Stripe/VNPay)
□ [BE-7] Webhook to handle the payment result
□ [BE-8] Send a confirmation email after a successful booking
□ [BE-9] Cron job: appointment reminder 24h before

FRONTEND:
□ [FE-1] Stepper component (multi-step flow)
□ [FE-2] Choose-specialty screen
□ [FE-3] Choose-doctor screen + filter
□ [FE-4] Calendar for date selection + time slot picker
□ [FE-5] Patient information confirmation form
□ [FE-6] Payment UI integration (redirect/iframe)
□ [FE-7] Success / failure confirmation screen
□ [FE-8] Loading/error states for each step

DEPENDENCY CHAIN:
BE-1 → BE-2, BE-3, BE-4, BE-5 (schema must be finished first)
BE-6 → BE-7 (payment needed before the webhook)
FE-4 depends on BE-4 (need to know the available-slots format)
FE-6 depends on BE-6 (need the payment session URL)
```

---

## 5. API Contract — The first thing to agree on

**API Contract** is the agreement between FE and BE about:
- Endpoint URL
- HTTP method
- Request body / query params / path params
- Response format on success
- Response format on error
- HTTP status codes

**Why it matters:** FE and BE can work in parallel if the contract is clear. FE uses mock data while BE builds the real API. When done, they are wired together.

**API Contract template:**

```
Endpoint: POST /api/auth/login

Request:
  Method: POST
  Headers: Content-Type: application/json
  Body:
    {
      "email": string (required, valid email format),
      "password": string (required, min 8 chars)
    }

Response:
  200 OK — login successful:
    {
      "token": "eyJhbGci...",
      "expires_in": 86400,
      "user": {
        "id": "uuid",
        "name": "Nguyễn An",
        "email": "an@example.com",
        "role": "admin" | "member"
      }
    }

  401 Unauthorized — wrong credentials:
    { "code": "INVALID_CREDENTIALS", "message": "Email hoặc mật khẩu không đúng" }

  422 Unprocessable Entity — validation error:
    { "code": "VALIDATION_ERROR", "fields": { "email": "Email không hợp lệ" } }

  429 Too Many Requests — too many attempts:
    { "code": "RATE_LIMITED", "message": "Thử lại sau 15 phút", "retry_after": 900 }
```

---

## 6. Telling whether a task belongs to FE or BE

Use this table for quick classification:

| Requirement | FE | BE |
|---------|----|----|
| Display a list of X | ✓ | API GET /X |
| Search, filter | ✓ (UI) | ✓ (query logic) |
| Data entry form | ✓ | API POST/PUT |
| Validate format (email, phone) | ✓ | ✓ (mandatory) |
| Validate business rule ("must be 18+") | ✗ | ✓ |
| File upload | ✓ (UI picker) | ✓ (store file, validate size/type) |
| Send email/SMS | ✗ | ✓ |
| Calculate price, tax, discount | ✗ | ✓ |
| Permission to show a button | ✓ (hide UI) | ✓ (block API) |
| Export CSV/PDF | ✗ | ✓ |
| Animation, transition | ✓ | ✗ |
| Loading/skeleton UI | ✓ | ✗ |
| Responsive design | ✓ | ✗ |
| Schedule email sending | ✗ | ✓ (cron job) |
| Real-time notification | ✓ (WebSocket client) | ✓ (WebSocket server) |

---

## 7. Questions a BA should ask during grooming

### Before writing the task:
- "Does this API already exist or do we need to create a new one?" → affects the estimate
- "Is there a similar screen we've already built?" → might be reusable
- "Do FE and BE need to work at the same time, or can they work in parallel?" → affects the sprint plan

### When unsure whether it's FE or BE:
- "Does this validation rule need to be checked on both FE and BE?"
- "Could this logic be wrong if it's only done on FE?" → if yes, BE is needed

### When the estimate seems high:
- "Is there any dependency that takes extra time?"
- "Do we need a third-party integration?" (payment, SMS, AI...)
- "Is there any breaking change that affects other features?"

---

## 8. Dependencies and Sprint Planning

The **dependency chain** determines the order of work:

```
Example: Payment feature

CANNOT be done in parallel:
  1. BE: Database schema
  2. BE: Create-order API         (needs the schema)
  3. BE: Payment integration      (needs the order API)
  4. BE: Confirmation webhook     (needs payment)
  5. FE: Checkout flow            (needs the payment session API)

CAN be done in parallel (after the contract is done):
  - BE: API to get the product list
  - FE: Checkout screen UI (using mock data)
```

**For Sprint Planning:**
- Task with a dependency → place it at the end of the sprint or in a later sprint
- Task without a dependency → can be started early, in parallel
- FE/BE tasks that need to be wired together → allow buffer time for integration

---

## 9. Technical Ticket Template

When a BA creates a technical ticket, this format helps developers understand clearly:

```markdown
## [FE] User list screen

**User Story:** US-012
**Sprint:** Sprint 5

### Description
Build the user management page for admins, showing the list
and allowing search/filter.

### APIs to use
- GET /api/admin/users?search=&role=&page=&limit=
  (see the API contract at: [Confluence link])

### UI requirements
- Layout per Figma: [Figma frame link]
- Responsive: desktop (≥1024px) and tablet (768px-1023px)
- Mobile not required

### Acceptance Criteria
- [ ] Display the user list with: avatar, name, email, role, status
- [ ] Search by name or email (300ms debounce)
- [ ] Filter by role: All / Admin / Member
- [ ] Pagination: 20 items/page
- [ ] Loading skeleton while the API is being called
- [ ] Empty state when there are no results
- [ ] Error state when the API fails

### Out of Scope
- Create/edit/delete user (separate ticket)
- Export CSV (later sprint)

### Dependencies
- [BE-045] API GET /api/admin/users must be done first
```
