import axios from "axios";

axios.defaults.baseURL = 'https://expa.fly.dev';

const baseConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const signUp = async (data: any) => {
    const newUser = await axios.post('/auth/register',{
        password: data.password,
        username: data.userName,
        displayName: data.name
    }, baseConfig)

    return newUser.data
}

const signIn = async (data: any) => {
   const user = await axios.post('/auth/login',{
        password: data.password,
        username: data.userName
    }, baseConfig)

    return user.data
}

const logOut = async (token: string | null) => {
    await axios.get('/auth/logout', {
        headers: {
            ...baseConfig.headers,
            'Authorization': `Bearer ${token}`
        }
    })
}

export { signUp, signIn, logOut };
