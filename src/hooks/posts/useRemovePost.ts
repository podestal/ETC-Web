import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import getPostService, { Post, DeletePostData } from "../../services/api/postService"
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

const useDeletePost = (postId: number): UseMutationResult<Post, Error, DeletePostData> => {
    const queryClient = useQueryClient()
    const postService = getPostService(postId)
    return useMutation({
        mutationFn: (data: DeletePostData) => postService.delete(data.access),
        onSuccess: () => {
            queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => posts.filter(post => post.id !== postId)))
        },
        onError: err => console.log(err)
    })
}

export default useDeletePost