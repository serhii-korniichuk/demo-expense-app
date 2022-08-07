import style from './App.module.scss'
import Auth from "./components/auth/Auth"
import Home from "./components/home/Home"
import {Route, Routes} from "react-router-dom"
import {useEffect} from "react";
import {initialTC} from "./bll/app-reducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialTC())
    }, [])

    return (
        <div className={style.app}>
            <Routes>
                <Route path="/*" element={<Auth/>}/>
                <Route path="/user/:login" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
