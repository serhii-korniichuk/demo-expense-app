import React, { useState } from 'react';
import '../styles/blocks/Auth.scss';
import '../styles/blocks/Header.scss';
import '../styles/blocks/button.scss';
import { ReactComponent as Toggle } from '../images/toggler.svg';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api';

type Props = {
    setIsLogged: CallableFunction;
}

export const SignIn: React.FC<Props> = ({ setIsLogged }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPassShowed, setIsPassShowed] = useState(false);

    const navigate = useNavigate();

    const onPassToggle = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        setIsPassShowed(!isPassShowed);
    }

    const onSubmitForm = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (!username || !password) {
            setErrorMessage('All fields must be filled in!  ')
            return;
        }

        login(username, password).then(res => {
            if (res.ok) {
                setIsLogged(true);
                navigate('/home');
            } else {
                setErrorMessage('Incorrect password or username!')
            }
        });
    }

    return (
        <div className="page">
            <div className="page__container">
                <h3 className="page__title">InCode</h3>
                <h5 className="page__underTitle">Finance</h5>

                <div className="form">
                    <h1 className="form__title">SIGN IN</h1>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <p className="form__text">User Name</p>
                        <div className="form__container">
                            <input
                                type="text"
                                className="form__input"
                                placeholder="Example123"
                                value={username}
                                onChange={e => {
                                    setUsername(e.target.value);
                                    setErrorMessage('');
                                }}
                            />
                        </div>

                        <p className="form__text">Password</p>
                        <div className="form__container password">
                            <input
                                type={isPassShowed ? "text" : "password"}
                                className="form__input"
                                placeholder="***************"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    setErrorMessage('');
                                }}
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
                            Sign In
                        </button>
                    </form>

                    <div className="footer">
                        <p className="footer__text">Don’t have account yet?
                            <Link to="/sign-up" className="footer__link"> New account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
