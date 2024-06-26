import useQueryPosts from "../hooks/posts/usePosts"
import Posts from "../components/posts/Posts"
import Topics from "../components/topics/Topics"


const PostsPage = () => {

    const { data: posts, isLoading, isError, error} = useQueryPosts()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>
    
  return (
    <>
        <div className="w-full flex gap-12 min-h-[100vh]">
            <Topics 

            />
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