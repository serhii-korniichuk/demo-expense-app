import react from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export const SignUp = () => {
  return (
    <div className="signUp">
      <h1 className="h1__signUp">Sign Up</h1>

      <Formik
        initialValues={{
          fullName: "",
          userName: "",
          password: "",
          cpassword: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form">
          <label htmlFor="fullname">Full Name</label>

          <Field
            id="fullname"
            name="fullname"
            placeholder="Example Name"
            type="firstName"
          ></Field>
          <label htmlFor="username">User Name</label>

          <Field
            id="username"
            name="username"
            placeholder="Example123"
            type="username"
          ></Field>
          <label htmlFor="password">Password</label>

          <Field
            id="password"
            name="password"
            placeholder="1234567890ABCDE"
            type="password"
          ></Field>
          <label htmlFor="cpassword">Confirm Password</label>

          <Field
            id="cpassword"
            name="cpassword"
            placeholder="1234567890ABCDE"
            type="password"
          ></Field>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};
