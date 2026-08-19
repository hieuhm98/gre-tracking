// Validate the file-based knowledge content.
//
//   node scripts/validate-content.mjs            # every topic
//   node scripts/validate-content.mjs req-       # only slugs starting with req-
//
// Checks, per topic folder under knowledge-content/:
//   - meta.json parses and carries the bilingual fields + a known group
//   - article.md / article.en.md exist and have the SAME number of `## ` sections
//     (the reading mode zips the two languages section by section)
//   - questions.json parses, ids are unique, options/optionsEn line up, and
//     `answer` is a valid 0-based index
//   - lessons.json (optional) covers every article section exactly once, in
//     order, and only references question ids that exist
//
// Exits non-zero if anything fails, so it can gate a commit or a build.

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");
const KNOWN_GROUPS = new Set(["it-fundamentals", "ba", "po", "pm", "req", "dev"]);
const prefix = process.argv[2] ?? "";

const problems = [];
const fail = (slug, msg) => problems.push(`${slug}: ${msg}`);

function readJson(file) {
  return JSON.parse(readFileSync(file, "utf-8"));
}

function countSections(markdown) {
  return markdown.split("\n").filter((line) => line.startsWith("## ")).length;
}

const slugs = readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.startsWith(prefix))
  .map((d) => d.name)
  .sort();

let topicsWithLessons = 0;
let totalQuestions = 0;
let totalLessons = 0;

for (const slug of slugs) {
  const dir = path.join(CONTENT_DIR, slug);
  const at = (name) => path.join(dir, name);

  // ---------------------------------------------------------------- meta.json
  let meta;
  try {
    meta = readJson(at("meta.json"));
  } catch (err) {
    fail(slug, `meta.json unreadable (${err.message})`);
    continue;
  }

  for (const field of ["group", "title", "titleEn", "description", "descriptionEn"]) {
    if (!meta[field]) fail(slug, `meta.json is missing "${field}"`);
  }
  if (meta.group && !KNOWN_GROUPS.has(meta.group)) fail(slug, `unknown group "${meta.group}"`);

  // ---------------------------------------------------------------- articles
  let viSections = 0;
  let enSections = 0;

  if (!existsSync(at("article.md"))) {
    fail(slug, "article.md is missing");
  } else {
    viSections = countSections(readFileSync(at("article.md"), "utf-8"));
    if (viSections === 0) fail(slug, "article.md has no `## ` sections");
  }

  if (!existsSync(at("article.en.md"))) {
    fail(slug, "article.en.md is missing");
  } else {
    enSections = countSections(readFileSync(at("article.en.md"), "utf-8"));
  }

  if (viSections && enSections && viSections !== enSections) {
    fail(slug, `section count mismatch: article.md has ${viSections}, article.en.md has ${enSections}`);
  }

  // ------------------------------------------------------------ questions.json
  let questions = [];
  try {
    questions = readJson(at("questions.json"));
  } catch (err) {
    fail(slug, `questions.json unreadable (${err.message})`);
  }

  if (!Array.isArray(questions)) {
    fail(slug, "questions.json is not an array");
    questions = [];
  }

  const questionIds = new Set();

  questions.forEach((q, i) => {
    const where = `questions[${i}]${q?.id ? ` (${q.id})` : ""}`;

    if (!q?.id) fail(slug, `${where} has no id`);
    else if (questionIds.has(q.id)) fail(slug, `${where} duplicate id`);
    else questionIds.add(q.id);

    for (const field of ["question", "questionEn", "explanation", "explanationEn"]) {
      if (typeof q?.[field] !== "string" || q[field].trim() === "") fail(slug, `${where} missing "${field}"`);
    }

    if (!Array.isArray(q?.options) || !Array.isArray(q?.optionsEn)) {
      fail(slug, `${where} options/optionsEn must both be arrays`);
      return;
    }

    if (q.options.length !== q.optionsEn.length) {
      fail(slug, `${where} options (${q.options.length}) and optionsEn (${q.optionsEn.length}) differ in length`);
    }

    if (q.options.length < 2) fail(slug, `${where} needs at least 2 options`);

    if (!Number.isInteger(q?.answer) || q.answer < 0 || q.answer >= q.options.length) {
      fail(slug, `${where} answer ${q?.answer} is out of range 0..${q.options.length - 1}`);
    }
  });

  totalQuestions += questions.length;

  // -------------------------------------------------------------- lessons.json
  if (!existsSync(at("lessons.json"))) continue;

  let lessons = [];
  try {
    ({ lessons } = readJson(at("lessons.json")));
  } catch (err) {
    fail(slug, `lessons.json unreadable (${err.message})`);
    continue;
  }

  if (!Array.isArray(lessons) || lessons.length === 0) {
    fail(slug, "lessons.json has no lessons");
    continue;
  }

  topicsWithLessons += 1;
  totalLessons += lessons.length;

  const lessonIds = new Set();
  const covered = [];
  const usedQuestions = new Set();

  lessons.forEach((lesson, i) => {
    const where = `lessons[${i}]${lesson?.id ? ` (${lesson.id})` : ""}`;

    if (!lesson?.id) fail(slug, `${where} has no id`);
    else if (lessonIds.has(lesson.id)) fail(slug, `${where} duplicate id`);
    else lessonIds.add(lesson.id);

    for (const field of ["title", "titleEn"]) {
      if (typeof lesson?.[field] !== "string" || lesson[field].trim() === "") {
        fail(slug, `${where} missing "${field}"`);
      }
    }

    if (!Array.isArray(lesson?.sections) || lesson.sections.length === 0) {
      fail(slug, `${where} has no sections`);
    } else {
      lesson.sections.forEach((n) => {
        if (!Number.isInteger(n) || n < 1 || n > viSections) {
          fail(slug, `${where} references section ${n}, outside 1..${viSections}`);
        } else {
          covered.push(n);
        }
      });
    }

    if (!Array.isArray(lesson?.questionIds)) {
      fail(slug, `${where} questionIds must be an array`);
    } else {
      lesson.questionIds.forEach((qid) => {
        if (!questionIds.has(qid)) fail(slug, `${where} references unknown question "${qid}"`);
        else usedQuestions.add(qid);
      });

      if (lesson.questionIds.length === 0 && lesson.recap !== true) {
        fail(slug, `${where} has no questions but is not marked "recap": true`);
      }
    }
  });

  // Every section must appear exactly once, and the run must be in order — the
  // player slices the article by these indices, so a gap silently hides content.
  const expected = Array.from({ length: viSections }, (_, i) => i + 1);
  const sorted = [...covered].sort((a, b) => a - b);

  if (sorted.join(",") !== expected.join(",")) {
    fail(slug, `lessons cover sections [${sorted.join(",")}] but the article has 1..${viSections}`);
  }

  if (covered.join(",") !== sorted.join(",")) {
    fail(slug, "lesson sections are not in ascending order across lessons");
  }

  const unused = [...questionIds].filter((qid) => !usedQuestions.has(qid));
  if (unused.length > 0) {
    fail(slug, `questions never used by any lesson: ${unused.join(", ")}`);
  }
}

console.log(
  `Checked ${slugs.length} topic(s): ${totalQuestions} questions, ` +
    `${topicsWithLessons} with lessons (${totalLessons} mini-lessons).`
);

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.error(`  - ${p}`));
  process.exit(1);
}

console.log("All content valid.");
