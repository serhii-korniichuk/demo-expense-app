import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/index.css"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Auth from "./components/Auth/Auth"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Home from "./Home/Home"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("accessToken")
  if (!token) {
    return <Navigate to='/' replace />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
