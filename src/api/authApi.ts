import { apiWrapper } from 'src/utils/helpers/authService'

const userApi = {
  postRegister: (data: IRegisterRequest) =>
    apiWrapper<IRegisterResponse>({
      method: 'post',
      url: '/auth/register',
      data
    }),

  postLogin: (data: ILoginRequest) =>
    apiWrapper<ILoginResponse>({
      method: 'post',
      url: '/auth/login',
      data
    }),

  postRefresh: (data: string) =>
    apiWrapper<ILoginResponse>({
      method: 'post',
      url: '/auth/refresh',
      data
    })
}

export default userApi
