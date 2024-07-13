import { Post } from "../../../services/api/postService"
import useTopicStore from "../topics/Store"
import PostCard from "./PostCard"
import useQueryUser from "../../../hooks/auth/useUser"
import useAuthStore from "../../auth/Store"


interface Props {
    posts: Post[] | undefined,
}

const Posts = ({ posts }: Props) => {
    
    if (posts?.length == 0) return (
        <p className="text-2xl w-full flex justify-center items-center">Aún no hay artículos</p>
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