"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import ArticleEditor from "@/components/knowledge/ArticleEditor";

export default function NewArticlePage() {
  const { user, supabase } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSave({ title, slug, content }: { title: string; slug: string; content: string }) {
    if (!user) return;
    setSaving(true);
    setError("");
    const { error: err } = await supabase.from("knowledge_articles").insert({
      author_id: user.id,
      slug,
      title,
      content,
    });
    setSaving(false);
    if (err) {
      if (err.code === "23505") setError("Slug already exists. Please choose a different slug.");
      else setError(err.message);
    } else {
      router.push(`/knowledge/${slug}`);
    }
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">New Article</h1>
        <p className="text-zinc-400 text-sm mt-1">Articles are visible to all authenticated users.</p>
      </div>
      {error && (
        <div className="bg-red-900/40 border border-red-700 rounded-xl px-4 py-3 text-sm text-red-300">{error}</div>
      )}
      <ArticleEditor onSave={handleSave} saving={saving} />
    </div>
  );
}
