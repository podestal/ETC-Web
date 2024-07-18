import { motion } from 'framer-motion'
import reactImg from '../../assets/imgs/courses/react-course.jpg'
import reactImgLoading from '../../assets/imgs/courses/react-course-s.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Courses = () => {

    const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-[120vh] flex flex-col justify-center items-center gap-12 mt-12">
        <motion.h3 
            initial={{opacity: 0, translateY: -200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className='text-center text-7xl font-montserrat my-12 px-6'>Curso de React 19</motion.h3>
        <motion.div
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
        >
            {loading && <img 
                src={reactImgLoading} 
                alt="react-course-img" 
                className='w-[300px] lg:w-[400px] h-full rounded-3xl' 
            />}
            <img 
                src={reactImg} 
                loading='lazy' 
                alt="react-course-img" 
                className='w-[300px] lg:w-[400px] h-full rounded-3xl' 
                onLoad={() => setLoading(false)}
            />
        </motion.div>
        <motion.p 
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className='text-center text-lg font-palanquin px-6'>¡Inscríbete en nuestro curso de React JS y lleva tus habilidades al siguiente nivel! Diseñado para desarrolladores que buscan una formación completa, este curso combina sólidas bases teóricas con un enfoque en buenas prácticas y el aprendizaje práctico. Aprenderás los fundamentos de React JS y cómo aplicarlos en proyectos reales, garantizando que puedas escribir código limpio, eficiente y escalable. No te pierdas esta oportunidad de aprender haciendo y dominar una de las librerías más demandadas en el desarrollo web. ¡Reserva tu lugar ahora y transforma tu carrera!</motion.p>
        <motion.div
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
        >
            <Link to='/courses'><p className="px-6 py-2 bg-blue-700 rounded-3xl cursor-pointer hover:bg-blue-600 ">Conoce más</p></Link>    
        </motion.div>
        
    </div>
  )
}

export default Courses