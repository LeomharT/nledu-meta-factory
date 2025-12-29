import { Card, Layout } from "antd";
import classes from "./style.module.css";

export default function AppContent() {
  return (
    <Layout.Content className={classes.content}>
      <Card></Card>
    </Layout.Content>
  );
}
