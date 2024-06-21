import { PostInterface } from "../../interfaces/post"

type PostProps = {
    post: PostInterface
}

const Post = ({ post } : PostProps) => {
  return (
    <div>{post.title}</div>
  )
}

export default Post