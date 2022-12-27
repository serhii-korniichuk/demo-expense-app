import axios from 'axios';

const BASE_URL = 'https://expa.fly.dev'

const clientAxios = axios.create({
  baseURL: BASE_URL
});

interface AuthRegisterProps {
  link: string,
  data: {
      password: string,
      username: string,
      displayName?: string,
    } | null
}

export const axionGET = (link: string ) => {
  clientAxios.get(link)
  .then(function (response) {
    // handle success
    console.log(response);
  }).catch(function (error) {
    // handle error
    console.log(error);
  })
}

export const axionPOST = ({link, data}: AuthRegisterProps ): Promise<any> => {
  return clientAxios.post(link, data);
}