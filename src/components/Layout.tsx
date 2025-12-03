import { Layout as AntLayout, Menu, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  FundViewOutlined, 
  BarChartOutlined, 
  SoundOutlined,
  SearchOutlined 
} from "@ant-design/icons";
import { useTranslate } from "../i18n";
import { LanguageSelector } from "./LanguageSelector";

const { Header, Sider, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslate();

  const menuItems = [
    {
      key: "/overview",
      icon: <FundViewOutlined />,
      label: t("nav.overview"),
    },
    {
      key: "/report",
      icon: <BarChartOutlined />,
      label: t("nav.report"),
    },
    {
      key: "/campaign",
      icon: <SoundOutlined />,
      label: t("nav.campaign"),
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#001529",
          padding: "0 24px",
        }}
      >
        <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          VAFusion Demo
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Input
            placeholder={t("nav.search")}
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <LanguageSelector />
        </div>
      </Header>
      <AntLayout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Sider>
        <Content style={{ padding: "24px", background: "#f0f2f5" }}>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
}

