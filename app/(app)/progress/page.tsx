"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/lang";
import { useProgress } from "@/context/progress";
import { normalize, overallStats, topicStats } from "@/lib/progress";
import { GROUPS, DEFAULT_GROUP, GROUP_ACCENT } from "@/lib/groups";
import { cn } from "@/lib/utils";

interface StaticTopic {
  slug: string;
  group: string;
  title: string;
  titleEn?: string;
  questionCount?: number;
}

function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">{value}</div>
      {hint && <div className="text-xs text-zinc-500 mt-0.5">{hint}</div>}
    </div>
  );
}

export default function ProgressPage() {
  const { t, pick, lang } = useLang();
  const { progress, ready, writable, lastSyncedAt, replaceAll, reset, flush } = useProgress();
  const [topics, setTopics] = useState<StaticTopic[]>([]);
  const [lessonTotal, setLessonTotal] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/knowledge")
      .then((r) => r.json())
      .then((data: StaticTopic[]) => setTopics(data ?? []))
      .catch(() => setTopics([]));

    fetch("/api/lessons")
      .then((r) => r.json())
      .then((data: { lessons: unknown[] }[]) =>
        setLessonTotal(Array.isArray(data) ? data.reduce((n, tp) => n + (tp.lessons?.length ?? 0), 0) : 0)
      )
      .catch(() => setLessonTotal(0));
  }, []);

  const stats = useMemo(() => overallStats(progress), [progress]);

  // Only topics with something recorded — the full catalogue lives on /knowledge.
  const startedTopics = useMemo(() => {
    const known = new Map(topics.map((tp) => [tp.slug, tp]));

    return Object.keys(progress.topics)
      .map((slug) => {
        const topic = known.get(slug);
        const stat = topicStats(progress, slug, topic?.questionCount);

        return { slug, topic, stat };
      })
      .filter((row) => row.stat.started)
      .sort((a, b) => (progress.topics[b.slug]?.updatedAt ?? "").localeCompare(progress.topics[a.slug]?.updatedAt ?? ""));
  }, [progress, topics]);

  function handleExport() {
    const stamp = new Date().toISOString().slice(0, 10);
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" })
    );
    const link = document.createElement("a");

    link.href = url;
    link.download = `progress-${stamp}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Revoking synchronously can cancel the download in some browsers.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function handleImport(file: File) {
    try {
      const parsed = JSON.parse(await file.text());

      replaceAll(normalize(parsed));
      setNotice(t("progress.imported"));
      await flush();
    } catch {
      setNotice(t("progress.importFailed"));
    }
  }

  function handleReset() {
    if (window.confirm(t("progress.resetConfirm"))) reset();
  }

  const dateFmt = new Intl.DateTimeFormat(lang === "vi" ? "vi-VN" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  if (!ready) return <div className="text-zinc-500 text-sm p-8">{t("common.loading")}</div>;

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{t("progress.title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">{t("progress.subtitle")}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatTile
          label={t("progress.streak")}
          value={`${stats.streak} ${t("progress.streakDays")}`}
          hint={`${stats.activeDays} ${t("progress.activeDays")}`}
        />
        <StatTile
          label={pick("Bài nhỏ hoàn thành", "Mini-lessons done")}
          value={`${stats.lessonsCompleted}${lessonTotal ? `/${lessonTotal}` : ""}`}
          hint={`${stats.topicsCompleted}/${topics.length || "—"} ${pick("chủ đề", "topics")}`}
        />
        <StatTile label={t("progress.questionsAnswered")} value={String(stats.questionsAnswered)} />
        <StatTile label={t("progress.avgScore")} value={`${stats.avgBestPct}%`} />
      </div>

      {/* By topic */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t("progress.byTopic")}</h2>

        {startedTopics.length === 0 ? (
          <div className="card text-sm text-zinc-500">{t("progress.notStarted")}</div>
        ) : (
          <div className="space-y-2">
            {startedTopics.map(({ slug, topic, stat }) => {
              const group = GROUPS.find((g) => g.id === (topic?.group ?? DEFAULT_GROUP));
              const accent = GROUP_ACCENT[group?.accent ?? "blue"];
              const pct = stat.total > 0 ? Math.round((stat.answered / stat.total) * 100) : 0;

              return (
                <Link
                  key={slug}
                  href={`/knowledge/${slug}`}
                  className="card block hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base shrink-0">{group?.icon ?? "◉"}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                        {topic ? pick(topic.title, topic.titleEn) : slug}
                      </div>
                      <div className="mt-1.5 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full transition-all", accent.bar)} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
                        {stat.answered}/{stat.total || "?"}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {stat.attempts > 0
                          ? `${t("progress.best")} ${stat.bestPct}% · ${stat.attempts} ${t("progress.attempts")}`
                          : "—"}
                      </div>
                    </div>
                    {stat.completed && <span className="text-green-600 dark:text-green-400 shrink-0">✓</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Review history */}
      <section className="space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-lg font-semibold">{t("progress.recentSessions")}</h2>
          {stats.reviewSessions > 0 && (
            <span className="text-xs text-zinc-500">
              {stats.reviewSessions} · {t("progress.reviewAccuracy")} {stats.reviewAccuracy}%
            </span>
          )}
        </div>

        {progress.reviews.length === 0 ? (
          <div className="card text-sm text-zinc-500">{t("progress.noSessions")}</div>
        ) : (
          // Spelled out rather than `.card`: its p-5 beats any p-0 utility, and
          // the rows need to own their own padding for the divider to reach.
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800">
            {progress.reviews.slice(0, 15).map((r) => {
              const pct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;

              return (
                <div key={r.at} className="flex items-center gap-3 px-4 py-2.5 text-sm">
                  <span className="text-xs text-zinc-500 font-mono shrink-0 w-40">{dateFmt.format(new Date(r.at))}</span>
                  <span className="flex flex-wrap gap-1 flex-1 min-w-0">
                    {r.groups.map((id) => {
                      const g = GROUPS.find((x) => x.id === id);

                      return (
                        <span key={id} className="text-xs text-zinc-500">
                          {g ? `${g.icon} ${pick(g.label, g.labelEn)}` : id}
                        </span>
                      );
                    })}
                  </span>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300 shrink-0">
                    {r.correct}/{r.total}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-medium shrink-0 w-10 text-right",
                      pct >= 80
                        ? "text-green-600 dark:text-green-400"
                        : pct >= 50
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Storage + backup */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">{t("progress.storage")}</h2>

        <div className="card space-y-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded border",
                writable
                  ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"
              )}
            >
              {writable ? t("progress.storageSynced") : t("progress.storageLocal")}
            </span>
            {writable && lastSyncedAt && (
              <span className="text-xs text-zinc-500">
                {t("progress.lastSynced")}: {dateFmt.format(new Date(lastSyncedAt))}
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-500 leading-relaxed">
            {writable ? t("progress.storageSyncedHint") : t("progress.storageLocalHint")}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <button onClick={handleExport} className="btn-secondary text-sm">
              ↓ {t("progress.export")}
            </button>
            <button onClick={() => fileInput.current?.click()} className="btn-secondary text-sm">
              ↑ {t("progress.import")}
            </button>
            <button
              onClick={handleReset}
              className="text-sm px-3 py-1.5 rounded-lg border border-red-300 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            >
              {t("progress.reset")}
            </button>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) void handleImport(file);

                e.target.value = "";
              }}
            />
          </div>

          {notice && <p className="text-xs text-zinc-600 dark:text-zinc-400">{notice}</p>}
        </div>
      </section>
    </div>
  );
}
