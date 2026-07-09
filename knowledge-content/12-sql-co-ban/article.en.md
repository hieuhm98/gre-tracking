# SQL Basics

## 1. What Is SQL?

**SQL** (Structured Query Language) is a language used to interact with relational databases: creating tables, adding/modifying/deleting data, and querying.

SQL is not case-sensitive (`SELECT` = `select`), but the convention is to write **keywords** in uppercase.

---

## 2. SQL Command Categories

| Category | Commands | Used for |
|------|------|---------|
| **DQL** | SELECT | Querying data |
| **DML** | INSERT, UPDATE, DELETE | Manipulating data |
| **DDL** | CREATE, ALTER, DROP | Defining structure |
| **DCL** | GRANT, REVOKE | Managing permissions |

---

## 3. SELECT – Querying Data

```sql
-- Get everything
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- With a condition
SELECT * FROM users WHERE age > 25;

-- Sorting
SELECT * FROM users ORDER BY name ASC;

-- Limiting the number of results
SELECT * FROM products LIMIT 10;

-- Combined
SELECT name, email
FROM users
WHERE age > 25
ORDER BY name ASC
LIMIT 5;
```

---

## 4. WHERE – Filter Conditions

```sql
-- Comparison
WHERE age = 25
WHERE age > 25
WHERE age >= 25
WHERE age != 25

-- Range of values
WHERE age BETWEEN 20 AND 30

-- In a list
WHERE city IN ('Hanoi', 'HCM', 'DaNang')

-- String search (LIKE)
WHERE name LIKE 'Nguyen%'   -- starts with 'Nguyen'
WHERE email LIKE '%@gmail.com'  -- ends with '@gmail.com'

-- Combining conditions
WHERE age > 25 AND city = 'Hanoi'
WHERE age < 20 OR age > 60

-- Null check
WHERE phone IS NULL
WHERE phone IS NOT NULL
```

---

## 5. INSERT – Adding Data

```sql
-- Add one record
INSERT INTO users (name, email, age)
VALUES ('Nguyen Van A', 'a@mail.com', 25);

-- Add multiple records
INSERT INTO users (name, email, age)
VALUES 
  ('Tran Thi B', 'b@mail.com', 30),
  ('Le Van C', 'c@mail.com', 28);
```

---

## 6. UPDATE – Updating Data

```sql
-- Update one user
UPDATE users
SET email = 'newemail@mail.com', age = 26
WHERE id = 1;

-- ⚠️ NO WHERE → updates ALL records!
UPDATE users SET age = 0;  -- VERY DANGEROUS!
```

---

## 7. DELETE – Deleting Data

```sql
-- Delete one record
DELETE FROM users WHERE id = 5;

-- ⚠️ NO WHERE → deletes the ENTIRE table!
DELETE FROM users;  -- VERY DANGEROUS!
```

---

## 8. JOIN – Combining Tables

```sql
-- Get orders along with the user's name
SELECT orders.id, users.name, orders.amount
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- LEFT JOIN: get all orders, even orders with no user
SELECT orders.id, users.name
FROM orders
LEFT JOIN users ON orders.user_id = users.id;
```

| JOIN type | Returns |
|-----------|--------|
| INNER JOIN | Only records that match in both tables |
| LEFT JOIN | All rows from the left table + matches from the right |
| RIGHT JOIN | All rows from the right table + matches from the left |
| FULL JOIN | All rows from both tables |

---

## 9. Aggregate Functions

```sql
-- Count
SELECT COUNT(*) FROM orders;

-- Sum
SELECT SUM(amount) FROM orders WHERE user_id = 1;

-- Average
SELECT AVG(amount) FROM orders;

-- Max/Min
SELECT MAX(amount), MIN(amount) FROM orders;

-- Group results
SELECT user_id, COUNT(*) as order_count, SUM(amount) as total
FROM orders
GROUP BY user_id
HAVING total > 1000000;
```

---

## 10. SQL for BAs – Building Reports

Most BAs don't write update/delete statements; the most valuable skill is **reading and writing report queries** so you can pull numbers yourself instead of waiting on a developer.

### Readable column names with `AS`
```sql
SELECT
  user_id      AS "Customer ID",
  COUNT(*)     AS "Orders",
  SUM(amount)  AS "Total spend"
FROM orders
GROUP BY user_id;
```

### Count unique values with `DISTINCT`
```sql
-- How many customers have ever placed an order?
SELECT COUNT(DISTINCT user_id) AS customers
FROM orders;
```

### A few handy report "recipes"

```sql
-- 1) Revenue by month
SELECT
  strftime('%Y-%m', created_at) AS month,
  SUM(amount)                   AS revenue
FROM orders
GROUP BY month
ORDER BY month;

-- 2) Order count by status
SELECT status, COUNT(*) AS orders
FROM orders
GROUP BY status;

-- 3) Top 5 highest-spending customers
SELECT user_id, SUM(amount) AS total
FROM orders
GROUP BY user_id
ORDER BY total DESC
LIMIT 5;
```

### Reading an existing query
Read it in business order: **FROM** (which table) → **JOIN** (which tables to link) → **WHERE** (what to filter) → **GROUP BY** (what to group by) → **SELECT** (which columns to show) → **ORDER BY / LIMIT** (sort, limit). Follow this flow and you can understand most reports.

> 💡 A BA should request **read-only** access on the reporting environment to run SELECTs safely, with no risk of accidentally modifying or deleting real data.

---

## 11. Summary

- **SELECT**: read data.
- **WHERE**: filter by condition.
- **INSERT/UPDATE/DELETE**: manipulate data — always be careful with an UPDATE/DELETE that is missing a WHERE!
- **JOIN**: combine multiple tables.
- **GROUP BY + Aggregate**: statistics and reporting.
- **BA**: use `AS`, `DISTINCT`, and `GROUP BY` to write your own reports; request **read-only** access to run them safely.
