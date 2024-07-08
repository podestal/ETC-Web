import { motion } from 'framer-motion'
import commingSoon from '../assets/imgs/courses/comming-soon.png'

const CoursesPage = () => {
  return (
    <motion.div 
      initial={{opacity: 0, translateY: -200}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{duration: 1.2}}
      className="w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <img src={commingSoon} className='w-full h-full object-cover rounded-3xl'/>
      <h2 className="text-6xl text-center font-montserrat">Estamos trabajando en nuestro próximo curso</h2>
    </motion.div>
  )
}

export default CoursesPage