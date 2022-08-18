import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthModel";

export default class AuthService {

  static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { username, password });
  }

  static async register(username: string, password: string, displayName: string): Promise<AxiosResponse<AuthResponse>> {
    await $api.post<AuthResponse>("/register", { username, password, displayName });
    return $api.post<AuthResponse>("/login", { username, password });
  }

  static async logout(): Promise<void> {
    return $api.get("/logout", {
      validateStatus(status) {
        return status === 401;
      }
    });
  }
}