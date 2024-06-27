import { Dialog, DialogPanel, TextInput, NumberInput, Textarea, Button } from "@tremor/react"
import { FieldValues, useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import useAuthStore from "../auth/Store"
import { Post } from "../../services/postService"
import { UseMutationResult } from "@tanstack/react-query"
import { PostData } from "../../services/postService"

interface Props {
    open: boolean,
    setOpen: (setter: boolean) => void,
    post?: Post,
    createPost?: UseMutationResult<Post, Error, PostData>
    updatePost?: UseMutationResult<Post, Error, PostData>
}

const schema = z.object({
    title: z.string().min(1, {message: 'El título es necesario'}),
    topic: z.number().default(666),
    img_url: z.string().min(1, {message: 'La imagen es necesaria'}),
    description: z.string().min(1, {message: 'La descripción es necesaria'})
})

type FormData = z.infer<typeof schema>

const PostForm = ({ open, setOpen, post, createPost, updatePost }: Props) => {

    const {register, handleSubmit, formState} = useForm<FormData>({ 
        resolver: zodResolver(schema),   
        defaultValues: {
            ...post
      }})

    const access = useAuthStore(store => store.access)

    const onSubmit = (data: FieldValues) => {
        createPost && createPost.mutate({post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access})
        updatePost && updatePost.mutate({post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access})
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
                        error={formState.errors.title ? true : false}
                        errorMessage={formState.errors.title?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Categoría</p>
                    <NumberInput 
                        {...register('topic', {valueAsNumber: true})}
                        placeholder="Categoría ..."
                        error={formState.errors.topic ? true : false}
                        errorMessage={formState.errors.topic?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Imagen URL</p>
                    <Textarea 
                        {...register('img_url')}
                        placeholder="Img url ..."
                        error={formState.errors.img_url ? true : false}
                        errorMessage={formState.errors.img_url?.message}
                    />
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Descripción</p>
                    <Textarea 
                        {...register('description')}
                        placeholder="Descripción ..."
                        error={formState.errors.description ? true : false}
                        errorMessage={formState.errors.description?.message}
                    />
                </div>
                <Button color="blue" className="my-8 w-[230px] mx-auto"><p className="text-xl">Crear Artículo</p></Button>
            </form>
        </DialogPanel>
    </Dialog>
  )
}

export default PostForm