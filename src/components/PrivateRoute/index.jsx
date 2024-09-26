import { Navigate } from "react-router-dom";
import { publicPaths } from "config/path";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to={publicPaths.auth} replace />;
  }

  return children;
};

export default PrivateRoute;
