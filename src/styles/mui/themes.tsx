import { createTheme } from "@mui/material";

export const muiButtonTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#539713",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.55,
      textTransform: "none",
      width: "100%",
    },
  },
});

export const muiTextFieldTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.7)",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 16,
  },
});