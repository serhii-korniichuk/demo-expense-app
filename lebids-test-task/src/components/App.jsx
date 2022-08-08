import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "./AppHeader";
import AppMain from "./Main";
import AppSignIn from "./SignIn";
import AppSignUp from "./SignUp";
import NotFoundPage from "./NotFoundPage";
import RequireAuth from "../hoc/RequireAuth";
import { AuthProvider } from "../hoc/AuthProvider";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
          <AuthProvider>
            <Routes>
              <Route path="/main" element={
                <RequireAuth>
                  <AppMain/>
                </RequireAuth>
              }/>
              <Route path="/" element={<AppSignIn/>}/>
              <Route path="/sign-up" element={<AppSignUp/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </AuthProvider>
      </div>
     </Router>
  );
}

export default App;
