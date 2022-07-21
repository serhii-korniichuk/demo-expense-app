import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage';
import NotFoundPage from "./pages/NotFoundPage";


type Props = {}

  const Router = (props: Props) => {
  const isLoggedUser: boolean = false;

  if (isLoggedUser) {
    return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<Navigate to="/" replace={true} />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    )
  };

  return (
    <Routes>
        <Route path='/' element={<Navigate to="/auth" replace={true} />}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  )

}

export default Router