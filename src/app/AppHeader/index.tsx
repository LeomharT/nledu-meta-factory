import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Flex, Grid, Layout, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import data from '../../data/data.json';
import classes from './style.module.css';

export default function AppHeader() {
  const breakpoint = Grid.useBreakpoint();

  return (
    <Layout.Header className={classes.header}>
      <Flex align='center' gap={12}>
        <Logo />
        <Space orientation='vertical' size={0}>
          <Typography.Title level={3}>MetaFactory</Typography.Title>
          <Typography>孪生工厂教学平台</Typography>
        </Space>
      </Flex>
      {breakpoint.xl && (
        <Flex align='center' gap={20}>
          {data.onlineStatus.map((item) => (
            <Space key={item.id}>
              <Badge status='success' />
              <Typography.Text type='secondary'>{item.label}: 在线</Typography.Text>
            </Space>
          ))}
        </Flex>
      )}
      {breakpoint.sm && (
        <Flex align='center' gap={16}>
          {breakpoint.md && <CurrentTime />}
          <div className={classes.divider}></div>
          <Flex vertical gap={0}>
            <Typography.Title level={5}>系统管理员</Typography.Title>
            <Space style={{ lineHeight: 1 }}>
              <Badge status='success' />
              <Typography.Text type='success'>在线</Typography.Text>
            </Space>
          </Flex>
          <Avatar size={56} shape='circle'>
            <UserOutlined style={{ fontSize: 26, marginTop: 4 }} />
          </Avatar>
        </Flex>
      )}
    </Layout.Header>
  );
}

function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Flex vertical gap={0}>
      <Typography.Title level={3} className={classes.time}>
        {Intl.DateTimeFormat('zh-CN', {
          timeStyle: 'medium',
        }).format(date)}
      </Typography.Title>
      <Typography.Text type='secondary'>
        {Intl.DateTimeFormat('zh-CN', {
          dateStyle: 'medium',
        }).format(date)}
      </Typography.Text>
    </Flex>
  );
}

function Logo() {
  return (
    <svg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='60' height='60' rx='16' fill='url(#paint0_linear_21079_15849)' />
      <path
        d='M41.9625 22.0212C42.1696 21.9226 42.3437 21.766 42.4636 21.5704C42.5835 21.3748 42.6441 21.1486 42.638 20.9193C42.6558 20.6878 42.6001 20.4567 42.4788 20.2588C42.3575 20.061 42.1768 19.9064 41.9625 19.8173L31.546 14.3657C31.0576 14.1251 30.5203 14 29.9758 14C29.4313 14 28.8941 14.1251 28.4056 14.3657L17.9774 19.7933C17.7724 19.8937 17.6008 20.051 17.4831 20.2465C17.3653 20.4419 17.3065 20.6672 17.3136 20.8953C17.2894 21.137 17.3401 21.3804 17.4588 21.5923C17.5775 21.8043 17.7586 21.9747 17.9774 22.0803L28.4056 27.5079C28.8889 27.7571 29.4261 27.8832 29.9698 27.8753C30.5171 27.8818 31.0579 27.7557 31.546 27.5079L41.9625 22.0212ZM27.3155 30.0795L17.0766 24.5455C16.3688 24.1903 15.507 24.4763 15.1522 25.1842C15.0378 25.4119 14.9864 25.666 15.0031 25.9202V36.7634C14.9954 37.8441 15.5768 38.8432 16.5199 39.3704L26.7588 44.9165C27.4952 45.2581 28.3688 44.9381 28.7101 44.2017C28.8108 43.9842 28.857 43.7454 28.8445 43.5064V32.7222C28.8626 31.6262 28.2746 30.6098 27.3155 30.0795ZM24.5779 36.0048C24.377 36.4381 23.8624 36.6265 23.429 36.4256C23.4169 36.42 23.4047 36.4141 23.3929 36.4079L18.7711 34.1206C18.6643 34.0723 18.5689 34.0019 18.4913 33.9141C18.4137 33.8263 18.3555 33.7231 18.3207 33.6112C18.1504 33.1577 18.3801 32.652 18.8336 32.4821C18.9309 32.4456 19.0341 32.4265 19.1384 32.4262C19.2697 32.4338 19.3983 32.4661 19.5175 32.521L24.1748 34.7965C24.3836 34.8941 24.5428 35.0745 24.6133 35.2941C24.6565 35.4067 24.6756 35.5271 24.6695 35.6475C24.6634 35.7679 24.6322 35.8857 24.5779 35.9933V36.0048ZM42.9108 24.5455L32.672 30.1031C31.7128 30.6393 31.1256 31.6589 31.1433 32.7577V43.506C31.0929 44.3028 31.6979 44.9899 32.4947 45.0402C32.7484 45.0562 33.0014 45.0055 33.229 44.8922L43.4675 39.3227C44.419 38.7848 45.0042 37.7732 44.9962 36.68V25.9438C45.0535 25.1473 44.4544 24.4555 43.658 24.3981C43.4001 24.3794 43.1423 24.4301 42.9108 24.5455ZM41.4885 34.393L36.8194 36.6445C36.6993 36.6956 36.5707 36.7237 36.4403 36.7276C36.0382 36.722 35.6914 36.4437 35.599 36.052C35.5038 35.6597 35.6966 35.2542 36.0612 35.0804L40.7184 32.805C40.8394 32.7431 40.9735 32.7104 41.1094 32.7101C41.4409 32.7122 41.7415 32.9064 41.8798 33.2077C42.0952 33.6435 41.9211 34.1713 41.4885 34.393Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_21079_15849'
          x1='0'
          y1='0'
          x2='60'
          y2='60'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3BA5CF' />
          <stop offset='1' stopColor='#256ADF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
