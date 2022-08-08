import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/api';
import { Pages } from '../Auth/Auth';
import '../Auth/Auth.scss';

type Props = {
    setCurrentPage: Dispatch<SetStateAction<Pages>>;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
};

const SignIn: React.FC<Props> = ({ setCurrentPage, setIsAuthorized }) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changePage = () => {
        setCurrentPage(Pages.SignUp);
    }

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
                        type="text"
                        name="username"
                        className='Form__input'
                        placeholder='Example123'
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </label>
                <label className='Form__label'>
                    Password
                    <input
                        type="password"
                        name="password"
                        className='Form__input'
                        placeholder='***************'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Sign In"
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