# Database là gì?

## 1. Database là gì?

**Database (cơ sở dữ liệu)** là hệ thống lưu trữ và quản lý dữ liệu có tổ chức, cho phép truy vấn, cập nhật và xóa dữ liệu hiệu quả.

Không có database → dữ liệu lưu trong file → khó tìm kiếm, không đảm bảo nhất quán.

---

## 2. RDBMS – Cơ sở dữ liệu quan hệ

**RDBMS** (Relational Database Management System) tổ chức dữ liệu thành **bảng (table)** có cấu trúc.

### Bảng (Table)

| id | name | email | age |
|----|------|-------|-----|
| 1 | Nguyễn A | a@mail.com | 25 |
| 2 | Trần B | b@mail.com | 30 |
| 3 | Lê C | c@mail.com | 28 |

- **Cột (Column/Field)**: thuộc tính — id, name, email, age.
- **Hàng (Row/Record)**: một bản ghi — một người dùng.
- **Schema**: cấu trúc của bảng (tên cột, kiểu dữ liệu).

### Kiểu dữ liệu phổ biến

| Kiểu | Dùng cho |
|------|---------|
| INTEGER / BIGINT | Số nguyên, ID |
| VARCHAR(n) | Chuỗi có độ dài giới hạn |
| TEXT | Chuỗi dài |
| DECIMAL(p,s) | Số thực (tiền tệ) |
| BOOLEAN | Đúng/sai |
| DATE / TIMESTAMP | Ngày giờ |
| JSON / JSONB | Dữ liệu JSON |

---

## 3. Primary Key & Foreign Key

### Primary Key (Khóa chính)
Giá trị **duy nhất** xác định từng bản ghi trong bảng. Thường là cột `id`.

- Không được null.
- Không được trùng lặp.
- Mỗi bảng có một primary key.

### Foreign Key (Khóa ngoại)
Cột tham chiếu đến **Primary Key của bảng khác** — tạo quan hệ giữa các bảng.

```
Bảng users:   id, name, email
Bảng orders:  id, user_id (FK → users.id), product, amount
```

`orders.user_id` là foreign key trỏ đến `users.id` → biết đơn hàng thuộc user nào.

---

## 4. Quan hệ giữa các bảng

| Quan hệ | Ý nghĩa | Ví dụ |
|---------|---------|-------|
| **One-to-Many** | 1 bản ghi → nhiều bản ghi khác | 1 user có nhiều order |
| **Many-to-Many** | Nhiều ↔ nhiều (cần bảng trung gian) | Nhiều student - nhiều course |
| **One-to-One** | 1 bản ghi ↔ 1 bản ghi | 1 user - 1 profile |

---

## 5. Index (Chỉ mục)

**Index** tăng tốc tìm kiếm — như mục lục sách.

Không có index: tìm user có email="a@mail.com" → quét toàn bộ bảng (O(n)).
Có index trên cột email: tìm trực tiếp (O(log n)).

**Trade-off**: index tăng tốc đọc nhưng chậm ghi (phải cập nhật index khi thêm/sửa).

---

## 6. SQL vs NoSQL

### SQL (Relational)
Bảng có cấu trúc cố định, quan hệ rõ ràng, dùng SQL.
- MySQL, PostgreSQL, SQLite, SQL Server, Oracle.
- Phù hợp: dữ liệu có quan hệ phức tạp, cần nhất quán cao (tài chính, ERP).

### NoSQL
Linh hoạt hơn, không cần schema cố định.

| Loại | Ví dụ | Phù hợp |
|------|-------|---------|
| Document | MongoDB | JSON-like, flexible schema |
| Key-Value | Redis | Cache, session |
| Column | Cassandra | Big data, time series |
| Graph | Neo4j | Mạng xã hội, quan hệ phức tạp |

---

## 7. ACID – Tính chất quan trọng

**ACID** là bộ tính chất đảm bảo tính toàn vẹn dữ liệu:

- **A**tomicity: transaction hoàn thành hoàn toàn hoặc không làm gì cả.
- **C**onsistency: database luôn ở trạng thái hợp lệ.
- **I**solation: transaction chạy độc lập với nhau.
- **D**urability: dữ liệu đã commit không bị mất dù có sự cố.

**Ví dụ chuyển khoản ngân hàng**: trừ 1 triệu từ A và cộng vào B phải xảy ra đồng thời — nếu bước 2 lỗi, bước 1 phải rollback.

---

## 8. Tóm tắt

- **Database** = hệ thống lưu trữ có tổ chức.
- **Table** = bảng dữ liệu (column + row).
- **Primary Key** = định danh duy nhất.
- **Foreign Key** = tạo quan hệ giữa bảng.
- **Index** = tăng tốc tìm kiếm.
- **SQL** = dữ liệu có quan hệ; **NoSQL** = linh hoạt, scale tốt.
- **ACID** = đảm bảo tính toàn vẹn.
