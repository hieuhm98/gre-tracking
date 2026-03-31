"use client";

import { useState } from "react";
import { useAuth } from "@/context/auth";

interface Props {
  existing: {
    id: string;
    pages_read: number;
    vocab_count: number;
    notes: string | null;
  } | null;
  onSaved?: () => void;
}

export default function DailyLogForm({ existing, onSaved }: Props) {
  const { user, supabase } = useAuth();
  const today = new Date().toISOString().split("T")[0];

  const [pages, setPages] = useState(existing?.pages_read?.toString() ?? "");
  const [vocab, setVocab] = useState(existing?.vocab_count?.toString() ?? "");
  const [notes, setNotes] = useState(existing?.notes ?? "");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSaved(false);


    const payload = {
      user_id: user!.id,
      date: today,
      pages_read: parseInt(pages) || 0,
      vocab_count: parseInt(vocab) || 0,
      notes: notes.trim() || null,
    };

    const { error } = existing
      ? await supabase.from("daily_logs").update(payload).eq("id", existing.id)
      : await supabase.from("daily_logs").insert(payload);

    if (error) {
      setError(error.message);
    } else {
      setSaved(true);
      onSaved?.();
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">
          Today — {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
        </h2>
        {existing && (
          <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">editing</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Pages read</label>
          <input
            type="number"
            min="0"
            max="200"
            className="input"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            placeholder="0"
          />
          <p className="text-xs text-zinc-600 mt-1">Target: 13/day</p>
        </div>

        <div>
          <label className="label">Vocab learned</label>
          <input
            type="number"
            min="0"
            max="500"
            className="input"
            value={vocab}
            onChange={(e) => setVocab(e.target.value)}
            placeholder="0"
          />
          <p className="text-xs text-zinc-600 mt-1">Target: 91/day</p>
        </div>
      </div>

      <div>
        <label className="label">Notes (optional)</label>
        <textarea
          className="input resize-none"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What did you cover today? Any struggles?"
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {saved && <p className="text-green-400 text-sm">Saved!</p>}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Saving..." : existing ? "Update log" : "Save log"}
      </button>
    </form>
  );
}
