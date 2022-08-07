import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
    app: appReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));