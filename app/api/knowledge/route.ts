import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DEFAULT_GROUP } from "@/lib/groups";

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

    return NextResponse.json(topics);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
