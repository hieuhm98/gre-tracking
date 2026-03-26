import { createClient } from "@/lib/supabase/server";
import { PLAN, getDaysRemaining, getDaysSinceStart } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import PhaseCard from "@/components/PhaseCard";
import StatCard from "@/components/StatCard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch aggregated totals from daily logs
  const { data: logs } = await supabase
    .from("daily_logs")
    .select("pages_read, vocab_count, date")
    .eq("user_id", user!.id)
    .order("date", { ascending: false });

  const totalPages = logs?.reduce((s, r) => s + (r.pages_read ?? 0), 0) ?? 0;
  const totalVocab = logs?.reduce((s, r) => s + (r.vocab_count ?? 0), 0) ?? 0;
  const totalDaysLogged = logs?.length ?? 0;

  // Fetch mock exam count
  const { count: mockCount } = await supabase
    .from("mock_exams")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user!.id);

  const daysSinceStart = getDaysSinceStart();
  const daysRemaining = getDaysRemaining();

  // Pace: what should have been done by now (Phase 1 targets)
  const expectedPages = Math.min(
    daysSinceStart * PLAN.dailyTargets.pagesPerDay,
    PLAN.totals.pages
  );
  const expectedVocab = Math.min(
    daysSinceStart * PLAN.dailyTargets.vocabPerDay,
    PLAN.totals.vocab
  );

  const pagePace = expectedPages > 0 ? totalPages / expectedPages : 0;
  const vocabPace = expectedVocab > 0 ? totalVocab / expectedVocab : 0;

  // Determine current phase
  const now = new Date();
  const currentPhase = PLAN.phases.find(
    (p) => now >= p.start && now <= p.end
  ) ?? PLAN.phases[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Day {daysSinceStart} of 135 &middot; {daysRemaining} days to Phase 3 end &middot; Exam target: mid-Sep 2026
        </p>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          label="Pages read"
          value={totalPages}
          total={PLAN.totals.pages}
          pace={pagePace}
          unit="/ 700"
        />
        <StatCard
          label="Vocab learned"
          value={totalVocab}
          total={PLAN.totals.vocab}
          pace={vocabPace}
          unit="/ 5000"
        />
        <StatCard
          label="Days logged"
          value={totalDaysLogged}
          total={135}
          unit="/ 135"
        />
        <StatCard
          label="Mock exams"
          value={mockCount ?? 0}
          unit="completed"
        />
      </div>

      {/* Pace alert */}
      {daysSinceStart > 0 && (pagePace < 0.85 || vocabPace < 0.85) && (
        <div className="bg-amber-950/50 border border-amber-800/60 rounded-xl px-5 py-4 text-sm text-amber-300">
          <strong>Behind pace</strong> — you need {PLAN.dailyTargets.pagesPerDay} pages/day and {PLAN.dailyTargets.vocabPerDay} vocab/day to finish Phase 1 on time.
          {pagePace < 0.85 && ` Pages: ${Math.round(pagePace * 100)}% of target.`}
          {vocabPace < 0.85 && ` Vocab: ${Math.round(vocabPace * 100)}% of target.`}
        </div>
      )}

      {/* Phases */}
      <div>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Phases</h2>
        <div className="space-y-3">
          {PLAN.phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isCurrent={phase.id === currentPhase.id}
              totalPages={phase.id === 1 ? totalPages : undefined}
              totalVocab={phase.id === 1 ? totalVocab : undefined}
            />
          ))}
        </div>
      </div>

      {/* Recent logs */}
      {logs && logs.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Recent logs</h2>
          <div className="card divide-y divide-zinc-800">
            {logs.slice(0, 5).map((log) => (
              <div key={log.date} className="flex justify-between py-3 first:pt-0 last:pb-0 text-sm">
                <span className="text-zinc-400">{formatDate(log.date)}</span>
                <span className="text-zinc-200">
                  {log.pages_read ?? 0} pages &middot; {log.vocab_count ?? 0} words
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
