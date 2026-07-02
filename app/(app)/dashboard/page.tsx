"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { PLAN, getDaysSinceStart } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import StatCard from "@/components/StatCard";

export default function DashboardPage() {
  const { user, supabase } = useAuth();
  const [logs, setLogs] = useState<any[]>([]);
  const [mockCount, setMockCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      supabase
        .from("daily_logs")
        .select("pages_read, vocab_count, date")
        .eq("user_id", user.id)
        .order("date", { ascending: false }),
      supabase
        .from("mock_exams")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id),
    ]).then(([{ data: logsData }, { count }]) => {
      setLogs(logsData ?? []);
      setMockCount(count ?? 0);
      setLoading(false);
    });
  }, [user]);

  const totalPages = logs.reduce((s, r) => s + (r.pages_read ?? 0), 0);
  const totalVocab = logs.reduce((s, r) => s + (r.vocab_count ?? 0), 0);
  const totalDaysLogged = logs.length;

  const daysSinceStart = getDaysSinceStart();

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Day {daysSinceStart} &middot; Exam target: mid-Sep 2026
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Pages read" value={totalPages} total={PLAN.totals.pages} unit="/ 700" />
        <StatCard label="Vocab learned" value={totalVocab} total={PLAN.totals.vocab} unit="/ 5000" />
        <StatCard label="Days logged" value={totalDaysLogged} unit="days" />
        <StatCard label="Mock exams" value={mockCount} unit="completed" />
      </div>

      {logs.length > 0 && (
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
