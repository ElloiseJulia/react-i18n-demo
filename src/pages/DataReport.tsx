import { Card, Table, Tag } from "antd";
import { useTranslate } from "../i18n";

export function DataReport() {
  const { t } = useTranslate();

  const columns = [
    {
      title: t("report.campaignName"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("report.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "default"}>
          {status === "active" ? t("report.active") : t("report.inactive")}
        </Tag>
      ),
    },
    {
      title: t("report.impressions"),
      dataIndex: "impressions",
      key: "impressions",
    },
    {
      title: t("report.clicks"),
      dataIndex: "clicks",
      key: "clicks",
    },
  ];

  const data = [
    {
      key: "1",
      name: t("report.campaign1"),
      status: "active",
      impressions: "12,345",
      clicks: "234",
    },
    {
      key: "2",
      name: t("report.campaign2"),
      status: "active",
      impressions: "8,901",
      clicks: "156",
    },
    {
      key: "3",
      name: t("report.campaign3"),
      status: "inactive",
      impressions: "5,678",
      clicks: "89",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>{t("report.title")}</h1>
      
      <Card>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
}

