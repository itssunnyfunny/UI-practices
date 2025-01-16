'use client'

import {motion} from 'framer-motion'

export default function Button({
    children = 'Btn',
    bgColor = 'bg-indigo-600',
    fontWeight = 'font-thin',
    textSize = 'text-xs'
  
  }) {
     return <motion.button
     initial={{opacity:1}}
     whileHover={{scale:1.1,opacity:0.9}}
     whileTap={{scale: 0.9, opacity:1}}
     className={` py-3 px-10 rounded-3xl border text-center opacity-80 ${fontWeight} ${bgColor} ${textSize} text-white  `}
     >
     
        {children}
     
      </motion.button>
  }