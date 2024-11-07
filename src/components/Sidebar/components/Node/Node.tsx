import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useTheme } from "@mui/material/styles";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Styles from "./styles";
import { useReactFlow } from "reactflow";
import { useForm, Controller } from "react-hook-form";
import { ColorPicker } from "../ColorPicker";
import { EmojiPicker } from "../EmojiPicker";
import { Props, ColorPickerType, FormData } from "./types";

const Node = ({ node, handleTabChange }: Props) => {
  const theme = useTheme();
  const styles = Styles(theme, node.selected);
  const { setNodes } = useReactFlow();
  const [editMode, setEditMode] = useState(node.id ? false : true);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorPickerType, setColorPickerType] = useState<
    ColorPickerType | undefined
  >(undefined);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const defaultFormValues: FormData = {
    label: node.data.label,
    notes: node.data.notes || "",
    emoji: node.data.emoji,
    bgColor: node.data.bgColor,
    color: node.data.color,
    xPos: node.position.x.toString(),
    yPos: node.position.y.toString(),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const handleColorPickerOpen = (pickerProp: ColorPickerType) => {
    if (editMode) {
      setColorPickerType(pickerProp);
      setColorPickerOpen(true);
    }
  };

  const handleSelectEmoji = (imageUrl: string) => {
    setValue("emoji", imageUrl, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleColorSelect = (color: string) => {
    if (!colorPickerType) return;
    setValue(colorPickerType, color, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setColorPickerOpen(false);
  };

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

  const constructNodeData = ({
    label,
    notes,
    bgColor,
    color,
    xPos,
    yPos,
    emoji,
  }: FormData) => {
    return {
      ...node,
      id: node.id || uuidv4(),
      data: { ...node.data, label, notes, bgColor, color, emoji },
      selected: true,
      position: { ...node.position, x: Number(xPos), y: Number(yPos) },
    };
  };

  const onUpdateNode = (formData: FormData) => {
    setNodes((prevNodes) => {
      return prevNodes.map((prevNode) => {
        return prevNode.id === node.id
          ? constructNodeData(formData)
          : { ...prevNode, selected: false };
      });
    });
  };

  const onCreateNode = (formData: FormData) => {
    setNodes((prevNodes) => {
      return [
        constructNodeData(formData),
        ...prevNodes.map((prevNode) => ({ ...prevNode, selected: false })),
      ];
    });
  };

  const onSubmit = (formData: FormData) => {
    if (node.id) {
      onUpdateNode(formData);
      setEditMode(false);
    } else {
      onCreateNode(formData);
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
    <>
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="subtitle1">
            <b>Node ID: {node.id || "Assigned on Creation"}</b>
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
            <EmojiPicker
              open={emojiPickerOpen}
              onClose={() => {
                setEmojiPickerOpen(false);
              }}
              onSelectIcon={handleSelectEmoji}
            />

            <Controller
              name="emoji"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Emoji"
                  fullWidth
                  sx={styles.textField}
                  disabled={!editMode}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ cursor: editMode ? "pointer" : "default" }}
                          onClick={() => {
                            if (editMode) setEmojiPickerOpen(true);
                          }}
                        >
                          {getValues("emoji") ? (
                            <img
                              src={getValues("emoji")}
                              style={{ width: "2rem", height: "2rem" }}
                            />
                          ) : (
                            <ImageIcon />
                          )}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />

            <Controller
              name="color"
              control={control}
              rules={{ required: "A text color is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Text Color"
                  fullWidth
                  sx={styles.textField}
                  disabled={!editMode}
                  error={!!errors.color}
                  helperText={
                    errors.color ? errors.color.message?.toString() : ""
                  }
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ cursor: editMode ? "pointer" : "default" }}
                          onClick={() => {
                            handleColorPickerOpen("color");
                          }}
                        >
                          {getValues("color") ? (
                            <Box
                              sx={{
                                width: "1.5rem",
                                height: "1.5rem",
                                border: `1px solid ${theme.palette.getContrastText(
                                  theme.palette.background.default
                                )}`,
                                backgroundColor: getValues("color"),
                              }}
                            ></Box>
                          ) : (
                            <ColorLensIcon />
                          )}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
            <Controller
              name="bgColor"
              control={control}
              rules={{ required: "A background color is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Background Color"
                  fullWidth
                  sx={styles.textField}
                  disabled={!editMode}
                  error={!!errors.bgColor}
                  helperText={
                    errors.bgColor ? errors.bgColor.message?.toString() : ""
                  }
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ cursor: editMode ? "pointer" : "default" }}
                          onClick={() => {
                            handleColorPickerOpen("bgColor");
                          }}
                        >
                          {getValues("bgColor") ? (
                            <Box
                              sx={{
                                width: "1.5rem",
                                height: "1.5rem",
                                border: `1px solid ${theme.palette.getContrastText(
                                  theme.palette.background.default
                                )}`,
                                backgroundColor: getValues("bgColor"),
                              }}
                            ></Box>
                          ) : (
                            <ColorLensIcon />
                          )}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
            <Box sx={styles.position}>
              <TextField
                id="x"
                label="x (pos)"
                variant="outlined"
                fullWidth
                sx={styles.textField}
                {...register("xPos", { required: "An X Position is required" })}
                disabled={!editMode}
              />
              <TextField
                id="y"
                label="y (pos)"
                variant="outlined"
                fullWidth
                sx={styles.textField}
                {...register("yPos", { required: "An Y Position is required" })}
                disabled={!editMode}
              />
            </Box>
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
              {editMode && node.id ? (
                <Button variant="contained" color="error" onClick={onDelete}>
                  Delete Node
                </Button>
              ) : (
                <></>
              )}
              <Box sx={styles.controlsRight}>
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
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <ColorPicker
        open={colorPickerOpen}
        onClose={() => {
          setColorPickerOpen(false);
        }}
        onSelectColor={handleColorSelect}
      />
    </>
  );
};

export default Node;
