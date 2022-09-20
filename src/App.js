import HomePage from "./pages/Home/index";
import SignInPage from "./pages/SignIn/index";
import SignUpPage from "./pages/SignUp/index";
import Navbar from "./components/Navbar/index";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  const signIn = async (username, password) => {
    let response = await fetch(
      "https://incode-backend-dev.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          username: username,
        }),
      }
    );
    if (response.status === 201) {
      alert("Logged in successfully");
      setIsLogged(true);
      navigate("/home");
      return;
    } else {
      alert("Something went wrong. Please, try again later");
      return;
    }
  };

  const signUp = async (fullName, username, password) => {
    let response = await fetch(
      "https://incode-backend-dev.herokuapp.com/auth/register",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          username: username,
          displayName: fullName,
        }),
      }
    );
    if (response.status === 409) {
      alert("Username already exists");
      return;
    }
    if (response.status === 201) {
      alert("Account created successfully");
      navigate("/signin");
      return;
    } else {
      alert("Something went wrong. Please, try again later");
      return;
    }
  };

  const logout = async () => {
    await fetch("https://incode-backend-dev.herokuapp.com/auth/logout");
    alert("Logged out successfully");
    setIsLogged(false);
    navigate("/signin");
    return;
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={<HomePage isLogged={isLogged} logout={logout} />}
        />
        <Route path="/signin" element={<SignInPage signIn={signIn} />} />
        <Route path="/signup" element={<SignUpPage signUp={signUp} />} />
      </Routes>
    </div>
  );
}

export default App;
