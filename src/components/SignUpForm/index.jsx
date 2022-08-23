import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                <div className={styles.form__input}>
                    <small
                        className={styles.form__input_label}
                        ref={fullNameEl}
                        style={fullNameError ? { color: 'red' } : { color: 'white' }}
                    >
                        Full Name
                    </small>
                    <input
                        className={styles.form__input_field}
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        placeholder='Full Name'
                        style={fullNameError ? { borderColor: 'red', color: 'red' } : { borderColor: 'white', color: 'white' }}
                        onFocus={() => {
                            fullNameEl.current.style.opacity = '1'
                        }}
                        onBlur={(event) => fullNameHandler(event)}
                        onInput={(event) => event.target.value = event.target.value.replace(/[^a-zA-Z ]/, '')}
                    />
                    {(fullNameDirty && fullNameError) && <small className={styles.error}>{fullNameError}</small>}
                </div>

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

                <div className={styles.form__input}>
                    <small
                        className={styles.form__input_label}
                        ref={confirmPasswordEl}
                        style={confirmPasswordError ? { color: 'red' } : { color: 'white' }}
                    >
                        Password
                    </small>
                    <div className={styles.password}>
                        <input
                            className={styles.form__input_field}
                            type={passwordVisibility ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            placeholder='Confirm Password'
                            style={confirmPasswordError ? { borderColor: 'red', color: 'red', width: '306px' } : { borderColor: 'white', color: 'white', width: '306px' }}
                            onFocus={() => {
                                confirmPasswordEl.current.style.opacity = '1'
                            }}
                            onBlur={(event) => confirmPasswordHandler(event)}
                        />
                        <div
                            className={styles.password__decor}
                            style={confirmPasswordError ? { borderColor: 'red' } : { borderColor: 'white' }}
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
                    {(confirmPasswordDirty && confirmPasswordError) && <small className={styles.error}>{confirmPasswordError}</small>}
                </div>

                <button
                    className={styles.form__btn}
                    disabled={disabled}
                    tupe='submit'
                >
                    <span className={styles.form__btn_text}>Sign Up</span>
                </button>
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