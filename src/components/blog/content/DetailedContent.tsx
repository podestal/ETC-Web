import { Content } from "../../../services/api/contentService"
import DeleteContent from "./DeleteContent"
import UpdateContent from "./UpdateContent"
import useAuthStore from "../../auth/Store"
import { useState } from "react"

interface Props {
    content: Content,
    postId: number,
    sectionId: number
}

const DetailedContent = ({content, postId, sectionId}: Props) => {

    const contentId = content.id
    if (!contentId) return null

    const access = useAuthStore(store => store.access)
    const [update, setUpdate] = useState(false)

  return (
    <div 
    className={`w-full flex justify-start items-center gap-8 
        ${access ? 'ml-8' : 'ml-2'}`}
    >
        {access && <UpdateContent sectionId={sectionId} postId={postId} update={update} setUpdate={setUpdate} content={content}/>}
        {access && !update && <DeleteContent contentId={contentId} postId={postId}/>}
        {!update && <p className="text-2xl leading-[3.2rem]">{content.content}</p>}

    </div>
  )
}

export default DetailedContent