import fetchData from "./fetchData";
import { getTokens, saveTokens } from "./localStorageTools";

const fetchWithToken = async (
  url,
  options = {},
  contentType = "application/json"
) => {
  const {
    refreshToken: savedRefreshToken,
    accessToken: savedAccessToken,
  } = getTokens();
  const refreshToken = savedRefreshToken || "";
  const accessToken = savedAccessToken || "";
  if (!accessToken && refreshToken) {
    if (refreshToken) {
      try {
        const request = await fetchData(
          "/auth/refresh",
          {
            method: "POST",
          },
          contentType,
          { Authorization: `Bearer ${refreshToken}` }
        );
        const result = await request.json();

        accessToken = result.data.accessToken || "";
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
