import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/auth/'
})

class AuthClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get = (access: string) => {
        return axiosInstance
            .get<T>(this.endpoint, {
                headers: { Authorization: `JWT ${access}` }
            })
            .then( res => res.data)
    }
}

export default AuthClient
