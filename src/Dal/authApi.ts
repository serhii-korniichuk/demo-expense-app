import axios, {AxiosResponse} from 'axios'
import {getTokens} from '../Utils/localstorage'

const instance = axios.create({
    baseURL: 'https://incode-backend-dev.herokuapp.com/',
})

instance.interceptors.request.use((request) => {
    const {accessToken} = getTokens()
    if (request.headers) {
        if (accessToken) request.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return request
})

export type AuthApiType = {
    password: string
    username: string
    displayName: string
}

export type LoginApiType = {
    username: string
    password: string
}

type LoginRes = {
    accessToken: string
    refreshToken: string
}

export const authApi = {
    createRegistration(data: AuthApiType) {
        return instance.post<AuthApiType>('auth/register', data)
    },
    login(data: LoginApiType) {
        return instance.post<LoginApiType, AxiosResponse<LoginRes>>('auth/login', data)
    },
    logout() {
        return instance.get('auth/logout')
    },
    refresh() {
        return instance.post('auth/refresh')
    },
}