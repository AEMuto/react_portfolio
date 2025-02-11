import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "en";

const getBrowserLanguage = (): Language => {
  // Get browser language (returns something like "fr", "fr-FR", "en-US", etc.)
  const browserLang = navigator.language.toLowerCase().split("-")[0];
  
  // Return "fr" if browser language is French, "en" otherwise
  return browserLang === "fr" ? "fr" : "en";
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { fr: string; en: string }) => string;
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

  const t = (translations: { fr: string; en: string }) => {
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