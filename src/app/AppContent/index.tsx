import { Grid, Layout } from "antd";
import Instructor from "../../components/Instructor";
import classes from "./style.module.css";

export default function AppContent() {
  const breakpoint = Grid.useBreakpoint();

  console.log(breakpoint);

  return (
    <Layout.Content className={classes.content}>
      <div className={classes.left}>
        <Instructor />
      </div>
      <div className={classes.middle}>2</div>
      <div className={classes.right}>3</div>
    </Layout.Content>
  );
}
