// import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
// import getPostService, {Post, PostData} from "../../services/api/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";
// // UseQueryResult<Post[], Error>
// // onCreate: () => void,


// const useCreatePost = (handleSuccess: () => void): UseMutationResult<Post, Error, PostData> => {
//     const queryClient = useQueryClient()
//     const postService = getPostService()
//     return useMutation({
//         mutationFn: (data: PostData) => postService.post(data.post, data.access),
//         onSuccess: (savedPost) => {
//             handleSuccess()
//             queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => [ {...savedPost}, ...posts]))
//         },
//         onError: err => console.log(err)
        
//     })
// }

// export default useCreatePost
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
            queryClient.setQueryData(CACHE_KEY_SECTION, ((sections: Section[]) => [...sections, {...res}]))
        },
        onError: err => console.log('Error', err),
    })
}

export default useCreateSection