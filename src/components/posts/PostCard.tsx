import { Link } from "react-router-dom"
import { Post } from "../../services/postService"

interface Props {
    post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
        <div className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-3xl mb-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <p className="text-4xl hover:text-slate-400 cursor-pointer my-4"><Link to={`/${post.id}`}>{post.title}</Link></p>
        <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae minus dolorum doloribus recusandae error, sint facilis, molestias aperiam natus doloremque, commodi sed distinctio placeat ea obcaecati nihil hic nulla.</p>
        <p className="font-bold my-4 text-xl">Escrito por: Luis Rodriguez</p>
    </div>
  )
}

export default PostCard