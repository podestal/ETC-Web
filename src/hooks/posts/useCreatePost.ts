import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
import getPostService, {Post, PostData} from "../../services/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";
// UseQueryResult<Post[], Error>
// onCreate: () => void,

const useCreatePost = (): UseMutationResult<Post, Error, PostData> => {
    // const queryClient = useQueryClient()
    // const userId = 1
    const postService = getPostService()
    return useMutation({
        mutationFn: (data: PostData) => postService.post(data.post, data.access),
        onSuccess: (savedPost, newPost) => {
            console.log('savedPost', savedPost)
            console.log('newPost', newPost);
        },
        onError: err => console.log(err)
        
    })
}

export default useCreatePost
