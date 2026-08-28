"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ExamRunner from "@/components/exam/ExamRunner";
import { useLang } from "@/context/lang";
import { DEFAULT_GROUP, getGroup } from "@/lib/groups";

interface CatalogueTopic {
  slug: string;
  group?: string;
  title: string;
  titleEn?: string;
}

export default function ExamPage({ params }: { params: { group: string } }) {
  const { t } = useLang();
  const group = getGroup(params.group);
  const [topics, setTopics] = useState<CatalogueTopic[] | null>(null);

  useEffect(() => {
    fetch("/api/knowledge")
      .then((r) => r.json())
      .then((data: CatalogueTopic[]) =>
        setTopics(data.filter((tp) => (tp.group ?? DEFAULT_GROUP) === params.group))
      )
      .catch(() => setTopics([]));
  }, [params.group]);

  if (!group) {
    return (
      <div className="max-w-2xl space-y-3">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("exam.poolTooSmall")}</p>
        <Link href="/exam" className="text-sm text-blue-600 dark:text-blue-400">
          {t("exam.backToTracks")}
        </Link>
      </div>
    );
  }

  if (topics === null) return <div className="text-sm text-zinc-500">{t("common.loading")}</div>;

  return <ExamRunner group={group} topics={topics} />;
}
