import { NodeProps } from "reactflow";

export type CustomProps = {
  notes: string;
  bgColor: string;
  color: string;
  label: string;
  emoji: string;
};

export type NodeTypes = {
  customNode: ({ selected, data }: NodeProps<CustomProps>) => JSX.Element;
};
