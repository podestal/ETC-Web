// import { useMutation, UseMutationResult } from "@tanstack/react-query";
// import getPostService, { PostData } from "../../services/api/postService";
// import { Post } from "../../services/api/postService";

// const useUpdatePost = (postId: number): UseMutationResult<Post, Error, PostData> => {
//     // const queryClient = useQueryClient()
//     // const userId = 1
//     const postService = getPostService(postId)
//     return useMutation({
//         mutationFn: (data: PostData) => postService.update(data.post, data.access),
//         onSuccess: (savedPost, newPost) => {
//             console.log('savedPost', savedPost)
//             console.log('newPost', newPost);
//         },
//         onError: err => console.log(err)
        
//     })
// }

// export default useUpdatePost

import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import getPostService, { Post, DeletePostData } from "../../services/api/postService"
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

const useDeletePost = (postId: number): UseMutationResult<Post, Error, DeletePostData> => {
    const queryClient = useQueryClient()
    const postService = getPostService(postId)
    return useMutation({
        mutationFn: (data: DeletePostData) => postService.delete(data.access),
        onSuccess: res => {
            console.log('response', res)
            queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.filter(post => post.id !== postId)))
        },
        onError: err => console.log(err)
    })
}

export default useDeletePost