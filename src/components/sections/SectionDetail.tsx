import { Section } from "../../services/api/sectionsService"

interface Props {
    section: Section
}

const SectionDetail = ({ section }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-8">
        <h3 className="text-5xl font-bold">{section.title}</h3>
        {section?.content?.map( cont => <p className="text-2xl leading-[3.2rem]" key={cont.id}>{cont.content}</p>)}
    </div>
  )
}

export default SectionDetail