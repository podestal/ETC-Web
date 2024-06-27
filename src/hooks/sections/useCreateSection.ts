// import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
// import getPostService, {Post, PostData} from "../../services/api/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";
// // UseQueryResult<Post[], Error>
// // onCreate: () => void,

import { UseMutationResult, useMutation } from "@tanstack/react-query";

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

const useCreateSection = (postId: number): UseMutationResult<Section, Error, SectionPostData> => {
    const sectionService = getSectionService(postId)
    return useMutation({
        mutationFn: (data: SectionPostData) => sectionService.post(data.section, data.access),
        onSuccess: res => console.log('response',res),
        onError: err => console.log('Error', err),
    })
}

export default useCreateSection