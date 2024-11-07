import { Node, Edge, OnEdgesChange, OnNodesChange, OnConnect } from "reactflow";
import { NodeTypes, EdgeTypes } from "../../types";

export type Props = {
  nodes: Node[];
  edges: Edge[];
  elementsSelectable: boolean;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  nodeTypes: NodeTypes;
  edgeTypes: EdgeTypes;
};
