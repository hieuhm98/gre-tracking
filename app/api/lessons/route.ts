import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DEFAULT_GROUP, getGroup } from "@/lib/groups";
import { type LessonTopic } from "@/lib/lessons";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

/**
 * The mini-lesson curriculum map: every topic that has been split, in study
 * order. Deliberately excludes question bodies — the study player fetches those
 * per topic from /api/knowledge/[slug] only when it needs them.
 */

/**
 * Curriculum order: group first, then the topic's explicit `order` from
 * meta.json, then folder name as a stable tiebreak. Folder names alone stopped
 * working once topics were regrouped — a `17-` topic can now belong to a track
 * whose other members are named `ba-…`.
 */
function byCurriculum<T extends { group: string; order?: number; slug: string }>(a: T, b: T): number {
  const ga = getGroup(a.group)?.order ?? 99;
  const gb = getGroup(b.group)?.order ?? 99;

  if (ga !== gb) return ga - gb;

  const oa = a.order ?? 999;
  const ob = b.order ?? 999;

  if (oa !== ob) return oa - ob;

  return a.slug.localeCompare(b.slug);
}

export async function GET() {
  try {
    const dirs = fs
      .readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    const topics: LessonTopic[] = [];

    for (const dir of dirs) {
      const lessonsPath = path.join(CONTENT_DIR, dir.name, "lessons.json");

      if (!fs.existsSync(lessonsPath)) continue;

      const meta = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, dir.name, "meta.json"), "utf-8"));
      const { lessons } = JSON.parse(fs.readFileSync(lessonsPath, "utf-8"));

      topics.push({
        slug: dir.name,
        group: meta.group ?? DEFAULT_GROUP,
        title: meta.title,
        titleEn: meta.titleEn,
        order: meta.order,
        lessons: lessons ?? [],
      });
    }

    return NextResponse.json(topics.sort(byCurriculum));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
