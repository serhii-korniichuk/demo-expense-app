const BASE_URL = 'https://incode-backend-dev.herokuapp.com';

 export const login = async (username: string, password: string) => {
     return await fetch(`${BASE_URL}/auth/login`, {
         method: 'POST',
         headers: {
             accept: 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             password,
             username,
         })
     });
 }

 export const register = async (displayName: string, username: string, password: string) => {
     return await fetch(`${BASE_URL}/auth/register`, {
         method: 'POST',
         headers: {
             accept: 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             password,
             username,
             displayName,
         })
     });
 }
