"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth";
import { formatDate } from "@/lib/utils";

interface Props {
  sprintId: string;
  kpi: string;
  isCompleted: boolean;
  completedAt?: string;
  onToggled?: () => void;
}

export default function MilestoneItem({ sprintId, kpi, isCompleted, completedAt, onToggled }: Props) {
  const { user, supabase } = useAuth();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(isCompleted);

  async function toggle() {
    setLoading(true);

    if (!checked) {
      await supabase.from("milestones").insert({
        user_id: user!.id,
        sprint: sprintId,
        kpi_name: kpi,
        completed_at: new Date().toISOString(),
      });
      setChecked(true);
    } else {
      await supabase
        .from("milestones")
        .delete()
        .eq("user_id", user!.id)
        .eq("sprint", sprintId)
        .eq("kpi_name", kpi);
      setChecked(false);
    }

    setLoading(false);
    onToggled?.();
  }

  return (
    <div className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
      <button
        onClick={toggle}
        disabled={loading}
        className={`mt-0.5 w-4 h-4 rounded border shrink-0 transition-colors ${
          checked
            ? "bg-green-500 border-green-500"
            : "border-zinc-600 hover:border-zinc-400"
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white mx-auto" fill="none" viewBox="0 0 12 12">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <span className={`text-sm ${checked ? "line-through text-zinc-500" : "text-zinc-200"}`}>
          {kpi}
        </span>
        {checked && completedAt && (
          <span className="text-xs text-zinc-600 ml-2">
            {formatDate(completedAt)}
          </span>
        )}
      </div>
    </div>
  );
}
