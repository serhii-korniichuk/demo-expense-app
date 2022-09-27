import { makeAutoObservable } from "mobx";
import { errorCatcher } from "../utils/errorCatcher";
import fetchWithToken from "../utils/fetchWithToken";
import { clearTokens, saveTokens } from "../utils/localStorageTools";
import errorStore from "./errorStore";

const createStore = () => ({
  user: {},
  isAuth: false,
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

  login({ username, password }) {
    errorCatcher(async () => {
      const { accessToken, refreshToken } = await fetchWithToken("/auth/login", {
        method: "POST",
        body: { username, password },
      });
      saveTokens({ accessToken, refreshToken });
      this.authUser();
    });
  },

  async register({ username, fullName, password }) {
    const response = await errorCatcher(async () => {
      await fetchWithToken("/auth/register", {
        method: "POST",
        body: { username, displayName: fullName, password },
      });
    });

    if (response) {
      this.setIsSignIn(true);
      this.setIsPassVisible(false);
      messageStore.createMessage("Success! Now sign in");
    }
  },

  async logout() {
    await fetchWithToken("/auth/logout");
    this.clearUserData();
  },

  badRequest() {
    errorCatcher3000(() => {
      throw new Error("bad error - ");
    });
  },

  async setSurName(name) {
    this.setName(
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(name + "REDACTED!");
          errorStore.makeError("DOGE ERROR");
          errorStore.showError();
        }, 1000)
      )
    );
    this.surname = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(name);
      }, 5000)
    );
  },
});

export default makeAutoObservable(createStore());
