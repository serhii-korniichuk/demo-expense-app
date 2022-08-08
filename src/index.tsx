import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';


const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="*" element={<App />}>
        <Route path="auth" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
