import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'src/api/api'

export const authRegister = createAsyncThunk(
  'auth/register',
  async (data: RequestDataWithFunc<IRegisterRequest>, thunkApi) => {
    try {
      const res = await api.postRegister(data.data)

      if (data.func) {
        data.func()
      }
      // return { data: res }
      return { success: 'Please check your inbox to verify your email and log in after', data: res }
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const authLogin = createAsyncThunk(
  'auth/login',
  async (data: RequestDataWithFunc<ILoginRequest>, thunkApi) => {
    try {
      const res = await api.postLogin(data.data)

      localStorage.setItem('token', res?.data.accessToken || '')
      localStorage.setItem('refreshToken', res?.data.refreshToken || '')

      if (data.func) {
        data.func()
      }
      return { data: res }
      // return { success: 'Please check your inbox to verify your email and log in after', data: res }
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

// export const authRefresh = createAsyncThunk(
//   'auth/refresh',
//   async (data: RequestDataWithFunc<string>, thunkApi) => {
//     try {
//       const res = await api.postRefresh(data.data)

//       // if (res) {
//       localStorage.setItem('token', res?.accessToken)
//       localStorage.setItem('refreshToken', res?.refreshToken)
//       // }

//       return { data: res }
//     } catch (e: any) {
//       return thunkApi.rejectWithValue(e.message)
//     }
//   }
// )
