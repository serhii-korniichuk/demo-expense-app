import axios from 'axios'

export const getAuthUrl = (string: string) => `/auth/${string}`;

const instance = axios.create({
    baseURL: "https://incode-backend-dev.herokuapp.com",
    headers: {'Content-Type': 'application/json'}
})

export default instance