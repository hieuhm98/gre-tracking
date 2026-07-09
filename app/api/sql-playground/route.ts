import { NextResponse } from "next/server";
import { getSchema, runQuery } from "@/lib/server/wordBankDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET  /api/sql-playground        → table structures for the "schema" side panel
// POST /api/sql-playground {sql}  → run one statement against an in-memory clone
//
// Safe to expose: queries run against a throwaway copy of the committed
// read-only word bank, so nothing the user types can mutate stored data.

export async function GET() {
  try {
    return NextResponse.json({ tables: getSchema() });
  } catch (e) {
    return NextResponse.json(
      { tables: [], error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  let body: { sql?: string };
  try {
    body = (await request.json()) as { sql?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof body.sql !== "string") {
    return NextResponse.json({ error: "Missing `sql` string" }, { status: 400 });
  }

  return NextResponse.json(runQuery(body.sql));
}
