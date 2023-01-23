import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { redirect } from "react-router-dom"

interface User {
  id: number
  username: string
  displayName: string
  admin: boolean
}

export interface AppState {
  isLogin: boolean
  isRegisterSuccess: boolean
  serverError: string | null
  user: User | null
}

const initialState: AppState = {
  isLogin: false,
  isRegisterSuccess: false,
  serverError: null,
  user: null,
}

export const singUpHandler = createAsyncThunk(
  "appSlice/singUpHandler",
  async (userData: {}, { rejectWithValue, dispatch }) => {
    axios
      .post("https://expa.fly.dev/auth/register", userData)
      .then((res) => {
        dispatch(setServerError(null))
        dispatch(setIsRegisterSuccess(true))
      })
      .catch((e) => {
        dispatch(setLogin(false))
        dispatch(setServerError(e.response.data.message))
        console.log(e)
      })
  },
)

export const singInHandler = createAsyncThunk(
  "appSlice/singInHandler",
  async (logInData: {}, { rejectWithValue, dispatch }) => {
    axios
      .post("https://expa.fly.dev/auth/login", logInData)
      .then((res) => {
        dispatch(setLogin(true))
        for (let key in res.data) {
          localStorage.setItem(key, res.data[key])
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },
)

export const logout = createAsyncThunk(
  "appSlice/logout",
  async (_, { rejectWithValue, dispatch }) => {
    axios
      .get("https://expa.fly.dev/auth/logout", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("refreshToken"),
        },
      })
      .then((res) => {
        dispatch(setLogin(false))
      })
      .catch((e) => {
        console.log(e)
      })
  },
)

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setIsRegisterSuccess: (state, action) => {
      state.isRegisterSuccess = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setServerError: (state, action) => {
      state.serverError = action.payload
      state.serverError = action.payload
    },
  },
})

export const { setLogin, setUser, setIsRegisterSuccess, setServerError } = appSlice.actions

export default appSlice.reducer
