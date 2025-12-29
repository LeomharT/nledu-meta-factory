import { Layout } from "antd";
import Classes from "../../components/Classes";
import Instructor from "../../components/Instructor";
import classes from "./style.module.css";

export default function AppContent() {
  return (
    <Layout.Content className={classes.content}>
      <div className={classes.left}>
        <Instructor />
        <Classes />
      </div>
      <div className={classes.middle}>2</div>
      <div className={classes.right}>3</div>
    </Layout.Content>
  );
}
