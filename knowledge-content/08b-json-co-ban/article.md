# JSON là gì?

## 1. JSON là gì?

**JSON** (JavaScript Object Notation) là **định dạng văn bản** để lưu và trao đổi dữ liệu giữa các hệ thống. Đây là định dạng phổ biến nhất mà API dùng để trả dữ liệu về.

**Tại sao BA cần biết JSON?**
- Đọc kết quả API trong Postman/Swagger để **kiểm thử** yêu cầu.
- Đối chiếu (**mapping**) trường dữ liệu giữa hai hệ thống khi viết tài liệu tích hợp.
- Viết **acceptance criteria** rõ ràng: "response phải có trường `status` = `confirmed`".

JSON được thiết kế để **con người đọc được** và **máy tính xử lý được** cùng lúc.

---

## 2. Cú pháp cơ bản: key–value

JSON được tạo từ các cặp **key (khóa)** và **value (giá trị)**:

```json
{ "name": "Nguyen Van A", "age": 25 }
```

- **Key** luôn là chuỗi, đặt trong dấu nháy kép `"..."`, nằm bên trái dấu `:`.
- **Value** là dữ liệu, nằm bên phải dấu `:`.
- Các cặp cách nhau bằng dấu phẩy `,`.

Đọc như tiếng Việt: *"name của người này là Nguyen Van A; age là 25".*

---

## 3. Các kiểu giá trị

| Kiểu | Ví dụ | Ghi chú |
|------|-------|---------|
| String (chuỗi) | `"Laptop Dell"` | Luôn trong nháy kép |
| Number (số) | `25000000` | Không dùng nháy, không có dấu phẩy ngăn cách nghìn |
| Boolean | `true` / `false` | Đúng/sai |
| Null | `null` | Không có giá trị |
| Object | `{ ... }` | Một đối tượng lồng bên trong |
| Array | `[ ... ]` | Một danh sách |

---

## 4. Object `{}` và Array `[]`

Đây là hai khối quan trọng nhất — phân biệt được là hiểu 90% JSON.

- **Object `{}`** = một **đối tượng** gồm nhiều key–value. Ví dụ: một sản phẩm.
- **Array `[]`** = một **danh sách** các giá trị, ngăn cách bằng dấu phẩy. Ví dụ: danh sách tags.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"]
}
```

Ở đây `tags` là một **array** chứa 3 chuỗi.

---

## 5. Dữ liệu lồng nhau (nested)

Một value có thể lại là một object. Đây gọi là **object lồng nhau** (nested / associative array).

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "specs": {
    "cpu": "Intel i7",
    "ram": "16GB",
    "storage": "512GB SSD"
  }
}
```

`specs` không phải một giá trị đơn — nó là một object con chứa thông tin chi tiết.

---

## 6. Mảng các object – danh sách bản ghi

Trường hợp cực kỳ phổ biến trong response API: một **array chứa nhiều object**, mỗi object là một bản ghi (giống một hàng trong bảng dữ liệu).

```json
{
  "orderId": "ORD-20240408-001",
  "status": "confirmed",
  "total": 50500000,
  "customer": {
    "id": 5,
    "name": "Nguyen Van A",
    "phone": "0901234567"
  },
  "items": [
    { "productId": 5, "name": "Laptop Dell XPS", "quantity": 1, "price": 25000000 },
    { "productId": 8, "name": "Chuột Logitech",  "quantity": 2, "price": 500000 }
  ]
}
```

`items` là danh sách 2 sản phẩm trong đơn hàng. Mỗi phần tử có cùng bộ key.

---

## 7. Đọc giá trị theo "đường dẫn" (path)

Khi dev nói *"lấy `customer.name`"* hay *"`items[0].price`"*, họ đang chỉ đường đi trong JSON. Với ví dụ ở mục 6:

| Đường dẫn | Giá trị |
|-----------|---------|
| `status` | `"confirmed"` |
| `customer.name` | `"Nguyen Van A"` |
| `items` | danh sách 2 sản phẩm |
| `items[0].name` | `"Laptop Dell XPS"` (phần tử **đầu tiên**) |
| `items[1].quantity` | `2` |

> ⚠️ Array đánh số từ **0**, nên phần tử đầu tiên là `items[0]`, không phải `items[1]`.

---

## 8. JSON vs XML

Trước JSON, **XML** là định dạng phổ biến. Cùng một đơn hàng, XML dài dòng hơn nhiều:

```xml
<order>
  <status>confirmed</status>
  <total>50500000</total>
</order>
```

| Tiêu chí | JSON | XML |
|----------|------|-----|
| Độ gọn | Ngắn gọn | Dài, nhiều thẻ |
| Dễ đọc | Rất dễ | Khó hơn |
| Phổ biến trong API mới | Rất cao | Giảm dần |
| Còn dùng nhiều ở | Web, mobile, REST | Hệ thống cũ, ngân hàng, SOAP |

Đa số API hiện đại mặc định trả **JSON**.

---

## 9. JSON đi qua API như thế nào?

API dùng header **`Content-Type: application/json`** để báo rằng dữ liệu trong body là JSON. Client dùng header **`Accept: application/json`** để yêu cầu server trả về JSON.

```
POST /api/orders HTTP/1.1
Content-Type: application/json
Accept: application/json

{ "productId": 5, "quantity": 2 }
```

Nếu hai bên không thống nhất định dạng, hệ thống sẽ báo lỗi.

---

## 10. BA dùng JSON để làm gì?

- **Mapping trường dữ liệu**: hệ thống A trả `full_name`, hệ thống B cần `customerName` → BA lập bảng ánh xạ.
- **Viết acceptance criteria**: "khi đặt hàng thành công, response trả `status: confirmed` và `orderId` khác rỗng".
- **Kiểm thử nhanh**: đọc response trong Postman xem đủ trường chưa, giá trị đúng chưa.
- **Rà soát tài liệu API**: đối chiếu ví dụ JSON trong Swagger với yêu cầu nghiệp vụ.

---

## 11. Lỗi JSON thường gặp

- Thiếu nháy kép quanh key hoặc chuỗi: `{ name: "A" }` ❌ → phải là `{ "name": "A" }` ✅.
- **Dấu phẩy thừa** ở phần tử cuối: `[1, 2, 3,]` ❌.
- Dùng nháy đơn `'` thay vì nháy kép `"`.
- Nhầm object `{}` với array `[]`.
- Số tiền có dấu phẩy ngăn cách nghìn: `25,000,000` ❌ → phải là `25000000`.

> 💡 Mẹo: dán JSON vào một trình **JSON validator/formatter** để kiểm tra hợp lệ và xem cấu trúc rõ ràng.

---

## 12. Tóm tắt

- **JSON** = định dạng dữ liệu phổ biến nhất trong API, gồm các cặp **key–value**.
- **`{}`** = object (một đối tượng); **`[]`** = array (một danh sách).
- Value có thể **lồng nhau**: object trong object, array các object.
- Đọc dữ liệu theo **đường dẫn**: `customer.name`, `items[0].price` (array đánh số từ 0).
- **JSON gọn hơn XML** và là mặc định của API hiện đại.
- BA dùng JSON để **mapping dữ liệu, viết acceptance criteria và kiểm thử** API.
