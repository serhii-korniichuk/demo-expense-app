import { logInUser, registerUser } from "./authThunk";

const logInOnRegisterMiddleware = (store) => (next) => (action) => {
  if (
    action.type === registerUser.fulfilled.type &&
    action.payload.username &&
    action.payload.password
  ) {
    store.dispatch(logInUser(action.payload));
  }
  next(action);
};

export default logInOnRegisterMiddleware;
