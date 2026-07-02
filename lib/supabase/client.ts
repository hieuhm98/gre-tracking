import { createBrowserClient } from "@supabase/ssr";

// Fall back to harmless placeholder values so the client can be constructed even
// when Supabase env vars are absent (e.g. local dev with auth bypass). Real
// network calls will simply resolve with an error instead of crashing the app.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:54321";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "local-anon-key-placeholder";

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
