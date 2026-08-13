#!/usr/bin/env node
// Copies the committed progress snapshot into public/ so it ships with the build.
//
// Run automatically by `yarn dev` and `yarn build` (see package.json), which is
// what makes progress survive a redeploy: whatever is in data/progress.json when
// you build becomes /progress.json in the new bundle, and a browser with no
// stored progress seeds itself from it.
//
// public/progress.json is generated — it is git-ignored; data/progress.json is
// the committed one.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "data", "progress.json");
const target = join(root, "public", "progress.json");

const EMPTY = { version: 1, updatedAt: new Date(0).toISOString(), topics: {}, reviews: [] };

async function readSnapshot() {
  try {
    const raw = await readFile(source, "utf8");
    const parsed = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("snapshot is not an object");
    }

    return parsed;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("[progress] no data/progress.json yet — seeding an empty one");
      await mkdir(dirname(source), { recursive: true });
      await writeFile(source, `${JSON.stringify(EMPTY, null, 2)}\n`);

      return EMPTY;
    }

    console.warn(`[progress] data/progress.json is unreadable (${err.message}) — shipping an empty seed`);

    return EMPTY;
  }
}

const snapshot = await readSnapshot();
const topics = Object.keys(snapshot.topics ?? {}).length;
const reviews = Array.isArray(snapshot.reviews) ? snapshot.reviews.length : 0;

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(snapshot, null, 2)}\n`);

console.log(`[progress] data/progress.json → public/progress.json (${topics} topics, ${reviews} review sessions)`);
