import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DEFAULT_GROUP } from "@/lib/groups";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const dir = path.join(CONTENT_DIR, params.slug);
    const articlePath = path.join(dir, "article.md");
    const articleEnPath = path.join(dir, "article.en.md");
    const questionsPath = path.join(dir, "questions.json");
    const metaPath = path.join(dir, "meta.json");

    if (!fs.existsSync(articlePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const content = fs.readFileSync(articlePath, "utf-8");
    const contentEn = fs.existsSync(articleEnPath)
      ? fs.readFileSync(articleEnPath, "utf-8")
      : null;
    const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    const questions = fs.existsSync(questionsPath)
      ? JSON.parse(fs.readFileSync(questionsPath, "utf-8"))
      : [];

    return NextResponse.json({
      slug: params.slug,
      group: meta.group ?? DEFAULT_GROUP,
      content,
      contentEn,
      questions,
      ...meta,
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
