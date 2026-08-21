"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/lang";
import { useProgress } from "@/context/progress";
import {
  flattenLessons,
  lessonKey,
  rankTopics,
  resumeLesson,
  type LessonTopic,
  type TopicBucket,
} from "@/lib/lessons";
import { GROUPS, DEFAULT_GROUP, GROUP_ACCENT } from "@/lib/groups";
import { cn } from "@/lib/utils";

type SortMode = "progress" | "curriculum";

export default function StudyPathPage() {
  const { t, pick } = useLang();
  const { progress, ready } = useProgress();
  const [topics, setTopics] = useState<LessonTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortMode>("progress");
  const [track, setTrack] = useState<string>("all");

  useEffect(() => {
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((data: LessonTopic[]) => setTopics(Array.isArray(data) ? data : []))
      .catch(() => setTopics([]))
      .finally(() => setLoading(false));
  }, []);

  const flat = useMemo(() => flattenLessons(topics), [topics]);
  const completed = useMemo(
    () => new Set(Object.entries(progress.lessons).filter(([, v]) => v.completed).map(([k]) => k)),
    [progress.lessons]
  );

  // The list is sorted around the learner: live work first, the obvious next
  // topic under it, finished work last. "Curriculum" restores the authored order
  // for anyone who wants to browse the course as designed.
  const ranked = useMemo(() => rankTopics(topics, progress), [topics, progress]);
  const ordered = useMemo(() => {
    const base = sort === "progress" ? ranked : ranked.slice().sort((a, b) => {
      const ai = topics.indexOf(a.topic);
      const bi = topics.indexOf(b.topic);

      return ai - bi;
    });

    return track === "all" ? base : base.filter((r) => (r.topic.group ?? DEFAULT_GROUP) === track);
  }, [ranked, sort, track, topics]);

  // "Continue" resumes where the learner left off, not the globally first gap.
  const nextUp = useMemo(() => resumeLesson(topics, progress), [topics, progress]);

  // Open the topic being resumed, once the data has arrived.
  useEffect(() => {
    if (nextUp) setOpen(new Set([nextUp.topic.slug]));
  }, [nextUp?.topic.slug]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggle(slug: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);

      return next;
    });
  }

  if (loading || !ready) return <div className="text-zinc-500 text-sm p-8">{t("common.loading")}</div>;

  const donePct = flat.length > 0 ? Math.round((completed.size / flat.length) * 100) : 0;
  const bucketLabel: Record<TopicBucket, string> = {
    "in-progress": pick("Đang học", "In progress"),
    "not-started": pick("Chưa bắt đầu", "Not started"),
    completed: pick("Đã xong", "Completed"),
  };
  const tracks = GROUPS.filter((g) => topics.some((tp) => (tp.group ?? DEFAULT_GROUP) === g.id));

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{pick("Lộ trình học", "Study path")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
          {pick(
            "Mỗi chủ đề được chia thành các bài nhỏ 5–10 phút, mỗi bài có một bài kiểm tra khởi động trước và một bài kiểm tra sau — cả hai đều ôn lại kiến thức cũ.",
            "Every topic is split into 5–10 minute mini-lessons, each with a warm-up test before and a check test after — both mixing in what you learned earlier."
          )}
        </p>
      </div>

      {/* Overall progress + next up */}
      <div className="card space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-zinc-500">{pick("Đã hoàn thành", "Completed")}</div>
            <div className="text-2xl font-bold">
              {completed.size}
              <span className="text-base font-normal text-zinc-500">/{flat.length}</span>
              <span className="text-sm font-normal text-zinc-500 ml-2">{pick("bài nhỏ", "mini-lessons")}</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-zinc-500">{donePct}%</div>
        </div>

        <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${donePct}%` }} />
        </div>

        {nextUp && (
          <Link
            href={`/learn/${nextUp.topic.slug}/${nextUp.lesson.id}`}
            className="flex items-center gap-3 p-3 -m-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <span className="text-lg shrink-0">▶</span>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-blue-700 dark:text-blue-300">{pick("Học tiếp", "Continue")}</div>
              <div className="text-sm font-medium truncate">{pick(nextUp.lesson.title, nextUp.lesson.titleEn)}</div>
              <div className="text-xs text-zinc-500 truncate">{pick(nextUp.topic.title, nextUp.topic.titleEn)}</div>
            </div>
            <span className="text-sm text-blue-600 dark:text-blue-400 shrink-0">→</span>
          </Link>
        )}
      </div>

      {/* Track filter + sort */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setTrack("all")}
          className={cn(
            "px-3 py-2 sm:py-1.5 rounded-full text-xs font-medium border transition-colors",
            track === "all"
              ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
              : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          )}
        >
          {pick("Tất cả", "All tracks")}
        </button>

        {tracks.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setTrack(g.id)}
            className={cn(
              "px-3 py-2 sm:py-1.5 rounded-full text-xs font-medium border transition-colors",
              track === g.id
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            <span className="mr-1">{g.icon}</span>
            {pick(g.label, g.labelEn)}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setSort((s) => (s === "progress" ? "curriculum" : "progress"))}
          className="ml-auto px-3 py-2 sm:py-1.5 rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {sort === "progress"
            ? pick("Sắp theo: tiến độ của bạn", "Sorted by: your progress")
            : pick("Sắp theo: thứ tự khoá học", "Sorted by: curriculum")}
        </button>
      </div>

      {/* Topics */}
      <div className="space-y-3">
        {ordered.map((entry, idx) => {
          const topic = entry.topic;
          const group = GROUPS.find((g) => g.id === (topic.group ?? DEFAULT_GROUP));
          const accent = GROUP_ACCENT[group?.accent ?? "blue"];
          const isOpen = open.has(topic.slug);
          // Only the progress view groups by bucket, and only at each boundary.
          const heading =
            sort === "progress" && (idx === 0 || ordered[idx - 1].bucket !== entry.bucket)
              ? bucketLabel[entry.bucket]
              : null;

          return (
            <div key={topic.slug} className="space-y-3">
              {heading && (
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500 pt-2 first:pt-0">
                  {heading}
                </div>
              )}

              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(topic.slug)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  <span className="text-lg shrink-0">{group?.icon ?? "◉"}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold truncate">{pick(topic.title, topic.titleEn)}</div>
                    <div className="mt-1.5 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden max-w-xs">
                      <div
                        className={cn("h-full rounded-full", accent.bar)}
                        style={{ width: `${(entry.done / entry.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 shrink-0">
                    {entry.done}/{entry.total}
                  </span>
                  <ChevronDown
                    className={cn("w-5 h-5 text-zinc-500 shrink-0 transition-transform", isOpen && "rotate-180")}
                  />
                </button>

                {isOpen && (
                  <ul className="border-t border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
                    {topic.lessons.map((lesson, i) => {
                      const state = progress.lessons[lessonKey(topic.slug, lesson.id)];
                      const isDone = state?.completed ?? false;
                      const isNext = nextUp?.topic.slug === topic.slug && nextUp?.lesson.id === lesson.id;

                      return (
                        <li key={lesson.id}>
                          <Link
                            href={`/learn/${topic.slug}/${lesson.id}`}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors",
                              isNext && "bg-blue-50 dark:bg-blue-950/30"
                            )}
                          >
                            <span
                              className={cn(
                                "w-6 h-6 rounded-full border flex items-center justify-center text-xs shrink-0",
                                isDone
                                  ? "bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300"
                                  : "border-zinc-300 dark:border-zinc-700 text-zinc-500"
                              )}
                            >
                              {isDone ? "✓" : i + 1}
                            </span>
                            <span className="flex-1 min-w-0 truncate">{pick(lesson.title, lesson.titleEn)}</span>
                            {lesson.recap && (
                              <span className="text-xs text-zinc-500 shrink-0">{pick("ôn tập", "recap")}</span>
                            )}
                            {state && state.bestCheckPct > 0 && (
                              <span className="text-xs font-mono text-zinc-500 shrink-0">{state.bestCheckPct}%</span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            </div>
          );
        })}

        {ordered.length === 0 && (
          <p className="text-sm text-zinc-500 p-4">
            {pick("Không có chủ đề nào trong nhóm này.", "No topics in this track yet.")}
          </p>
        )}
      </div>
    </div>
  );
}
