"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";

interface StaticTopic {
  slug: string;
  title: string;
  description: string;
}

interface UserArticle {
  id: string;
  slug: string;
  title: string;
  author_id: string;
  created_at: string;
}

export default function KnowledgePage() {
  const { supabase } = useAuth();
  const [staticTopics, setStaticTopics] = useState<StaticTopic[]>([]);
  const [userArticles, setUserArticles] = useState<UserArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/knowledge").then((r) => r.json()),
      supabase.from("knowledge_articles").select("id, slug, title, author_id, created_at").order("created_at", { ascending: false }),
    ]).then(([topics, { data }]) => {
      setStaticTopics(topics ?? []);
      setUserArticles(data ?? []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold">IT Knowledge</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Essential IT knowledge for BA, PM, PO — from computers to Agile.
        </p>
      </div>

      {/* Official topics */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
            Official ({staticTopics.length})
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {staticTopics.map((topic, i) => (
            <Link
              key={topic.slug}
              href={`/knowledge/${topic.slug}`}
              className="card hover:border-zinc-600 hover:bg-zinc-800/80 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-zinc-600 mt-0.5 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-medium text-zinc-100 group-hover:text-white text-sm">{topic.title}</div>
                  <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{topic.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community articles */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
            Community ({userArticles.length})
          </h2>
          <Link href="/my-articles/new" className="btn-primary text-xs px-3 py-1.5">
            + Write Article
          </Link>
        </div>
        {userArticles.length === 0 ? (
          <div className="card text-center py-10">
            <p className="text-zinc-500 text-sm">No community articles yet.</p>
            <Link href="/my-articles/new" className="inline-block mt-3 text-blue-400 text-sm hover:text-blue-300">
              Write the first article →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {userArticles.map((article) => (
              <Link
                key={article.id}
                href={`/knowledge/${article.slug}`}
                className="card hover:border-zinc-600 hover:bg-zinc-800/80 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-zinc-100 group-hover:text-white text-sm">{article.title}</span>
                  <span className="text-xs px-2 py-0.5 bg-violet-900/50 text-violet-300 rounded border border-violet-800 shrink-0 ml-2">
                    Community
                  </span>
                </div>
                <div className="text-xs text-zinc-600 mt-1">
                  {new Date(article.created_at).toLocaleDateString("en-US")}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
