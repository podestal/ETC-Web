import { RiEdit2Line } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import PostForm from "./PostForm"
import { Post } from "../../services/api/postService"

interface Props {
    post: Post
}

const UpdatePost = ({ post }: Props) => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Icon onClick={() => setOpen(true)} className="cursor-pointer" icon={RiEdit2Line} size="lg"/>
        <PostForm 
            open={open}
            setOpen={setOpen}
            post={post}
            // updatePost={updatePost || undefined}
        />
    </>
  )
}

export default UpdatePost