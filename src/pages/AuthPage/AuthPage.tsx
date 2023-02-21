import React, {useState} from 'react';
import {SignInForm} from '../../components/SignForms/SignInForm';
import {SignUpForm} from '../../components/SignForms/SignUpForm';
import classes from './AuthPage.module.css';
import {Logo} from '../../components/logo/Logo';

interface Props {
  setLogInStatus: (arg: boolean) => void
}

export const AuthPage: React.FC<Props> = (props) => {
  const { setLogInStatus } = props;

  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className={classes.container}>

      <div className={classes.logo_wrapper}>
        <Logo />
      </div>

      <div className=''>
        <h2 className={classes.page_title}>
          {isRegistered ? 'Sign In' : 'Sign Up'}
        </h2>

        {isRegistered
          ? (<SignInForm setLogInStatus={setLogInStatus} />)
          : (<SignUpForm />)}

        <div className={classes.redirect_wrapper}>
          <p className={classes.redirect_info}>
            {isRegistered ? 'Don’t have account yet?' : 'I have an account.'}
          </p>

          <a
            className={classes.redirect_link}
            onClick={() => setIsRegistered(prev => !prev)}
          >
            &nbsp;
            {isRegistered ? 'New Account' : 'Go to Sign in'}
          </a>
        </div>
      </div>
    </div>
  );
}
