import { Post } from "../../services/postService"

interface Props {
    post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div>{post.title}</div>
  )
}

export default PostCard