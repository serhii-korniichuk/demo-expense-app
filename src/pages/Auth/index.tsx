import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { SiteLogo } from '../../components';

import './index.scss';

const Auth = () => {
    const [isSignInPage, setIsSignInPage] = useState(true);
    const switchPage = () => {
        setIsSignInPage(prev => !prev)
    }

    return (
        <div className='auth-page'>
            <div className='auth-page__content'>
                <SiteLogo />
                <ToastContainer hideProgressBar={true} />
                {isSignInPage ? <SignIn switchPage={switchPage}/> : <SignUp switchPage={switchPage}/>}
            </div>
        </div>
)
}

export default Auth;
