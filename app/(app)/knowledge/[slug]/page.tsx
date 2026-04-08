"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/auth";
import ArticleRenderer from "@/components/knowledge/ArticleRenderer";
import QuizBlock, { type Question } from "@/components/knowledge/QuizBlock";

interface Article {
  slug: string;
  title: string;
  content: string;
  questions: Question[];
  isStatic?: boolean;
}

interface CommunityQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { user, supabase } = useAuth();
  const [article, setArticle] = useState<Article | null>(null);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddQ, setShowAddQ] = useState(false);
  const [newQ, setNewQ] = useState({ question: "", options: ["", "", "", ""], answer: 0, explanation: "" });
  const [savingQ, setSavingQ] = useState(false);

  useEffect(() => {
    async function load() {
      // Try static first
      const staticRes = await fetch(`/api/knowledge/${slug}`);
      if (staticRes.ok) {
        const data = await staticRes.json();
        setArticle({ ...data, isStatic: true });
        const baseQs: Question[] = data.questions ?? [];

        // Also load community questions for this topic
        const { data: cqs } = await supabase
          .from("knowledge_questions")
          .select("*")
          .eq("topic_slug", slug);
        const communityQs: Question[] = (cqs ?? []).map((q: CommunityQuestion) => ({
          id: q.id, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation,
        }));
        setAllQuestions([...baseQs, ...communityQs]);
      } else {
        // Try DB article
        const { data: dbArticle } = await supabase
          .from("knowledge_articles")
          .select("*")
          .eq("slug", slug)
          .single();
        if (dbArticle) {
          setArticle({ slug: dbArticle.slug, title: dbArticle.title, content: dbArticle.content, questions: [], isStatic: false });
          const { data: cqs } = await supabase
            .from("knowledge_questions")
            .select("*")
            .eq("topic_slug", slug);
          setAllQuestions((cqs ?? []).map((q: CommunityQuestion) => ({
            id: q.id, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation,
          })));
        }
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  async function handleAddQuestion() {
    if (!user) return;
    setSavingQ(true);
    const { data } = await supabase.from("knowledge_questions").insert({
      author_id: user.id,
      topic_slug: slug,
      question: newQ.question,
      options: newQ.options,
      answer: newQ.answer,
      explanation: newQ.explanation || null,
    }).select().single();
    if (data) {
      setAllQuestions((prev) => [...prev, { id: data.id, question: data.question, options: data.options, answer: data.answer, explanation: data.explanation }]);
      setNewQ({ question: "", options: ["", "", "", ""], answer: 0, explanation: "" });
      setShowAddQ(false);
    }
    setSavingQ(false);
  }

  if (loading) return <div className="text-zinc-500 text-sm p-8">Loading...</div>;
  if (!article) return (
    <div className="text-center py-20">
      <p className="text-zinc-500">Article not found.</p>
      <Link href="/knowledge" className="text-blue-400 text-sm mt-2 inline-block">← Back</Link>
    </div>
  );

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Link href="/knowledge" className="text-xs text-zinc-500 hover:text-zinc-300">← IT Knowledge</Link>
        <div className="flex items-center gap-2 mt-2">
          <h1 className="text-2xl font-bold">{article.title}</h1>
          <span className={`text-xs px-2 py-0.5 rounded border ${article.isStatic ? "bg-blue-900/40 text-blue-300 border-blue-800" : "bg-violet-900/40 text-violet-300 border-violet-800"}`}>
            {article.isStatic ? "Official" : "Community"}
          </span>
        </div>
      </div>

      <ArticleRenderer content={article.content} />

      <QuizBlock questions={allQuestions} title={`Questions — ${article.title}`} />

      {/* Add question */}
      <div className="mt-8 border-t border-zinc-800 pt-6">
        {!showAddQ ? (
          <button onClick={() => setShowAddQ(true)} className="btn-secondary text-sm">
            + Add question to this topic
          </button>
        ) : (
          <div className="card space-y-4">
            <h3 className="font-semibold text-zinc-200">Add new question</h3>
            <div>
              <label className="label">Question</label>
              <input className="input" value={newQ.question} onChange={(e) => setNewQ((p) => ({ ...p, question: e.target.value }))} placeholder="Enter question..." />
            </div>
            <div className="space-y-2">
              <label className="label">Answer options (select the correct answer)</label>
              {newQ.options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={newQ.answer === i}
                    onChange={() => setNewQ((p) => ({ ...p, answer: i }))}
                    className="accent-blue-500"
                  />
                  <span className="text-zinc-500 text-sm w-5">{["A","B","C","D"][i]}.</span>
                  <input
                    className="input"
                    value={opt}
                    onChange={(e) => setNewQ((p) => {
                      const opts = [...p.options];
                      opts[i] = e.target.value;
                      return { ...p, options: opts };
                    })}
                    placeholder={`Option ${["A","B","C","D"][i]}`}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="label">Explanation (optional)</label>
              <textarea className="input" rows={2} value={newQ.explanation} onChange={(e) => setNewQ((p) => ({ ...p, explanation: e.target.value }))} placeholder="Explain the correct answer..." />
            </div>
            <div className="flex gap-2">
              <button onClick={handleAddQuestion} disabled={savingQ || !newQ.question || newQ.options.some((o) => !o)} className="btn-primary text-sm disabled:opacity-50">
                {savingQ ? "Saving..." : "Save question"}
              </button>
              <button onClick={() => setShowAddQ(false)} className="btn-secondary text-sm">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
