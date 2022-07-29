import React, { FC } from "react";
// import "./Form.scss";
import {
  Formik,
  Form,
  // Field,
  // ErrorMessage,
  FormikHelpers,
} from "formik";
import { SignUpSchema } from "./SingUpSchema";
// import classNames from "classnames";
// import { Loader } from "../Loader";
import { FormTextFields } from "./FormTextFields";

export interface FormValues {
  name: string,
  email : string,
  phone: string,
  position_id: number,
  photo: string,
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  position_id: 0,
  photo: "",
};

export const LogInForm: FC = () => {
  // const { data } = useGetTokenQuery();
  // const [addUser, { isError, isLoading }] = useAddUserMutation();
  // const dispatch = useAppDispatch();

  // const [isRegistered, setIsRegistered] = useState(false);

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
        Working with POST request
      </h2>

      {/* <div className="form__loader">
        {isLoading && <Loader />}
      </div> */}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={SignUpSchema}
      >
        {({
          dirty,
          isValid,
          errors,
          touched,
        }) => (
          <>
            <FormTextFields errors={errors} touched={touched} />

            <Form>
              <button
                type="submit"
                id="signUp"
                disabled={!dirty || !isValid}
                className="button"
              >
                Sign up
              </button>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};
