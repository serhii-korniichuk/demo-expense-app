import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { UserPage } from "./components/UserPage/UserPage";

function App() {
  const location = useLocation();
  const style = location.pathname === "/login" ? "App App--user-page" : "App";
  return (
    <div className={style}>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/signin" element={<Form />} />
        <Route path="/login" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
