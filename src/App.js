import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Start } from "./componenets/Start";
import { Home } from "./componenets/Home";
import { GlobalStyle } from "./style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/sign-in" element={<Start />} />
        <Route path="/sign-up" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="sign-in" replace />} />
      </Routes>
    </div>
  );
}

export default App;
