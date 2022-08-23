import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from 'components/TextInput/index';
import PasswordInput from 'components/PasswordInput/index';
import Button from 'components/Button/index';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
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

    const fullNameEl = useRef();
    const userNameEl = useRef();
    const passwordEl = useRef();
    const confirmPasswordEl = useRef();

    const navigate = useNavigate();

    const fullNameHandler = (event) => {
        fullName ? fullNameEl.current.style.opacity = '1' : fullNameEl.current.style.opacity = '0'
        setFullNameDirty(true);
        if (!String(event.target.value).includes(' ')) {
            setFullNameError('Full name must be at least two words');
        } else {
            setFullNameError('');
        }
    };

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

    const confirmPasswordHandler = (event) => {
        confirmPassword ? confirmPasswordEl.current.style.opacity = '1' : confirmPasswordEl.current.style.opacity = '0'
        setConfirmPasswordDirty(true);
        if (String(event.target.value) !== password) {
            setConfirmPasswordError('Passwords don\'t match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();

        fetch('https://incode-backend-dev.herokuapp.com/auth/register', {
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'password': password,
                'username': userName,
                'displayName': fullName,
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                navigate('/auth/login');
            })
    }

    useEffect(() => {
        if (!fullNameError && !userNameError && !passwordError && !confirmPasswordError && (fullNameDirty && userNameDirty && passwordDirty)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [fullNameError, userNameError, passwordError, confirmPasswordError, fullNameDirty, userNameDirty, passwordDirty]);

    return (
        <div className={styles.register}>
            <div className={styles.register__title}>SIGN UP</div>
            <form
                className={styles.form}
                onSubmit={(event) => handleRegister(event)}
            >
                <TextInput
                    inputEl={fullNameEl}
                    error={fullNameError}
                    value={fullName}
                    setValue={setFullName}
                    inputHandler={fullNameHandler}
                    dirty={fullNameDirty}
                    placeholder='Full Name'
                />
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
                <PasswordInput
                    inputEl={confirmPasswordEl}
                    error={confirmPasswordError}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    inputHandler={confirmPasswordHandler}
                    dirty={confirmPasswordDirty}
                    placeholder='Password'
                    passwordVisibility={passwordVisibility}
                    setPasswordVisibility={setPasswordVisibility}
                />
                <Button
                    text='Sigm Up'
                    disabled={disabled}
                />
            </form>
            <p
                className={styles.register__redirect}
            >
                I have an account.
                <Link to="/auth/login" style={{ textDecoration: 'none' }}>
                    <span className={styles.register__redirect_link}>
                        Go to Sign in
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default SignUpForm;