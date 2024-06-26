import APIClient from "./apiClient"

export interface Topic {
    id: number,
    name: string,
    description: string,
}

export default new APIClient<Topic>('/topics/')