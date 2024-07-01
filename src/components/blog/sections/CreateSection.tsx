import { Button } from "@tremor/react"
import SectionForm from "./SectionForm"
import { useState } from "react"

interface Props {
    postId: number
}

const CreateSection = ({ postId }: Props) => {

    const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center">
        <Button onClick={() => setOpen(true)} color="blue"><p className="text-xl">Nueva Sección</p></Button>
        <SectionForm 
            open={open}
            setOpen={setOpen}
            postId={postId}
        />
    </div>
  )
}

export default CreateSection