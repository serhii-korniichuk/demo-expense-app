import axios from "axios";

export const instance = axios.create({
  baseURL: "https://expa.fly.dev/auth/",
  headers: {},
});
