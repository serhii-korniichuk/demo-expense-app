import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export default class UserService {
  static async getSignIn({username, password}) {
    const storage = window.localStorage;
    const response = await axios.post(`${API_URL}/auth/login`, {username, password})

    storage.setItem('accessToken', response.data.accessToken)

    return response;
  }

  static async getSignOut(token) {
    const storage = window.localStorage;
    const response = await axios.get(`${API_URL}/auth/logout`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    storage.removeItem('accessToken');

    return response;
  }

  static async getSignUp({password, username, displayName}) {
    const response = await axios.post(`${API_URL}/auth/register`, {password, username, displayName})
    return response;
  }
}