import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DEFAULT_GROUP, getGroup } from "@/lib/groups";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

export interface StaticTopic {
  slug: string;
  group: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  /** Number of quiz questions — lets the UI show "answered / total" progress. */
  questionCount: number;
  /** Position within the group's curriculum; see byCurriculum below. */
  order?: number;
}

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


function countQuestions(slug: string): number {
  try {
    const parsed = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, slug, "questions.json"), "utf-8"));

    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

export async function GET() {
  try {
    const dirs = fs
      .readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    const topics: StaticTopic[] = dirs.map((dir) => {
      const metaPath = path.join(CONTENT_DIR, dir.name, "meta.json");
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      return {
        slug: dir.name,
        group: meta.group ?? DEFAULT_GROUP,
        ...meta,
        questionCount: countQuestions(dir.name),
      };
    });

    return NextResponse.json(topics.sort(byCurriculum));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
