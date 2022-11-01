import React from 'react';
import { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Auth: React.FC = () => {
  const [signInStatus, setSignInStatus] = useState(true);

  return (
    <div className="form">
      <div className="form__container">
        <a 
          className='form__logo--link'
          href='/'>
          <h1 className="form__logo">
            InCode
          </h1>
        </a>
        <p className="form__logo-text">
          Finance
        </p>
        {signInStatus
          ? ( <SignIn 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
          />
          )
          : ( <SignUp 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
          />
          )
        }
      </div>
    </div>
  );
};
