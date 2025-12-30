import Icon, { GoldOutlined } from '@ant-design/icons';
import { IconBuildingFactory, IconCar, IconFlask, IconTrees } from '@tabler/icons-react';
import { Button, Flex, Space, Typography } from 'antd';
import { useState, type ReactNode } from 'react';
import data from '../../data/data.json';
import Section from '../Section';
import TabButton from '../TabButton';
import classes from './style.module.css';

const icons: Record<string, ReactNode> = {
  machining: <Icon component={MachiningIcon} className={classes.machining} />,
  automobileManufacturing: <IconCar style={{ marginTop: 4 }} />,
  chemicalProduction: <IconFlask style={{ marginTop: 4 }} />,
  rareEarthSmelting: <GoldOutlined style={{ fontSize: 24, marginTop: 4 }} />,
  thermalProduction: <IconBuildingFactory style={{ marginTop: 4 }} />,
  environmentalEnergy: <IconTrees style={{ marginTop: 4 }} />,
};

export default function Courses() {
  const [list] = useState(data.courses);

  const [selected, setSelected] = useState(list[0]);

  const [active, setActive] = useState(0);

  function handleOnTabClick(value: (typeof data.courses)[number]) {
    setSelected(value);
    setActive(0);
  }

  return (
    <div className={classes.courses}>
      <div className={classes.tabs}>
        {list.map((item) => (
          <TabButton
            key={item.key}
            icon={icons[item.key]}
            selected={selected.key === item.key}
            onClick={() => handleOnTabClick(item)}
          >
            {item.courseName}
          </TabButton>
        ))}
      </div>
      <Section
        className={classes.main}
        styles={{
          body: {
            height: '100%',
          },
        }}
      >
        <Flex vertical align='center' justify='center' gap={36} style={{ height: '100%' }}>
          <Space vertical align='center' size='large'>
            <Button type='text' className={classes.btn} shape='round' icon={icons[selected.key]} />
            <Typography.Title>{selected.courseName}</Typography.Title>
          </Space>
          <Space size='middle' wrap>
            {selected.categories.map((item, index) => (
              <TabButton key={index} selected={active === index} onClick={() => setActive(index)}>
                {item}
              </TabButton>
            ))}
          </Space>
        </Flex>
      </Section>
    </div>
  );
}

function MachiningIcon() {
  return (
    <svg
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      p-id='8715'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='20'
      height='20'
      className='icon-machining'
    >
      <path
        d='M775.76 152.96L649.92 278.8v104.24L775.76 508.8l97.84-97.84a31.384 31.384 0 0 1 44.48 0 31.384 31.384 0 0 1 0 44.48l-142.32 142.4-144.16-144.16c-6.88 3.2-14.8 4.48-23.76 1.04-12.8-4.88-20.8-17.76-20.8-31.44v-14.16l-15.28-15.28H386.72c7.04-19.76 11.52-40.72 11.52-62.88 0-22.16-4.56-43.12-11.52-62.88h185.04l15.28-15.28v-14.16c0-13.68 8-26.56 20.8-31.44 8.96-3.44 16.88-2.16 23.76 1.04L775.76 64l142.32 142.32a31.384 31.384 0 0 1 0 44.48 31.384 31.384 0 0 1-44.48 0L775.76 152.96z m-157.28 744.16a31.44 31.44 0 0 1 0 62.88H115.2a31.44 31.44 0 0 1 0-62.88h133.68l-157.6-420.24c32.48 26.32 73.2 42.72 118.24 42.72 50.4 0 95.92-20.08 129.84-52.24l161.12 429.76h118zM209.52 200.72c-70.72 0-128 57.28-128 128s57.28 128 128 128 128-57.28 128-128-57.28-128-128-128z m0 193.12c-35.36 0-64-28.64-64-64s28.64-64 64-64 64 28.64 64 64-28.64 64-64 64z'
        p-id='8716'
      ></path>
    </svg>
  );
}
