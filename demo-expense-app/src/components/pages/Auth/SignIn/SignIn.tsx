import react, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "./SignIn.scss";
import { API_AUTH, BASE_URL } from "API/incode_auth_API";

interface authToken {
  accessToken: string;
  refreshToken: string;
}

export const SignIn = () => {
  const requestURL = `${BASE_URL}${API_AUTH.login}`;
  const [token, setToken] = useState<authToken>();
  const [isErrorActive, setIsErrorActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onHandleSubmit = (values: any) => {
    if (typeof values === "undefined") {
      return;
    }
    const loginUser = async () => {
      try {
        const response = await fetch(requestURL, {
          method: "POST",
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          setIsErrorActive(true);
          throw "Something wrong";
        }

        const data = await response.json();
        setToken(data);
        // setIsErrorActive(false);
      } catch (err) {}
    };
    loginUser();
  };

  if (typeof token !== "undefined") {
    navigate("/Main", { state: { token: token } });
  }
  return (
    <div className="signIn">
      <h1 className="title">Sign In</h1>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onHandleSubmit}
      >
        <Form className="form">
          <label htmlFor="username">User Name</label>

          <Field
            className="input"
            id="username"
            name="username"
            placeholder="Example123"
            type="username"
            // autoComplete="off"
          ></Field>
          <label htmlFor="password">Password</label>

          <Field
            className="input"
            id="password"
            name="password"
            placeholder="1234567890ABCDE"
            type="password"
            autoComplete="new-password"
          ></Field>
          <button className="button" type="submit">
            Sign In
          </button>
          <span
            className={
              isErrorActive ? "errorMessage" : "errorMessage invisibleMessage"
            }
          >
            Invalid Credentials
          </span>
        </Form>
      </Formik>
    </div>
  );
};
