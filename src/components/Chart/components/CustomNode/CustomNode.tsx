import { Box, Typography } from "@mui/material";
import { Handle, NodeProps, Position } from "reactflow";
import { useTheme } from "@mui/material/styles";
import Styles from "./styles";
import { CustomProps } from "../../../../types";

const CustomNode = ({
  selected,
  data: { bgColor = "#fff", color = "#000", label, emoji = "" },
}: NodeProps<CustomProps>) => {
  const theme = useTheme();
  const styles = Styles();
  return (
    <Box
      sx={{
        ...styles.container,
        border: selected
          ? `3px solid ${theme.palette.primary.main}`
          : `1px solid  ${theme.palette.getContrastText(
              theme.palette.background.default
            )}`,
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <Box sx={styles.content}>
        {emoji && <img style={styles.emoji} src={emoji} />}
        <Typography>{label}</Typography>
      </Box>

      <Handle type="target" position={Position.Left} id="left-handle-target" />
      <Handle
        type="target"
        position={Position.Right}
        id="right-handle-target"
      />
      <Handle type="target" position={Position.Top} id="top-handle-target" />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-handle-target"
      />

      <Handle type="source" position={Position.Left} id="left-handle-source" />
      <Handle
        type="source"
        position={Position.Right}
        id="right-handle-source"
      />
      <Handle type="source" position={Position.Top} id="top-handle-source" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-handle-source"
      />
    </Box>
  );
};

export default CustomNode;
