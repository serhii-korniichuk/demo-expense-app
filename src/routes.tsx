import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './components/layout'

import Home from './pages/privatePages/home'
import Authorization from './pages/publicPages/authorization'
import { isLoggedIn } from './utils/helpers/authService'

const Routers: React.FC = () => {
  const isAuth = isLoggedIn()

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='auth' element={!isAuth ? <Authorization /> : <Navigate to={'/'} />} />
        <Route path='404' element={<div style={{ padding: 20 }}>not found 404</div>} />
      </Route>
      <Route path='*' element={<div style={{ padding: 20 }}>not found</div>} />
    </Routes>
  )
}

export default Routers
