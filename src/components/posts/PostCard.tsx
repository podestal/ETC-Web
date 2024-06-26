import { Link } from "react-router-dom"
import { Post } from "../../services/postService"
import moment from "moment"

interface Props {
    post: Post
}

const PostCard = ({ post }: Props) => {

    const fullName = `${post?.created_by.first_name} ${post?.created_by.last_name}`
    const createdAt = moment(post?.created_at).format("MMM Do YYYY");  

  return (
    <div>
        <div className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-3xl mb-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <p className="text-6xl hover:text-slate-400 cursor-pointer my-4"><Link to={`/${post.id}`} state={post}>{post.title}</Link></p>
        <p className="text-lg text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae minus dolorum doloribus recusandae error, sint facilis, molestias aperiam natus doloremque, commodi sed distinctio placeat ea obcaecati nihil hic nulla.</p>
        <div className="flex gap-4 items-center">
            <p className="font-semibold my-4 text-xl">{fullName}</p>
            <span>-</span>
            <p className="my-4 text-xl">{createdAt}</p>
        </div>
    </div>
  )
}

export default PostCard