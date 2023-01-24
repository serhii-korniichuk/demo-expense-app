import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import SnackBar from 'src/components/snackBar'

import { setupStore } from './redux/store'
import Routes from './routes'

import { theme } from 'src/utils/constants/ui'

import './App.css'

const App: React.FC = () => {
  const store = setupStore()
  const muiCache = createCache({
    key: 'mui',
    prepend: true
  })

  return (
    <BrowserRouter>
      <Provider store={store}>
        <CacheProvider value={muiCache}>
          <SnackBar />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
