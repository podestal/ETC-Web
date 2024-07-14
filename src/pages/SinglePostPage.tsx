import { useLocation } from "react-router-dom"
import SectionsList from "../components/blog/sections/SectionsList"
import { useEffect } from "react"
import Loading from "../components/utils/Loading"
import useQuerySection from "../hooks/sections/useSections"

const SinglePostPage = () => {

    const location = useLocation()
    const post = location.state

    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    const {data: sections, isLoading, isError, error, isSuccess} = useQuerySection(post.id)

    if (isLoading) return <Loading />

    if (isError) return <p>{error.message}</p>

  if(isSuccess) return (
    <div className="w-full flex flex-col min-h-[100vh] justify-start items-center gap-10 mt-28">
        <div className="w-full h-[200px] bg-no-repeat bg-cover  bg-center rounded-3xl mb-10 max-lg:mt-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <p className="lg:text-6xl text-5xl font-bold px-6">{post.title}</p>
        <p className="text-xl text-slate-400 px-6">{post?.description}</p>
        <SectionsList 
          sections={sections}
          postId={post.id}
        />
    </div>
  )
}

export default SinglePostPage