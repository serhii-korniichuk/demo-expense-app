import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import authSelectors from "./redux/authSelectors";

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Routes>
      <Route
        path="/auth"
        element={!isLoggedIn ? <Auth /> : <Navigate to="/home" />}
      />
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/auth" />}
      />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
