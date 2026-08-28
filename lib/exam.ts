// Final exams: one randomly generated paper per curriculum track.
//
// The Daily Quick Test draws uniformly from a flat pool, which is right for a
// five-question warm-up but wrong for a final: with 534 questions across 31 BA
// topics, a uniform 40-question draw leaves whole topics untouched while
// doubling up on others, so two sittings can differ wildly in what they cover.
//
// A final paper is therefore *stratified*: every topic in the track is covered
// before any topic is asked twice, and the remainder is spread in proportion to
// how much material each topic holds. The paper is still different every time —
// which questions come from each topic, and the order they appear in, are both
// random — but the coverage is stable, so a score means the same thing from one
// sitting to the next.
//
// Everything here is pure and framework-free; `rand` is injectable so the draw
// can be tested deterministically.

/** Question counts offered on the setup screen. */
export const EXAM_COUNTS = [20, 40, 65] as const;
export const DEFAULT_EXAM_COUNT = 40;

/** Time allowance per question when the timer is on. */
export const SECONDS_PER_QUESTION = 90;

/** Below this, a track's pool is too thin for the longest paper to be varied. */
export const MIN_POOL = 20;

export function examSeconds(count: number): number {
  return count * SECONDS_PER_QUESTION;
}

/** `m:ss` up to an hour, `h:mm:ss` beyond it. */
export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  if (hours > 0) return `${hours}:${pad(minutes)}:${pad(seconds)}`;

  return `${minutes}:${pad(seconds)}`;
}

/** Fisher-Yates, on a copy. */
export function shuffle<T>(items: T[], rand: () => number = Math.random): T[] {
  const out = [...items];

  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }

  return out;
}

/** Choose one index from `items`, with probability proportional to its weight. */
function weightedPick(items: number[], weights: number[], rand: () => number): number {
  const total = weights.reduce((sum, w) => sum + w, 0);
  let ticket = rand() * total;

  for (let i = 0; i < items.length; i++) {
    ticket -= weights[i];

    if (ticket <= 0) return items[i];
  }

  return items[items.length - 1];
}

/**
 * Decide how many questions to draw from each topic, given how many each one
 * holds. Always sums to `min(total, pool)`, and never asks a topic for more
 * questions than it has.
 */
export function allocate(sizes: number[], total: number, rand: () => number = Math.random): number[] {
  const alloc = sizes.map(() => 0);
  const pool = sizes.reduce((sum, n) => sum + n, 0);
  let left = Math.max(0, Math.min(Math.trunc(total), pool));

  // Cover every topic once before doubling up anywhere. Which topics win the
  // single slot when the paper is shorter than the track has topics must be
  // random — otherwise a 20-question BA exam would always be the first 20
  // topics in curriculum order, and the last third would never be examined.
  const order = shuffle(
    sizes.map((_, i) => i).filter((i) => sizes[i] > 0),
    rand
  );

  for (const i of order) {
    if (left === 0) break;

    alloc[i] = 1;
    left -= 1;
  }

  // Spread the remainder in proportion to what each topic still has to give, so
  // a 25-question topic contributes roughly twice what a 12-question one does.
  while (left > 0) {
    const room = order.filter((i) => alloc[i] < sizes[i]);

    if (room.length === 0) break;

    alloc[weightedPick(room, room.map((i) => sizes[i] - alloc[i]), rand)] += 1;
    left -= 1;
  }

  return alloc;
}

export interface ExamTopic<Q> {
  slug: string;
  questions: Q[];
}

export interface ExamPick<Q> {
  slug: string;
  question: Q;
}

/**
 * Build one paper: a stratified draw across the track, shuffled so the topics
 * are interleaved rather than arriving in curriculum order.
 */
export function drawExam<Q>(
  topics: ExamTopic<Q>[],
  total: number,
  rand: () => number = Math.random
): ExamPick<Q>[] {
  const counts = allocate(
    topics.map((t) => t.questions.length),
    total,
    rand
  );

  const picked: ExamPick<Q>[] = [];

  topics.forEach((topic, i) => {
    shuffle(topic.questions, rand)
      .slice(0, counts[i])
      .forEach((question) => picked.push({ slug: topic.slug, question }));
  });

  return shuffle(picked, rand);
}

/** How the learner did on one topic within a paper. */
export interface TopicScore {
  slug: string;
  correct: number;
  total: number;
  pct: number;
}

/**
 * Score the paper topic by topic, weakest first — the part of a final result
 * that actually tells the learner where to go back to.
 */
export function topicBreakdown(slugs: string[], correct: boolean[]): TopicScore[] {
  const tally = new Map<string, { correct: number; total: number }>();

  slugs.forEach((slug, i) => {
    const row = tally.get(slug) ?? { correct: 0, total: 0 };

    row.total += 1;
    if (correct[i]) row.correct += 1;
    tally.set(slug, row);
  });

  return Array.from(tally.entries())
    .map(([slug, row]) => ({
      slug,
      correct: row.correct,
      total: row.total,
      pct: row.total > 0 ? Math.round((row.correct / row.total) * 100) : 0,
    }))
    .sort((a, b) => a.pct - b.pct || b.total - a.total || a.slug.localeCompare(b.slug));
}
