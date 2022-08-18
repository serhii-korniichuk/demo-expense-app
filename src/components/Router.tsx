import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Context } from "..";
import { observer } from "mobx-react-lite";


const Router: React.FC = () => {
  const [isLoggedUser, setLoggedUser] = React.useState<boolean>(false);
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token") || store.isAuth) {
      setLoggedUser(true);
      console.log("router works 1");
    } else if (!localStorage.getItem("token") || !store.isAuth) {
      setLoggedUser(false);
      console.log("router works 2");
    }
  }, [store.isAuth]);


  if (isLoggedUser) {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<Navigate to="/" replace={true} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/auth" replace={true} />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );

};

export default observer(Router); 