import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { API_AUTH, BASE_URL } from "API/incode_auth_API";
import * as Yup from "yup";

interface newUser {
  fullName: string;
  username: string;
  password: string;
  cpassword: string;
}

interface OnHandleToSignIn {
  onHandleToSignIn: () => any;
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(32, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(1, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(1, "Too Short!")
    .max(24, "Too Long!")
    .required("Required")
    .oneOf([Yup.ref("cpassword"), null], "Passwords must match"),
  cpassword: Yup.string()
    .min(1, "Too Short!")
    .max(24, "Too Long!")
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const SignUp = ({ onHandleToSignIn }: OnHandleToSignIn) => {
  const requestURL = `${BASE_URL}${API_AUTH.register}`;
  const [state, setState] = useState("");

  useEffect(() => {});

  const createUser = async (values: newUser) => {
    try {
      const response = await fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
          password: values.password,
          username: values.username,
          displayName: values.fullName,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw "Something wrong";
      }

      const data = await response.json();
      setState(data);
      console.log(response);
      onHandleToSignIn();
    } catch (err) {}
  };

  return (
    <div className="signUp">
      <h1 className="title">Sign Up</h1>

      <Formik
        initialValues={{
          fullName: "",
          username: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          createUser(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="fullName">Full Name</label>
            {errors.fullName && touched.fullName ? (
              <span className="errorMessage">{errors.fullName}</span>
            ) : null}
            <Field
              className="input"
              id="fullName"
              name="fullName"
              placeholder="Example Name"
              type="firstName"
            ></Field>
            <label htmlFor="username">User Name</label>
            {errors.username && touched.username ? (
              <span className="errorMessage">{errors.username}</span>
            ) : null}
            <Field
              className="input"
              id="username"
              name="username"
              placeholder="Example123"
              type="username"
            ></Field>
            <label htmlFor="password">Password</label>
            {errors.password && touched.password ? (
              <span className="errorMessage">{errors.password}</span>
            ) : null}
            <Field
              className="input"
              id="password"
              name="password"
              placeholder="1234567890ABCDE"
              type="password"
            ></Field>

            <label htmlFor="cpassword">Confirm Password</label>
            {errors.cpassword && touched.cpassword ? (
              <span className="errorMessage">{errors.cpassword}</span>
            ) : null}
            <Field
              className="input"
              id="cpassword"
              name="cpassword"
              placeholder="1234567890ABCDE"
              type="password"
            ></Field>

            <button className="button" type="submit">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
