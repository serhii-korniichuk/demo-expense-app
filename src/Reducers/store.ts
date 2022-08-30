import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {authReducer} from "./authReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
