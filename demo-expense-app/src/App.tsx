import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Auth } from "./components/pages/Auth";
import { SignUp } from "./components/pages/Auth/SignUp";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Auth" element={<Auth />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
