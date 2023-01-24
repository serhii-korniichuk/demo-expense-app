import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

import auth from 'src/redux/auth/reducer'
import message from 'src/redux/message/reducer'

const combinedReducer = combineReducers({
  auth,
  message
})


const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action)
}

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false
    })
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
