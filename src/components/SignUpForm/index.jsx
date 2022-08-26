import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from 'components/TextInput/index';
import PasswordInput from 'components/PasswordInput/index';
import Button from 'components/Button/index';
import { registerRequest } from 'utils/axios_utils';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [fullNameDirty, setFullNameDirty] = useState(false);
    const [userNameDirty, setUserNameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

    const [fullNameError, setFullNameError] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const fullNameHandler = (event) => {
        setFullNameDirty(true);
        event.target.value = event.target.value.replace(/[^a-zA-Z ]/, '')
        if (!String(event.target.value).includes(' ')) {
            setFullNameError('Full name must be at least two words');
        } else {
            setFullNameError('');
        }
    };

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

    const confirmPasswordHandler = (event) => {
        setConfirmPasswordDirty(true);
        if (String(event.target.value) !== password) {
            setConfirmPasswordError('Passwords don\'t match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();

        registerRequest(password, username, fullName)
            .then(response => {
                console.log(response.data);
                navigate('/auth/login');
            })
    }

    useEffect(() => {
        if (!fullNameError && !userNameError && !passwordError && !confirmPasswordError && (fullNameDirty && userNameDirty && passwordDirty && confirmPasswordDirty)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [fullNameError, userNameError, passwordError, confirmPasswordError, fullNameDirty, userNameDirty, passwordDirty, confirmPasswordDirty]);

    return (
        <div className={styles.register}>
            <div className={styles.register__title}>SIGN UP</div>
            <form
                className={styles.form}
                onSubmit={(event) => handleRegister(event)}
            >
                <TextInput
                    name='Full Name'
                    type='text'
                    error={fullNameError}
                    value={fullName}
                    setValue={setFullName}
                    inputHandler={fullNameHandler}
                    dirty={fullNameDirty}
                />
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
                <PasswordInput
                    name='Confirm Password'
                    type={passwordVisibility ? 'text' : 'password'}
                    passwordVisibility={passwordVisibility}
                    setPasswordVisibility={setPasswordVisibility}
                    error={confirmPasswordError}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    inputHandler={confirmPasswordHandler}
                    dirty={confirmPasswordDirty}
                />
                <Button
                    text='Sign Up'
                    disabled={disabled}
                    type='submit'
                />
            </form>
            <p
                className={styles.register__redirect}
            >
                I have an account.
                <Link to='/auth/login' className={styles.register__redirect_link}>
                    <span>&nbsp;Go to Sign in</span>
                </Link>
            </p>
        </div>
    );
};

export default SignUpForm;