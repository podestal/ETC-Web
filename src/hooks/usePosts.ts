import { useQuery, UseQueryResult, useMutation, UseMutationResult } from "@tanstack/react-query";
import { getPosts, createPost } from "../api/api";
import { PostInterface, CreatePostInterface } from "../interfaces/post";
import postService, { Post } from "../services/postService";
import { CACHE_KEY_POSTS } from "../constants/queryKeys";



// export const useQueryPost = (): UseQueryResult<PostInterface[], Error>  => {
//     return useQuery({
//         queryKey: ['posts'],
//         queryFn: () => getPosts(),
//     })
// }

const useQueryPosts = () => {
    return useQuery<Post[]>({
        queryKey: CACHE_KEY_POSTS,
        queryFn: postService.get,
        staleTime: 1 * 60 * 1000,
    })
}

export default useQueryPosts

// import { useQuery } from "@tanstack/react-query"
// import APIClient from "../../services/apiClient"
// import todoSerice, {Todo} from "../../services/todoSerice"

// const useTodos = (userId: number | undefined) => {

//     return useQuery<Todo[], Error>({
//         queryKey: userId ? ['users', userId, 'todos'] : ['todos'],
//         queryFn: todoSerice.getAll,
//         staleTime: 1 * 60 * 1000,
//     })
// }

// export default useTodos