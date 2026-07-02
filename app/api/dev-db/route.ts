import { NextResponse } from "next/server";
import { runDevQuery, type DevQueryRequest } from "@/lib/server/devDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// This endpoint only exists to back the local dev auth-bypass. Refuse to serve
// it in a real production deployment so it can never leak data or accept writes.
function devAllowed(): boolean {
  if (process.env.NEXT_PUBLIC_SKIP_AUTH === "true") return true;
  if (process.env.NEXT_PUBLIC_SKIP_AUTH === "false") return false;
  return process.env.NODE_ENV !== "production";
}

export async function POST(request: Request) {
  if (!devAllowed()) {
    return NextResponse.json({ data: null, count: null, error: "not found" }, { status: 404 });
  }

  let body: DevQueryRequest;
  try {
    body = (await request.json()) as DevQueryRequest;
  } catch {
    return NextResponse.json(
      { data: null, count: null, error: "invalid JSON body" },
      { status: 400 }
    );
  }

  const result = runDevQuery(body);
  return NextResponse.json(result);
}
