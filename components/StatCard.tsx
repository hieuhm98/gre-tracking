interface Props {
  label: string;
  value: number;
  total?: number;
  unit?: string;
}

export default function StatCard({ label, value, total, unit }: Props) {
  const pct = total ? Math.min(100, Math.round((value / total) * 100)) : null;

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
          <div className="text-xs text-zinc-500">{pct}%</div>
        </div>
      )}
    </div>
  );
}
