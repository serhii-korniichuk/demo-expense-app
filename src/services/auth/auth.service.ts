import axios, {getAuthUrl} from "../../api";

class AuthService {
    async login(username: string, password: string) {
        const response = await axios.post(getAuthUrl("login"), {username, password})

        return response
    }

    async register(username: string, password: string, displayName: string) {
        const response = await axios.post(getAuthUrl("register"), {username, password, displayName})

        return response
    }
}

export default new AuthService();