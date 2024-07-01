import { RiEdit2Line, RiCloseLine } from "@remixicon/react"
import { Icon } from "@tremor/react"
import { Content } from "../../../services/api/contentService"
import ContentForm from "./ContentForm"

interface Props {
    update: boolean
    setUpdate: (state: boolean) => void
    content: Content
    postId: number
    sectionId: number
}

const UpdateContent = ({ update, setUpdate, content, postId, sectionId }: Props) => {

  return (
    <>
        {update 
        ?
        <Icon onClick={() => setUpdate(false)} color="red" className="cursor-pointer" icon={RiCloseLine} size="lg"/>
        :
        <Icon onClick={() => setUpdate(true)} className="cursor-pointer" icon={RiEdit2Line} size="lg"/>
        }
        {update && <ContentForm 
            postId={postId}
            sectionId={sectionId}
            content={content}
            setUpdate={setUpdate}
        />}
    </>
  )
}

export default UpdateContent