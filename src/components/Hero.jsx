import { motion } from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';

const Hero = () => {
  return (
    
<section className={`relative w-full h-screen mx-auto`}>
  
      <ComputersCanvas />
      
      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href = '#about'>
          <div className= 'w-[20px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
           
            animate = {{
              y: [0,24,0]
            }}
            transition = {{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-1 h-1 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

     

    </section>
  )
}

export default Hero
