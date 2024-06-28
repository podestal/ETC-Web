import { RiSaveLine } from '@remixicon/react'
import { Icon } from '@tremor/react'
import useCreateContent from '../../hooks/content/useCreateContent'
import { z } from 'zod'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import useAuthStore from '../auth/Store'
import { useState } from 'react'
import useUpdateContent from '../../hooks/content/useUpdateContent'
import { Content } from '../../services/api/contentService'

interface Props {
    sectionId: number
    postId: number,
    content?: Content
    setUpdate?:(state: boolean) => void
}

const schema = z.object({
    content: z.string().min(1, {message: 'El contenido es necesario'}),
    section: z.number()
})

type FormData = z.infer<typeof schema>

const ContentForm = ({ sectionId, postId, content, setUpdate }: Props) => {

    const contentId = content?.id
    const access = useAuthStore(store => store.access)

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const {register, handleSubmit, reset} = useForm<FormData>({resolver: zodResolver(schema), values:{
        content: content?.content || '',
        section: sectionId,
    }})

    const handleUpdate = () => {
        setUpdate(false)
    }

    const handleSuccess = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 1000)
        setError(false)
        reset()
    }

    const handleError = () => {
        setSuccess(false)
        setError(true)
    }

    const contentCreate = useCreateContent(sectionId, postId, handleSuccess, handleError)
    const contentUpdate = useUpdateContent(contentId, postId, handleUpdate)

    const onSubmit = (data: FieldValues ) => {
        !contentId && contentCreate.mutate({content: {content: data.content, section: data.section}, access })
        contentId && contentUpdate.mutate({content: {content: data.content, section: data.section}, access })
    }

  return (
    <div className="w-full flex">
        <div className='w-full flex flex-col gap-10 items-center'>
            {error && <p className="text-sm text-red-500">Ocurrió un Error</p>}
            <textarea 
                {...register('content')}
                className={`
                    p-6 text-xl bg-transparent rounded-2xl w-full h-[220px] text-slate-200 
                    ${success && 'border-green-500'}
                    ${error && 'border-red-500'}
                    ${!error && !success && 'border-slate-800'}
                `}
                placeholder="Contenido ..."
            />
        </div>
        <div className="flex flex-col justify-center items-center gap-12 mx-10">
            {/* <Icon onClick={() => console.log('Empty')} color='red' className="cursor-pointer" icon={RiDeleteBinLine} size="lg"/> */}
            <Icon onClick={handleSubmit(onSubmit)} color='blue' className="cursor-pointer" icon={RiSaveLine} size="lg"/>
        </div>
    </div>
  )
}

export default ContentForm