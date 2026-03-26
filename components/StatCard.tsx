import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: number;
  total?: number;
  pace?: number;  // ratio 0-1 vs expected pace
  unit?: string;
}

export default function StatCard({ label, value, total, pace, unit }: Props) {
  const pct = total ? Math.min(100, Math.round((value / total) * 100)) : null;

  const paceColor =
    pace === undefined ? null
    : pace >= 1 ? "text-green-400"
    : pace >= 0.85 ? "text-amber-400"
    : "text-red-400";

  return (
    <div className="card space-y-2">
      <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{label}</div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold">{value.toLocaleString()}</span>
        {unit && <span className="text-xs text-zinc-500">{unit}</span>}
      </div>

      {pct !== null && (
        <div className="space-y-1">
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className={cn("text-xs", paceColor ?? "text-zinc-500")}>
            {pct}%{pace !== undefined && ` · ${Math.round(pace * 100)}% of pace`}
          </div>
        </div>
      )}
    </div>
  );
}
