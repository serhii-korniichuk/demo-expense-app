import Login from 'components/Login';
import React from 'react';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  return (
    <div className="section">
      <div className="header">
        <div className="header__title">InCode</div>
        <div className="header__small_title">Finance</div>
      </div>
      <Login />
      <p className="description">
        Don't have account yet?{' '}
        <Link to="/register" className="description__link">
          New Account
        </Link>
      </p>
    </div>
  );
};

export default Loginpage;
