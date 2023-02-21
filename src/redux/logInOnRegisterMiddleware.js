import { logInUser, registerUser } from "./authThunk";

const logInOnRegisterMiddleware = (store) => (next) => (action) => {
  if (
    action.type === registerUser.fulfilled.type &&
    action.payload.username &&
    action.payload.password
  ) {
    setTimeout(() => store.dispatch(logInUser(action.payload)), 250);
  }
  next(action);
};

export default logInOnRegisterMiddleware;
