import {
  Card,
  Flex,
  Progress,
  Space,
  Tag,
  Typography,
  type CardProps,
  type ProgressProps,
} from 'antd';
import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Section from '../Section';
import classes from './style.module.css';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#1677ff',
  '100%': '#69b1ff',
};

const cardStyle = {
  root: {
    width: '100%',
    background: '#111724',
    marginBottom: 12,
    textAlign: 'center',
  },
  body: {
    padding: 2,
  },
} satisfies CardProps['styles'];

export default function Task() {
  const [list, setList] = useState(data.task);

  useEffect(() => {
    setTimeout(() => {
      setList((prev) =>
        prev.map((item) => ({ ...item, progress: Math.round(Math.random() * 100) }))
      );
    }, 200);
  }, []);
  return (
    <Section meta='实训任务 TASK MANAGEMENT' className={classes.task}>
      <Flex vertical gap={16}>
        {list.map((item) => (
          <Card key={item.id} styles={{ body: { background: '#151B28', borderRadius: 8 } }}>
            <Card.Meta
              title={
                <Flex justify='space-between'>
                  <Typography>{item.className}</Typography>
                  <Tag
                    color={'warning'}
                    variant='outlined'
                    styles={{ root: { fontWeight: 'lighter' } }}
                  >
                    进行中
                  </Tag>
                </Flex>
              }
            />
            <div className={classes.progress}>
              <Flex justify='space-between'>
                <Typography.Text type='secondary'>提交进度</Typography.Text>
                <Typography.Text type='secondary'>{item.progress}%</Typography.Text>
              </Flex>
              <Progress
                status='active'
                strokeColor={twoColors}
                showInfo={false}
                percent={item.progress}
              />
            </div>
            <Flex justify='space-between' gap={16}>
              <Card styles={cardStyle}>
                <Space vertical size={0}>
                  <Typography.Text strong type='success'>
                    {item.qualify}
                  </Typography.Text>
                  <Typography.Text type='secondary'>合格</Typography.Text>
                </Space>
              </Card>
              <Card styles={cardStyle}>
                <Space vertical size={0}>
                  <Typography.Text strong type='danger'>
                    {item.disqualify}
                  </Typography.Text>
                  <Typography.Text type='secondary'>不合格</Typography.Text>
                </Space>
              </Card>
            </Flex>
            <Typography.Text type='secondary'>截止时间: {item.endtime}</Typography.Text>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
