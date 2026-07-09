# What is JSON?

## 1. What is JSON?

**JSON** (JavaScript Object Notation) is a **text format** for storing and exchanging data between systems. It is the most common format that APIs use to return data.

**Why does a BA need to know JSON?**
- Read API results in Postman/Swagger to **test** a requirement.
- **Map** data fields between two systems when writing an integration spec.
- Write clear **acceptance criteria**: "the response must contain a `status` field equal to `confirmed`".

JSON is designed to be **human-readable** and **machine-processable** at the same time.

---

## 2. Basic syntax: key–value

JSON is built from pairs of **keys** and **values**:

```json
{ "name": "Nguyen Van A", "age": 25 }
```

- A **key** is always a string in double quotes `"..."`, sitting to the left of the `:`.
- A **value** is the data, sitting to the right of the `:`.
- Pairs are separated by commas `,`.

Read it like English: *"the name of this person is Nguyen Van A; the age is 25".*

---

## 3. Value types

| Type | Example | Note |
|------|---------|------|
| String | `"Laptop Dell"` | Always in double quotes |
| Number | `25000000` | No quotes, no thousands separators |
| Boolean | `true` / `false` | True/false |
| Null | `null` | No value |
| Object | `{ ... }` | A nested object |
| Array | `[ ... ]` | A list |

---

## 4. Object `{}` and Array `[]`

These are the two most important building blocks — telling them apart means you understand 90% of JSON.

- **Object `{}`** = an **object** made of several key–value pairs. Example: one product.
- **Array `[]`** = a **list** of values separated by commas. Example: a list of tags.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"]
}
```

Here `tags` is an **array** containing 3 strings.

---

## 5. Nested data

A value can itself be an object. This is called a **nested object** (associative array).

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

`specs` is not a single value — it is a child object holding detailed information.

---

## 6. An array of objects – a list of records

An extremely common case in API responses: an **array containing several objects**, where each object is one record (like a row in a data table).

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
    { "productId": 8, "name": "Logitech Mouse",  "quantity": 2, "price": 500000 }
  ]
}
```

`items` is a list of 2 products in the order. Each element has the same set of keys.

---

## 7. Reading a value by "path"

When a developer says *"grab `customer.name`"* or *"`items[0].price`"*, they are pointing out a path through the JSON. Using the example in section 6:

| Path | Value |
|------|-------|
| `status` | `"confirmed"` |
| `customer.name` | `"Nguyen Van A"` |
| `items` | a list of 2 products |
| `items[0].name` | `"Laptop Dell XPS"` (the **first** element) |
| `items[1].quantity` | `2` |

> ⚠️ Arrays are numbered from **0**, so the first element is `items[0]`, not `items[1]`.

---

## 8. JSON vs XML

Before JSON, **XML** was the common format. For the same order, XML is much more verbose:

```xml
<order>
  <status>confirmed</status>
  <total>50500000</total>
</order>
```

| Criterion | JSON | XML |
|-----------|------|-----|
| Compactness | Concise | Long, many tags |
| Readability | Very easy | Harder |
| Popularity in new APIs | Very high | Declining |
| Still common in | Web, mobile, REST | Legacy systems, banking, SOAP |

Most modern APIs return **JSON** by default.

---

## 9. How does JSON travel through an API?

APIs use the header **`Content-Type: application/json`** to say the body data is JSON. The client uses **`Accept: application/json`** to request that the server respond with JSON.

```
POST /api/orders HTTP/1.1
Content-Type: application/json
Accept: application/json

{ "productId": 5, "quantity": 2 }
```

If the two sides don't agree on the format, the system will return an error.

---

## 10. What does a BA use JSON for?

- **Mapping data fields**: system A returns `full_name`, system B needs `customerName` → the BA builds a mapping table.
- **Writing acceptance criteria**: "on a successful order, the response returns `status: confirmed` and a non-empty `orderId`".
- **Quick testing**: read a response in Postman to check whether all fields are present and correct.
- **Reviewing API docs**: compare the JSON examples in Swagger against the business requirements.

---

## 11. Common JSON mistakes

- Missing double quotes around a key or string: `{ name: "A" }` ❌ → it must be `{ "name": "A" }` ✅.
- A **trailing comma** on the last element: `[1, 2, 3,]` ❌.
- Using single quotes `'` instead of double quotes `"`.
- Confusing an object `{}` with an array `[]`.
- Money with thousands separators: `25,000,000` ❌ → it must be `25000000`.

> 💡 Tip: paste JSON into a **JSON validator/formatter** to check it is valid and see the structure clearly.

---

## 12. Summary

- **JSON** = the most common data format in APIs, made of **key–value** pairs.
- **`{}`** = object (a single thing); **`[]`** = array (a list).
- Values can be **nested**: an object inside an object, an array of objects.
- Read data by **path**: `customer.name`, `items[0].price` (arrays start at 0).
- **JSON is more compact than XML** and is the default for modern APIs.
- BAs use JSON to **map data, write acceptance criteria, and test** APIs.
