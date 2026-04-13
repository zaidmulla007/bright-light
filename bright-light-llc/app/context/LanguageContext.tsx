"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import translations, { type Translations } from "../translations";

type Lang = "en" | "ar";

function toArabicNumerals(str: string | number): string {
  const arabicDigits = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"];
  return String(str).replace(/[0-9]/g, (d) => arabicDigits[parseInt(d)]);
}

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  isArabic: boolean;
  t: Translations;
  n: (value: string | number) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  isArabic: false,
  t: translations.en,
  n: (v) => String(v),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const currentT = translations[lang] as Translations;

  const n = useCallback((value: string | number) => {
    return lang === "ar" ? toArabicNumerals(value) : String(value);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isArabic: lang === "ar", t: currentT, n }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
