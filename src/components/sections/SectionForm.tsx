import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { Dialog, DialogPanel, TextInput, Button, Callout } from "@tremor/react"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import useCreateSection from "../../hooks/sections/useCreateSection"
import useAuthStore from "../auth/Store"
import { useState } from "react"
import { Section } from "../../services/api/sectionsService"
import useUpdateSection from "../../hooks/sections/useUpdateSection"

interface Props {
    postId: number,
    section?: Section,
    open: boolean,
    setOpen: (state: boolean) => void
}

const schema = z.object({
    title: z.string().min(1, {message: 'El título es necesario'}),
    postId: z.number()
})

type FormData = z.infer<typeof schema>

const SectionForm = ({ postId, open, setOpen, section } : Props) => {

    // ERROR HANDLING
    const [disable, setDisable] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const {register, handleSubmit, reset, formState} = useForm<FormData>({resolver: zodResolver(schema), values:{
        postId: postId,
        title: section?.title || ''
    }})


    const handleSuccess = () => {
        // post && reset()
        reset()
        setDisable(true)
        setSuccess(true)
        setError(false)
    }

    const handleClose = () => {
        setOpen(false)
        setDisable(false)
        setSuccess(false)
        setError(false)
        reset()
    }

    const sectionCreate = useCreateSection(postId, handleSuccess)
    const sectionUpdate = useUpdateSection(postId, section?.id || 0, handleSuccess)
    const access = useAuthStore(store => store.access)

    const onSubmit = (data: FieldValues) => {
        !section && sectionCreate.mutate({ section: {title: data.title, post: data.postId}, access })
        section && sectionUpdate.mutate({ section: {title: data.title}, access })
    }

  return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            
            <DialogPanel>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12 justify-center items-center">
                    {success && <Callout color={'teal'} title="Sección creada"/>}
                    {error && <Callout color={'red'} title="Ocurrió un error"/>}
                    <h2 className="text-slate-200 text-3xl">Nueva Sección</h2>
                    <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                        <p className="text-2xl text-slate-200">Título</p>
                        <TextInput 
                            {...register('title')}
                            placeholder="Tîtulo ..."
                            error={formState.errors.title ? true : false}
                            errorMessage={formState.errors.title?.message}
                        />
                    </div>
                    <Button disabled={disable} color="blue"><p className="text-xl">Crear</p></Button>
                </form>
            </DialogPanel>
        </Dialog>
  )
}

export default SectionForm