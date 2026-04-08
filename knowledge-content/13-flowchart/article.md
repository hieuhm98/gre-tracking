# Flowchart

## 1. Flowchart là gì?

**Flowchart (lưu đồ)** là công cụ trực quan hóa quy trình, luồng xử lý hoặc thuật toán bằng các ký hiệu chuẩn và mũi tên kết nối.

Flowchart giúp:
- Hiểu và giao tiếp quy trình nghiệp vụ.
- Phát hiện bước thừa, điểm tắc nghẽn.
- Tài liệu hóa quy trình.
- Mô tả logic cho developer.

---

## 2. Ký hiệu chuẩn (ISO 5807)

| Ký hiệu | Hình dạng | Ý nghĩa |
|---------|-----------|---------|
| **Terminal** | Hình oval/tròn | Điểm bắt đầu hoặc kết thúc |
| **Process** | Hình chữ nhật | Bước xử lý, hành động |
| **Decision** | Hình thoi | Điểm quyết định (Yes/No, If/Else) |
| **Input/Output** | Hình bình hành | Nhập/xuất dữ liệu |
| **Connector** | Hình tròn nhỏ | Kết nối giữa các phần |
| **Arrow** | Mũi tên | Hướng đi của luồng |
| **Database** | Hình trụ | Lưu trữ dữ liệu |
| **Document** | Hình chữ nhật + sóng | Tài liệu, báo cáo |

---

## 3. Quy tắc vẽ Flowchart

1. **Bắt đầu và kết thúc** bằng hình oval (Terminal).
2. **Mũi tên** chỉ hướng đi của luồng, thường từ trên xuống hoặc trái sang phải.
3. **Decision** phải có ít nhất 2 nhánh ra (Yes/No hoặc True/False).
4. **Mỗi bước** chỉ có một mục đích rõ ràng.
5. **Tránh chéo nhau** giữa các đường kết nối.

---

## 4. Ví dụ: Quy trình đặt hàng online

```
[Bắt đầu]
    ↓
[Khách hàng chọn sản phẩm]
    ↓
[Thêm vào giỏ hàng]
    ↓
◆ Đăng nhập chưa? ──No──→ [Yêu cầu đăng nhập] ──→ ◆ Đăng nhập thành công?
    ↓ Yes                                                   ↓ No → [Thông báo lỗi] → [Kết thúc]
[Nhập địa chỉ giao hàng]                                   ↓ Yes
    ↓                                                  [Nhập địa chỉ giao hàng]
[Chọn phương thức thanh toán]
    ↓
◆ Đủ hàng trong kho?
    ↓ Yes              ↓ No
[Xử lý đơn hàng]    [Thông báo hết hàng]
    ↓                    ↓
[Gửi email xác nhận] [Kết thúc]
    ↓
[Kết thúc]
```

---

## 5. Swimlane Flowchart

Khi quy trình có nhiều người/bộ phận tham gia, dùng **Swimlane** (làn bơi) để phân chia rõ trách nhiệm:

```
│ Khách hàng │ Nhân viên sale │ Hệ thống │
│            │                │          │
│ Đặt hàng ──────────────────→ Nhận order│
│            │     Duyệt ←─────           │
│            │     đơn    │               │
│ Nhận xác ←──────────────────── Gửi mail│
│ nhận       │                │           │
```

Swimlane diagram rõ hơn ai làm gì, tránh nhầm lẫn trách nhiệm.

---

## 6. Tools vẽ Flowchart

- **draw.io / diagrams.net**: miễn phí, dùng trên web.
- **Lucidchart**: trả phí, nhiều tính năng.
- **Figma**: thiết kế kết hợp diagram.
- **Microsoft Visio**: phổ biến trong doanh nghiệp.
- **Mermaid**: viết flowchart bằng code (markdown-like).

---

## 7. Flowchart vs BPMN

| | Flowchart | BPMN |
|--|-----------|------|
| **Mục đích** | General purpose | Business Process cụ thể |
| **Độ phức tạp** | Đơn giản | Phức tạp, chi tiết hơn |
| **Người dùng** | Mọi người | BA, Process engineer |
| **Chuẩn** | ISO 5807 | OMG BPMN 2.0 |

---

## 8. Tóm tắt

- **Oval**: bắt đầu/kết thúc.
- **Chữ nhật**: bước xử lý.
- **Hình thoi**: quyết định (decision).
- **Bình hành**: input/output.
- **Swimlane**: phân chia trách nhiệm theo vai trò.
- Flowchart là công cụ giao tiếp — vẽ đủ chi tiết để không bị hiểu sai.
