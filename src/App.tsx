import React from 'react';
import './App.css';
import {Auth} from "./Components/Auth/Auth";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home";
import smiledPeopleImage from "./Assets/inCode.jpg"

function App() {
    const inCode = {
        backgroundImage: `url(${smiledPeopleImage})`
    }
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<Auth/>}/>
                <Route path="home" element={<Home style={inCode}/>}/>
            </Routes>
        </div>
    );
}

export default App;
