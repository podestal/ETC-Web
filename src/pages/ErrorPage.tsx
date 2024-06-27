import { Link, isRouteErrorResponse } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex flex-col justify-center items-center gap-8">
        <h3 className="text-6xl text-slate-300">Oh no ...</h3>
        <p className="text-4xl text-slate-300">{isRouteErrorResponse(error) ? 'Ocurrió un error' : 'Esta página no existe'} </p>
        <Link className="text-3xl text-slate-300 bg-slate-900 px-8 py-4 rounded-3xl hover:bg-slate-800" to='/'>Volver</Link>
    </div>
  )
}

export default ErrorPage