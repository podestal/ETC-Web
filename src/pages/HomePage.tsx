import Courses from "../components/landing/Courses"
import Hero from "../components/landing/Hero"
import Newsletter from "../components/landing/Newsletter"

const HomePage = () => {

  return (
    <div className="w-[100%] bg-slate-950 text-slate-200">
        <Hero />
        <Newsletter />
         <Courses />
    </div>
  )
}

export default HomePage