import { createClient } from "@/lib/supabase/server";
import { PLAN } from "@/lib/constants";
import MilestoneItem from "@/components/MilestoneItem";

export default async function MilestonesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: completed } = await supabase
    .from("milestones")
    .select("sprint, kpi_name, completed_at")
    .eq("user_id", user!.id);

  const completedSet = new Set(
    completed?.map((m) => `${m.sprint}::${m.kpi_name}`) ?? []
  );

  const total = PLAN.phases.reduce((acc, phase) => {
    if (phase.sprints.length > 0) {
      return acc + phase.sprints.reduce((a, s) => a + s.kpis.length, 0);
    }
    return acc + (phase.kpis?.length ?? 0);
  }, 0);

  const done = completedSet.size;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Milestones</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Sprint KPIs and phase deliverables — {done}/{total} completed
        </p>
      </div>

      {/* Overall progress */}
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: `${total > 0 ? Math.round((done / total) * 100) : 0}%` }}
        />
      </div>

      {/* Phase 1 sprints */}
      {PLAN.phases[0].sprints.map((sprint) => (
        <div key={sprint.id}>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            {sprint.name}
            <span className="ml-2 text-zinc-600 normal-case">
              {sprint.kpis.filter((k) => completedSet.has(`${sprint.id}::${k}`)).length}/{sprint.kpis.length}
            </span>
          </h2>
          <div className="card divide-y divide-zinc-800">
            {sprint.kpis.map((kpi) => (
              <MilestoneItem
                key={kpi}
                sprintId={sprint.id}
                kpi={kpi}
                isCompleted={completedSet.has(`${sprint.id}::${kpi}`)}
                completedAt={completed?.find((m) => m.sprint === sprint.id && m.kpi_name === kpi)?.completed_at}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Phase 2 & 3 KPIs */}
      {PLAN.phases.slice(1).map((phase) => (
        <div key={phase.id}>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            {phase.nameEn}
            <span className="ml-2 text-zinc-600 normal-case">
              {(phase.kpis ?? []).filter((k) => completedSet.has(`phase${phase.id}::${k}`)).length}/{(phase.kpis ?? []).length}
            </span>
          </h2>
          <div className="card divide-y divide-zinc-800">
            {(phase.kpis ?? []).map((kpi) => (
              <MilestoneItem
                key={kpi}
                sprintId={`phase${phase.id}`}
                kpi={kpi}
                isCompleted={completedSet.has(`phase${phase.id}::${kpi}`)}
                completedAt={completed?.find((m) => m.sprint === `phase${phase.id}` && m.kpi_name === kpi)?.completed_at}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
