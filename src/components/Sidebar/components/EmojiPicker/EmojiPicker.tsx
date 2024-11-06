import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import "react-color-palette/css";
import { useTheme } from "@mui/material/styles";
import Styles from "./styles";
import EmojiPickerReact, { EmojiClickData } from "emoji-picker-react";
import { Props } from "./types";

const EmojiPicker = ({ open, onClose, onSelectIcon }: Props) => {
  const theme = useTheme();
  const styles = Styles(theme);

  const [emoji, setEmoji] = useState<EmojiClickData | undefined>(undefined);

  const handleSelect = () => {
    if (!emoji) return;
    onSelectIcon(emoji.imageUrl);
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Select An Emoji</DialogTitle>
      <DialogContent>
        <Box sx={styles.dialogContent}>
          <EmojiPickerReact
            style={{ width: "100%" }}
            onEmojiClick={(emojiData) => {
              setEmoji(emojiData);
            }}
          />
          <Box sx={styles.selectedContent}>
            <img style={styles.selectedEmoji} src={emoji?.imageUrl} />
            <Typography>{emoji?.names?.toString()}</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="inherit" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSelect}>
          Select
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmojiPicker;
