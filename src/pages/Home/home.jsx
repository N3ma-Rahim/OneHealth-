import React, { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        localStorage.setItem('role','guest');
    },[])
  return (
    <div>
      this is home page
    </div>
  )
}
