import { Link } from "react-router-dom"
import { Post } from "../../services/api/postService"
import moment from "moment"
import UpdatePost from "./UpdatePost"
import DeletePost from "./DeletePost"
import useAuthStore from "../auth/Store"
import { User } from "../../services/auth/userService"

interface Props {
    post: Post,
    user: User | undefined
}

const PostCard = ({ post, user }: Props) => {

    const access = useAuthStore(store => store.access)
    const fullName = post?.created_by ? `${post?.created_by?.first_name} ${post?.created_by?.last_name}` : `${user?.first_name} ${user?.last_name}`
    const createdAt = moment(post?.created_at).format("MMM Do YYYY");  

  return (
    <div className="w-full">
        <div className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-3xl mb-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <div className="flex justify-start items-center gap-8">
            {access && <UpdatePost post={post}/>}
            {access && <DeletePost post={post}/>}
            <p className="text-6xl hover:text-slate-400 cursor-pointer my-4"><Link to={`/${post.id}`} state={post}>{post.title}</Link></p>
        </div>
        <p className="text-lg text-slate-400">{post.description} </p>
        <div className="flex gap-4 items-center">
            <p className="font-semibold my-4 text-xl">{fullName}</p>
            <span>-</span>
            <p className="my-4 text-xl">{createdAt}</p>
        </div>
    </div>
  )
}

export default PostCard