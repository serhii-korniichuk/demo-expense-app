import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { API_AUTH, BASE_URL } from "API/incode_auth_API";

interface newUser {
  fullName: string;
  username: string;
  password: string;
  cpassword: string;
}

export const SignUp = () => {
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
      console.log(data);
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
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          createUser(values);
        }}
      >
        <Form className="form">
          <label htmlFor="fullName">Full Name</label>

          <Field
            className="input"
            id="fullName"
            name="fullName"
            placeholder="Example Name"
            type="firstName"
          ></Field>
          <label htmlFor="username">User Name</label>

          <Field
            className="input"
            id="username"
            name="username"
            placeholder="Example123"
            type="username"
          ></Field>
          <label htmlFor="password">Password</label>

          <Field
            className="input"
            id="password"
            name="password"
            placeholder="1234567890ABCDE"
            type="password"
          ></Field>
          <label htmlFor="cpassword">Confirm Password</label>

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
      </Formik>
    </div>
  );
};
