import { makeAutoObservable } from "mobx";
import fetchWithToken from "../utils/fetchWithToken";
import fetchData from "../utils/fetchData";
import { clearTokens, getTokens, saveTokens } from "../utils/localStorageTools";
import errorStore from "./errorStore";
import messageStore from "./messageStore";

// main store
const createStore = () => ({
  user: {},
  isAuth: !!getTokens().accessToken,
  isSignIn: true,
  isPassVisible: false,

  setIsPassVisible(bool) {
    this.isPassVisible = bool;
  },

  setIsSignIn(bool) {
    this.isSignIn = bool;
  },

  clearUserData() {
    clearTokens();
    this.isAuth = false;
    this.user = {};
  },

  async authUser() {
    const user = await fetchWithToken("/users/self");
    this.isAuth = true;
    this.user = user;
  },

  async login({ username, password }) {
    try {
      const response = await fetchData("/auth/login", {
        method: "POST",
        body: { username, password },
      });

      if (response) {
        const { accessToken, refreshToken } = response;
        saveTokens({ accessToken, refreshToken });
        this.authUser();
      }
    } catch (error) {
      errorStore.createError(error.message);
    }
  },

  async register({ username, fullName, password }) {
    try {
      const response = await fetchData("/auth/register", {
        method: "POST",
        body: { username, displayName: fullName, password },
      });

      if (response) {
        this.setIsSignIn(true);
        this.setIsPassVisible(false);
        messageStore.createMessage("Success! Now sign in");
      }
    } catch (error) {
      errorStore.createError(error.message);
    }
  },

  async logout() {
    await fetchWithToken("/auth/logout");
    this.clearUserData();
  },
});

export default makeAutoObservable(createStore());
