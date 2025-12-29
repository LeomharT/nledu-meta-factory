import { Layout } from 'antd';
import Classes from '../../components/Classes';
import Courses from '../../components/Courses';
import Instructor from '../../components/Instructor';
import classes from './style.module.css';

export default function AppContent() {
  return (
    <Layout.Content className={classes.content}>
      <div className={classes.left}>
        <Instructor />
        <Classes />
      </div>
      <div className={classes.middle}>
        <Courses />
      </div>
      <div className={classes.right}>3</div>
    </Layout.Content>
  );
}
