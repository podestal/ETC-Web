import { useQueryPost } from "./hooks/usePosts"
import Posts from "./components/posts/Posts"

const App = () => {

  const {data: posts, isLoading, isError, error} = useQueryPost()
  
  if (isLoading) return <p>Loading ...</p>

  if (isError) return <p>{error.message}</p>

  JSON.stringify

  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <Posts />
    </>
  )
}

export default App
