import { Route, Routes } from "react-router-dom";
import Home from "../src/views/Home/Home.jsx";
import Auth from "../src/views/Auth/Auth.jsx";
import logo from "./assets/logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
