import { RiEdit2Line } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import PostForm from "./PostForm"

const UpdatePost = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Icon onClick={() => setOpen(true)} className="cursor-pointer" icon={RiEdit2Line} size="xl"/>
        <PostForm 
            open={open}
            setOpen={setOpen}
        />
    </>
  )
}

export default UpdatePost