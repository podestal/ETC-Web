import { Section } from "../../services/sectionsService"

interface Props {
    section: Section
}

const SectionDetail = ({ section }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-8">
        <h3 className="text-4xl">{section.title}</h3>
    </div>
  )
}

export default SectionDetail