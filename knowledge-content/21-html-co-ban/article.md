# HTML Cơ Bản

## 1. HTML là gì?

**HTML** (HyperText Markup Language) là ngôn ngữ đánh dấu dùng để tạo cấu trúc cho trang web. HTML không phải ngôn ngữ lập trình — nó không có logic hay tính toán — nó chỉ mô tả *nội dung* và *cấu trúc* của trang.

Khi bạn mở một trang web, trình duyệt tải file HTML, phân tích cấu trúc và hiển thị nội dung. HTML là nền tảng của mọi trang web — dù được tạo bởi React, Vue hay bất kỳ framework nào, kết quả cuối cùng mà trình duyệt nhận được vẫn là HTML.

**3 thành phần cơ bản của web:**
- **HTML** — Cấu trúc (bộ xương)
- **CSS** — Giao diện (lớp ngoài da)
- **JavaScript** — Hành vi (cơ bắp)

---

## 2. Cấu trúc cơ bản của một trang HTML

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Mô tả trang cho SEO" />
    <title>Tiêu đề hiện trên tab trình duyệt</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là đoạn văn đầu tiên.</p>
    <script src="app.js"></script>
  </body>
</html>
```

| Phần | Ý nghĩa |
|------|---------|
| `<!DOCTYPE html>` | Khai báo đây là tài liệu HTML5 |
| `<html lang="vi">` | Thẻ gốc; `lang` khai báo ngôn ngữ (quan trọng cho SEO và screen reader) |
| `<head>` | Metadata: không hiển thị trực tiếp, chứa thông tin cho trình duyệt |
| `<meta charset="UTF-8">` | Hỗ trợ ký tự tiếng Việt và unicode |
| `<meta name="viewport">` | Responsive — hiển thị đúng trên mobile |
| `<title>` | Tiêu đề trên tab, dùng cho SEO |
| `<body>` | Nội dung hiển thị trên trang |
| `<script>` ở cuối body | JS tải sau khi HTML đã render xong |

---

## 3. Thẻ HTML (Tags)

HTML được viết bằng các **thẻ** (tags). Hầu hết thẻ đều có thẻ mở và thẻ đóng:

```html
<p>Đây là đoạn văn.</p>
<div>Một khối nội dung.</div>
```

Một số thẻ **tự đóng** (không có nội dung bên trong):

```html
<img src="anh.jpg" alt="Mô tả ảnh" />
<br />           <!-- xuống dòng -->
<hr />           <!-- đường kẻ ngang -->
<input type="text" />
<link rel="stylesheet" href="style.css" />
<meta charset="UTF-8" />
```

---

## 4. Thẻ văn bản và tiêu đề

### Tiêu đề (Headings)

```html
<h1>Tiêu đề trang — lớn nhất, chỉ dùng 1 lần/trang</h1>
<h2>Tiêu đề chương — mục lớn</h2>
<h3>Tiêu đề mục con</h3>
<h4>Mục nhỏ hơn</h4>
<h5>Hiếm dùng</h5>
<h6>Nhỏ nhất</h6>
```

> **Lưu ý SEO**: Mỗi trang chỉ nên có **một `<h1>`**. Thứ tự heading phải đúng (không nhảy từ h1 sang h4).

### Văn bản

```html
<p>Đây là một đoạn văn. Trình duyệt tự xuống dòng sau thẻ này.</p>

<strong>In đậm — có ý nghĩa ngữ nghĩa (quan trọng)</strong>
<b>In đậm — chỉ là kiểu chữ, không có ngữ nghĩa</b>

<em>In nghiêng — có ý nghĩa nhấn mạnh</em>
<i>In nghiêng — chỉ là kiểu chữ</i>

<mark>Tô sáng văn bản</mark>
<del>Văn bản bị gạch ngang (đã xóa)</del>
<ins>Văn bản được thêm vào</ins>
<code>console.log("code inline")</code>

<blockquote>
  Trích dẫn dài, thường được thụt lề.
</blockquote>

<pre><code>
// Khối code giữ nguyên khoảng trắng và xuống dòng
function hello() {
  return "world";
}
</code></pre>
```

---

## 5. Danh sách

```html
<!-- Ordered List: có số thứ tự -->
<ol>
  <li>Phân tích yêu cầu</li>
  <li>Thiết kế wireframe</li>
  <li>Development</li>
  <li>Testing</li>
  <li>Deploy</li>
</ol>

<!-- Unordered List: dấu chấm -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Description List: thuật ngữ và định nghĩa -->
<dl>
  <dt>API</dt>
  <dd>Application Programming Interface — giao diện lập trình ứng dụng</dd>
  <dt>REST</dt>
  <dd>Kiến trúc thiết kế API phổ biến nhất</dd>
</dl>

<!-- List lồng nhau -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

---

## 6. Liên kết và Hình ảnh

### Thẻ `<a>` — Liên kết

```html
<!-- Liên kết ngoài -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Mở Google tab mới
</a>

<!-- Liên kết nội bộ -->
<a href="/about">Về chúng tôi</a>
<a href="/products/123">Chi tiết sản phẩm</a>

<!-- Liên kết đến anchor trong trang -->
<a href="#section-2">Đến phần 2</a>
<section id="section-2">Nội dung phần 2</section>

<!-- Liên kết email và điện thoại -->
<a href="mailto:info@example.com">Gửi email</a>
<a href="tel:+84901234567">Gọi ngay</a>

<!-- Nút download -->
<a href="/files/report.pdf" download>Tải báo cáo</a>
```

> `target="_blank"` mở tab mới. `rel="noopener noreferrer"` là bảo mật — ngăn trang mới truy cập `window.opener`.

### Thẻ `<img>` — Hình ảnh

```html
<!-- Cơ bản -->
<img src="logo.png" alt="Logo công ty" width="200" height="80" />

<!-- Lazy loading: chỉ tải khi gần vào viewport -->
<img src="banner.jpg" alt="Banner chào mừng" loading="lazy" />

<!-- Responsive image: dùng srcset -->
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Ảnh sản phẩm"
/>

<!-- Figure với caption -->
<figure>
  <img src="chart.png" alt="Biểu đồ doanh thu Q1 2025" />
  <figcaption>Hình 1: Biểu đồ doanh thu Q1 2025</figcaption>
</figure>
```

> **`alt` quan trọng**: Screen reader đọc `alt` cho người khiếm thị. Nếu ảnh chỉ là trang trí, dùng `alt=""`.

---

## 7. Thuộc tính (Attributes)

```html
<!-- id: duy nhất trong trang, dùng cho JS và CSS -->
<div id="main-content">...</div>

<!-- class: có thể dùng nhiều lần, dùng cho CSS -->
<div class="card featured">...</div>

<!-- data-*: lưu dữ liệu tùy chỉnh -->
<button data-product-id="42" data-category="electronics">
  Thêm vào giỏ
</button>

<!-- title: tooltip khi hover -->
<abbr title="Business Analyst">BA</abbr>

<!-- hidden: ẩn phần tử -->
<div hidden>Nội dung ẩn</div>

<!-- tabindex: thứ tự focus khi dùng Tab -->
<button tabindex="1">Nút đầu tiên</button>

<!-- aria-*: accessibility cho screen reader -->
<button aria-label="Đóng modal" aria-expanded="false">✕</button>
<div role="alert" aria-live="polite">Lưu thành công!</div>
```

---

## 8. Thẻ phân chia layout

### Block vs Inline

| Loại | Đặc điểm | Thẻ ví dụ |
|------|-----------|-----------|
| **Block** | Chiếm hết chiều ngang, xuống dòng | `div`, `p`, `h1`, `ul`, `section` |
| **Inline** | Nằm cùng dòng, vừa với nội dung | `span`, `a`, `strong`, `img` |

```html
<!-- div: block, container đa năng -->
<div class="container">
  <div class="sidebar">...</div>
  <div class="main">...</div>
</div>

<!-- span: inline, định dạng một phần text -->
<p>
  Giá: <span class="price">500,000đ</span>
  <span class="badge sale">Sale</span>
</p>
```

---

## 9. Semantic HTML

**Semantic HTML** dùng thẻ có ý nghĩa rõ ràng thay vì `<div>` cho tất cả mọi thứ. Quan trọng cho SEO, accessibility và khả năng đọc code.

```html
<!-- ❌ Không semantic -->
<div class="header">
  <div class="nav">
    <div class="nav-item"><a href="/">Home</a></div>
  </div>
</div>
<div class="content">
  <div class="article">
    <div class="article-title">Tiêu đề bài</div>
    <div class="article-body">Nội dung...</div>
  </div>
</div>
<div class="footer">© 2025</div>

<!-- ✅ Semantic -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Tiêu đề bài viết</h1>
      <time datetime="2025-04-09">9 tháng 4, 2025</time>
    </header>
    <p>Nội dung bài viết...</p>
    <footer>
      <p>Tác giả: Nguyễn An</p>
    </footer>
  </article>

  <aside>
    <h2>Bài viết liên quan</h2>
    <ul>...</ul>
  </aside>
</main>

<footer>
  <p>© 2025 Công ty ABC</p>
</footer>
```

**Bảng semantic tags:**

| Thẻ | Dùng cho |
|-----|----------|
| `<header>` | Phần đầu trang hoặc section |
| `<nav>` | Menu điều hướng chính |
| `<main>` | Nội dung chính của trang (chỉ dùng 1 lần) |
| `<article>` | Nội dung độc lập: bài viết, card sản phẩm |
| `<section>` | Nhóm nội dung có cùng chủ đề |
| `<aside>` | Nội dung phụ: sidebar, quảng cáo, related posts |
| `<footer>` | Phần chân trang hoặc article |
| `<figure>` | Ảnh, biểu đồ, code block có caption |
| `<figcaption>` | Caption cho `<figure>` |
| `<time>` | Ngày giờ (dùng `datetime` cho machine-readable) |
| `<address>` | Thông tin liên hệ |
| `<details>` / `<summary>` | Accordion mở rộng/thu gọn native |

---

## 10. Form HTML — Chi tiết

Form là nơi người dùng nhập và gửi dữ liệu. Hiểu form rất quan trọng với BA.

```html
<form action="/api/register" method="POST" novalidate>

  <!-- Text inputs -->
  <label for="fullname">Họ và tên <span aria-hidden="true">*</span></label>
  <input
    type="text"
    id="fullname"
    name="fullname"
    placeholder="Nguyễn Văn An"
    required
    minlength="2"
    maxlength="100"
    autocomplete="name"
  />

  <!-- Email -->
  <input type="email" id="email" name="email" required />

  <!-- Password -->
  <input type="password" id="password" name="password" minlength="8" required />

  <!-- Number -->
  <input type="number" id="age" name="age" min="18" max="100" step="1" />

  <!-- Date -->
  <input type="date" id="dob" name="dob" min="1990-01-01" />

  <!-- Textarea -->
  <textarea id="notes" name="notes" rows="4" cols="50" maxlength="500"
    placeholder="Ghi chú thêm..."></textarea>

  <!-- Select (dropdown) -->
  <select id="city" name="city" required>
    <option value="">-- Chọn thành phố --</option>
    <option value="hn">Hà Nội</option>
    <option value="hcm">TP. Hồ Chí Minh</option>
    <option value="dn">Đà Nẵng</option>
  </select>

  <!-- Radio buttons -->
  <fieldset>
    <legend>Giới tính</legend>
    <label>
      <input type="radio" name="gender" value="male" /> Nam
    </label>
    <label>
      <input type="radio" name="gender" value="female" /> Nữ
    </label>
    <label>
      <input type="radio" name="gender" value="other" /> Khác
    </label>
  </fieldset>

  <!-- Checkboxes -->
  <fieldset>
    <legend>Kỹ năng</legend>
    <label><input type="checkbox" name="skills" value="html" /> HTML</label>
    <label><input type="checkbox" name="skills" value="css" /> CSS</label>
    <label><input type="checkbox" name="skills" value="js" /> JavaScript</label>
  </fieldset>

  <!-- File upload -->
  <input type="file" id="avatar" name="avatar" accept="image/*" />
  <input type="file" id="docs" name="docs" accept=".pdf,.doc,.docx" multiple />

  <!-- Hidden field -->
  <input type="hidden" name="source" value="landing-page" />

  <!-- Submit -->
  <button type="submit">Đăng ký</button>
  <button type="reset">Xóa form</button>
  <button type="button" id="preview-btn">Xem trước</button>

</form>
```

**Các loại `input` đầy đủ:**

| Type | Dùng cho | Validate tự động |
|------|----------|-----------------|
| `text` | Văn bản ngắn | `minlength`, `maxlength`, `pattern` |
| `email` | Email | Kiểm tra format @  |
| `password` | Mật khẩu (ẩn ký tự) | `minlength` |
| `number` | Số | `min`, `max`, `step` |
| `tel` | Số điện thoại | Không (format khác nhau) |
| `url` | URL | Kiểm tra format http:// |
| `date` | Ngày | `min`, `max` |
| `time` | Giờ | — |
| `datetime-local` | Ngày + giờ | — |
| `checkbox` | Ô tích | `required` (phải check) |
| `radio` | Chọn một | `required` |
| `file` | Upload file | `accept`, `multiple` |
| `range` | Thanh kéo | `min`, `max`, `step` |
| `color` | Chọn màu | — |
| `search` | Ô tìm kiếm | — |
| `hidden` | Dữ liệu ẩn | — |

---

## 11. Bảng (Table)

```html
<table>
  <caption>Bảng so sánh gói dịch vụ</caption>
  <thead>
    <tr>
      <th scope="col">Tính năng</th>
      <th scope="col">Gói Free</th>
      <th scope="col">Gói Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Số người dùng</td>
      <td>1</td>
      <td>Không giới hạn</td>
    </tr>
    <tr>
      <td>Lưu trữ</td>
      <td>1 GB</td>
      <td>100 GB</td>
    </tr>
    <tr>
      <td colspan="2">Hỗ trợ 24/7</td>
      <td>✓</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Giá/tháng</td>
      <td>Miễn phí</td>
      <td>299,000đ</td>
    </tr>
  </tfoot>
</table>
```

> Bảng chỉ nên dùng cho **dữ liệu dạng bảng**, không dùng để layout trang (đó là việc của CSS Flexbox/Grid).

---

## 12. Media: Video và Audio

```html
<!-- Video -->
<video width="640" height="360" controls autoplay muted loop poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>Trình duyệt của bạn không hỗ trợ video. <a href="video.mp4">Tải về</a></p>
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
</audio>

<!-- Nhúng iframe (YouTube, Google Maps, v.v.) -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  title="Tên video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
  allowfullscreen
></iframe>
```

---

## 13. HTML và BA — Ứng dụng thực tế

Với tư cách BA, hiểu HTML giúp bạn:

**1. Viết Acceptance Criteria chính xác hơn:**
- "Form phải có `required` trên các trường bắt buộc" → FE biết cần validate native
- "Input email phải dùng `type='email'`" → tự validate format
- "Ảnh phải có `alt` text" → accessibility requirement

**2. Mô tả wireframe rõ ràng hơn:**
- Biết phân biệt heading hierarchy (h1, h2, h3) → ảnh hưởng SEO
- Biết khi nào dùng `<table>` vs list vs card layout
- Hiểu sự khác nhau giữa link (`<a>`) và button (`<button>`)

**3. Đặt câu hỏi đúng với dev:**
- "Form này submit bằng `method POST` hay gọi API?" → ảnh hưởng đến xử lý BE
- "Trường này có `autocomplete` không?" → UX consideration
- "Trang này có cần SEO không?" → ảnh hưởng đến việc dùng semantic tags

**4. Review UI/UX:**
- Kiểm tra `alt` text trên ảnh khi review
- Kiểm tra heading hierarchy trong trang
- Biết sự khác biệt giữa `<button>` (action) và `<a>` (navigation)
