import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { Dialog, DialogPanel, TextInput, Button } from "@tremor/react"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import useCreateSection from "../../hooks/sections/useCreateSection"
import useAuthStore from "../auth/Store"

interface Props {
    postId: number,
    open: boolean,
    setOpen: (state: boolean) => void
}

const schema = z.object({
    title: z.string().min(1, {message: 'El título es necesario'}),
    postId: z.number()
})

type FormData = z.infer<typeof schema>

const SectionForm = ({ postId, open, setOpen } : Props) => {

    const {register, handleSubmit, formState} = useForm<FormData>({resolver: zodResolver(schema), values:{
        postId,
        title: ''
    }})

    const sectionCreate = useCreateSection(postId)
    const access = useAuthStore(store => store.access)

    const onSubmit = (data: FieldValues) => {
        console.log('data', data)
        // post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access
        sectionCreate.mutate({ section: {title: data.title, post: data.postId}, access })
    }

  return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            
            <DialogPanel>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12 justify-center items-center">
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
                    <Button color="blue"><p className="text-xl">Crear</p></Button>
                </form>
            </DialogPanel>
        </Dialog>
  )
}

export default SectionForm