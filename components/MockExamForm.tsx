"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const ERROR_CATEGORIES = ["verbal", "quant", "reading", "writing", "vocab", "careless"];

export default function MockExamForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [examName, setExamName] = useState("");
  const [score, setScore] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateError(cat: string, val: string) {
    setErrors((prev) => ({ ...prev, [cat]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Build error_log — only include categories with a value
    const errorLog = Object.fromEntries(
      Object.entries(errors)
        .filter(([, v]) => v !== "" && parseInt(v) > 0)
        .map(([k, v]) => [k, parseInt(v)])
    );

    const { error } = await supabase.from("mock_exams").insert({
      user_id: user!.id,
      date,
      exam_name: examName.trim() || null,
      score: parseFloat(score),
      error_log: Object.keys(errorLog).length > 0 ? errorLog : null,
      notes: notes.trim() || null,
    });

    if (error) {
      setError(error.message);
    } else {
      setOpen(false);
      setScore("");
      setExamName("");
      setErrors({});
      setNotes("");
      router.refresh();
    }

    setLoading(false);
  }

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn-primary">
        + Log new exam
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">New mock exam</h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-zinc-500 hover:text-zinc-300 text-sm"
        >
          Cancel
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Date</label>
          <input
            type="date"
            className="input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">Exam name (optional)</label>
          <input
            type="text"
            className="input"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            placeholder="e.g. ETS PP1"
          />
        </div>
      </div>

      <div>
        <label className="label">Score (%)</label>
        <input
          type="number"
          min="0"
          max="100"
          step="0.1"
          className="input"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
          placeholder="e.g. 72"
        />
      </div>

      <div>
        <label className="label">Error log — mistakes per category</label>
        <div className="grid grid-cols-3 gap-2">
          {ERROR_CATEGORIES.map((cat) => (
            <div key={cat}>
              <label className="text-xs text-zinc-500 capitalize block mb-1">{cat}</label>
              <input
                type="number"
                min="0"
                className="input text-sm py-1.5"
                value={errors[cat] ?? ""}
                onChange={(e) => updateError(cat, e.target.value)}
                placeholder="0"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="label">Notes</label>
        <textarea
          className="input resize-none"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Key takeaways, patterns in mistakes..."
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save exam"}
      </button>
    </form>
  );
}
