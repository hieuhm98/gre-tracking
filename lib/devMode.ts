// Local development auth bypass.
//
// On localhost (or when NEXT_PUBLIC_SKIP_AUTH=true) we skip Supabase login
// entirely and run the app with a mock user so the learning content can be
// used offline without configuring Supabase. In production the real auth flow
// is used untouched.

export const MOCK_USER = {
  id: "00000000-0000-0000-0000-000000000000",
  email: "dev@localhost",
  aud: "authenticated",
  role: "authenticated",
  app_metadata: { provider: "dev" },
  user_metadata: { name: "Local Dev" },
  created_at: new Date(0).toISOString(),
} as const;

/**
 * Returns true when we should bypass Supabase auth.
 * - Explicit override: NEXT_PUBLIC_SKIP_AUTH = "true" | "false"
 * - Otherwise: any localhost-style hostname in the browser.
 * - During SSR with no override: fall back to non-production.
 */
export function isDevBypass(): boolean {
  const flag = process.env.NEXT_PUBLIC_SKIP_AUTH;
  if (flag === "true") return true;
  if (flag === "false") return false;

  if (typeof window !== "undefined") {
    const h = window.location.hostname;
    return (
      h === "localhost" ||
      h === "127.0.0.1" ||
      h === "0.0.0.0" ||
      h === "::1" ||
      h.endsWith(".local")
    );
  }

  return process.env.NODE_ENV !== "production";
}
