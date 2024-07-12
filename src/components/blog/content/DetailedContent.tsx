import { Content } from "../../../services/api/contentService"
import DeleteContent from "./DeleteContent"
import UpdateContent from "./UpdateContent"
import useAuthStore from "../../auth/Store"
import { useState } from "react"
import ContentCode from "./ContentCode"
import TextContent from "./TextContent"
import ImgContent from "./ImgContent"

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
    const contentType = content.content_type
    

  return (
    <>
      <div 
        className={`w-full flex justify-start items-center gap-8 px-6
          ${access ? 'ml-8' : 'ml-2'}`}
      >
          {access && <UpdateContent sectionId={sectionId} postId={postId} update={update} setUpdate={setUpdate} content={content}/>}
          {access && !update && <DeleteContent contentId={contentId} postId={postId}/>}
          {!update && 
          <>
            {contentType === 'T' && <TextContent text={content.content}/>}
            {contentType === 'C' && <ContentCode code={content.content} language={content.language}/>}
            {contentType === 'I' && <ImgContent img={content.content}/>}
          </>}

      </div>
    </>
  )
}

export default DetailedContent