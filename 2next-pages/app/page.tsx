"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScrollAnimation from "@/components/ScrollAnimation";



export default function Home() {
 const router  = useRouter()
  return (
  <>
  <main className="flex min-h-screen flex-col items-center justify-center mb-[600px]">
   
   <motion.div
   initial={{opacity:0,y:-50}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.9}}
   className="text-4xl font-bold mb-8"
   >
       Welcome to Framer Motion
   </motion.div>

   <motion.button
   whileHover={{scale:1.1}}
   whileTap={{scale:0.9}}
   className="px-4 py-2 bg-blue-500 text-white rounded-md "
   onClick={()=> {router.push('/about')}}
   >
   about me
   </motion.button>
    
  </main>
  <ScrollAnimation>Hello JI what is happening</ScrollAnimation>
   <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis esse eos sed! Eligendi dolore nihil provident ratione, enim veritatis soluta necessitatibus dolorum. Quibusdam voluptates laboriosam unde laudantium aliquid ea repudiandae?
   </div>
  </>
  );
}
