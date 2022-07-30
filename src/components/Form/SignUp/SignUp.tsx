import React, { FC } from "react";
import {
  Form,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from "formik";
import { ThemeProvider } from "@mui/material";
import { FormikField } from "../../FormikField";
import { muiTextFieldTheme } from "../../../styles/mui/themes";
import { SignIn } from "../SignIn";

type Props = {
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
};

export const SignUp: FC<Props> = ({
  errors,
  touched,
}) => (
  <>
    <ThemeProvider theme={muiTextFieldTheme}>
      <Form className="form__fields">
        <FormikField
          type="text"
          label="Full name"
          name="displayname"
          errors={errors}
          touched={touched}
          className="form__field-fullname"
        />
      </Form>
    </ThemeProvider>

    <SignIn errors={errors} touched={touched} />
  </>

  // <ThemeProvider theme={muiTextFieldTheme}>
  //   <Form className="form__fields">
  //     <FormikField
  //       type="text"
  //       label="Full name"
  //       name="displayname"
  //       errors={errors}
  //       touched={touched}
  //       className="form__field-fullname"
  //     />

  //     <FormikField
  //       type="text"
  //       label="User name"
  //       name="username"
  //       errors={errors}
  //       touched={touched}
  //       className="form__field-username"
  //     />

  //     <FormikField
  //       type={showPassword ? "text" : "password"}
  //       label="Password"
  //       name="password"
  //       errors={errors}
  //       touched={touched}
  //       className="form__field-password"
  //     />

  //     <button
  //       type="button"
  //       name="toggle password visibility"
  //       aria-label="Toggle password visibility"
  //       className="form__toggle-password-visibility"
  //       onClick={handlePasswordVisibility}
  //     />
  //   </Form>
  // </ThemeProvider>
);
