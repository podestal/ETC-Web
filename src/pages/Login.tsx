import { TextInput, Button } from "@tremor/react"
import { FieldValues, useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import useAuthStore from "../components/auth/Store"
import { useNavigate } from "react-router-dom"

interface TokenJWT {
    access: string,
    refresh: string,
}

const schema = z.object({
    username: z.string().min(1, {message: 'El usuario es necesario'}),
    password: z.string().min(1, {message: 'La contraseña es necesaria'})
})

type FormData = z.infer<typeof schema>

const Login = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

    const {populateAuth} = useAuthStore()

    const {mutate} = useMutation<TokenJWT, Error, FormData>({
        mutationFn: (data: FormData) => 
        axios.post('http://127.0.0.1:8000/auth/jwt/create', data)
            .then(res => res.data),
        onSuccess: (res ) => {
            populateAuth(res)
            localStorage.setItem('access', res.access)
            localStorage.setItem('refresh', res.refresh)
            navigate('/')
        },
        onError: err => console.log(err)
        
        
    })

    const onSubmit = (data: FieldValues) => {
        console.log(data)
        mutate({username: data.username, password: data.password})
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mx-auto justify-center items-center gap-12 mt-12">
        <h2 className="text-6xl mb-12">Acceder</h2>
        <div className="w-[300px] flex flex-col justify-center items-center gap-6">
            <p className="text-2xl">Usuario</p>
            <TextInput 
                {...register('username')}
                placeholder="usuario ..."
                error={errors.username ? true : false}
                errorMessage={errors.username?.message}
            />
        </div>
        <div className="w-[300px] flex flex-col justify-center items-center gap-6">
            <p className="text-2xl">Contraseña</p>
            <TextInput 
                {...register('password')}
                placeholder="contraseña ..."
                type="password"
                error={errors.password ? true : false}
                errorMessage={errors.password?.message}
            />
        </div>
        <div className="mt-8">
            <Button color="blue" ><p className="text-xl">Ingresar</p></Button>
        </div>
    </form>
  )
}

export default Login