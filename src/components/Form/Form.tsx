import React, {
  FC,
  useCallback,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Form.scss";
import { Formik, FormikHelpers } from "formik";
import { SignUpSchema, SignInSchema } from "./ValidationSchema";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Submit } from "./Submit";
import { FormServiceInfo } from "./FormServiceInfo";
import { FormToggle } from "./FormToggle";
import { authExistUser, getNewUser } from "../../queries/queries";

export interface FormValues {
  username: string,
  password: string,
  displayName?: string,
}

export interface Response {
  statusCode: number,
  message: string,
  accessToken: string,
  username?: string,
}

const initialValues: FormValues = {
  username: "",
  password: "",
  displayName: "",
};

export const Form: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const registerNewUser = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    try {
      setIsLoading(true);

      const data: Response = await getNewUser(values);

      switch (true) {
        case !!data.username:
          actions.resetForm();
          navigate("/signin");
          break;

        case data.statusCode === 409:
          setErrorMessage("Username is already used by another user");
          break;

        default:
          setErrorMessage(data.message);
      }

      setIsLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const authUser = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    try {
      setIsLoading(true);

      const signInValues = { ...values };
      delete signInValues.displayName;

      const data: Response = await authExistUser(signInValues);

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      switch (true) {
        case !!data.accessToken:
          actions.resetForm();
          navigate("/");
          break;

        case data.statusCode === 401:
          setErrorMessage("Invalid username or password");
          break;

        case data.statusCode === 404:
          setErrorMessage("User not found");
          break;

        default:
          setErrorMessage(data.message);
      }

      setIsLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = useCallback(
    async (
      values: FormValues,
      actions: FormikHelpers<FormValues>,
    ) => {
      setErrorMessage("");

      if (location.pathname === "/signin") {
        authUser(values, actions);
      }

      if (location.pathname === "/signup") {
        registerNewUser(values, actions);
      }
    },
    [location],
  );

  return (
    <section className="form">
      <h2 className="form__title">
        {location.pathname === "/signup" ? "Sign Up" : "Sign In"}
      </h2>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={location.pathname === "/signin"
          ? SignInSchema
          : SignUpSchema}
      >
        {({
          dirty,
          isValid,
          errors,
          touched,
          resetForm,
        }) => (
          <>
            {location.pathname === "/signup"
              ? <SignUp errors={errors} touched={touched} />
              : <SignIn errors={errors} touched={touched} />}

            <Submit dirty={dirty} isValid={isValid} isLoading={isLoading} />

            <FormToggle resetForm={resetForm} setErrorMessage={setErrorMessage} />
          </>
        )}
      </Formik>

      <FormServiceInfo errorMessage={errorMessage} isLoading={isLoading} />
    </section>
  );
};
