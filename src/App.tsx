import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';
import { Home } from './components/Home';
import { Form } from './components/Form';

export const App: React.FC = () => {
  return (
    <div className="body">
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/"
          element={<Form />}
        />
        <Route
          path="*"
          element={<Form />}
        />
      </Routes>
    </div>
  );
};
