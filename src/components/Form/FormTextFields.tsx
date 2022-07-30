import React, { FC, useState } from "react";
import {
  Form,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from "formik";
import { createTheme, ThemeProvider } from "@mui/material";
import { FormikField } from "../FormikField";

type Props = {
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
  isNewUser: boolean,
};

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

export const FormTextFields: FC<Props> = ({
  errors,
  touched,
  isNewUser,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={muiTextFieldTheme}>
      <Form className="form__fields">
        {isNewUser && (
          <FormikField
            type="text"
            label="Full name"
            name="fullname"
            errors={errors}
            touched={touched}
            className="form__field-fullname"
          />
        )}

        <FormikField
          type="text"
          label="User name"
          name="username"
          errors={errors}
          touched={touched}
          className="form__field-username"
        />

        <FormikField
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          errors={errors}
          touched={touched}
          className="form__field-password"
        />

        <button
          type="button"
          name="toggle password visibility"
          aria-label="Toggle password visibility"
          className="form__toggle-password-visibility"
          onClick={handlePasswordVisibility}
        />
      </Form>
    </ThemeProvider>
  );
};
