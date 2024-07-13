import { Link } from "react-router-dom"
import { Post } from "../../../services/api/postService"
import moment from "moment"
import UpdatePost from "./UpdatePost"
import DeletePost from "./DeletePost"
import useAuthStore from "../../auth/Store"
import {motion} from 'framer-motion'

interface Props {
    post: Post,
}

const PostCard = ({ post }: Props) => {

    const access = useAuthStore(store => store.access)
    const fullName = post?.created_by && `${post?.created_by?.first_name} ${post?.created_by?.last_name}`
    const createdAt = moment(post?.created_at).format("MMM Do YYYY");  

  return (
    <motion.div 
        initial={{opacity: 0, translateX: 100}}
        whileInView={{opacity: 1, translateX: 0}}
        transition={{duration: 1.2}}
        className="w-full px-6">
        <div className="w-full h-[250px] lg:h-[370px] bg-no-repeat bg-cover bg-center rounded-3xl mb-10" style={{backgroundImage: `url(${post.img_url})`}}></div>
        <div className="flex justify-start items-center gap-8">
            {access && <UpdatePost post={post}/>}
            {access && <DeletePost post={post}/>}
            <p className="text-5xl lg:text-6xl hover:text-slate-400 cursor-pointer my-4 leading-[4rem]"><Link to={`/posts/${post.id}`} state={post}>{post.title}</Link></p>
        </div>
        <p className="text-lg text-slate-400">{post.description} </p>
        <div className="flex gap-4 items-center">
            <p className="font-semibold my-4 text-xl">{fullName}</p>
            <span>-</span>
            <p className="my-4 text-xl">{createdAt}</p>
        </div>
    </motion.div>
  )
}

export default PostCard