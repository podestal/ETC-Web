import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="xl:max-w-[1280px] max-w-[850px] mx-auto">
        <nav className="flex justify-between items-center h-20 ">
            <p className="text-4xl">LOGO</p>
            <ul className="flex justify-center items-center gap-12 text-xl">
                <Link to='/'>Blog</Link>
                <Link to='/contact'>Contacto</Link>
                <Link to='/about'>Nosotros</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar