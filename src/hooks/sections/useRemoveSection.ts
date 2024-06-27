// getSectionService

import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import getSectionService, { DeleteSectionData, Section } from "../../services/api/sectionsService"
import { getCacheKeySections } from "../../constants/queryKeys"

// import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
// import getPostService, { Post, DeletePostData } from "../../services/api/postService"
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

// const useDeletePost = (postId: number): UseMutationResult<Post, Error, DeletePostData> => {
//     const queryClient = useQueryClient()
//     const postService = getPostService(postId)
//     return useMutation({
//         mutationFn: (data: DeletePostData) => postService.delete(data.access),
//         onSuccess: () => {
//             queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.filter(post => post.id !== postId)))
//         },
//         onError: err => console.log(err)
//     })
// }

// export default useDeletePost

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