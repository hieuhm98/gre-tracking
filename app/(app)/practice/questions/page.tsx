"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/context/lang";
import { cn } from "@/lib/utils";
import ArticleRenderer from "@/components/knowledge/ArticleRenderer";
import {
  EXERCISES,
  CATEGORIES,
  type Exercise,
  type ExerciseCategory,
  type Difficulty,
} from "./exercises";

const DIFF_STYLE: Record<Difficulty, string> = {
  easy: "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/40",
  medium: "bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700/40",
  hard: "bg-rose-100 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700/40",
};
const DIFF_LABEL: Record<Difficulty, { vi: string; en: string }> = {
  easy: { vi: "Dễ", en: "Easy" },
  medium: { vi: "Trung bình", en: "Medium" },
  hard: { vi: "Khó", en: "Hard" },
};

type Filter = "all" | ExerciseCategory;

export default function PracticeQuestionsPage() {
  const { pick } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const list = useMemo(
    () => (filter === "all" ? EXERCISES : EXERCISES.filter((e) => e.category === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: EXERCISES.length };
    for (const cat of CATEGORIES) c[cat.id] = EXERCISES.filter((e) => e.category === cat.id).length;
    return c;
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">
          {pick("Bài tập thiết kế", "Design Exercises")}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
          {pick(
            "Chọn một câu, tự làm ra giấy (vẽ lược đồ / liệt kê route / phác kiến trúc), rồi mở đáp án để đối chiếu. Mỗi đáp án giải thích tại sao và làm thế nào.",
            "Pick a question, work it out on paper (draw the schema / list the routes / sketch the architecture), then reveal the answer to check yourself. Each answer explains the why and the how."
          )}
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          {pick("Tất cả", "All")}{" "}
          <span className="text-zinc-500">({counts.all})</span>
        </FilterChip>
        {CATEGORIES.map((cat) => (
          <FilterChip key={cat.id} active={filter === cat.id} onClick={() => setFilter(cat.id)}>
            <span className={cat.accent}>{cat.icon}</span> {pick(cat.label.vi, cat.label.en)}{" "}
            <span className="text-zinc-500">({counts[cat.id]})</span>
          </FilterChip>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((ex) => (
          <ExerciseCard key={ex.id} ex={ex} open={open.has(ex.id)} onToggle={() => toggle(ex.id)} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm px-3 py-1.5 rounded-lg border transition-colors",
        active
          ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-600 font-medium"
          : "bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800/60"
      )}
    >
      {children}
    </button>
  );
}

function ExerciseCard({
  ex,
  open,
  onToggle,
}: {
  ex: Exercise;
  open: boolean;
  onToggle: () => void;
}) {
  const { pick } = useLang();
  const cat = CATEGORIES.find((c) => c.id === ex.category)!;

  return (
    <div className="card">
      {/* Meta row */}
      <div className="flex items-center gap-2 mb-2 text-xs">
        <span className={cn("font-medium", cat.accent)}>
          {cat.icon} {pick(cat.label.vi, cat.label.en)}
        </span>
        <span className={cn("px-2 py-0.5 rounded-full border", DIFF_STYLE[ex.difficulty])}>
          {pick(DIFF_LABEL[ex.difficulty].vi, DIFF_LABEL[ex.difficulty].en)}
        </span>
      </div>

      {/* Question — always visible */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{pick(ex.title.vi, ex.title.en)}</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mt-1.5">{pick(ex.prompt.vi, ex.prompt.en)}</p>

      {/* Accordion toggle */}
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={cn(
          "mt-3 inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors",
          open
            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700"
            : "bg-blue-50 dark:bg-blue-600/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-600/25"
        )}
      >
        <span className={cn("transition-transform", open && "rotate-90")}>▸</span>
        {open ? pick("Ẩn đáp án", "Hide answer") : pick("Xem đáp án", "Show answer")}
      </button>

      {/* Answer — hidden until revealed */}
      {open && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <ArticleRenderer content={pick(ex.answer.vi, ex.answer.en)} />
        </div>
      )}
    </div>
  );
}
