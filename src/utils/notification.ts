import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const notificationConfig = {
  autoClose: 5000,
  hideProgressBar: false,
  position: toast.POSITION.BOTTOM_LEFT,
  pauseOnHover: true,
};

export const successNotification = (message = 'Success') => {
  toast.success(message, notificationConfig);
};

export const errorNotification = (error: unknown | string) => {
  let message = 'Something went wrong! Try again later.';

  if (error instanceof AxiosError) {
    message = error?.response?.data.message;
  }

  toast.error(message, notificationConfig);
};
