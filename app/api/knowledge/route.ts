import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "knowledge-content");

export interface StaticTopic {
  slug: string;
  title: string;
  description: string;
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
      return { slug: dir.name, ...meta };
    });

    return NextResponse.json(topics);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
