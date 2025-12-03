import { useTranslate } from "../i18n";

export function Home() {
  const { t } = useTranslate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t("home.title")}</h1>
      <h2 style={styles.subtitle}>{t("home.subtitle")}</h2>
      <p style={styles.description}>{t("home.description")}</p>

      <div style={styles.buttons}>
        <button style={styles.buttonPrimary}>{t("common.save")}</button>
        <button style={styles.buttonSecondary}>{t("common.cancel")}</button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    fontWeight: 400,
    marginBottom: "24px",
  },
  description: {
    fontSize: "16px",
    color: "#888",
    lineHeight: 1.6,
    marginBottom: "32px",
  },
  buttons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  buttonPrimary: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  buttonSecondary: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

