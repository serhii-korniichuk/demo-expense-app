import { Navigate } from "react-router-dom";
import { privatePaths } from "config/path";

const PublicRoute = ({ children }) => {
  if (localStorage.getItem("access_token")) {
    return <Navigate to={privatePaths.home} replace />;
  }

  return children;
};

export default PublicRoute;
