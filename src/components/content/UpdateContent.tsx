import { RiEdit2Line } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { useState } from "react"

interface Props {
    contentId: number
}

const UpdateContent = ({ contentId }: Props) => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Icon onClick={() => setOpen(true)} className="cursor-pointer" icon={RiEdit2Line} size="lg"/>
    </>
  )
}

export default UpdateContent