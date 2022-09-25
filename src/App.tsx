import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from "./components/Home/Home";


export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />

        <main className="App__main">
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" /> } />
          </Routes>
        </main>
      </div>

    </div>
  );
};

export default App;
