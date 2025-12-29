import { App, ConfigProvider, Layout, theme } from "antd";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
export default function AppShell() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <App>
        <Layout>
          <AppHeader />
          <AppContent />
        </Layout>
      </App>
    </ConfigProvider>
  );
}
