import { useState } from 'react';
import Section from '../Section';
import TabButton from '../TabButton';
import classes from './style.module.css';

export default function Courses() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={classes.courses}>
      <div>
        <TabButton
          selected={selected}
          size='large'
          onClick={() => {
            setSelected((prev) => !prev);
          }}
        >
          哈哈哈
        </TabButton>
      </div>
      <Section></Section>
    </div>
  );
}
