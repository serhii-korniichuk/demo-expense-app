import React, { useState } from 'react'

import Login from './login'
import Register from './register'

const Authorization: React.FC = () => {
  const [authType /* setAuthType */] = useState<'singIn' | 'singUp'>('singIn')

  switch (authType) {
    case 'singIn':
      return <Login />
    case 'singUp':
      return <Register />
    default:
      return <Login />
  }
}

export default Authorization
