"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/lang";
import { useTheme } from "@/context/theme";
import { LANGS } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV = [{ href: "/dashboard", label: "nav.home", icon: "◈" }];

const KNOWLEDGE_NAV = [
  { href: "/knowledge", label: "nav.knowledge", icon: "◉" },
  { href: "/knowledge-review", label: "nav.review", icon: "⟳" },
];

const PRACTICE_NAV = [
  { href: "/practice/questions", label: "nav.exercises", icon: "✐" },
  { href: "/practice/sql", label: "nav.sqlPractice", icon: "▤" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <aside className="w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-800 flex flex-col h-screen sticky top-0">
      <div className="px-5 py-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="font-bold text-lg tracking-tight">Milestone Tracking</div>
        <div className="text-xs text-zinc-500 mt-0.5">IT · AWS · English</div>
      </div>

      {/* Language toggle */}
      <div className="px-3 pt-3">
        <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          {LANGS.map((l) => (
            <button
              key={l.id}
              onClick={() => setLang(l.id)}
              className={cn(
                "flex-1 text-xs font-medium py-1.5 rounded-md transition-colors",
                lang === l.id
                  ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              )}
            >
              {l.short}
            </button>
          ))}
        </div>
      </div>

      {/* Theme toggle */}
      <div className="px-3 pt-2">
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
          className="w-full flex items-center justify-center gap-2 text-xs font-medium py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="text-sm">{theme === "dark" ? "☀" : "☾"}</span>
          {theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname === item.href
                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800/60"
            )}
          >
            <span className="text-base">{item.icon}</span>
            {t(item.label)}
          </Link>
        ))}

        <div className="pt-3 pb-1">
          <div className="px-3 text-xs font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-1">
            {t("nav.sectionKnowledge")}
          </div>
        </div>
        {KNOWLEDGE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname === item.href
                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800/60"
            )}
          >
            <span className="text-base">{item.icon}</span>
            {t(item.label)}
          </Link>
        ))}

        <div className="pt-3 pb-1">
          <div className="px-3 text-xs font-semibold text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mb-1">
            {t("nav.sectionPractice")}
          </div>
        </div>
        {PRACTICE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              pathname === item.href
                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800/60"
            )}
          >
            <span className="text-base">{item.icon}</span>
            {t(item.label)}
          </Link>
        ))}

        {/* Daily Quick Test — prominent shortcut */}
        <Link
          href="/knowledge-review?quick=1"
          className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-600/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-600/25 transition-colors"
        >
          <span className="text-base">⚡</span>
          {t("nav.quickTest")}
        </Link>
      </nav>
    </aside>
  );
}
