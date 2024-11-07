import { NodeProps, EdgeProps } from "reactflow";

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

export type EdgeTypes = {
  customEdge: (props: EdgeProps) => JSX.Element;
};
