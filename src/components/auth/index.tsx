import { useState } from "react";
import Header from "../unknown/header";
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";
import styles from "./styles.module.scss";

const Auth = () => {
  const [signInVariant, setSignInVariant] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <h1 className={styles.heading}>
        {signInVariant ? `Sign in` : `Sign up`}
      </h1>

      <div className={styles.form}>
        {signInVariant ? <SignInForm /> : <SignUpForm />}
      </div>

      {signInVariant ? (
        <p className={styles.phrase}>
          Don't have an account yet?{" "}
          <span className={styles.btn} onClick={() => setSignInVariant(false)}>
            New Account
          </span>
        </p>
      ) : (
        <p className={styles.phrase}>
          I have an account{" "}
          <span className={styles.btn} onClick={() => setSignInVariant(true)}>
            Go to Sign in
          </span>
        </p>
      )}
    </div>
  );
};

export default Auth;
