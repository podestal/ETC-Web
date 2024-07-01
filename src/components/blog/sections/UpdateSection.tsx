import { RiEdit2Line } from '@remixicon/react'
import { Icon } from '@tremor/react'
import { useState } from 'react'
import { Section } from '../../../services/api/sectionsService'
import SectionForm from './SectionForm'

interface Props {
    section: Section
    postId: number
}

const UpdateSection = ({ section, postId }: Props) => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Icon onClick={() => setOpen(true)} className="cursor-pointer" icon={RiEdit2Line} size="lg"/>
        <SectionForm 
            open={open}
            setOpen={setOpen}
            section={section}
            postId={postId}
        />
    </>
  )
}

export default UpdateSection