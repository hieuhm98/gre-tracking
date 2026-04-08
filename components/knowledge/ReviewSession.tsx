"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";
import { type Question } from "./QuizBlock";

interface StaticTopic {
  slug: string;
  title: string;
  description: string;
}

interface CommunityQuestion extends Question {
  topic_slug: string;
}

const COUNTS = [10, 20, 50, 0] as const;
const COUNT_LABELS: Record<number, string> = { 10: "10 qs", 20: "20 qs", 50: "50 qs", 0: "All" };

type AnswerMap = Record<number, number | null>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ReviewSession() {
  const { user, supabase } = useAuth();
  const [topics, setTopics] = useState<StaticTopic[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [count, setCount] = useState<number>(10);
  const [allQuestions, setAllQuestions] = useState<(Question & { topic_slug: string })[]>([]);
  const [sessionQ, setSessionQ] = useState<(Question & { topic_slug: string })[]>([]);
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/knowledge")
      .then((r) => r.json())
      .then((data) => {
        setTopics(data);
        setSelected(new Set(data.map((t: StaticTopic) => t.slug)));
        setLoading(false);
      });
  }, []);

  async function handleStart() {
    const staticQs: (Question & { topic_slug: string })[] = [];
    await Promise.all(
      Array.from(selected).map(async (slug) => {
        const res = await fetch(`/api/knowledge/${slug}`);
        if (!res.ok) return;
        const data = await res.json();
        (data.questions ?? []).forEach((q: Question) =>
          staticQs.push({ ...q, topic_slug: slug })
        );
      })
    );

    // Also fetch community questions for selected topics
    const { data: communityQs } = await supabase
      .from("knowledge_questions")
      .select("*")
      .in("topic_slug", Array.from(selected));

    const communityMapped: (Question & { topic_slug: string })[] = (communityQs ?? []).map((q: CommunityQuestion) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
      topic_slug: q.topic_slug,
    }));

    const combined = shuffle([...staticQs, ...communityMapped]);
    const final = count === 0 ? combined : combined.slice(0, count);
    setAllQuestions(combined);
    setSessionQ(final);
    setAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
    setStarted(true);
  }

  function toggleTopic(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === topics.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(topics.map((t) => t.slug)));
    }
  }

  const optionLabels = ["A", "B", "C", "D", "E"];
  const correctCount = sessionQ.filter((q, i) => answers[i] === q.answer).length;

  if (loading) return <div className="text-zinc-500 text-sm">Loading...</div>;

  if (!started) {
    return (
      <div className="max-w-2xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Random Review</h1>
          <p className="text-zinc-400 text-sm mt-1">Select topics and question count to start.</p>
        </div>

        <div className="card space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">Topics ({selected.size}/{topics.length})</span>
            <button onClick={toggleAll} className="text-xs text-blue-400 hover:text-blue-300">
              {selected.size === topics.length ? "Deselect all" : "Select all"}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {topics.map((t) => (
              <label key={t.slug} className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer border transition-colors text-sm",
                selected.has(t.slug)
                  ? "bg-blue-900/30 border-blue-700 text-blue-200"
                  : "bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:border-zinc-600"
              )}>
                <input
                  type="checkbox"
                  checked={selected.has(t.slug)}
                  onChange={() => toggleTopic(t.slug)}
                  className="accent-blue-500"
                />
                <span className="truncate">{t.title}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="card space-y-3">
          <span className="text-sm font-medium text-zinc-300">Number of questions</span>
          <div className="flex gap-2">
            {COUNTS.map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm border transition-colors",
                  count === c
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
                )}
              >
                {COUNT_LABELS[c]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={selected.size === 0}
          className="btn-primary disabled:opacity-50"
        >
          Start Review →
        </button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-2xl space-y-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold">{correctCount}/{sessionQ.length}</div>
              <div className="text-zinc-400 text-sm mt-1">
                {Math.round((correctCount / sessionQ.length) * 100)}% correct
              </div>
            </div>
            <button onClick={() => setStarted(false)} className="btn-secondary">
              Review Again
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {sessionQ.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.answer;
            const skipped = userAnswer === undefined || userAnswer === null;
            return (
              <div key={`${q.id}-${i}`} className={cn(
                "card border-l-4",
                isCorrect ? "border-l-green-500" : skipped ? "border-l-zinc-600" : "border-l-red-500"
              )}>
                <div className="flex items-start gap-2 mb-3">
                  <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded shrink-0",
                    isCorrect ? "bg-green-900 text-green-300" : skipped ? "bg-zinc-700 text-zinc-400" : "bg-red-900 text-red-300"
                  )}>
                    {isCorrect ? "✓" : skipped ? "—" : "✗"}
                  </span>
                  <p className="text-sm font-medium text-zinc-200">
                    <span className="text-zinc-500 mr-1">{i + 1}.</span>{q.question}
                  </p>
                </div>
                <div className="space-y-1 mb-3">
                  {q.options.map((opt, oi) => {
                    const isCorrectOpt = oi === q.answer;
                    const isUserOpt = oi === userAnswer;
                    return (
                      <div key={oi} className={cn(
                        "flex gap-2 px-3 py-1.5 rounded text-xs",
                        isCorrectOpt ? "bg-green-900/40 text-green-300" :
                        isUserOpt ? "bg-red-900/40 text-red-300" : "text-zinc-500"
                      )}>
                        <span className="font-bold shrink-0">{optionLabels[oi]}.</span>
                        <span>{opt}</span>
                        {isCorrectOpt && <span className="ml-auto shrink-0">✓</span>}
                        {isUserOpt && !isCorrectOpt && <span className="ml-auto shrink-0">← Your answer</span>}
                      </div>
                    );
                  })}
                </div>
                {q.explanation && (
                  <div className="bg-zinc-800 rounded px-3 py-2 text-xs text-zinc-400">
                    <span className="text-zinc-500 font-medium">Explanation: </span>{q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = sessionQ[currentIdx];
  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Random Review</h1>
        <button onClick={() => setStarted(false)} className="text-xs text-zinc-500 hover:text-zinc-300">← Exit</button>
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>Question {currentIdx + 1}/{sessionQ.length}</span>
          <span>Answered: {Object.keys(answers).length}</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${((currentIdx + 1) / sessionQ.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Palette */}
      <div className="flex flex-wrap gap-1.5">
        {sessionQ.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={cn(
              "w-8 h-8 rounded text-xs font-medium border transition-colors",
              i === currentIdx && "ring-2 ring-blue-500",
              answers[i] !== undefined ? "bg-blue-900 border-blue-700 text-blue-200" : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:bg-zinc-700"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <div className="card space-y-4">
        <p className="text-zinc-100 font-medium leading-relaxed">{currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((opt, i) => {
            const selected = answers[currentIdx] === i;
            return (
              <button
                key={i}
                onClick={() => setAnswers((prev) => ({ ...prev, [currentIdx]: i }))}
                className={cn(
                  "w-full text-left flex items-start gap-3 px-4 py-3 rounded-lg border text-sm transition-colors",
                  selected
                    ? "bg-blue-900/50 border-blue-600 text-blue-100"
                    : "bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                )}
              >
                <span className={cn(
                  "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0",
                  selected ? "bg-blue-600 border-blue-500 text-white" : "border-zinc-600 text-zinc-500"
                )}>
                  {optionLabels[i]}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-2">
            <button onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))} disabled={currentIdx === 0} className="btn-secondary text-sm px-3 py-1.5 disabled:opacity-40">← Prev</button>
            <button onClick={() => setCurrentIdx((i) => Math.min(sessionQ.length - 1, i + 1))} disabled={currentIdx === sessionQ.length - 1} className="btn-secondary text-sm px-3 py-1.5 disabled:opacity-40">Next →</button>
          </div>
          <button onClick={() => setShowResults(true)} className="btn-primary text-sm px-4 py-1.5">View Results</button>
        </div>
      </div>
    </div>
  );
}
