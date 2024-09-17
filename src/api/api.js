import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://incode-backend-dev.herokuapp.com/auth'
})


export const expenseAPI = {
    singUp(password, username, displayName) {
        return instance.post('/register', {password, username, displayName});
    },
    singIn(password, username) {
        return instance.post('/login', {username, password});
    },
    logout() {
        return instance.get('/logout');
    }
}