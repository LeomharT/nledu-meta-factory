import { Card, Flex, Progress, Typography, type ProgressProps } from 'antd';
import { useEffect, useState } from 'react';
import data from '../../data/data.ts';
import Section from '../Section';
import classes from './style.module.css';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#1677ff',
  '100%': '#69b1ff',
};

export default function Classes() {
  const [list, setList] = useState(data.classes);

  useEffect(() => {
    setTimeout(() => {
      setList((prev) =>
        prev.map((item) => ({ ...item, progress: Math.round(Math.random() * 100) }))
      );
    }, 200);
  }, []);

  return (
    <Section meta='多班级课程进度 CLASSES' className={classes.classes}>
      <Flex vertical gap={16}>
        {list.map((item) => (
          <Card key={item.id} styles={{ body: { background: '#151B28', borderRadius: 8 } }}>
            <Card.Meta
              title={
                <Flex justify='space-between'>
                  <Typography>{item.className}</Typography>
                  <Typography.Text style={{ color: 'var(--mf-app-text-color)' }}>
                    第{item.unit}单元
                  </Typography.Text>
                </Flex>
              }
              description={item.courseName}
            />
            <div className={classes.progress}>
              <Flex justify='space-between'>
                <Typography.Text type='secondary'>进度</Typography.Text>
                <Typography.Text type='secondary'>{item.progress}%</Typography.Text>
              </Flex>
              <Progress
                status='active'
                strokeColor={twoColors}
                showInfo={false}
                percent={item.progress}
              />
            </div>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
