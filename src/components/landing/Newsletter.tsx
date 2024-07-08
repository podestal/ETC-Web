import {motion} from 'framer-motion'
import { newsLetterData } from '../../data/landing'

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col  justify-start gap-16">
        <motion.h2 
            initial={{opacity: 0, translateX: -200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className="text-6xl font-montserrat text-center">Unete a nuestra newsletter</motion.h2>

        {newsLetterData.map( single => (
        <motion.div 
            initial={{opacity: 0, translateX: single.styles == 'text-left' ? -200 : 200}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 1.2}}
            className={`w-[60%] ${single.styles == 'text-left' && `self-end text-right` }`}
            key={single.title}>
                <div className='card-wrapper'>
                    <div className='card-content flex flex-col gap-6 rounded-3xl px-6 py-4'>
                        <h3 className='text-3xl font-palanquin font-bold'>{single.title}</h3>
                        <p className='text-lg'>{single.description}</p>
                    </div>
                </div>
        </motion.div>
        ))}
    </div>
  )
}

export default Newsletter