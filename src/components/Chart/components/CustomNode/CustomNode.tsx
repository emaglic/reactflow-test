import React from "react";
import { Box, Typography } from "@mui/material";
import { Handle, NodeProps, Position } from "reactflow";
import { useTheme } from "@mui/material/styles";
import Styles from "./styles";

type CustomProps = {
  label: string;
  notes: string;
  bgColor: string;
  color: string;
};

const CustomNode = ({
  selected,
  data: { notes, bgColor = "#fff", color = "#000", label },
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
      <Typography>{label}</Typography>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default CustomNode;
