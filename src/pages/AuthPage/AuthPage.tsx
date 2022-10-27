import { FC, useState } from 'react';
import classes from './AuthPage.module.scss';
import { SignInForm } from '../../components/AuthForm/SignInForm';
import { SignUpForm } from '../../components/AuthForm/SignUpForm';

export const AuthPage: FC = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className={classes.authPage}>
      <h2 className={classes.authPageTitle}>
        {isRegistered ? 'Sign In' : 'Sign Up'}
      </h2>

      {isRegistered
        ? (<SignInForm />)
        : (<SignUpForm />)}

      <div className={classes.authPageRedirect}>
        <p className={classes.authPageRedirectText}>
          {isRegistered ? 'Don’t have account yet?' : 'I have an account.'}
        </p>

        <button
          type="button"
          className={classes.authPageRedirectLink}
          onClick={() => setIsRegistered(prev => !prev)}
        >
          &nbsp;
          {isRegistered ? 'New Account' : 'Go to Sign in'}
        </button>
      </div>
    </div>
  );
};
