# HTML Basics

## 1. What is HTML?

**HTML** (HyperText Markup Language) is a markup language used to create the structure of a web page. HTML is not a programming language — it has no logic or computation — it simply describes the *content* and *structure* of a page.

When you open a web page, the browser downloads the HTML file, parses its structure, and displays the content. HTML is the foundation of every website — whether built with React, Vue, or any framework, the final result the browser receives is still HTML.

**The 3 core building blocks of the web:**
- **HTML** — Structure (the skeleton)
- **CSS** — Appearance (the skin)
- **JavaScript** — Behavior (the muscles)

---

## 2. Basic structure of an HTML page

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

| Part | Meaning |
|------|---------|
| `<!DOCTYPE html>` | Declares this is an HTML5 document |
| `<html lang="vi">` | Root element; `lang` declares the language (important for SEO and screen readers) |
| `<head>` | Metadata: not displayed directly, holds information for the browser |
| `<meta charset="UTF-8">` | Supports Vietnamese characters and unicode |
| `<meta name="viewport">` | Responsive — displays correctly on mobile |
| `<title>` | Title on the tab, used for SEO |
| `<body>` | Content displayed on the page |
| `<script>` at the end of body | JS loads after the HTML has finished rendering |

---

## 3. HTML Tags

HTML is written using **tags**. Most tags have an opening tag and a closing tag:

```html
<p>Đây là đoạn văn.</p>
<div>Một khối nội dung.</div>
```

Some tags are **self-closing** (have no content inside):

```html
<img src="anh.jpg" alt="Mô tả ảnh" />
<br />           <!-- xuống dòng -->
<hr />           <!-- đường kẻ ngang -->
<input type="text" />
<link rel="stylesheet" href="style.css" />
<meta charset="UTF-8" />
```

---

## 4. Text and heading tags

### Headings

```html
<h1>Tiêu đề trang — lớn nhất, chỉ dùng 1 lần/trang</h1>
<h2>Tiêu đề chương — mục lớn</h2>
<h3>Tiêu đề mục con</h3>
<h4>Mục nhỏ hơn</h4>
<h5>Hiếm dùng</h5>
<h6>Nhỏ nhất</h6>
```

> **SEO note**: Each page should have only **one `<h1>`**. Heading order must be correct (don't jump from h1 to h4).

### Text

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

## 5. Lists

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

## 6. Links and Images

### The `<a>` tag — Links

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

> `target="_blank"` opens a new tab. `rel="noopener noreferrer"` is a security measure — it prevents the new page from accessing `window.opener`.

### The `<img>` tag — Images

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

> **`alt` is important**: Screen readers read the `alt` text to visually impaired users. If an image is purely decorative, use `alt=""`.

---

## 7. Attributes

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

## 8. Layout division tags

### Block vs Inline

| Type | Characteristics | Example tags |
|------|-----------|-----------|
| **Block** | Takes up the full width, starts on a new line | `div`, `p`, `h1`, `ul`, `section` |
| **Inline** | Sits on the same line, fits its content | `span`, `a`, `strong`, `img` |

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

**Semantic HTML** uses tags with clear meaning instead of `<div>` for everything. It matters for SEO, accessibility, and code readability.

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

**Table of semantic tags:**

| Tag | Used for |
|-----|----------|
| `<header>` | Header of a page or section |
| `<nav>` | Main navigation menu |
| `<main>` | Main content of the page (used only once) |
| `<article>` | Independent content: articles, product cards |
| `<section>` | A group of content on the same topic |
| `<aside>` | Secondary content: sidebar, ads, related posts |
| `<footer>` | Footer of a page or article |
| `<figure>` | Image, chart, or code block with a caption |
| `<figcaption>` | Caption for a `<figure>` |
| `<time>` | Date/time (use `datetime` for machine-readable) |
| `<address>` | Contact information |
| `<details>` / `<summary>` | Native expand/collapse accordion |

---

## 10. HTML Forms — In Detail

Forms are where users enter and submit data. Understanding forms is very important for a BA.

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

**Complete list of `input` types:**

| Type | Used for | Automatic validation |
|------|----------|-----------------|
| `text` | Short text | `minlength`, `maxlength`, `pattern` |
| `email` | Email | Checks for @ format |
| `password` | Password (hides characters) | `minlength` |
| `number` | Number | `min`, `max`, `step` |
| `tel` | Phone number | None (formats vary) |
| `url` | URL | Checks for http:// format |
| `date` | Date | `min`, `max` |
| `time` | Time | — |
| `datetime-local` | Date + time | — |
| `checkbox` | Checkbox | `required` (must be checked) |
| `radio` | Choose one | `required` |
| `file` | File upload | `accept`, `multiple` |
| `range` | Slider | `min`, `max`, `step` |
| `color` | Color picker | — |
| `search` | Search box | — |
| `hidden` | Hidden data | — |

---

## 11. Tables

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

> Tables should only be used for **tabular data**, not for page layout (that is the job of CSS Flexbox/Grid).

---

## 12. Media: Video and Audio

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

## 13. HTML and the BA — Practical Applications

As a BA, understanding HTML helps you:

**1. Write more precise Acceptance Criteria:**
- "The form must have `required` on mandatory fields" → the FE knows to use native validation
- "The email input must use `type='email'`" → self-validates the format
- "Images must have `alt` text" → an accessibility requirement

**2. Describe wireframes more clearly:**
- Knowing how to distinguish heading hierarchy (h1, h2, h3) → affects SEO
- Knowing when to use a `<table>` vs a list vs a card layout
- Understanding the difference between a link (`<a>`) and a button (`<button>`)

**3. Ask developers the right questions:**
- "Does this form submit with `method POST` or call an API?" → affects BE handling
- "Does this field have `autocomplete`?" → a UX consideration
- "Does this page need SEO?" → affects whether to use semantic tags

**4. Review UI/UX:**
- Check `alt` text on images during review
- Check the heading hierarchy on the page
- Know the difference between `<button>` (action) and `<a>` (navigation)
