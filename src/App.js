import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Auth />} />
        </Routes>
    );
}

export default App;

