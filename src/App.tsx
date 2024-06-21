import { useQueryPost } from "./hooks/usePosts"

const App = () => {

  const {data: posts, isLoading, isError, error} = useQueryPost()
  
  if (isLoading) return <p>Loading ...</p>

  if (isError) return <p>{error.message}</p>

  JSON.stringify

  return (
    <h1 className="text-3xl font-bold underline">
      <>
        {console.log('posts', posts)}
      </>
    </h1>
  )
}

export default App
