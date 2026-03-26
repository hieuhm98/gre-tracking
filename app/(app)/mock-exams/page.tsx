import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import MockExamForm from "@/components/MockExamForm";

export default async function MockExamsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: exams } = await supabase
    .from("mock_exams")
    .select("*")
    .eq("user_id", user!.id)
    .order("date", { ascending: false });

  const avgScore =
    exams && exams.length > 0
      ? Math.round(exams.reduce((s, e) => s + (e.score ?? 0), 0) / exams.length)
      : null;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Mock Exams</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Log scores and error analysis from each practice test.
        </p>
      </div>

      {/* Summary */}
      {exams && exams.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div className="card text-center">
            <div className="text-2xl font-bold">{exams.length}</div>
            <div className="text-xs text-zinc-500 mt-1">Total exams</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold">{avgScore}%</div>
            <div className="text-xs text-zinc-500 mt-1">Avg score</div>
          </div>
          <div className="card text-center">
            <div className={`text-2xl font-bold ${(avgScore ?? 0) >= 75 ? "text-green-400" : "text-amber-400"}`}>
              {(avgScore ?? 0) >= 75 ? "On track" : "Keep going"}
            </div>
            <div className="text-xs text-zinc-500 mt-1">Target: 75–80%</div>
          </div>
        </div>
      )}

      <MockExamForm />

      {/* History */}
      {exams && exams.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Exam history
          </h2>
          <div className="space-y-3">
            {exams.map((exam) => (
              <div key={exam.id} className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-medium">{formatDate(exam.date)}</span>
                    {exam.exam_name && (
                      <span className="text-zinc-500 text-sm ml-2">{exam.exam_name}</span>
                    )}
                  </div>
                  <div className={`text-xl font-bold ${exam.score >= 75 ? "text-green-400" : "text-amber-400"}`}>
                    {exam.score}%
                  </div>
                </div>

                {exam.error_log && (
                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <div className="text-xs text-zinc-500 mb-2 font-medium">Error analysis</div>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(exam.error_log as Record<string, number>).map(([cat, count]) => (
                        <div key={cat} className="bg-zinc-800 rounded-lg px-3 py-2 text-center">
                          <div className="text-sm font-bold text-red-400">{count}</div>
                          <div className="text-xs text-zinc-500 capitalize">{cat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {exam.notes && (
                  <p className="text-xs text-zinc-500 mt-3">{exam.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
