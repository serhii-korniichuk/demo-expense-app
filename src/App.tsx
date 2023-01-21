import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
