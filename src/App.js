import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

function App() {
    const navigate = useNavigate();

    const { loggedIn } = useSelector(({ auth }) => auth);

    React.useEffect(() => {
        if (!loggedIn) {
            return navigate("/login");
        }
    }, [loggedIn, navigate]);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Auth />} />
        </Routes>
    );
}

export default App;

