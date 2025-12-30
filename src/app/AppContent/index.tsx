import { Layout } from 'antd';
import Classes from '../../components/Classes';
import Courses from '../../components/Courses';
import EnterBtn from '../../components/EnterBtn';
import Instructor from '../../components/Instructor';
import Students from '../../components/Students';
import Task from '../../components/Task';
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
      <div className={classes.right}>
        <Students />
        <Task />
        <EnterBtn />
      </div>
    </Layout.Content>
  );
}
