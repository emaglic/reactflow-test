import { Box } from "@mui/material";
import { Node } from "../Node";
import Styles from "./styles";
import { Props } from "./types";

const NodesList = ({ nodes }: Props) => {
  const styles = Styles();
  return (
    <Box sx={styles.container}>
      {nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </Box>
  );
};

export default NodesList;
