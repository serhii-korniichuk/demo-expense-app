import React, {useEffect, useState} from 'react';
import {HomePage} from './pages/HomePage/HomePage';
import {AuthPage} from './pages/AuthPage/AuthPage';

function App() {
  const [logInStatus, setLogInStatus] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('refreshToken')) {
      return;
    };

    setLogInStatus(true);
  },[]);

  return (
    <div className="App">
      {logInStatus
        ? (<HomePage setLogInStatus={setLogInStatus} />)
        : (<AuthPage setLogInStatus={setLogInStatus} />)
      }
    </div>
  );
}

export default App;


