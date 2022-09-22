import React from 'react';
import '../styles/Auth.scss';
import '../styles/Header.scss';
import '../styles/button.scss';
import {ReactComponent as Toggle, ReactComponent as Toggler} from "../images/toggler.svg";
import {Link} from "react-router-dom";

type Props = {
    isPassShowed: boolean;
    setIsPassShowed: CallableFunction;
}

export const SignUp: React.FC<Props> = (props) => {
    const { isPassShowed, setIsPassShowed } = props;

    const onPassToggle = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        setIsPassShowed(!isPassShowed);
    }

    return (
        <div className="page">
            <div className="page__container">
                <h3 className="page__title">InCode</h3>
                <h5 className="page__underTitle">Finance</h5>

                <div className="form">
                    <h1 className="form__title">SIGN UP</h1>
                    <form action="/homepage" method="GET">
                        <p className="form__text">Full Name</p>
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Example Name"
                        />

                        <p className="form__text">User Name</p>
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Example123"
                        />

                        <p className="form__text">Password</p>
                        <div className="form__container password">
                            <input
                                type={isPassShowed ? "text" : "password"}
                                className="form__input"
                                placeholder="***************"
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
                            />

                            <button
                                className="hidePassBtn"
                                onClick={(e) => onPassToggle(e)}
                            >
                                <Toggle />
                            </button>
                        </div>

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
