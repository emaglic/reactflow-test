import React, { useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CssBaseline from "@mui/material/CssBaseline";
import {
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
  NodeChange,
  EdgeChange,
} from "reactflow";
import { ReactFlowProvider } from "reactflow";
import { Chart } from "./components/Chart";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Styles from "./App.styles";
import initialEdges from "./utils/initialEdges";
import initialNodes from "./utils/initialNodes";
import { CustomNode } from "./components/Chart/components/CustomNode";
import { NodeTypes } from "./types";

const nodeTypes: NodeTypes = {
  customNode: CustomNode,
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const styles = Styles();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, id: uuidv4() };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      onEdgesChange(changes);
      localStorage.setItem("edges", JSON.stringify(edges));
    },
    [edges, onEdgesChange]
  );

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => {
      onNodesChange(changes);
      localStorage.setItem("nodes", JSON.stringify(nodes));
    },
    [nodes, onNodesChange]
  );

  const handleClearStorage = () => {
    localStorage.setItem("nodes", JSON.stringify([]));
    localStorage.setItem("edges", JSON.stringify([]));
    setNodes(initialNodes);
    setEdges(initialEdges);
  };

  useEffect(() => {
    const storedNodes = localStorage.getItem("nodes");
    const storedEdges = localStorage.getItem("edges");
    setNodes(storedNodes ? JSON.parse(storedNodes) : initialNodes);
    setEdges(storedEdges ? JSON.parse(storedEdges) : initialEdges);
  }, [setNodes, setEdges]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactFlowProvider>
          <Box sx={styles.container}>
            <Navbar
              handleSidebarOpen={handleSidebarOpen}
              handleDarkMode={handleDarkMode}
              darkMode={darkMode}
              handleClearStorage={handleClearStorage}
            />
            <Box sx={styles.body}>
              <Box sx={styles.chart}>
                <Chart
                  nodes={nodes}
                  edges={edges}
                  elementsSelectable={true}
                  onNodesChange={handleNodesChange}
                  onEdgesChange={handleEdgesChange}
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
