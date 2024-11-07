import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <EdgeLabelRenderer>
        <IconButton
          aria-label="delete"
          sx={{
            position: "absolute",
            color: "red",
            width: "1rem",
            height: "1rem",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("id: ", id);
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
          }}
        >
          <CloseIcon
            sx={{
              width: "0.75rem",
              height: "0.75rem",
            }}
          />
        </IconButton>
      </EdgeLabelRenderer>
      <BezierEdge {...props} />
    </>
  );
}
