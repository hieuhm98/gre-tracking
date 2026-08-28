"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/lang";
import { useProgress } from "@/context/progress";
import { DEFAULT_GROUP, GROUPS, GROUP_ACCENT } from "@/lib/groups";
import { MIN_POOL } from "@/lib/exam";
import { PASS_PCT } from "@/lib/progress";
import { cn } from "@/lib/utils";

interface CatalogueTopic {
  slug: string;
  group?: string;
  questionCount?: number;
}

/** One card per curriculum track, each linking to that track's final exam. */
export default function ExamIndexPage() {
  const { t, pick } = useLang();
  const { progress, ready } = useProgress();
  const [topics, setTopics] = useState<CatalogueTopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/knowledge")
      .then((r) => r.json())
      .then((data: CatalogueTopic[]) => {
        setTopics(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const tracks = useMemo(
    () =>
      GROUPS.map((group) => {
        const mine = topics.filter((tp) => (tp.group ?? DEFAULT_GROUP) === group.id);

        return {
          group,
          topics: mine.length,
          pool: mine.reduce((sum, tp) => sum + (tp.questionCount ?? 0), 0),
        };
      }).filter((row) => row.topics > 0),
    [topics]
  );

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("exam.indexTitle")}</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{t("exam.indexSubtitle")}</p>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">{t("common.loading")}</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {tracks.map(({ group, topics: topicCount, pool }) => {
            const accent = GROUP_ACCENT[group.accent];
            const record = ready ? progress.exams[group.id] : undefined;
            const ready4Exam = pool >= MIN_POOL;

            const card = (
              <>
                <div className="flex items-start gap-3">
                  <span className={cn("text-xl shrink-0", accent.text)}>{group.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold">{pick(group.label, group.labelEn)}</h2>
                      {record?.passed && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded border bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                          {t("exam.passed")}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      {topicCount} {t("exam.topicsCovered")} · {pool} {t("exam.pool")}
                    </p>
                  </div>
                </div>

                {record && record.attempts > 0 ? (
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-500">
                        {t("exam.best")} · {record.attempts} {t("exam.attempts").toLowerCase()}
                      </span>
                      <span className="font-semibold tabular-nums">{record.bestPct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          record.bestPct >= PASS_PCT ? "bg-green-500" : accent.bar
                        )}
                        style={{ width: `${record.bestPct}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-xs text-zinc-500">
                    {ready4Exam ? t("exam.neverTaken") : t("exam.poolTooSmall")}
                  </p>
                )}
              </>
            );

            if (!ready4Exam) {
              return (
                <div key={group.id} className="card opacity-60">
                  {card}
                </div>
              );
            }

            return (
              <Link
                key={group.id}
                href={`/exam/${group.id}`}
                className="card hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                {card}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
