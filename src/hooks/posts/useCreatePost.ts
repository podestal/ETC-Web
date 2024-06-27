import { useQueryClient, useMutation, UseMutationResult } from "@tanstack/react-query";
import postService, {Post} from "../../services/postService";
// import { CACHE_KEY_POSTS } from "../../constants/queryKeys";
// UseQueryResult<Post[], Error>
// onCreate: () => void,

interface PostData {
    post: Post,
    access: string
}

const useCreatePost = (): UseMutationResult<Post, Error, PostData> => {
    // const queryClient = useQueryClient()
    // const userId = 1
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



// import { useQueryClient, useMutation } from "@tanstack/react-query"
// import todoSerice, { Todo} from "../../services/todoSerice"

// const useAddTodo = (onAdd: () => void) => {

//     const queryClient = useQueryClient()
//     const userId = 1

//     return useMutation<Todo, Error, Todo>({
//         mutationFn: (todo: Todo) => 
//             todoSerice.post(todo),
//         onSuccess: (savedTodo, newTodo) => {
//             console.log('newTodo', newTodo)
//             queryClient.setQueryData<Todo[]>(['users', userId, 'todos'], todos => [savedTodo, ...(todos || [])])
//             onAdd()

//         }
//     })
// }

// export default useAddTodo