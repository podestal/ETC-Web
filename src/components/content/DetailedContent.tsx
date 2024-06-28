import { Content } from "../../services/api/sectionsService"
import DeleteContent from "./DeleteContent"
import UpdateContent from "./UpdateContent"
import useAuthStore from "../auth/Store"

interface Props {
    content: Content,
    postId: number
}

const DetailedContent = ({content, postId}: Props) => {

    const access = useAuthStore(store => store.access)

  return (
    <div 
    className={`w-full flex justify-start items-center gap-8 
        ${access ? 'ml-8' : 'ml-2'}`}
    >
        {access && <UpdateContent contentId={content.id}/>}
        {access && <DeleteContent contentId={content.id} postId={postId}/>}
        <p className="text-2xl leading-[3.2rem]">{content.content}</p>
    </div>
  )
}

export default DetailedContent