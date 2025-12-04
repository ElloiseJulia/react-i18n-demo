import { useState, ReactNode } from "react";
import type { LanguageCode, Translations } from "./types";
import { TranslationContext } from "./TranslationContext";

import enHome from "./en/home.json";
import enCommon from "./en/common.json";
import enOverview from "./en/overview.json";
import enReport from "./en/report.json";
import enCampaign from "./en/campaign.json";
import enNav from "./en/nav.json";
import zhHome from "./zh/home.json";
import zhCommon from "./zh/common.json";
import zhOverview from "./zh/overview.json";
import zhReport from "./zh/report.json";
import zhCampaign from "./zh/campaign.json";
import zhNav from "./zh/nav.json";

const ALL_TRANSLATIONS: Record<LanguageCode, Translations> = {
  en: {
    home: enHome,
    common: enCommon,
    overview: enOverview,
    report: enReport,
    campaign: enCampaign,
    nav: enNav,
  },
  zh: {
    home: zhHome,
    common: zhCommon,
    overview: zhOverview,
    report: zhReport,
    campaign: zhCampaign,
    nav: zhNav,
  },
};

interface TranslationProviderProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
}

export function TranslationProvider({ 
  children, 
  defaultLanguage = "en" 
}: TranslationProviderProps) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const translations = ALL_TRANSLATIONS[language] || ALL_TRANSLATIONS["en"];

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

