"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function ArticleRenderer({ content }: Props) {
  return (
    <div className="prose prose-invert prose-zinc max-w-none
      prose-headings:font-bold prose-headings:text-zinc-100
      prose-h1:text-2xl prose-h1:mb-4
      prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:text-zinc-200
      prose-h3:text-base prose-h3:mt-5 prose-h3:mb-2 prose-h3:text-zinc-300
      prose-p:text-zinc-300 prose-p:leading-relaxed
      prose-li:text-zinc-300
      prose-strong:text-zinc-100
      prose-code:text-blue-300 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700 prose-pre:rounded-xl
      prose-blockquote:border-blue-500 prose-blockquote:text-zinc-400 prose-blockquote:italic
      prose-table:text-sm
      prose-th:bg-zinc-800 prose-th:text-zinc-200 prose-th:font-semibold
      prose-td:text-zinc-300 prose-td:border-zinc-700
      prose-hr:border-zinc-700
      prose-a:text-blue-400 hover:prose-a:text-blue-300
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
