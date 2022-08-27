import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

