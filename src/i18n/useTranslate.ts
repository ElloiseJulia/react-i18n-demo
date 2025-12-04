import { useContext } from "react";
import { TranslationContext } from "./TranslationContext";
import type { UseTranslateReturn } from "./types";

export function useTranslate(): UseTranslateReturn {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslate must be used inside a TranslationProvider");
  }

  const { language, setLanguage, translations, isLoading } = context;

  function t(key: string): string {
    const parts = key.split(".");
    const fileName = parts[0];
    
    const file = translations[fileName];
    if (!file) {
      console.warn(`File not found: ${fileName}`);
      return key;
    }

    let value: any = file;
    for (let i = 1; i < parts.length; i++) {
      value = value[parts[i]];
      if (value === undefined) {
        console.warn(`Key not found: ${key}`);
        return key;
      }
    }

    if (typeof value === "string") {
      return value;
    }
    
    console.warn(`Key ${key} is not a string value`);
    return key;
  }

  return { t, language, setLanguage, isLoading };
}

