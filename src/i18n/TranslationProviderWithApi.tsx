import { useState, ReactNode, useEffect } from "react";
import type { LanguageCode, Translations } from "./types";
import { TranslationContext } from "./TranslationContext";
import { fetchTranslationsFromApi } from "../services/translationApi";

interface TranslationProviderWithApiProps {
  children: ReactNode;
  defaultLanguage?: LanguageCode;
  useApi?: boolean;
  apiBaseUrl?: string;
}

export function TranslationProviderWithApi({ 
  children, 
  defaultLanguage = "en",
  useApi = false,
  apiBaseUrl: _apiBaseUrl
}: TranslationProviderWithApiProps) {
  const [language, setLanguage] = useState<LanguageCode>(defaultLanguage);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (useApi) {
      loadTranslationsFromApi(language);
    } else {
      loadLocalTranslations(language);
    }
  }, [language, useApi]);

  const loadTranslationsFromApi = async (lang: LanguageCode) => {
    setIsLoading(true);
    try {
      const data = await fetchTranslationsFromApi(lang);
      setTranslations(data.translations);
    } catch (error) {
      console.error("Failed to load translations from API, falling back to local:", error);
      loadLocalTranslations(lang);
    } finally {
      setIsLoading(false);
    }
  };

  const loadLocalTranslations = async (lang: LanguageCode) => {
    try {
      if (lang === "en") {
        const [home, common] = await Promise.all([
          import("./en/home.json"),
          import("./en/common.json")
        ]);
        setTranslations({ home: home.default, common: common.default });
      } else if (lang === "zh") {
        const [home, common] = await Promise.all([
          import("./zh/home.json"),
          import("./zh/common.json")
        ]);
        setTranslations({ home: home.default, common: common.default });
      }
    } catch (error) {
      console.error("Failed to load local translations:", error);
    }
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage, translations, isLoading }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

