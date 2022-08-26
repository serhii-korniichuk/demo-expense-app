import React from "react";

import styles from "./Auth.module.scss";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import HeaderAuth from "../../components/HeaderAuth/HeaderAuth";

const Auth = () => {
    const [isSignIn, setSignIn] = React.useState(true);

    const [fullName, setFullName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>

                {isSignIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}

                {isSignIn ? (
                    <FormSignIn
                        userName={userName}
                        setUserName={setUserName}
                        password={password}
                        setPassword={setPassword}
                    />
                ) : (
                    <FormSignUp
                        fullName={fullName}
                        setFullName={setFullName}
                        userName={userName}
                        setUserName={setUserName}
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                    />
                )}

                {isSignIn ? (
                    <p className={styles.bottomText}>
                        Don’t have account yet?{" "}
                        <span onClick={() => setSignIn(false)}>
                            New Account
                        </span>
                    </p>
                ) : (
                    <p className={styles.bottomText}>
                        I have an account.{" "}
                        <span onClick={() => setSignIn(true)}>
                            Go to Sign in
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Auth;
