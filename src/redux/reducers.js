import {
  ADD_NOTIFICATION,
  CHANGE_NOTIFICATIONS,
  REGISTER,
  LOGIN,
  LOGOUT,
} from "./types";

const initialState = {
  notifications: [],
  loggedIn: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case CHANGE_NOTIFICATIONS:
      return { ...state, notifications: action.payload };

    case `${REGISTER}/fulfilled`: {
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

    case `${LOGIN}/fulfilled`: {
      if (action.payload.statusCode < 200 || action.payload.statusCode > 299) {
        return {
          ...state,
          notifications: [
            ...state.notifications,
            {
              key: new Date().getTime(),
              type: "error",
              text: action.payload.message,
              ...action.payload,
            },
          ],
        };
      } else {
        localStorage.setItem("accessToken", action.payload.accessToken);
        document.cookie = `refreshToken=${action.payload.refreshToken}`;
        return { ...state, loggedIn: true };
      }
    }

    case `${LOGOUT}/fulfilled`: {
      return { ...state, loggedIn: false };
    }

    default:
      return state;
  }
};
