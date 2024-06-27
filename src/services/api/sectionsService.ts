import APIClient from "./apiClient"

export interface Content {
    id: number,
    content: string
}

export interface Section {
    id?: number,
    title: string,
    post?: number,
    content?: Content[],
}

export interface SectionPostData {
    section: Section,
    access: string
}

export interface DeleteSectionData {
    access: string
}

const getSectionService = (postId?: number, sectionId?: number) => {
    const SECTION_URL = sectionId ? `/sections/${sectionId}/` : `/sections/?ordering=created_at&post=${postId}`
    return new APIClient<Section>(SECTION_URL)
}
// ?ordering=created_at
export default getSectionService