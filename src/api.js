const api = axios.create({
  baseURL: process.env.API_URL,
});

export default {
  authMe: async (jwt) =>
    (
      await api.get(`/users/self`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
    ).data,

  logout: async (jwt) =>
    (
      await api.get(`/auth/logout`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
    ).data,

  register: async ({ username, fullName: displayName, password }) =>
    (
      await api.post(`auth/register`, {
        username,
        displayName,
        password,
      })
    ).data,

  login: async ({ username, password }) =>
    (
      await api.post(`auth/login`, {
        username,
        password,
      })
    ).data,
};
