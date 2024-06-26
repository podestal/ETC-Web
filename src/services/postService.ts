import APIClient from "./apiClient"

export interface Author {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    group_name: string,
}

export interface Post {
    id: number,
    title: string,
    topic: number,
    created_at: string,
    img_url: string,
    created_by: Author
}

export default new APIClient<Post>('/posts')