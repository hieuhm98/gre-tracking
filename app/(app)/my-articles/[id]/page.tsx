"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import ArticleEditor from "@/components/knowledge/ArticleEditor";

export default function EditArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { user, supabase } = useAuth();
  const router = useRouter();
  const [article, setArticle] = useState<{ title: string; slug: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    supabase
      .from("knowledge_articles")
      .select("title, slug, content")
      .eq("id", id)
      .eq("author_id", user.id)
      .single()
      .then(({ data }) => {
        setArticle(data);
        setLoading(false);
      });
  }, [id, user]);

  async function handleSave({ title, slug, content }: { title: string; slug: string; content: string }) {
    if (!user) return;
    setSaving(true);
    setError("");
    const { error: err } = await supabase
      .from("knowledge_articles")
      .update({ title, slug, content, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("author_id", user.id);
    setSaving(false);
    if (err) {
      setError(err.message);
    } else {
      router.push(`/knowledge/${slug}`);
    }
  }

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;
  if (!article) return (
    <div className="text-center py-20">
      <p className="text-zinc-500">Article not found or you don&apos;t have permission to edit.</p>
    </div>
  );

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Edit Article</h1>
      </div>
      {error && (
        <div className="bg-red-900/40 border border-red-700 rounded-xl px-4 py-3 text-sm text-red-300">{error}</div>
      )}
      <ArticleEditor
        initialTitle={article.title}
        initialSlug={article.slug}
        initialContent={article.content}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
}
