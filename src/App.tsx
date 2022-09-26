import React, { useState } from 'react';
import './styles/main.scss';
import './styles/App.scss';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Homepage } from './components/Homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
        <Routes>
            <Route
                path="/sign-up"
                element={
                    <SignUp setIsLogged={setIsLogged}/>
                }
            />

            <Route path="/" element={
                <Homepage
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                />
                }
            />

            <Route path="/sign-in" element={
                <SignIn setIsLogged={setIsLogged}/>
                }
            />

            <Route
                path="/home"
                element={
                    <Homepage
                        isLogged={isLogged}
                        setIsLogged={setIsLogged}
                    />
                }
            />

            <Route
                path="*"
                element={
                    <Homepage
                        isLogged={isLogged}
                        setIsLogged={setIsLogged}
                    />
                }
            >
            </Route>
        </Routes>
    </div>
  );
}

export default App;
