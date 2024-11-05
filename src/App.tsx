import React, { useState, useRef, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CssBaseline from "@mui/material/CssBaseline";
import { useNodesState, useEdgesState, Connection, addEdge } from "reactflow";
import { ReactFlowProvider } from "reactflow";
import { Chart } from "./components/Chart";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Styles from "./App.styles";
import initialEdges from "./utils/initialEdges";
import initialNodes from "./utils/initialNodes";
import { CustomNode } from "./components/Chart/components/CustomNode";

const theme = createTheme({
  palette: {
    //mode: "light", // Set this to "light" or "dark" to force the theme
  },
});

const nodeTypes = {
  customNode: CustomNode,
};

function App() {
  const styles = Styles();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, id: uuidv4() };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactFlowProvider>
          <Box sx={styles.container}>
            <Navbar
              sidebarOpen={sidebarOpen}
              handleSidebarOpen={handleSidebarOpen}
            />
            <Box sx={styles.body}>
              <Box sx={styles.chart}>
                <Chart
                  nodes={nodes}
                  edges={edges}
                  elementsSelectable={true}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  nodeTypes={nodeTypes}
                />
              </Box>
              <Sidebar open={sidebarOpen} nodes={nodes} />
            </Box>
          </Box>
        </ReactFlowProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
