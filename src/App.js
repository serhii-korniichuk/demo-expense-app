import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./components/application/Layout/Layout";
import routePaths from "./routes/routePaths";
import "./App.css";

export const AuthContext = createContext(null);

const App = () => {
  const [errors, setErrors] = useState({});
  const [isAuth, setAuth] = useState(false);
  const [enteredData, setEnteredData] = useState({});

  const contextValue = { errors, setErrors, isAuth, setAuth, enteredData, setEnteredData };

  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path={routePaths.base} element={<Layout />}>
            <Route path={routePaths.base} element={<Home />} />
            <Route path={routePaths.signIn} element={<SignIn />} />
            <Route path={routePaths.signUp} element={<SignUp />} />
            <Route path={routePaths.notExist} element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
