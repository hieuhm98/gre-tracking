# JavaScript Cơ Bản

## 1. JavaScript là gì?

**JavaScript (JS)** là ngôn ngữ lập trình chạy trực tiếp trên trình duyệt, biến trang web từ nội dung tĩnh thành ứng dụng *động* và *tương tác*. JS cũng chạy được phía server qua **Node.js**.

**Vai trò của JS trong web:**
- Xử lý tương tác người dùng (click, scroll, hover)
- Validate form trước khi gửi lên server
- Cập nhật giao diện mà không cần tải lại trang
- Gọi API lấy/gửi dữ liệu với server
- Animation, drag-and-drop, real-time features

```html
<!-- JS trong HTML -->
<script src="app.js"></script>                    <!-- file ngoài (chuẩn nhất) -->
<script type="module" src="main.js"></script>     <!-- ES module -->
<script>console.log("Inline JS");</script>        <!-- inline (tránh dùng) -->
```

---

## 2. Biến và kiểu dữ liệu

### Khai báo biến

```js
// let: có thể thay đổi, block scope
let count = 0;
count = 1; // OK

// const: không thể gán lại, block scope (khuyên dùng mặc định)
const name = "Nguyễn An";
// name = "other"; // Error!

// Nhưng object/array với const vẫn có thể thay đổi nội dung:
const user = { name: "An" };
user.name = "Bình"; // OK — thay đổi thuộc tính, không gán lại biến

// var: function scope, tránh dùng trong code hiện đại
var old = "cách cũ";
```

### Kiểu dữ liệu nguyên thủy

```js
// String
let str = "Xin chào";
let str2 = 'Single quote cũng được';
let str3 = `Template literal: ${name}, tuổi ${25 + 1}`; // ES6

// Number
let int = 42;
let float = 3.14;
let negative = -100;
let infinity = Infinity;
let notANumber = NaN; // kết quả phép tính không hợp lệ

// Boolean
let isActive = true;
let isEmpty = false;

// Null — rỗng có chủ ý
let data = null;

// Undefined — chưa gán giá trị
let x;
console.log(x); // undefined

// BigInt — số nguyên rất lớn
const huge = 9007199254740991n;

// Symbol — định danh duy nhất (nâng cao)
const id = Symbol("id");
```

### Kiểm tra kiểu dữ liệu

```js
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug lịch sử của JS!)
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"

// Kiểm tra array chính xác hơn:
Array.isArray([1, 2, 3]) // true
```

---

## 3. Toán tử

```js
// Số học
let a = 10, b = 3;
a + b  // 13
a - b  // 7
a * b  // 30
a / b  // 3.333...
a % b  // 1 (phần dư)
a ** b // 1000 (lũy thừa)

// Gán
let x = 5;
x += 3;  // x = 8
x -= 2;  // x = 6
x *= 2;  // x = 12
x /= 4;  // x = 3
x++;     // x = 4 (tăng 1)
x--;     // x = 3 (giảm 1)

// So sánh
5 == "5"   // true  (so sánh lỏng — tránh dùng)
5 === "5"  // false (so sánh nghiêm — luôn dùng ===)
5 !== "5"  // true
5 > 3      // true
5 >= 5     // true
5 < 3      // false

// Logic
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)

// Nullish coalescing: trả về bên phải nếu bên trái là null/undefined
const val = null ?? "mặc định"; // "mặc định"
const val2 = 0 ?? "mặc định";  // 0 (0 không phải null/undefined)

// Optional chaining: truy cập an toàn, không lỗi nếu null/undefined
const city = user?.address?.city; // undefined nếu address không tồn tại
const len = arr?.length;
```

---

## 4. String — Chuỗi

```js
const str = "Xin chào Việt Nam";

// Độ dài
str.length // 18

// Truy cập ký tự
str[0]        // "X"
str.at(-1)    // "m" (ký tự cuối)

// Tìm kiếm
str.includes("chào")      // true
str.startsWith("Xin")     // true
str.endsWith("Nam")       // true
str.indexOf("chào")       // 4 (-1 nếu không tìm thấy)

// Biến đổi
str.toLowerCase()          // "xin chào việt nam"
str.toUpperCase()          // "XIN CHÀO VIỆT NAM"
str.trim()                 // xóa khoảng trắng đầu cuối
str.trimStart()            // xóa đầu
str.trimEnd()              // xóa cuối
str.replace("Xin", "Hey") // "Hey chào Việt Nam"
str.replaceAll("a", "@")  // thay tất cả

// Cắt và nối
str.slice(4, 8)            // "chào" (từ index 4 đến 8)
str.slice(-7)              // "Việt Nam" (7 ký tự từ cuối)
str.split(" ")             // ["Xin", "chào", "Việt", "Nam"]
["Xin", "chào"].join(", ") // "Xin, chào"

// Thêm ký tự
"5".padStart(3, "0")       // "005"
"hi".padEnd(5, "!")        // "hi!!!"
"abc".repeat(3)            // "abcabcabc"

// Template literals (backtick)
const greeting = `Xin chào, ${name}! Bạn ${age} tuổi.`;
const multiline = `
  Dòng 1
  Dòng 2
  Dòng 3
`;
```

---

## 5. Array — Mảng

```js
const fruits = ["táo", "cam", "xoài", "ổi"];

// Truy cập
fruits[0]           // "táo"
fruits.at(-1)       // "ổi" (phần tử cuối)
fruits.length       // 4

// Thêm / xóa
fruits.push("nho")        // thêm cuối, trả về length mới
fruits.pop()              // xóa cuối, trả về phần tử đã xóa
fruits.unshift("lê")      // thêm đầu
fruits.shift()            // xóa đầu

fruits.splice(1, 2)       // xóa 2 phần tử từ index 1
fruits.splice(1, 0, "dưa") // chèn "dưa" vào index 1

// Tìm kiếm
fruits.includes("cam")          // true
fruits.indexOf("cam")           // 1 (-1 nếu không có)
fruits.find(f => f.length > 3)  // "xoài" (phần tử đầu tiên thỏa điều kiện)
fruits.findIndex(f => f === "xoài") // 2

// Transformation (KHÔNG thay đổi mảng gốc, trả về mảng mới)
const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2)           // [2, 4, 6, 8, 10]
numbers.filter(n => n % 2 === 0)  // [2, 4]
numbers.reduce((acc, n) => acc + n, 0) // 15
numbers.every(n => n > 0)         // true (tất cả > 0)
numbers.some(n => n > 4)          // true (có ít nhất 1 > 4)

// Sắp xếp
[3, 1, 4, 1, 5].sort((a, b) => a - b)    // [1, 1, 3, 4, 5] tăng dần
[3, 1, 4, 1, 5].sort((a, b) => b - a)    // [5, 4, 3, 1, 1] giảm dần

["banana", "apple", "cherry"].sort()      // ["apple", "banana", "cherry"]

// Làm phẳng mảng lồng
[1, [2, [3, 4]]].flat()    // [1, 2, [3, 4]]
[1, [2, [3, 4]]].flat(Infinity) // [1, 2, 3, 4]

// Nối mảng
[1, 2].concat([3, 4])          // [1, 2, 3, 4]
[...[1, 2], ...[3, 4]]         // [1, 2, 3, 4] (spread operator)

// Slice: sao chép một phần
numbers.slice(1, 3)             // [2, 3] (không đổi gốc)

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]
```

---

## 6. Object

```js
const user = {
  id: 1,
  name: "Nguyễn An",
  age: 25,
  role: "BA",
  address: {
    city: "Hà Nội",
    district: "Cầu Giấy",
  },
  skills: ["Agile", "SQL", "Jira"],
};

// Truy cập
user.name              // "Nguyễn An"
user["role"]           // "BA" (dùng khi key là biến)
user.address.city      // "Hà Nội"
user.skills[0]         // "Agile"

// Thêm / sửa / xóa
user.email = "an@example.com";    // thêm thuộc tính mới
user.age = 26;                    // sửa
delete user.age;                  // xóa

// Kiểm tra thuộc tính tồn tại
"name" in user         // true
user.hasOwnProperty("role") // true

// Destructuring
const { name, role } = user;
const { name: fullName, age = 0 } = user; // đổi tên + default value
const { address: { city } } = user;       // nested destructuring

// Spread — copy và merge
const updated = { ...user, age: 27 };         // copy + override age
const merged = { ...defaults, ...overrides }; // merge 2 objects

// Object methods
Object.keys(user)    // ["id", "name", "role", ...]
Object.values(user)  // [1, "Nguyễn An", "BA", ...]
Object.entries(user) // [["id", 1], ["name", "Nguyễn An"], ...]

// Chuyển entries thành object
Object.fromEntries([["a", 1], ["b", 2]]) // { a: 1, b: 2 }

// Shorthand property names
const x = 1, y = 2;
const point = { x, y }; // { x: 1, y: 2 }

// Computed property names
const key = "dynamic";
const obj = { [key]: "value" }; // { dynamic: "value" }
```

---

## 7. Hàm (Functions)

```js
// Function declaration — hoisting (có thể gọi trước khi khai báo)
function greet(name) {
  return `Xin chào, ${name}!`;
}

// Function expression
const greet = function(name) {
  return `Xin chào, ${name}!`;
};

// Arrow function (ES6) — ngắn gọn, không có `this` riêng
const greet = (name) => `Xin chào, ${name}!`;
const add = (a, b) => a + b;
const double = n => n * 2; // tham số đơn, bỏ ngoặc

// Default parameters
function createUser(name, role = "viewer", active = true) {
  return { name, role, active };
}
createUser("An")              // { name: "An", role: "viewer", active: true }
createUser("Bình", "admin")   // { name: "Bình", role: "admin", active: true }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4, 5); // 15

// Spread trong gọi hàm
Math.max(...[1, 5, 2, 8, 3]); // 8

// Higher-order functions
function apply(fn, value) {
  return fn(value);
}
apply(double, 5); // 10

// Closure — hàm nhớ biến của scope cha
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}
const c = counter();
c.increment(); // 1
c.increment(); // 2
c.value();     // 2
```

---

## 8. Điều kiện và Vòng lặp

```js
// if / else if / else
const score = 75;
if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 70) {
  console.log("Khá");
} else if (score >= 50) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// Ternary
const grade = score >= 50 ? "Đạt" : "Chưa đạt";

// Switch
const day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
    console.log("Đầu tuần"); break;
  case "Friday":
    console.log("Cuối tuần"); break;
  default:
    console.log("Giữa tuần");
}

// Nullish và truthy/falsy
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: tất cả còn lại

const display = user.name || "Ẩn danh"; // fallback
const city = user?.address?.city ?? "Chưa có"; // nullish coalescing

// Vòng lặp
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // bỏ qua iteration này
  if (i === 4) break;    // thoát vòng lặp
  console.log(i); // 0, 1, 3
}

// for...of — lặp qua giá trị
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in — lặp qua key của object
for (const key in user) {
  console.log(key, user[key]);
}

// forEach
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// while
let i = 0;
while (i < 5) {
  console.log(i++);
}

// do...while (luôn chạy ít nhất 1 lần)
do {
  console.log(i++);
} while (i < 5);
```

---

## 9. DOM Manipulation

**DOM** (Document Object Model) là cách JS tương tác với cấu trúc HTML:

```js
// === LẤY PHẦN TỬ ===
const el = document.getElementById("myId");
const el2 = document.querySelector(".card");       // CSS selector, phần tử đầu tiên
const els = document.querySelectorAll(".card");    // NodeList tất cả phần tử
const parent = el.parentElement;
const children = el.children;
const next = el.nextElementSibling;

// === ĐỌC / THAY ĐỔI NỘI DUNG ===
el.textContent = "Nội dung thuần text";           // an toàn hơn, không parse HTML
el.innerHTML = "<strong>Nội dung HTML</strong>";  // cẩn thận XSS nếu dùng input user
el.innerText = "Text có tính đến CSS visibility";

// === THUỘC TÍNH ===
el.getAttribute("href")                 // đọc attribute
el.setAttribute("data-id", "42")        // set attribute
el.removeAttribute("disabled")          // xóa attribute
el.dataset.id                           // đọc data-id
el.dataset.productCategory              // đọc data-product-category

// === CSS CLASS ===
el.classList.add("active")
el.classList.remove("hidden")
el.classList.toggle("selected")
el.classList.contains("active")         // true/false
el.classList.replace("old", "new")

// === STYLE ===
el.style.color = "red";
el.style.cssText = "color: red; font-size: 16px;"; // nhiều style cùng lúc
const computed = getComputedStyle(el);  // đọc style thực tế sau khi apply CSS

// === TẠO / THÊM / XÓA PHẦN TỬ ===
const newEl = document.createElement("div");
newEl.textContent = "Phần tử mới";
newEl.className = "card";
parent.appendChild(newEl);              // thêm vào cuối
parent.insertBefore(newEl, refEl);      // thêm trước refEl
parent.prepend(newEl);                  // thêm vào đầu
refEl.after(newEl);                     // thêm sau refEl
el.remove();                            // xóa phần tử
parent.replaceChild(newEl, oldEl);      // thay thế

// === TEMPLATE LITERAL để tạo HTML ===
const users = [{ name: "An" }, { name: "Bình" }];
const list = document.querySelector("#user-list");
list.innerHTML = users.map(u => `
  <li class="user-item">
    <strong>${u.name}</strong>
  </li>
`).join("");
```

---

## 10. Sự kiện (Events)

```js
const btn = document.querySelector("#submitBtn");

// addEventListener
btn.addEventListener("click", function(event) {
  console.log("Clicked!", event.target);
});

// Arrow function (không dùng `this`)
btn.addEventListener("click", (e) => {
  e.preventDefault();     // ngăn hành vi mặc định (submit form, follow link)
  e.stopPropagation();    // ngăn event bubble lên parent
  console.log(e.target);  // phần tử được click
  console.log(e.currentTarget); // phần tử có listener
});

// Remove listener
const handler = () => console.log("click");
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);

// Once: chỉ chạy 1 lần
btn.addEventListener("click", handler, { once: true });

// === CÁC LOẠI EVENT THƯỜNG DÙNG ===

// Mouse events
el.addEventListener("click", handler);
el.addEventListener("dblclick", handler);
el.addEventListener("mouseenter", handler); // không bubble
el.addEventListener("mouseleave", handler); // không bubble
el.addEventListener("mouseover", handler);  // có bubble
el.addEventListener("contextmenu", handler); // chuột phải

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(e.key, e.code, e.ctrlKey, e.shiftKey);
  if (e.key === "Escape") closeModal();
  if (e.ctrlKey && e.key === "s") saveForm(e);
});

// Form events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});
input.addEventListener("input", (e) => console.log(e.target.value));   // real-time
input.addEventListener("change", handler);  // khi mất focus
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// Window / Document events
window.addEventListener("scroll", handler);
window.addEventListener("resize", handler);
document.addEventListener("DOMContentLoaded", handler); // DOM sẵn sàng
window.addEventListener("load", handler);               // tất cả resources tải xong

// Event Delegation — lắng nghe ở parent, hiệu quả hơn gắn vào từng item
document.querySelector("#list").addEventListener("click", (e) => {
  const item = e.target.closest(".item");
  if (!item) return;
  const id = item.dataset.id;
  console.log("Clicked item:", id);
});
```

---

## 11. Bất đồng bộ (Asynchronous)

### Callback (cách cũ)

```js
setTimeout(() => console.log("Sau 2 giây"), 2000);
setInterval(() => console.log("Mỗi giây"), 1000);

// Callback hell — khó đọc
getData(function(a) {
  processA(a, function(b) {
    processB(b, function(c) {
      // ...
    });
  });
});
```

### Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Thành công!");
    } else {
      reject(new Error("Thất bại!"));
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Luôn chạy"));

// Promise.all — chạy song song, chờ tất cả
const [users, products] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/products").then(r => r.json()),
]);

// Promise.allSettled — chờ tất cả, kể cả lỗi
// Promise.race — lấy kết quả đầu tiên
// Promise.any — lấy thành công đầu tiên
```

### Async/Await (hiện đại nhất)

```js
async function fetchUserData(userId) {
  try {
    // Gọi API
    const response = await fetch(`/api/users/${userId}`);

    // Kiểm tra HTTP status
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // Parse JSON
    const user = await response.json();
    return user;

  } catch (error) {
    console.error("Lỗi khi lấy user:", error);
    throw error; // re-throw để caller xử lý
  }
}

// Gọi async function
async function init() {
  const user = await fetchUserData(1);
  console.log(user.name);
}

// Hoặc dùng .then()
fetchUserData(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));
```

---

## 12. Fetch API — Gọi HTTP Request

```js
// GET request
const response = await fetch("/api/products");
const products = await response.json();

// POST request
const response = await fetch("/api/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  body: JSON.stringify({
    name: "Sản phẩm mới",
    price: 299000,
  }),
});

const result = await response.json();

// PUT / PATCH / DELETE
await fetch(`/api/products/${id}`, { method: "DELETE" });

// Upload file
const formData = new FormData();
formData.append("file", fileInput.files[0]);
formData.append("name", "avatar");

await fetch("/api/upload", {
  method: "POST",
  body: formData, // KHÔNG set Content-Type khi upload file
});

// Xử lý lỗi đầy đủ
async function apiCall(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || `HTTP ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") return; // request bị hủy
    throw err;
  }
}
```

---

## 13. LocalStorage và SessionStorage

```js
// LocalStorage: lưu vĩnh viễn (đến khi xóa)
localStorage.setItem("token", "abc123");
const token = localStorage.getItem("token");
localStorage.removeItem("token");
localStorage.clear(); // xóa tất cả

// Lưu object (phải stringify/parse)
localStorage.setItem("user", JSON.stringify({ name: "An", role: "BA" }));
const user = JSON.parse(localStorage.getItem("user"));

// SessionStorage: xóa khi đóng tab
sessionStorage.setItem("temp", "data");

// Cookie (cơ bản)
document.cookie = "name=An; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
```

---

## 14. Xử lý lỗi

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Loại lỗi:", error.name);
  console.error("Thông báo:", error.message);
  console.error("Stack trace:", error.stack);
} finally {
  // Luôn chạy dù có lỗi hay không
  setLoading(false);
}

// Throw custom error
function divide(a, b) {
  if (b === 0) throw new Error("Không thể chia cho 0");
  return a / b;
}

// Custom error class
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

throw new ValidationError("email", "Email không hợp lệ");
```

---

## 15. Modules (ES Modules)

```js
// math.js — export
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator { /* ... */ }

// main.js — import
import Calculator, { PI, add } from "./math.js";
import * as MathUtils from "./math.js";
import { add as addNumbers } from "./math.js"; // rename

// Dynamic import (lazy loading)
const module = await import("./heavy-module.js");
module.doSomething();
```

---

## 16. JS và BA

**Các khái niệm BA cần hiểu:**

**1. Client-side vs Server-side validation:**
- JS validate trên client = UX tốt, nhưng KHÔNG đủ bảo mật
- BE PHẢI validate lại — BA cần chỉ rõ rule nào cần ở cả hai tầng

**2. State (trạng thái) của UI:**
- **Loading**: đang gọi API
- **Success**: có dữ liệu
- **Error**: gọi API thất bại
- **Empty**: thành công nhưng không có dữ liệu
→ BA phải mô tả cả 4 trạng thái trong AC

**3. Async UX:**
- Gọi API mất 0.5-3 giây → cần loading indicator
- Timeout → cần error message và retry
- BA cần specify: "nếu API không phản hồi trong 10s, hiển thị lỗi và nút Thử lại"

**4. Event-driven thinking:**
- Mỗi hành động người dùng là một event
- BA nên liệt kê: "Khi user click X → Y xảy ra → Z hiển thị"

**5. SPA (Single Page Application):**
- Trang không reload khi chuyển màn hình
- URL thay đổi nhưng không tải lại page
- Ảnh hưởng đến browser back button, deep linking, SEO
