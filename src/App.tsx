import React, { useContext } from 'react';
import { logout } from './api/auth';
import { AuthContext } from './components/Auth/AuthContext';
import { Logo } from './components/Logo';

export const App: React.FC = () => {
  const [accessToken, setAccessToken ] = useContext(AuthContext);
  
  const handleLogout = () => {
    localStorage.setItem('token', JSON.stringify(null));
    logout();
    setAccessToken('');
  };

  return (
    <div className='incodeApp'>
      <Logo />
      <div className="incodeApp__container">
        {accessToken &&
          <>
            <div className="incodeApp__congradulationsBox">
              <h1 className="incodeApp__congradulationsBox__title">
                Congradulations
              </h1>

              <div
                className='incodeApp__congradulationsBox__decorImg'
              >
              </div>
            </div>

            <h1 className="incodeApp__description">
              Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
            </h1>

            <button 
              type='button'
              className='incodeApp__button'
              onClick={handleLogout}
            >
                Log Out
            </button>

            <div 
              className='incodeApp__humansImg' 
            >
            </div>
          </>
        }
      </div>
    </div>
  );
};
