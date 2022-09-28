import store from "../stores/store";
import fetchData from "./fetchData";
import isTokenExpired from "./isTokenExpired";
import { getTokens, saveTokens } from "./localStorageTools";

const fetchWithToken = async (url, options = {}, contentType = "application/json") => {
  const { refreshToken: savedRefreshToken, accessToken: savedAccessToken } = getTokens();
  const refreshToken = isTokenExpired(savedRefreshToken) ? "" : savedRefreshToken;
  let accessToken = isTokenExpired(savedAccessToken) ? "" : savedAccessToken;
  if (!accessToken && refreshToken) {
    if (refreshToken) {
      try {
        const result = await fetchData(
          "/auth/refresh",
          {
            method: "POST",
          },
          contentType,
          { Authorization: `Bearer ${refreshToken}` }
        );

        accessToken = result.accessToken || "";
        saveTokens({ accessToken });
      } catch (e) {
        console.error(e);
        store.clearUserData();
      }
    }
  }

  const headers = {};

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetchData(url, options, contentType, headers);

  return response;
};

export default fetchWithToken;
