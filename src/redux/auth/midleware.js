import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload?.status === 400 && action.payload?.data?.message) {
      toast.error(`${action.payload?.data?.message}`);
    } else if (action.payload?.status === 400) {
      toast.error('Mail and password entered incorrectly');
    } else if (action.payload?.status === 401) {
      toast.error('Unauthorized');
    } else if (action.payload?.status === 500) {
      toast.error('Server error');
    } else {
      toast.error('Bad Request');
    }
  }

  return next(action);
};
