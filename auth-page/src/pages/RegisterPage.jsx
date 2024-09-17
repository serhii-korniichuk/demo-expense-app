import { SignUp } from 'components/SignUp';
import React from 'react';
import { Link } from 'react-router-dom';

const Registerpage = () => {
  return (
    <div className="section">
      <div className="header">
        <div className="header__title">InCode</div>
        <div className="header__small_title">Finance</div>
      </div>
      <SignUp />
      <p className="description">
        I have an account <Link to="/login" className='description__link'>Go to Sign in</Link>
      </p>
    </div>
  );
};

export default Registerpage;
