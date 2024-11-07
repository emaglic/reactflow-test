import { Edge, MarkerType } from "reactflow";

const initialEdges: Edge[] = [
  {
    source: "827d2b63-5037-4521-9e9c-bbcec7909ed8",
    sourceHandle: "right-handle-source",
    target: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    targetHandle: "left-handle-target",
    id: "36e7ecdb-e82c-4b62-9c21-081ea3c6269a",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    source: "8f98c2fb-7561-4dcd-ac3b-364c9f1da49f",
    sourceHandle: "right-handle-source",
    target: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    targetHandle: "left-handle-target",
    id: "8b3e61dc-b510-48d2-a7ab-a591ada45e66",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    source: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    sourceHandle: "right-handle-source",
    target: "0ac03aa1-ef38-476c-ae9c-6407ad41ac0f",
    targetHandle: "left-handle-target",
    id: "0c76f2d2-74e6-4071-9d73-7a3d8cff9216",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    source: "0ac03aa1-ef38-476c-ae9c-6407ad41ac0f",
    sourceHandle: "right-handle-source",
    target: "c61e5768-a663-44a5-b1de-9b3f43b957ef",
    targetHandle: "left-handle-target",
    id: "64525500-385f-4c1d-9a8b-fd25195f7a97",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    source: "0ac03aa1-ef38-476c-ae9c-6407ad41ac0f",
    sourceHandle: "bottom-handle-source",
    target: "997e050a-dd25-4a54-8791-50fc19be44fc",
    targetHandle: "bottom-handle-target",
    id: "9e828c03-3ef3-4f4d-a33c-c984b5370088",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    source: "997e050a-dd25-4a54-8791-50fc19be44fc",
    sourceHandle: "top-handle-source",
    target: "94ea8098-9aa6-4d73-9706-0aef8d28bde1",
    targetHandle: "bottom-handle-target",
    id: "0c15c520-7fae-4932-a21d-c946d1aa09f3",
    type: "customEdge",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default initialEdges;
