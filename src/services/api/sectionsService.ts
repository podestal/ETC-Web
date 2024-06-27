import APIClient from "./apiClient"

export interface Content {
    id: number,
    content: string
}

export interface Section {
    id: number,
    title: string,
    post: number,
    content: Content[],
}

const getSectionService = (postId: number) => {
    return new APIClient<Section>(`/sections/?post=${postId}`)
}

export default getSectionService