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
      <header className="App-header">
        <p>{/* Edit <code>src/App.tsx</code> and save to reload. */}</p>
        <h1 className="logo">InCode</h1>
        <h3 className="department">Finance</h3>
      </header>
      <div className="main">
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Auth" element={<Auth />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
