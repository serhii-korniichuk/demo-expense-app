import axios from 'axios';

const request = axios.create({
    baseURL: 'https://incode-backend-dev.herokuapp.com/auth/',
    headers: {
        'accept': 'application/json',
        'Content-type': 'application/json',
    }
});

export const registerRequest = (password, username, fullName) => {
    return request.post('/register',
        JSON.stringify({
            password,
            username,
            displayName: fullName
        })
    );
}

export const loginRequest = (password, username) => {
    return request.post('/login',
        JSON.stringify({
            password,
            username,
        })
    );
}

export const logoutRequest = (accessToken) => {
    return request.get('/logout', {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }
    );
}