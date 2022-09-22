import React, {FC, useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";
import Header from "./components/Header";

import {ROUTES} from "./utils";

const App: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isRegistered = localStorage.getItem("accessToken") || localStorage.getItem("username");

        if (isRegistered){
            navigate(ROUTES.Home)
        }
    }, [])

    return (
        <Layout>
            <Header />
            <Routes>
                <Route path={ROUTES.Home} element={<Home/>}/>
                <Route path={ROUTES.Auth} element={<Auth/>}/>
            </Routes>
        </Layout>
    );
};

export default App;