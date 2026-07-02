// Server-only SQLite store used ONLY in local dev mode (auth bypass).
//
// In production the app talks to Supabase. On localhost we run with a mock user
// and no Supabase backend, so daily logs / milestone checks / mock-exam scores
// had nowhere to persist. This module gives those three tables a real, durable
// SQLite home so dev data survives reloads and restarts.
//
// The file lives under `.dev-data/` (git-ignored). Never imported from client
// components — only from the `/api/dev-db` route handler.

import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

export type DevTable = "daily_logs" | "mock_exams" | "milestones";

const ALLOWED_TABLES: DevTable[] = ["daily_logs", "mock_exams", "milestones"];

// Columns whose values are JSON objects and must be (de)serialised as text.
const JSON_COLUMNS: Record<string, string[]> = {
  mock_exams: ["error_log"],
};

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;

  const dir = path.join(process.cwd(), ".dev-data");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "dev.db");

  db = new Database(file);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS daily_logs (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id     TEXT NOT NULL,
      date        TEXT NOT NULL,
      pages_read  INTEGER DEFAULT 0,
      vocab_count INTEGER DEFAULT 0,
      notes       TEXT,
      created_at  TEXT DEFAULT (datetime('now')),
      UNIQUE (user_id, date)
    );

    CREATE TABLE IF NOT EXISTS mock_exams (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    TEXT NOT NULL,
      date       TEXT NOT NULL,
      exam_name  TEXT,
      score      REAL NOT NULL,
      error_log  TEXT,
      notes      TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS milestones (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      TEXT NOT NULL,
      sprint       TEXT NOT NULL,
      kpi_name     TEXT NOT NULL,
      completed_at TEXT DEFAULT (datetime('now')),
      UNIQUE (user_id, sprint, kpi_name)
    );
  `);

  return db;
}

export interface DevQueryRequest {
  table: string;
  op: "select" | "insert" | "update" | "delete";
  payload?: Record<string, unknown> | null;
  filters?: [string, unknown][];
  order?: { column: string; ascending: boolean };
  limit?: number;
  count?: boolean;
  head?: boolean;
}

export interface DevQueryResult {
  data: Record<string, unknown>[] | null;
  count: number | null;
  error: string | null;
}

function assertTable(table: string): DevTable {
  if (!ALLOWED_TABLES.includes(table as DevTable)) {
    throw new Error(`Unknown table: ${table}`);
  }
  return table as DevTable;
}

// SQLite can't bind objects — serialise JSON-ish values to text.
function toStored(value: unknown): unknown {
  if (value === undefined) return null;
  if (value !== null && typeof value === "object") return JSON.stringify(value);
  return value;
}

function parseRow(table: DevTable, row: Record<string, unknown>): Record<string, unknown> {
  for (const col of JSON_COLUMNS[table] ?? []) {
    const v = row[col];
    if (typeof v === "string") {
      try {
        row[col] = JSON.parse(v);
      } catch {
        /* leave as-is */
      }
    }
  }
  return row;
}

function whereClause(filters: [string, unknown][]): { sql: string; values: unknown[] } {
  if (!filters.length) return { sql: "", values: [] };
  const sql = " WHERE " + filters.map(([col]) => `"${col}" = ?`).join(" AND ");
  return { sql, values: filters.map(([, v]) => toStored(v)) };
}

export function runDevQuery(req: DevQueryRequest): DevQueryResult {
  const table = assertTable(req.table);
  const database = getDb();
  const filters = req.filters ?? [];

  try {
    if (req.op === "select") {
      const where = whereClause(filters);

      if (req.count) {
        const row = database
          .prepare(`SELECT COUNT(*) AS c FROM "${table}"${where.sql}`)
          .get(...where.values) as { c: number };
        return { data: null, count: row.c, error: null };
      }

      let sql = `SELECT * FROM "${table}"${where.sql}`;
      if (req.order) {
        sql += ` ORDER BY "${req.order.column}" ${req.order.ascending ? "ASC" : "DESC"}`;
      }
      if (typeof req.limit === "number") sql += ` LIMIT ${Math.max(0, Math.floor(req.limit))}`;

      if (req.head) return { data: [], count: null, error: null };

      const rows = database.prepare(sql).all(...where.values) as Record<string, unknown>[];
      return { data: rows.map((r) => parseRow(table, r)), count: null, error: null };
    }

    if (req.op === "insert") {
      const payload = req.payload ?? {};
      const cols = Object.keys(payload);
      if (!cols.length) throw new Error("insert requires a payload");
      const placeholders = cols.map(() => "?").join(", ");
      database
        .prepare(
          `INSERT INTO "${table}" (${cols.map((c) => `"${c}"`).join(", ")}) VALUES (${placeholders})`
        )
        .run(...cols.map((c) => toStored(payload[c])));
      return { data: null, count: null, error: null };
    }

    if (req.op === "update") {
      const payload = req.payload ?? {};
      const cols = Object.keys(payload);
      if (!cols.length) throw new Error("update requires a payload");
      const where = whereClause(filters);
      const setSql = cols.map((c) => `"${c}" = ?`).join(", ");
      database
        .prepare(`UPDATE "${table}" SET ${setSql}${where.sql}`)
        .run(...cols.map((c) => toStored(payload[c])), ...where.values);
      return { data: null, count: null, error: null };
    }

    if (req.op === "delete") {
      const where = whereClause(filters);
      database.prepare(`DELETE FROM "${table}"${where.sql}`).run(...where.values);
      return { data: null, count: null, error: null };
    }

    throw new Error(`Unsupported op: ${req.op}`);
  } catch (e) {
    return { data: null, count: null, error: e instanceof Error ? e.message : String(e) };
  }
}
