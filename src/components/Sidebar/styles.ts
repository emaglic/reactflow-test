import { Theme } from "@mui/system/createTheme";

const Styles = (theme: Theme, open) => ({
  container: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    overflow: "hidden",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    width: open
      ? {
          xs: "100vw",
          md: "50vw",
          lg: "30vw",
          xl: "25vw",
        }
      : 0,
    maxWidth: "500px",
  },
  tabContent: {
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
  },
  empty: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Styles;
