import { RiDeleteBinLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"
import DeleteContentForm from "./DeleteContentForm"

interface Props {
    contentId: number
    postId: number
}

const DeleteContent = ({ contentId, postId }: Props) => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Icon onClick={() => setOpen(true)} color='red' className="cursor-pointer" icon={RiDeleteBinLine} size="lg"/>
        <DeleteContentForm 
            open={open}
            setOpen={setOpen}
            contentId={contentId}
            postId={postId}
        />
    </>
  )
}

export default DeleteContent