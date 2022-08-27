import React from 'react';
import css from '../../app.module.scss';
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import {useDispatch, useSelector} from "react-redux";
import {setAuthType} from "../../store/UserSlice";
import {Navigate} from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const {authType, isAuth} = useSelector(state => state.user);
  const storage = window.localStorage;

  const handleSwitch = () => {
    dispatch(setAuthType());
  }

  if (isAuth || storage.getItem('accessToken'))
    return <Navigate to='/' replace />

  return (
    <>
      <h1 className={css.pageTitleAuth}>{authType === 'signUp' ? 'Sign Up' : 'Sign In'}</h1>

      {authType === 'signUp'
        ? <>
          <SignUpForm/>
          <p className={css.text}>I have an account.{' '}
            <span
              className={css.textSwitcher}
              onClick={handleSwitch}
            >Go to Sign in</span>
          </p>
        </>
        : <>
          <SignInForm/>
          <p className={css.text}>Don’t have account yet?{' '}
            <span
              className={css.textSwitcher}
              onClick={handleSwitch}
            >New Account</span>
          </p>
        </>
      }
    </>
  );
};

export default Auth;