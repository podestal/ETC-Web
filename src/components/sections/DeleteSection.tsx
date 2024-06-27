import { RiDeleteBinLine } from '@remixicon/react'
import { Icon } from '@tremor/react'
import { useState } from 'react'
import DeleteSectionForm from './DeleteSectionForm'
import { Section } from '../../services/api/sectionsService'
import useDeleteSection from '../../hooks/sections/useRemoveSection'

interface Props {
    section: Section ,
    postId: number,
}

const DeleteSection = ({ section, postId }: Props) => {

    const [open, setOpen] = useState(false)
    const sectionId = section?.id || 0
    const deleteSection = useDeleteSection(postId, sectionId )

  return (
    <>
        <Icon onClick={() => setOpen(true)} color='red' className="cursor-pointer" icon={RiDeleteBinLine} size="lg"/> 
        <DeleteSectionForm 
            open={open}
            setOpen={setOpen}
            deleteSection={deleteSection}
        />
    </>
  )
}

export default DeleteSection