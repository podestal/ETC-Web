import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getPosts } from "../api/api";
import { PostInterface } from "../interfaces/post";



export const useQueryPost = (): UseQueryResult<PostInterface[], Error>  => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })
}