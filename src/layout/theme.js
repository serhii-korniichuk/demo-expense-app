import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    h1: {
      fontWeight: "700",
      fontSize: "56px",
    },
    h3: {
      fontWeight: "700",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "600",
    },
  },

  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          color: "#fff",
          opacity: 0.7,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          textTransform: "none",
          borderRadius: 0,
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#539713",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
      darker: "#fff",
      contrastText: "#fff",
    },
    text: {
      main: "#F1F2F1",
    },
    link: {
      main: "#3f8bd1",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
