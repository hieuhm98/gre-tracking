"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SupabaseClient, Session, User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { createDevClient } from "@/lib/supabase/devClient";
import { isDevBypass, MOCK_USER } from "@/lib/devMode";

const supabase = createClient();
// In dev mode, reads/writes go to a local SQLite store via /api/dev-db instead
// of Supabase, so daily logs / milestones / mock exams persist offline.
const devSupabase = createDevClient();

interface AuthContextType {
  supabase: SupabaseClient;
  user: User | null;
  session: Session | null;
  loading: boolean;
  /** True when running with the localhost auth bypass. */
  devMode: boolean;
}

const AuthContext = createContext<AuthContextType>({
  supabase,
  user: null,
  session: null,
  loading: true,
  devMode: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    // Local dev: skip Supabase auth entirely and run with a mock user.
    if (isDevBypass()) {
      setDevMode(true);
      setSession(null);
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const user = devMode ? (MOCK_USER as unknown as User) : session?.user ?? null;
  const client = devMode ? devSupabase : supabase;

  return (
    <AuthContext.Provider value={{ supabase: client, user, session, loading, devMode }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
