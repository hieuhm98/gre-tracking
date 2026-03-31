"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { formatDate } from "@/lib/utils";
import DailyLogForm from "@/components/DailyLogForm";

export default function LogPage() {
  const { user, supabase } = useAuth();
  const [logs, setLogs] = useState<any[]>([]);
  const [todayLog, setTodayLog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("daily_logs")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false })
      .limit(30);

    const today = new Date().toISOString().split("T")[0];
    setLogs(data ?? []);
    setTodayLog(data?.find((l) => l.date === today) ?? null);
    setLoading(false);
  };

  useEffect(() => { fetchLogs(); }, [user]);

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Daily Log</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Log today&apos;s pages read and vocabulary learned.
        </p>
      </div>

      <DailyLogForm existing={todayLog} onSaved={fetchLogs} />

      {logs.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            History
          </h2>
          <div className="card divide-y divide-zinc-800">
            {logs.map((log) => (
              <div key={log.id} className="py-3 first:pt-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium">{formatDate(log.date)}</span>
                  <div className="text-right text-sm">
                    <span className="text-blue-400">{log.pages_read ?? 0} pages</span>
                    <span className="text-zinc-600 mx-1">&middot;</span>
                    <span className="text-violet-400">{log.vocab_count ?? 0} words</span>
                  </div>
                </div>
                {log.notes && (
                  <p className="text-xs text-zinc-500 mt-1">{log.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
