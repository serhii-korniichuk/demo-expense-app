import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import { HomePage } from "./Home";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "../style/index.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
