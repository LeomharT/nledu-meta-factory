import { Button, type ButtonProps } from 'antd';

type TabButtonProps = ButtonProps & {
  selected?: boolean;
};

export default function TabButton(props: TabButtonProps) {
  console.log(props.selected);
  return (
    <Button
      {...props}
      styles={{
        root: {
          background: props.selected ? '#112B3B' : 'var(--mf-app-section-bg-color)',
          borderColor: props.selected ? '#4ECAE8' : undefined,
        },
        content: {
          color: props.selected ? '#ffffff' : '#5B697E',
        },
      }}
    ></Button>
  );
}
