import React, { useState } from 'react';
import '../styles/blocks/Auth.scss';
import '../styles/blocks/Header.scss';
import '../styles/blocks/button.scss';
import { ReactComponent as Toggle } from '../images/toggler.svg';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api';

type Props = {
    setIsLogged: CallableFunction;
}

export const SignUp: React.FC<Props> = ({ setIsLogged }) => {
    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPassShowed, setIsPassShowed] = useState(false);

    const navigate = useNavigate();

    const onPassToggle = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        setIsPassShowed(!isPassShowed);
    }

    const onFormSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();

        if (!username || !displayName || !password || !confirmPassword) {
            setErrorMessage('All fields must be filled in');
        }

        if (confirmPassword === password) {
            register(displayName, username, password)
                .then(res => {
                    console.log(res);

                    if (res.ok) {
                        setIsLogged(true);
                        navigate('/home');
                    } else {
                        if (res.status === 409) {
                            setErrorMessage('User already exist!');
                        }
                    }
                });
        } else if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters!');
        } else if (password !== confirmPassword) {
            setErrorMessage('The passwords don\'t match!');
        }
    }

    return (
        <div className="page">
            <div className="page__container">
                <h3 className="page__title">InCode</h3>
                <h5 className="page__underTitle">Finance</h5>

                <div className="form">
                    <h1 className="form__title">SIGN UP</h1>
                    <form onSubmit={e => onFormSubmit(e)}>
                        <p className="form__text">Full Name</p>
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Example Name"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                        />

                        <p className="form__text">User Name</p>
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Example123"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />

                        <p className="form__text">Password</p>
                        <div className="form__container password">
                            <input
                                type={isPassShowed ? "text" : "password"}
                                className="form__input"
                                placeholder="***************"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <button
                                className="hidePassBtn"
                                onClick={(e) => onPassToggle(e)}
                            >
                                <Toggle />
                            </button>
                        </div>

                        <p className="form__text">Confirm Password</p>
                        <div className="form__container password">
                            <input
                                type={isPassShowed ? "text" : "password"}
                                className="form__input"
                                placeholder="***************"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />

                            <button
                                className="hidePassBtn"
                                onClick={(e) => onPassToggle(e)}
                            >
                                <Toggle />
                            </button>
                        </div>

                        {errorMessage && <p className="error">{`Error! ${errorMessage}`}</p>}

                        <button
                            type="submit"
                            className="btn"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="footer">
                        <p className="footer__text">I have an account.
                            <Link to="/sign-in" className="footer__link"> Go to Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
