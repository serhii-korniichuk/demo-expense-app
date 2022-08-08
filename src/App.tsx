import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.scss';
import logo from './img/logo.svg';
import useLocalStorage from './useLocalStorage';

function App() {
  const navigate = useNavigate();

  const [isAuthorized, setIsAuthorized] = useLocalStorage('isAuthorized', false);

  const checkIfAuthorized = () => {
    if (isAuthorized) {
      navigate('/home');
    } else {
      navigate('/auth');
    }
  };

  useEffect(() => {
    checkIfAuthorized();
  }, []);

  return (
    <div className='App'>
      <a href='https://www.incode-group.com/'>
        <img src={logo} className='App__logo' />
      </a>
      <Outlet context={
        { setIsAuthorized }
      } />
    </div>
  );
}

export default App;
