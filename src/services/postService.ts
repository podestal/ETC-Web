import APIClient from "./apiClient"

export interface Post {
    id: number,
    title: string,
    topic: number,
    created_at: string
}

export default new APIClient<Post>('/posts')