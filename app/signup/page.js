"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
function page() {

  const router=useRouter()
  function handleSubmit(e){
    e.preventDefault()
    console.log("data is sent to backen db")
    router.push('/signin')
  }
  return (
    <div>
      signup page
      <form onSubmit={handleSubmit}>
        <input type="text"  name='username' />
        <input type="password" name="password" />
        <button>SignUp</button>
      </form>
      
      </div>
  )
}

export default page