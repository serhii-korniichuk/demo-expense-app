import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
  type: 'success' as 'error' | 'success',
  text: '',
  open: false
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    resetValue: (state) => {
      state.open = initialState.open
      state.text = initialState.text
      state.type = initialState.type
    },
    setError: (state, action: PayloadAction<ErrorHandler>) => {
      state.type = 'error'
      state.text = action.payload.response.data.message
      state.open = true
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.type = 'success'
      state.text = action.payload
      state.open = true
    }
  }
})

export default messageSlice.reducer
