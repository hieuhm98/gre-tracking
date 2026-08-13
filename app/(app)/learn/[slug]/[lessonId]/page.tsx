"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/context/lang";
import { useProgress } from "@/context/progress";
import ArticleRenderer from "@/components/knowledge/ArticleRenderer";
import BilingualArticle from "@/components/knowledge/BilingualArticle";
import LessonTest, { type TestQuestion } from "@/components/learn/LessonTest";
import { type Question } from "@/components/knowledge/QuizBlock";
import {
  lessonKey,
  nextLesson,
  questionKey,
  reviewCandidates,
  sliceSections,
  type Lesson,
  type LessonTopic,
} from "@/lib/lessons";
import { PASS_PCT, rankForReview, recordLessonPhase, type AnsweredQuestion } from "@/lib/progress";
import { cn } from "@/lib/utils";

/** How many earlier-lesson questions each phase mixes in. */
const WARMUP_REVIEW = 2;
const CHECK_REVIEW = 2;
/** Questions drawn from the whole topic for a recap lesson's check. */
const RECAP_CHECK = 5;

type Phase = "warmup" | "read" | "check" | "done";

interface TopicData {
  content: string;
  contentEn?: string | null;
  questions: Question[];
}

export default function LessonPlayerPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const { pick, lang, t, dual } = useLang();
  const { progress, ready, update } = useProgress();

  const [topics, setTopics] = useState<LessonTopic[]>([]);
  const [topicData, setTopicData] = useState<TopicData | null>(null);
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<Phase>("warmup");
  const [warmupPct, setWarmupPct] = useState<number | null>(null);
  const [checkPct, setCheckPct] = useState<number | null>(null);
  const [built, setBuilt] = useState(false);
  const [warmupQs, setWarmupQs] = useState<TestQuestion[]>([]);
  const [checkQs, setCheckQs] = useState<TestQuestion[]>([]);

  const key = lessonKey(slug, lessonId);
  const topic = topics.find((tp) => tp.slug === slug) ?? null;
  const lesson: Lesson | null = topic?.lessons.find((l) => l.id === lessonId) ?? null;
  const state = progress.lessons[key];

  // Curriculum map + this topic's content and questions.
  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [map, data] = await Promise.all([
        fetch("/api/lessons").then((r) => r.json()).catch(() => []),
        fetch(`/api/knowledge/${slug}`).then((r) => (r.ok ? r.json() : null)).catch(() => null),
      ]);

      if (cancelled) return;

      setTopics(Array.isArray(map) ? map : []);
      setTopicData(data);
      setLoading(false);
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Build the warm-up and check sets once — they must not reshuffle mid-session.
  useEffect(() => {
    if (built || loading || !ready || !lesson || !topicData) return;

    let cancelled = false;

    async function build() {
      const activeLesson = lesson as Lesson;
      const own = topicData!.questions;
      const ownById = new Map(own.map((q) => [q.id, q]));

      const candidates = reviewCandidates(topics, progress, { excludeKey: key });
      const otherSlugs = Array.from(new Set(candidates.map((c) => c.slug))).filter((s) => s !== slug);

      const fetched = await Promise.all(
        otherSlugs.map((s) =>
          fetch(`/api/knowledge/${s}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => [s, (d?.questions ?? []) as Question[]] as const)
            .catch(() => [s, [] as Question[]] as const)
        )
      );

      if (cancelled) return;

      const byslug: Record<string, Question[]> = { [slug]: own };
      fetched.forEach(([s, qs]) => {
        byslug[s] = qs;
      });

      const toTestQuestion = (s: string, id: string, review: boolean): TestQuestion | null => {
        const source = s === slug ? ownById.get(id) : byslug[s]?.find((q) => q.id === id);

        return source ? { ...source, slug: s, key: questionKey(s, id), review } : null;
      };

      const rankedReview = rankForReview(progress, candidates);
      const reviewQuestions = rankedReview
        .map((c) => toTestQuestion(c.slug, c.questionId, true))
        .filter((q): q is TestQuestion => q !== null);

      // Warm-up: recall from earlier lessons, then a preview of what's coming.
      const warmReview = reviewQuestions.slice(0, WARMUP_REVIEW);
      const previewPool = activeLesson.questionIds.length > 0 ? activeLesson.questionIds : own.map((q) => q.id);
      const previewCount = warmReview.length > 0 ? 1 : 2;
      const preview = previewPool
        .slice(0, previewCount)
        .map((id) => toTestQuestion(slug, id, false))
        .filter((q): q is TestQuestion => q !== null);

      // Check: this lesson's own questions (or a topic-wide draw for a recap),
      // plus review questions the warm-up did not already use.
      let checkOwn: TestQuestion[];

      if (activeLesson.questionIds.length > 0) {
        checkOwn = activeLesson.questionIds
          .map((id) => toTestQuestion(slug, id, false))
          .filter((q): q is TestQuestion => q !== null);
      } else {
        const topicPool = own.map((q) => ({ key: questionKey(slug, q.id), id: q.id }));
        checkOwn = rankForReview(progress, topicPool)
          .slice(0, RECAP_CHECK)
          .map((item) => toTestQuestion(slug, item.id, false))
          .filter((q): q is TestQuestion => q !== null);
      }

      const usedInWarmup = new Set(warmReview.map((q) => q.key));
      const checkReview = reviewQuestions.filter((q) => !usedInWarmup.has(q.key)).slice(0, CHECK_REVIEW);

      setWarmupQs([...warmReview, ...preview]);
      setCheckQs([...checkOwn, ...checkReview]);
      setBuilt(true);
    }

    void build();

    return () => {
      cancelled = true;
    };
    // Intentionally built once per lesson: `progress` changes as answers are
    // recorded, and rebuilding mid-session would swap the questions underfoot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [built, loading, ready, lesson, topicData, slug, key]);

  const finishWarmup = useCallback(
    (answered: AnsweredQuestion[], pct: number) => {
      setWarmupPct(pct);
      update((prev) => recordLessonPhase(prev, key, "warmup", pct, answered));
      setPhase("read");
    },
    [key, update]
  );

  const finishCheck = useCallback(
    (answered: AnsweredQuestion[], pct: number) => {
      setCheckPct(pct);
      update((prev) => recordLessonPhase(prev, key, "check", pct, answered));
      setPhase("done");
    },
    [key, update]
  );

  const body = useMemo(() => {
    if (!topicData || !lesson) return "";

    const source = lang === "en" && topicData.contentEn ? topicData.contentEn : topicData.content;

    return sliceSections(source, lesson.sections);
  }, [topicData, lesson, lang]);

  if (loading || !ready) return <div className="text-zinc-500 text-sm p-8">{t("common.loading")}</div>;

  if (!topic || !lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-500">{pick("Không tìm thấy bài học.", "Mini-lesson not found.")}</p>
        <Link href="/learn" className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">
          {pick("← Lộ trình học", "← Study path")}
        </Link>
      </div>
    );
  }

  const position = topic.lessons.findIndex((l) => l.id === lesson.id) + 1;
  const upcoming = nextLesson(topics, slug, lesson.id);
  const passed = checkPct !== null && checkPct >= PASS_PCT;
  const bilingual = dual && Boolean(topicData?.contentEn);

  return (
    <div className={cn("space-y-6", bilingual && phase === "read" ? "max-w-6xl" : "max-w-3xl")}>
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/learn" className="hover:text-zinc-700 dark:hover:text-zinc-300">
            {pick("Lộ trình học", "Study path")}
          </Link>
          <span>›</span>
          <Link href={`/learn/${slug}`} className="hover:text-zinc-700 dark:hover:text-zinc-300 truncate">
            {pick(topic.title, topic.titleEn)}
          </Link>
        </div>
        <h1 className="text-2xl font-bold mt-1">{pick(lesson.title, lesson.titleEn)}</h1>
        <p className="text-xs text-zinc-500 mt-1">
          {pick("Bài", "Lesson")} {position}/{topic.lessons.length}
          {state?.completed && <span className="text-green-600 dark:text-green-400 ml-2">✓ {pick("đã hoàn thành", "completed")}</span>}
        </p>
      </div>

      {/* Phase rail */}
      <div className="flex items-center gap-2 text-xs">
        {(
          [
            ["warmup", pick("1 · Khởi động", "1 · Warm-up")],
            ["read", pick("2 · Đọc", "2 · Read")],
            ["check", pick("3 · Kiểm tra", "3 · Check")],
          ] as const
        ).map(([id, label]) => {
          const order: Phase[] = ["warmup", "read", "check", "done"];
          const done = order.indexOf(phase) > order.indexOf(id as Phase);
          const active = phase === id;

          return (
            <span
              key={id}
              className={cn(
                "px-2.5 py-1 rounded-full border",
                active && "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                done && "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
                !active && !done && "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border-zinc-200 dark:border-zinc-700"
              )}
            >
              {done ? "✓ " : ""}
              {label}
            </span>
          );
        })}
      </div>

      {!built && <div className="text-zinc-500 text-sm">{t("common.loading")}</div>}

      {built && phase === "warmup" && (
        warmupQs.length > 0 ? (
          <LessonTest
            questions={warmupQs}
            heading={pick("Khởi động", "Warm-up")}
            blurb={pick(
              "Ôn nhanh những gì đã học, cộng một câu xem trước bài này. Sai cũng không sao — đây là để đo, không phải để chấm.",
              "A quick recall of earlier lessons plus a preview of this one. Getting these wrong is fine — it's a gauge, not a grade."
            )}
            ctaLabel={pick("Bắt đầu đọc →", "Start reading →")}
            onFinish={finishWarmup}
          />
        ) : (
          <div className="card space-y-3">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {pick("Bài này chưa có câu hỏi khởi động.", "No warm-up questions for this lesson.")}
            </p>
            <button onClick={() => setPhase("read")} className="btn-primary text-sm px-4 py-2">
              {pick("Bắt đầu đọc →", "Start reading →")}
            </button>
          </div>
        )
      )}

      {built && phase === "read" && (
        <div className="space-y-5">
          {warmupPct !== null && (
            <div className="text-xs text-zinc-500">
              {pick("Khởi động", "Warm-up")}: {warmupPct}%
            </div>
          )}

          {bilingual ? (
            <BilingualArticle vi={topicData!.content} en={topicData!.contentEn!} sections={lesson.sections} />
          ) : (
            <ArticleRenderer content={body} />
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <button onClick={() => setPhase("check")} className="btn-primary text-sm px-4 py-2">
              {pick("Làm bài kiểm tra →", "Take the check test →")}
            </button>
            <Link
              href={`/knowledge/${slug}`}
              className="text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              {pick("Xem toàn bộ bài viết", "View the full article")}
            </Link>
          </div>
        </div>
      )}

      {built && phase === "check" && (
        checkQs.length > 0 ? (
          <LessonTest
            questions={checkQs}
            heading={pick("Kiểm tra", "Check")}
            blurb={pick(
              `Câu hỏi của bài này cộng vài câu ôn lại. Đạt ${PASS_PCT}% để hoàn thành bài.`,
              `This lesson's questions plus a few from earlier. Score ${PASS_PCT}% to complete the lesson.`
            )}
            ctaLabel={pick("Xem kết quả →", "See result →")}
            onFinish={finishCheck}
          />
        ) : (
          <div className="card text-sm text-zinc-500">
            {pick("Bài này chưa có câu hỏi kiểm tra.", "No check questions for this lesson.")}
          </div>
        )
      )}

      {phase === "done" && (
        <div className="space-y-4">
          <div
            className={cn(
              "card border-l-4",
              passed ? "border-l-green-500" : "border-l-amber-500"
            )}
          >
            <div className="text-3xl font-bold">{checkPct}%</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {passed
                ? pick("Đạt — bài học đã hoàn thành.", "Passed — mini-lesson completed.")
                : pick(
                    `Chưa đạt ${PASS_PCT}%. Đọc lại rồi thử lại — điểm cao nhất của bạn vẫn được giữ.`,
                    `Below ${PASS_PCT}%. Re-read and try again — your best score is kept.`
                  )}
            </p>
            {warmupPct !== null && (
              <p className="text-xs text-zinc-500 mt-2">
                {pick("Khởi động", "Warm-up")} {warmupPct}% → {pick("Kiểm tra", "Check")} {checkPct}%
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {upcoming ? (
              <Link
                href={`/learn/${upcoming.topic.slug}/${upcoming.lesson.id}`}
                className="btn-primary text-sm px-4 py-2"
              >
                {pick("Bài tiếp theo", "Next lesson")}: {pick(upcoming.lesson.title, upcoming.lesson.titleEn)} →
              </Link>
            ) : (
              <Link href="/learn" className="btn-primary text-sm px-4 py-2">
                {pick("Hoàn thành lộ trình 🎉", "Path complete 🎉")}
              </Link>
            )}
            <button
              onClick={() => {
                setPhase("read");
                setCheckPct(null);
                setBuilt(false);
              }}
              className="btn-secondary text-sm"
            >
              {pick("Đọc lại & thử lại", "Re-read & retry")}
            </button>
            <Link href={`/learn/${slug}`} className="btn-secondary text-sm">
              {pick("Về chủ đề", "Back to topic")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
