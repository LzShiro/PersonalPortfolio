"use client";

import { createContext, useContext, useState } from "react";
import en from "@/locales/en";
import es from "@/locales/es";

type Lang = "en" | "es";

const languages = { en, es };

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof en;
}>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
