// const getPostService = (postId?: number) => {
//     return new APIClient<Post>(`/posts/${postId ? `${postId}/` : '?ordering=-created_at'}`)
// }

import APIClient from "./apiClient";

export interface Content {
    id?: number,
    content: string,
    created_at?: string,
    section: number,
    content_type: string,
    language: string,
}

export interface ContentPostData {
    content: Content,
    access: string
}

export interface DeleteContentData {
    access: string
}

// export default getPostService

const getContentService = (sectionId?: number, contentId?: number | undefined) => {
    const CONTENT_URL = contentId ? `${contentId}/` : `?ordering=created_at&section=${sectionId}`
    return new APIClient<Content>(`/content/${CONTENT_URL}`) 
}

export default getContentService