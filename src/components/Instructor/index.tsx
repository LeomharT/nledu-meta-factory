import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Space, Typography } from 'antd';
import data from '../../data/data.ts';
import Section from '../Section';
import classes from './style.module.css';

export default function Instructor() {
  return (
    <Section meta='当前授课教师 INSTRUCTOR'>
      <div>
        <Space style={{ marginBottom: 24 }}>
          <Avatar size={74} shape='square'>
            <UserOutlined />
          </Avatar>
          <Space vertical className={classes.name}>
            <p>{data.instructor.name}</p>
            <span>{data.instructor.title}</span>
          </Space>
        </Space>
        <Flex justify='space-between' className={classes.group}>
          <Typography.Text type='secondary'>所属学院</Typography.Text>
          <Typography.Text>{data.instructor.institution}</Typography.Text>
        </Flex>
        <Flex justify='space-between' className={classes.group}>
          <Typography.Text type='secondary'>积累课时</Typography.Text>
          <Typography.Text style={{ color: 'var(--mf-app-text-color)' }}>
            {data.instructor.courseHour} 小时
          </Typography.Text>
        </Flex>
      </div>
    </Section>
  );
}
