import ReactFlow, { Background, Controls } from "reactflow";
import { Props } from "./types";

import "reactflow/dist/style.css";

export const Chart = (props: Props) => {
  return (
    <ReactFlow {...props} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  );
};
