import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import authSelectors from "../../redux/authSelectors";

const RestrictedRoutes = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{!isLoggedIn ? <Outlet /> : <Navigate to="/home" />}</>;
};

export default RestrictedRoutes;
