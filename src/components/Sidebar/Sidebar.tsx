import { useState, useRef, useEffect } from "react";
import { Box, Drawer, Tabs, Tab, Divider, Typography } from "@mui/material";
import getNewNode from "../../utils/getNewNode";
import { NodeList } from "./components/NodeList";
import { Node } from "./components/Node";
import Styles from "./styles";
import { Props } from "./types";
import { Node as NodeType } from "reactflow";

const Sidebar = ({ open, nodes }: Props) => {
  const styles = Styles(open);
  const parentRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedNode, setSelectedNode] = useState<NodeType | undefined>(
    undefined
  );

  const handleTabChange = (newTab: number) => {
    setSelectedTab(newTab);
  };

  useEffect(() => {
    const find = nodes.find((node) => node.selected);
    setSelectedNode(find);
  }, [nodes]);

  return (
    <Box ref={parentRef} sx={styles.container}>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        container={parentRef.current}
        sx={{
          width: "100%",
          height: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            boxSizing: "border-box",
          },
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={(_, newTab) => {
            handleTabChange(newTab);
          }}
        >
          <Tab label="Selected Node" />
          <Tab label="All Nodes" />
          <Tab label="Create Node" />
        </Tabs>
        <Divider />
        <Box sx={styles.tabContent}>
          {selectedTab === 0 && selectedNode ? (
            <Node node={selectedNode} />
          ) : selectedTab === 0 ? (
            <Box sx={styles.empty}>
              <Typography>No Node Selected</Typography>
            </Box>
          ) : null}
          {selectedTab === 1 && <NodeList nodes={nodes} />}
          {selectedTab === 2 && (
            <Node node={getNewNode()} handleTabChange={handleTabChange} />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
