import React, { useState, useCallback, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import CssBaseline from "@mui/material/CssBaseline";
import {
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
  NodeChange,
  EdgeChange,
  MarkerType,
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
import { CustomEdge } from "./components/Chart/components/CustomEdge";

import { NodeTypes, EdgeTypes } from "./types";

const nodeTypes: NodeTypes = {
  customNode: CustomNode,
};

const edgeTypes: EdgeTypes = {
  customEdge: CustomEdge,
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

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
  const [isReady, setIsReady] = useState(false);

  const onConnect = useCallback((connection: Connection) => {
    const edge = {
      ...connection,
      id: uuidv4(),
      type: "customEdge",
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  const handleClearStorage = () => {
    localStorage.setItem("nodes", JSON.stringify(initialNodes));
    localStorage.setItem("edges", JSON.stringify(initialEdges));
    setNodes(initialNodes);
    setEdges(initialEdges);
  };

  useEffect(() => {
    const storedNodes = localStorage.getItem("nodes");
    const storedEdges = localStorage.getItem("edges");
    setNodes(storedNodes ? JSON.parse(storedNodes) : initialNodes);
    setEdges(storedEdges ? JSON.parse(storedEdges) : initialEdges);
    setIsReady(true);
  }, [setNodes, setEdges]);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem("nodes", JSON.stringify(nodes));
      localStorage.setItem("edges", JSON.stringify(edges));
    }
  }, [nodes, edges]);

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
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  nodeTypes={nodeTypes}
                  edgeTypes={edgeTypes}
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
