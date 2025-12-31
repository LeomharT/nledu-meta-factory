import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import data from '../../data/data.json';
import classes from './style.module.css';

export default function EnterBtn() {
  return (
    <Button
      className={classes.btn}
      block
      icon={<ArrowRightOutlined />}
      onClick={() => {
        if (data.enterLink) window.open(data.enterLink);
      }}
    >
      进入教学实验平台
    </Button>
  );
}
