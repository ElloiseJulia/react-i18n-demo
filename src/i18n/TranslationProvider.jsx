import { createContext, useState } from "react";

// ============================================
// IMPORT ALL TRANSLATIONS DIRECTLY
// ============================================

import enHome from "./en/home.json";
import enCommon from "./en/common.json";
import zhHome from "./zh/home.json";
import zhCommon from "./zh/common.json";

// All translations organized by language
const ALL_TRANSLATIONS = {
  en: {
    home: enHome,
    common: enCommon,
  },
  zh: {
    home: zhHome,
    common: zhCommon,
  },
};

// ============================================
// TRANSLATION CONTEXT
// ============================================

export const TranslationContext = createContext(null);

// ============================================
// PROVIDER COMPONENT
// ============================================

export function TranslationProvider({ children }) {
  // Current language (English by default)
  const [language, setLanguage] = useState("en");

  // Get translations for current language
  const translations = ALL_TRANSLATIONS[language];

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </TranslationContext.Provider>
  );
}
