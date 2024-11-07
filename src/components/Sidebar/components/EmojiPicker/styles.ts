import { Theme } from "@mui/system/createTheme";

const Styles = (theme: Theme) => ({
  dialogContent: {
    display: "grid",
    gridTemplateRows: "1fr auto",
  },
  selectedContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1rem",
    borderRadius: "4px",
    border: `1px solid ${theme.palette.divider}`,
  },
  selectedEmoji: {
    width: "4rem",
    height: "4rem",
    padding: "0.5rem",
    backgroundColor: theme.palette.action.disabledBackground,
  },
  selectedText: {
    marginLeft: "1rem",
  },
});

export default Styles;
