import { SupabaseClient } from "@supabase/supabase-js";

// A minimal stand-in for the Supabase client, used only under the local dev
// auth bypass. It implements exactly the query-builder surface the app relies
// on (`.from(table).select/insert/update/delete().eq().order().limit()`) and
// forwards each query to the `/api/dev-db` route, which persists to SQLite.
//
// Auth methods are stubbed because dev mode never calls them (auth is bypassed
// in context/auth.tsx), but they exist so nothing crashes if touched.

interface DevResult {
  data: Record<string, unknown>[] | null;
  count: number | null;
  error: { message: string } | null;
}

class DevQuery implements PromiseLike<DevResult> {
  private op: "select" | "insert" | "update" | "delete" = "select";
  private payload: unknown = null;
  private filters: [string, unknown][] = [];
  private orderBy?: { column: string; ascending: boolean };
  private limitN?: number;
  private wantCount = false;
  private headOnly = false;

  constructor(private table: string) {}

  select(_columns?: string, opts?: { count?: string; head?: boolean }) {
    this.op = "select";
    if (opts?.count) this.wantCount = true;
    if (opts?.head) this.headOnly = true;
    return this;
  }

  insert(payload: unknown) {
    this.op = "insert";
    this.payload = payload;
    return this;
  }

  update(payload: unknown) {
    this.op = "update";
    this.payload = payload;
    return this;
  }

  delete() {
    this.op = "delete";
    return this;
  }

  eq(column: string, value: unknown) {
    this.filters.push([column, value]);
    return this;
  }

  order(column: string, opts?: { ascending?: boolean }) {
    this.orderBy = { column, ascending: opts?.ascending !== false };
    return this;
  }

  limit(n: number) {
    this.limitN = n;
    return this;
  }

  private async run(): Promise<DevResult> {
    try {
      const res = await fetch("/api/dev-db", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          table: this.table,
          op: this.op,
          payload: this.payload,
          filters: this.filters,
          order: this.orderBy,
          limit: this.limitN,
          count: this.wantCount,
          head: this.headOnly,
        }),
      });
      const json = (await res.json()) as {
        data: Record<string, unknown>[] | null;
        count: number | null;
        error: string | null;
      };
      return {
        data: json.data,
        count: json.count,
        error: json.error ? { message: json.error } : null,
      };
    } catch (e) {
      return {
        data: null,
        count: null,
        error: { message: e instanceof Error ? e.message : "dev-db request failed" },
      };
    }
  }

  then<TResult1 = DevResult, TResult2 = never>(
    onfulfilled?: ((value: DevResult) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null
  ): PromiseLike<TResult1 | TResult2> {
    return this.run().then(onfulfilled, onrejected);
  }
}

export function createDevClient(): SupabaseClient {
  const client = {
    from(table: string) {
      return new DevQuery(table);
    },
    auth: {
      async getSession() {
        return { data: { session: null }, error: null };
      },
      onAuthStateChange() {
        return { data: { subscription: { unsubscribe() {} } } };
      },
      async signInWithPassword() {
        return { data: { session: null, user: null }, error: { message: "auth disabled in dev mode" } };
      },
      async signOut() {
        return { error: null };
      },
    },
  };

  return client as unknown as SupabaseClient;
}
