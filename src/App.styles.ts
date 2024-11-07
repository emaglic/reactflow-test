const Styles = () => ({
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    width: "100vw",
    height: "100vh",
  },
  body: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    width: "100%",
    height: "100%",
  },
  chart: {
    width: "100%",
    height: "100%",
  },
  sidebar: {
    height: "100%",
    width: "100%",
    backgroundColor: "blue",
  },
});

export default Styles;
