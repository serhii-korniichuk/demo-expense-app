import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "./AppHeader";
import AppMain from "./Main";
import AppSignIn from "./SignIn";
import AppSignUp from "./SignUp";

function App() {
  return (
    <Router>
        <div className="App">
          <AppHeader/>
            <Routes>
              <Route path="/main" element={<AppMain/>}/>
              <Route path="/" element={<AppSignIn/>}/>
              <Route path="/sign-up" element={<AppSignUp/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
