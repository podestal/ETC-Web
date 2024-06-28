import getSectionService, { Section, SectionPostData } from "../../services/api/sectionsService";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCacheKeySections } from "../../constants/queryKeys";

const useCreateSection = (postId: number, handleSuccess: () => void): UseMutationResult<Section, Error, SectionPostData> => {
    const sectionService = getSectionService(postId)
    const queryClient = useQueryClient()
    const CACHE_KEY_SECTION = getCacheKeySections(postId)
    return useMutation({
        mutationFn: (data: SectionPostData) => sectionService.post(data.section, data.access),
        onSuccess: res => {
            handleSuccess()
            console.log('new section', res)
            console.log('CACHE_KEY_SECTION', CACHE_KEY_SECTION);
            console.log('cache data', queryClient.getQueryData(CACHE_KEY_SECTION));
            queryClient.setQueryData(CACHE_KEY_SECTION, ((sections: Section[]) => [...sections, {...res, content: []}]))
        },
        onError: err => console.log('Error', err),
    })
}

export default useCreateSection