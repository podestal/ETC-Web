import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
import getPostService, {Post, PostData} from "../../services/api/postService";
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

const useCreatePost = (handleSuccess: () => void): UseMutationResult<Post, Error, PostData> => {
    const queryClient = useQueryClient()
    const postService = getPostService()
    return useMutation({
        mutationFn: (data: PostData) => postService.post(data.post, data.access),
        onSuccess: (savedPost) => {
            handleSuccess()
            queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => [ {...savedPost}, ...posts]))
        },
        onError: err => console.log(err)
        
    })
}

export default useCreatePost
