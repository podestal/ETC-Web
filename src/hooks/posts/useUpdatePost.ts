import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import getPostService, { PostData } from "../../services/api/postService";
import { Post } from "../../services/api/postService";
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

const useUpdatePost = (postId: number | undefined, handleSuccess: () => void): UseMutationResult<Post, Error, PostData> => {
    const queryClient = useQueryClient()
    const postService = getPostService(postId)
    return useMutation({
        mutationFn: (data: PostData) => postService.update(data.post, data.access),
        onSuccess: (savedPost) => {
            handleSuccess()
            queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.map(post => {
                if (post.id == postId) {
                    return {...post, ...savedPost}
                }
                return post
            })))
        },
        onError: err => console.log(err)
        
    })
}

export default useUpdatePost