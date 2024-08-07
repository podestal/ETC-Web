import axios from "axios"

// const DEV = 'http://127.0.0.1:8000/api/'
const TEST = 'https://etc-api-ruby.vercel.app/api/'

const axiosInstance = axios.create({
    baseURL: TEST
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

    delete = (access: string) => {
        return axiosInstance
        .delete<T>(this.endpoint, {
            headers: {Authorization: `JWT ${access}`}
        })
        .then(res => res.data)
    }
}

export default APIClient