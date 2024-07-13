import useQueryPosts from "../hooks/posts/usePosts"
import Posts from "../components/blog/posts/Posts"
import Topics from "../components/blog/topics/Topics"
import Loading from "../components/utils/Loading"
import useQueryTopics from "../hooks/topics/useTopics"


const PostsPage = () => {

    const { data: posts, isLoading: postsLoading, isError: isPostError, error: postError} = useQueryPosts()
    const { data: topics, isLoading: topicsLoading, isError: isTopicError, error: topicError } = useQueryTopics()

    if (postsLoading || topicsLoading) return <Loading />

    if (isPostError || isTopicError) return <p>{postError?.message || topicError?.message}</p>
    
  return (
    <>
        <div className="w-full flex gap-12 min-h-[100vh] mt-20 relative">
            <Topics 
              topics={topics}
            />
            <Posts 
                posts={posts}
            />
        </div>
    </>
  )
}

export default PostsPage