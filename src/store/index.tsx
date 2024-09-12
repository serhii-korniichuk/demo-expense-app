import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios, { AxiosError } from "axios";
import { AuthResponse } from "../models/AuthModel";
import { BASE_URL } from "../http";

interface ErrorResponse {
  message: string;
  statusCode: number;
}

export default class Store {
  isLoading = false;
  isAuth = false;
  errorResponse: ErrorResponse | any = null;
  isNeedRegister = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsNeedRegister(bool: boolean) {
    this.isNeedRegister = bool;
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(username: string, password: string) {
    try {
      this.setIsLoading(true);
      const response = await AuthService.login(username, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      this.setAuth(true);
      this.setIsLoading(false);
    } catch (error) {
      const err = error as AxiosError;
      this.errorResponse = err.response?.data;
      console.log(err.response?.data);
      this.setIsLoading(false);
    }
  }

  async register(username: string, password: string, displayName: string) {
    try {
      this.setIsLoading(true);
      const response = await AuthService.register(username, password, displayName);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setIsLoading(false);
    } catch (error) {
      const err = error as AxiosError;
      this.errorResponse = err.response?.data;
      console.log(err.response?.data);
      this.setIsLoading(false);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      this.setAuth(false);
      console.log("logout");
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  }

  async getAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, { withCredentials: true });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  }

}