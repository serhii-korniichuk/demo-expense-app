import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [userNameDirty, setUserNameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const userNameEl = useRef();
    const passwordEl = useRef();

    const navigate = useNavigate();

    const userNameHandler = (event) => {
        userName ? userNameEl.current.style.opacity = '1' : userNameEl.current.style.opacity = '0'
        setUserNameDirty(true);
        if (String(event.target.value).length < 5) {
            setUserNameError('User name should be no less than 5 symbols');
        } else {
            setUserNameError('');
        }
    };

    const passwordHandler = (event) => {
        password ? passwordEl.current.style.opacity = '1' : passwordEl.current.style.opacity = '0'
        setPasswordDirty(true);
        if (String(event.target.value).length < 8) {
            setPasswordError('Password should be no less than 8 symbols');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();

        fetch('https://incode-backend-dev.herokuapp.com/auth/login', {
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'password': password,
                'username': userName,
            })
        })
            .then(res => res.json())
            .then(tokens => {
                sessionStorage.setItem('accessToken', tokens.accessToken);
                sessionStorage.setItem('refreshToken', tokens.refreshToken);
                navigate('/');
            })
    }

    useEffect(() => {
        if (!userNameError && !passwordError && userNameDirty) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [userNameError, passwordError, userNameDirty]);

    return (
        <div className={styles.login}>
            <div className={styles.login__title}>SIGN IN</div>
            <form
                className={styles.form}
                onSubmit={(event) => handleLogin(event)}
            >
                <div className={styles.form__input}>
                    <small
                        className={styles.form__input_label}
                        ref={userNameEl}
                        style={userNameError ? { color: 'red' } : { color: 'white' }}
                    >
                        User Name
                    </small>
                    <input
                        className={styles.form__input_field}
                        type="text"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder='User Name'
                        style={userNameError ? { borderColor: 'red', color: 'red' } : { borderColor: 'white', color: 'white' }}
                        onFocus={() => {
                            userNameEl.current.style.opacity = '1'
                        }}
                        onBlur={(event) => userNameHandler(event)}
                    />
                    {(userNameDirty && userNameError) && <small className={styles.error}>{userNameError}</small>}
                </div>
                <div className={styles.form__input}>
                    <small
                        className={styles.form__input_label}
                        ref={passwordEl}
                        style={passwordError ? { color: 'red' } : { color: 'white' }}
                    >
                        Password
                    </small>
                    <div className={styles.password}>
                        <input
                            className={styles.form__input_field}
                            type={passwordVisibility ? "text" : "password"}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='Password'
                            style={passwordError ? { borderColor: 'red', color: 'red', width: '306px' } : { borderColor: 'white', color: 'white', width: '306px' }}
                            onFocus={() => {
                                passwordEl.current.style.opacity = '1'
                            }}
                            onBlur={(event) => passwordHandler(event)}
                        />
                        <div
                            className={styles.password__decor}
                            style={passwordError ? { borderColor: 'red' } : { borderColor: 'white' }}
                            onClick={() => setPasswordVisibility(!passwordVisibility)}
                        >
                            <div className={styles.password__decor_eye}></div>
                            <div
                                className={styles.password__decor_line}
                                style={passwordVisibility ? { display: 'none' } : { display: 'block' }}
                            >
                            </div>
                        </div>
                    </div>
                    {(passwordDirty && passwordError) && <small className={styles.error}>{passwordError}</small>}
                </div>
                <button
                    className={styles.form__btn}
                    disabled={disabled}
                    type="submit"
                >
                    <span className={styles.form__btn_text}>Sign In</span>
                </button>
            </form>
            <p
                className={styles.login__redirect}
            >
                Don’t have account yet?
                <Link to="/auth/register" style={{ textDecoration: 'none' }}>
                    <span className={styles.login__redirect_link}>
                        New Account
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SignInForm;