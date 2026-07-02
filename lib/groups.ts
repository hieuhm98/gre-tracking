// Content groups. Each knowledge topic belongs to a group via its meta.json
// `group` field. Groups are rendered as sections on the Knowledge page and can
// be used to scope the Daily Quick Test.

export interface Group {
  id: string;
  order: number;
  label: string; // Vietnamese
  labelEn: string; // English
  description: string;
  descriptionEn: string;
  icon: string;
  /** Tailwind color name used for accents (must exist in the safelist below). */
  accent: "blue" | "orange";
}

export const GROUPS: Group[] = [
  {
    id: "ba-po-pm",
    order: 1,
    label: "BA · PO · PM",
    labelEn: "BA · PO · PM",
    description: "Kiến thức IT nền tảng cho Business Analyst, Product Owner, Project Manager.",
    descriptionEn: "Foundational IT knowledge for Business Analysts, Product Owners, and Project Managers.",
    icon: "◉",
    accent: "blue",
  },
  {
    id: "dev",
    order: 2,
    label: "Developer · AWS",
    labelEn: "Developer · AWS",
    description: "Lộ trình AWS Certified Solutions Architect – Associate (SAA-C03).",
    descriptionEn: "AWS Certified Solutions Architect – Associate (SAA-C03) learning track.",
    icon: "☁",
    accent: "orange",
  },
];

export const DEFAULT_GROUP = "ba-po-pm";

export function getGroup(id: string | undefined): Group | undefined {
  return GROUPS.find((g) => g.id === id);
}

// Accent class maps (kept explicit so Tailwind's JIT keeps these classes).
export const GROUP_ACCENT: Record<Group["accent"], { badge: string; bar: string; text: string }> = {
  blue: {
    badge: "bg-blue-900/40 text-blue-300 border-blue-800",
    bar: "bg-blue-500",
    text: "text-blue-400",
  },
  orange: {
    badge: "bg-orange-900/40 text-orange-300 border-orange-800",
    bar: "bg-orange-500",
    text: "text-orange-400",
  },
};
