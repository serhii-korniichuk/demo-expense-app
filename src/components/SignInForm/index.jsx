import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from 'components/TextInput/index';
import PasswordInput from 'components/PasswordInput/index';
import Button from 'components/Button/index';
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
                <TextInput
                    inputEl={userNameEl}
                    error={userNameError}
                    value={userName}
                    setValue={setUserName}
                    inputHandler={userNameHandler}
                    dirty={userNameDirty}
                    placeholder='User Name'
                />
                <PasswordInput
                    inputEl={passwordEl}
                    error={passwordError}
                    value={password}
                    setValue={setPassword}
                    inputHandler={passwordHandler}
                    dirty={passwordDirty}
                    placeholder='Password'
                    passwordVisibility={passwordVisibility}
                    setPasswordVisibility={setPasswordVisibility}
                />
                <Button
                    text='Sigm In'
                    disabled={disabled}
                />
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