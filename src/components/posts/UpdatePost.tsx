import { RiEdit2Line } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import PostForm from "./PostForm"
import { Post } from "../../services/postService"
import useUpdatePost from "../../hooks/posts/useUpdatePost"

interface Props {
    post: Post
}

const UpdatePost = ({ post }: Props) => {

    const [open, setOpen] = useState(false)
    const updatePost = post.id && useUpdatePost(post.id)

  return (
    <>
        <Icon onClick={() => setOpen(true)} className="cursor-pointer" icon={RiEdit2Line} size="xl"/>
        <PostForm 
            open={open}
            setOpen={setOpen}
            post={post}
            updatePost={updatePost || undefined}
        />
    </>
  )
}

export default UpdatePost