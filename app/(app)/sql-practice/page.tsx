"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/context/lang";
import { cn } from "@/lib/utils";

interface Column {
  name: string;
  type: string;
  pk: boolean;
  notnull: boolean;
}
interface TableSchema {
  name: string;
  rowCount: number;
  columns: Column[];
}
interface QueryResult {
  columns: string[];
  rows: unknown[][];
  rowCount: number;
  truncated: boolean;
  changes: number | null;
  elapsedMs: number;
  error: string | null;
}

const EXAMPLES: { vi: string; en: string; sql: string }[] = [
  {
    vi: "Xem 20 từ đầu tiên",
    en: "First 20 words",
    sql: "SELECT word, pronunciation, meaning_vi\nFROM words\nLIMIT 20;",
  },
  {
    vi: "Đếm từ theo loại từ",
    en: "Count words by part of speech",
    sql: "SELECT p.name_en, COUNT(*) AS total\nFROM words w\nJOIN parts_of_speech p ON p.code = w.pos_code\nGROUP BY p.code\nORDER BY total DESC;",
  },
  {
    vi: "Tìm từ bắt đầu bằng 'A'",
    en: "Words starting with 'A'",
    sql: "SELECT word, meaning_en\nFROM words\nWHERE first_letter = 'A'\nORDER BY word\nLIMIT 25;",
  },
  {
    vi: "Từ dài nhất",
    en: "Longest words",
    sql: "SELECT word, length\nFROM words\nORDER BY length DESC\nLIMIT 10;",
  },
  {
    vi: "Tỉ lệ nhớ theo từ (JOIN)",
    en: "Recall rate per word (JOIN)",
    sql: "SELECT w.word,\n       COUNT(r.id)               AS reviews,\n       SUM(r.remembered)          AS remembered,\n       ROUND(100.0 * SUM(r.remembered) / COUNT(r.id), 0) AS pct\nFROM words w\nJOIN word_reviews r ON r.word_id = w.id\nGROUP BY w.id\nHAVING reviews >= 3\nORDER BY pct ASC, reviews DESC\nLIMIT 15;",
  },
];

const STORAGE_KEY = "sql-practice-query";

export default function SqlPracticePage() {
  const { pick } = useLang();
  const [schema, setSchema] = useState<TableSchema[]>([]);
  const [schemaError, setSchemaError] = useState<string | null>(null);
  const [sql, setSql] = useState(EXAMPLES[0].sql);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [running, setRunning] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setSql(saved);
    fetch("/api/sql-playground")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setSchemaError(d.error);
        setSchema(d.tables ?? []);
      })
      .catch((e) => setSchemaError(String(e)));
  }, []);

  const run = useCallback(async () => {
    setRunning(true);
    window.localStorage.setItem(STORAGE_KEY, sql);
    try {
      const res = await fetch("/api/sql-playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql }),
      });
      setResult((await res.json()) as QueryResult);
    } catch (e) {
      setResult({
        columns: [],
        rows: [],
        rowCount: 0,
        truncated: false,
        changes: null,
        elapsedMs: 0,
        error: String(e),
      });
    } finally {
      setRunning(false);
    }
  }, [sql]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      run();
    }
  };

  function insertSnippet(text: string) {
    setSql(text);
    taRef.current?.focus();
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">{pick("Luyện tập SQL", "SQL Practice")}</h1>
        <p className="text-zinc-400 text-sm mt-1">
          {pick(
            "Viết truy vấn SQL và chạy trên kho từ vựng tiếng Anh. Mọi truy vấn chạy trên bản sao trong bộ nhớ — dữ liệu gốc không bị thay đổi.",
            "Write SQL and run it against the English word bank. Every query runs on an in-memory copy — the stored data is never changed."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        {/* Editor + results */}
        <div className="space-y-4 min-w-0">
          <div className="card p-0 overflow-hidden">
            <textarea
              ref={taRef}
              value={sql}
              onChange={(e) => setSql(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              rows={8}
              className="w-full bg-zinc-950 text-zinc-100 font-mono text-sm p-4 resize-y focus:outline-none border-b border-zinc-800"
              placeholder="SELECT * FROM words LIMIT 10;"
            />
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900">
              <span className="text-xs text-zinc-500">
                {pick("Nhấn", "Press")}{" "}
                <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-300">
                  Ctrl+Enter
                </kbd>{" "}
                {pick("để chạy", "to run")}
              </span>
              <button className="btn-primary" onClick={run} disabled={running}>
                {running ? pick("Đang chạy...", "Running...") : pick("▶ Chạy", "▶ Run")}
              </button>
            </div>
          </div>

          {/* Example queries */}
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.en}
                onClick={() => insertSnippet(ex.sql)}
                className="text-xs px-2.5 py-1.5 rounded-lg bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700 border border-zinc-700/60 transition-colors"
              >
                {pick(ex.vi, ex.en)}
              </button>
            ))}
          </div>

          {/* Result */}
          {result && <ResultView result={result} pick={pick} />}
        </div>

        {/* Schema side panel */}
        <aside className="space-y-3 lg:sticky lg:top-6 self-start">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            {pick("Cấu trúc bảng", "Table structures")}
          </div>
          {schemaError && (
            <div className="text-xs text-red-400 card">{schemaError}</div>
          )}
          {schema.map((t) => (
            <div key={t.name} className="card p-3">
              <button
                onClick={() => insertSnippet(`SELECT * FROM ${t.name} LIMIT 20;`)}
                className="flex items-baseline justify-between w-full text-left group"
              >
                <span className="font-mono text-sm text-blue-300 group-hover:text-blue-200">
                  {t.name}
                </span>
                <span className="text-[11px] text-zinc-500">
                  {t.rowCount.toLocaleString()} {pick("dòng", "rows")}
                </span>
              </button>
              <div className="mt-2 space-y-0.5">
                {t.columns.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-baseline justify-between text-xs font-mono"
                  >
                    <span className="text-zinc-300">
                      {c.name}
                      {c.pk && <span className="text-amber-400/80 ml-1">PK</span>}
                    </span>
                    <span className="text-zinc-600">{c.type || "—"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

function ResultView({
  result,
  pick,
}: {
  result: QueryResult;
  pick: (vi: string, en: string) => string;
}) {
  if (result.error) {
    return (
      <div className="card border-red-900/60 bg-red-950/20">
        <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
          {pick("Lỗi", "Error")}
        </div>
        <pre className="text-sm text-red-300 whitespace-pre-wrap font-mono">
          {result.error}
        </pre>
      </div>
    );
  }

  // Non-SELECT statement (INSERT/UPDATE/CREATE/...)
  if (result.columns.length === 0) {
    return (
      <div className="card text-sm text-zinc-300">
        {result.changes !== null
          ? pick(
              `Thực thi thành công · ${result.changes} dòng bị ảnh hưởng`,
              `Statement executed · ${result.changes} row(s) affected`
            )
          : pick("Thực thi thành công.", "Statement executed.")}
        <span className="text-zinc-600 ml-2">
          ({result.elapsedMs.toFixed(1)} ms)
        </span>
      </div>
    );
  }

  return (
    <div className="card p-0 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 text-xs text-zinc-500">
        <span>
          {result.rowCount.toLocaleString()} {pick("dòng", "rows")}
          {result.truncated &&
            pick(` · hiển thị ${result.rows.length}`, ` · showing ${result.rows.length}`)}
        </span>
        <span>{result.elapsedMs.toFixed(1)} ms</span>
      </div>
      <div className="overflow-auto max-h-[60vh]">
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 bg-zinc-900">
            <tr>
              {result.columns.map((c, i) => (
                <th
                  key={i}
                  className="text-left font-semibold text-zinc-300 px-3 py-2 border-b border-zinc-800 whitespace-nowrap"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.rows.map((row, ri) => (
              <tr key={ri} className="hover:bg-zinc-800/40">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      "px-3 py-1.5 border-b border-zinc-800/60 font-mono text-xs align-top",
                      cell === null ? "text-zinc-600 italic" : "text-zinc-200"
                    )}
                  >
                    {cell === null ? "NULL" : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
