import { useTranslate } from "./useTranslate";

// Available languages
const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "zh", label: "🇨🇳 中文" },
];

export function LanguageSelector() {
  const { language, setLanguage, t } = useTranslate();

  function handleChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <label>{t("common.language")}:</label>
      <select value={language} onChange={handleChange} style={selectStyle}>
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const selectStyle = {
  padding: "8px 12px",
  fontSize: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  cursor: "pointer",
};
