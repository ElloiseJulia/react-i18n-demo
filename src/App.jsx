import { TranslationProvider, LanguageSelector } from "./i18n";
import { Home } from "./components/Home";

export default function App() {
  return (
    <TranslationProvider>
      <div style={styles.app}>
        <header style={styles.header}>
          <LanguageSelector />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </TranslationProvider>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 24px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fafafa",
  },
};
