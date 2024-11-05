import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Node } from "../Node";
import Styles from "./styles";

const NodesList = ({ nodes }) => {
  const theme = useTheme();
  const styles = Styles(theme);
  return (
    <Box sx={styles.container}>
      {nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </Box>
  );
};

export default NodesList;
