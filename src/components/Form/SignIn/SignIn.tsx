import React, { FC, useState } from "react";
import {
  Form,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from "formik";
import { ThemeProvider } from "@mui/material";
import {
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { FormikField } from "../../FormikField";
import { muiTextFieldTheme } from "../../../styles/mui/themes";

type Props = {
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
};

export const SignIn: FC<Props> = ({
  errors,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={muiTextFieldTheme}>
      <Form className="form__fields">
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

        {showPassword && (
          <VisibilityOutlined
            role="button"
            name="toggle password visibility"
            aria-label="Toggle password visibility"
            className="form__toggle-password-visibility"
            onClick={handlePasswordVisibility}
          />
        )}

        {!showPassword && (
          <VisibilityOffOutlined
            role="button"
            name="toggle password visibility"
            aria-label="Toggle password visibility"
            className="form__toggle-password-visibility"
            onClick={handlePasswordVisibility}
          />
        )}
      </Form>
    </ThemeProvider>
  );
};
