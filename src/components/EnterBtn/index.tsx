import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classes from './style.module.css';
export default function EnterBtn() {
  return (
    <Button className={classes.btn} block icon={<ArrowRightOutlined />}>
      进入教学实验平台
    </Button>
  );
}
