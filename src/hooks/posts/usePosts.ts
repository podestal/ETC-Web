import { useQuery, UseQueryResult } from "@tanstack/react-query";
import postService, { Post } from "../../services/postService";
import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

const useQueryPosts = ():  UseQueryResult<Post[], Error> => {
    return useQuery({
        queryKey: CACHE_KEY_POSTS,
        queryFn: postService.get,
        staleTime: 1 * 60 * 1000,
    })
}

export default useQueryPosts
