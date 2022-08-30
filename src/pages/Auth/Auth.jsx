import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./Auth.module.scss";
import { FormSignIn, FormSignUp, HeaderAuth } from "../../components/index";
import { authLogin, authRegister } from "../../redux/auth/asyncActions";
import {
    clearForm,
    setConfirmPassword,
    setFullName,
    setPassword,
    setSuccessAuth,
    setUserName,
} from "../../redux/auth/slice";

const Auth = () => {
    const dispatch = useDispatch();
    const firstRender = React.useRef(false);
    const [isSignIn, setSignIn] = React.useState(true);
    const [clickButton, setClickButton] = React.useState(false);

    const { fullName, userName, password, confirmPassword } = useSelector(
        ({ auth }) => auth.formData,
    );
    const { successAuth, error, loggedIn } = useSelector(({ auth }) => auth);

    const handleFullName = (fullName) => {
        dispatch(setFullName(fullName));
        setClickButton(false);
    };
    const handleUserName = (userName) => {
        dispatch(setUserName(userName));
        setClickButton(false);
    };
    const handlePassword = (password) => {
        dispatch(setPassword(password));
        setClickButton(false);
    };
    const handleConfirmPassword = (confirmPassword) => {
        dispatch(setConfirmPassword(confirmPassword));
        setClickButton(false);
    };
    const handleClearDataForm = () => {
        dispatch(clearForm());
    };
    const handleClickSignIn = () => {
        if (password && userName) {
            dispatch(authLogin());
        }
        setClickButton(true);
    };
    const handleClickSignUp = () => {
        if (
            fullName &&
            userName &&
            password &&
            confirmPassword &&
            password === confirmPassword
        ) {
            dispatch(authRegister());
        }
        setClickButton(true);
    };

    React.useEffect(() => {
        setClickButton(false);
    }, [isSignIn]);

    React.useEffect(() => {
        if (firstRender.current) {
            setSignIn(true);
            dispatch(setSuccessAuth(false));
        }
        firstRender.current = true;
    }, [successAuth, dispatch]);

    if (loggedIn) {
        return <Navigate to='/' />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>

                {isSignIn ? <h1>Sign In</h1> : <h1>Sign Up</h1>}

                {isSignIn ? (
                    <FormSignIn
                        handleUserName={handleUserName}
                        handlePassword={handlePassword}
                        clickButton={clickButton}
                        handleClickSignIn={handleClickSignIn}
                    />
                ) : (
                    <FormSignUp
                        clickButton={clickButton}
                        error={error}
                        handleClickSignUp={handleClickSignUp}
                        handleFullName={handleFullName}
                        handleUserName={handleUserName}
                        handlePassword={handlePassword}
                        handleConfirmPassword={handleConfirmPassword}
                    />
                )}

                {isSignIn ? (
                    <p className={styles.bottomText}>
                        Don’t have account yet?{" "}
                        <span
                            onClick={() => {
                                setSignIn(false);
                                handleClearDataForm();
                            }}>
                            New Account
                        </span>
                    </p>
                ) : (
                    <p className={styles.bottomText}>
                        I have an account.{" "}
                        <span
                            onClick={() => {
                                setSignIn(true);
                                handleClearDataForm();
                            }}>
                            Go to Sign in
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Auth;
