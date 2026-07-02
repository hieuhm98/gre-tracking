"use client";

import { useState } from "react";
import { useLang } from "@/context/lang";
import { type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  question: string;
  questionEn?: string;
  options: string[];
  optionsEn?: string[];
  answer: number;
  explanation?: string;
  explanationEn?: string;
}

/** Resolve a bilingual question to plain strings for the active language. */
export function localizeQuestion(q: Question, lang: Lang) {
  const en = lang === "en";
  const options =
    en && q.optionsEn && q.optionsEn.length === q.options.length ? q.optionsEn : q.options;
  return {
    id: q.id,
    answer: q.answer,
    question: en ? q.questionEn || q.question : q.question,
    options,
    explanation: en ? q.explanationEn || q.explanation : q.explanation,
  };
}

interface Props {
  questions: Question[];
  title?: string;
}

type AnswerMap = Record<string, number | null>;

export default function QuizBlock({ questions, title }: Props) {
  const { lang, t } = useLang();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showResults, setShowResults] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="mt-10 border-t border-zinc-700 pt-8 text-sm text-zinc-500">
        {t("quiz.empty")}
      </div>
    );
  }

  const localized = questions.map((q) => localizeQuestion(q, lang));
  const currentQ = localized[currentIdx];
  const totalAnswered = Object.values(answers).filter((v) => v !== null && v !== undefined).length;
  const correctCount = localized.filter((q) => answers[q.id] === q.answer).length;

  function handleSelect(qId: string, optionIdx: number) {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  }

  function handleReset() {
    setAnswers({});
    setShowResults(false);
    setCurrentIdx(0);
  }

  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div className="mt-10 border-t border-zinc-700 pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-zinc-100">{title ?? t("quiz.title")}</h2>
        <span className="text-xs text-zinc-500">{questions.length} {t("quiz.questions")}</span>
      </div>

      {/* Question palette */}
      <div className="flex flex-wrap gap-2 mb-6">
        {localized.map((q, i) => {
          const answered = answers[q.id] !== undefined && answers[q.id] !== null;
          const isCorrect = showResults && answers[q.id] === q.answer;
          const isWrong = showResults && answered && answers[q.id] !== q.answer;
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIdx(i)}
              className={cn(
                "w-9 h-9 rounded-lg text-sm font-medium transition-colors border",
                i === currentIdx && "ring-2 ring-blue-500",
                isCorrect && "bg-green-800 border-green-600 text-green-200",
                isWrong && "bg-red-900 border-red-700 text-red-200",
                answered && !showResults && "bg-blue-900 border-blue-700 text-blue-200",
                !answered && "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Current question */}
      {!showResults && (
        <div className="card space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xs font-mono text-zinc-500 mt-0.5 shrink-0">
              {currentIdx + 1}/{localized.length}
            </span>
            <p className="text-zinc-100 font-medium leading-relaxed">{currentQ.question}</p>
          </div>

          <div className="space-y-2">
            {currentQ.options.map((opt, i) => {
              const selected = answers[currentQ.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(currentQ.id, i)}
                  className={cn(
                    "w-full text-left flex items-start gap-3 px-4 py-3 rounded-lg border transition-colors text-sm",
                    selected
                      ? "bg-blue-900/50 border-blue-600 text-blue-100"
                      : "bg-zinc-800/50 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600"
                  )}
                >
                  <span className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",
                    selected ? "bg-blue-600 border-blue-500 text-white" : "border-zinc-600 text-zinc-500"
                  )}>
                    {optionLabels[i]}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                disabled={currentIdx === 0}
                className="btn-secondary text-sm px-3 py-1.5 disabled:opacity-40"
              >
                {t("quiz.prev")}
              </button>
              <button
                onClick={() => setCurrentIdx((i) => Math.min(localized.length - 1, i + 1))}
                disabled={currentIdx === localized.length - 1}
                className="btn-secondary text-sm px-3 py-1.5 disabled:opacity-40"
              >
                {t("quiz.next")}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-500">{t("quiz.answered")}: {totalAnswered}/{localized.length}</span>
              <button
                onClick={() => setShowResults(true)}
                className="btn-primary text-sm px-4 py-1.5"
              >
                {t("quiz.viewResults")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="space-y-4">
          <div className="card bg-zinc-800/80">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-zinc-100">
                  {correctCount}/{localized.length}
                </div>
                <div className="text-sm text-zinc-400 mt-0.5">
                  {Math.round((correctCount / localized.length) * 100)}% {t("quiz.correct")}
                </div>
              </div>
              <button onClick={handleReset} className="btn-secondary text-sm">
                {t("quiz.retry")}
              </button>
            </div>
          </div>

          {localized.map((q, i) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.answer;
            const skipped = userAnswer === undefined || userAnswer === null;

            return (
              <div key={q.id} className={cn(
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
                    <span className="text-zinc-500 mr-1">{i + 1}.</span> {q.question}
                  </p>
                </div>

                <div className="space-y-1.5 mb-3">
                  {q.options.map((opt, oi) => {
                    const isCorrectOpt = oi === q.answer;
                    const isUserOpt = oi === userAnswer;
                    return (
                      <div key={oi} className={cn(
                        "flex items-start gap-2 px-3 py-2 rounded-lg text-xs",
                        isCorrectOpt ? "bg-green-900/40 text-green-300" :
                        isUserOpt && !isCorrectOpt ? "bg-red-900/40 text-red-300" :
                        "text-zinc-500"
                      )}>
                        <span className="font-bold shrink-0">{optionLabels[oi]}.</span>
                        <span>{opt}</span>
                        {isCorrectOpt && <span className="ml-auto shrink-0">{t("quiz.correctLabel")}</span>}
                        {isUserOpt && !isCorrectOpt && <span className="ml-auto shrink-0">{t("quiz.yourAnswer")}</span>}
                      </div>
                    );
                  })}
                </div>

                {q.explanation && (
                  <div className="bg-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-400 leading-relaxed">
                    <span className="text-zinc-500 font-medium">{t("quiz.explanation")}</span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
