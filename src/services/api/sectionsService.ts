import APIClient from "./apiClient"

export interface Content {
    id: number,
    content: string
}

export interface Section {
    id?: number,
    title: string,
    post: number,
    content?: Content[],
}

export interface SectionPostData {
    section: Section,
    access: string
}

const getSectionService = (postId: number) => {
    return new APIClient<Section>(`/sections/?ordering=created_at&post=${postId}`)
}
// ?ordering=created_at
export default getSectionService