import type { Language } from "@contexts/LanguageContext";

export const getBrowserLanguage = (): Language => {
  // Get browser language (returns something like "fr", "fr-FR", "en-US", etc.)
  const browserLang = navigator.language.toLowerCase().split("-")[0];

  // Return "fr" if browser language is French, "en" otherwise
  return browserLang === "fr" ? "fr" : "en";
};