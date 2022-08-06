import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "./AppHeader";
import AppMain from "./Main";
import AppSignIn from "./SignIn";
import AppSignUp from "./SignUp";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Router>
        <div className="App">
          <AppHeader/>
            <Routes>
              <Route path="/main" element={<AppMain/>}/>
              <Route path="/" element={<AppSignIn/>}/>
              <Route path="/sign-up" element={<AppSignUp/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
