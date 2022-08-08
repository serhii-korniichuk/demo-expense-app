import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { UserPage } from "./components/UserPage/UserPage";

function App() {
  const location = useLocation();
  const style = location.pathname === "/" ? "App App--user-page" : "App";
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className={style}>
      <Header />
      <Routes>
        <Route path="/" element={accessToken ? <UserPage /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={!accessToken ? <Form /> : <Navigate to="/" />} />
        <Route path="/signup" element={!accessToken ? <Form /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
