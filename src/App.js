import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/index';
import NotFoundPage from 'pages/NotFoundPage/index';
import AuthPage from 'pages/AuthPage/index';
import SignInForm from 'components/SignInForm/index';
import SignUpForm from 'components/SignUpForm/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/" element={<AuthPage />}>
        <Route path="login" element={<SignInForm />} />
        <Route path="register" element={<SignUpForm />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
