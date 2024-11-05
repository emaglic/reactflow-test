import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, Tabs, Tab, Divider, Typography } from "@mui/material";
import getNewNode from "../../utils/getNewNode";
import { NodeList } from "./components/NodeList";
import { Node } from "./components/Node";
import Styles from "./styles";

const Sidebar = ({ open, nodes }) => {
  const theme = useTheme();
  const styles = Styles(theme, open);
  const parentRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newTab: number) => {
    setSelectedTab(newTab);
  };

  const findSelectedNode = () => {
    const find = nodes.find((node) => node.selected);
    return find;
  };

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
          onChange={(evt, newTab) => {
            handleTabChange(newTab);
          }}
        >
          <Tab label="Selected Node" />
          <Tab label="All Nodes" />
          <Tab label="Create Node" />
        </Tabs>
        <Divider />
        <Box sx={styles.tabContent}>
          {selectedTab === 0 && findSelectedNode() ? (
            <Node node={findSelectedNode()} />
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
