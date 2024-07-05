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
          name="displayName"
          errors={errors}
          touched={touched}
          className="form__field-fullname"
        />
      </Form>
    </ThemeProvider>

    <SignIn errors={errors} touched={touched} />
  </>
);
