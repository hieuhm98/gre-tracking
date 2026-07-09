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
  "nav.dashboard": "Bảng điều khiển",
  "nav.log": "Nhật ký hằng ngày",
  "nav.milestones": "Cột mốc",
  "nav.mockExams": "Thi thử",
  "nav.knowledge": "Kiến thức",
  "nav.review": "Ôn tập",
  "nav.sqlPractice": "Luyện tập SQL",
  "nav.quickTest": "Test nhanh hằng ngày",
  "nav.myArticles": "Bài viết của tôi",
  "nav.sectionKnowledge": "Học tập",
  "nav.signOut": "Đăng xuất",
  "nav.devMode": "Chế độ dev (bỏ qua đăng nhập)",

  // Knowledge list
  "knowledge.title": "Kiến thức",
  "knowledge.subtitle": "Học theo nhóm — chọn một chủ đề để đọc và làm quiz.",
  "knowledge.official": "Chính thức",
  "knowledge.community": "Cộng đồng",
  "knowledge.writeArticle": "+ Viết bài",
  "knowledge.noCommunity": "Chưa có bài viết cộng đồng nào.",
  "knowledge.writeFirst": "Viết bài đầu tiên →",
  "knowledge.topics": "chủ đề",
  "knowledge.loading": "Đang tải...",

  // Article page
  "article.back": "← Kiến thức",
  "article.official": "Chính thức",
  "article.community": "Cộng đồng",
  "article.notFound": "Không tìm thấy bài viết.",
  "article.addQuestion": "+ Thêm câu hỏi cho chủ đề này",
  "article.newQuestion": "Thêm câu hỏi mới",
  "article.question": "Câu hỏi",
  "article.questionPlaceholder": "Nhập câu hỏi...",
  "article.options": "Các lựa chọn (chọn đáp án đúng)",
  "article.explanation": "Giải thích (không bắt buộc)",
  "article.explanationPlaceholder": "Giải thích đáp án đúng...",
  "article.save": "Lưu câu hỏi",
  "article.saving": "Đang lưu...",
  "article.cancel": "Hủy",

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
  "nav.dashboard": "Dashboard",
  "nav.log": "Daily Log",
  "nav.milestones": "Milestones",
  "nav.mockExams": "Mock Exams",
  "nav.knowledge": "Knowledge",
  "nav.review": "Review",
  "nav.sqlPractice": "SQL Practice",
  "nav.quickTest": "Daily Quick Test",
  "nav.myArticles": "My Articles",
  "nav.sectionKnowledge": "Learning",
  "nav.signOut": "Sign out",
  "nav.devMode": "Dev mode (auth skipped)",

  // Knowledge list
  "knowledge.title": "Knowledge",
  "knowledge.subtitle": "Learn by track — pick a topic to read and quiz yourself.",
  "knowledge.official": "Official",
  "knowledge.community": "Community",
  "knowledge.writeArticle": "+ Write Article",
  "knowledge.noCommunity": "No community articles yet.",
  "knowledge.writeFirst": "Write the first article →",
  "knowledge.topics": "topics",
  "knowledge.loading": "Loading...",

  // Article page
  "article.back": "← Knowledge",
  "article.official": "Official",
  "article.community": "Community",
  "article.notFound": "Article not found.",
  "article.addQuestion": "+ Add question to this topic",
  "article.newQuestion": "Add new question",
  "article.question": "Question",
  "article.questionPlaceholder": "Enter question...",
  "article.options": "Answer options (select the correct answer)",
  "article.explanation": "Explanation (optional)",
  "article.explanationPlaceholder": "Explain the correct answer...",
  "article.save": "Save question",
  "article.saving": "Saving...",
  "article.cancel": "Cancel",

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
