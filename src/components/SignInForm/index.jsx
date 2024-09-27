import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from 'components/TextInput/index';
import PasswordInput from 'components/PasswordInput/index';
import Button from 'components/Button/index';
import { loginRequest } from 'utils/axios_utils';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [userNameDirty, setUserNameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const errorEl = useRef();

    const navigate = useNavigate();

    const userNameHandler = (event) => {
        setUserNameDirty(true);
        if (String(event.target.value).length < 5) {
            setUserNameError('User name should be no less than 5 symbols');
        } else {
            setUserNameError('');
        }
    };

    const passwordHandler = (event) => {
        setPasswordDirty(true);
        if (String(event.target.value).length < 8) {
            setPasswordError('Password should be no less than 8 symbols');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();

        loginRequest(password, username)
            .then(response => {
                sessionStorage.setItem('accessToken', response.data.accessToken);
                sessionStorage.setItem('refreshToken', response.data.refreshToken);
                navigate('/');
            })
            .catch(() => {
                errorEl.current.classList.add(styles.visibility);
                setTimeout(() => {
                    errorEl.current.classList.remove(styles.visibility)
                }, 3000)
            })
            .finally(() => {
                setTimeout(() => {
                    setUserName('');
                    setPassword('');
                }, 3000);
            });
    }

    useEffect(() => {
        if (!userNameError && !passwordError && (userNameDirty && passwordDirty)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [userNameError, passwordError, userNameDirty, passwordDirty]);

    return (
        <div className={styles.login}>
            <div className={styles.login__title}>SIGN IN</div>
            <div
                className={styles.error}
                ref={errorEl}
            >
                Invalid user!
            </div>
            <form
                className={styles.form}
                onSubmit={(event) => handleLogin(event)}
            >
                <TextInput
                    name='User Name'
                    type='text'
                    error={userNameError}
                    value={username}
                    setValue={setUserName}
                    inputHandler={userNameHandler}
                    dirty={userNameDirty}
                />
                <PasswordInput
                    name='Password'
                    type={passwordVisibility ? 'text' : 'password'}
                    passwordVisibility={passwordVisibility}
                    setPasswordVisibility={setPasswordVisibility}
                    error={passwordError}
                    value={password}
                    setValue={setPassword}
                    inputHandler={passwordHandler}
                    dirty={passwordDirty}
                />
                <Button
                    text='Sign In'
                    disabled={disabled}
                    type='submit'
                />
            </form>
            <p
                className={styles.login__redirect}
            >
                Don’t have account yet?
                <Link to='/auth/register' className={styles.login__redirect_link}>
                    <span>&nbsp;New Account</span>
                </Link>
            </p>
        </div>
    );
};

export default SignInForm;