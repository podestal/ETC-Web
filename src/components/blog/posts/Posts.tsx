import { Post } from "../../../services/api/postService"
import useTopicStore from "../topics/Store"
import PostCard from "./PostCard"
import {motion} from 'framer-motion'


interface Props {
    posts: Post[] | undefined,
}

const Posts = ({ posts }: Props) => {
    
    if (posts?.length == 0) return (
        <motion.p 
            initial={{opacity: 0, translateX: 100}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1}}
            className="text-2xl w-full flex justify-center items-center">Aún no hay artículos</motion.p>
    )
    const topic = useTopicStore(store => store.topic)
    const filteredPosts = topic === 0  ? posts : posts?.filter( post => post.topic == topic)

    return (
        <div className="flex flex-col flex-1 items-start justify-start gap-12 mt-12 w-full">
            {filteredPosts
                ?.map( post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}

export default Posts