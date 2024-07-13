import SectionDetail from "./SectionDetail"
import CreateSection from "./CreateSection"
import useAuthStore from "../../auth/Store"
import { Section } from "../../../services/api/sectionsService"

interface Props {
    sections: Section[]
    postId: number
}

const SectionsList = ({ sections, postId }: Props) => {

    if (!sections) return null
    const access = useAuthStore(store => store.access)

  return (
    <div className="w-full flex flex-col gap-12">
        {sections?.map( section => <SectionDetail key={section.id} section={section} postId={postId}/>)}
        {access && <CreateSection postId={postId} />}
    </div>
  )
}

export default SectionsList