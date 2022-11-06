import theme from "config/theme";

const getStyles = () => {
  return {
    wrapper: {
      background: theme.palette.primary.main,
      height: "100vh",
      padding: "48px 60px",
      boxSizing: "border-box",
    },
    logo: {
      width: "134px",
      height: "74px",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "48px",
    },
    subTitle: {
      color: theme.palette.primary.light,
      textAlign: "center",
      maxWidth: "466px",
      fontWeight: 600,
    },
    button: {
      width: "99px",
    },
  };
};

export default getStyles;
