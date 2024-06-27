// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import getPostService, { Post } from "../../services/api/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";

// const useQueryPosts = ():  UseQueryResult<Post[], Error> => {

//     const postService = getPostService()

//     return useQuery({
//         queryKey: CACHE_KEY_POSTS,
//         queryFn: postService.get,
//         staleTime: 1 * 60 * 1000,
//     })
// }

// export default useQueryPosts

import userService, {User} from "../../services/auth/userService";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { CACHE_KEY_USER } from "../../constants/queryKeys";

const useQueryUser = (access: string):  UseQueryResult<User, Error> => {
    return useQuery({
        queryKey: CACHE_KEY_USER,
        queryFn: () => userService.get(access),
        staleTime: 1 * 60 * 1000,
    })
}

export default useQueryUser