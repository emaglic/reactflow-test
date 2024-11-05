import { boxSizing } from "@mui/system";
import { Theme } from "@mui/system/createTheme";

const Styles = (theme: Theme, selected) => ({
  container: {
    //width: "100%",
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
      : theme.palette.getContrastText(theme.palette.action.disabledBackground),
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
  deleteButton: {
    marginLeft: "auto",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  position: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
  },
});

export default Styles;
