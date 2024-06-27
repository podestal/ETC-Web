import { Dialog, DialogPanel, TextInput, Button, Callout } from "@tremor/react"
import { FieldValues, useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import useAuthStore from "../auth/Store"
import { Post } from "../../services/api/postService"
import { UseMutationResult } from "@tanstack/react-query"
import { PostData } from "../../services/api/postService"
import { useState } from "react"
import useUpdatePost from "../../hooks/posts/useUpdatePost"
import useQueryTopics from "../../hooks/topics/useTopics"
import useCreatePost from "../../hooks/posts/useCreatePost" 

interface Props {
    open: boolean,
    setOpen: (setter: boolean) => void,
    post?: Post,
    createPost?: UseMutationResult<Post, Error, PostData>
    updatePost?: UseMutationResult<Post, Error, PostData>
}

const schema = z.object({
    title: z.string().min(1, {message: 'El título es necesario'}),
    topic: z.number().min(1, {message: 'La categoría es necesaria'}),
    img_url: z.string().min(1, {message: 'La imagen es necesaria'}),
    description: z.string().min(1, {message: 'La descripción es necesaria'})
})

type FormData = z.infer<typeof schema>

const PostForm = ({ open, setOpen, post }: Props) => {

    const {data: topics} = useQueryTopics()
    const postId = post?.id
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(false)
    const {register, handleSubmit, reset, formState} = useForm<FormData>({ 
        resolver: zodResolver(schema),   
        values: {
            title: post?.title || '',
            topic: post?.topic || 0,
            img_url: post?.img_url || '',
            description: post?.description || ''
        },
    })

    const handleSuccess = () => {
        post && reset()
        setDisable(true)
        setSuccess(true)
        setError(false)
    }

    const access = useAuthStore(store => store.access)
    const createPost = useCreatePost(handleSuccess)
    const updatePost = useUpdatePost(postId, handleSuccess)

    const handleClose = () => {
        setOpen(false)
        setDisable(false)
        setSuccess(false)
        setError(false)
        reset()
    }

    const onSubmit = (data: FieldValues) => {
        !post && createPost.mutate({post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access})
        post && updatePost.mutate({post: {title: data.title, description: data.description, topic: data.topic, img_url: data.img_url}, access})
    }   

  return (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <DialogPanel className="flex w-full justify-center items-center flex-col mx-auto gap-12">
            {success && <Callout color={'teal'} title="Artículo creado"/>}
            {error && <Callout color={'red'} title="Ocurrió un error"/>}
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
                    <select
                        {...register('topic', {valueAsNumber: true})}
                        className={`bg-transparent rounded-2xl text-slate-200 w-[300px] ${formState.errors.img_url !== undefined ? 'border-red-500 bg-black' : 'border-slate-800'}`}
                    >
                        {topics?.map( topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
                    </select>
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Imagen URL</p>
                    <textarea 
                        {...register('img_url')}
                        placeholder="IMG URL"
                        className={`bg-transparent rounded-2xl w-[300px] text-slate-200 ${formState.errors.img_url !== undefined ? 'border-red-500 bg-black' : 'border-slate-800'}`}
                    />
                    <p className="text-sm text-red-500">{formState.errors.img_url?.message}</p>
                </div>
                <div className="w-[300px] flex flex-col justify-center items-center gap-6">
                    <p className="text-2xl text-slate-200">Descripción</p>
                    <textarea 
                        {...register('description')}
                        placeholder="Descripción"
                        className={`bg-transparent rounded-2xl w-[300px] text-slate-200 ${formState.errors.description !== undefined ? 'border-red-500 bg-black' : 'border-slate-800'}`}
                    />
                    <p className="text-sm text-red-500">{formState.errors.description?.message}</p>
                </div>
                <Button disabled={disable} color="blue" className="my-8 w-[230px] mx-auto"><p className="text-xl">Crear Artículo</p></Button>
            </form>
        </DialogPanel>
    </Dialog>
  )
}

export default PostForm