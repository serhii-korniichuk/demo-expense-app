import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/register" element={ <Registration />} />
        <Route path="auth" element={ <Login/> } />
        <Route path="Home" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
