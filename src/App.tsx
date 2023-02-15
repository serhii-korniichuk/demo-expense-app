import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
    Auth,
    Home
} from './pages';
import { ProtectedRoute } from './components';
import { useAppSelector } from './app/hooks';

import './app.scss';

function App() {
    const isAllowed = useAppSelector(state => state.user.accessToken)

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/auth"  element={<Auth />} />
              <Route
                  path="/home"
                  element={
                    <ProtectedRoute isAllowed={isAllowed}>
                      <Home />
                    </ProtectedRoute>
              }
              />
              <Route path="*" element={
                  <Navigate to={'/auth'} replace />}
              />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
