import { Button } from "@tremor/react"
import { useState } from "react"
import PostForm from "./PostForm"
import useCreatePost from "../../hooks/posts/useCreatePost"
import useAuthStore from "../auth/Store"

const CreatePost = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="mt-8" color="blue"><p className="text-xl">Nuevo Post</p></Button>
      <PostForm 
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default CreatePost