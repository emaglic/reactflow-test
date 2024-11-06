import { Node } from "reactflow";

const initialNodes: Node[] = [
  {
    id: "827d2b63-5037-4521-9e9c-bbcec7909ed8",
    position: { x: 0, y: 0 },
    data: {
      label: "Work",
      bgColor: "orange",
      color: "#000",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f528.png",
    },
    type: "customNode",
  },
  {
    id: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    position: { x: 0, y: 100 },
    data: { label: "2", bgColor: "blue", color: "#000", emoji: "" },
    type: "customNode",
  },
  {
    id: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    position: { x: 0, y: 200 },
    data: { label: "3", bgColor: "purple", color: "#000", emoji: "" },
    type: "customNode",
  },
];

export default initialNodes;
