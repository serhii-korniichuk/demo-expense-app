import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const user = createReducer([], {
  setUser: (_, { payload }) => [payload],
  clearUser: state => (state = []),
});

export default combineReducers({
  user,
});
