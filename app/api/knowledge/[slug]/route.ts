import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    const dir = path.join(CONTENT_DIR, params.slug);
    const articlePath = path.join(dir, "article.md");
    const questionsPath = path.join(dir, "questions.json");
    const metaPath = path.join(dir, "meta.json");

    if (!fs.existsSync(articlePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const content = fs.readFileSync(articlePath, "utf-8");
    const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    const questions = fs.existsSync(questionsPath)
      ? JSON.parse(fs.readFileSync(questionsPath, "utf-8"))
      : [];

    return NextResponse.json({ slug: params.slug, content, questions, ...meta });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
