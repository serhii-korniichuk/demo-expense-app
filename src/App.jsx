import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './Components/Auth';
import { Home } from './Components/Home';
import { checkToken } from './actions/user';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

const PrivateRoute = () => {
  const check = checkToken();

  return check 
    ? <Home /> 
    : <Navigate to='/auth' />;
};

export const App: React.FC = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<PrivateRoute />}
          /> 
          <Route
            path='/auth'
            element={<Auth />}
          />
          <Route
            path='*'
            element={<Navigate to='/' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;