import { Icon } from '@tremor/react'
import { RiDeleteBinLine } from '@remixicon/react'
import { useState } from 'react'
import DeleteForm from './DeleteForm'
import { Post } from '../../../services/api/postService'
import useDeletePost from '../../../hooks/posts/useRemovePost'

interface Props {
    post: Post
}

const DeletePost = ({ post }: Props) => {

    const [open, setOpen] = useState(false)
    const deletePost = post.id && useDeletePost(post.id)

  return (
        <>
            <Icon onClick={() => setOpen(true)} color='red' className="cursor-pointer" icon={RiDeleteBinLine} size="lg"/>  
            <DeleteForm 
                open={open}
                setOpen={setOpen}
                deletePost={deletePost || undefined}
            />
        </> 

  )
}

export default DeletePost