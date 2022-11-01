import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser, logOut } from '../actions/user';

export const Home: React.FC = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const handlelogOut = () => {
    logOut();
  };
  
  return (
    <div className='body'>
      <div className='header'>
        <h1 className='header__logo'>
          InCode
        </h1>
        <p className='header__logo-text'>
          Finance
        </p>
      </div>
      <div className='main'>
        <div className='main__background'></div>
        <div className='main__text'>
          {user 
          && <div className='main__text--welcome'
          >
            Congratulations, {user.displayName}
          </div>}
          <p className='main__text--info'>
          Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
          </p>
        </div>
        <button 
          className='main__button'
          onClick={handlelogOut}
        >
          Log Out
        </button>
        <div className='main__picture' />
      </div>

    </div>  
  );
};
