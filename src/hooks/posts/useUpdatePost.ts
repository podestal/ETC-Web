import { useMutation, UseMutationResult } from "@tanstack/react-query";
import getPostService, { PostData } from "../../services/api/postService";
import { Post } from "../../services/api/postService";

const useUpdatePost = (postId: number): UseMutationResult<Post, Error, PostData> => {
    // const queryClient = useQueryClient()
    // const userId = 1
    const postService = getPostService(postId)
    return useMutation({
        mutationFn: (data: PostData) => postService.update(data.post, data.access),
        onSuccess: (savedPost, newPost) => {
            console.log('savedPost', savedPost)
            console.log('newPost', newPost);
        },
        onError: err => console.log(err)
        
    })
}

export default useUpdatePost