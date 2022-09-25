import React from 'react';
import './styles/main.scss';
import './styles/App.scss';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Homepage } from './components/Homepage';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route
                path="/sign-up"
                element={
                    <SignUp />
                }
            />

            <Route path="/" element={
                <SignIn />
                }
            />

            <Route path="/sign-in" element={
                <SignIn />
                }
            />

            <Route
                path="/home"
                element={<Homepage />}
            />
        </Routes>
    </div>
  );
}

export default App;
