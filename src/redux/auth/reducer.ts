import { createSlice } from '@reduxjs/toolkit'

import { authLogin, authRegister } from './actions'

export const initialState = {
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    /* ------------------ */
    [authLogin.fulfilled.type]: (state) => {
      state.loading = false
    },
    [authLogin.pending.type]: (state) => {
      state.loading = true
    },
    [authLogin.rejected.type]: (state) => {
      state.loading = false
    },
    /* ------------------ */
    [authRegister.fulfilled.type]: (state) => {
      state.loading = false
    },
    [authRegister.pending.type]: (state) => {
      state.loading = true
    },
    [authRegister.rejected.type]: (state) => {
      state.loading = false
    }
  }
})

export default authSlice.reducer
