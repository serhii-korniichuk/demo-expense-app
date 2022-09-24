import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
