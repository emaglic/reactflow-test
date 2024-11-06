import { Edge, MarkerType } from "reactflow";

const initialEdges: Edge[] = [
  {
    id: "c19003a3-79f0-4fbb-b149-b93a826df7f7",
    source: "827d2b63-5037-4521-9e9c-bbcec7909ed8",
    target: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "2b1e13cd-7b22-4330-bbf8-56ac661928a4",
    source: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    target: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default initialEdges;
