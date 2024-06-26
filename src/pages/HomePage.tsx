import NavBar from "../components/navigation/NavBar"
import Footer from "../components/navigation/Footer"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-slate-950 text-slate-200">
        <NavBar />
        <div className="xl:max-w-[1280px] min-h-[100vh] max-w-[850px] mx-auto py-10">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default HomePage