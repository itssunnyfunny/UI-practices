'use client';
import { useRef } from "react";
import { motion,useInView } from "framer-motion";


export default function ScrollAnimation({children}:{children:React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref,{
        once: true
    })
    return <motion.div
    ref={ref}
    initial={{
        opacity: 0,
        y: 50,
        x:23
    }}
    animate={isInView? {opacity:1,y:0,x:0}:{opacity:0, y:50, x:23}}
    transition={{duration: 2}}

    className=" text-6xl font-bold text-center p-6 text-rose-500 "
    >
   {children}
    </motion.div>
}

