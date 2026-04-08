# SQL cơ bản

## 1. SQL là gì?

**SQL** (Structured Query Language) là ngôn ngữ dùng để tương tác với cơ sở dữ liệu quan hệ: tạo bảng, thêm/sửa/xóa dữ liệu và truy vấn.

SQL không phân biệt hoa thường (`SELECT` = `select`), nhưng quy ước viết **keyword** in hoa.

---

## 2. Các nhóm lệnh SQL

| Nhóm | Lệnh | Dùng cho |
|------|------|---------|
| **DQL** | SELECT | Truy vấn dữ liệu |
| **DML** | INSERT, UPDATE, DELETE | Thao tác dữ liệu |
| **DDL** | CREATE, ALTER, DROP | Định nghĩa cấu trúc |
| **DCL** | GRANT, REVOKE | Phân quyền |

---

## 3. SELECT – Truy vấn dữ liệu

```sql
-- Lấy tất cả
SELECT * FROM users;

-- Chọn cột cụ thể
SELECT name, email FROM users;

-- Có điều kiện
SELECT * FROM users WHERE age > 25;

-- Sắp xếp
SELECT * FROM users ORDER BY name ASC;

-- Giới hạn số kết quả
SELECT * FROM products LIMIT 10;

-- Kết hợp
SELECT name, email
FROM users
WHERE age > 25
ORDER BY name ASC
LIMIT 5;
```

---

## 4. WHERE – Điều kiện lọc

```sql
-- So sánh
WHERE age = 25
WHERE age > 25
WHERE age >= 25
WHERE age != 25

-- Khoảng giá trị
WHERE age BETWEEN 20 AND 30

-- Trong danh sách
WHERE city IN ('Hanoi', 'HCM', 'DaNang')

-- Tìm kiếm chuỗi (LIKE)
WHERE name LIKE 'Nguyen%'   -- bắt đầu bằng 'Nguyen'
WHERE email LIKE '%@gmail.com'  -- kết thúc bằng '@gmail.com'

-- Kết hợp điều kiện
WHERE age > 25 AND city = 'Hanoi'
WHERE age < 20 OR age > 60

-- Null check
WHERE phone IS NULL
WHERE phone IS NOT NULL
```

---

## 5. INSERT – Thêm dữ liệu

```sql
-- Thêm 1 bản ghi
INSERT INTO users (name, email, age)
VALUES ('Nguyen Van A', 'a@mail.com', 25);

-- Thêm nhiều bản ghi
INSERT INTO users (name, email, age)
VALUES 
  ('Tran Thi B', 'b@mail.com', 30),
  ('Le Van C', 'c@mail.com', 28);
```

---

## 6. UPDATE – Cập nhật dữ liệu

```sql
-- Cập nhật một user
UPDATE users
SET email = 'newemail@mail.com', age = 26
WHERE id = 1;

-- ⚠️ KHÔNG có WHERE → cập nhật TẤT CẢ bản ghi!
UPDATE users SET age = 0;  -- RẤT NGUY HIỂM!
```

---

## 7. DELETE – Xóa dữ liệu

```sql
-- Xóa một bản ghi
DELETE FROM users WHERE id = 5;

-- ⚠️ KHÔNG có WHERE → xóa TOÀN BỘ bảng!
DELETE FROM users;  -- RẤT NGUY HIỂM!
```

---

## 8. JOIN – Kết hợp bảng

```sql
-- Lấy đơn hàng kèm tên user
SELECT orders.id, users.name, orders.amount
FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- LEFT JOIN: lấy tất cả orders, kể cả order không có user
SELECT orders.id, users.name
FROM orders
LEFT JOIN users ON orders.user_id = users.id;
```

| Loại JOIN | Lấy gì |
|-----------|--------|
| INNER JOIN | Chỉ bản ghi khớp ở cả hai bảng |
| LEFT JOIN | Tất cả bảng trái + khớp bảng phải |
| RIGHT JOIN | Tất cả bảng phải + khớp bảng trái |
| FULL JOIN | Tất cả từ cả hai bảng |

---

## 9. Aggregate Functions

```sql
-- Đếm
SELECT COUNT(*) FROM orders;

-- Tổng
SELECT SUM(amount) FROM orders WHERE user_id = 1;

-- Trung bình
SELECT AVG(amount) FROM orders;

-- Max/Min
SELECT MAX(amount), MIN(amount) FROM orders;

-- Nhóm kết quả
SELECT user_id, COUNT(*) as order_count, SUM(amount) as total
FROM orders
GROUP BY user_id
HAVING total > 1000000;
```

---

## 10. Tóm tắt

- **SELECT**: đọc dữ liệu.
- **WHERE**: lọc theo điều kiện.
- **INSERT/UPDATE/DELETE**: thao tác dữ liệu — luôn cẩn thận với UPDATE/DELETE thiếu WHERE!
- **JOIN**: kết hợp nhiều bảng.
- **GROUP BY + Aggregate**: thống kê, báo cáo.
