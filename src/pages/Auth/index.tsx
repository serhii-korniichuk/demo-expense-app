import React, { useCallback, useState } from 'react';
import { Logo, CenteredLayout, SignInForm, SignUpForm } from '../../components';
import classes from './styles.module.scss';

interface formType {
  header: string
  footer: string
  buttonText: string
  form: JSX.Element
}

export const Auth: React.FC = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const getCopy = useCallback(
    (hasAccount: boolean): formType => {
      const signInForm = {
        header: 'SIGN IN',
        footer: 'Don’t have account yet? ',
        buttonText: 'New Account',
        form: <SignInForm />,
      };
      const signUpForm = {
        header: 'SIGN UP',
        footer: 'I have an account. ',
        buttonText: 'Go to Sign in',
        form: <SignUpForm />,
      };

      if (hasAccount) {
        return signInForm;
      }
      return signUpForm;
    },
    [hasAccount],
  );

  const { header, footer, buttonText, form } = getCopy(hasAccount);

  return (
    <CenteredLayout>
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
    </CenteredLayout>
  );
};
