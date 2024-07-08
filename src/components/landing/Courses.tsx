import { motion } from 'framer-motion'
import reactImg from '../../assets/imgs/courses/react-curso.png'

const Courses = () => {
  return (
    <div className="min-h-[200vh] flex flex-col justify-center items-center gap-12 mt-12">
        <motion.h3 
            initial={{opacity: 0, translateY: -200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className='text-center text-7xl font-montserrat my-12'>Curso de React 19</motion.h3>
        <motion.img 
            src={reactImg} 
            loading='lazy' 
            alt="react-course-img" 
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className='w-full h-full rounded-3xl' />
            
        <motion.p 
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className='text-center text-lg font-palanquin'>¡Inscríbete en nuestro curso de React JS y lleva tus habilidades al siguiente nivel! Diseñado para desarrolladores que buscan una formación completa, este curso combina sólidas bases teóricas con un enfoque en buenas prácticas y el aprendizaje práctico. Aprenderás los fundamentos de React JS y cómo aplicarlos en proyectos reales, garantizando que puedas escribir código limpio, eficiente y escalable. No te pierdas esta oportunidad de aprender haciendo y dominar una de las librerías más demandadas en el desarrollo web. ¡Reserva tu lugar ahora y transforma tu carrera!</motion.p>
    </div>
  )
}

export default Courses