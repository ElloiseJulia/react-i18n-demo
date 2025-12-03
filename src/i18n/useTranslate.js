import { useContext } from "react";
import { TranslationContext } from "./TranslationProvider";

// ============================================
// HOOK useTranslate
// ============================================

export function useTranslate() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslate must be used inside a TranslationProvider");
  }

  const { language, setLanguage, translations } = context;

  // Translation function: t("home.title") or t("common.save")
  function t(key) {
    const [fileName, translationKey] = key.split(".");

    const file = translations[fileName];
    if (!file) {
      console.warn(`File not found: ${fileName}`);
      return key;
    }

    const translation = file[translationKey];
    if (!translation) {
      console.warn(`Key not found: ${key}`);
      return key;
    }

    return translation;
  }

  return { t, language, setLanguage };
}