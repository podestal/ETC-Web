import NavBar from "../components/navigation/NavBar"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-slate-950 text-slate-200">
        <NavBar />
      <div className="xl:max-w-[1280px] max-w-[850px] mx-auto py-10">
        <Outlet />
      </div>
    </div>
  )
}

export default HomePage