'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation'

function page() {
  const router = useRouter()
  return (
    <>
    <main className='flex min-h-screen flex-col items-center justify-center'> 
     <div className='text-4xl font-bold mb-9'>Page</div>
     <motion.button
   whileHover={{scale:1.1}}
   whileTap={{scale:0.9}}
   className="px-4 py-2 bg-blue-500 text-white rounded-md"
   onClick={()=> {router.push('/')}}
   >
   Home Page
   </motion.button>
     </main>
    </>
   
  )
}

export default page