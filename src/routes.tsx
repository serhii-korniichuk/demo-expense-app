import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/privatePages/home'
import Authorization from './pages/publicPages/authorization'

const Routers: React.FC = () => {
  const isAuth = Boolean(localStorage.getItem('token'))

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='auth' element={!isAuth ? <Authorization /> : <Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default Routers
