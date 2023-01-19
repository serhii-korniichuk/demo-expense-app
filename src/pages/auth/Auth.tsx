import React, { useCallback, useState } from 'react';
import { Logo, Centered } from '../../shared/components';
import classes from './Auth.module.scss';
import { SignInForm, SignUpForm } from './components';

interface copyType {
  header: string
  footer: string
  buttonText: string
  form: JSX.Element
}

export const Auth: React.FC = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const getCopy = useCallback(
    (hasAccount: boolean): copyType => {
      const signInCopy = {
        header: 'SIGN IN',
        footer: 'Don’t have account yet? ',
        buttonText: 'New Account',
        form: <SignInForm />,
      };
      const signUpCopy = {
        header: 'SIGN UP',
        footer: 'I have an account. ',
        buttonText: 'Go to Sign in',
        form: <SignUpForm />,
      };

      if (hasAccount) {
        return signInCopy;
      }
      return signUpCopy;
    },
    [hasAccount],
  );

  const { header, footer, buttonText, form } = getCopy(hasAccount);

  return (
    <Centered>
      <div className={classes.container}>
        <Logo />
        <h1>{header}</h1>
        <div className={classes.formContainer}>
          {form}
          <p className={classes.footer}>
            {footer}
            <span
              onClick={() => {
                setHasAccount(!hasAccount);
              }}
            >
              {buttonText}
            </span>
          </p>
        </div>
      </div>
    </Centered>
  );
};
