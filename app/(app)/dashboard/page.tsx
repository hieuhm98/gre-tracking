"use client";

import Link from "next/link";
import { useLang } from "@/context/lang";

const CARDS = [
  {
    href: "/knowledge",
    icon: "◉",
    accent: "text-blue-300",
    title: { vi: "Kiến thức", en: "Knowledge" },
    desc: {
      vi: "Các chủ đề IT cho BA/PO/PM và khóa AWS SAA-C03 — bài viết song ngữ kèm quiz.",
      en: "IT topics for BA/PO/PM and the AWS SAA-C03 course — bilingual articles with quizzes.",
    },
  },
  {
    href: "/knowledge-review?quick=1",
    icon: "⚡",
    accent: "text-amber-300",
    title: { vi: "Test nhanh", en: "Quick Test" },
    desc: {
      vi: "Bài kiểm tra ngẫu nhiên nhanh từ tất cả chủ đề để ôn tập mỗi ngày.",
      en: "A fast randomized test across every topic to review each day.",
    },
  },
  {
    href: "/practice/questions",
    icon: "✐",
    accent: "text-sky-300",
    title: { vi: "Bài tập thiết kế", en: "Design Exercises" },
    desc: {
      vi: "Câu hỏi mở về thiết kế CSDL, API và kiến trúc AWS — tự làm rồi mở đáp án chi tiết.",
      en: "Open-ended database, API and AWS architecture questions — solve, then reveal a detailed answer.",
    },
  },
  {
    href: "/practice/sql",
    icon: "▤",
    accent: "text-emerald-300",
    title: { vi: "Luyện tập SQL", en: "SQL Practice" },
    desc: {
      vi: "Viết và chạy SQL thật trên kho từ vựng tiếng Anh (~23k từ).",
      en: "Write and run real SQL against the English word bank (~23k words).",
    },
  },
];

export default function HomePage() {
  const { pick } = useLang();
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">
          {pick("Nền tảng học IT & tiếng Anh", "IT & English Learning Platform")}
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          {pick(
            "Học kiến thức IT/AWS song ngữ, luyện quiz, thực hành thiết kế hệ thống và viết SQL — miễn phí, không cần đăng nhập.",
            "Learn bilingual IT/AWS knowledge, take quizzes, practice system design and write SQL — free, no login required."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="card hover:border-zinc-600 transition-colors group"
          >
            <div className={`text-2xl mb-2 ${c.accent}`}>{c.icon}</div>
            <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-white">
              {pick(c.title.vi, c.title.en)}
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
              {pick(c.desc.vi, c.desc.en)}
            </p>
            <span className="inline-block mt-3 text-sm text-blue-400 group-hover:text-blue-300">
              {pick("Mở →", "Open →")}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
