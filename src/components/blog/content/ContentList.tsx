import { Content } from "../../../services/api/contentService"
import useAuthStore from "../../auth/Store"
import ContentForm from "./ContentForm"
import DetailedContent from "./DetailedContent"

interface Props {
    contents: Content[]
    sectionId: number,
    postId: number
}

const ContentList = ({ contents, sectionId, postId }: Props) => {

    const access = useAuthStore(store => store.access)

    if (!contents) return null

  return (
    <>  
        {contents.map( cont => <DetailedContent key={cont.id} sectionId={sectionId} content={cont} postId={postId}/>)}
        {access &&
            <ContentForm 
                sectionId={sectionId}
                postId={postId}
            />
        }
    </>
  )
}

export default ContentList