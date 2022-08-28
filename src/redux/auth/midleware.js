import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    console.log(action);
    if (action.payload?.data?.message) {
      toast.error(`${action.payload?.data?.message}`);
    } else {
      toast.error('Bad Request');
    }
  }

  return next(action);
};
