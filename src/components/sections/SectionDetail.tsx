import { Section } from "../../services/api/sectionsService"
import useAuthStore from "../auth/Store"
import DeleteSection from "./DeleteSection"
import UpdateSection from "./UpdateSection"
import ContentList from "../content/ContentList"

interface Props {
    section: Section
    postId: number
}

const SectionDetail = ({ section, postId }: Props) => {

    const access = useAuthStore(store => store.access)
    const contents = section?.content
    const sectionId = section.id

    if (!sectionId || !contents) return null

  return (
    <div className="w-full flex flex-col justify-center items-start gap-8">
        <div className="flex gap-8 items-center">
            {access && <UpdateSection section={section} postId={postId}/>}
            {access && <DeleteSection section={section} postId={postId}/>}
            <h3 className="text-5xl font-bold">{section.title}</h3>
        </div>
        <ContentList 
            contents={contents}
            sectionId={sectionId}
            postId={postId}
        />
    </div>
  )
}

export default SectionDetail