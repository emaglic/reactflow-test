import React from "react";
import ReactFlow, { MarkerType, Background, Controls } from "reactflow";

import "reactflow/dist/style.css";

export const Chart = (props) => {
  return (
    <ReactFlow {...props} fitView>
      <Background />
      <Controls />
    </ReactFlow>
  );
};
