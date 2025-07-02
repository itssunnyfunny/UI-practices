
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Basic = () => {
  const [isvisible, setIsvisible] = useState(true);
  return (
    <div className= ' h-screen w-full flex flex-col justify-center items-center gap-2'>
       <button
        className=' bg-purple-500 text-white text-xl rounded-md border-none px-2 py-1 cursor-pointer'
        onClick={()=> setIsvisible((e)=>!e)}
        >Hide/show</button>
        <AnimatePresence>
        {isvisible &&   <motion.div 
        initial = {{
          rotate: '0deg',
          scale: 0
        }}
        animate = {{
          rotate: '180deg',
          scale: 1
        }}
        
        exit={{
          rotate: '0deg',
          scale: 0
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
       className=' w-20 h-20 bg-black '>

      </motion.div>
        }
        </AnimatePresence>
    
    </div>
  )
}

export default Basic