import { Post } from "../../services/postService"
import PostCard from "./PostCard"


interface Props {
    posts: Post[] | undefined,
}

const Posts = ({ posts }: Props) => {
    
    if (posts?.length == 0) return <p className="flex-1">No hay artículos</p>

    return (
        <div className="flex flex-col flex-1 gap-12 mt-10">
            {posts?.map( post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}

export default Posts