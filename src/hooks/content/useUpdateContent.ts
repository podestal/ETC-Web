import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import getContentService, { ContentPostData, Content } from "../../services/api/contentService";
import { getCacheKeySections } from "../../constants/queryKeys";

// const useDeleteContent = (contentId: number, postId: number): UseMutationResult<Content, Error, DeleteContentData> => {
//     const contentService = getContentService(undefined, contentId)
//     const CACHE_KEY_SECTIONS =  getCacheKeySections(postId)
//     const queryClient = useQueryClient()
//     return useMutation({
//         mutationFn: (data: DeleteContentData) => contentService.delete(data.access),
//         onSuccess: res => {
//             console.log(res)
//             queryClient.invalidateQueries({ queryKey: CACHE_KEY_SECTIONS })
//             // handleSuccess()
//         },
//         onError: (err) => {
//             // handleError()
//             console.log(err)
            
//         }
//     })
// }

// export default useDeleteContent

const useUpdateContent = (contentId: number | undefined, postId: number, handleSuccess: () => void): UseMutationResult<Content, Error, ContentPostData> => {
    const contentService = getContentService(undefined, contentId)
    const CACHE_KEY_SECTIONS =  getCacheKeySections(postId)
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: ContentPostData) => contentService.update(data.content, data.access),
        onSuccess: res => {
            console.log(res)
            queryClient.invalidateQueries({queryKey: CACHE_KEY_SECTIONS})
            handleSuccess()
        },
        onError: err => console.log(err)
    })
}

export default useUpdateContent
