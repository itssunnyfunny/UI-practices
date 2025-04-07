"use client"
import Button from '@/components/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
   const router = useRouter()
  return (
    <div >page
      <Button onClick={()=> router.push("/")}></Button>
      <button onClick={() => router.push("/")}>click here</button>
      
    </div>
  )
}

export default page