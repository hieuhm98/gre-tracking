# Scrum Framework

## 1. Scrum là gì?

**Scrum** là framework Agile phổ biến nhất, tổ chức phát triển phần mềm theo **sprint** (vòng lặp 1-4 tuần), với 3 vai trò rõ ràng, 5 ceremonies và 3 artifacts.

Scrum không phải methodology — đó là framework nhẹ, để teams tự điều chỉnh.

---

## 2. Ba vai trò (Roles)

### Product Owner (PO)
- Đại diện cho khách hàng/stakeholder.
- Sở hữu và ưu tiên **Product Backlog**.
- Quyết định **làm gì** (what), không quyết định làm thế nào (how).
- Trả lời câu hỏi về yêu cầu cho team.
- Chịu trách nhiệm về **giá trị sản phẩm**.

### Scrum Master (SM)
- Đảm bảo team hiểu và tuân theo Scrum.
- Loại bỏ **impediment** (trở ngại) cho team.
- Không phải project manager, không giao việc.
- Phục vụ team (servant leader).
- Tổ chức và facilitate các ceremonies.

### Development Team
- Cross-functional: có đủ kỹ năng để deliver sprint.
- Self-organizing: tự quyết định cách làm.
- Kích thước lý tưởng: 3-9 người.
- Không có role hierarchy trong team.

---

## 3. Ba Artifacts

### Product Backlog
- Danh sách **tất cả yêu cầu** của sản phẩm.
- Được sắp xếp theo ưu tiên (item quan trọng nhất ở trên).
- Luôn thay đổi — PO liên tục refinement.
- Mỗi item gọi là **PBI** (Product Backlog Item) hay User Story.

### Sprint Backlog
- Tập con của Product Backlog được chọn cho **sprint này**.
- Kèm plan để deliver chúng (tasks).
- Chỉ Development Team được thay đổi Sprint Backlog.

### Increment
- Tổng tất cả PBI completed trong sprint.
- Phải đạt **Definition of Done** (DoD).
- Phải **usable** — dùng được, dù stakeholder có release hay không.

---

## 4. Năm Ceremonies (Events)

### Sprint Planning
- Đầu mỗi sprint.
- PO trình bày ưu tiên, Team chọn PBI phù hợp.
- Team tạo Sprint Goal và Sprint Backlog.
- Max 8 giờ cho sprint 1 tháng.

### Daily Scrum (Daily Standup)
- Mỗi ngày, 15 phút, cùng giờ.
- 3 câu hỏi: Hôm qua làm gì? Hôm nay làm gì? Có trở ngại không?
- Dev team tự tổ chức, không phải báo cáo cho SM/PO.

### Sprint Review
- Cuối sprint, demo Increment cho stakeholder.
- Thu thập phản hồi → điều chỉnh Product Backlog.
- Max 4 giờ cho sprint 1 tháng.

### Sprint Retrospective
- Sau Sprint Review.
- Team tự cải tiến: quy trình làm việc, công cụ, mối quan hệ.
- Câu hỏi: Làm tốt gì? Cần cải thiện gì? Action items?
- Max 3 giờ cho sprint 1 tháng.

### Backlog Refinement (không phải ceremony chính thức)
- PO + Team làm rõ, ước tính PBI chuẩn bị cho sprint tới.
- Thường 10% thời gian mỗi sprint.

---

## 5. Sprint

Sprint là "tim đập" của Scrum:
- Cố định 1-4 tuần (phổ biến nhất: 2 tuần).
- Không thêm scope giữa chừng.
- Sprint kết thúc → bắt đầu sprint mới ngay.

```
[Sprint 1] → [Sprint 2] → [Sprint 3] → ...
  2 tuần       2 tuần       2 tuần
```

---

## 6. Definition of Done (DoD)

DoD là tiêu chí để một PBI được coi là **hoàn thành**:
- Code được viết.
- Code review.
- Tests pass.
- Deployed to staging.
- Documentation updated.

DoD giúp tránh "almost done" — mọi người đồng ý thế nào là xong.

---

## 7. Tóm tắt

| | Ai | Làm gì |
|--|----|----|
| **PO** | 1 người | Ưu tiên backlog, đại diện khách hàng |
| **Scrum Master** | 1 người | Facilitate, loại bỏ impediment |
| **Dev Team** | 3-9 người | Build increment |

**Ceremonies**: Planning → Daily Standup → Review → Retro.
**Artifacts**: Product Backlog → Sprint Backlog → Increment.
