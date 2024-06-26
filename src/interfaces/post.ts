export interface PostInterface {
    id: number,
    title: string,
    topic: number,
    created_at: string,
}

export interface CreatePostInterface {
    title: string,
    topic: number,
}