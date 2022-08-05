import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "./AppHeader";
import AppMain from "./Main";
import AppSignIn from "./SignIn";
import AppSignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      {/* <AppMain/> */}
      {/* <AppSignIn/> */}
      <AppSignUp/>
    </div>
  );
}

export default App;
