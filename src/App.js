import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { useDispatch } from "react-redux";
import { reconnectUser } from "./redux/authThunk";
import { useEffect } from "react";
import RestrictedRoutes from "./components/Routes/RestrictedRoutes";
import PrivateRoutes from "./components/Routes/PrivateRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reconnectUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<RestrictedRoutes />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Route>
    </Routes>
  );
}

export default App;
