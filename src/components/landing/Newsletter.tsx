import {motion} from 'framer-motion'
import { newsLetterData } from '../../data/landing'
// import { TextInput, Button } from '@tremor/react'

const Newsletter = () => {
  return (
    <div className="min-h-[120vh] flex flex-col  justify-center gap-16">
        <motion.h2 
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className="text-6xl font-montserrat text-center my-12">Nuestro Blog</motion.h2>

        {newsLetterData.map( single => (
            <motion.div 
                initial={{opacity: 0, translateX: single.styles == 'text-left' ? -200 : 200}}
                whileInView={{opacity: 1, translateX: 0}}
                transition={{duration: 1.2}}
                className={`md:w-[60%] w-full ${single.styles == 'text-left' && `self-end text-right mx-4`}`}
                key={single.title}>
                    <div className='card-wrapper'>
                        <div className='card-content flex flex-col gap-6 rounded-3xl px-6 py-4'>
                            <h3 className='text-3xl font-palanquin font-bold'>{single.title}</h3>
                            <p className='text-lg'>{single.description}</p>
                        </div>
                    </div>
            </motion.div>
        ))}
        {/* <motion.div 
            initial={{opacity: 0, translateY: 200}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.2}}
            className='w-[60%] h-[50%] flex flex-col justify-center items-center gap-12 my-12 mx-auto'>
            <h3 className='text-6xl font-montserrat'>Suscríbete</h3>
            <div className='flex w-full justify-center items-center gap-12'>
                <TextInput type='email' placeholder='Ingresa tu correo electrónico'/>
                <Button color='blue'>Enviar</Button>
            </div>
        </motion.div> */}
    </div>
  )
}

export default Newsletter