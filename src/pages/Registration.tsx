import React, { useState } from 'react';
import './Registration.scss';

export const Registration: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userPassConfirm, setUserPassConfirm] = useState('');

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
      }}
    >
      {isSignUp && (
        <div 
        className="input"
      >
        <label 
          className="input__label"
        >
          Full Name
        </label>
        <input 
          type="text" 
          className="input__field"
          value={userFullName}
          placeholder="Example Name"
          onChange={(e) => setUserFullName(e.target.value)}
          required
        />
      </div>
      )}
      <div 
        className="input"
      >
        <label 
          className="input__label"
        >
          User Name
        </label>
        <input 
          type="text" 
          className="input__field"
          value={userName}
          placeholder="Example123"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      
      <div className="input">
        <label 
          className="input__label"
        >
          Password
        </label>
        <span className="input__area">
          <input 
          type="password"
          className="input__field" 
          value={userPass}
          placeholder="***************"
          onChange={(e) => setUserPass(e.target.value)}
          required
          />
          <span className="input__eye"></span>
        </span>
      </div>
      {isSignUp && (
        <div className="input">
        <label 
          className="input__label"
        >
          Confirm Password
        </label>
        <span className="input__area">
          <input 
          type="password"
          className="input__field" 
          value={userPassConfirm}
          placeholder="***************"
          onChange={(e) => setUserPassConfirm(e.target.value)}
          required
          />
          <span className="input__eye"></span>
        </span>
      </div>
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
