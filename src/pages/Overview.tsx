import { Card, Row, Col, Statistic } from "antd";
import { useTranslate } from "../i18n";

export function Overview() {
  const { t } = useTranslate();

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>{t("overview.title")}</h1>
      
      <Row gutter={16} style={{ marginBottom: "24px" }}>
        <Col span={6}>
          <Card>
            <Statistic
              title={t("overview.totalCampaigns")}
              value={1128}
              prefix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title={t("overview.activeCampaigns")}
              value={456}
              prefix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title={t("overview.totalImpressions")}
              value={112893}
              prefix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title={t("overview.totalClicks")}
              value={8934}
              prefix=""
            />
          </Card>
        </Col>
      </Row>

      <Card title={t("overview.description")}>
        <p>{t("overview.content")}</p>
      </Card>
    </div>
  );
}


