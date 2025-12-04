export type LanguageCode = "en" | "zh" | string;

export interface TranslationFile {
  [key: string]: string | TranslationFile;
}

export interface Translations {
  [fileName: string]: TranslationFile;
}

export interface TranslationContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  translations: Translations;
  isLoading?: boolean;
}

export interface UseTranslateReturn {
  t: (key: string) => string;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isLoading?: boolean;
}

export interface LanguageOption {
  code: LanguageCode;
  label: string;
}

