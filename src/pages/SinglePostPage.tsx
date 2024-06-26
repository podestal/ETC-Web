import { useLocation } from "react-router-dom"
import SectionsList from "../components/sections/SectionsList"

const SinglePostPage = () => {

    const location = useLocation()
    const post = location.state

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full h-[200px] bg-no-repeat bg-cover  bg-center rounded-3xl mb-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <p className="text-6xl">{post.title}</p>
        <p className="text-xl text-slate-400">{post?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi amet hic, quos optio quibusdam quia consequuntur minima a repellat. Libero expedita commodi ipsa numquam maiores adipisci temporibus magni ea.</p>
        <SectionsList postId={post.id}/>
    </div>
  )
}

export default SinglePostPage