import { Dialog, DialogPanel, TextInput, NumberInput, Textarea, Button } from "@tremor/react"
import { FieldValues, useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import useCreatePost from "../../hooks/posts/useCreatePost"
import useAuthStore from "../auth/Store"
import { Post } from "../../services/postService"

interface Props {
    open: boolean,
    setOpen: (setter: boolean) => void,
    createPost?: () => void,
}

const schema = z.object({
    title: z.string().min(1, {message: 'El título es necesario'}),
    topic: z.number().min(1, {message: 'Seleccione una categoría'}),
    img_url: z.string().min(1, {message: 'La imagen es necesaria'}),
    description: z.string().min(1, {message: 'La descripción es necesaria'})
})

type FormData = z.infer<typeof schema>

const PostForm = ({ open, setOpen }: Props) => {

    const {register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema) })
    const access = useAuthStore(store => store.access)
    const createPost = useCreatePost()

    const onSubmit = (data: FieldValues) => {
        interface PostData {
            post: Post,
            access: string
        }
        console.log({...data})
        console.log('access', access)
        createPost.mutate({post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access})
    }   

  return (
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
    >
        <DialogPanel className="flex w-full justify-center items-center flex-col mx-auto gap-12">
            <h2 className="text-4xl text-slate-200">Nuevo Artículo</h2>
            <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Título</p>
                    <TextInput 
                        {...register('title')}
                        placeholder="Tîtulo ..."
                        error={errors.title ? true : false}
                        errorMessage={errors.title?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Categoría</p>
                    <NumberInput 
                        {...register('topic', {valueAsNumber: true})}
                        placeholder="Categoría ..."
                        error={errors.topic ? true : false}
                        errorMessage={errors.topic?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Imagen URL</p>
                    <Textarea 
                        {...register('img_url')}
                        placeholder="Img url ..."
                        error={errors.img_url ? true : false}
                        errorMessage={errors.img_url?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Descripción</p>
                    <Textarea 
                        {...register('description')}
                        placeholder="Descripción ..."
                        error={errors.description ? true : false}
                        errorMessage={errors.description?.message}
                    />
                </div>
                <Button color="blue" className="my-8 w-[230px] mx-auto"><p className="text-xl">Crear Artículo</p></Button>
            </form>
        </DialogPanel>
    </Dialog>
  )
}

export default PostForm