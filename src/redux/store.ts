import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

import auth from 'src/redux/auth/reducer'

import { DispatchHelper } from 'src/utils/helpers/actionCreator'

const combinedReducer = combineReducers({
  auth
})

const rootReducer = (state: any, action: any) => {
  combinedReducer(state, action)
}

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false
    })
  })

  DispatchHelper.dispatch = store.dispatch
  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
