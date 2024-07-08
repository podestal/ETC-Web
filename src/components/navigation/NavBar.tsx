import { Link } from "react-router-dom"
import useAuthStore from "../auth/Store"
import logo from '../../assets/imgs/etc-logo.png'

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
    <header className="">
        <nav className="flex justify-between items-center h-[100px]">
            <Link to='/'><div style={{ backgroundImage: `url(${logo})` }} className="bg-cover w-[240px] h-[120px] ml-[-25px]"/></Link>
            <ul className="flex justify-center items-center gap-28 text-xl">
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300" to='/posts'><p className="text-lg">Blog</p></Link>
                {/* <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/contact'>Contacto</Link> */}
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/courses'><p className="text-lg">Cursos</p></Link>
                {access && <Link onClick={handleLogout} to='/' className="bg-red-500 px-6 py-2 rounded-3xl font-bold hover:bg-red-400'"><p className="text-lg">Logout</p></Link>}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar