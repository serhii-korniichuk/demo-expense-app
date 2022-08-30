import {Dispatch} from 'redux'
import {authApi, AuthApiType, LoginApiType} from '../Dal/authApi'
import {setAccessToken} from '../Utils/localstorage'
import {setRefreshToken} from './../Utils/localstorage'

type AuthReduceType = {
    isRegistered: boolean
}

const initialState: AuthReduceType = {
    isRegistered: false,
}

export const authReducer = (state: AuthReduceType = initialState, action: ActionsType): AuthReduceType => {
    switch (action.type) {
        case 'IS_REGISTERED': {
            return {...state, isRegistered: action.value}
        }
        case 'LOGIN': {
            return {...state, isRegistered: action.value}
        }
        case 'LOGOUT': {
            return {...state, isRegistered: action.value}
        }

        default:
            return state
    }
}

type ActionsType = AuthType | LogoutType | LoginType

type AuthType = ReturnType<typeof auth>
type LoginType = ReturnType<typeof login>
type LogoutType = ReturnType<typeof logout>

const auth = (value: boolean) => {
    return {
        type: 'IS_REGISTERED',
        value,
    } as const
}

const login = (value: boolean) => {
    return {
        type: 'LOGIN',
        value,
    } as const
}

const logout = (value: boolean) => {
    return {
        type: 'LOGOUT',
        value,
    } as const
}

export const authThunk = (data: AuthApiType) => async (dispatch: Dispatch) => {
    await authApi.createRegistration(data)
    dispatch(auth(true))
}

export const loginThunk = (data: LoginApiType) => async (dispatch: Dispatch) => {
    const res = await authApi.login(data)
    dispatch(login(true))
    setAccessToken(res.data.accessToken)
    setRefreshToken(res.data.refreshToken)

}

export const logoutThunk = () => async (dispatch: Dispatch) => {
    await authApi.logout()
    dispatch(logout(false))
}

export const getNewAccess = () => async (dispath: Dispatch) => {
    await authApi.refresh()
}
