"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth";

interface Article {
  id: string;
  slug: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function MyArticlesPage() {
  const { user, supabase } = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("knowledge_articles")
      .select("id, slug, title, created_at, updated_at")
      .eq("author_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setArticles(data ?? []);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Articles</h1>
          <p className="text-zinc-400 text-sm mt-1">Manage your contributed knowledge articles.</p>
        </div>
        <Link href="/my-articles/new" className="btn-primary">+ New Article</Link>
      </div>

      {articles.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-zinc-500">You have no articles yet.</p>
          <Link href="/my-articles/new" className="inline-block mt-3 text-blue-400 hover:text-blue-300">
            Write your first article →
          </Link>
        </div>
      ) : (
        <div className="card divide-y divide-zinc-800">
          {articles.map((a) => (
            <div key={a.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
              <div>
                <Link href={`/knowledge/${a.slug}`} className="font-medium text-zinc-100 hover:text-white text-sm">
                  {a.title}
                </Link>
                <div className="text-xs text-zinc-600 mt-0.5">
                  Updated {new Date(a.updated_at).toLocaleDateString("en-US")}
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/knowledge/${a.slug}`} className="btn-secondary text-xs px-3 py-1.5">View</Link>
                <Link href={`/my-articles/${a.id}`} className="btn-secondary text-xs px-3 py-1.5">Edit</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
