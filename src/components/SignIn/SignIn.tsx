import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/api';
import { Pages } from '../Auth/Auth';
import '../Auth/Auth.scss';
import eyeOff from '../../img/eyeOff.svg'
import eyeOn from '../../img/eyeOn.svg';

type Props = {
    setCurrentPage: Dispatch<SetStateAction<Pages>>;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setCurrentPage, setIsAuthorized }) => {
    const navigate = useNavigate();

    const [eye, setEye] = useState(eyeOff);
    const [passwordType, setPasswordType] = useState('password');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changePage = () => {
        setCurrentPage(Pages.SignUp);
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

        const result = login(username, password);

        result.then(response => {
            if (response.ok) {
                setIsAuthorized(true);
                navigate('/home');
            } else {
                response.json().then(error => {
                    alert(error.message);
                })
            }
        });
    }

    return (
        <div className='Auth__signIn SignIn'>
            <form
                className='SignIn__form Form'
                onSubmit={handleSubmit}
            >
                <h2 className='Form__title'>SIGN IN</h2>
                <label className='Form__label'>
                    User Name
                    <input
                        type='text'
                        name='username'
                        className='Form__input'
                        placeholder='Example123'
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </label>
                <label className='Form__label'>
                    Password
                    <input
                        type={passwordType}
                        name='password'
                        className='Form__input'
                        placeholder='***************'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <img 
                      src={eye} 
                      className='Form__toggler'
                      onClick={changeVisibility}
                    />
                </label>
                <input
                    type='submit'
                    value='Sign In'
                    className='Form__submit'
                />
                <span className='Form__footer'>
                    Don&apos;t have account yet?&nbsp; 
                    <a 
                      onClick={changePage} 
                      className='Form__link'
                    >
                        New Account
                    </a>
                </span>
            </form>
        </div>
    );
};

export default SignIn;