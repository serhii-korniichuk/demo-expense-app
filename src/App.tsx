import React, { useState } from 'react';
import './App.scss';
import { Auth } from './pages/Auth/Auth';
import { Home } from './pages/Home/Home';



function App() {
  const [isLogin, setIsLogin] = useState(false);
  const toLoginUser = () => {
    setIsLogin(prev => !prev)
  }
  return (
    <div className="App">
      {!isLogin && <Auth toLoginUser={toLoginUser} />}
      {isLogin && <Home toLoginUser={toLoginUser} />} 
  </div>
     
  );
}

export default App;
