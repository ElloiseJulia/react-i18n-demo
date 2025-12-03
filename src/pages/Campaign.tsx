import { Card, Button, Space, Input, Row, Col } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslate } from "../i18n";

export function Campaign() {
  const { t } = useTranslate();

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
        <h1>{t("campaign.title")}</h1>
        <Space>
          <Input
            placeholder={t("campaign.search")}
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary" icon={<PlusOutlined />}>
            {t("campaign.create")}
          </Button>
        </Space>
      </div>

      <Row gutter={16}>
        <Col span={8}>
          <Card title={t("campaign.card1.title")}>
            <p>{t("campaign.card1.content")}</p>
            <Button type="link">{t("common.viewDetail")} →</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={t("campaign.card2.title")}>
            <p>{t("campaign.card2.content")}</p>
            <Button type="link">{t("common.viewDetail")} →</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={t("campaign.card3.title")}>
            <p>{t("campaign.card3.content")}</p>
            <Button type="link">{t("common.viewDetail")} →</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

