import { Button, ThemeProvider } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useLocation } from "react-router-dom";
import { muiButtonTheme } from "../../../styles/mui/themes";

type Props = {
  isValid: boolean,
  dirty: boolean,
}

export const Submit: React.FC<Props> = ({ dirty, isValid }) => {
  const location = useLocation();

  return (
    <Form className="form__submit">
      <ThemeProvider theme={muiButtonTheme}>
        <Button
          variant="contained"
          type="submit"
          id="signUp"
          disabled={!dirty || !isValid}
        >
          {location.pathname === "/signup" ? "Sign Up" : "Sign In"}
        </Button>
      </ThemeProvider>
    </Form>
  );
};
