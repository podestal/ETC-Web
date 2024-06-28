import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getSectionService, { DeleteSectionData, Section } from "../../services/api/sectionsService"
import { getCacheKeySections } from "../../constants/queryKeys"

const useDeleteSection = (postId: number, sectionId: number): UseMutationResult<Section, Error, DeleteSectionData> => {
    const sectionService = getSectionService(postId, sectionId)
    const queryClient = useQueryClient()
    const CACHE_KEY_SECTIONS = getCacheKeySections(postId)
    return useMutation({
        mutationFn: (data: DeleteSectionData) => sectionService.delete(data.access),
        onSuccess: () => {
            queryClient.setQueryData(CACHE_KEY_SECTIONS, ((sections: Section[]) => sections.filter(section => section.id !== sectionId)))
        },
        onError: err => console.log(err)
    })
}

export default useDeleteSection