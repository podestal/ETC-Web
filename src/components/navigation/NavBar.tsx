import { Link } from "react-router-dom"
import useAuthStore from "../auth/Store"

const NavBar = () => {

    const {access, wipeAuth} = useAuthStore()

    const handleLogout = () => {
        if (access.length > 0) {
            wipeAuth()
            localStorage.clear()
        }
        return
    }

  return (
    <header className="xl:max-w-[1280px] max-w-[850px] mx-auto">
        <nav className="flex justify-between items-center h-20">
            <Link to='/'><p className="text-4xl">LOGO</p></Link>
            <ul className="flex justify-center items-center gap-28 text-xl">
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/posts'>Blog</Link>
                {/* <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/contact'>Contacto</Link> */}
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/courses'>Cursos</Link>
                {access && <Link onClick={handleLogout} to='/' className="bg-red-500 px-6 py-2 rounded-3xl font-bold hover:bg-red-400'">Logout</Link>}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar