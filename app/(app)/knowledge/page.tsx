"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/lang";
import { GROUPS, DEFAULT_GROUP, GROUP_ACCENT } from "@/lib/groups";

interface StaticTopic {
  slug: string;
  group: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
}

export default function KnowledgePage() {
  const { t, pick } = useLang();
  const [staticTopics, setStaticTopics] = useState<StaticTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  const didInitAccordion = useRef(false);

  const toggleGroup = (id: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  useEffect(() => {
    async function load() {
      const topics: StaticTopic[] = await fetch("/api/knowledge").then((r) => r.json());
      setStaticTopics(topics ?? []);
      setLoading(false);
    }
    load();
  }, []);

  // Group topics by their group id, preserving GROUPS order.
  const grouped = GROUPS.map((g) => ({
    group: g,
    topics: staticTopics.filter((tp) => (tp.group ?? DEFAULT_GROUP) === g.id),
  })).filter((section) => section.topics.length > 0);

  // Open the first group once, so the page isn't empty but nothing is scrolled.
  useEffect(() => {
    if (!didInitAccordion.current && grouped.length > 0) {
      didInitAccordion.current = true;
      setOpenGroups(new Set([grouped[0].group.id]));
    }
  }, [grouped]);

  if (loading) return <div className="text-zinc-500 text-sm p-8">{t("common.loading")}</div>;

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-2xl font-bold">{t("knowledge.title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">{t("knowledge.subtitle")}</p>
      </div>

      <div className="space-y-3">
        {grouped.map(({ group, topics }) => {
          const accent = GROUP_ACCENT[group.accent];
          const isOpen = openGroups.has(group.id);
          return (
            <section key={group.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-200 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <span className="text-xl shrink-0">{group.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 truncate">
                      {pick(group.label, group.labelEn)}
                    </h2>
                    <span className={`text-xs px-2 py-0.5 rounded border shrink-0 ${accent.badge}`}>
                      {topics.length} {t("knowledge.topics")}
                    </span>
                  </div>
                  {!isOpen && (
                    <p className="text-xs text-zinc-500 mt-0.5 truncate">
                      {pick(group.description, group.descriptionEn)}
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-xs text-zinc-500 mb-4 mt-3">
                    {pick(group.description, group.descriptionEn)}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topics.map((topic, i) => (
                      <Link
                        key={topic.slug}
                        href={`/knowledge/${topic.slug}`}
                        className="card hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-0.5 shrink-0 w-6">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <div className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-white text-sm">
                              {pick(topic.title, topic.titleEn)}
                            </div>
                            <div className="text-xs text-zinc-500 mt-1 leading-relaxed">
                              {pick(topic.description, topic.descriptionEn)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
