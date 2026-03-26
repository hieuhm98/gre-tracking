// GRE Study Plan Constants (from your requirements.txt plan)
export const PLAN = {
  startDate: new Date("2026-03-25"),
  examDate: new Date("2026-09-15"), // mid-September target
  phase3End: new Date("2026-08-07"),

  phases: [
    {
      id: 1,
      name: "Phase 1 — Xây nền & Nạp liệu",
      nameEn: "Phase 1 — Foundation",
      start: new Date("2026-03-25"),
      end: new Date("2026-05-18"),
      days: 55,
      color: "blue",
      sprints: [
        {
          id: "1.1",
          name: "Sprint 1.1 — Định hình",
          start: new Date("2026-03-25"),
          end: new Date("2026-04-21"),
          days: 28,
          kpis: [
            "Vocab recall >85% on random weekend test",
            "Write correct Main Idea for each passage read",
            "Reproduce all Quant formulas from blank paper",
            "Careless mistakes < 10% on concept exercises",
          ],
        },
        {
          id: "1.2",
          name: "Sprint 1.2 — Ép Format",
          start: new Date("2026-04-22"),
          end: new Date("2026-05-18"),
          days: 27,
          kpis: [
            "Explain why 4 wrong answer choices are wrong (Verbal)",
            "Solve Quant problems in < 1.5–2 min/question",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Phase 2 — Đào sâu & Viết luận",
      nameEn: "Phase 2 — Deep Review & Writing",
      start: new Date("2026-05-18"),
      end: new Date("2026-06-27"),
      days: 40,
      color: "violet",
      sprints: [],
      kpis: [
        "Outline a strong essay in 5 minutes",
        "Verbal/Quant re-attempt accuracy > 75%",
        "Complete all 39 AWA topics",
      ],
    },
    {
      id: 3,
      name: "Phase 3 — Thực chiến",
      nameEn: "Phase 3 — Mock Exams",
      start: new Date("2026-06-27"),
      end: new Date("2026-08-07"),
      days: 40,
      color: "green",
      sprints: [],
      kpis: [
        "Complete scheduled mock exams each week",
        "100% error log analysis after every mock",
        "Achieve > 75-80% score on mock tests",
      ],
    },
  ],

  dailyTargets: {
    pagesPerDay: 13,   // 700 pages / 55 days
    vocabPerDay: 91,   // 5000 words / 55 days
  },

  totals: {
    pages: 700,
    vocab: 5000,
    writingTopics: 39,
  },
};

export function getDaysRemaining(to: Date = PLAN.phase3End): number {
  return Math.max(0, Math.ceil((to.getTime() - Date.now()) / 86400000));
}

export function getDaysSinceStart(): number {
  return Math.floor((Date.now() - PLAN.startDate.getTime()) / 86400000);
}
