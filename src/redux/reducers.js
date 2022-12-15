const initialState = {
  notifications: [],
  loggedIn: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "register/fulfilled": {
      if (action.payload?.error === "Conflict") {
        return {
          ...state,
          notifications: [
            ...state.notifications,
            { type: "error", text: "User with this username already exists" },
          ],
        };
      } else if (action.payload?.error === "Bad Request") {
        return {
          ...state,
          notifications: [
            ...state.notifications,
            {
              key: new Date().getTime(),
              type: "error",
              text: action.payload.message,
            },
          ],
        };
      }
      return { ...state, loggedIn: true };
    }
    case "login/fulfilled": {
      console.log(
        "action.payload.statusCode < 200 && action.payload.statusCode > 299",
        action.payload.statusCode < 200 && action.payload.statusCode > 299
      );
      if (action.payload.statusCode < 200 || action.payload.statusCode > 299) {
        return {
          ...state,
          notifications: [
            ...state.notifications,
            {
              key: new Date().getTime(),
              type: "error",
              text: action.payload.message,
            },
          ],
        };
      } else {
        return { ...state, loggedIn: true };
      }
    }
    case "notifications":
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};
