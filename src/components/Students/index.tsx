import { Flex, Typography } from 'antd';
import data from '../../data/data.ts';
import Section from '../Section';
import classes from './style.module.css';

export default function Students() {
  return (
    <Section meta='学生统计 STUDENTS'>
      {data.students.map((item) => (
        <Flex key={item.id} justify='space-between' className={classes.group}>
          <Typography.Text type='secondary'>{item.className}</Typography.Text>
          <Typography.Text>{item.students}人</Typography.Text>
        </Flex>
      ))}
    </Section>
  );
}
