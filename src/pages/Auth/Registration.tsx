import React, { useState } from 'react';
import { Input } from './page-elements/Input';
import './Registration.scss';

type Props = {
  toLoginUser: () => void;
};

export const Registration: React.FC<Props> = (props) => {
  const {toLoginUser} = props;

  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userPassConfirm, setUserPassConfirm] = useState('');

  const canSignIn = userName !== '' && userPass !== '';
  const isPassCorrect = userPass === userPassConfirm
  const canSignUp = canSignIn && userFullName !== '' && isPassCorrect;

  const handleSignIn = () => {
    if (canSignIn) {
      const data = {
        username: userName,
        password: userPass,
      }

      fetch('https://incode-backend-dev.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      })
        .then(res => {
          console.log(res);
          if (!res.ok) {
            setIsSignUp(prev => !prev);
          } else {
            toLoginUser();
          }
        })
        .catch(res => {
          console.log(res);
          setIsSignUp(prev => !prev);
        })
        .finally(() => {
          setUserName('');
          setUserPass('');
        })
    };
  };

  const handleSignUp = () => {
    if (canSignUp) {
      const data = {
        password: userPass,
        username: userName,
        displayName: userFullName,
      }

      fetch('https://incode-backend-dev.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      })
        .then(res => {
          console.log(res);
          toLoginUser();
        })
        .catch(res => {
          console.log(res);
        });
    };
  };

  const setName = (value: string) => setUserFullName(value);
  const setNameOfUser = (value: string) => setUserName(value)
  const setPass = (value: string) => setUserPass(value);
  const setPassConfirm = (value: string) => setUserPassConfirm(value);

  return (
  <section className="registration">
    <h1 className="registration__action">
      {isSignUp 
        ? 'Sign Up'
        : 'Sign In'}
    </h1>

    <form 
      className="registration__card-form card-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isSignUp) {
          handleSignIn();
        } else {
          handleSignUp();
        }
      }}
    >
      {isSignUp && (
        <Input 
          name="Full Name" 
          value={userFullName} 
          setName={setName} 
          type="text" 
          placeholder="Example Name" 
        />
      )}
      <Input 
        name="User Name" 
        value={userName} 
        setName={setNameOfUser} 
        type="text" 
        placeholder="Example123" 
      />
      <Input 
        name="Password" 
        value={userPass} 
        setName={setPass} 
        type="password" 
        placeholder="***************"
      />
      
      {isSignUp && (
        <Input 
          name="Confirm Password" 
          value={userPassConfirm}
          setName={setPassConfirm} 
          type="password" 
          placeholder="***************" 
        />
      )}
      <div className="action">
        <button 
          className="action-button"
          type="submit"
        >
          {isSignUp 
            ? 'Sign Up'
            : 'Sign In'}
        </button>
      </div>
    </form>

    <div className="registration__footer">
      {!isSignUp && (
      <p>
        Don’t have account yet? 
        {' '}
        <span 
          className="registration__change"
          onClick={() => setIsSignUp(prev => !prev)}
        >
          New Account
        </span>
      </p>
      )}
      {isSignUp && (
      <p>
        I have an account.
        {' '}
        <span 
          className="registration__change"
          onClick={() => setIsSignUp(prev => !prev)}
        >
          Go to Sign in
        </span>
      </p>
      )}
    </div>
  </section>
);}
