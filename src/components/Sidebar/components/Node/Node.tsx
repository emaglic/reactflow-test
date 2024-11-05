import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Styles from "./styles";
import { useReactFlow } from "reactflow";
import { useForm } from "react-hook-form";

const Node = ({ node, handleTabChange }) => {
  const theme = useTheme();
  const styles = Styles(theme, node.selected);
  const { setNodes } = useReactFlow();
  const [editMode, setEditMode] = useState(node.id ? false : true);

  const defaultFormValues = {
    label: node.data.label,
    notes: node.data.notes || "",
    bgColor: node.data.bgColor,
    xPos: node.position.x,
    yPos: node.position.y,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const handleEditMode = (force = null) => {
    if (force !== null) {
      setEditMode(force);
    } else {
      if (editMode) {
        onCancel();
      }
      setEditMode(!editMode);
    }
  };

  const constructNodeData = ({ label, notes, bgColor, xPos, yPos }) => {
    return {
      ...node,
      id: node.id || uuidv4(),
      data: { ...node.data, label, notes, bgColor },
      selected: true,
      position: { ...node.position, x: Number(xPos), y: Number(yPos) },
    };
  };

  const onUpdateNode = (formData) => {
    setNodes((prevNodes) => {
      return prevNodes.map((prevNode) => {
        return prevNode.id === node.id ? constructNodeData(formData) : prevNode;
      });
    });
  };

  const onCreateNode = (formData) => {
    setNodes((prevNodes) => {
      return [constructNodeData(formData), ...prevNodes];
    });
  };

  // Will only submit if no errors
  const onSubmit = (formProps) => {
    if (node.id) {
      onUpdateNode(formProps);
      setEditMode(false);
    } else {
      onCreateNode(formProps);
    }
    if (handleTabChange) handleTabChange(0);
  };

  const onCancel = () => {
    reset(defaultFormValues);
  };

  const onDelete = () => {
    setNodes((prevNodes) => {
      return prevNodes.filter((prevNode) => prevNode.id !== node.id);
    });
  };

  useEffect(() => {
    onCancel();
  }, [node]);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="subtitle1">
          <b>Node ID: {node.id || "TBD"}</b>
        </Typography>
      </Box>
      <Box sx={styles.bodyContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="label"
            label="Label"
            variant="outlined"
            fullWidth
            sx={styles.textField}
            disabled={!editMode}
            {...register("label", { required: "A label is required" })}
            error={editMode && !!errors.label}
            helperText={
              editMode && errors.label ? errors.label.message?.toString() : ""
            }
          />
          <Box sx={styles.position}>
            <TextField
              id="x"
              label="X Pos"
              variant="outlined"
              fullWidth
              sx={styles.textField}
              {...register("xPos", { required: "An X Position is required" })}
              disabled={!editMode}
            />
            <TextField
              id="y"
              label="Y Pos"
              variant="outlined"
              fullWidth
              sx={styles.textField}
              {...register("yPos", { required: "An Y Position is required" })}
              disabled={!editMode}
            />
          </Box>
          <TextField
            id="color"
            label="Color"
            variant="outlined"
            fullWidth
            sx={styles.textField}
            {...register("bgColor")}
            disabled={!editMode}
          />
          <TextField
            id="notes"
            label="Notes"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={styles.textField}
            {...register("notes")}
            disabled={!editMode}
          />
          <Box sx={styles.controls}>
            <Button
              variant="contained"
              onClick={() => {
                node.id ? handleEditMode() : onCancel();
              }}
            >
              {node.id ? (editMode ? "Cancel" : "Edit") : "Clear"}
            </Button>
            <Button
              type={"submit"}
              disabled={!editMode}
              variant="contained"
              color={`${editMode ? "success" : "inherit"}`}
            >
              Save
            </Button>
            {editMode && node.id ? (
              <Button
                variant="contained"
                color="error"
                sx={styles.deleteButton}
                onClick={onDelete}
              >
                Delete Node
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Node;
