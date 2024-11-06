import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Props } from "./types";

const Sidebar = ({
  darkMode,
  handleSidebarOpen,
  handleDarkMode,
  handleClearStorage,
}: Props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Flow Example
        </Typography>
        <Tooltip title="Clear Local Storage" arrow>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClearStorage}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle Light/Dark Mode" arrow>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDarkMode}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle Sidebar" arrow>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <ViewSidebarIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
