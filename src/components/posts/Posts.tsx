import useQueryPosts from "../../hooks/usePosts"
import PostCard from "./PostCard"

const Posts = () => {

    const { data: posts, isLoading, isError, error} = useQueryPosts()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

    return (
        <div className="flex flex-col gap-12 mt-10">
            {posts?.map( post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}

export default Posts