"use client";

import { useState, useRef } from "react";
import ArticleRenderer from "./ArticleRenderer";

interface Props {
  initialTitle?: string;
  initialSlug?: string;
  initialContent?: string;
  onSave: (data: { title: string; slug: string; content: string }) => Promise<void>;
  saving?: boolean;
}

function titleToSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
    .replace(/[èéẹẻẽêềếệểễ]/g, "e")
    .replace(/[ìíịỉĩ]/g, "i")
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
    .replace(/[ùúụủũưừứựửữ]/g, "u")
    .replace(/[ỳýỵỷỹ]/g, "y")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function ArticleEditor({ initialTitle = "", initialSlug = "", initialContent = "", onSave, saving }: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [slug, setSlug] = useState(initialSlug);
  const [content, setContent] = useState(initialContent);
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [slugEdited, setSlugEdited] = useState(!!initialSlug);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleTitleChange(v: string) {
    setTitle(v);
    if (!slugEdited) setSlug(titleToSlug(v));
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      setContent(text);
      if (!title) {
        const firstLine = text.split("\n")[0].replace(/^#+\s*/, "");
        setTitle(firstLine);
        if (!slugEdited) setSlug(titleToSlug(firstLine));
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Article Title</label>
          <input
            className="input"
            placeholder="e.g. What is Kubernetes?"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Slug (URL)</label>
          <input
            className="input font-mono text-sm"
            placeholder="e-g-what-is-kubernetes"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setSlugEdited(true); }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex border border-zinc-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setTab("write")}
            className={`px-4 py-2 text-sm transition-colors ${tab === "write" ? "bg-zinc-700 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Write
          </button>
          <button
            onClick={() => setTab("preview")}
            className={`px-4 py-2 text-sm transition-colors ${tab === "preview" ? "bg-zinc-700 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Preview
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileRef.current?.click()}
            className="btn-secondary text-sm"
          >
            ↑ Upload .md
          </button>
          <input ref={fileRef} type="file" accept=".md,.txt" className="hidden" onChange={handleFileUpload} />
        </div>
      </div>

      {tab === "write" ? (
        <textarea
          className="input font-mono text-sm min-h-[400px] resize-y leading-relaxed"
          placeholder="# Article Title

## 1. Introduction

Article content in Markdown..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <div className="card min-h-[400px]">
          {content ? (
            <ArticleRenderer content={content} />
          ) : (
            <p className="text-zinc-500 text-sm">No content to preview.</p>
          )}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => onSave({ title, slug, content })}
          disabled={saving || !title || !slug || !content}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? "Saving..." : "Save Article"}
        </button>
      </div>
    </div>
  );
}
