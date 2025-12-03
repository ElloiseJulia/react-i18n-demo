import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";
import { TranslationProvider, useTranslate } from "./i18n";
import { Layout } from "./components/Layout";
import { Overview } from "./pages/Overview";
import { DataReport } from "./pages/DataReport";
import { Campaign } from "./pages/Campaign";

function AppContent() {
  const { language } = useTranslate();

  return (
    <ConfigProvider locale={language === "zh" ? zhCN : enUS}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/report" element={<DataReport />} />
            <Route path="/campaign" element={<Campaign />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}
