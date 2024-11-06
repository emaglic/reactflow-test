import React from "react";
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
  const styles = Styles(theme);
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

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default CustomNode;
