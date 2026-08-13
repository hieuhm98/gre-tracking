import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { NextResponse } from "next/server";
import { emptyProgress, mergeProgress, normalize, type ProgressData } from "@/lib/progress";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_FILE = join(process.cwd(), "data", "progress.json");
const PUBLIC_FILE = join(process.cwd(), "public", "progress.json");

/**
 * Vercel's runtime filesystem is read-only (only /tmp is writable, and it is
 * wiped between invocations), so file write-back is disabled there and the
 * browser's localStorage carries the progress alone. Any host with a real disk
 * — local dev, Railway/Render/Fly, a VPS, Docker — persists the snapshot.
 * Set PROGRESS_FILE_WRITES=off to force it off anywhere.
 */
const FILE_WRITES_ENABLED = !process.env.VERCEL && process.env.PROGRESS_FILE_WRITES !== "off";

async function readSnapshot(): Promise<ProgressData> {
  try {
    return normalize(JSON.parse(await readFile(DATA_FILE, "utf8")));
  } catch {
    return emptyProgress();
  }
}

async function writeSnapshot(data: ProgressData): Promise<boolean> {
  if (!FILE_WRITES_ENABLED) return false;

  const body = `${JSON.stringify(data, null, 2)}\n`;

  try {
    await mkdir(dirname(DATA_FILE), { recursive: true });
    await writeFile(DATA_FILE, body);
  } catch {
    return false;
  }

  // Keep the served seed in step with the committed file so a browser that
  // clears its storage before the next build still gets the latest state.
  try {
    await mkdir(dirname(PUBLIC_FILE), { recursive: true });
    await writeFile(PUBLIC_FILE, body);
  } catch {
    // Non-fatal: data/progress.json is the one that gets committed.
  }

  return true;
}

export async function GET() {
  return NextResponse.json({ writable: FILE_WRITES_ENABLED, progress: await readSnapshot() });
}

export async function PUT(request: Request) {
  let incoming: ProgressData;

  try {
    incoming = normalize(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const merged = mergeProgress(await readSnapshot(), incoming);
  const persisted = await writeSnapshot(merged);

  return NextResponse.json({ writable: FILE_WRITES_ENABLED, persisted, progress: merged });
}
