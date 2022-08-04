import { useState } from 'react';
import React from 'react';
import eyes from './../img/Vector.png';

const Form = ({ title, handleClick }) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleVisible = event => {
    let x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  return (
    <div className="login-form">
      <h1 className="form-title">{title}</h1>
      {title === 'Sign Up' && (
        <div className="form-control form-one">
          <label className="form-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="form-input"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Example Name"
            onChange={e => setFullName(e.target.value)}
            value={fullName}
            required
          />
          <div className="form-line"></div>
        </div>
      )}
      <div className="form-control">
        <label className="form-label" htmlFor="userName">
          User Name
        </label>
        <input
          className="form-input"
          type="text"
          id="userName"
          name="userName"
          placeholder="Example123"
          onChange={e => setUserName(e.target.value)}
          value={userName}
          required
        />
        <div className="form-line"></div>
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          name="password"
          placeholder="******"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="form-line"></div>
        <button className="password-button" onClick={handleVisible}>
          <img src={eyes} alt="eyes" />
        </button>
      </div>
      <button
        className="sign-button button"
        type="submit"
        onClick={
          title === 'Sign Up'
            ? () => handleClick(userName, password, fullName)
            : () => handleClick(userName, password)
        }
      >
        {title}
      </button>
    </div>
  );
};

export default Form;