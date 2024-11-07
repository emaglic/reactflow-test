import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomEdge(props: EdgeProps) {
  const theme = useTheme();

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

  const [_, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconButton
          aria-label="delete"
          sx={{
            position: "absolute",
            top: labelY,
            left: labelX,
            transform: "translate(-50%, -50%)",
            pointerEvents: "all",
            zIndex: 10,
            color: theme.palette.error.main,
            width: "1rem",
            height: "1rem",
            cursor: "pointer",
          }}
          onClick={() => {
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
    </>
  );
}
