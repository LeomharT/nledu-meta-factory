import { Card, type CardProps } from 'antd';
import classes from './style.module.css';

type SectionProps = CardProps & {
  meta?: string;
};

export default function Section(props: SectionProps) {
  return (
    <Card
      {...props}
      styles={{
        root: {
          background: 'var(--mf-app-section-bg-color)',
        },
        ...props.styles,
      }}
    >
      <Card.Meta title={props.meta} classNames={{ title: classes.title }}></Card.Meta>
      {props.children}
    </Card>
  );
}
