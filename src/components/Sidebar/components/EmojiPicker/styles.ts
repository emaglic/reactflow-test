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
  },
  selectedEmoji: {
    width: "3rem",
    height: "3rem",
    margin: "0.5rem",
  },
});

export default Styles;
