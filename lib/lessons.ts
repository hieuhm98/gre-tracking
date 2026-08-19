// Mini-lessons: each knowledge topic can be split into 5–10 minute chunks.
//
// A topic's `lessons.json` maps a contiguous run of the article's `## ` sections
// to a mini-lesson, plus the question ids that belong to it. The split is data,
// not text — the articles are untouched and sliced at render time — so editing
// an article only requires keeping the section count in step.
//
// Topics without a lessons.json simply have no study mode; the full article and
// its quiz still work as before.

import { type ProgressData } from "./progress";

export interface Lesson {
  id: string;
  title: string;
  titleEn?: string;
  /** 1-based indices into the article's `## ` headings, contiguous. */
  sections: number[];
  questionIds: string[];
  /** The final wrap-up lesson: exam points + summary, tested cumulatively. */
  recap?: boolean;
}

export interface LessonTopic {
  slug: string;
  group: string;
  title: string;
  titleEn?: string;
  /** Position within the group's curriculum, from meta.json. */
  order?: number;
  lessons: Lesson[];
}

/** Stable key for a mini-lesson across the whole curriculum. */
export function lessonKey(slug: string, lessonId: string): string {
  return `${slug}#${lessonId}`;
}

/** Stable key for one question, used for per-question recall stats. */
export function questionKey(slug: string, questionId: string): string {
  return `${slug}#${questionId}`;
}

/**
 * Break an article into its `# ` preamble and one string per `## ` section.
 *
 * VI and EN articles are authored with identical section counts, so splitting
 * both and zipping the results lines the two languages up section by section —
 * which is what the side-by-side reading mode renders.
 */
export function splitArticle(markdown: string): { preamble: string; sections: string[] } {
  const lines = markdown.split("\n");
  const starts: number[] = [];

  lines.forEach((line, i) => {
    if (line.startsWith("## ")) starts.push(i);
  });

  if (starts.length === 0) return { preamble: markdown.trimEnd(), sections: [] };

  const sections = starts.map((start, i) =>
    lines.slice(start, starts[i + 1] ?? lines.length).join("\n").trimEnd()
  );

  return { preamble: lines.slice(0, starts[0]).join("\n").trimEnd(), sections };
}

/**
 * Extract the markdown for a mini-lesson: the requested `## ` sections, with the
 * article's `# ` title line dropped (the page renders its own heading).
 */
export function sliceSections(markdown: string, sections: number[]): string {
  if (sections.length === 0) return markdown;

  const all = splitArticle(markdown).sections;

  return sections
    .map((n) => all[n - 1])
    .filter((s): s is string => s !== undefined)
    .join("\n\n");
}

export interface ReviewCandidate {
  slug: string;
  questionId: string;
  key: string;
}

/**
 * Questions eligible for spaced review: everything belonging to mini-lessons
 * already completed, minus the lesson being studied. Capped to a few topics so
 * the player never has to pull the whole catalogue to build one 5-question test.
 */
export function reviewCandidates(
  topics: LessonTopic[],
  progress: ProgressData,
  options: { excludeKey?: string; maxTopics?: number } = {}
): ReviewCandidate[] {
  const { excludeKey, maxTopics = 4 } = options;
  const bySlug = new Map<string, { candidates: ReviewCandidate[]; lastAt: string }>();

  for (const topic of topics) {
    for (const lesson of topic.lessons) {
      const key = lessonKey(topic.slug, lesson.id);
      const state = progress.lessons[key];

      if (!state?.completed || key === excludeKey) continue;

      const entry = bySlug.get(topic.slug) ?? { candidates: [], lastAt: "" };

      lesson.questionIds.forEach((questionId) => {
        entry.candidates.push({
          slug: topic.slug,
          questionId,
          key: questionKey(topic.slug, questionId),
        });
      });

      if (state.updatedAt > entry.lastAt) entry.lastAt = state.updatedAt;

      bySlug.set(topic.slug, entry);
    }
  }

  return Array.from(bySlug.values())
    .sort((a, b) => b.lastAt.localeCompare(a.lastAt))
    .slice(0, maxTopics)
    .flatMap((entry) => entry.candidates);
}

/** Flatten the curriculum into study order: topic order, then lesson order. */
export function flattenLessons(topics: LessonTopic[]): { topic: LessonTopic; lesson: Lesson }[] {
  return topics.flatMap((topic) => topic.lessons.map((lesson) => ({ topic, lesson })));
}

/** The lesson immediately after this one, crossing into the next topic. */
export function nextLesson(
  topics: LessonTopic[],
  slug: string,
  lessonId: string
): { topic: LessonTopic; lesson: Lesson } | null {
  const flat = flattenLessons(topics);
  const at = flat.findIndex((x) => x.topic.slug === slug && x.lesson.id === lessonId);

  if (at === -1 || at === flat.length - 1) return null;

  return flat[at + 1];
}

/**
 * Where a topic sits in the learner's journey.
 *
 * The study path lists 40+ topics, so plain curriculum order buries whatever
 * someone is actually working on. Bucketing by engagement puts the live work
 * first, the natural next thing second, and finished work out of the way.
 */
export type TopicBucket = "in-progress" | "not-started" | "completed";

export interface RankedTopic {
  topic: LessonTopic;
  bucket: TopicBucket;
  done: number;
  total: number;
  /** ISO timestamp of the most recent activity in this topic, or null. */
  lastActive: string | null;
}

/** Most recent `updatedAt` across a topic's mini-lessons, or null if untouched. */
function lastActivity(topic: LessonTopic, progress: ProgressData): string | null {
  let latest: string | null = null;

  for (const lesson of topic.lessons) {
    const state = progress.lessons[lessonKey(topic.slug, lesson.id)];

    if (state && (latest === null || state.updatedAt > latest)) latest = state.updatedAt;
  }

  return latest;
}

/**
 * Sort the curriculum around what the learner is doing right now.
 *
 * Buckets, in order: topics under way (most recently touched first), then
 * untouched topics — with the track the learner is currently in floated to the
 * top so the obvious next topic sits right under the live one — then finished
 * topics. Ties inside a bucket keep curriculum order, so the list stays stable
 * between visits rather than reshuffling on every click.
 */
export function rankTopics(topics: LessonTopic[], progress: ProgressData): RankedTopic[] {
  const ranked: RankedTopic[] = topics.map((topic, order) => {
    const done = topic.lessons.filter(
      (l) => progress.lessons[lessonKey(topic.slug, l.id)]?.completed
    ).length;
    const lastActive = lastActivity(topic, progress);
    const bucket: TopicBucket =
      done === topic.lessons.length && topic.lessons.length > 0
        ? "completed"
        : lastActive !== null
          ? "in-progress"
          : "not-started";

    return { topic, bucket, done, total: topic.lessons.length, lastActive, order } as RankedTopic & {
      order: number;
    };
  });

  // The track the learner most recently worked in — untouched topics there are
  // the likeliest next step, so they lead the not-started bucket.
  const recent = ranked
    .filter((r) => r.lastActive !== null)
    .sort((a, b) => (a.lastActive! < b.lastActive! ? 1 : -1))[0];
  const activeGroup = recent?.topic.group ?? null;

  const weight: Record<TopicBucket, number> = {
    "in-progress": 0,
    "not-started": 1,
    completed: 2,
  };

  return ranked.slice().sort((a, b) => {
    if (weight[a.bucket] !== weight[b.bucket]) return weight[a.bucket] - weight[b.bucket];

    // Touched buckets: freshest first, so "where was I?" is answered at a glance.
    if (a.bucket !== "not-started") {
      if (a.lastActive !== b.lastActive) return a.lastActive! < b.lastActive! ? 1 : -1;
    } else if (activeGroup) {
      const aHere = a.topic.group === activeGroup ? 0 : 1;
      const bHere = b.topic.group === activeGroup ? 0 : 1;

      if (aHere !== bHere) return aHere - bHere;
    }

    return (a as RankedTopic & { order: number }).order - (b as RankedTopic & { order: number }).order;
  });
}

/**
 * The lesson to resume: the first unfinished one in the topic the learner
 * touched most recently, falling back to the first unfinished lesson in
 * curriculum order for someone who has not started yet.
 */
export function resumeLesson(
  topics: LessonTopic[],
  progress: ProgressData
): { topic: LessonTopic; lesson: Lesson } | null {
  const done = (slug: string, id: string) => progress.lessons[lessonKey(slug, id)]?.completed ?? false;
  const live = rankTopics(topics, progress).find((r) => r.bucket === "in-progress");

  if (live) {
    const lesson = live.topic.lessons.find((l) => !done(live.topic.slug, l.id));

    if (lesson) return { topic: live.topic, lesson };
  }

  return flattenLessons(topics).find((x) => !done(x.topic.slug, x.lesson.id)) ?? null;
}
