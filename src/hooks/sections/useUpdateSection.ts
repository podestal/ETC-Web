// import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
// import getPostService, { PostData } from "../../services/api/postService";
// import { Post } from "../../services/api/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import getSectionService, { Section, SectionPostData } from "../../services/api/sectionsService";
import { getCacheKeySections } from "../../constants/queryKeys";

// const useUpdatePost = (postId: number | undefined, handleSuccess: () => void): UseMutationResult<Post, Error, PostData> => {
//     const queryClient = useQueryClient()
//     const postService = getPostService(postId)
//     return useMutation({
//         mutationFn: (data: PostData) => postService.update(data.post, data.access),
//         onSuccess: (savedPost) => {
//             handleSuccess()
//             queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.map(post => {
//                 if (post.id == postId) {
//                     return {...post, ...savedPost}
//                 }
//                 return post
//             })))
//         },
//         onError: err => console.log(err)
        
//     })
// }

// export default useUpdatePost

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

// queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.map(post => {
//     if (post.id == postId) {
//         return {...post, ...savedPost}
//     }
//     return post
// })))