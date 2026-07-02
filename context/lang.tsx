"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { type Lang, DEFAULT_LANG, translate } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Translate a UI string key. */
  t: (key: string) => string;
  /** Pick the right value from a bilingual pair (vi value, en value). */
  pick: (vi: string | undefined, en: string | undefined) => string;
}

const LangContext = createContext<LangContextType>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggle: () => {},
  t: (k) => k,
  pick: (vi) => vi ?? "",
});

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Load persisted preference on mount.
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "vi" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "vi" ? "en" : "vi");
  }, [lang, setLang]);

  const t = useCallback((key: string) => translate(lang, key), [lang]);

  const pick = useCallback(
    (vi: string | undefined, en: string | undefined) => {
      if (lang === "en") return en || vi || "";
      return vi || en || "";
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, pick }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
