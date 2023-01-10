import React from 'react';
import css from './../../app.module.scss';
import {Form, Formik} from "formik";
import schema from "./schema";
import CustomInput from "../shared/common/CustomInput/CustomInput";
import PasswordInput from "../shared/common/PasswordInput/PasswordInput";
import {useDispatch} from "react-redux";
import {getSignUp} from "../../store/UserSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const myHandleSubmit = ({password, username, name}) => {
    const reqData = {
      password,
      username,
      displayName: name
    }

    dispatch(getSignUp(reqData));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={myHandleSubmit}
    >
      <Form className={css.form}>
        <CustomInput
          label='Full Name'
          id="name"
          name="name"
          type="text"
        />
        <CustomInput
          label='User Name'
          id="username"
          name="username"
          type="text"
        />
        <CustomInput
          label='Email Address'
          id="email"
          name="email"
          type="email"
        />
        <PasswordInput
          label='Password'
          id="password"
          name="password"
          type="password"
        />
        <PasswordInput
          label='Confirm password'
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
        />
        <button className={css.sendButton} type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;