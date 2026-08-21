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
  "nav.learn": "Lộ trình học",
  "nav.review": "Ôn tập",
  "nav.progress": "Tiến độ",
  "nav.sqlPractice": "Luyện tập SQL",
  "nav.exercises": "Bài tập thiết kế",
  "nav.quickTest": "Test nhanh hằng ngày",
  "nav.sectionKnowledge": "Học tập",
  "nav.openMenu": "Mở menu",
  "nav.sectionPractice": "Luyện tập",

  // Language
  "lang.dual": "Song ngữ EN | VI",
  "lang.dualHint": "Hiển thị bài viết và câu hỏi bằng cả tiếng Anh và tiếng Việt cạnh nhau",
  "lang.dualOn": "Đang bật chế độ song ngữ — tiếng Anh bên trái, tiếng Việt bên phải.",

  // Theme
  "theme.toDark": "Chế độ tối",
  "theme.toLight": "Chế độ sáng",

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

  // Progress
  "progress.title": "Tiến độ học tập",
  "progress.subtitle":
    "Tiến độ được lưu trong trình duyệt của bạn và trong một file ảnh chụp đi kèm mỗi lần build.",
  "progress.best": "Điểm cao nhất",
  "progress.restored": "Đã khôi phục câu trả lời đã lưu",
  "progress.topicsStarted": "Chủ đề đã bắt đầu",
  "progress.topicsCompleted": "Chủ đề đã hoàn thành",
  "progress.questionsAnswered": "Câu đã trả lời",
  "progress.avgScore": "Điểm trung bình",
  "progress.streak": "Chuỗi ngày học",
  "progress.streakDays": "ngày",
  "progress.activeDays": "tổng số ngày đã học",
  "progress.sessions": "Lượt ôn tập",
  "progress.reviewAccuracy": "Độ chính xác khi ôn tập",
  "progress.byTopic": "Theo chủ đề",
  "progress.recentSessions": "Lượt ôn tập gần đây",
  "progress.noSessions": "Chưa có lượt ôn tập nào. Hãy thử một bài test nhanh!",
  "progress.notStarted": "Bạn chưa làm quiz nào. Mở một chủ đề để bắt đầu.",
  "progress.attempts": "lượt làm",
  "progress.storage": "Nơi lưu dữ liệu",
  "progress.storageLocal": "Chỉ lưu trong trình duyệt này",
  "progress.storageSynced": "Đã đồng bộ ra file trên máy chủ",
  "progress.storageLocalHint":
    "Máy chủ đang ở chế độ chỉ đọc (ví dụ Vercel), nên tiến độ chỉ nằm trong trình duyệt này. Hãy xuất file để sao lưu hoặc chuyển sang máy khác.",
  "progress.storageSyncedHint":
    "Tiến độ được ghi vào data/progress.json. Commit file này để bản build kế tiếp mang theo tiến độ hiện tại.",
  "progress.lastSynced": "Lần ghi file gần nhất",
  "progress.export": "Xuất file JSON",
  "progress.import": "Nhập từ file",
  "progress.reset": "Xóa toàn bộ",
  "progress.resetConfirm": "Xóa toàn bộ tiến độ học tập? Không thể hoàn tác.",
  "progress.imported": "Đã nhập tiến độ.",
  "progress.importFailed": "File không hợp lệ.",

  "common.loading": "Đang tải...",
};

const en: Dict = {
  // Sidebar
  "nav.home": "Home",
  "nav.knowledge": "Knowledge",
  "nav.learn": "Study path",
  "nav.review": "Review",
  "nav.progress": "Progress",
  "nav.sqlPractice": "SQL Practice",
  "nav.exercises": "Design Exercises",
  "nav.quickTest": "Daily Quick Test",
  "nav.sectionKnowledge": "Learning",
  "nav.openMenu": "Open menu",
  "nav.sectionPractice": "Practice",

  // Language
  "lang.dual": "Side-by-side EN | VI",
  "lang.dualHint": "Show articles and questions in English and Vietnamese at the same time",
  "lang.dualOn": "Side-by-side mode is on — English on the left, Vietnamese on the right.",

  // Theme
  "theme.toDark": "Dark mode",
  "theme.toLight": "Light mode",

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

  // Progress
  "progress.title": "Learning Progress",
  "progress.subtitle":
    "Progress is saved in your browser and in a snapshot file that ships with every build.",
  "progress.best": "Best",
  "progress.restored": "Restored your saved answers",
  "progress.topicsStarted": "Topics started",
  "progress.topicsCompleted": "Topics completed",
  "progress.questionsAnswered": "Questions answered",
  "progress.avgScore": "Average best score",
  "progress.streak": "Study streak",
  "progress.streakDays": "days",
  "progress.activeDays": "active days in total",
  "progress.sessions": "Review sessions",
  "progress.reviewAccuracy": "Review accuracy",
  "progress.byTopic": "By topic",
  "progress.recentSessions": "Recent review sessions",
  "progress.noSessions": "No review sessions yet — try a quick test!",
  "progress.notStarted": "You haven't taken a quiz yet. Open a topic to get started.",
  "progress.attempts": "attempts",
  "progress.storage": "Where this is stored",
  "progress.storageLocal": "This browser only",
  "progress.storageSynced": "Synced to a file on the server",
  "progress.storageLocalHint":
    "The server filesystem is read-only (e.g. Vercel), so progress lives in this browser only. Export a file to back it up or move it to another device.",
  "progress.storageSyncedHint":
    "Progress is written to data/progress.json. Commit that file and the next build will carry your current progress with it.",
  "progress.lastSynced": "Last written to file",
  "progress.export": "Export JSON",
  "progress.import": "Import file",
  "progress.reset": "Reset all",
  "progress.resetConfirm": "Erase all learning progress? This cannot be undone.",
  "progress.imported": "Progress imported.",
  "progress.importFailed": "That file isn't valid progress data.",

  "common.loading": "Loading...",
};

export const DICT: Record<Lang, Dict> = { vi, en };

export function translate(lang: Lang, key: string): string {
  return DICT[lang][key] ?? DICT.en[key] ?? key;
}
