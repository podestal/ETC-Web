import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
import getPostService, {Post, PostData} from "../../services/api/postService";
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";
// UseQueryResult<Post[], Error>
// onCreate: () => void,

const useCreatePost = (): UseMutationResult<Post, Error, PostData> => {
    const queryClient = useQueryClient()
    const postService = getPostService()
    return useMutation({
        mutationFn: (data: PostData) => postService.post(data.post, data.access),
        onSuccess: (savedPost) => {
            queryClient.setQueryData(CACHE_KEY_POSTS, ((posts: Post[]) => [...posts, {...savedPost}]))
        },
        onError: err => console.log(err)
        
    })
}

export default useCreatePost
