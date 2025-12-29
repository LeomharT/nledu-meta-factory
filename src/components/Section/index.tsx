import { Card, type CardProps } from "antd";
import classes from "./style.module.css";

type SectionProps = CardProps & {
  meta: string;
};

export default function Section(props: SectionProps) {
  return (
    <Card
      {...props}
      styles={{
        body: {
          background: "var(--mf-app-section-bg-color)",
          borderRadius: 8,
        },
      }}
    >
      <Card.Meta
        title={props.meta}
        classNames={{ title: classes.title }}
      ></Card.Meta>
      {props.children}
    </Card>
  );
}
