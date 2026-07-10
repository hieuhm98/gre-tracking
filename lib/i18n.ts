// UI string dictionary for the two supported languages.
// Learning *content* (articles + questions) is bilingual in the data files;
// this dictionary covers the surrounding interface chrome.

export type Lang = "vi" | "en";

export const LANGS: { id: Lang; label: string; short: string }[] = [
  { id: "vi", label: "Tiếng Việt", short: "VI" },
  { id: "en", label: "English", short: "EN" },
];

export const DEFAULT_LANG: Lang = "vi";

type Dict = Record<string, string>;

const vi: Dict = {
  // Sidebar
  "nav.home": "Trang chủ",
  "nav.knowledge": "Kiến thức",
  "nav.review": "Ôn tập",
  "nav.sqlPractice": "Luyện tập SQL",
  "nav.exercises": "Bài tập thiết kế",
  "nav.quickTest": "Test nhanh hằng ngày",
  "nav.sectionKnowledge": "Học tập",
  "nav.sectionPractice": "Luyện tập",

  // Knowledge list
  "knowledge.title": "Kiến thức",
  "knowledge.subtitle": "Học theo nhóm — chọn một chủ đề để đọc và làm quiz.",
  "knowledge.topics": "chủ đề",

  // Article page
  "article.back": "← Kiến thức",
  "article.official": "Chính thức",
  "article.notFound": "Không tìm thấy bài viết.",

  // Quiz
  "quiz.title": "Kiểm tra kiến thức",
  "quiz.questions": "câu hỏi",
  "quiz.prev": "← Trước",
  "quiz.next": "Sau →",
  "quiz.answered": "Đã trả lời",
  "quiz.viewResults": "Xem kết quả",
  "quiz.correct": "đúng",
  "quiz.retry": "Làm lại",
  "quiz.explanation": "Giải thích: ",
  "quiz.yourAnswer": "← Câu trả lời của bạn",
  "quiz.correctLabel": "✓ Đúng",
  "quiz.empty": "Chủ đề này chưa có câu hỏi nào.",

  // Review / Quick test
  "review.title": "Ôn tập ngẫu nhiên",
  "review.subtitle": "Chọn nhóm, chủ đề và số câu hỏi để bắt đầu.",
  "review.quickTitle": "Test nhanh hằng ngày",
  "review.quickSubtitle": "Một bài test ngắn ngẫu nhiên để luyện tập mỗi ngày.",
  "review.quickStart": "Bắt đầu test nhanh (5 câu)",
  "review.quickStartGroup": "Test nhanh nhóm này",
  "review.groups": "Nhóm",
  "review.topics": "Chủ đề",
  "review.selectAll": "Chọn tất cả",
  "review.deselectAll": "Bỏ chọn tất cả",
  "review.numQuestions": "Số câu hỏi",
  "review.start": "Bắt đầu ôn tập →",
  "review.reviewAgain": "Ôn lại",
  "review.exit": "← Thoát",
  "review.question": "Câu",
  "review.answered": "Đã trả lời",
  "review.noQuestions": "Không có câu hỏi nào cho lựa chọn hiện tại.",
  "review.all": "Tất cả",
  "common.loading": "Đang tải...",
};

const en: Dict = {
  // Sidebar
  "nav.home": "Home",
  "nav.knowledge": "Knowledge",
  "nav.review": "Review",
  "nav.sqlPractice": "SQL Practice",
  "nav.exercises": "Design Exercises",
  "nav.quickTest": "Daily Quick Test",
  "nav.sectionKnowledge": "Learning",
  "nav.sectionPractice": "Practice",

  // Knowledge list
  "knowledge.title": "Knowledge",
  "knowledge.subtitle": "Learn by track — pick a topic to read and quiz yourself.",
  "knowledge.topics": "topics",

  // Article page
  "article.back": "← Knowledge",
  "article.official": "Official",
  "article.notFound": "Article not found.",

  // Quiz
  "quiz.title": "Knowledge Check",
  "quiz.questions": "questions",
  "quiz.prev": "← Prev",
  "quiz.next": "Next →",
  "quiz.answered": "Answered",
  "quiz.viewResults": "View Results",
  "quiz.correct": "correct",
  "quiz.retry": "Retry",
  "quiz.explanation": "Explanation: ",
  "quiz.yourAnswer": "← Your answer",
  "quiz.correctLabel": "✓ Correct",
  "quiz.empty": "This topic has no questions yet.",

  // Review / Quick test
  "review.title": "Random Review",
  "review.subtitle": "Select a track, topics and question count to start.",
  "review.quickTitle": "Daily Quick Test",
  "review.quickSubtitle": "A short randomized test to practice every day.",
  "review.quickStart": "Start quick test (5 questions)",
  "review.quickStartGroup": "Quick test this track",
  "review.groups": "Tracks",
  "review.topics": "Topics",
  "review.selectAll": "Select all",
  "review.deselectAll": "Deselect all",
  "review.numQuestions": "Number of questions",
  "review.start": "Start Review →",
  "review.reviewAgain": "Review Again",
  "review.exit": "← Exit",
  "review.question": "Question",
  "review.answered": "Answered",
  "review.noQuestions": "No questions available for the current selection.",
  "review.all": "All",
  "common.loading": "Loading...",
};

export const DICT: Record<Lang, Dict> = { vi, en };

export function translate(lang: Lang, key: string): string {
  return DICT[lang][key] ?? DICT.en[key] ?? key;
}
