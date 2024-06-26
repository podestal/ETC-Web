import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import NavBar from "../components/navigation/NavBar"
import Footer from "../components/navigation/Footer"
import useAuthStore from "../components/auth/Store"

const Index = () => {

    const localAccess = localStorage.getItem('access')
    const localRefresh = localStorage.getItem('refresh')
    const {access, populateAuth} = useAuthStore()

    useEffect(() => {
        if (localAccess && localRefresh) {
            if(access.length === 0) {
                populateAuth({access: localAccess, refresh: localRefresh})
            }
        }
    }, [])

  return (
    <div className="w-[100%] bg-slate-950 text-slate-200">
        <div className="relative z-10">
            <NavBar />
        </div>
        <div className="xl:max-w-[1280px] min-h-[100vh] max-w-[850px] mx-auto">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Index