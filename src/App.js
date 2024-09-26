import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { publicPaths, privatePaths } from "config/path";

import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import { LinearProgress } from "@mui/material";

const AuthPage = lazy(() => import("pages/Auth"));
const HomePage = lazy(() => import("pages/Home"));

const publicRoutes = [{ path: publicPaths.auth, Component: <AuthPage /> }];
const privateRoutes = [{ path: privatePaths.home, Component: <HomePage /> }];

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute>{route.Component}</PrivateRoute>}
          />
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute>{route.Component}</PublicRoute>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
