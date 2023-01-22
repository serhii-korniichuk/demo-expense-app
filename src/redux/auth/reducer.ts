import { createSlice } from '@reduxjs/toolkit'

import { authLogin, authRegister } from './actions'

export const initialState = {
  // loginResponse: {} as LoginResponse,
  loading: false,
  success: false
  // authSuccess: false,
  // isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    /* ------------------ */
    [authLogin.fulfilled.type]: (state) => {
      state.loading = false
      state.success = true
    },
    [authLogin.pending.type]: (state) => {
      state.loading = true
    },
    [authLogin.rejected.type]: (state) => {
      state.loading = false
      state.success = false
    },
    /* ------------------ */
    [authRegister.fulfilled.type]: (state) => {
      state.loading = false
      state.success = true
    },
    [authRegister.pending.type]: (state) => {
      state.loading = true
    },
    [authRegister.rejected.type]: (state) => {
      state.loading = false
      state.success = false
    }
  }
})

export default authSlice.reducer
