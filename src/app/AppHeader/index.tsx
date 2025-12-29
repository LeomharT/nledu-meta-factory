import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Flex,
  Grid,
  Image,
  Layout,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import data from "../../data/data.json";
import classes from "./style.module.css";

export default function AppHeader() {
  const breakpoint = Grid.useBreakpoint();

  return (
    <Layout.Header className={classes.header}>
      <Flex align="center" gap={12}>
        <Image preview={false} src="/meta-factory-icon.png" />
        <Space orientation="vertical" size={0}>
          <Typography.Title level={3}>MetaFactory</Typography.Title>
          <Typography>数字孪生实验工厂</Typography>
        </Space>
      </Flex>
      {breakpoint.xl && (
        <Flex align="center" gap={20}>
          {data.onlineStatus.map((item) => (
            <Space key={item.id}>
              <Badge status="success" />
              <Typography.Text type="secondary">
                {item.label}: 在线
              </Typography.Text>
            </Space>
          ))}
        </Flex>
      )}
      {breakpoint.sm && (
        <Flex align="center" gap={16}>
          {breakpoint.md && <CurrentTime />}
          <div className={classes.divider}></div>
          <Flex vertical gap={0}>
            <Typography.Title level={5}>系统管理员</Typography.Title>
            <Space style={{ lineHeight: 1 }}>
              <Badge status="success" />
              <Typography.Text type="success">在线</Typography.Text>
            </Space>
          </Flex>
          <Avatar size={56} shape="circle">
            <UserOutlined style={{ fontSize: 26, marginTop: 4 }} />
          </Avatar>
        </Flex>
      )}
    </Layout.Header>
  );
}

function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Flex vertical gap={0}>
      <Typography.Title level={3} className={classes.time}>
        {Intl.DateTimeFormat("zh-CN", {
          timeStyle: "medium",
        }).format(date)}
      </Typography.Title>
      <Typography.Text type="secondary">
        {Intl.DateTimeFormat("zh-CN", {
          dateStyle: "medium",
        }).format(date)}
      </Typography.Text>
    </Flex>
  );
}
