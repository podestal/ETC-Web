import { Section } from "../../services/api/sectionsService"
import useAuthStore from "../auth/Store"
import DeleteSection from "./DeleteSection"

interface Props {
    section: Section
    postId: number
}

const SectionDetail = ({ section, postId }: Props) => {

    const access = useAuthStore(store => store.access)

  return (
    <div className="w-full flex flex-col justify-center items-start gap-8">
        <div className="flex gap-8 items-center">
            {access && <DeleteSection section={section} postId={postId}/>}
            <h3 className="text-5xl font-bold">{section.title}</h3>
        </div>
        {section?.content?.map( cont => <p className="text-2xl leading-[3.2rem]" key={cont.id}>{cont.content}</p>)}
    </div>
  )
}

export default SectionDetail