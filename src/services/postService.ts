import APIClient from "./apiClient"

export interface Post {
    id: number,
    title: string,
    topic: number,
    created_at: string,
    img_url: string,
}

export default new APIClient<Post>('/posts')