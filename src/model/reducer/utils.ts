import { AsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';

export const getAsyncActionsReducer = (
  asyncAction: AsyncThunk<any, void, Record<string, unknown>>,
  key = 'data',
): any => ({
  [asyncAction.pending.type]: (state: any) => {
    state.loading = 'pending';
  },
  [asyncAction.fulfilled.type]: (state: any, action: PayloadAction<any>) => {
    state.loading = 'succeeded';
    state[key] = action.payload;
  },
  [asyncAction.rejected.type]: (
    state: any,
    error: PayloadAction<SerializedError>,
  ) => {
    state.loading = 'failed';
    if (error.payload?.message) {
      state.error = error.payload.message;
    }
  },
});
