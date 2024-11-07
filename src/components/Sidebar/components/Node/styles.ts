import { Theme } from "@mui/system/createTheme";

const Styles = (theme: Theme, selected: boolean | undefined) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    border: `1px solid ${theme.palette.divider}`,
    margin: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
    borderRadius: "7px",
  },
  header: {
    color: selected
      ? theme.palette.getContrastText(theme.palette.primary.main)
      : theme.palette.getContrastText(theme.palette.background.default),
    backgroundColor: selected
      ? theme.palette.primary.main
      : theme.palette.action.disabledBackground,
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
  },
  bodyContent: {
    padding: "0 0.5rem",
  },
  textField: {
    marginBottom: "1rem",
  },
  cancelButton: {
    marginLeft: "auto",
  },
  saveButton: {
    marginLeft: "auto",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  controlsRight: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    gap: "0.5rem",
  },
  position: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  },
});

export default Styles;
