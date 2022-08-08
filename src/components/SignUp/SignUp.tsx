import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { register } from '../../api/api';
import { Pages } from '../Auth/Auth';
import '../Auth/Form.scss';
import eyeOff from '../../img/eyeOff.svg'
import eyeOn from '../../img/eyeOn.svg';

type Props = {
    setCurrentPage: Dispatch<SetStateAction<Pages>>;
};

const SignUp: React.FC<Props> = ({ setCurrentPage }) => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [eye, setEye] = useState(eyeOff);
    const [passwordType, setPasswordType] = useState('password');
    const [error, setError] = useState('');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    useEffect(() => {
        setIsErrorVisible(false);
    }, [fullName, username, password, confirm]);

    const changePage = () => {
        setCurrentPage(Pages.SignIn);
    }

    const changeVisibility = () => {
        if (eye === eyeOff) {
            setEye(eyeOn);
            setPasswordType('text');
        } else {
            setEye(eyeOff);
            setPasswordType('password');
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== confirm) {
            setError('Password does not match the confirmed password');
            setIsErrorVisible(true);
        } else {
            register(password, username, fullName)
                .then(response => {
                    if (response.ok) {
                        setCurrentPage(Pages.SignIn);
                    } else {
                        response.json().then(reject => {
                            setError(reject.message);
                            if (reject.statusCode === 409) {
                                setError('Username is already used by another user');
                            }
                            setIsErrorVisible(true);
                        })
                    }
                });
        }
    }

    return (
        <form
            className='Form'
            onSubmit={handleSubmit}
        >
            <h2 className='Form__title'>SIGN UP</h2>
            <label className='Form__label'>
                Full Name
                <input
                    type="text"
                    name="fullname"
                    className='Form__input'
                    placeholder='Example Name'
                    value={fullName}
                    onChange={event => { setFullName(event.target.value) }}
                    required
                />
            </label>
            <label className='Form__label'>
                User Name
                <input
                    type="text"
                    name="username"
                    className='Form__input'
                    placeholder='Example123'
                    value={username}
                    onChange={event => { setUsername(event.target.value) }}
                    required
                />
            </label>
            <label className='Form__label'>
                Password
                <input
                    type={passwordType}
                    name="password"
                    className='Form__input'
                    placeholder='***************'
                    value={password}
                    onChange={event => { setPassword(event.target.value) }}
                    required
                />
                <img
                    src={eye}
                    className='Form__toggler'
                    onClick={changeVisibility}
                />
            </label>
            <label className='Form__label'>
                Confirm password
                <input
                    type={passwordType}
                    name="confirm"
                    className='Form__input'
                    placeholder='***************'
                    value={confirm}
                    onChange={event => { setConfirm(event.target.value) }}
                    required
                />
                <img
                    src={eye}
                    className='Form__toggler'
                    onClick={changeVisibility}
                />
            </label>
            <input
                type="submit"
                value="Sign Up"
                className='Form__submit'
            />
            {isErrorVisible && (<p className='Form__error'>{error}</p>)}
            <span className='Form__footer'>I have an account.&nbsp;
                <a
                    className='Form__link'
                    onClick={changePage}
                >
                    Go to Sign in
                </a>
            </span>
        </form>
    );
};

export default SignUp;