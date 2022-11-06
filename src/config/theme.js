import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D283A",
      light: "#fff",
      link: "#7FAAF0",
      dark: "#F1F2F1",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "56px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "16px",
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "12px",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #FFFFFF",
          "& input": {
            color: "#fff",
            fontSize: "16px",
            "&::placeholder": {
              color: "#fff",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#539713",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: 0,
          textTransform: "none",
          "&:hover": {
            background: "#539713",
          },
        },
      },
    },
  },
});

export default theme;
