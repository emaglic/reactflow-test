import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { ColorPicker as RCPPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

type ColorPickerProps = {
  open: boolean;
  onClose: () => void;
  onSelectColor: (color: string) => void;
};

const ColorPicker = ({ open, onClose, onSelectColor }: ColorPickerProps) => {
  const [color, setColor] = useColor("#fff");

  const handleSelect = () => {
    onSelectColor(color.hex); // Pass the selected color as a hex value
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Select A Color</DialogTitle>
      <DialogContent sx={{ padding: "0.5rem 1rem 0.5rem 1rem !important" }}>
        <RCPPicker
          hideInput={["rgb", "hsv"]}
          color={color}
          onChange={setColor}
        />
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

export default ColorPicker;
