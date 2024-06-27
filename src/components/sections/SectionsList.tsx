import useQuerySection from "../../hooks/sections/useSections"
import SectionDetail from "./SectionDetail"
import CreateSection from "./CreateSection"

interface Props {
    postId: number
}

const SectionsList = ({ postId }: Props) => {

    const {data: sections, isLoading, isError, error} = useQuerySection(postId)

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div className="w-full flex flex-col gap-12">
        <CreateSection 
            postId={postId}
        />
        {sections?.map( section => <SectionDetail key={section.id} section={section}/>)}
    </div>
  )
}

export default SectionsList