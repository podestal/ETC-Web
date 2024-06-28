import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import getContentService, { ContentPostData , Content } from "../../services/api/contentService";
import { getCacheKeySections } from "../../constants/queryKeys";

const useCreateContent = (sectionId: number, postId: number, handleSuccess: () => void, handleError: () => void, contentId?: number): UseMutationResult<Content, Error, ContentPostData> => {
    const contentService = getContentService(sectionId, contentId)
    const CACHE_KEY_SECTIONS =  getCacheKeySections(postId)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: ContentPostData) => contentService.post(data.content, data.access),
        onSuccess: res => {
            console.log(res)
            handleSuccess()
            queryClient.invalidateQueries({queryKey: CACHE_KEY_SECTIONS})
        },
        onError: () => {
            handleError()
        }
    })
}

export default useCreateContent
