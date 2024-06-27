import { Button } from "@tremor/react"
import { useState } from "react"
import PostForm from "./PostForm"
import useCreatePost from "../../hooks/posts/useCreatePost"

const CreatePost = () => {

  const [open, setOpen] = useState(false)
  const createPost = useCreatePost()

  return (
    <>
      <Button onClick={() => setOpen(true)} className="mt-8" color="blue"><p className="text-xl">Nuevo Artículo</p></Button>
      <PostForm 
        open={open}
        setOpen={setOpen}
        createPost={createPost}
      />
    </>
  )
}

export default CreatePost