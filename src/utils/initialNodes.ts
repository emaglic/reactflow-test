import { Node } from "reactflow";

const initialNodes: Node[] = [
  {
    id: "997e050a-dd25-4a54-8791-50fc19be44fc",
    position: { x: 545.5, y: 266 },
    data: {
      label: "Updated Specifications",
      bgColor: "#0adee0",
      color: "#000000",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f195.png",
      notes:
        "When we have new specifications from client, we can make new samples. ",
    },
    type: "customNode",
    selected: false,
    width: 205,
    height: 34,
    positionAbsolute: { x: 545.5, y: 266 },
    dragging: false,
  },
  {
    id: "c61e5768-a663-44a5-b1de-9b3f43b957ef",
    position: { x: 1084, y: 223.5 },
    data: {
      label: "Full-scale Manufacturing",
      bgColor: "#0b16d0",
      color: "#f9f9fd",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f3ea.png",
      notes:
        "Once we have client approval, we enter the full-scale manufacturing phase.",
    },
    type: "customNode",
    selected: false,
    width: 216,
    height: 34,
    positionAbsolute: { x: 1084, y: 223.5 },
    dragging: false,
  },
  {
    id: "0ac03aa1-ef38-476c-ae9c-6407ad41ac0f",
    position: { x: 838.5, y: 206.5 },
    data: {
      label: "Client Feedback",
      bgColor: "#e00909",
      color: "#000000",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4de.png",
      notes: "Send samples to client and get feedback.",
    },
    type: "customNode",
    selected: false,
    width: 156,
    height: 34,
    positionAbsolute: { x: 838.5, y: 206.5 },
    dragging: false,
  },
  {
    id: "827d2b63-5037-4521-9e9c-bbcec7909ed8",
    position: { x: 0, y: 0 },
    data: {
      label: "Receive Specifications",
      bgColor: "#0bdd27",
      color: "#000000",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f5d2-fe0f.png",
      notes: "Get product specifications from client.",
    },
    type: "customNode",
    width: 202,
    height: 34,
    selected: false,
    positionAbsolute: { x: 0, y: 0 },
    dragging: false,
  },
  {
    id: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    position: { x: 269, y: 86 },
    data: {
      label: "Program Automation",
      bgColor: "#dda50b",
      color: "#000000",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4bb.png",
      notes: "Program automation for manufacturing.",
    },
    type: "customNode",
    width: 187,
    height: 34,
    positionAbsolute: { x: 269, y: 86 },
    selected: false,
    dragging: false,
  },
  {
    id: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    position: { x: 537.5, y: 152 },
    data: {
      label: "Manufacture Samples",
      bgColor: "purple",
      color: "#ffffff",
      emoji:
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f6e0-fe0f.png",
      notes: "Manufacture samples for client feedback.",
    },
    type: "customNode",
    width: 197,
    height: 34,
    positionAbsolute: { x: 537.5, y: 152 },
    selected: false,
    dragging: false,
  },
];

export default initialNodes;
