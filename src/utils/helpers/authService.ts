import axios from 'axios'

import api from 'src/api/api'

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const isLoggedIn = () => {
  const result = localStorage.getItem('accessToken')
  return Boolean(result)
}

BASE_CONNECTION.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      req.headers['Authorization'] = `Bearer ${token}`
    }
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

BASE_CONNECTION.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalRequest = err.config
    if (err.response?.status === 401) {
      console.log('originalRequest', originalRequest)

      originalRequest._isRetry = true
      const refreshToken = localStorage.getItem('refreshToken')

      if (refreshToken) {
        try {
          const res = await api.postRefresh(refreshToken)

          console.log('res!!!', res)

          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          // localStorage.setItem('accessToken', res?.data?.accessToken)
          // localStorage.setItem('refreshToken', res?.data?.refreshToken)

          BASE_CONNECTION.request(originalRequest)
        } catch {
          localStorage.clear()
          document.location = '/'
          // return Promise.reject(error)
        }
      }
    } else {
      throw err
    }
  }
)

export const apiWrapper = async <T>({ method, url, data, isFormData = false }: ApiWrapper) => {
  // const checkedUrl = parseData ? `${url}${parseQueries(parseData)}` : url
  const commonHeader = isFormData && {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  switch (method) {
    case 'get':
      return await BASE_CONNECTION.get<T>(url)
    case 'post': {
      return await BASE_CONNECTION.post<T>(url, isFormData ? data : { ...data }, {
        headers: {
          ...commonHeader
        }
      })
    }
    case 'delete':
      return await BASE_CONNECTION.delete<T>(url)
  }
}
