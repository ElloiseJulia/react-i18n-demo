import { Select } from "antd";
import { useTranslate } from "../i18n";
import type { LanguageOption } from "../i18n/types";

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "🇬🇧 English" },
  { code: "zh", label: "🇨🇳 中文" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useTranslate();

  return (
    <Select
      value={language}
      onChange={setLanguage}
      style={{ width: 150 }}
      options={LANGUAGES.map((lang) => ({
        value: lang.code,
        label: lang.label,
      }))}
    />
  );
}

