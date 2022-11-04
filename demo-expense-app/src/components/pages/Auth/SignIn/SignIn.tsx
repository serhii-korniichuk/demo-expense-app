import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "./SignIn.scss";
import { API_AUTH, BASE_URL } from "../../../../API/incode_auth_API";

export const SignIn = () => {
  const requestURL = `${BASE_URL}${API_AUTH.login}`;
  const [state, setState] = useState("");

  useEffect(() => {
    console.log(requestURL);
    const loginUser = async () => {
      try {
        const response = await fetch(requestURL, {
          method: "POST",
          body: JSON.stringify({
            username: "saudaisdkcxk",
            password: "pas2381831",
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          console.log("error");
          throw "Something wrong";
        }

        const data = await response.json();
        setState(data);
      } catch (err) {}
    };
    // loginUser();
  });
  console.log(state);

  return (
    <div className="signIn">
      <h1 className="h1__signIn">Sign In</h1>

      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form">
          <label htmlFor="username">User Name</label>

          <Field
            id="userName"
            name="userName"
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
          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};
