import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { PLAN } from "@/lib/constants";

interface Phase {
  id: number;
  name: string;
  nameEn: string;
  start: Date;
  end: Date;
  days: number;
  color: string;
}

interface Props {
  phase: Phase;
  isCurrent: boolean;
  totalPages?: number;
  totalVocab?: number;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  green: "bg-green-500",
};

export default function PhaseCard({ phase, isCurrent, totalPages, totalVocab }: Props) {
  const now = new Date();
  const isPast = now > phase.end;
  const isFuture = now < phase.start;

  // Progress within this phase
  let phasePct = 0;
  if (isPast) phasePct = 100;
  else if (!isFuture) {
    const elapsed = now.getTime() - phase.start.getTime();
    const total = phase.end.getTime() - phase.start.getTime();
    phasePct = Math.round((elapsed / total) * 100);
  }

  // For Phase 1: show pages/vocab progress
  const pagesPct = totalPages !== undefined
    ? Math.min(100, Math.round((totalPages / PLAN.totals.pages) * 100))
    : null;
  const vocabPct = totalVocab !== undefined
    ? Math.min(100, Math.round((totalVocab / PLAN.totals.vocab) * 100))
    : null;

  return (
    <div className={cn(
      "card transition-all",
      isCurrent && "border-zinc-600 ring-1 ring-zinc-700"
    )}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", colorMap[phase.color])} />
            <span className="font-semibold text-sm">{phase.nameEn}</span>
            {isCurrent && (
              <span className="text-xs bg-zinc-700 text-zinc-300 px-1.5 py-0.5 rounded">
                current
              </span>
            )}
            {isPast && (
              <span className="text-xs text-zinc-500">done</span>
            )}
          </div>
          <div className="text-xs text-zinc-500 mt-0.5 ml-4">
            {formatDate(phase.start)} → {formatDate(phase.end)} ({phase.days} days)
          </div>
        </div>
        <span className="text-sm font-medium text-zinc-400">{phasePct}%</span>
      </div>

      {/* Time progress bar */}
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
        <div
          className={cn("h-full rounded-full transition-all", colorMap[phase.color])}
          style={{ width: `${phasePct}%` }}
        />
      </div>

      {/* Phase 1 content bars */}
      {(pagesPct !== null || vocabPct !== null) && (
        <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-zinc-800">
          {pagesPct !== null && (
            <div>
              <div className="text-xs text-zinc-500 mb-1">Pages ({totalPages}/700)</div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full" style={{ width: `${pagesPct}%` }} />
              </div>
            </div>
          )}
          {vocabPct !== null && (
            <div>
              <div className="text-xs text-zinc-500 mb-1">Vocab ({totalVocab}/5000)</div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-violet-400 rounded-full" style={{ width: `${vocabPct}%` }} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
