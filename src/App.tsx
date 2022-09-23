import React, {useState} from 'react';
import './styles/main.scss';
import './styles/App.scss';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Homepage } from './components/Homepage';
import {Route, Routes } from "react-router-dom";

function App() {
    const [isPassShowed, setIsPassShowed] = useState(false);

  return (
    <div className="App">
        <SignIn
            isPassShowed={isPassShowed}
            setIsPassShowed={setIsPassShowed}
        />

        <Routes>
            <Route
                path="/sign-up"
                element={
                    <SignUp
                        isPassShowed={isPassShowed}
                        setIsPassShowed={setIsPassShowed}
                    />
                }
            />

            <Route path="/" element={
                <SignIn
                    isPassShowed={isPassShowed}
                    setIsPassShowed={setIsPassShowed}
                />
                }
            />

            <Route path="/sign-in" element={
                <SignIn
                    isPassShowed={isPassShowed}
                    setIsPassShowed={setIsPassShowed}
                />
                }
            />

            <Route
                path="homepage"
                element={<Homepage />}
            />
        </Routes>
    </div>
  );
}

export default App;
