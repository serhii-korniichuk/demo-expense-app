export const setAccessToken = (t: string) => localStorage.setItem('access_token', t)
export const setRefreshToken = (t: string) => localStorage.setItem('refresh_token', t)
export const clearToken = () => localStorage.setItem('token', '')
export const getTokens = () => ({
  accessToken: localStorage.getItem('access_token') || '',
  refreshToken: localStorage.getItem('refresh_token') || '',
})
