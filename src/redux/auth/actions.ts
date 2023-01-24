import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'src/api/api'

import { messageSlice } from '../message/reducer'

export const authRegister = createAsyncThunk(
  'auth/register',
  async (data: RequestDataWithFunc<IRegisterRequest>, thunkApi) => {
    try {
      const res = await api.postRegister(data.data)

      if (data.func) {
        data.func()
      }

      thunkApi.dispatch(messageSlice.actions.setSuccess('Successfully'))

      return res?.data
    } catch (e) {
      return thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
    }
  }
)

export const authLogin = createAsyncThunk(
  'auth/login',
  async (data: RequestDataWithFunc<ILoginRequest>, thunkApi) => {
    try {
      const res = await api.postLogin(data.data)

      localStorage.setItem('accessToken', res?.data.accessToken || '')
      localStorage.setItem('refreshToken', res?.data.refreshToken || '')

      if (data.func) {
        data.func()
      }

      thunkApi.dispatch(messageSlice.actions.setSuccess('Successfully'))

      return { data: res }
    } catch (e) {
      return thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
    }
  }
)

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (data: RequestWithFunc, thunkApi) => {
    try {
      const res = await api.getLogout()

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

      if (data.func) {
        data.func()
      }

      thunkApi.dispatch(messageSlice.actions.setSuccess('Successfully'))

      return { data: res }
    } catch (e) {
      return thunkApi.dispatch(messageSlice.actions.setError(e as ErrorHandler))
    }
  }
)
