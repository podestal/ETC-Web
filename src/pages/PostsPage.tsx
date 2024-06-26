import useQueryPosts from "../hooks/usePosts"
import Posts from "../components/posts/Posts"


const PostsPage = () => {

    const { data: posts, isLoading, isError, error} = useQueryPosts()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>
    
  return (
    <>
        <h1 className="text-3xl font-bold">Artículos</h1>
        <div className="w-full flex justify-center items-center gap-12">
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>Topic 1</li>
                    <li>Topic 1</li>
                    <li>Topic 1</li>
                </ul>
            </div>
            <Posts 
                posts={posts}
            />
        </div>
    </>
    // Topics
    // Posts
    // Subscription future
  )
}

export default PostsPage