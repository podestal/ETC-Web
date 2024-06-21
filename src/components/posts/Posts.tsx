import { useQueryPost } from "../../hooks/usePosts"
import Post from "./Post"
import { PostInterface } from "../../interfaces/post"

// interface Post {
//     id: number,
//     title: string,
//     topic: number,
//     created_at: string,
// }

const Posts = () => {

    const { data: posts, isLoading, isError, error} = useQueryPost()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

    return (
        <>
            {posts?.map( (post : PostInterface) => <Post key={post.id} post={post}/>)}
        </>
    )
}

export default Posts