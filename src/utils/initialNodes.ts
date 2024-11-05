import { Node } from "reactflow";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1", bgColor: "orange" },
    type: "customNode",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2", bgColor: "blue" },
    type: "customNode",
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "3", bgColor: "purple" },
    type: "customNode",
  },
];

export default initialNodes;
