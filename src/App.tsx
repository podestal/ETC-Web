import PostsPage from "./pages/PostsPage"

const App = () => {

  return (
    <div className="w-[100%] min-h-[100vh] bg-slate-950 text-slate-200">
      <div className="xl:max-w-[1280px] max-w-[850px] mx-auto py-10">
        <PostsPage />
      </div>
    </div>
  )
}

export default App
