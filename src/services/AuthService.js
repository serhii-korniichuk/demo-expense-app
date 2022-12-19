import api from "../api/config";

export default class AuthService {
  static async login({ username, password }) {
    return api.post("auth/login", { username, password });
  }

  static async register({ username, displayName, password }) {
    return api.post("auth/register", { username, displayName, password });
  }

  static async logout() {
    return api.get("auth/logout");
  }
}
