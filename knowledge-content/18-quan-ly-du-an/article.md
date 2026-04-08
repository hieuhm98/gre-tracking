# Quản lý dự án IT

## 1. Dự án IT là gì?

**Dự án IT** là nỗ lực có thời hạn để tạo ra một sản phẩm/dịch vụ/kết quả CNTT duy nhất, với phạm vi, ngân sách và timeline xác định.

PM/BA trong IT cần hiểu các ràng buộc cốt lõi và cách quản lý chúng.

---

## 2. Triple Constraint (Tam giác quản lý)

Ba ràng buộc luôn tồn tại trong mọi dự án:

```
        Scope
        /  \
       /    \
     Time──Cost
```

**Iron Triangle**: nếu một cạnh thay đổi, ít nhất một cạnh khác bị ảnh hưởng.

- Muốn thêm scope → cần thêm time hoặc cost.
- Muốn rút ngắn time → phải giảm scope hoặc tăng cost.
- Muốn cắt cost → phải giảm scope hoặc kéo dài time.

**Quality** thường được đặt ở giữa tam giác — bị ảnh hưởng khi ba cạnh không cân bằng.

---

## 3. Quản lý Scope

**Scope creep**: phạm vi mở rộng dần dần, không kiểm soát.

**Cách ngăn scope creep:**
- Định nghĩa rõ scope từ đầu (WBS, SRS).
- Change Control Process: mọi thay đổi phải được evaluate và approve.
- Communicate impact: "Thêm tính năng này → +2 tuần timeline".

**WBS (Work Breakdown Structure)**: phân rã dự án thành các deliverable nhỏ dần.

```
Dự án App Bán Hàng
├── Frontend
│   ├── Trang chủ
│   ├── Trang sản phẩm
│   └── Trang checkout
├── Backend API
│   ├── User API
│   ├── Product API
│   └── Order API
└── Database
    ├── Schema design
    └── Data migration
```

---

## 4. Quản lý Timeline

**Gantt Chart**: biểu đồ thanh ngang hiển thị timeline của từng task.

```
Task              | T1 | T2 | T3 | T4 | T5 | T6
Design            |████|    |    |    |    |
Development       |    |████|████|    |    |
Testing           |    |    |    |████|    |
Deployment        |    |    |    |    |████|
Buffer            |    |    |    |    |    |████
```

**Critical Path**: chuỗi task dài nhất quyết định thời gian tối thiểu của dự án. Trễ bất kỳ task nào trên critical path → toàn bộ dự án trễ.

**Milestone**: điểm mốc quan trọng (không phải task) — ví dụ: "MVP hoàn thành", "UAT passed", "Go-live".

---

## 5. Quản lý Rủi ro (Risk Management)

**Quy trình:**
1. **Identify**: liệt kê tất cả rủi ro.
2. **Assess**: đánh giá likelihood × impact.
3. **Plan**: chiến lược ứng phó.
4. **Monitor**: theo dõi liên tục.

**Chiến lược ứng phó:**
- **Avoid**: thay đổi kế hoạch để loại bỏ rủi ro.
- **Mitigate**: giảm probability hoặc impact.
- **Transfer**: chuyển rủi ro cho bên khác (bảo hiểm, outsource).
- **Accept**: chấp nhận, chuẩn bị contingency plan.

---

## 6. Quản lý Stakeholder

**Stakeholder** = bất kỳ ai bị ảnh hưởng bởi hoặc có ảnh hưởng đến dự án.

**Ma trận Influence × Interest:**

```
         HIGH interest
              │
HIGH     Keep │  Manage
influence     │  Closely
─────────────┼─────────
LOW      Monitor│  Keep
influence     │  Informed
              │
         LOW interest
```

- **Manage Closely**: high influence + high interest → engage liên tục.
- **Keep Informed**: low influence + high interest → thông tin đầy đủ.
- **Keep Satisfied**: high influence + low interest → không để họ unhappy.
- **Monitor**: low/low → không tốn quá nhiều công sức.

---

## 7. Công cụ quản lý dự án phổ biến

| Công cụ | Dùng cho |
|---------|---------|
| **Jira** | Agile projects, bug tracking |
| **Trello** | Kanban board đơn giản |
| **Asana** | Task management |
| **Monday.com** | Visual project management |
| **MS Project** | Gantt chart, resource planning |
| **Notion** | Documentation + tasks |
| **Confluence** | Team wiki, documentation |

---

## 8. Tóm tắt

- **Triple Constraint**: Scope – Time – Cost — không thể optimize cả 3 cùng lúc.
- **Scope creep**: nguy hiểm nhất với dự án IT — ngăn bằng Change Control.
- **WBS**: phân rã dự án thành deliverables nhỏ.
- **Critical Path**: xác định timeline tối thiểu.
- **Risk Register**: công cụ theo dõi rủi ro.
- **Stakeholder matrix**: ưu tiên communication đúng chỗ.
