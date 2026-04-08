# Kiểm thử phần mềm

## 1. Kiểm thử là gì?

**Kiểm thử phần mềm (Software Testing)** là quá trình đánh giá phần mềm để phát hiện lỗi (bug) và đảm bảo nó đáp ứng yêu cầu.

**Mục tiêu**: phát hiện lỗi sớm — sửa càng sớm càng rẻ.

**Rule of 10**: chi phí sửa bug tăng theo cấp số nhân qua các giai đoạn:
- Requirements: 1x
- Design: 10x
- Development: 100x
- Production: 1000x

---

## 2. Các cấp độ kiểm thử

### Unit Test
- Test từng function/module **nhỏ nhất** một cách riêng lẻ.
- Do developer viết.
- Nhanh, chạy nhiều lần.
- Ví dụ: test function tính thuế VAT.

### Integration Test
- Test **sự kết hợp** của nhiều module/service.
- Kiểm tra các interface và luồng dữ liệu giữa các phần.
- Ví dụ: test API đặt hàng có kết nối đúng với database không.

### System Test
- Test **toàn bộ hệ thống** như một đơn vị.
- End-to-end scenarios.
- Gần với môi trường production.

### UAT (User Acceptance Testing)
- Người dùng thực tế hoặc khách hàng test.
- Xác nhận hệ thống đáp ứng business requirements.
- Bước cuối trước khi go-live.

### Regression Test
- Sau mỗi thay đổi, test lại toàn bộ để đảm bảo không break thứ đang hoạt động.
- Thường tự động hóa.

---

## 3. Test Pyramid

```
         ┌─────────────┐
         │     E2E     │ ← Ít, chậm, tốn kém
         ├─────────────┤
         │ Integration │
         ├─────────────┤
         │  Unit Test  │ ← Nhiều, nhanh, rẻ
         └─────────────┘
```

Nguyên tắc: nhiều unit test (nhanh, rẻ) + ít E2E test (chậm, tốn kém).

---

## 4. Bug Lifecycle (Vòng đời bug)

```
New → Assigned → In Progress → Fixed → Testing → Verified → Closed
                                  ↑                ↓
                              Re-opened ←── Failed
```

| Trạng thái | Ý nghĩa |
|-----------|---------|
| New | Bug mới được báo cáo |
| Assigned | Được giao cho developer |
| In Progress | Developer đang fix |
| Fixed | Developer đã fix, đợi verify |
| Testing | QA đang retest |
| Verified | QA xác nhận đã fix |
| Closed | Đóng bug |
| Re-opened | QA thấy bug vẫn còn → reopen |
| Won't Fix | Quyết định không fix (không ảnh hưởng nhiều) |

---

## 5. Bug Report tốt

Bug report cần:
1. **Title**: ngắn gọn, mô tả vấn đề rõ ràng.
2. **Environment**: môi trường (browser, OS, version).
3. **Steps to Reproduce**: các bước tái hiện.
4. **Expected Result**: kết quả mong đợi.
5. **Actual Result**: kết quả thực tế.
6. **Severity**: mức độ nghiêm trọng.
7. **Priority**: ưu tiên xử lý.
8. **Attachment**: screenshot, video, log.

---

## 6. Severity vs Priority

| | Severity (Độ nghiêm trọng kỹ thuật) | Priority (Ưu tiên xử lý) |
|--|-------------------------------------|--------------------------|
| **Critical** | App crash, data loss | Fix ngay lập tức |
| **High** | Chức năng chính không hoạt động | Fix trong sprint này |
| **Medium** | Workaround có thể dùng tạm | Fix sprint tiếp |
| **Low** | UI lệch pixel | Fix khi có thời gian |

Severity ≠ Priority. Ví dụ: bug nhỏ (severity low) nhưng CEO vừa thấy → priority critical.

---

## 7. Manual vs Automated Testing

| | Manual | Automated |
|--|--------|-----------|
| **Phù hợp** | Exploratory, UAT, UI/UX | Regression, unit, performance |
| **Chi phí ban đầu** | Thấp | Cao (phải viết script) |
| **Tốc độ** | Chậm | Nhanh |
| **Chính xác** | Có thể sai | Nhất quán |

---

## 8. Tóm tắt

- **Unit Test**: module nhỏ nhất, developer viết.
- **Integration Test**: kết hợp các module.
- **UAT**: người dùng thực tế xác nhận.
- **Regression**: test lại sau mỗi thay đổi.
- **Bug report** tốt = có steps to reproduce rõ ràng.
- **Severity** ≠ **Priority** — phân biệt để ưu tiên đúng.
