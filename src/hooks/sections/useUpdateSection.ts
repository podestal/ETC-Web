import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import getSectionService, { Section, SectionPostData } from "../../services/api/sectionsService";
import { getCacheKeySections } from "../../constants/queryKeys";

const useUpdateSection = (postId:number, secctionId: number, handleSuccess: () => void): UseMutationResult<Section, Error, SectionPostData> => {
    
    const sectionService = getSectionService(0, secctionId)
    const queryClient = useQueryClient()
    const CACHE_KEY_SECTION = getCacheKeySections(postId)
    return useMutation({
        mutationFn: (data: SectionPostData) => sectionService.update(data.section, data.access),
        onSuccess: savedSection => {
            queryClient.setQueryData(CACHE_KEY_SECTION, ((sections: Section[]) => sections.map( section => {
                if (section.id === secctionId) {
                    return {...section, ...savedSection}
                }
                return section
            })))
            handleSuccess()
        },
        onError: err => console.log(err)
    })
}

export default useUpdateSection
