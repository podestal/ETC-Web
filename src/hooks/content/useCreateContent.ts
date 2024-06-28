import { UseMutationResult, useMutation } from "@tanstack/react-query";
import getContentService, { ContentPostData , Content } from "../../services/api/contentService";
// sectionId: number, contentId?: number
const useCreateContent = (sectionId: number, contentId?: number): UseMutationResult<Content, Error, ContentPostData> => {
    const contentService = getContentService(sectionId, contentId)
    return useMutation({
        mutationFn: (data: ContentPostData) => contentService.post(data.content, data.access),
        onSuccess: res => console.log(res),
        onError: err => console.log(err)
    })
}

export default useCreateContent
