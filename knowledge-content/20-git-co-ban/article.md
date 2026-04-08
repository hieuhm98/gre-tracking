# Git & Version Control

## 1. Version Control là gì?

**Version Control System (VCS)** là hệ thống theo dõi thay đổi trong code theo thời gian, cho phép nhiều người cùng làm việc và quay lại phiên bản trước.

**Git** là VCS phổ biến nhất hiện nay (miễn phí, mã nguồn mở).

---

## 2. Tại sao BA/PM cần biết Git?

- Hiểu developer đang nói gì trong daily standup.
- Đọc được **pull request** để review yêu cầu.
- Hiểu tại sao cần merge trước khi release.
- Biết khi nào code đã "vào production".
- Không cần biết code, chỉ cần hiểu khái niệm.

---

## 3. Các khái niệm cơ bản

### Repository (Repo)
Kho lưu trữ code kèm toàn bộ lịch sử thay đổi.
- **Local repo**: trên máy developer.
- **Remote repo**: trên server (GitHub, GitLab, Bitbucket).

### Commit
Một "snapshot" của code tại thời điểm cụ thể, kèm:
- Message mô tả thay đổi.
- Author và timestamp.
- Hash duy nhất (ví dụ: `a1b2c3d`).

```
commit a1b2c3d
Author: Harry <harry@mail.com>
Date:   Mon Apr 8 10:00:00 2024
Message: feat: add login page
```

### Branch (Nhánh)
Branch là luồng phát triển **độc lập**. Tương tự làm bản copy để thử nghiệm mà không ảnh hưởng bản chính.

```
main:     A──B──C──────────────M
                \             /
feature/login:   D──E──F──G──
```

- **main/master**: nhánh chính, thường là code ổn định nhất.
- **feature/xxx**: phát triển tính năng mới.
- **hotfix/xxx**: sửa lỗi khẩn cấp.

### Merge
Kết hợp thay đổi từ một nhánh vào nhánh khác. Khi feature xong → merge vào main.

### Clone
Tạo bản sao local của remote repo.

### Pull / Push
- **Pull**: lấy thay đổi mới từ remote về local.
- **Push**: đẩy thay đổi local lên remote.

---

## 4. Pull Request (PR) / Merge Request (MR)

**Pull Request** là yêu cầu merge code từ nhánh feature vào nhánh chính — kèm code review.

Quy trình điển hình:

```
1. Developer tạo branch: feature/add-payment
2. Code và commit
3. Push lên remote
4. Tạo Pull Request
5. Đồng nghiệp review code
6. BA/PO review: có đúng acceptance criteria không?
7. Approve → Merge vào main
8. Deploy
```

**BA có thể tham gia**: review PR về mặt business logic, kiểm tra AC được implement đúng không.

---

## 5. Gitflow Workflow

```
main ─────────────────────────── (production)
  └── develop ──────────────────── (integration)
        ├── feature/login ──┐
        ├── feature/cart ───┤→ merge vào develop
        └── feature/xxx ────┘
  └── release/1.0 ── (final testing) ── merge vào main
  └── hotfix/bug123 ── (emergency fix) ── merge vào main + develop
```

---

## 6. Lệnh Git cơ bản (để hiểu, không cần dùng)

```bash
git clone <url>       # tải repo về
git pull              # lấy thay đổi mới nhất
git checkout -b feature/login  # tạo và chuyển sang branch mới
git add .             # stage thay đổi
git commit -m "feat: add login"  # lưu snapshot
git push              # đẩy lên remote
git merge feature/login  # merge branch vào branch hiện tại
git log               # xem lịch sử commit
```

---

## 7. GitHub, GitLab, Bitbucket

Đây là các **nền tảng hosting Git repository**:

| Nền tảng | Điểm mạnh |
|----------|-----------|
| GitHub | Phổ biến nhất, cộng đồng lớn |
| GitLab | CI/CD tích hợp, self-hosted |
| Bitbucket | Tích hợp tốt với Jira (Atlassian) |

---

## 8. Tóm tắt

- **Git**: version control — theo dõi lịch sử code.
- **Commit**: snapshot của code tại một thời điểm.
- **Branch**: luồng phát triển độc lập.
- **Pull Request**: yêu cầu merge + review — nơi BA có thể tham gia.
- **main/master**: nhánh ổn định, thường = production.
- **Merge**: kết hợp branch vào branch khác.
- GitHub/GitLab/Bitbucket: nền tảng lưu trữ và collaborate.
