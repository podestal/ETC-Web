import { motion } from 'framer-motion'
import commingSoon from '../assets/imgs/courses/comming-soon.png'
import commingSoonLoading from '../assets/imgs/courses/comming-soon-s.png'
import { useState } from 'react'

const CoursesPage = () => {

  const [loading, setLoading] = useState(true)

  return (
    <motion.div 
      initial={{opacity: 0, translateY: -200}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{duration: 1.2}}
      className="w-full min-h-screen flex flex-col justify-center items-center gap-10 py-6 mt-20">
      {loading && <img src={commingSoonLoading}  className='w-full h-full object-cover rounded-3xl'/>}
      <img onLoad={() => setLoading(false)} loading='lazy' src={commingSoon} className='w-full h-[500px] object-cover rounded-3xl'/>
      <h2 className="lg:text-6xl text-4xl text-center font-montserrat">Estamos trabajando en nuestro próximo curso</h2>
    </motion.div>
  )
}

export default CoursesPage