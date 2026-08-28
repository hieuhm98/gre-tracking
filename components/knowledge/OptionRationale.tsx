"use client";

import BilingualPair from "@/components/BilingualPair";
import { useLang } from "@/context/lang";
import { cn } from "@/lib/utils";

interface Props {
  /** True for the answer key, false for a distractor — decides the label. */
  correct: boolean;
  en?: string;
  vi?: string;
  className?: string;
}

/**
 * The "why" under one revealed option: why the key is right, or why this
 * distractor is wrong.
 *
 * Naming the verdict matters more than the sentence that follows it — a learner
 * who reads four rationales in a row needs to see at a glance which one is the
 * answer, so the label is what carries that, not the surrounding colour (which
 * a colour-blind reader may not separate).
 *
 * Renders nothing when the question carries no per-option rationale, so the
 * older questions that only have a single `explanation` degrade cleanly.
 */
export default function OptionRationale({ correct, en, vi, className }: Props) {
  const { t, lang, dual } = useLang();
  const single = lang === "en" ? en || vi : vi || en;

  if (dual ? !en && !vi : !single) return null;

  const label = correct ? t("quiz.whyCorrect") : t("quiz.whyWrong");
  const labelClass = cn(
    "font-semibold",
    correct ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
  );

  return (
    <div
      className={cn(
        "mt-1.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {dual ? (
        <BilingualPair
          divider={false}
          className="gap-y-1"
          en={
            <span>
              <span className={labelClass}>{label}</span>
              {en}
            </span>
          }
          vi={
            <span>
              <span className={labelClass}>{label}</span>
              {vi}
            </span>
          }
        />
      ) : (
        <span>
          <span className={labelClass}>{label}</span>
          {single}
        </span>
      )}
    </div>
  );
}
