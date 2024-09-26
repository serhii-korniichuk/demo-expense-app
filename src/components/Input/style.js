import theme from "config/theme";

const getStyles = () => {
  return {
    label: {
      color: theme.palette.primary.light,
    },
    passwordIcon: {
      cursor: "pointer",
      marginBottom: "11px",
    },
    errorText: {
      color: "red",
    },
  };
};

export default getStyles;
