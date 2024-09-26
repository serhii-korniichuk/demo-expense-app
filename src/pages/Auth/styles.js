import theme from "config/theme";

const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    },
    content: {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      width: "100%",
      maxWidth: "424px",
      display: "flex",
      padding: "48px",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    logo: {
      width: "134px",
      height: "79px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    title: {
      color: theme.palette.primary.light,
      textTransform: "uppercase",
      marginTop: "72px",
      marginBottom: "48px",
      whiteSpace: "nowrap",
      [theme.breakpoints.down(1200)]: {
        marginTop: "15px",
        marginBottom: "15px",
        whiteSpace: "nowrap",
      },
    },
    input: {
      width: "100%",
    },
    button: {
      marginTop: "32px",
      padding: "9.5px 0",
    },
    info: {
      textAlign: "center",
      color: theme.palette.primary.dark,
    },
    link: {
      color: theme.palette.primary.link,
      cursor: "pointer",
    },
  };
};

export default getStyles;
