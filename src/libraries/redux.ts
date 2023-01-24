export const thunkPending = <
  T extends { isLoading: boolean; isError: boolean },
>(
  state: T,
) => ({ ...state, isLoading: true, isError: false });

export const thunkRejected = <
  T extends { isLoading: boolean; isError: boolean },
>(
  state: T,
) => ({ ...state, isLoading: false, isError: true });
