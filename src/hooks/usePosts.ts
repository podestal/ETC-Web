import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/api";

export const useQueryPost = (): any  => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })
}