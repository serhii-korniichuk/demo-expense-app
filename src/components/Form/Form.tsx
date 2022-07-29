import React, { FC, useState } from "react";
import "./Form.scss";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
} from "formik";
// import Button from "@mui/material/Button";
import { ThemeProvider, Button } from "@mui/material";
import { SignUpSchema, SignInSchema } from "./ValidationSchema";
// import classNames from "classnames";
// import { Loader } from "../Loader";
import { muiButtonTheme, FormTextFields } from "./FormTextFields";

export interface FormValues {
  username: string,
  password: string,
  fullname: string,
}

const initialValues: FormValues = {
  username: "",
  password: "",
  fullname: "",
};

export const Form: FC = () => {
  // const { data } = useGetTokenQuery();
  // const [addUser, { isError, isLoading }] = useAddUserMutation();
  // const dispatch = useAppDispatch();

  const [isNewUser] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    const formFields = Object.entries(values);
    const userForm = new FormData();

    formFields.forEach((field) => userForm.append(field[0], field[1]));
    actions.resetForm();
    // setIsRegistered(true);
  };

  return (
    <section className="form">
      <h2 className="form__title">
        {isNewUser ? "Sign Up" : "Sign In"}
      </h2>

      {/* <div className="form__loader">
        {isLoading && <Loader />}
      </div> */}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={isNewUser ? SignUpSchema : SignInSchema}
      >
        {({
          dirty,
          isValid,
          errors,
          touched,
        }) => (
          <>
            <FormTextFields errors={errors} touched={touched} isNewUser={isNewUser} />

            <FormikForm>
              <ThemeProvider theme={muiButtonTheme}>
                <Button
                  variant="contained"
                  type="submit"
                  id="signUp"
                  disabled={!dirty || !isValid}
                  className="form__button"
                >
                  {isNewUser ? "Sign Up" : "Sign In"}
                </Button>
              </ThemeProvider>
            </FormikForm>
          </>
        )}
      </Formik>

      {isNewUser && (
        <p className="form__toggle">
          Don&apos;t have account yet?
          {" "}
          <a
            href="/signin"
            className="form__link"
          >
            New Account
          </a>
        </p>
      )}

      {!isNewUser && (
        <p className="form__toggle">
          I have an account.
          {" "}
          <a
            href="/signup"
            className="form__link"
          >
            Go to Sign in
          </a>
        </p>
      )}
    </section>
  );
};
