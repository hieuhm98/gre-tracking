# What Is a Database?

## 1. What Is a Database?

A **database** is an organized system for storing and managing data, allowing data to be queried, updated, and deleted efficiently.

Without a database → data is stored in files → hard to search and impossible to guarantee consistency.

---

## 2. RDBMS – Relational Database

An **RDBMS** (Relational Database Management System) organizes data into structured **tables**.

### Table

| id | name | email | age |
|----|------|-------|-----|
| 1 | Nguyễn A | a@mail.com | 25 |
| 2 | Trần B | b@mail.com | 30 |
| 3 | Lê C | c@mail.com | 28 |

- **Column/Field**: an attribute — id, name, email, age.
- **Row/Record**: a single record — one user.
- **Schema**: the structure of the table (column names, data types).

### Common data types

| Type | Used for |
|------|---------|
| INTEGER / BIGINT | Whole numbers, IDs |
| VARCHAR(n) | Strings with a limited length |
| TEXT | Long strings |
| DECIMAL(p,s) | Real numbers (currency) |
| BOOLEAN | True/false |
| DATE / TIMESTAMP | Dates and times |
| JSON / JSONB | JSON data |

---

## 3. Primary Key & Foreign Key

### Primary Key
A **unique** value that identifies each record in a table. It is usually the `id` column.

- Cannot be null.
- Cannot be duplicated.
- Each table has one primary key.

### Foreign Key
A column that references the **Primary Key of another table** — creating a relationship between tables.

```
Table users:   id, name, email
Table orders:  id, user_id (FK → users.id), product, amount
```

`orders.user_id` is a foreign key pointing to `users.id` → this tells us which user an order belongs to.

---

## 4. Relationships Between Tables

| Relationship | Meaning | Example |
|---------|---------|-------|
| **One-to-Many** | 1 record → many other records | 1 user has many orders |
| **Many-to-Many** | Many ↔ many (needs a junction table) | Many students - many courses |
| **One-to-One** | 1 record ↔ 1 record | 1 user - 1 profile |

---

## 5. Index

An **index** speeds up searching — like a book's table of contents.

Without an index: finding the user with email="a@mail.com" → scans the entire table (O(n)).
With an index on the email column: finds it directly (O(log n)).

**Trade-off**: an index speeds up reads but slows down writes (the index must be updated on every insert/update).

---

## 6. SQL vs NoSQL

### SQL (Relational)
Tables have a fixed structure, clear relationships, and use SQL.
- MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
- Best for: data with complex relationships that requires high consistency (finance, ERP).

### NoSQL
More flexible, with no fixed schema required.

| Type | Example | Best for |
|------|-------|---------|
| Document | MongoDB | JSON-like, flexible schema |
| Key-Value | Redis | Cache, session |
| Column | Cassandra | Big data, time series |
| Graph | Neo4j | Social networks, complex relationships |

---

## 7. ACID – Key Properties

**ACID** is a set of properties that guarantee data integrity:

- **A**tomicity: a transaction either completes entirely or does nothing at all.
- **C**onsistency: the database is always in a valid state.
- **I**solation: transactions run independently of one another.
- **D**urability: committed data is not lost even if a failure occurs.

**Bank transfer example**: deducting 1 million from A and adding it to B must happen together — if step 2 fails, step 1 must be rolled back.

---

## 8. Summary

- **Database** = an organized storage system.
- **Table** = a data table (columns + rows).
- **Primary Key** = a unique identifier.
- **Foreign Key** = creates relationships between tables.
- **Index** = speeds up searching.
- **SQL** = relational data; **NoSQL** = flexible and scales well.
- **ACID** = guarantees data integrity.
