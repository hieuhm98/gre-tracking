import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DEFAULT_GROUP } from "@/lib/groups";
import { type LessonTopic } from "@/lib/lessons";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

/**
 * The mini-lesson curriculum map: every topic that has been split, in study
 * order. Deliberately excludes question bodies — the study player fetches those
 * per topic from /api/knowledge/[slug] only when it needs them.
 */
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
        lessons: lessons ?? [],
      });
    }

    return NextResponse.json(topics);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
