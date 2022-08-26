import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import "./API/axios";
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Auth />}> </Route>
          <Route path='signIn' element={<SignIn />}></Route>
          <Route path='signUp' element={<SignUp />}></Route>
          <Route path='home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
