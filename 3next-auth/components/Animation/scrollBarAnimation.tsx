'use client'
import {useRef} from 'react';
import { motion ,useInView} from 'framer-motion';


export default function ScrollAnimation({children}:{children:React.ReactNode}){
         const ref = useRef(null);
         const inView = useInView(ref,{
            once:true
         })


         return <motion.div
         ref={ref}
         initial={{opacity:0, y:-50}}
         animate={inView? {opacity:1, y:0}: {opacity:0,y:-50}}
          transition={{duration:2}}
         >
          {children}
         </motion.div>
}