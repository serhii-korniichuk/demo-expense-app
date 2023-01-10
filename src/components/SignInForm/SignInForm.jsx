import React from 'react';
import {Form, Formik} from "formik";
import css from "../../app.module.scss";
import CustomInput from "../shared/common/CustomInput/CustomInput";
import PasswordInput from "../shared/common/PasswordInput/PasswordInput";
import schema from "./schema";
import {useDispatch} from "react-redux";
import {getSignIn} from "../../store/UserSlice";

const SignInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    password: '',
  }

  const myHandleSubmit = async ({username, password}) => {
    const reqData = {username, password}

    dispatch(getSignIn(reqData));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={myHandleSubmit}
    >
      <Form className={css.form}>
        <CustomInput
          label='User Name'
          id="username"
          name="username"
          type="text"
        />
        <PasswordInput
          label='Password'
          id="password"
          name="password"
          type="password"
        />
        <button className={css.sendButton} type="submit">Sign In</button>
      </Form>
    </Formik>
  );
};

export default SignInForm;