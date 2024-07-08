import { Link } from "react-router-dom"
import useAuthStore from "../auth/Store"
import logo from '../../assets/imgs/etc-logo.png'
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { RiMenu2Fill } from "@remixicon/react"
import { Icon } from "@tremor/react"

const NavBar = () => {

    const {access, wipeAuth} = useAuthStore()
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [show, setShow] = useState(false)

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous = scrollY.getPrevious()
        if (previous && previous < latest) {
            setHidden(true)
        } else {
            setHidden(false)
        }})

    const handleLogout = () => {
        if (access.length > 0) {
            wipeAuth()
            localStorage.clear()
        }
        return
    }

  return (
    <>
        <motion.header 
        variants={{
            visible: {y:0},
            hidden: {y:'-100%'},
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}  
        className="w-full fixed lg:backdrop-blur-sm lg:bg-slate-950/60 top-0 left-0 z-50 flex justify-center items-center">
        <nav className="w-[1080px] max-lg:hidden flex justify-between items-center h-[100px]">
            <Link to='/'><div style={{ backgroundImage: `url(${logo})` }} className="bg-cover w-[240px] h-[120px]"/></Link>
            <ul className="flex justify-center items-center gap-28 text-xl">
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300" to='/posts'><p className="text-lg">Blog</p></Link>
                {/* <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/contact'>Contacto</Link> */}
                <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/courses'><p className="text-lg">Cursos</p></Link>
                {access && <Link onClick={handleLogout} to='/' className="bg-red-500 px-6 py-2 rounded-3xl font-bold hover:bg-red-400'"><p className="text-lg">Logout</p></Link>}
            </ul>
        </nav>
        {!show && <button onClick={() => {
                setHidden(true)
                setShow(true)}} className='text-slate-50 p-4 bg-slate-950 lg:hidden'><Icon color='blue' size='lg' icon={RiMenu2Fill}/></button>}
    </motion.header>
    <header>
        <AnimatePresence>
        {show &&
            <motion.nav 
                initial={{opacity: 0, translateX: 200}}
                whileInView={{opacity: 1, translateX: 0}}
                exit={{opacity: 0, translateX: 200}}
                transition={{duration: 0.8}}
                className="lg:hidden fixed z-50 backdrop-blur-md bg-slate-950/60 top-0 left-0 bg-black w-full min-h-screen">
                <ul className="flex flex-col justify-center items-center gap-12 text-xl my-10">
                    <Link to='/'><div style={{ backgroundImage: `url(${logo})` }} className="bg-cover w-[270px] h-[100px]"/></Link>
                    <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300" to='/posts'><p className="text-lg">Blog</p></Link>
                    {/* <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/contact'>Contacto</Link> */}
                    <Link className="hover:text-slate-400 hover:border-b-2 hover:border-slate-300 " to='/courses'><p className="text-lg">Cursos</p></Link>
                    {access && <Link onClick={handleLogout} to='/' className="bg-red-500 px-6 py-2 rounded-3xl font-bold hover:bg-red-400'"><p className="text-lg">Logout</p></Link>}
                    <button onClick={() => setShow(false)}>X</button>
                </ul>
            </motion.nav>
        }
        </AnimatePresence>
    </header>
    </>
  )
}

export default NavBar