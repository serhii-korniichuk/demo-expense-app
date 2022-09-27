import errorStore from "../stores/errorStore";

export const errorCatcher = (action) => {
  try {
    return action();
  } catch (error) {
    errorStore.makeError(error);
    return false;
  }
};
