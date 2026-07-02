# CSS Basics

## 1. What is CSS?

**CSS** (Cascading Style Sheets) is the language used to style the appearance of an HTML page. If HTML is the skeleton, CSS is the skin — colors, sizes, positions, fonts, and animations.

**3 ways to write CSS:**

```html
<!-- 1. Inline — tránh dùng, khó maintain -->
<p style="color: red; font-size: 16px;">Văn bản đỏ</p>

<!-- 2. Internal — trong <head>, phù hợp cho trang nhỏ -->
<style>
  p { color: blue; }
</style>

<!-- 3. External (chuẩn nhất) — file .css riêng biệt -->
<link rel="stylesheet" href="style.css" />
```

**CSS syntax:**

```css
selector {
  property: value;
  another-property: value;
}

/* Ví dụ */
h1 {
  color: #1a1a2e;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
}
```

---

## 2. Selectors — Choosing elements

### Basic selectors

```css
/* Theo thẻ */
p { color: gray; }
h1 { font-size: 32px; }

/* Theo class (dấu chấm) — dùng lại nhiều lần */
.card { background: white; border-radius: 8px; }
.btn { padding: 8px 16px; cursor: pointer; }
.btn.primary { background: blue; color: white; } /* nhiều class */

/* Theo id (dấu thăng) — duy nhất trong trang */
#header { position: sticky; top: 0; }

/* Tất cả phần tử */
* { box-sizing: border-box; margin: 0; }
```

### Combinator selectors

```css
/* Con trực tiếp: .parent > .child */
.nav > li { display: inline-block; }

/* Hậu duệ: .ancestor .descendant */
.card p { font-size: 14px; }

/* Anh em liền kề: A + B */
h2 + p { margin-top: 8px; }

/* Tất cả anh em phía sau: A ~ B */
h2 ~ p { color: gray; }

/* Nhiều selector cùng style */
h1, h2, h3, h4 { font-family: 'Inter', sans-serif; }
```

### Pseudo-class (state)

```css
/* Trạng thái tương tác */
a:hover { color: blue; text-decoration: underline; }
button:hover { background: darkblue; }
input:focus { outline: 2px solid blue; border-color: blue; }
button:active { transform: scale(0.98); }
button:disabled { opacity: 0.5; cursor: not-allowed; }

/* Vị trí trong danh sách */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2) { color: red; }      /* phần tử thứ 2 */
li:nth-child(odd) { background: #f5f5f5; }   /* lẻ */
li:nth-child(even) { background: white; }    /* chẵn */

/* Input states */
input:required { border-left: 3px solid red; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:checked + label { font-weight: bold; }

/* Link states */
a:visited { color: purple; }
a:not([href]) { color: gray; cursor: default; }
```

### Pseudo-element

```css
/* Nội dung trước/sau */
.required::after {
  content: " *";
  color: red;
}

.card::before {
  content: "";
  display: block;
  height: 4px;
  background: blue;
  border-radius: 4px 4px 0 0;
}

/* Chữ đầu tiên, dòng đầu tiên */
p::first-letter { font-size: 2em; float: left; }
p::first-line { font-weight: bold; }

/* Text được bôi đen */
::selection { background: yellow; color: black; }

/* Placeholder */
input::placeholder { color: #aaa; font-style: italic; }
```

---

## 3. Box Model

Every HTML element is a rectangular box with 4 layers:

```
┌──────────────────────────────────────┐
│              MARGIN                   │  khoảng cách bên ngoài (transparent)
│  ┌────────────────────────────────┐  │
│  │            BORDER              │  │  đường viền
│  │  ┌──────────────────────────┐  │  │
│  │  │         PADDING          │  │  │  khoảng đệm bên trong
│  │  │  ┌────────────────────┐  │  │  │
│  │  │  │      CONTENT       │  │  │  │  nội dung (text, ảnh)
│  │  │  │   width × height   │  │  │  │
│  │  │  └────────────────────┘  │  │  │
│  │  └──────────────────────────┘  │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

```css
.box {
  /* Kích thước */
  width: 300px;
  height: 150px;
  min-width: 200px;
  max-width: 500px;
  min-height: 50px;

  /* Padding — bên trong */
  padding: 16px;                    /* 4 phía bằng nhau */
  padding: 8px 16px;                /* top/bottom left/right */
  padding: 8px 12px 16px 20px;     /* top right bottom left (clockwise) */
  padding-top: 8px;
  padding-right: 12px;

  /* Border */
  border: 1px solid #e5e7eb;
  border-radius: 8px;               /* bo tròn góc */
  border-radius: 50%;               /* hình tròn */
  border-top: 3px solid blue;       /* chỉ cạnh trên */

  /* Margin — bên ngoài */
  margin: 24px;
  margin: 0 auto;                   /* căn giữa block element */
  margin-top: 16px;
  margin-bottom: 0;
}

/* QUAN TRỌNG: box-sizing */
/* Mặc định: width chỉ tính content, không gồm padding và border */
.default {
  width: 300px; /* thực tế: 300 + padding + border */
}

/* border-box: width bao gồm cả padding và border */
* {
  box-sizing: border-box; /* Áp dụng toàn bộ — cực kỳ phổ biến */
}
```

**Comparing `box-sizing`:**

| | `content-box` (default) | `border-box` (recommended) |
|--|--|--|
| `width: 300px` + `padding: 20px` | Total = 340px | Total = 300px |
| Predicting the size | Hard | Easy |

---

## 4. Display — How elements are shown

```css
/* Block: chiếm hết chiều ngang, bắt đầu dòng mới */
/* Mặc định: div, p, h1-h6, ul, li, section, ... */
.block { display: block; }

/* Inline: vừa với nội dung, cùng dòng */
/* Mặc định: span, a, strong, em, img, ... */
/* Không đặt được width/height */
.inline { display: inline; }

/* Inline-block: cùng dòng NHƯNG đặt được width/height */
.tag {
  display: inline-block;
  width: 80px;
  height: 28px;
  line-height: 28px;
}

/* Flex: layout linh hoạt (xem phần 5) */
.row { display: flex; }

/* Grid: layout 2 chiều (xem phần 6) */
.layout { display: grid; }

/* None: ẩn hoàn toàn, không chiếm không gian */
.hidden { display: none; }

/* visibility: hidden — ẩn nhưng vẫn chiếm không gian */
.invisible { visibility: hidden; }
```

---

## 5. Flexbox

Flexbox is a one-dimensional layout (row or column), ideal for navbars, card rows, and centering.

```css
/* Container */
.flex-container {
  display: flex;
  flex-direction: row;          /* row (mặc định) | column | row-reverse | column-reverse */
  flex-wrap: wrap;              /* nowrap (mặc định) | wrap | wrap-reverse */
  justify-content: space-between; /* căn theo trục chính */
  align-items: center;          /* căn theo trục phụ */
  align-content: flex-start;    /* khi có nhiều dòng */
  gap: 16px;                    /* khoảng cách giữa các item */
  gap: 8px 16px;                /* row-gap column-gap */
}

/* Items */
.flex-item {
  flex: 1;                      /* grow=1, shrink=1, basis=0 */
  flex: 0 0 200px;              /* fixed 200px, không co giãn */
  flex-grow: 2;                 /* chiếm gấp đôi không gian */
  flex-shrink: 0;               /* không thu nhỏ */
  flex-basis: 200px;            /* kích thước mặc định */
  align-self: flex-end;         /* override align-items cho item này */
  order: -1;                    /* thay đổi thứ tự (không đổi HTML) */
}
```

**`justify-content` values:**

```
flex-start:    [■ ■ ■          ]
flex-end:      [          ■ ■ ■]
center:        [    ■ ■ ■      ]
space-between: [■    ■    ■    ]  ← không có khoảng đầu cuối  wait—
                 actually: [■         ■         ■]
space-around:  [ ■   ■   ■  ]
space-evenly:  [  ■   ■   ■  ]
```

**Perfect centering:**

```css
/* Căn giữa cả ngang lẫn dọc */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## 6. CSS Grid

Grid is a two-dimensional layout (rows and columns), ideal for page layouts and galleries.

```css
/* Container */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;    /* 3 cột: cố định + linh hoạt */
  grid-template-columns: repeat(3, 1fr);   /* 3 cột bằng nhau */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* responsive tự động */
  grid-template-rows: auto 1fr auto;       /* header, main, footer */
  gap: 24px;
  column-gap: 24px;
  row-gap: 16px;
}

/* Items */
.item {
  grid-column: 1 / 3;       /* từ cột 1 đến cột 3 */
  grid-column: span 2;      /* chiếm 2 cột */
  grid-row: 1 / 3;          /* từ hàng 1 đến hàng 3 */
}

/* Named areas — dễ đọc */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

**When to use Flexbox vs Grid?**

| Situation | Use |
|---|---|
| Arranging items in one dimension (navbar, button group) | **Flexbox** |
| Two-dimensional layout (page layout, gallery) | **Grid** |
| Centering a single element | **Flexbox** |
| Responsive card grid | **Grid** |
| Sidebar + main content | Either works |

---

## 7. Position

```css
/* Static (mặc định): theo luồng bình thường */
.normal { position: static; }

/* Relative: di chuyển so với vị trí gốc, vẫn giữ chỗ */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute: thoát khỏi luồng, định vị theo ancestor có position != static */
.tooltip {
  position: absolute;
  top: 100%;     /* ngay dưới parent */
  left: 0;
  z-index: 10;   /* nằm trên các phần tử khác */
}

/* Fixed: cố định theo viewport, không scroll theo trang */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* Sticky: như relative cho đến khi scroll đến ngưỡng, rồi thành fixed */
.table-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
```

---

## 8. Typography

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;      /* base size */
  line-height: 1.6;     /* khoảng cách dòng (không đơn vị = nhân với font-size) */
  color: #1a1a2e;
}

h1 {
  font-size: 2.5rem;    /* rem: tương đối với root (thường 16px) = 40px */
  font-weight: 700;     /* 100-900, hoặc bold/normal */
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.caption {
  font-size: 0.875rem;  /* 14px */
  color: #6b7280;
  font-style: italic;
}

/* Text utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;     /* cắt và thêm "..." khi quá dài */
}

.multiline-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;   /* hiện tối đa 3 dòng */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

**CSS units:**

| Unit | Meaning | Used for |
|--------|---------|----------|
| `px` | Absolute pixel | Border, shadow |
| `rem` | Relative to root (usually 16px) | Font-size, spacing |
| `em` | Relative to parent | Nested font-size |
| `%` | Percentage of parent | Flexible width, height |
| `vw` | 1% of viewport width | Full-width layouts |
| `vh` | 1% of viewport height | Full-height sections |
| `fr` | Fraction (share) in Grid | Grid columns/rows |
| `ch` | Width of the "0" character | Max-width for text |

---

## 9. Colors

```css
/* HEX */
color: #3b82f6;
color: #3b82f680; /* 80 = 50% opacity */

/* RGB / RGBA */
color: rgb(59, 130, 246);
color: rgba(59, 130, 246, 0.5);

/* HSL: dễ điều chỉnh hơn */
color: hsl(217, 91%, 60%);
color: hsla(217, 91%, 60%, 0.5);

/* CSS Variables — cực kỳ hữu ích */
:root {
  --primary: #3b82f6;
  --primary-dark: #1d4ed8;
  --text: #1f2937;
  --text-muted: #6b7280;
  --bg: #ffffff;
  --bg-secondary: #f9fafb;
  --border: #e5e7eb;
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.button {
  background: var(--primary);
  border-radius: var(--radius);
}

/* Dark mode với CSS variables */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #f1f5f9;
    --border: #334155;
  }
}
```

---

## 10. Responsive Design

```css
/* Mobile-first approach (khuyên dùng) */

/* Base: mobile */
.container { padding: 16px; }
.grid { grid-template-columns: 1fr; }
.nav { display: none; }
.hamburger { display: block; }

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .container { padding: 24px; max-width: 768px; margin: 0 auto; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container { max-width: 1200px; padding: 32px; }
  .grid { grid-template-columns: repeat(3, 1fr); }
  .nav { display: flex; }
  .hamburger { display: none; }
}

/* Large desktop: 1280px+ */
@media (min-width: 1280px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}

/* Print */
@media print {
  .nav, .sidebar, .ads { display: none; }
  body { font-size: 12pt; color: black; }
}
```

**Common breakpoints:**

| Name | Min-width | Device |
|-----|-----------|---------|
| xs | < 640px | Small mobile |
| sm | 640px | Mobile |
| md | 768px | Tablet |
| lg | 1024px | Laptop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

---

## 11. Transitions and Animations

```css
/* Transition: thay đổi mượt mà khi state thay đổi */
.button {
  background: blue;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: darkblue;
  transform: translateY(-2px);
}

/* Transition shorthand */
transition: all 0.3s ease;          /* tất cả properties */
transition: opacity 0.2s ease-in;   /* chỉ opacity */

/* Timing functions */
/* ease (mặc định), linear, ease-in, ease-out, ease-in-out, cubic-bezier() */

/* Keyframe Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

.card {
  animation: fadeIn 0.4s ease both;
}
.loader {
  animation: spin 1s linear infinite;
}

/* Stagger: delay từng item */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }
```

---

## 12. Cascade, Specificity, and Inheritance

### Specificity (Priority)

When multiple rules conflict, specificity determines which rule wins:

| Selector | Score |
|----------|------|
| Inline style | 1000 |
| ID `#id` | 100 |
| Class `.class`, pseudo-class `:hover` | 10 |
| Tag `p`, pseudo-element `::before` | 1 |

```css
p { color: gray; }              /* 1 */
.text { color: blue; }          /* 10 → thắng */
#intro { color: green; }        /* 100 → thắng */
div#intro.text p { color: red; } /* 100+10+1+1 = 112 → thắng */

/* !important ghi đè tất cả — tránh lạm dụng */
p { color: pink !important; }   /* thắng tất cả */
```

### Inheritance

```css
body {
  font-family: 'Inter', sans-serif; /* kế thừa xuống tất cả children */
  color: #1f2937;                   /* kế thừa */
  font-size: 16px;                  /* kế thừa */
}

/* Thuộc tính KHÔNG kế thừa: background, border, margin, padding, width, height */

/* Buộc kế thừa */
.box { border: inherit; }
```

---

## 13. CSS and the BA

Understanding CSS helps a BA work better:

**When writing specs / design handoffs:**
- Describe spacing precisely: "padding 16px 24px, margin-bottom 8px"
- Talk accurately about responsiveness: "3 columns on desktop, 2 on tablet, 1 on mobile"
- Point out hover/focus states in the AC: "button hover changes background color, transition 300ms"

**When communicating with designers and developers:**
- Know Tailwind CSS and Bootstrap: developers use utility classes rather than writing CSS by hand
- Understand why "match Figma 100%" sometimes takes a lot of effort: fonts, spacing systems, breakpoints
- Know what CSS cannot do: complex animation needs JS, business logic needs the BE

**When estimating effort:**
- Complex layouts (overlaps, multi-layer z-index) = more time
- Responsive across many breakpoints = double/triple the time
- Animation = needs a separate estimate
