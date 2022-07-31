import { Button, ThemeProvider } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useLocation } from "react-router-dom";
import { muiButtonTheme } from "../../../styles/mui/themes";

type Props = {
  isValid: boolean,
  dirty: boolean,
  isLoading: boolean,
}

export const Submit: React.FC<Props> = ({ dirty, isValid, isLoading }) => {
  const location = useLocation();

  return (
    <Form className="form__submit">
      <ThemeProvider theme={muiButtonTheme}>
        <Button
          variant="contained"
          type="submit"
          id="signUp"
          disabled={!dirty || !isValid || isLoading}
        >
          {location.pathname === "/signup" ? "Sign Up" : "Sign In"}
        </Button>
      </ThemeProvider>
    </Form>
  );
};
