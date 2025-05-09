import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getBrowserLanguage } from "@/utils/language";

export type Language = "fr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { fr: string | React.ReactNode; en: string | React.ReactNode }) => React.ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage first
    const savedLang = localStorage.getItem("language") as Language;
    return savedLang || getBrowserLanguage();
  });

  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem("language", language);
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  const t = (translations: { fr: string | React.ReactNode; en: string | React.ReactNode }) => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
