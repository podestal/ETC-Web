import APIClient from "./apiClient"

export interface DeletePostData {
    access: string
}

export interface PostData {
    post: Post,
    access: string,
}

export interface Author {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    group_name: string,
}

export interface Post {
    id?: number,
    title: string,
    topic: number,
    created_at?: string,
    img_url: string,
    description: string,
    created_by?: Author
}

const getPostService = (postId?: number) => {
    return new APIClient<Post>(`/posts/${postId ? `${postId}/` : ''}`)
}

export default getPostService