import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios, { AxiosError, AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthModel";
import { BASE_URL } from "../http";

export default class Store {

  isAuth = false;

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      this.setAuth(true);
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
    }
  } 

  async register(username: string, password: string, displayName: string) {
    try {
      const response = await AuthService.register(username, password, displayName);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
    }
  }

  async logout() {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken')
      this.setAuth(false);
      
    } catch (error) {
      const err = error as AxiosError
      console.log(err)
    }
  }

  async getAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, { withCredentials: true })
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
    }
  }

}