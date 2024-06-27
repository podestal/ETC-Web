import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get = () => {
        return axiosInstance
            .get<T>(this.endpoint)
            .then(res => res.data)
    }

    post = (data: T, access: string) => {
        return axiosInstance
            .post<T>(this.endpoint, data, {
                headers: {Authorization: `JWT ${access}`}
            })
            .then(res => res.data)
    }

    update = (data: T, access: string) => {
        return axiosInstance
        .patch<T>(this.endpoint, data, {
            headers: {Authorization: `JWT ${access}`}
        })
        .then(res => res.data)
    }
}

export default APIClient