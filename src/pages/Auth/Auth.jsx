import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import styles from "./Auth.module.scss";
import { FormSignIn, FormSignUp, HeaderAuth } from "../../components/index";
import { authLogin, authRegister } from "../../redux/auth/asyncActions";
import { setSuccessAuth } from "../../redux/auth/slice";

const Auth = () => {
    const dispatch = useDispatch();
    const firstRender = React.useRef(false);
    const [isSignIn, setSignIn] = React.useState(true);

    const { successAuth, loggedIn } = useSelector(({ auth }) => auth);

    const handleClickSignIn = (dataSignIn) => {
        dispatch(authLogin(dataSignIn));
    };
    const handleClickSignUp = (dataSignUp) => {
        dispatch(authRegister(dataSignUp));
    };

    React.useEffect(() => {
        if (firstRender.current && successAuth) {
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
                    <FormSignIn handleClickSignIn={handleClickSignIn} />
                ) : (
                    <FormSignUp handleClickSignUp={handleClickSignUp} />
                )}

                {isSignIn ? (
                    <p className={styles.bottomText}>
                        Don’t have account yet?{" "}
                        <span
                            onClick={() => {
                                setSignIn(false);
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
